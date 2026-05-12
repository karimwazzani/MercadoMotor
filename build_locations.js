const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('C:\\Users\\karim\\Downloads\\Listado de Localidades.xlsm');
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const data = xlsx.utils.sheet_to_json(sheet);

const locationMap = {};

for (const row of data) {
    let loc = row['Localidad'] ? row['Localidad'].toString().trim().toUpperCase() : 'OTRO';
    let mun = row['Municipio'] ? row['Municipio'].toString().trim().toUpperCase() : 'OTRO';
    let prov = row['Provincia'] ? row['Provincia'].toString().trim().toUpperCase() : 'OTRO';

    if (!locationMap[prov]) locationMap[prov] = {};
    if (!locationMap[prov][mun]) locationMap[prov][mun] = new Set();
    
    locationMap[prov][mun].add(loc);
}

// Convert Sets to sorted arrays, sort keys
const sortedProvKeys = Object.keys(locationMap).sort();
const sortedLocationMap = {};

for (const prov of sortedProvKeys) {
    sortedLocationMap[prov] = {};
    const sortedMunKeys = Object.keys(locationMap[prov]).sort();
    for (const mun of sortedMunKeys) {
        sortedLocationMap[prov][mun] = Array.from(locationMap[prov][mun]).sort();
    }
}

const outputStr = JSON.stringify(sortedLocationMap, null, 2);
const outputCode = `export const LOCATION_DATA: { [provincia: string]: { [municipio: string]: string[] } } = ${outputStr};`;

let content = fs.readFileSync('src/lib/constants.ts', 'utf8');

// Replace PROVINCES_DATA with LOCATION_DATA, or add it if not exists.
if (content.includes('export const PROVINCES_DATA')) {
    content = content.replace(/export const PROVINCES_DATA[^;]+;/, outputCode);
} else {
    content += '\n' + outputCode;
}

fs.writeFileSync('src/lib/constants.ts', content);
console.log("Successfully generated LOCATION_DATA in constants.ts");
