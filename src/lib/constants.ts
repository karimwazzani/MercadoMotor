
export const CATEGORIES = [
  "Autos",
  "Camionetas / SUV",
  "Chocado",
  "De colección",
  "Lanchas / Yate / Barco",
  "Moto / UTV / Cuatriciclo",
  "Trailer"
].sort();

export const COLORS = [
  "Amarillo",
  "Azul",
  "Beige",
  "Blanco",
  "Bordo",
  "Crema",
  "Dorado",
  "Gris",
  "Marrón",
  "Naranja",
  "Negro",
  "Plata",
  "Rojo",
  "Verde",
  "Violeta",
  "Otro"
].sort((a, b) => a === "Otro" ? 1 : b === "Otro" ? -1 : a.localeCompare(b));

export const DOORS = ["2", "3", "4", "5", "6 o más"];

export const YEARS = Array.from({ length: 2026 - 1900 + 1 }, (_, i) => (2026 - i).toString());

export const LOCATION_DATA: { [provincia: string]: { [municipio: string]: string[] } } = {
  "BUENOS AIRES": {
    "25 DE MAYO": [
      "25 DE MAYO",
      "AGUSTIN MOSCONI",
      "ANDERSON",
      "ARAUJO",
      "BAUDRIX",
      "DEL VALLE",
      "EL CHIMBORAZO",
      "EL CLAVO",
      "EL MATE",
      "EL SOSIEGO",
      "ERNESTINA",
      "FORTIN MULITAS",
      "GOBERNADOR UGARTE",
      "HUETEL",
      "ISLAS",
      "LA CANTORA",
      "LA LLOSA Y EL MATE",
      "LA PALMA",
      "LA TRIBU CHICA",
      "LAS MERCEDES",
      "LUCAS MONTEVERDE",
      "MAMAGUITA",
      "MARTIN BERRAONDO",
      "NORBERTO DE LA RIESTRA",
      "PANELO",
      "PEDERNALES",
      "PUEBLITOS",
      "PUESTO COLORADO",
      "SAN ENRIQUE",
      "SAN MARCELO",
      "SAN RAMON",
      "SANTIAGO GARBARINI",
      "SOLACHE",
      "VALDES",
      "VILLA MARTA"
    ],
    "9 DE JULIO": [
      "12 DE OCTUBRE",
      "9 DE JULIO",
      "ALFREDO DEMARCHI",
      "BACACAY",
      "CAMBACERES",
      "CAMPO LISAZO",
      "CARLOS MARIA NAON",
      "COLONIA LA RURAL",
      "CORBETT",
      "DUDIGNAC",
      "EL CHAJA",
      "EL ESPARTILLAR",
      "EL FAISAN",
      "EL HINOJO",
      "EL JABALI",
      "EL SOCAVON",
      "EL TEJAR",
      "FAUZON",
      "GALO LLORENTE",
      "GERENTE CILLEY",
      "KILOMETRO 234",
      "LA AMALIA",
      "LA AURORA",
      "LA BLANQUEADA",
      "LA CENTRAL",
      "LA CORONA",
      "LAS PIEDRAS",
      "LOS PARAISOS",
      "MANUEL B. GONNET",
      "MARCELINO UGARTE",
      "MOREA",
      "MULCAHY",
      "NORUMBEGA",
      "PATRICIOS",
      "SAN JUAN",
      "SANTOS UNZUE",
      "VILLA GENERAL FOURNIER"
    ],
    "ADOLFO ALSINA": [
      "ARANO",
      "ARTURO VATTEONE",
      "AVESTRUZ",
      "CANONIGO GORRITI",
      "CARHUE",
      "COLONIA LAPIN",
      "COLONIA LEVEN",
      "COLONIA SAN MIGUEL ARCANGEL",
      "DELFIN HUERGO",
      "ESPARTILLAR",
      "ESTACION LA CONCEPCION",
      "ESTEBAN AGUSTIN GASCON",
      "LA CONQUISTA",
      "LA PALA",
      "LA POROTA",
      "LA SAL",
      "LAGO EPECUEN",
      "LEUBUCO",
      "MASALLE",
      "MAZA",
      "RIVERA",
      "SAN MARCOS",
      "SANTA ANITA",
      "THAMES",
      "TRES LAGUNAS",
      "VILLA MARGARITA",
      "YUTUYACO"
    ],
    "ADOLFO GONZALES CHAVES": [
      "ADOLFO GONZALES CHAVES",
      "ALZAGA",
      "CHAPAR",
      "DE LA GARMA",
      "EL LUCERO",
      "EL POLEO",
      "JUAN E. BARRA",
      "LA EMMA",
      "LA HISPANO ARGENTINA",
      "LA SORTIJA",
      "LOS FACHINALES",
      "MAULEON",
      "SAN FRANCISCO",
      "SANTA CLARA",
      "SANTA MARIA",
      "VASQUEZ"
    ],
    "ALBERTI": [
      "ALBERTI",
      "BAUDRIX",
      "CORONEL SEGUI",
      "CUARTEL V",
      "CUARTEL VI",
      "EL RECUERDO",
      "LARREA",
      "MECHITA",
      "PLA",
      "PRESIDENTE QUINTANA",
      "VILLA GRISOLIA",
      "VILLA MARIA",
      "VILLA ORTIZ"
    ],
    "ALMIRANTE BROWN": [
      "ADROGUE",
      "BURZACO",
      "CLAYPOLE",
      "DON ORIONE",
      "GLEW",
      "JOSE MARMOL",
      "LONGCHAMPS",
      "MALVINAS ARGENTINAS",
      "MINISTRO RIVADAVIA",
      "RAFAEL CALZADA",
      "SAN FRANCISCO SOLANO",
      "SAN JOSE"
    ],
    "ARRECIFES": [
      "ARRECIFES",
      "ARROYO BURGOS",
      "BRISAS ALEGRES",
      "EL AMANECER",
      "EL CONTADOR",
      "EL NACIONAL",
      "LA BRANQUEADA",
      "LA DELIA",
      "LA LUISA",
      "LA NELIDA",
      "LAS SARITAS",
      "MONTE LAVALLE",
      "SAN FRANCISCO",
      "TODD",
      "VIÑA"
    ],
    "AVELLANEDA": [
      "AREA CINTURON ECOLOGICO",
      "AVELLANEDA",
      "CRUCESITA",
      "DOCK SUD",
      "GERLI",
      "PIÑEYRO",
      "SARANDI",
      "VILLA DOMINICO",
      "WILDE"
    ],
    "AYACUCHO": [
      "AYACUCHO",
      "CANGALLO",
      "CHACRAS DE BALESTRA",
      "CUARTEL II",
      "EL BOQUERON",
      "EL CARMEN",
      "EL CHEFORO",
      "EL HINOJAL",
      "EL PORVENIR",
      "ESQUINA LARUMBE",
      "ESTACION JUNCALITO",
      "ESTACION NAVAS",
      "ESTANCIA LANGUEYU",
      "FAIR",
      "JUAN BAUTISTA",
      "LA BELGICA",
      "LA BLANQUEADA",
      "LA CONSTANCIA",
      "LA FLORIDA",
      "LA GARITA",
      "LA LIMPIA",
      "LA LLEGADA",
      "LA POSTA",
      "LA PROTEGIDA",
      "LA SULTANA",
      "LANGUEYU",
      "LAS ARMAS",
      "LAS CHILCAS",
      "LAS LAGUNAS",
      "LAS PAJAS",
      "LAS PIEDRAS",
      "LOMA DE SANDERS",
      "OTEGUI",
      "POZO DEL FUEGO",
      "SAN IGNACIO",
      "SAN JOSE",
      "SAN JUSTO",
      "SAN LAUREANO",
      "SAN PASTOR",
      "SOLANET",
      "UDAQUIOLA"
    ],
    "AZUL": [
      "16 DE JULIO",
      "ARIEL",
      "ARROYO DE LOS HUESOS",
      "ATALAYA",
      "AZUL",
      "CACHARI",
      "CAMPO MIREZTKY",
      "CAMPOMAR",
      "CHILLAR",
      "EL DESTIERRO",
      "LA ANGELITA",
      "LA CHUMBEADA",
      "LA COLORADA",
      "LA ISABELITA",
      "LA JUANITA",
      "LA MANTEQUERIA",
      "LA MATILDE",
      "LA PEQUEÑA",
      "LA PRIMAVERA",
      "LA PROTEGIDA",
      "LA SOFIA",
      "LA VERDE",
      "LAS CORTADERAS",
      "LAS ROSAS",
      "LOS 4 CAMINOS",
      "LOS ANGELES",
      "MANANTIALES DE PEREDA",
      "MARTIN FIERRO",
      "MATADEROS",
      "MIRAMONTE",
      "NIEVES",
      "PABLO ACOSTA",
      "PARISH",
      "SAN JOSE",
      "SAN PEDRO",
      "SANTA CLARA",
      "SHAW",
      "SIEMPRE AMIGOS",
      "VICENTE PEREDA",
      "VILLA LAZA"
    ],
    "BAHIA BLANCA": [
      "ALDEA ROMANA",
      "ALFEREZ SAN MARTIN",
      "BAHIA BLANCA",
      "CABILDO",
      "COCHRANE",
      "GENERAL DANIEL CERRI",
      "GRÑNBEIN",
      "INGENIERO WHITE",
      "LA CARRINDANGA",
      "LA HORMIGA",
      "LOS MIRASOLES",
      "POSTA ROLANDO",
      "PUERTO GALVAN",
      "SAN JOSE",
      "VILLA BORDEAU",
      "VILLA ELISA",
      "VILLA ESPORA",
      "VILLA OLGA"
    ],
    "BALCARCE": [
      "ALELUYA",
      "BALCARCE",
      "BELLA VISTA",
      "BOSCH",
      "CABAÑA SAN JUAN",
      "CINCO CERROS",
      "COLONIA BALCARCE",
      "CUARTEL III",
      "EL CAPRICHO",
      "EL CERRO",
      "EL GLIPTODONTE",
      "EL PANTANOSO",
      "EL PARQUE",
      "EL VERANO",
      "EL VIGILANTE",
      "EL VOLCAN",
      "ESQ DE LAHITTE",
      "ESTACION LA ALBORADA",
      "JUAN VICENTY",
      "LA ADELA",
      "LA DELIA",
      "LA ESPERANZA",
      "LA PALOMA",
      "LA SARA",
      "LLANOS",
      "LOS CARDOS",
      "LOS PINOS",
      "NAPALEOFU",
      "PUERTA DEL ABRA",
      "RAMOS OTERO",
      "SAN AGUSTIN",
      "SAN ALBERTO",
      "SAN SILVERIO",
      "SAN SIMON",
      "TRES ESQUINAS",
      "TRES LOMAS",
      "VILLA LAGUNA LA BRAVA"
    ],
    "BARADERO": [
      "BARADERO",
      "CAMINO A VILLA ALSINA",
      "CAÑADA DE LOS TOROS",
      "CAÑADA GRANDE",
      "COLONIA SUIZA",
      "EL CABALLITO",
      "EL CABALLITO CHICO",
      "EL MARTILLO",
      "EL TRIANGULO",
      "IRINEO PORTELA",
      "ISLA LOS LAURELES",
      "LA BELLACA",
      "LA PALOMA",
      "LA TORTUGA",
      "SAENZ VALIENTE",
      "SANTA COLOMA",
      "VILLA ALSINA",
      "VUELTA DE LOS PASTOS"
    ],
    "BENITO JUAREZ": [
      "BARKER",
      "BENITO JUAREZ",
      "CORONEL RODOLFO BUNGE",
      "EL LUCHADOR",
      "EL SAUCE",
      "KILOMETRO 404",
      "LA TINTA",
      "LOPEZ",
      "SAN ANTONIO",
      "TEDIN URIBURU",
      "VILLA CACIQUE"
    ],
    "BERAZATEGUI": [
      "BERAZATEGUI",
      "BERAZATEGUI OESTE",
      "CARLOS TOMAS SOURIGUES",
      "EL PATO",
      "ESTACION PEREYRA",
      "GUILLERMO ENRIQUE HUDSON",
      "JUAN MARIA GUTIERREZ",
      "PEREYRA",
      "PLATANOS",
      "RANELAGH",
      "VILLA ESPAÑA"
    ],
    "BERISSO": [
      "BARRIO BANCO PROVINCIA",
      "BARRIO EL CARMEN (ESTE)",
      "BARRIO UNIVERSITARIO",
      "BERISSO",
      "ISLA PAULINO",
      "LA HERMOSURA",
      "LOS TALAS",
      "VILLA ARGÑELLO",
      "VILLA DOLORES",
      "VILLA INDEPENDENCIA",
      "VILLA NUEVA",
      "VILLA PORTEÑA",
      "VILLA PROGRESO",
      "VILLA SAN CARLOS",
      "VILLA ZULA"
    ],
    "BOLIVAR": [
      "30 DE DICIEMBRE",
      "AVELLANEDA",
      "BOSCABEL",
      "CAMPO CAPECCE",
      "CAMPO CREADO",
      "CAMPO LANDO",
      "EL 43",
      "EL CABILDO",
      "EL PORVENIR",
      "EL SOMBRERITO",
      "HALE",
      "JUAN F. IBARRA",
      "LA CAROLINA",
      "LA MATILDE",
      "LA MERCED",
      "LA PROTECTORA",
      "LA VIZCAINA",
      "LOS 4 VIENTOS",
      "MARIANO UNZUE",
      "MARSIGLIO",
      "MIRAMAR",
      "PAULA",
      "PIROVANO",
      "SAN ANDRES",
      "SAN CARLOS DE BOLIVAR",
      "SAN EMILIO",
      "SAN LUIS",
      "SANTA MARIA",
      "UNIDAD PENAL DE URDAMPILLETA",
      "URDAMPILLETA",
      "VALLIMANCA",
      "VILLA LYNCH PUEYRREDON",
      "VILLA SANZ"
    ],
    "BRAGADO": [
      "ASAMBLEA",
      "BRAGADO",
      "CAMPO DE RIANO",
      "COMODORO PY",
      "CUARTEL II",
      "EL MATACO",
      "GENERAL O'BRIEN",
      "IRALA",
      "LA BLANQUEDA",
      "LA CRIOLLA",
      "LA LIMPIA",
      "LA MARIA",
      "MAXIMO FERNANDEZ",
      "MECHITA",
      "OLASCOAGA",
      "RAUCH NUEVO",
      "RAUCH VIEJO",
      "SANTA ROSA",
      "SANTO DOMINGO",
      "WARNES"
    ],
    "BRANDSEN": [
      "ALTAMIRANO",
      "BARRIO EL MIRADOR",
      "BARRIO LAS GOLONDRINAS",
      "BARRIO LOS BOSQUECITOS",
      "BARRIO PARQUE LAS ACACIAS",
      "BUCHANAN",
      "CAMPO PORTU",
      "CAMPOS DE ROCA",
      "CLUB DE CAMPO LAS MALVINAS",
      "CORONEL BRANDSEN",
      "CUARTEL II",
      "EL CHAJA",
      "GOBERNADOR OBLIGADO",
      "GOMEZ",
      "JEPPENER",
      "LA PARADA",
      "LA PEPITA",
      "LA POSADA",
      "OLIDEN",
      "POSADA DE LOS LAGOS",
      "RUTA 29 KM 2",
      "SAMBOROMBON"
    ],
    "CAMPANA": [
      "ALTO LOS CARDALES",
      "BARRIO LOS PIONEROS",
      "BLONDEAU",
      "CAMPANA",
      "CHACRAS DEL RIO LUJAN",
      "EL MOREJON",
      "ESTACION ESPERIMENTAL DELTA DEL PARANA",
      "ISLA TALAVERA",
      "LA GRANJA",
      "LOMAS DEL RIO LUJAN"
    ],
    "CAPITAN SARMIENTO": [
      "ARROYO DE LUNA",
      "CAPITAN SARMIENTO",
      "EL DESCANSO",
      "LA COLORADA",
      "LA LUISA"
    ],
    "CARLOS CASARES": [
      "BELLOCQ",
      "CADRET",
      "CARLOS CASARES",
      "CENTENARIO",
      "COLONIA LA PIEDRA",
      "COLONIA MAURICIO",
      "COLONIA SANTA MARIA",
      "EL BILLAR",
      "EL SEPTIMO",
      "GOBERNADOR ARIAS",
      "HORTENSIA",
      "LA DORITA",
      "LA SOFIA",
      "LAS CHACRAS",
      "MAURICIO HIRSCH",
      "MOCTEZUMA",
      "ORDOQUI",
      "SANTO TOMAS",
      "SMITH"
    ],
    "CARLOS TEJEDOR": [
      "BELLA VISTA",
      "CAMPO MERLO",
      "CARLOS TEJEDOR",
      "COLONIA SERE",
      "CURARU",
      "DRYSDALE",
      "EL RETIRO",
      "EL TORO",
      "ENCINA",
      "ESTEBAN DE LUCA",
      "HEREFORD",
      "HUSARES",
      "JUSTET",
      "LA ARGENTINA",
      "LA DIANA",
      "LA MANUELA",
      "LA TROCHA",
      "LOS ALAMOS",
      "SAN MARTIN",
      "SANTA INES",
      "TIMOTE",
      "TIMOTE CHICO",
      "TRES ALGARROBOS"
    ],
    "CARMEN DE ARECO": [
      "CARMEN DE ARECO",
      "CUARTEL I",
      "CUARTEL VI",
      "CUARTEL VII",
      "ESCOBEDO",
      "EX-SANTAMARINA",
      "KENNY",
      "LA CENTRAL",
      "LA CRIOLLA",
      "PUEBLO GOUIN",
      "TATAY",
      "TRES SARGENTOS"
    ],
    "CASTELLI": [
      "ABETHUR",
      "ALMACEN AROSA",
      "CASTELLI",
      "CENTRO GUERRERO",
      "CERRO DE LA GLORIA (CANAL 15)",
      "EL ARAZA",
      "EL CALLEJON",
      "EL MANANTIAL",
      "EL TRIANGULO",
      "LA CALIFORNIA",
      "LA CORINA",
      "LA INDIA MUERTA",
      "LA REDUCCION",
      "LA SALADA",
      "LAS TORTUGAS",
      "LOS ALTOS VERDES",
      "LOS MOLLES"
    ],
    "CAÑUELAS": [
      "ALEJANDRO PETION",
      "BARRIO BELGRANO",
      "BARRIO EL TALADRO",
      "CAÑUELAS",
      "CUARTEL XV",
      "EL DESLINDE",
      "ESTANCIA LA PRIMAVERA",
      "GOBERNADOR UDAONDO",
      "LA LEONOR",
      "LA NORIA",
      "LA TAPIE",
      "LAS PALMITAS",
      "LOS ALAMOS",
      "MAXIMO PAZ",
      "SAN ANTONIO",
      "SANTA ROSA",
      "URIBELARREA",
      "VICENTE CASARES",
      "VILLA VISSIR"
    ],
    "CHACABUCO": [
      "CASTILLA",
      "CHACABUCO",
      "CIRCUNSCRIPCION I SERIE H",
      "COLIQUEO",
      "CUARTEL I",
      "CUARTEL IV",
      "CUCHA CUCHA",
      "EL TEJADO",
      "INGENIERO SILVEYRA",
      "LA DELIA",
      "LA TABLADA",
      "LA VERDE",
      "LA VICTORIA",
      "LAS CAÑAS",
      "LOS ANGELES",
      "MEDANOS BLANCOS",
      "MEMBRILLAR",
      "O'HIGGINS",
      "RAWSON",
      "RUTA NACIONAL 7 KM 205",
      "SAN PATRICIO",
      "SAN VICENTE",
      "SAUCE VERDE"
    ],
    "CHASCOMUS": [
      "9 DE JULIO",
      "ADELA",
      "BARRIO LOMAS ALTAS",
      "BARRIO SAN CAYETANO",
      "CHASCOMUS",
      "COMANDANTE GIRIBONE",
      "CUATRO DE FEBRERO",
      "DON CIPRIANO",
      "EL BOTE",
      "EL RECREO",
      "EL SOLITO",
      "ESTANCIA EL COATI",
      "ESTANCIA SAN CEFERINO",
      "GANDARA",
      "JUANCHO",
      "LA CORONA",
      "LA GRANJA",
      "LA HORQUETA",
      "LA JUANITA",
      "LAGUNA VITEL",
      "LIBRES DEL SUD",
      "LOS CERRILLOS",
      "LOS JAGÑELES",
      "MANANTIALES",
      "PUERTA DEL DIABLO",
      "SAN GREGORIO",
      "SAN NICANOR",
      "VALLE SANTA ANTA",
      "VILLA PARQUE GIRADO",
      "VIVERO NACIONAL"
    ],
    "CHIVILCOY": [
      "BENITEZ",
      "CAMPO DE BARDENGO",
      "CAMPO ZACARDI",
      "CHIVILCOY",
      "CUARTEL III",
      "CUARTEL VI",
      "CUARTEL VIII",
      "DE LUCA",
      "EL PORVENIR",
      "EMILIO AYARZA",
      "GOROSTIAGA",
      "HENRY BELL",
      "INDACOCHEA",
      "LA ARMONIA",
      "LA CARLOTA",
      "LA COLORADA",
      "LA RICA",
      "LA UNION",
      "LOS COPETES",
      "MOQUEHUA",
      "PALEMON HUERGO",
      "PASAJE EL PALOMAR",
      "PICHEUTA",
      "PUENTE LAGO",
      "RAMON BIAUS",
      "SAN CARLOS",
      "SAN SEBASTIAN",
      "SANTA ISABEL",
      "SECCION PRIMERA QUINTAS",
      "WITTE"
    ],
    "COLON": [
      "COLON",
      "COLONIA LA PERLA",
      "EL ARBOLITO",
      "LOS BARRILES",
      "PEARSON",
      "SARASA"
    ],
    "CORONEL DE MARINA L ROSALES": [
      "B.N.I.M BATERIAS",
      "BAJO HONDO",
      "BALNEARIO PEHUEN CO",
      "CALDERON",
      "CAMPO ESCUDERO",
      "CAMPO SAN VICENTE",
      "CORONEL ROSALES",
      "LAS OSCURAS",
      "PAGO CHICO",
      "PUNTA ALTA",
      "VILLA DEL MAR",
      "VILLA GENERAL ARIAS"
    ],
    "CORONEL DORREGO": [
      "APARICIO",
      "BALNEARIO MARISOL",
      "CALVO",
      "CENTRO URQUIZA",
      "CORONEL DORREGO",
      "CUARTEL II",
      "EL CALFIAO",
      "EL LUCERO",
      "EL PERDIDO",
      "EL ZORRO",
      "FARO",
      "GIL",
      "IRENE",
      "LA AURORA",
      "LA GLORIA",
      "LA LUNA",
      "LA RUTA",
      "LAS CORTADERAS",
      "LOMA CHATA",
      "LOS JUNCOS",
      "NICOLAS DESCALZI",
      "ORIENTE",
      "SAN ROMAN",
      "ZUBIARRE"
    ],
    "CORONEL PRINGLES": [
      "CHELFORO",
      "CORONEL FALCON",
      "CORONEL PRINGLES",
      "DON ALFREDO",
      "EL DIVISORIO",
      "EL GAVILAN",
      "EL PENSAMIENTO",
      "ESTACION LAS LOMAS",
      "INDIO RICO",
      "KRABBE",
      "LA ALFALFA",
      "LA AMALIA",
      "LA FORTUNA",
      "LA LEGUA",
      "LA NORIA",
      "LA PALOMA",
      "LA VIRGINIA",
      "LAGUNA DEL MOLLE",
      "LARTIGAU",
      "LAS MOSTAZAS",
      "OJO DE AGUA",
      "PILLAHUINCO",
      "RESERVA",
      "SAN FELIPE",
      "SAN MANUEL",
      "STEGMANN"
    ],
    "CORONEL SUAREZ": [
      "CASCADAS",
      "CORONEL SUAREZ",
      "CUARTEL VII",
      "CURA MALAL",
      "D'ORBIGNY",
      "EL 27",
      "EL RELINCHO",
      "EL TRIUNFO",
      "ESTANCIA LOLEN",
      "HUANGUELEN",
      "LA PRIMAVERA",
      "LA REMONTA",
      "LA URUGUAYA",
      "LA VENTURA",
      "LAS GOLONDRINAS",
      "OMBU",
      "PASMAN",
      "PASO DE LOS CHILENOS",
      "PERALTA",
      "SAN ANSELMO",
      "SAN CARLOS",
      "SAN JOSE",
      "SANTA ANA",
      "SANTA MARIA",
      "SANTA TRINIDAD",
      "VILLA LA ARCADIA",
      "ZENTENA"
    ],
    "DAIREAUX": [
      "ANDANT",
      "ARBOLEDAS",
      "ARBOLITO",
      "COLONIA LAS MARGARITAS",
      "CORONEL MARCELINO FREYRE",
      "DAIREAUX",
      "ENRIQUE LAVALLE",
      "LA ARMONIA",
      "LA COPETA",
      "LA LARGA",
      "LA LINDA",
      "LA MANUELA",
      "LA PROSPERIDAD",
      "LOUGE",
      "LURO",
      "MASUREL",
      "MOURAS",
      "SALAZAR",
      "SAN ALFREDO",
      "SANTA CLARA",
      "SANTA RITA"
    ],
    "DOLORES": [
      "AL VER VERAS",
      "DOLORES",
      "DOS TALAS",
      "EST. PANELO",
      "LA SELVA",
      "LA VASCA",
      "LAS MARGARITAS",
      "LOMA DE ROLDAN",
      "LOMAS DE SALOMON",
      "LOS SAUQUITOS",
      "MONTE DEL TORDILLO",
      "SEVIGNE",
      "SOL DE MAYO"
    ],
    "ENSENADA": [
      "DIQUE N° 1",
      "ENSENADA",
      "ISLA SANTIAGO (OESTE)",
      "PUNTA LARA",
      "VILLA CATELA"
    ],
    "ESCOBAR": [
      "BELEN DE ESCOBAR",
      "EL CAZADOR",
      "GARIN",
      "INGENIERO MASCHWITZ",
      "LOMA VERDE",
      "MAQUINISTA F. SAVIO ESTE",
      "MATHEU",
      "SECCION ISLAS"
    ],
    "ESTEBAN ECHEVERRIA": [
      "9 DE ABRIL",
      "CANNING",
      "EL JAGUEL",
      "LUIS GUILLON",
      "MONTE GRANDE"
    ],
    "EXALTACION DE LA CRUZ": [
      "ACCESO A GOBERNADOR ANDONAEGUI",
      "ARROYO DE LA CRUZ",
      "CAPILLA DEL SEÑOR",
      "CARLOS LEMEE",
      "CHENAUT",
      "DIEGO GAYNOR",
      "EL REMANSO",
      "ESTACION LA LATA",
      "ETCHEGOYEN",
      "GOBERNADOR ANDONAEGUI",
      "LA ROSADA",
      "LOS CARDALES",
      "PARADA ORLANDO",
      "PARADA ROBLES",
      "PAVON",
      "RUTA 193 KM 28,5"
    ],
    "EZEIZA": [
      "AEROPUERTO INTERNACIONAL EZEIZA",
      "CANNING",
      "CARLOS SPEGAZZINI",
      "EL PORVENIR",
      "JOSE MARIA EZEIZA",
      "LA UNION",
      "TRISTAN SUAREZ"
    ],
    "FLORENCIO VARELA": [
      "BOSQUES",
      "EL TROPEZON",
      "ESTANISLAO SEVERO ZEBALLOS",
      "FLORENCIO VARELA",
      "GOBERNADOR JULIO A. COSTA",
      "INGENIERO JUAN ALLAN",
      "LA CAPILLA",
      "VILLA BROWN",
      "VILLA SAN LUIS",
      "VILLA SANTA ROSA",
      "VILLA VATTEONE"
    ],
    "FLORENTINO AMEGHINO": [
      "ANCALO",
      "BLAQUIER",
      "CUARTO LUNA",
      "EDUARDO COSTA",
      "ESTACION LA CHACRA",
      "ESTACION LA ISLETA",
      "FLORENTINO AMEGHINO",
      "LOS ANDES",
      "MEDIA LUNA",
      "NUEVA SUIZA",
      "PORVENIR",
      "SALALE",
      "SAN CARLOS"
    ],
    "GENERAL ALVARADO": [
      "CENTINELA DEL MAR",
      "COMANDANTE NICANOR OTAMENDI",
      "ESTANCIA LA TOTO",
      "LA BALLENERA",
      "LA EUFEMIA",
      "LA REFORMA",
      "LAS PIEDRITAS",
      "MAR DEL SUR",
      "MECHONGUE",
      "MIRAMAR",
      "SAN JOSE DE OTAMENDI"
    ],
    "GENERAL ALVEAR": [
      "COLONIA S S DEL VALLE",
      "EL CHIRIPA",
      "EL DESTINO",
      "EL PARCHE",
      "EL PELUDO",
      "EL TABARE",
      "EMMA",
      "FORTIN ESPERANZA",
      "GENERAL ALVEAR",
      "LA BRAVA",
      "LA MARIA LUISA",
      "LA MOROCHA",
      "LA PALOMA",
      "LOS AROMOS",
      "LOS CHUCAROS",
      "LOS FLAMENCOS",
      "SANTA ISABEL"
    ],
    "GENERAL ARENALES": [
      "ARRIBEÑOS",
      "ASCENSION",
      "CAMPO ALVEAR",
      "COLONIA LAS MERCEDES",
      "COLONIA SAN MARTIN",
      "DELGADO",
      "DESVIO KM 95",
      "ESTACION ARENALES",
      "FERRE",
      "GENERAL ARENALES",
      "HAM",
      "LA ANGELITA",
      "LA PINTA",
      "LA TRINIDAD",
      "SANTA ANA"
    ],
    "GENERAL BELGRANO": [
      "CALLE ANGOSTA",
      "CHAS",
      "COLONIA EL SALADO",
      "EL DESCANSO",
      "GENERAL BELGRANO",
      "GORCHS",
      "LA VERDE",
      "NEWTON",
      "SAN MARTIN"
    ],
    "GENERAL GUIDO": [
      "EL CALEU",
      "EL SAUCE",
      "GENERAL GUIDO",
      "LA ESPERANZA",
      "LA P0STA",
      "LA QUINUA",
      "LA UNION",
      "LA VERONICA",
      "LABARDEN",
      "LAS ACACIAS",
      "SAN BERNARDO",
      "SAN JUAN",
      "SANTA FORTUNA",
      "SANTA ROSA"
    ],
    "GENERAL JUAN MADARIAGA": [
      "BARRIO KENNEDY",
      "COLONIA TIO DOMINGO",
      "EL CARDALITO",
      "EL MODELO",
      "GENERAL JUAN MADARIAGA",
      "INVERNADAS",
      "JUAN CHICO",
      "LA FELICIDAD",
      "LA FLORIDA",
      "LONKOY",
      "LOS ZORZALES",
      "MACEDO",
      "MEDALAND",
      "SANTA LA VICTORIA",
      "SANTA YOLA",
      "TRELLES"
    ],
    "GENERAL LA MADRID": [
      "EL LUCERO",
      "ESTANCIA DON PEDRO",
      "GENERAL LA MADRID",
      "LA COLINA",
      "LAS BANDURRIAS",
      "LAS MARTINETAS",
      "LAS NENAS",
      "LASTRA",
      "LIBANO",
      "PONTAUT",
      "RAULET",
      "SAN PEDRO",
      "SANTA ISABEL"
    ],
    "GENERAL LAS HERAS": [
      "ENRIQUE FYNN",
      "GENERAL HORNOS",
      "GENERAL LAS HERAS",
      "GRANJA BLANCA",
      "LA CHOZA",
      "LA FE",
      "LOZANO",
      "MAGNASCO",
      "MARRE",
      "PLOMER",
      "ROBLES",
      "SPERATTI",
      "VILLARS"
    ],
    "GENERAL LAVALLE": [
      "CABRERA",
      "ESTACION LOS INGLESES",
      "GENERAL LAVALLE",
      "LA COLORADA",
      "LA HUERTITA",
      "LA ISOLINA",
      "LA TABLADA",
      "LA VICTORIA",
      "LAS VIOLETAS",
      "PAVON"
    ],
    "GENERAL PAZ": [
      "ALEGRE",
      "BARRIO RIO SALADO",
      "DANTAS",
      "DE LA LLAVE",
      "FALCONE",
      "KILOMETRO 70",
      "LA BLANQUEADA",
      "LA CAÑADA",
      "LA CHANCLETA",
      "LA PALOMA",
      "LA PEPITA",
      "LA POSTA",
      "LA SOLEDAD",
      "LA TAHONA NUEVA",
      "LAS ACACIAS",
      "LOMA VERDE",
      "LOS MERINOS",
      "RANCHOS",
      "SAN GREGORIO",
      "VILLA MARTINEZ",
      "VILLANUEVA"
    ],
    "GENERAL PINTO": [
      "COLONIA GENERAL PINTO",
      "COLONIA SAN RICARDO",
      "DOS HERMANOS",
      "DUSSAUD",
      "EL PEREGRINO",
      "GENERAL PINTO",
      "GERMANIA",
      "GUNTHER",
      "LA MARGARITA",
      "LOS CALLEJONES",
      "PAZOS KANKI",
      "PERISEE",
      "SANTA ANGELA",
      "VILLA FRANCIA",
      "VILLA ROTH"
    ],
    "GENERAL PUEYRREDON": [
      "BARRIO COLINAS VERDES",
      "BARRIO EL BOQUERON",
      "BARRIO EL CASAL",
      "BARRIO EL COYUNCO",
      "BARRIO LA GLORIA",
      "BARRIO SANTA  PAULA",
      "BATAN",
      "CAMET",
      "CHAPADMALAL",
      "COLONIA BARRAGAN",
      "EL DORADO",
      "EL MARQUESADO",
      "EL SIGLO",
      "ESTACION CAMET",
      "ESTACION CHAPADMALAL",
      "LA BRAVA",
      "LA PEREGRINA",
      "LAGUNA DE LOS PADRES",
      "LAS DOS MARIAS",
      "LAS HERMANAS",
      "LOMA ALTA",
      "MAR DEL PLATA",
      "PUNTA MOGOTES",
      "QUINTAS DE PERALTA RAMOS",
      "SANTA ISABEL",
      "SIERRA DE LOS PADRES"
    ],
    "GENERAL RODRIGUEZ": [
      "BARRIO MORABO",
      "BARRIO RUTA 24 KILOMETRO 10",
      "BARRIO RUTA 24 KM. 10",
      "C.C. BOSQUE REAL",
      "CRUCE RUTAS 6 Y 24",
      "CUARTEL II",
      "CUARTEL IV",
      "DE ARIAS",
      "GENERAL RODRGUEZ",
      "HOSPITAL SOMMER",
      "LA CHOZA"
    ],
    "GENERAL SAN MARTIN": [
      "BARRIO PARQUE GENERAL SAN MARTIN",
      "BILLINGHURST",
      "CIUDAD DEL LIBERTADOR GENERAL SAN MARTIN",
      "CIUDAD JARDIN EL LIBERTADOR",
      "VILLA AYACUCHO",
      "VILLA BALLESTER",
      "VILLA BERNARDO MONTEAGUDO",
      "VILLA CHACABUCO",
      "VILLA CORONEL JOSE M. ZAPIOLA",
      "VILLA GENERAL ANTONIO J. DE SUCRE",
      "VILLA GENERAL EUGENIO NECOCHEA",
      "VILLA GENERAL JOSE TOMAS GUIDO",
      "VILLA GENERAL JUAN G. LAS HERAS",
      "VILLA GODOY CRUZ",
      "VILLA GRANADEROS DE SAN MARTIN",
      "VILLA GREGORIA MATORRAS",
      "VILLA JOSE LEON SUAREZ",
      "VILLA JUAN MARTIN DE PUEYRREDON",
      "VILLA LIBERTAD",
      "VILLA LYNCH",
      "VILLA MAIPU",
      "VILLA MARIA IRENE DE LOS REMEDIOS DE ESCALADA",
      "VILLA MARQUES ALEJANDRO MARIA DE AGUADO",
      "VILLA PARQUE PRESIDENTE FIGUEROA ALCORTA",
      "VILLA PARQUE SAN LORENZO",
      "VILLA SAN ANDRES",
      "VILLA YAPEYU"
    ],
    "GENERAL VIAMONTE": [
      "ACHAVAL",
      "BAIGORRITA",
      "CHANCAY",
      "CUARTEL II",
      "EL MONASTERIO",
      "LA BELLACA",
      "LA CARMEN",
      "LA DELFINA",
      "LA RINCONADA",
      "LOS BOSQUES",
      "LOS DOS AMIGOS",
      "LOS HUESOS",
      "LOS TOLDOS",
      "QUIRNO COSTA",
      "SAN EMILIO",
      "SAN JOSE",
      "ZAVALIA"
    ],
    "GENERAL VILLEGAS": [
      "BANDERALO",
      "CAMPESINOS UNIDOS",
      "CAMPOS FRIA",
      "CAÑADA SECA",
      "COLONIA LA BELITA",
      "CORONEL CHARLONE",
      "CUARTEL II",
      "DRABBLE",
      "EL DIA",
      "EL RECAO",
      "EMILIO V. BUNGE",
      "ESCUELA AGRARIA",
      "ESTACION MILLACO",
      "ESTANCIA EL MERIDIANO",
      "FORTIN REPUBLICA",
      "GENERAL VILLEGAS",
      "GONDRA",
      "LA CATALINA",
      "LA JOSEFA",
      "LA MARGARITA",
      "LA TRADICION",
      "LOS ANGELES",
      "LOS LAURELES",
      "MASSEY",
      "MOORES",
      "PICHINCHA",
      "PIEDRITAS",
      "SAN GENARO",
      "SAN JOSE",
      "SANTA ELEODORA",
      "SANTA REGINA",
      "TAMBEROS UNIDOS",
      "VILLA CICLON",
      "VILLA SABOYA",
      "VILLA SAUZE",
      "VOLTA"
    ],
    "GUAMINI": [
      "ALAMOS",
      "ARROYO VENADO",
      "CASBAS",
      "CASEY",
      "COCHICO",
      "EL GAUCHITO",
      "FATRALO",
      "FORTIN PAUNERO",
      "GARRE",
      "GUAMINI",
      "LA ATREVIDA",
      "LA CUADRADA",
      "LA FLORA",
      "LA FLORIDA",
      "LA INDIANA",
      "LA LEGUA",
      "LA MARIA",
      "LA NEVADA",
      "LAGUNA ALSINA",
      "SAN FERMIN",
      "SATURNO",
      "VICTORINO DE LA PLAZA"
    ],
    "HIPOLITO YRIGOYEN": [
      "BELLA VISTA",
      "BERSEE",
      "CAMPO MONCANI",
      "CORACEROS",
      "EL MORO",
      "HENDERSON",
      "HERRERA VEGAS",
      "MARIA LUCILA"
    ],
    "HURLINGHAM": [
      "HURLINGHAM",
      "VILLA SANTOS TESEI",
      "WILLIAM C. MORRIS"
    ],
    "ITUZAINGO": [
      "ITUZAINGO CENTRO",
      "ITUZAINGO SUR",
      "VILLA GOBERNADOR UDAONDO"
    ],
    "JOSE C PAZ": [
      "DEL VISO",
      "JOSE C. PAZ",
      "TORTUGUITAS"
    ],
    "JUNIN": [
      "A. ROCA",
      "AGUSTIN ROCA",
      "AGUSTINA",
      "BALNEARIO LAGUNA DE GOMEZ",
      "BLANDENGUES",
      "CAMPO BALESTRASET",
      "CAMPO CAMICCIA",
      "CAMPO LA CRUZ",
      "CAMPO MAIPU",
      "CAMPO TOYOS",
      "CERRITO COLORADO",
      "COLONIA SAN LUIS",
      "FORTIN TIBURCIO",
      "JUNIN",
      "LA AGRARIA",
      "LA ORIENTAL",
      "LAPLACETTE",
      "LAS MERCEDES",
      "MORSE",
      "RINCON DEL CARPINCHO",
      "SAFORCADA",
      "SANTA ROSA"
    ],
    "LA COSTA": [
      "AGUAS VERDES",
      "LAS TONINAS",
      "LUCILA DEL MAR",
      "MAR DE AJO",
      "MAR DE AJO NORTE",
      "MAR DEL TUYU",
      "SAN BERNARDO",
      "SAN CLEMENTE DEL TUYU",
      "SANTA TERESITA"
    ],
    "LA MATANZA": [
      "20 DE JUNIO",
      "ALDO BONZI",
      "CIUDAD EVITA",
      "GONZALEZ CATAN",
      "GREGORIO DE LAFERRERE",
      "ISIDRO CASANOVA",
      "LA TABLADA",
      "LOMAS DEL MIRADOR",
      "RAFAEL CASTILLO",
      "RAMOS MEJIA",
      "SAN JUSTO",
      "TAPIALES",
      "VILLA EDUARDO MADERO",
      "VILLA LUZURIAGA",
      "VIRREY DEL PINO"
    ],
    "LA PLATA": [
      "ABASTO",
      "ANGEL ETCHEVERRY",
      "ARANA",
      "ARTURO SEGUI",
      "BARRIO EL CARMEN (OESTE)",
      "BARRIO GAMBIER",
      "BARRIO LAS MALVINAS",
      "BARRIO LAS QUINTAS",
      "BARRIO RUTA SOL",
      "CITY BELL",
      "COUNTRY CLUB EL RODEO",
      "EL RETIRO",
      "ESQUINA NEGRA",
      "IGNACIO CORREAS",
      "ISLA MARTIN GARCIA",
      "JOAQUIN GORINA",
      "JOSE HERNANDEZ",
      "JOSE MELCHOR ROMERO",
      "LA CUMBRE",
      "LA PLATA",
      "LA PROVIDENCIA",
      "LISANDRO OLMOS",
      "LOMAS DE COPELLO",
      "LOS HORNOS",
      "MANUEL B. GONNET",
      "POBLET",
      "RINGUELET",
      "RUFINO DE ELIZALDE",
      "TOLOSA",
      "TRANSRADIO",
      "VILLA ELISA",
      "VILLA ELVIRA",
      "VILLA GARIBALDI",
      "VILLA MONTORO",
      "VILLA PARQUE SICARDI"
    ],
    "LANÚS": [
      "GERLI",
      "LANUS ESTE",
      "LANUS OESTE",
      "MONTE CHINGOLO",
      "REMEDIOS DE ESCALADA DE SAN MARTIN",
      "VALENTIN ALSINA"
    ],
    "LAPRIDA": [
      "ACHALAY",
      "COLONIA ARTALEJOS",
      "LA FLORENTINA",
      "LA LOMA",
      "LA ROTONDA",
      "LA SALADA",
      "LA TIGRA",
      "LAPRIDA",
      "LAS HERMANAS",
      "PUEBLO NUEVO",
      "PUEBLO SAN JORGE",
      "SANTA ELENA",
      "TRES CARDOS",
      "VOLUNTAD"
    ],
    "LAS FLORES": [
      "CORONEL BOERR",
      "CUARTEL VII",
      "CUARTEL VIII",
      "DOCTOR DOMINGO HAROSTEGUY",
      "EL DESPUNTE",
      "EL GUALICHO",
      "EL MOSQUITO",
      "EL TORO",
      "EL TRIGO",
      "EL TROPEZON",
      "EL ZORRO",
      "ESCUELA AGRARIA",
      "EST LA GRACIELA",
      "ESTRUGAMOU",
      "LA ANGELITA",
      "LA BLANQUEADA",
      "LA CAPILLA",
      "LA COLONIA",
      "LA CUBANA",
      "LAS FLORES",
      "PAGO DE ORO",
      "PARDO",
      "PIAMMISTEGUY",
      "PLAZA MONTERO",
      "ROSAS",
      "SANTA INES",
      "SOL DE MAYO",
      "VILELA"
    ],
    "LEANDRO N ALEM": [
      "ALBERDI VIEJO",
      "CAMPO MENDIZABAL",
      "EL DORADO",
      "EL RETIRO",
      "ESTACION LAS BALAS",
      "FORTIN ACHA",
      "JUAN BAUTISTA ALBERDI",
      "LA CLARITA",
      "LA COLONIA",
      "LA ESPERANZA",
      "LA PERMANENTE",
      "LEANDRO N. ALEM",
      "LOS ALFALFARES",
      "SANTA MARIA",
      "TRIGALES",
      "VEDIA"
    ],
    "LEZAMA": [
      "ATILIO PESSAGNO",
      "EL ARBOLITO",
      "EL DESTINO",
      "EL RINCON",
      "LA BELEN",
      "LA FLORIDA",
      "LA JOSEFINA",
      "LA RINCONADA",
      "MANUEL J. COBO - LEZAMA",
      "MONASTERIO"
    ],
    "LINCOLN": [
      "13 DE ABRIL",
      "ACCESO RICALDI",
      "ARENAZA",
      "BALSA",
      "BAYAUCA",
      "BERMUDEZ",
      "CARLOS SALAS",
      "CORONEL MARTINEZ DE HOZ",
      "CUARTEL II",
      "CUARTEL III",
      "CUARTEL IV",
      "CUARTEL V",
      "CUARTEL VI",
      "EL MORITO",
      "EL TRIUNFO",
      "ESTACION LA UNION",
      "ESTACION SAN JUAN",
      "LA ARGENTINA",
      "LA CONCORDIA",
      "LA DELIA",
      "LA DOROTEA",
      "LA ESMERALDA",
      "LA PERGAMINERA",
      "LA VICTORIA",
      "LAS TOSCAS",
      "LINCOLN",
      "LOS AROMITOS",
      "PASICOTT",
      "PASTEUR",
      "ROBERTS",
      "SAN FRANCISCO",
      "SAN GREGORIO",
      "SANTA MARIA",
      "SANTA MARTA",
      "TRIUNVIRATO",
      "VIGILANCIA"
    ],
    "LOBERIA": [
      "ARENAS VERDES",
      "DOS NACIONES",
      "EL EDEN",
      "EL LENGUARAZ",
      "EL MORO",
      "EL PAMPERO",
      "GARRIDO",
      "LA ALIANZA",
      "LA BODEGA",
      "LA FLORESTA",
      "LA GUITARRA",
      "LA LOMA",
      "LA MALACARA",
      "LA PROVIDENCIA",
      "LAHORE",
      "LAS NUTRIAS",
      "LAS TOSCAS",
      "LAVALLE",
      "LICENCIADO MATIENZO",
      "LOBERIA",
      "MOROMAR",
      "NAPALEOFU",
      "PIERES",
      "PUERTA DEL DIABLO",
      "SAN ANTONIO",
      "SAN MANUEL",
      "SAN PASCUAL",
      "SANTA MARIA",
      "TAMANGUEYU",
      "TOME Y TRAIGA"
    ],
    "LOBOS": [
      "ANTONIO CARBONI",
      "ANTONIO DELGADO",
      "BARRIO LOS HORNOS",
      "CAMPO EGLI",
      "CAMPO TOZZI",
      "CUARTEL VI",
      "CUARTEL VII",
      "CUARTEL VIII",
      "EL ARAZA",
      "EL BALCON",
      "ELVIRA",
      "JOSE SANTOS AREVALO",
      "LA ANITA",
      "LA RINCONADA",
      "LAGUNA DE LOBOS",
      "LAS CHACRAS",
      "LAS GARZAS",
      "LOBOS",
      "RUTA PROVINCIAL 41 KM 168",
      "SALVADOR MARIA",
      "ZAPIOLA"
    ],
    "LOMAS DE ZAMORA": [
      "BANFIELD",
      "LLAVALLOL",
      "LOMAS DE ZAMORA",
      "TEMPERLEY",
      "TURDERA",
      "VILLA CENTENARIO",
      "VILLA FIORITO"
    ],
    "LUJAN": [
      "ALASTUEY",
      "BARRIO GRANADEROS",
      "BARRIO LAS CASUARINAS",
      "CARLOS KEEN",
      "CAÑADA DE ROCA",
      "CLUB DE CAMPO LOS PUENTES",
      "CORTINES",
      "COUNTRY CLUB LAS PRADERAS",
      "JOSE MARIA JAUREGUI",
      "LAS LILAS",
      "LEZICA Y TORREZURI",
      "LUJAN",
      "OLIVERA",
      "OPEN DOOR",
      "POLO DE LUJAN",
      "PUEBLO NUEVO",
      "SAN ELADIO",
      "SUCRE",
      "TORRES",
      "VILLA FLANDRIA NORTE (PUEBLO NUEVO)",
      "VILLA FLANDRIA SUR (EST. JAUREGUI)"
    ],
    "MAGDALENA": [
      "ATALAYA",
      "CAMPO FERRO",
      "EL DESTINO",
      "EL PINO",
      "GENERAL MANSILLA",
      "GUTIERREZ",
      "JOSE FERRARI",
      "JULIO ARDITI",
      "LA CLELIA",
      "LA MATRACA",
      "LOS NARANJOS",
      "MAGDALENA",
      "MALAGAMBA",
      "ROBERTO J. PAYRO",
      "SAN JOSE",
      "SAN MARTIN",
      "UNIDAD PENAL MAGDALENA",
      "VERGARA",
      "VIEYTES"
    ],
    "MAIPU": [
      "EL CHAJA",
      "LAGUNA LOS DIFUNTOS",
      "LAS ARMAS",
      "MAIPU",
      "MONSALVO",
      "SAN SIMON",
      "SANTA ELVIRA",
      "SANTA ISABEL",
      "SANTA TERESITA",
      "SANTO DOMINGO",
      "SEGUROLA",
      "YAMAHUIDA"
    ],
    "MALVINAS ARGENTINAS": [
      "AREA DE PROMOCION EL TRIANGULO",
      "GRAND BOURG",
      "INGENIERO ADOLFO SOURDEAUX",
      "INGENIERO PABLO NOGUES",
      "LOS POLVORINES",
      "TORTUGUITAS",
      "VILLA DE MAYO"
    ],
    "MAR CHIQUITA": [
      "ATLANTIDA",
      "CALFUCURA",
      "CAMET NORTE",
      "CORONEL VIDAL",
      "EL DESTINO",
      "EL ESPINILLO",
      "EL JAGUEL",
      "ESQUINA ARGUAS",
      "FRENTE MAR",
      "GENERAL PIRAN",
      "LA ALDEA",
      "LA ARMONIA",
      "LA BALIZA",
      "LA CALETA",
      "LA TEHUELCHE",
      "LAS ROSAS",
      "LOMA VERDE",
      "MAR CHIQUITA",
      "MAR DE COBO",
      "NAHUEL RUCA",
      "PLAYA DORADA",
      "RUTA 11 KM 475",
      "RUTA 11 KM 480",
      "RUTA 55 KM 135",
      "SANTA CLARA DEL MAR",
      "SANTA ELENA",
      "VIVORATA"
    ],
    "MARCOS PAZ": [
      "ALAMBRADO DE FIERRO",
      "BARRIO SANTA ROSA",
      "BARRIOS LISANDRO DE LA TORRE Y SANTA MARTA",
      "CUARTEL V",
      "EL MARTILLO",
      "EL TROPEZON",
      "LA COLORADA",
      "MARCOS PAZ"
    ],
    "MERCEDES": [
      "AGOTE",
      "CUARTEL XII",
      "CUARTEL XIX",
      "CUARTEL XV",
      "CUARTEL XVI",
      "EL MIRASOL",
      "GOLDNEY",
      "GOWLAND",
      "LA TABLADA",
      "LA VERDE",
      "LOS TRONCOS",
      "MERCEDES",
      "PURICELLI",
      "SAN JACINTO",
      "SAN JORGE",
      "TOMAS JOFRE"
    ],
    "MERLO": [
      "LIBERTAD",
      "MARIANO ACOSTA",
      "MERLO",
      "PONTEVEDRA",
      "SAN ANTONIO DE PADUA"
    ],
    "MONTE": [
      "ABBOTT",
      "EL DORADO",
      "EL ROSARIO",
      "EL SIASGO",
      "FUNKE",
      "GOYENECHE",
      "LA COSTA",
      "LA ELINA",
      "LOS CERRILLOS",
      "MAHON",
      "SAN GENARO",
      "SAN MARCELO",
      "SAN MIGUEL DEL MONTE",
      "SANTA MARIA",
      "ZENON VIDELA DORNA"
    ],
    "MONTE HERMOSO": [
      "BALNEARIO SAUCE GRANDE",
      "MONTE HERMOSO"
    ],
    "MORENO": [
      "CUARTEL V",
      "FRANCISCO ALVAREZ",
      "LA REJA",
      "MORENO",
      "PASO DEL REY",
      "TRUJUI"
    ],
    "MORON": [
      "CASTELAR",
      "EL PALOMAR",
      "HAEDO",
      "MORON",
      "VILLA SARMIENTO"
    ],
    "NAVARRO": [
      "ANASAGASTI",
      "CUARTEL IX",
      "EL FAISAN",
      "EL LUCERO",
      "GONZALEZ RISOS",
      "INGENIERO WILLIAMS",
      "JOSE JUAN ALMEYRA",
      "KILOMETRO 83",
      "LA BLANQUEADA",
      "LA ESTRELLA",
      "LA LECHUZA",
      "LA RAPIDA",
      "LAS MARIANAS",
      "LOS NOGALES",
      "LOS POZOS",
      "LOS VASQUITOS",
      "NAVARRO",
      "RINGUELET",
      "RUTA NACIONAL 200 KM 96",
      "SOL DE MAYO",
      "TORRES",
      "VILLA MOLL"
    ],
    "NECOCHEA": [
      "CALANGUEYU",
      "CAMPOMAR",
      "CLARAZ",
      "COSTA BONITA",
      "EL PALOMAR",
      "EL TIGRE",
      "ENERGIA",
      "JUAN N. FERNANDEZ",
      "LA GALIA",
      "LA LITA",
      "LA LUISA",
      "LA MAGNOLIA",
      "LA NEGRA",
      "LAS CALAVERAS",
      "LUMB",
      "MOJON DEL PALO",
      "NECOCHEA",
      "NICANOR OLIVERA",
      "QUEQUEN",
      "RAMON SANTAMARINA",
      "SAN CALA",
      "SAN JOSE (VILLA DIEGO)",
      "SEMILLERO BUCK",
      "VILLA ZAGALA"
    ],
    "OLAVARRIA": [
      "BLANCA CHICA",
      "BLANCAGRANDE",
      "CALERA AVELLANEDA",
      "CAMPO BELGRANO",
      "CAMPO ELSSIRY",
      "CAMPO STRIEBECK",
      "CERRO SOTUYO",
      "CHACRAS DE PIBUEL",
      "COLONIA HINOJO",
      "COLONIA NIEVAS",
      "COLONIA SAN MIGUEL",
      "CRUCE MUÑOZ",
      "CUARTEL II - AEROPUERTO",
      "EL MIRADOR",
      "EL PORVENIR",
      "ESPIGAS",
      "HINOJO",
      "ITURREGUI",
      "LA CARMELITA",
      "LA MODERNA",
      "LA PARDA",
      "LA PROVIDENCIA",
      "LAS PIEDRITAS",
      "LOS CHILENOS",
      "MAPIS",
      "OLAVARRIA",
      "POURTALE",
      "RECALDE",
      "ROCHA",
      "SAN ANTONIO",
      "SAN GREGORIO",
      "SAN JACINTO",
      "SAN PEDRO",
      "SAN QUILCO",
      "SANTA LUISA",
      "SIERRA CHICA",
      "SIERRAS BAYAS",
      "VILLA ALFREDO FORTABAT",
      "VILLA ARRIETA",
      "VILLA LA SERRANIA",
      "VILLA MONICA",
      "VIRGEN DE LA LOMA"
    ],
    "PATAGONES": [
      "BAHIA SAN BLAS",
      "CARDENAL CAGLIERO",
      "CARMEN DE PATAGONES",
      "COLONIA 7 DE MARZO",
      "COLONIA BARGA",
      "COLONIA EL GUANACO",
      "COLONIA EL MOLINO",
      "COLONIA LA BEBA",
      "COLONIA LA DELFINA",
      "COLONIA LA GRACIELA",
      "COLONIA LOS ALAMOS",
      "COLONIA MIGLIORI",
      "COLONIA SAN FRANCISCO",
      "COLONIA SAN LUIS",
      "EL BARRANCOSO",
      "EL TAURO",
      "EMILIO LAMARCA",
      "ESTANCIA BALBUENA",
      "ESTANCIA EL MOLINO",
      "ESTANCIA SAN LUIS",
      "IGARZABAL",
      "JOSE B. CASAS",
      "JUAN A. PRADERE",
      "KILOMETRO 900",
      "MERIDIANO V",
      "STROEDER",
      "VILLA LYNCH",
      "VILLALONGA",
      "ZONA RURAL DE JOSE B CASAS"
    ],
    "PEHUAJO": [
      "ABEL",
      "ALVAREZ",
      "ANCON",
      "ASTURIAS",
      "CAPITAN CASTRO",
      "COLONIA CARLOS ARIAS",
      "CONDE CAZON",
      "CUARTEL SEGUNDO",
      "CURUCHET",
      "EL AGRO",
      "EL CRUCE",
      "EL RANCHITO",
      "EL RECADO",
      "FRANCISCO MADERO",
      "GNECCO",
      "INOCENCIO SOSA",
      "JUAN JOSE PASO",
      "LA BLANQUEADA",
      "LA JOSEFA",
      "LAS JUANITAS",
      "MAGDALA",
      "MONES CAZON",
      "NUEVA PLATA",
      "PEDRO GAMEN",
      "PEHUAJO",
      "SAN BERNARDO",
      "SAN ESTEBAN"
    ],
    "PELLEGRINI": [
      "BOCAYUVA",
      "COLONIA SARMIENTO",
      "DE BARY",
      "ESTACION LA CAUTIVA",
      "LA PUA",
      "LAS TRES MARIAS",
      "PEHUELCHES",
      "PELLEGRINI",
      "RUTA NACIONAL 5 KM 502",
      "ZONA RURAL DE PELLEGRINI"
    ],
    "PERGAMINO": [
      "ACEVEDO",
      "ARROYO DEL MEDIO",
      "ARROYO DULCE",
      "CAMINO A LA VIOLETA KM 4",
      "CAMPO BUENA VISTA",
      "CAMPO ROTH",
      "CAMPO URQUIZA",
      "CAMPO URRUTIA",
      "ESTANCIA SAN RAFAEL",
      "FONTEZUELA",
      "FRANCISCO AYERZA",
      "GORNATTI",
      "GUERRICO",
      "JUAN A. DE LA  PEÑA",
      "JUAN ANCHORENA",
      "LA MAGDALENA",
      "LA VANGUARDIA",
      "LA VIOLETA",
      "MAGUIRRE",
      "MANANTIALES",
      "MANANTIALES CHICOS",
      "MANANTIALES GRANDES",
      "MANUEL OCAMPO",
      "MARIANO BENITEZ",
      "MARIANO H.  ALFONZO",
      "ORTIZ BASUALDO",
      "PERGAMINO",
      "PINZON",
      "RANCAGUA",
      "SANTA ROSA",
      "TAMBO NUEVO",
      "VILLA ANGELICA",
      "VILLA SAN JOSE"
    ],
    "PILA": [
      "CAMARON CHICO",
      "CASALINS",
      "CHAPALAUQUEN",
      "DEMARIA",
      "EL 80",
      "EL ALEGRE",
      "EL SARTEN",
      "EL VENADO",
      "EL ZORRO",
      "HINOJALES",
      "LA LIMPIA",
      "LA REFORMA",
      "LA VICTORIA",
      "LAS CHILCAS",
      "LAS LECHUZAS",
      "LOS TOLDOS",
      "PILA",
      "REAL AUDIENCIA"
    ],
    "PILAR": [
      "BARRIO PARQUE ALMIRANTE IRIZAR",
      "CLUB DE CAMPO LARENA - LOS QUINCHOS",
      "DEL VISO",
      "FATIMA",
      "LA LONJA",
      "LOS CACHORROS",
      "MANZANARES",
      "MANZONE",
      "MAQUINISTA F. SAVIO (OESTE)",
      "PILAR",
      "PRESIDENTE DERQUI",
      "ROBERTO DE VICENZO",
      "SANTA TERESA",
      "TORTUGUITAS",
      "VILLA ASTOLFI",
      "VILLA ROSA",
      "ZELAYA"
    ],
    "PINAMAR": [
      "CARILO",
      "OSTENDE",
      "PINAMAR",
      "VALERIA DEL MAR"
    ],
    "PRESIDENTE PERON": [
      "BARRIO AMERICA UNIDA",
      "GUERNICA",
      "LA LATA"
    ],
    "PUAN": [
      "17 DE AGOSTO",
      "ARROYO SECO",
      "AZOPARDO",
      "BORDENAVE",
      "DARREGUEIRA",
      "EL CARDAL",
      "EL TRIANGULO",
      "ESTELA",
      "FELIPE SOLA",
      "GENERAL RONDEAU",
      "LA ANGELITA",
      "LA ROSALIA",
      "LOPEZ LECUBE",
      "PUAN",
      "RIVADEO",
      "SAN GERMAN",
      "TRES CUERVOS",
      "VIBORAS",
      "VILLA CASTELAR",
      "VILLA IRIS"
    ],
    "PUNTA INDIO": [
      "ALVAREZ JONTE",
      "BASE AERONAVAL DE PUNTA INDIO",
      "CHIRRAMBERRO",
      "COLONIA TORNQUIST",
      "ESTANCIA SAN RAMON",
      "LA VIRUTA",
      "LAS PALMAS",
      "LAS TAHONAS",
      "LUJAN DEL RIO",
      "MONTE VELOZ",
      "PIPINAS",
      "PUNTA INDIO",
      "PUNTA PIEDRAS",
      "RANCHO BARRETO",
      "VERONICA"
    ],
    "QUILMES": [
      "BERNAL",
      "BERNAL OESTE",
      "DON BOSCO",
      "EZPELETA",
      "EZPELETA OESTE",
      "QUILMES",
      "QUILMES OESTE",
      "SAN FRANCISCO SOLANO",
      "VILLA LA FLORIDA"
    ],
    "RAMALLO": [
      "EL JUPITER",
      "EL PARAISO",
      "EL TONELERO",
      "HERRERA",
      "LA FERIA",
      "LA INDEPENDENCIA",
      "LAS BAHAMAS",
      "LOS TOLDOS",
      "MANANTIALES CHICOS",
      "MARELLI",
      "PEREZ MILLAN",
      "RAMALLO",
      "SAN CARLOS",
      "VILLA GENERAL SAVIO",
      "VILLA RAMALLO",
      "ZINO"
    ],
    "RAUCH": [
      "BOCA DE TIGRE",
      "CHAPALEOFU",
      "COLONIA LANGUEYU",
      "COLONIA MARTIN FIERRO",
      "CUARTEL I",
      "DURAZNO CHICO",
      "EL BONETE",
      "EL CHALAR",
      "EL ESCONDITE",
      "EL GUALICHO",
      "LA ANDORRA",
      "LA COLORADA",
      "LA DORMIDA",
      "LA FLORIDA",
      "LA UNION",
      "LAS NEGRAS",
      "LOMA NEGRA",
      "LOMA PARTIDA",
      "LOS GALPONES",
      "LOS MELLIZOS",
      "MARTIN COLMAN",
      "MIRANDA",
      "RAUCH",
      "SAN ALBERTO",
      "SAN JOSE",
      "SANTA ADELA"
    ],
    "RIVADAVIA": [
      "AMERICA",
      "CERRITO",
      "COLONIA EL BALDE",
      "CONDARCO",
      "ESTANCIA LA HAYDEE",
      "FORTIN OLAVARRIA",
      "GONZALEZ MORENO",
      "MIRA PAMPA",
      "RODEO CHICO",
      "ROOSEVELT",
      "SAN MAURICIO",
      "SANSINENA",
      "SUNDBLAD",
      "VALENTIN GOMEZ",
      "VILLA SENA"
    ],
    "ROJAS": [
      "BARRIO LAS MARGARITAS",
      "ESTACION SOL DE MAYO",
      "HUNTER",
      "LA BEBA",
      "LA CALDERA",
      "LA CONCEPCION",
      "LA ROJERA",
      "LA SOLEDAD",
      "LA TIGRA",
      "LA VERDE",
      "LA VIGIA",
      "LA VUELTA",
      "LA VUELTA CHICA",
      "LAS CARABELAS",
      "LAS POLVAREDAS",
      "LOS INDIOS",
      "RAFAEL OBLIGADO",
      "ROBERTO CANO",
      "ROJAS",
      "SAN BASILIO",
      "SANTA FELISA",
      "VILLA MANUEL POMAR",
      "VILLA PARQUE CECIR"
    ],
    "ROQUE PEREZ": [
      "BELLA VISTA",
      "CARLOS BEGUERIE",
      "EL ARBOLITO",
      "EL CARDALITO",
      "EL DESCANSO",
      "EL GRAMILLAL",
      "EL PAJON",
      "EL SEXTO",
      "JUAN ATUCHA",
      "JUAN TRONCONI",
      "LA ARGENTINA",
      "LA GLORIA",
      "LA MERCED",
      "LA PAZ",
      "LA PAZ CHICA",
      "LA QUERENCIA",
      "LA REFORMA",
      "LAS TUNAS",
      "LOS MEDANOS",
      "PASO SAN JUAN",
      "ROQUE PEREZ",
      "SAN JOSE",
      "SAN MARTIN DEL DULCE",
      "SANTIAGO LARRE"
    ],
    "SAAVEDRA": [
      "ABRA DEL HINOJO",
      "ALTA VISTA",
      "ARROYO CORTO",
      "COLONIA SAN MARTIN",
      "COLONIA SAN PEDRO",
      "DUFAUR",
      "EL CORTAPIE",
      "ESPARTILLAR (E)",
      "GOYENA",
      "LA COLONIA NUEVA",
      "LA NORMA",
      "LAS ENCADENADAS",
      "LAS LOMAS",
      "LAS MARIAS",
      "LOS CERRITOS",
      "PIGUE",
      "SAAVEDRA"
    ],
    "SALADILLO": [
      "ACUÑA",
      "ALVAREZ DE TOLEDO",
      "ATUCHA",
      "BLAQUIER",
      "CAMPO VELA",
      "CAZON",
      "CUARTEL I",
      "DAMAS DE LA MISERICORDIA",
      "DEL CARRIL",
      "EL ARENAL DEL CARMEN",
      "EL MANGRULLO",
      "EL NARANJO",
      "EL PUENTE",
      "EMILIANO REYNOSO",
      "LA ARGENTINA",
      "LA BARRANCOSA",
      "LA BLANQUEADA",
      "LA CAMPANA",
      "LA FORTUNA",
      "LA GARITA",
      "LA MARGARITA",
      "LOS GUAYCOS",
      "MARIA ANTONIETA",
      "NUEVA GRANADA",
      "POLVAREDAS",
      "RENACO",
      "SALADILLO",
      "SALADILLO NORTE",
      "SAN BENITO",
      "SAN BLAS",
      "SAN PEDRO"
    ],
    "SALLIQUELO": [
      "QUENUMA",
      "SALLIQUELO"
    ],
    "SALTO": [
      "ARROYO DULCE",
      "BERDIER",
      "CAMPO BLANCO",
      "COLONIA EL RINCON",
      "CRISOL",
      "EL HARAS",
      "GAHAN",
      "INES INDART",
      "LA INVENCIBLE",
      "LA ISABEL",
      "LAS MULAS",
      "MONROE",
      "SALTO",
      "SAN PABLO",
      "SANTA INES",
      "SANTA ISABEL",
      "SANTA ROSA",
      "TACUARI"
    ],
    "SAN ANDRES DE GILES": [
      "AZCUENAGA",
      "CAMPO VAZQUEZ",
      "CULULLU",
      "EL CONDOR",
      "FRANKLIN",
      "HEAVY",
      "LA AMALIA",
      "LA FLORIDA",
      "LA PRIMAVERA",
      "LA VALEROSA",
      "LOS MANUELES",
      "SAN ALBERTO",
      "SAN ANDRES DE GILES",
      "SOLIS",
      "TUYUTI",
      "VILLA ESPIL",
      "VILLA RUIZ",
      "VILLA SAN ALBERTO"
    ],
    "SAN ANTONIO DE ARECO": [
      "CAMINO DE YAMEO",
      "DUGGAN",
      "EL MORO",
      "EL TROPEZON",
      "LA FE",
      "LA ROSADA",
      "PUENTE CASTEX",
      "SAN ANTONIO DE ARECO",
      "VAGUES",
      "VILLA LIA"
    ],
    "SAN CAYETANO": [
      "BALNEARIO SAN CAYETANO",
      "COLONIA RIVADAVIA",
      "CRISTIANO MUERTO",
      "EL CARRETERO",
      "EL INDIO",
      "EL PINO",
      "LA GAMA",
      "OCHANDIO",
      "SAN CAYETANO",
      "VAGNOLI"
    ],
    "SAN FERNANDO": [
      "2° SECCION DE ISLAS",
      "3° SECCION DE ISLAS",
      "ARROYO BORCHES",
      "ARROYO DURAZNO",
      "ARROYO LAS CAÑAS",
      "ARROYO PAY CARABI",
      "CARUPA",
      "ISALAS DE SAN FERNANDO",
      "ISLAS",
      "ISLAS DEL DELTA",
      "LA BARQUITA",
      "LAS CAÑAS",
      "PARANA MINI",
      "RIO CARABELAS",
      "SAN FERNANDO",
      "VICTORIA",
      "VILLA JARDIN",
      "VIRREYES"
    ],
    "SAN ISIDRO": [
      "ACASSUSO",
      "BECCAR",
      "BOULOGNE SUR MER",
      "MARTINEZ",
      "SAN ISIDRO",
      "VILLA ADELINA"
    ],
    "SAN MIGUEL": [
      "BELLA VISTA",
      "CAMPO DE MAYO",
      "MUÑIZ",
      "SAN MIGUEL"
    ],
    "SAN NICOLAS": [
      "CAMPOS SALLES",
      "CONESA",
      "CUARTEL V",
      "EREZCANO",
      "GENERAL ROJO",
      "LA ALICIA",
      "LA CLEMENCIA",
      "LA EMILIA",
      "SAN NICOLAS DE LOS ARROYOS",
      "VILLA CAMPI",
      "VILLA CANTO",
      "VILLA ESPERANZA",
      "VILLA RICCIO"
    ],
    "SAN PEDRO": [
      "ALMACEN DE BASSO",
      "BAJO TALA",
      "BELADRICH",
      "COLEGIALES",
      "DEL PARDO",
      "EL CANTABRICO",
      "EL CENTRO",
      "EL DESCANSO",
      "EL ESPINILLO",
      "EL IDEAL",
      "GOBERNADOR CASTRO",
      "INGENIERO MONETA",
      "LA BOLSA",
      "LA BUENA MOZA",
      "LA CELINA",
      "LA ESTRELLA",
      "LA MATILDE",
      "LA TOSQUERA",
      "LAS CANALETAS",
      "LAS FLORES",
      "LOS MATADEROS",
      "OBLIGADO",
      "PUEBLO DOYLE",
      "RIO TALA",
      "SAN PEDRO",
      "SANTA LUCIA",
      "TABLAS",
      "VILLA JARDIN",
      "VILLA LEANDRA",
      "VILLA SARITA"
    ],
    "SAN VICENTE": [
      "ALEJANDRO KORN",
      "CAMPO ARECHAVAL",
      "DOMSELAAR",
      "EL OMBU",
      "SAMBOROMBON",
      "SAN VICENTE",
      "SANTA ROSA"
    ],
    "SUIPACHA": [
      "CUARTEL IV",
      "CUARTEL IX",
      "CUARTEL VIII",
      "ESTACION LA NEGRA",
      "GENERAL RIVAS",
      "LA DULCE",
      "LOS CARDALES",
      "RUTA 5 KM 132",
      "SUIPACHA"
    ],
    "TANDIL": [
      "ARROYO SECO",
      "AZUCENA",
      "BASE AEREA TANDIL",
      "COLONIA MARIANO MORENO",
      "DE LA CANAL",
      "EL CARMEN",
      "EL CENTINELA",
      "EL DESTINO",
      "EL GALLO",
      "EL REMANSO",
      "EL SOLCITO",
      "FULTON",
      "GARDEY",
      "HARAS GENERAL LAVALLE",
      "IRAOLA",
      "LA PACIFICA",
      "LA PASTORA",
      "LA PESQUERIA",
      "LA PORTEÑA",
      "LA ROSADA",
      "LA UNION",
      "LA VASCONIA",
      "LAS NUMANCIAS",
      "LOS HUESOS",
      "LOS MIMBRES",
      "MARIA IGNACIA",
      "PINAR DE LA SIERRA",
      "SAN ANTONIO",
      "SAN LORENZO",
      "SANTA ANA",
      "SANTA TERESA",
      "TANDIL"
    ],
    "TAPALQUE": [
      "ALTONA",
      "ARCE HERMANOS",
      "CAMPODONICO",
      "COVELLO",
      "CROTTO",
      "EL CASTELLANO",
      "EL COMBATE",
      "EL MIRADOR",
      "EL RETIRO",
      "EL SAUCE",
      "EL TUYUTI",
      "EUFEMIO UBALLES",
      "LA PALOMA",
      "LA PROTEGIDA",
      "LOS JACINTOS",
      "QUINTAS DE TAPALQUE",
      "SABBI",
      "SAN BERNARDO",
      "SANTA MARTA",
      "SANTA ROSA",
      "TAPALQUE",
      "VELLOSO",
      "YERBAS"
    ],
    "TIGRE": [
      "BENAVIDEZ",
      "DIQUE LUJAN",
      "DON TORCUATO ESTE",
      "DON TORCUATO OESTE",
      "EL TALAR",
      "GENERAL PACHECO",
      "ISLAS",
      "LOS TRONCOS DEL TALAR",
      "RICARDO ROJAS",
      "RINCON DE MILBERG",
      "TIGRE",
      "TRES BOCAS"
    ],
    "TORDILLO": [
      "EL CENTINELA",
      "EL MEDANO",
      "EL MONTE",
      "GENERAL CONESA",
      "LA CORVINA",
      "LAS VIBORAS",
      "VILLA ROCH"
    ],
    "TORNQUIST": [
      "BERRAONDO",
      "CHASICO",
      "CHOIQUE",
      "DIQUE PASO PIEDRAS",
      "EL PILAR",
      "ESTOMBA",
      "FORTIN CHACO",
      "FUERTE ARGENTINO",
      "LA ESTHER",
      "LA QUERENCIA",
      "LOS CHILENOS",
      "NAVIDAD",
      "NUEVA ROMA",
      "PELICURA",
      "RODOLFO FUNKE",
      "SALDUNGARAY",
      "SAUCE CHICO",
      "SIERRA DE LA VENTANA",
      "SOMBRA DE TORO",
      "TORNQUIST",
      "TRES PICOS",
      "VILLA SERRANA LA GRUTA",
      "VILLA VENTANA"
    ],
    "TRENQUE LAUQUEN": [
      "30 DE AGOSTO",
      "BERUTTI",
      "COLONIA EL MATE",
      "COLONIA MANUEL 1°",
      "COLONIA MARTIN FIERRO",
      "COLONIA SANTA ANA",
      "CORAZZI",
      "DUHAU",
      "EL CORRENTINO",
      "ELVIRA",
      "FRANCISCO DE VITORIA",
      "FRANCISCO MAGNANO",
      "GIRODIAS",
      "LA ATALAYA",
      "LA CANDELARIA",
      "LA CARRETA",
      "LA MARIA",
      "LA ZANJA",
      "LAS GUASQUITAS",
      "LAS TUNAS",
      "LERTORA",
      "LOS CHAÑARES",
      "MARI LAUQUEN",
      "MAYA",
      "NUEVA CASTILLA",
      "PRIMERA JUNTA",
      "SAN EDUARDO",
      "SAN PEDRO",
      "SANTA CATALINA",
      "TRENQUE LAUQUEN",
      "TRONGE"
    ],
    "TRES ARROYOS": [
      "BALNEARIO ORENSE",
      "CLAROMECO",
      "COLONIA SAN JUAN DE BELLOCQ",
      "COPETONAS",
      "DUNAMAR",
      "EL CARRETERO",
      "EL TRIANGULO",
      "HUESO CLAVADO",
      "LA CONSTANCIA",
      "LA HORQUETA",
      "LA JOSEFINA",
      "LA MANGA",
      "LA POLONIA",
      "LA SORTIJA",
      "LA VICTORIA",
      "LAS VAQUERIAS",
      "LIN CALEL",
      "MICAELA CASCALLARES",
      "ORENSE",
      "PUENTE CARUCHO",
      "PUENTE SUBMARINO PERAL",
      "RETA",
      "RUTA 3 KM 489",
      "RUTA 3 KM 490",
      "SAN FRANCISCO DE BELLOCQ",
      "SAN MAYOL",
      "TRES ARROYOS",
      "VILLA RODRIGUEZ"
    ],
    "TRES DE FEBRERO": [
      "11 DE SEPTIEMBRE",
      "CASEROS",
      "CHURRUCA",
      "CIUDAD JARDIN LOMAS DEL PALOMAR",
      "CIUDADELA",
      "EL LIBERTADOR",
      "JOSE INGENIEROS",
      "LOMA HERMOSA",
      "MARTIN CORONADO",
      "PABLO PODESTA",
      "REMEDIOS DE ESCALADA",
      "SAENZ PEÑA",
      "SANTOS LUGARES",
      "VILLA BOSCH (EST. JUAN MARIA BOSCH)",
      "VILLA RAFFO"
    ],
    "TRES LOMAS": [
      "COLONIA 17",
      "COLONIA MORENO",
      "INGENIERO THOMPSON",
      "LA ADELA",
      "LA GRANDE DEL SUD",
      "LOS AGRARIOS",
      "PEHUELCHES",
      "PUELCHES",
      "TRES LOMAS"
    ],
    "VICENTE LOPEZ": [
      "CARAPACHAY",
      "FLORIDA",
      "FLORIDA OESTE",
      "LA LUCILA",
      "MUNRO",
      "OLIVOS",
      "VICENTE LOPEZ",
      "VILLA ADELINA",
      "VILLA MARTELLI"
    ],
    "VILLA GESELL": [
      "MAR AZUL",
      "MAR DE LAS PAMPAS",
      "VILLA GESELL"
    ],
    "VILLARINO": [
      "ARGERICH",
      "BELLA VISTA",
      "CHOSOICO-ALGARRO",
      "COLONIA CRAICO",
      "COLONIA ESPIE",
      "COLONIA LA MERCED",
      "COLONIA LEJARRETA",
      "COLONIA MASTRANGELO",
      "COLONIA RINCON DE LA ESPUELA",
      "COLONIA SAN ADOLFO",
      "COLONIA SAN ENRIQUE",
      "COUNTRY LOS MEDANOS",
      "EL ALBA",
      "EL CHARA",
      "EL FORTIN",
      "EL REDUCTO",
      "EL ZORRO",
      "HILARIO ASCASUBI",
      "ISLA VERDE",
      "JUAN COUSTE",
      "LA CARLOTA",
      "LA JULITA",
      "LA MASCOTA",
      "LA SELVA",
      "LAS ISLETAS",
      "LAS MASCOTAS",
      "LEJARRAGA",
      "LOS ACEBOS",
      "LOS ALFALFARES",
      "LOS SURGENTES",
      "LOTE 39",
      "MAYOR BURATOVICH",
      "MEDANOS",
      "MONTE PAQUETE",
      "MONTES DE OCA",
      "NICOLAS LEVALLE",
      "PEDRO LURO",
      "SALINA LAS BARRANCAS",
      "SAN JOSE",
      "SANTA CATALINA",
      "TENIENTE ORIGONE"
    ],
    "ZARATE": [
      "ATUCHA",
      "BARRIO SAAVEDRA",
      "COUNTRY CLUB EL CASCO",
      "CUARTEL V",
      "EL TATU",
      "ESCALADA",
      "ISLA BOTIJA",
      "ISLAS",
      "LA PESQUERIA",
      "LAS CUATRO ESQUINAS",
      "LAS PALMAS",
      "LIMA",
      "RUTA 9 KM 103",
      "ZARATE"
    ]
  },
  "CATAMARCA": {
    "ACONQUIJA": [
      "ACONQUIJA",
      "AGUA DE LAS PALOMAS",
      "ALTO DE LAS JUNTAS",
      "BUENA VISTA",
      "CONDOR HUASI",
      "EL ALAMITO",
      "EL ESPINILLO",
      "EL LINDERO",
      "EL PUCARA",
      "LA MESADA",
      "LAS PAMPITAS",
      "PUNTA DEL AGUA",
      "RIO POTRERO"
    ],
    "ANCASTI": [
      "AMANA",
      "ANCASTI",
      "ANQUINCILA",
      "CASA ARMADA",
      "CONCEPCION",
      "EL COMEDERO",
      "EL HUAYCO",
      "EL MOJON",
      "EL QUEBRACHAL",
      "EL SAUCE",
      "EL TACO",
      "EL TALITA",
      "IPIZCA",
      "LA CANDELARIA",
      "LA ESTANCITA",
      "LA FALDA",
      "LA MAJADA",
      "LAS JUNTAS",
      "LOS BULACIOS",
      "LOS MOGOTES",
      "LOS MOLLES",
      "NAVAGUIN",
      "POTRERO DE LOS CORDOBA",
      "RINCO DE IPIZCA",
      "RIO CHICO",
      "SAN FRANCISCO",
      "SAN JOSE",
      "TACANA",
      "YERBA BUENA"
    ],
    "ANDALGALA": [
      "AGUA VERDE",
      "AMANAO",
      "ANDALGALA",
      "BARRANCA MOLLE",
      "CHAQUIAGO",
      "CHOYA",
      "EL COLEGIO",
      "EL POTRERO",
      "EL QUEMADO",
      "HUACO",
      "LA AGUADA",
      "LA ISLA",
      "MINA CAPILLITAS",
      "VIS VIS"
    ],
    "ANTOFAGASTA DE LA SIERRA": [
      "ANTOFAGASTA DE LA SIERRA",
      "ANTOFALLA",
      "ANTOFALLITA",
      "CARACHI PAMPA",
      "EL PEÑON",
      "INCAHUASI",
      "LA CIENAGA REDONDA",
      "LAS CUEVAS",
      "LAS QUINUAS",
      "LOS NACIMIENTOS"
    ],
    "BELEN": [
      "AMPUJACO",
      "BARRIO ARTAZA",
      "BELEN",
      "EL POZO",
      "HUACO",
      "LA PUNTILLA",
      "LA REPRESA",
      "LAS LOMAS",
      "LUNA AGUADA",
      "TALAMAYO"
    ],
    "CAPAYAN": [
      "ADOLFO E. CARRANZA",
      "BALDE DE LA PUNTA",
      "CAPAYAN",
      "CARRANZA",
      "CHUMBICHA",
      "CONCEPCION",
      "EL CARRIZAL",
      "EL MILAGRO",
      "EL QUEMADO",
      "LA LIBERTAD",
      "LAS ANIMAS",
      "LAS BREAS",
      "LAS PALMAS",
      "POZO LINDO",
      "PUESTO NUEVO",
      "SAN MARTIN",
      "SAN PEDRO",
      "TELARITOS",
      "TRAMPASACHA"
    ],
    "CORRAL QUEMADO": [
      "CORRAL QUEMADO",
      "CUESTA DE VICUÑA PAMPA",
      "CULAMPAJA",
      "EL CAJON",
      "HUASI CIENAGA",
      "LA CUESTA",
      "MINAS DE CULAMPAJA",
      "PAPA CHACRA",
      "RODEO GERVAN",
      "ZARCITO"
    ],
    "EL ALTO": [
      "BELLA VISTA",
      "EL ALTO",
      "EL PANTANILLO",
      "EL SAUCE",
      "GUAYAMBA",
      "ILOGA",
      "INFANZON",
      "LA HUERTA",
      "LOS ALAMOS",
      "LOS CORRALES",
      "LOS PEDRAZA",
      "LOS POZOS",
      "OYOLA",
      "RIO DE AVILA",
      "SAUCE HUACHO",
      "TINTIGASTA",
      "VILISMAN"
    ],
    "EL RODEO": [
      "EL RODEO"
    ],
    "FIAMBALA": [
      "AGUA NEGRA",
      "ANTINACO",
      "CASA DE ALTO",
      "CHUQUISACA",
      "CIENAGA GRANDE",
      "CORRAL DE PIEDRA",
      "EL RETIRO",
      "FIAMBALA",
      "LA BANDA",
      "LA CHILCA",
      "LA CIENAGA",
      "LA PUERTA DE TATON",
      "LA RAMADITA",
      "LA SOLEDAD",
      "LAS PAPAS",
      "MEDANITOS",
      "PALO BLANCO",
      "PAMPA BLANCA",
      "PUNTA DEL AGUA",
      "RIO GRANDE",
      "SAUJIL",
      "TATON"
    ],
    "FRAY MAMERTO ESQUIU": [
      "COLLAGASTA",
      "EL HUECO",
      "LA CARRERA",
      "LA FALDA DE SAN ANTONIO",
      "LA TERCENA",
      "POMANCILLO",
      "POMANCILLO ESTE",
      "POMANCILLO OESTE",
      "SAN ANTONIO",
      "SAN JOSE",
      "VILLA LAS PIRQUITAS"
    ],
    "HUALFIN": [
      "FARALLON NEGRO",
      "HUALFIN",
      "LOS NACIMIENTOS",
      "QUEBRADA DE HUALFIN",
      "RIO DE LAS CUEVAS"
    ],
    "HUILLAPIMA": [
      "COLONIA DEL VALLE",
      "COLONIA NUEVA CONETA",
      "CONETA",
      "EL BAÑADO",
      "HUILLAPIMA",
      "LA PARAGUAYA",
      "LOS ANGELES NORTE",
      "LOS ANGELES SUR",
      "LOS BAZAN",
      "LOS CHAÑARITOS",
      "LOS POCITOS",
      "MIRAFLORES",
      "PUESTO DE RUA",
      "SAN PABLO",
      "SISI HUASI"
    ],
    "ICAÑO": [
      "ANCASTILLO",
      "ANJULI",
      "BAVIANO",
      "CABALLA",
      "EL TALA",
      "EL VALLECITO",
      "ESTACION KILOMETRO 1017",
      "ICAÑO",
      "LA ALBIGASTA",
      "LA BARRANQUITA",
      "LA CERRILLADA",
      "LA PARADA",
      "LA RENOVACION",
      "LAS ESQUINAS",
      "LAS IGUANAS",
      "LAS PALMITAS",
      "LAS TEJAS",
      "LAS TOSCAS",
      "PALO PARADO",
      "PAMPA POZO",
      "POZANCONES",
      "PUERTA DE CORDOBA",
      "QUIROS",
      "RIO CHICO",
      "SAN ANTONIO",
      "SANTA ROSA"
    ],
    "LA PUERTA": [
      "COLPES",
      "HUAYCAMA",
      "ISLA LARGA",
      "LA PUERTA",
      "LA PUERTA SUD"
    ],
    "LAS JUNTAS": [
      "LA SALVIA",
      "LAS JUNTAS"
    ],
    "LONDRES": [
      "LA AGUADA",
      "LONDRES",
      "LORO HUASI",
      "SAN ANTONIO",
      "VILLA SAN JOSE"
    ],
    "LOS ALTOS": [
      "ALIJILAN",
      "CUCHINOQUE",
      "EL ABRA",
      "LA BAJADA",
      "LOS ALTOS",
      "LOS MOLLES",
      "LOS TRONCOS",
      "MANANTIALES",
      "MONTE REDONDO",
      "PUERTA GRANDE"
    ],
    "LOS VARELA": [
      "CHUCHUCARUANA",
      "EL BOLSON",
      "HUMAYA",
      "LAS CHACRITAS",
      "LOS CASTILLOS",
      "LOS TALAS",
      "LOS VARELA",
      "RIO DE LAS CASAS VIEJAS",
      "SINGUIL"
    ],
    "MUTQUIN": [
      "APOYACO",
      "COLANA",
      "MUTQUIN"
    ],
    "PACLIN": [
      "AMADORES",
      "BARRO NEGRO",
      "EL BASTIDOR",
      "EL ROSARIO",
      "LA BAJADA",
      "LA HIGUERA",
      "LA MERCED",
      "LA VIÑA",
      "LAS LAJAS",
      "MONTE POTRERO",
      "PALO LABRADO",
      "SAN ANTONIO",
      "SANTA BARBARA",
      "SUMAMPA",
      "TIERRA VERDE",
      "VILLA COLLANTES",
      "VILLA DE BALCOZNA"
    ],
    "POMAN": [
      "BALDE DE LA PAMPA",
      "EL PAJONAL",
      "LOS CIENAGOS",
      "POMAN"
    ],
    "POZO DE PIEDRA": [
      "CONDOR HUASI",
      "LA AGUADA DE LA TOMA",
      "LA ESTANCIA",
      "LA TOMA",
      "LAS BARRANCAS",
      "LAS GRANADILLAS",
      "LAS JUNTAS",
      "LAS VALLAS",
      "PIEDRA LARGA",
      "POZO DE PIEDRA"
    ],
    "PUERTA DE CORRAL QUEMADO": [
      "CAMPO DE LAS CALIVAS",
      "EL DURAZNO",
      "EL TOLAR",
      "JACIPUNCO",
      "LOCONTE",
      "PUERTA DE CORRAL QUEMADO"
    ],
    "PUERTA DE SAN JOSE": [
      "ASAMPAY",
      "CHISTIN",
      "EL CARRIZAL",
      "LA AGUADITA",
      "LA CIENAGA",
      "LA CIENAGA DE ABAJO",
      "LA CIENAGA DE ARRIBA",
      "PUERTA DE SAN JOSE"
    ],
    "RECREO": [
      "CASA DE PIEDRA",
      "EL AYBAL",
      "EL BAÑADO",
      "EL BOSQUECILLO",
      "EL CERCADO",
      "EL CERRITO",
      "EL CHAGUARAL",
      "EL CLERIGO",
      "EL DIQUE",
      "EL DIVISADERO",
      "EL JUMEAL",
      "EL MILAGRO",
      "EL MISTOLITO",
      "EL MORENO",
      "EL QUIMILO",
      "EL ROSARIO",
      "ESQUIU",
      "ESTACION KILOMETRO 969",
      "GARAY",
      "LA ANTIGUA",
      "LA DORADA",
      "LA GUARDIA",
      "LA HORQUETA",
      "LA HORQUETA DE ARRIBA",
      "LA QUINTA",
      "LA SUERTE",
      "LA ZANJA",
      "LAS FLORES",
      "MARIA ELENA",
      "PALO CRUZ",
      "PALO CRUZ DE ABAJO",
      "PALO SANTO",
      "PORTILLO CHICO",
      "POZO DE LA ORILLA",
      "RAMBLONES",
      "RECREO",
      "RIO DE LA DORADA",
      "RIO DEL MISTOLITO",
      "SAN AGUSTIN",
      "SAN BERNARDO",
      "SAN ISIDRO",
      "SAN JOSE",
      "SAN LORENZO",
      "SAN MIGUEL",
      "SAN NICOLAS",
      "SAN PEDRO",
      "SAN RAFAEL",
      "SAN SALVADOR",
      "SANTA LUCIA",
      "SANTA MARTA",
      "SANTO DOMINGO"
    ],
    "SAN FERNANDO": [
      "EL EJE",
      "SAN FERNANDO",
      "SAN FERNANDO NORTE"
    ],
    "SAN FERNANDO DEL VALLE DE CATAMARCA": [
      "EL PANTANILLO",
      "EL TALA",
      "LA CALERA",
      "LA GRUTA",
      "SAN FERNANDO DEL VALLE DE CATAMARCA"
    ],
    "SAN JOSE": [
      "AGUA AMARILLA",
      "AMPAJANGO",
      "ANDALHUALA",
      "CASA DE PIEDRA",
      "CASA DEL CAMPO",
      "CHAÑAR PUNCO",
      "EL DESMONTE",
      "EL TESORO",
      "EL VOLCAN",
      "ENTRE RIOS",
      "FAMABALASTO",
      "FAMATANCA",
      "LA HOYADA",
      "LA LOMA",
      "LA PUNTILLA",
      "LA QUEBRADA",
      "LOS CERRILLOS",
      "LOS SALTOS",
      "MEDANITOS",
      "PAJANGUILLO",
      "PALO SECO",
      "PALOMA YACO",
      "PUNTA DE BALASTO",
      "QUEBRADA DE JUJUY",
      "SAN JOSE BANDA",
      "SAN JOSE NORTE",
      "SAN JOSE VILLA",
      "YAPES"
    ],
    "SANTA MARIA": [
      "CASPICHANGO",
      "EL CAJON",
      "EL CERRITO",
      "EL PUESTO",
      "EL RECREO",
      "FUERTE QUEMADO",
      "LA OVEJERIA",
      "LA SOLEDAD",
      "LAMPACITO",
      "LAS MOJARRAS",
      "LORO HUASI",
      "OVEJERIA",
      "RECREO",
      "SANTA MARIA"
    ],
    "SANTA ROSA": [
      "ALTA GRACIA",
      "AMPOLLA",
      "BAÑADO DE OVANTA",
      "CAMPO ALEGRE",
      "CORTADERAS",
      "DOS POCITOS",
      "EL QUEBRACHITO",
      "LAS CAÑAS",
      "LAS HIGUERITAS",
      "LAS TUNAS",
      "LAVALLE",
      "POZO DEL BAJO",
      "POZO DEL CAMPO",
      "PUESTO DEL MEDIO",
      "SALAUCA",
      "SAN PEDRO"
    ],
    "SAUJIL": [
      "COLPES",
      "EL POTRERO DE SAUJIL",
      "GUANACO YACO",
      "JOYANGO",
      "LA PERLA",
      "LAS CASITAS",
      "MADERERA SAN ANTONIO",
      "PIPANACO",
      "RINCON",
      "SAN JOSE DE COLPES",
      "SAN MIGUEL",
      "SAUJIL",
      "SIJAN",
      "TUCUMANAO",
      "ZAPICRUZ"
    ],
    "TAPSO": [
      "ACHALCO",
      "ALBIGASTA",
      "AYAPASO",
      "LA CALERA",
      "LA TUNA",
      "LOS MORTEROS",
      "LOS OSORES",
      "PUERTA DE MOLLE YACO",
      "TAPSO"
    ],
    "TINOGASTA": [
      "ANILLACO",
      "BANDA DE LUCERO",
      "CACHIYUYO",
      "CERRO NEGRO",
      "COPACABANA",
      "CORDOBITA",
      "COSTA DE REYES",
      "EL DURAZNO",
      "EL PUEBLITO",
      "EL PUESTO",
      "EL SALADO",
      "LA AGUADITA",
      "LA ISLA",
      "LA PUNTILLA",
      "LAS CHACRAS",
      "LAS HIGUERITAS",
      "LOS BALVERDIS",
      "LOS PALACIOS",
      "LOS ROBLEDOS",
      "RIO COLORADO",
      "SAN MIGUEL",
      "SAN PEDRO",
      "SANTA CRUZ",
      "SANTA ROSA",
      "TINOGASTA",
      "VILLA LUJAN",
      "VILLA SAN ROQUE",
      "VINQUIS"
    ],
    "VALLE VIEJO": [
      "AGUA COLORADA",
      "ANTAPOCA",
      "EL BAÑADO",
      "EL PORTEZUELO",
      "HUAYCAMA",
      "LAS ESQUINAS",
      "LAS TEJAS",
      "LOS ARBOLITOS",
      "POLCOS",
      "POZO DEL MISTOL",
      "SAN ISIDRO",
      "SANTA CRUZ",
      "SANTA ROSA",
      "SUMALAO",
      "VILLA DOLORES"
    ],
    "VILLA VIL": [
      "ALTO EL BOLSON",
      "BARRANCA LARGA",
      "CORRAL BLANCO",
      "LAGUNA BLANCA",
      "LAS CUEVAS",
      "VILLA VIL"
    ]
  },
  "CHACO": {
    "AVIA TERAI": [
      "AVIA TERAI",
      "COLONIA MARIANO SARRATEA",
      "LOTE 13",
      "LOTE 14",
      "LOTE 29",
      "LOTE 8",
      "LOTE 9",
      "PAMPA LA DESATINADA",
      "PAMPA VERDE"
    ],
    "BARRANQUERAS": [
      "BARRANQUERAS",
      "EL PALMAR"
    ],
    "BASAIL": [
      "BASAIL",
      "COLONIA PALMIRA",
      "EL SALADILLO",
      "KILOMETRO 34",
      "LA DORILA",
      "LAS MERCEDES",
      "LOMA ALTA",
      "PARALELO 28",
      "PLAYA FORD"
    ],
    "CAMPO LARGO": [
      "CAMPO LARGO",
      "FORTIN LAS CHUÑAS",
      "LOTE 33",
      "LOTE 49",
      "LOTE 50",
      "PAMPA OCULTA"
    ],
    "CAPITAN SOLARI": [
      "CAMPO GRANDE",
      "CAMPO NOVO",
      "CAMPO QUIJANO",
      "CAPITAN SOLARI",
      "COLONIA MIXTA",
      "ESTANCIA LA FORTUNA",
      "KILOMETRO 575",
      "LA PASTORIL",
      "LEGUA  54",
      "LOTE 20",
      "LOTE 6",
      "LOTE 7",
      "SALTO DE LA VIEJA",
      "TRES CEIBOS"
    ],
    "CHARADAI": [
      "CHARADAI",
      "ESTANCIA LAS UNIDAS",
      "HAUMONIA",
      "HORQUILLA",
      "KILOMETRO 25",
      "LA SABANA",
      "RIO TAPENAGA"
    ],
    "CHARATA": [
      "CHARATA",
      "COLONIA GENERAL LAVALLE",
      "COLONIA GENERAL NECOCHEA",
      "EL FISCO",
      "LAGUNA DEL SARGENTO",
      "LAS TOLDERIAS",
      "PAMPA AVILA",
      "PAMPA BARRERA",
      "PAMPA CABRERA",
      "PAMPA CEJAS",
      "PAMPA DEL CIELO",
      "PAMPA GALVAN",
      "PAMPA MATADERO",
      "PAMPA MORENO",
      "PAMPA PAEZ",
      "PAMPA ROLDAN",
      "PAMPA SOMMER",
      "TRES ESTACAS"
    ],
    "CHOROTIS": [
      "CHOROTIS",
      "COLONIA CABEZA DE TIGRE",
      "ESTANCIA EL AGUARAY",
      "TRES MOJONES",
      "TRES MOJONES ESTE",
      "TRES MOJONES OESTE",
      "VENADOS GRANDES"
    ],
    "CIERVO PETISO": [
      "CIERVO PETISO",
      "COLONIA LA FLORIDA",
      "LA ENTRERRIANA"
    ],
    "COLONIA ABORIGEN": [
      "COLONIA ABORIGEN",
      "COLONIA ABORIGEN CHACO"
    ],
    "COLONIA BENITEZ": [
      "BARRIO DE LOS PESCADORES",
      "CAMPO ROSSI",
      "COLONIA BENITEZ",
      "ISLA ANTEQUERA",
      "LOTE 1",
      "PUENTE SAN PEDRO",
      "TRES HORQUETAS"
    ],
    "COLONIA ELISA": [
      "COLONIA EL CACIQUE",
      "COLONIA ELISA",
      "INGENIERO BARBET"
    ],
    "COLONIA POPULAR": [
      "ARROYO SALADILLO",
      "COLONIA CRUCE VIEJO",
      "COLONIA POPULAR",
      "LA CHOZA",
      "LOTE 149",
      "PUERTO BASTIANI"
    ],
    "COLONIAS UNIDAS": [
      "COLONIAS UNIDAS"
    ],
    "CONCEPCION DEL BERMEJO": [
      "COLONIA PAMPA BOLSA SUR",
      "COLONIA PAMPA UNION",
      "CONCEPCION DEL BERMEJO",
      "EL SILENCIO",
      "LA RALERA",
      "LOTE 30",
      "PAMPA CUVALO",
      "PAMPA EL MANGRULLO",
      "PAMPA GRANDE",
      "PAMPA JUANITA",
      "PAMPA PEREYRA",
      "PAMPA VIRGEN"
    ],
    "CORONEL DU GRATY": [
      "CAMPO UGARTE",
      "COLONIA LA AVANZADA",
      "COLONIA LA COLORADA",
      "CORONEL DU GRATY",
      "EL CABURE",
      "EL PALMAR",
      "GOLONDRINAS SUR",
      "LA ESTELA",
      "LAS GOLONDRINAS NORTE",
      "LOS FORTINES"
    ],
    "CORZUELA": [
      "CAMPO CANTON",
      "COLONIA JUAN LAVALLE",
      "COLONIA SAN LORENZO",
      "CORZUELA",
      "CORZUELA NORTE",
      "PAMPA ALSINA",
      "PAMPA LA PORTEÑA",
      "PAMPA ZAPPA",
      "SAN ANTONIO"
    ],
    "COTE LAI": [
      "ARBOL SOLO",
      "COTE LAI",
      "ESTANCIA DON OVIDIO",
      "ESTANCIA EL 38"
    ],
    "EL ESPINILLO": [
      "EL ESPINILLO"
    ],
    "EL SAUZALITO": [
      "BAJO VERDE",
      "BOLSA GRANDE",
      "CAMPO NOGUERA",
      "CORRALITO",
      "EL BALLADO",
      "EL CEBILAR",
      "EL COLORADO",
      "EL QUEBRACHAL",
      "EL SAUZAL",
      "EL SAUZALITO",
      "EL TIMBO",
      "FORTIN BELGRANO",
      "GENERAL MITRE",
      "LA COSTOSA",
      "LA ESTACION",
      "LA INVERNADA",
      "LA ZANJA",
      "LAGUNA AYARDE",
      "LAGUNITA",
      "LAS FLORES",
      "LOS BARRILES",
      "MOLLE MARCADO",
      "POZO CERCADO",
      "POZO DEL ANTA",
      "POZO DEL CINCUENTA",
      "POZO DEL TALA",
      "POZO DEL TIGRE",
      "POZO EL GALLO",
      "POZO LA BREA",
      "POZO LARGO",
      "SANTA RITA",
      "TARTAGAL",
      "TRES POZOS",
      "VINALITO",
      "WICHI"
    ],
    "ENRIQUE URIEN": [
      "ENRIQUE URIEN",
      "LA CARLOTA",
      "LA MANUELA",
      "LA VIRUELA"
    ],
    "FONTANA": [
      "FONTANA",
      "VICENTINI",
      "VILLA ORO"
    ],
    "FUERTE ESPERANZA": [
      "ALTO ALEGRE",
      "BAJOS DE ALVARADO",
      "CALIFORNIA",
      "CAMPO GRANDE",
      "EL ATENTO",
      "EL PALO SANTO",
      "EL PALO SANTO 2",
      "EL PARAISO",
      "EL POLENON",
      "EL RECREO",
      "EL TRIUNFO",
      "FUERTE ESPERANZA",
      "GENERAL ROCA",
      "LA BARRACA",
      "LA ENSENADA",
      "LA ENTRADA",
      "LA FIDELIDAD",
      "LA FLOJERA",
      "LA FORTUNA",
      "LA MESADA",
      "LA NACION",
      "LA SALVACION",
      "LAGUNA ARAUJO",
      "LAS BLANCAS",
      "LOS MADREJONES",
      "M. KOLBAS",
      "MONTEVIDEO",
      "NUEVA POBLACION",
      "NUEVO",
      "PALO FLOJAL",
      "PASO DE LOS LIBRES",
      "POZO DE LOS SURIS",
      "POZO DEL GATO",
      "POZO DEL GRIS",
      "POZO DEL MATACO",
      "POZO DEL SALADO",
      "POZO DEL SAPO",
      "POZO EL TOBA",
      "POZO LA OSCA",
      "SAN JUANCITO",
      "SANTA MARIA",
      "SANTO DOMINGO",
      "SANTO TOMAS"
    ],
    "GANCEDO": [
      "GANCEDO",
      "LA BOLSA"
    ],
    "GENERAL CAPDEVILA": [
      "CAMPO MARCELINO UGARTE",
      "COLONIA WELBERS SUR",
      "GENERAL CAPDEVILA"
    ],
    "GENERAL PINEDO": [
      "COLONIA BRAVO",
      "COLONIA SAN ANTONIO",
      "EL PALMAR",
      "GENERAL PINEDO",
      "LA PICADA",
      "LAS LEONAS",
      "MESON DE FIERRO",
      "PALMAR NORTE",
      "PAMPA DOROTIER",
      "PAMPA GALVAN",
      "PAMPA GONZALEZ",
      "PAMPA LANDRIEL",
      "PAMPA SCHMIDT",
      "PINEDO VIEJO"
    ],
    "GENERAL SAN MARTIN": [
      "BUENA VISTA",
      "CAMPO ARAOZ",
      "CAMPO BLANCO",
      "CAMPO LA AURORA",
      "CAMPO PITTERI",
      "CAMPO ROFFO",
      "CAMPO WINTER",
      "COLONIA ALCALA",
      "COLONIA ESPERANZA",
      "COLONIA OESTE",
      "COLONIA SAN FRANCISCO",
      "COLONIA SAN ISIDRO",
      "COLONIA ZAPALLAR NORTE",
      "COSTA GUAYCURU",
      "EL CORRENTOSO",
      "EL FISCALITO",
      "EL LUNAR",
      "EL SOMBRERITO",
      "GENERAL JOSE DE SAN MARTIN",
      "LA PALMIRA",
      "LAGUNA LOBO",
      "LEGUA 131",
      "LOTE 532",
      "LOTE 540",
      "LOTE 551",
      "LOTE 92",
      "PUERTO ZAPALLAR",
      "PUESTO EXPEDICION",
      "RINCON DEL RIO DE ORO",
      "SIETE ARBOLES",
      "TRES BANDERAS",
      "VILLA JARDIN"
    ],
    "GENERAL VEDIA": [
      "CABRAL CUE",
      "EL RETIRO",
      "GENERAL VEDIA",
      "GUAYCURU",
      "LAS ROSAS",
      "LOMA ALTA",
      "LOTE FISCAL 16",
      "SAN CARLOS",
      "TACUARI"
    ],
    "HERMOSO CAMPO": [
      "COLONIA CAMPO HERMOSO",
      "COLONIA JACARANDA II",
      "COLONIA PUERTA DEL LEON",
      "COLONIA PUERTA DEL LEON SUR",
      "COLONIA TAÑIGO II",
      "EL JACARANDA",
      "EL TIZON",
      "EL ÑANDUBAY",
      "HERMOSO CAMPO",
      "ITIN",
      "LOTE 14",
      "LOTE 15",
      "LOTE 19",
      "LOTE 33",
      "LOTE 40",
      "TAÑIGO"
    ],
    "ISLA DEL CERRITO": [
      "EL ATAJITO",
      "ISLA DEL CERRITO"
    ],
    "JUAN JOSE CASTELLI": [
      "ALBERDI",
      "BELLA VISTA",
      "CAMPO BEDOGNI",
      "CAMPO DE MAYO",
      "CAMPO DEL ALTO",
      "CAMPO FLORIDO",
      "COLONIA LA FLORIDA GRANDE",
      "COLONIA MONTE QUEMADO",
      "COSTA RICA",
      "EL ALGARROBAL",
      "EL ASUSTADO",
      "EL COLCHON",
      "EL CORREDERO",
      "EL CUARENTA Y CUATRO",
      "EL DESTIERRO",
      "EL ESCONDIDO",
      "EL ESTANQUE",
      "EL GRAMILLAR",
      "EL JURAMENTO",
      "EL PALOMO",
      "EL PARAISAL",
      "EL PROGRESO",
      "EL RINCON DICHOSO",
      "EL TELASCO",
      "EL TOROLTAY",
      "EL ZANJON",
      "EL ÑANDU",
      "EL ÑANDUBAY",
      "JUAN JOSE CASTELLI",
      "LA ARGENTINA",
      "LA BOLSA",
      "LA ESPERANZA",
      "LA FLORIDA",
      "LA GERONIMA",
      "LA GLORIA",
      "LA INDIANA",
      "LA MORA",
      "LA NUEVA UNION",
      "LA RINCONADA",
      "LA SELVA",
      "LA SOLEDAD",
      "LA UNION",
      "LAS DELICIAS",
      "LAS MARAVILLAS",
      "LAS PALOMAS",
      "LAS TUNILLAS",
      "LAS VERTIENTES",
      "LOS MILAGROS",
      "LOS POTREROS",
      "MIRAMAR",
      "MONTE QUEMADO",
      "MONTE REDONDO",
      "OLLA QUEBRADA",
      "PAMPA ALMIRON",
      "PAMPA CASTRO",
      "PAMPA LA CRUZ",
      "PAMPA LOS BEDOGNI",
      "PAMPA MACHETE",
      "PAMPA NUEVA",
      "PAMPA SAN MARTIN",
      "PAMPA TOLOSA",
      "PAMPA TOLOSA CHICA",
      "PASO SOSA",
      "POZO COLORADO",
      "POZO DE LA TUNA",
      "POZO DEL BAYO",
      "POZO DEL TORO",
      "PUERTA NEGRA",
      "RIO MUERTO CRUZ",
      "SAN AGUSTIN",
      "SAN JOSE",
      "SAN LUIS",
      "SAN MANUEL",
      "SAN VICENTE",
      "SANTA CARMEN",
      "SIMBOLAR",
      "TOLDERIAS",
      "VIBORAS BLANCAS",
      "ZAPARINQUI"
    ],
    "LA CLOTILDE": [
      "COLONIA GENERAL URQUIZA",
      "COLONIA JOSE MARMOL",
      "COLONIA N. AVELLAN",
      "EL TABACAL",
      "LA CLOTILDE"
    ],
    "LA EDUVIGIS": [
      "CAMPO ANTONIELI",
      "LA BLANCA",
      "LA EDUVIGIS",
      "LA TEXTIL",
      "LOMA FLORIDA",
      "LOTE 18",
      "LOTE 51",
      "RESERVA FISCAL",
      "SELVAS DEL RIO DE ORO"
    ],
    "LA ESCONDIDA": [
      "COLONIA EL CACIQUE LLORON",
      "KILOMETRO 548",
      "LA ESCONDIDA",
      "LEGUA 41"
    ],
    "LA LEONESA": [
      "LA LEONESA",
      "LAPACHO",
      "MAIPU",
      "QUIA",
      "RINCON DE LUNA",
      "RINCON DEL ZORRO"
    ],
    "LA TIGRA": [
      "LA CUCHILLA",
      "LA TIGRA",
      "LOTE 11",
      "LOTE 12"
    ],
    "LA VERDE": [
      "COLONIA EL 54",
      "LA VERDE",
      "MAKALLE VIEJO",
      "QUIJANO"
    ],
    "LAGUNA BLANCA": [
      "COLONIA SURIZ",
      "LAGUNA BLANCA"
    ],
    "LAGUNA LIMPIA": [
      "LAGUNA LIMPIA"
    ],
    "LAPACHITO": [
      "LAPACHITO"
    ],
    "LAS BREÑAS": [
      "2 DE MAYO",
      "CAMPO CANTON",
      "COLONIA GENERAL NECOCHEA",
      "COLONIA JUAN LAVALLE",
      "CURVA DE NOVOA",
      "EL ARENAL",
      "EL ESTERO",
      "EL PUCA",
      "EL TRIANGULO",
      "INDIA MUERTA",
      "LA ESTERLINA",
      "LA SELVA",
      "LAS BREÑAS",
      "LAS PIEDRITAS",
      "LOS ARENALES",
      "LOS CERRITOS",
      "LOTE NORASSI",
      "PAMPA BRUGNOLI",
      "PAMPA CARNEVALE",
      "PAMPA CASTRO",
      "PAMPA DEL ZORRO",
      "PAMPA GOMEZ",
      "PAMPA HERMOSA",
      "PAMPA IPORA GUAZU",
      "PAMPA LEGUIZAMON",
      "PAMPA MITRE",
      "PAMPA SAN MARTIN",
      "PAMPA SANDI",
      "PAMPA SUAREZ",
      "RECOVECO",
      "SANTA ELENA",
      "SANTA JUSTINA"
    ],
    "LAS GARCITAS": [
      "CAMPO DEL BLANCO",
      "COLONIA LA DIFICULTAD",
      "INDIO MUERTO",
      "LAS GARCITAS",
      "LOTE 21",
      "LOTE 9",
      "PAJARO BLANCO",
      "PASO DEL OSO"
    ],
    "LAS PALMAS": [
      "CANCHA LARGA",
      "EL PALMAR",
      "EL PUERTO",
      "LA ISLA",
      "LAS PALMAS",
      "LIMITA",
      "MONGAY"
    ],
    "LOS FRENTONES": [
      "CUATRO BOCAS",
      "EL ARENAL",
      "LA TRANQUILIDAD",
      "LAS DELICIAS",
      "LOS FRENTONES",
      "PALO BLANCO",
      "PAMPA QUIMILI",
      "RIO MUERTO",
      "SANTA ROSA"
    ],
    "MACHAGAI": [
      "CAMPO RIAÑO",
      "COLONIA BLAS PARERA",
      "COLONIA GENERAL ARENALES",
      "COLONIA GENERAL LAMADRID",
      "COLONIA GUALTIERI",
      "COLONIA LA LOLA",
      "COLONIA LA TAMBORA",
      "COLONIA TRES PALMAS",
      "COLONIA URIBURU",
      "EL MARTILLO",
      "EL RINCON",
      "EL TOTORAL",
      "LA ESPERANZA",
      "LA LOMITA",
      "LOS BLANQUIZALES",
      "LOTE 22",
      "LOTE 24",
      "LOTE 38",
      "LOTE 39",
      "MACHAGAI",
      "NAPALPI",
      "PAMPA BANDERA",
      "PAMPA OMBU",
      "PAMPA VERDE",
      "PASO DEL OSO",
      "PUEBLO VIEJO",
      "SANTA MARTA"
    ],
    "MAKALLE": [
      "CAMPO PHILIPON",
      "MAKALLE"
    ],
    "MARGARITA BELEN": [
      "COLONIA AMADEO",
      "COLONIA SAN MIGUEL",
      "COSTA INE",
      "MARGARITA BELEN"
    ],
    "MIRAFLORES": [
      "1° DE MAYO",
      "4 DE FEBRERO",
      "BAJADA ALTA",
      "BAJO HONDO",
      "BALBUENA",
      "CAMPO LA CHINA",
      "CENTRAL NORTE",
      "CRUCE PEÑALOZA",
      "EL ALGARROBO",
      "EL CAÑON",
      "EL DESCANSO",
      "EL MILAGRO",
      "EL MOJO",
      "EL PALMAR",
      "EL QUEBRACHO",
      "EL QUEBRACHO BALEADO",
      "EL RETIRO",
      "GUEMES",
      "LA ARMONIA",
      "LA CHEOGUE",
      "LA ESMERALDA",
      "LA GRINGA",
      "LA MEDIA LUNA",
      "LAS CUATRO BOCAS",
      "LAS HACHERAS",
      "LAS MARGARITAS",
      "LAS PUERTAS",
      "LOS CIENAGOS",
      "LOS PEREYRAS",
      "LOS PLACERES",
      "LOS QUIRQUINCHOS",
      "LOS ROSALES",
      "LOTE 126",
      "LOTE 71",
      "LOTE 76",
      "MANANTIALES",
      "MIRAFLORES",
      "MONTE CASEROS",
      "NUEVA UNION",
      "PALO MARCADO",
      "PASO DE LA CRUZ",
      "POZO DE LA MULA",
      "POZO DE LA PAVA",
      "POZO DEL NEGRO",
      "POZO EL ZAPALLAR",
      "POZO LA GRINGA",
      "ROSALES",
      "SAN LORENZO",
      "SANTA VICTORIA",
      "TECHAT",
      "TORRE DEL MIRADOR",
      "YAPEYU"
    ],
    "MISION NUEVA POMPEYA": [
      "NUEVA POMPEYA"
    ],
    "NAPENAY": [
      "LOTE 27",
      "NAPENAY"
    ],
    "PAMPA ALMIRON": [
      "KILOMETRO 62",
      "PAMPA ALMIRON"
    ],
    "PAMPA DEL INDIO": [
      "CAMPO ALEMANY",
      "CAMPO LOS TOROS",
      "CANCHA LARGA",
      "COLONIA EL CIERVO",
      "COLONIA MIXTA",
      "COLONIA OMBU",
      "COLONIA TRES LAGUNAS",
      "CUARTA LEGUA",
      "EL SALVAJE",
      "EL TACURUZAL",
      "FORTIN BROWN",
      "LA LEONOR",
      "LA LOMA",
      "LAS BRAVAS",
      "LAS CHUÑAS",
      "LOTE 4",
      "LOTE 96",
      "LOTE AGRICOLA 82",
      "PAMPA DEL INDIO",
      "PUEBLO VIEJO",
      "SANTA RITA",
      "SANTOS LUGARES",
      "TRES LAGUNAS"
    ],
    "PAMPA DEL INFIERNO": [
      "PAMPA DEL INFIERNO",
      "PAMPA HERMOSA"
    ],
    "PRESIDENCIA DE LA PLAZA": [
      "COLONIA BRANDSEN NORTE",
      "COLONIA BRANDSEN SUR",
      "COLONIA HIPOLITO VIEYTES",
      "COLONIA PASTORIL",
      "COLONIA SANTA ELENA",
      "CUATRO ARBOLES",
      "FORTIN AGUILAR",
      "GUAYAIBI",
      "PRESIDENCIA DE LA PLAZA"
    ],
    "PRESIDENCIA ROCA": [
      "CAMPO MEDINA",
      "CAMPO NUEVO",
      "PAMPA CHICA",
      "PRESIDENCIA ROCA"
    ],
    "PRESIDENCIA ROQUE SAENZ PEÑA": [
      "BAJO HONDO GRANDE",
      "COLONIA BAJO HONDO",
      "COLONIA BAJO HONDO CHICO",
      "COLONIA CERVEZA HELADA",
      "COLONIA EL TOBA",
      "COLONIA NAPENAY",
      "COLONIA PAMPA ALEGRIA",
      "COLONIA RIVADAVIA",
      "COLONIA SARMIENTO",
      "ENSANCHE NORTE",
      "LA CHIQUITA NORTE",
      "LA MASCOTA",
      "LA POBLADORA",
      "LOTE XVII",
      "PAMPA ALEGRIA",
      "PAMPA GALPON",
      "PAMPA GAMBA",
      "PAMPA LOCA",
      "PRESIDENCIA ROQUE SAENZ PENA"
    ],
    "PUERTO BERMEJO": [
      "COLONIA MIRASOL",
      "COLONIA SAN EDUARDO",
      "PUERTO BERMEJO NUEVO",
      "PUERTO BERMEJO VIEJO",
      "TRES HORQUETAS"
    ],
    "PUERTO EVA PERON": [
      "PUERTO EVA PERON"
    ],
    "PUERTO TIROL": [
      "ESTACION GENERAL OBLIGADO",
      "KILOMETRO 519",
      "LA LUCINDA",
      "PUERTO TIROL",
      "UNITAN",
      "VILLA JALON"
    ],
    "PUERTO VILELAS": [
      "EL NARANJITO",
      "ISLA SOTO",
      "PUERTO VILELAS"
    ],
    "QUITILIPI": [
      "BAJO HONDO CHICO",
      "CACIQUE DOMINGA",
      "CAMPO FELDMAN",
      "COLONIA BLAS PARERA",
      "COLONIA EL PARAISAL",
      "COLONIA GENERAL PAZ",
      "COLONIA TACURUZAL",
      "COLONIA URIBURU",
      "EL ZANJON",
      "ESTACION LA CHIQUITA",
      "LA MATANZA",
      "LA TAMBORA",
      "NUEVA POBLACION",
      "PAMPA BANDERA",
      "PAMPA ESPERANZA",
      "PAMPA LEGUA CUATRO",
      "PAMPA VERDE",
      "QUITILIPI",
      "RESERVA FERROCARRIL",
      "VILLA EL PALMAR"
    ],
    "RESISTENCIA": [
      "COLONIA BARANDA",
      "COLONIA TACUARI",
      "EL SALADO",
      "LA QUERENCIA",
      "LOS PALMARES",
      "RESISTENCIA"
    ],
    "SAMUHU": [
      "LOTE 14",
      "LOTE 23",
      "LOTE 25",
      "LOTE 3",
      "LOTE 4",
      "LOTE 8",
      "SAMUHU"
    ],
    "SAN BERNARDO": [
      "COLONIA DOMINGO MATHEU",
      "LA SIRENA",
      "LOTE 1",
      "LOTE 10",
      "LOTE 13",
      "LOTE 5",
      "LOTE 6",
      "SAN BERNARDO"
    ],
    "SANTA SYLVINA": [
      "CAMPO LAS PUERTAS",
      "COLONIA CAMPO DEL BANCO",
      "COLONIA EL URUNDAY",
      "COLONIA JACARANDA SUR",
      "EL ÑANDUBAY",
      "LAS AJENAS",
      "SANTA SYLVINA"
    ],
    "TACO POZO": [
      "9 DE JULIO",
      "ALTA ESPERANZA",
      "CASTELLI",
      "CHACO PORA",
      "EL BRASIL",
      "EL INDIO",
      "EL LEBRETON",
      "EL PARAISO",
      "EL PINTADO",
      "EL QUINTO",
      "EL ROSILLO",
      "EL VALLE",
      "KILOMETRO 27",
      "LA AGUADA",
      "LA ARGENTINA",
      "LA CHINA",
      "LA ILUSION",
      "LA PALOMA",
      "LA PINTA",
      "LA PROVIDENCIA",
      "LA SARA",
      "LAS CARPAS",
      "LAS FLORES",
      "LIBERTAD",
      "LOS MAGOS",
      "LOS TIGRES",
      "LOS TOBAS",
      "LOTE 34",
      "LUJAN",
      "MADRE DE DIOS",
      "NUEVA YORK",
      "OJO DE AGUA",
      "POZO HONDO",
      "PRIMAVERA",
      "SAN AGUSTIN",
      "SAN ANTONIO",
      "SAN JOSE",
      "SAN LUIS",
      "SAN MARTIN",
      "SAN TELMO",
      "SANTA AGUEDA",
      "SANTA CRUZ",
      "SANTA ELENA",
      "SANTA LUCIA",
      "SANTA RITA",
      "SOL DE MAYO",
      "TACO POZO",
      "URUNDEL"
    ],
    "TRES ISLETAS": [
      "2 DE ABRIL",
      "CABA ÑARO",
      "COLONIA PAMPA ALELAL",
      "COLONIA TACURUZAL",
      "COLONIA VELEZ SARSFIELD",
      "EL 42",
      "EL 45",
      "EL 50",
      "EL AGUACERITO",
      "EL BOQUERON",
      "EL MARTILLO",
      "EL MONTE QUEMADO CHICO",
      "EL PALMAR CHICO",
      "EL QUEMADO GRANDE",
      "ESTACION KILOMETRO 841",
      "ESTACION KILOMETRO 884",
      "LA CURVA",
      "LA LLAVE",
      "LA MATANZA",
      "LA MEDIA LUNA",
      "LA PELIGROSA",
      "LA RINCONADA",
      "LAS GOMAS",
      "LOTE 10",
      "LOTE 12 CHICO",
      "LOTE 18",
      "LOTE 20",
      "PAMPA AGUARA",
      "PAMPA DEL GALLO",
      "PAMPA GHAN",
      "PAMPA LAGLAIVE",
      "PAMPA NARDELLI",
      "PAMPA PALANGANA",
      "PAMPA SENA",
      "PATO REAL",
      "RIO MUERTO",
      "TOUNDAIAN",
      "TRES ISLETAS"
    ],
    "VILLA ANGELA": [
      "COLONIA JUAN JOSE PASO",
      "COLONIA LA CHAQUEÑA",
      "COLONIA PEGOURIEL",
      "EL PASTORIL",
      "LOTE 11",
      "LOTE 20",
      "LOTE 88",
      "MESON DE FIERRO",
      "PUEBLO CLODOMIRO DIAZ",
      "VILLA ANGELA"
    ],
    "VILLA BERTHET": [
      "LOTE 15",
      "LOTE 17",
      "LOTE 18",
      "LOTE 19",
      "LOTE 20",
      "LOTE 21",
      "LOTE 5",
      "VILLA BERTHET"
    ],
    "VILLA RIO BERMEJITO": [
      "BERLIN",
      "COLONIA EL ALAZAN",
      "DIEZ DE MAYO",
      "EL CRUCE",
      "FORTIN LAVALLE",
      "LOTE 39",
      "PUERTO LAVALLE",
      "VILLA RIO BERMEJITO"
    ]
  },
  "CHUBUT": {
    "28 DE JULIO": [
      "28 DE JULIO"
    ],
    "ALDEA APELEG": [
      "ALDEA APELEG"
    ],
    "ALDEA BELEIRO": [
      "ALDEA BELEIRO"
    ],
    "ALDEA EPULEF": [
      "ALDEA EPULEF"
    ],
    "ALTO RIO SENGUER": [
      "ALTO RIO SENGUER",
      "LAGO FONTANA"
    ],
    "AREA SIN GOBIERNO": [
      "ALTO DE LAS PLUMAS",
      "ARROYO VERDE",
      "BAHIA BUSTAMANTE",
      "BAJADA DEL DIABLO",
      "BAJO DEL GUALICHO",
      "CABO RASO",
      "CAMPAMENTO VILLEGAS",
      "CANQUEL",
      "CARHUE NIYEO",
      "CERRO CONDOR",
      "CHACAY ESTE",
      "CHACAY OESTE",
      "CHASICO",
      "COLELACHE",
      "COSTA DE CHUBUT",
      "COSTA DEL GUALJAINA",
      "EL MAYOCO",
      "EL MIRADOR",
      "EL MIRASOL",
      "EL MOLLE",
      "EL PAJARITO",
      "EL PORTEZUELO",
      "EL RIACHO SAN JOSE",
      "EL SOMBRERO",
      "EL TORDILLO",
      "EL TREBOL",
      "EL TURBIO",
      "FOFO CAHUEL",
      "GARAYALDE",
      "HOLDICH",
      "LELEQUE",
      "LOS MANANTIALES",
      "LOS TAMARISCOS",
      "MALASPINA",
      "MALLIN GRANDE",
      "NUEVA LUBECKA",
      "PAMPA DE AGNIA",
      "PAMPA DEL CASTILLO",
      "PAMPA NEGRA",
      "PASO MORENO",
      "PASTOS BLANCOS",
      "PIEDRA PARADA",
      "PUNTA DELGADA",
      "PUNTA NORTE",
      "RIO CHICO",
      "TALAGAPA",
      "TAQUETREN",
      "TORO HOSCO",
      "ZANJON MADRE"
    ],
    "BUEN PASTO": [
      "BUEN PASTO"
    ],
    "CAMARONES": [
      "CAMARONES"
    ],
    "CARRENLEUFU": [
      "CARRENLEUFU"
    ],
    "CERRO CENTINELA": [
      "CERRO CENTINELA"
    ],
    "CHOLILA": [
      "CHOLILA",
      "EL BLANCO",
      "EL CAJON",
      "EL RINCON",
      "VILLA LAGO RIVADAVIA"
    ],
    "COLAN CONHUE": [
      "COLAN CONHUE"
    ],
    "COMODORO RIVADAVIA": [
      "ACCESO NORTE",
      "ASTRA",
      "BARRIO 25 DE MAYO",
      "BARRIO CALETA CORDOVA",
      "BARRIO CALETA OLIVARES",
      "BARRIO CASTELLI",
      "BARRIO CIUDADELA",
      "BARRIO GASODUCTO",
      "BARRIO GÜEMES",
      "BARRIO LAPRIDA",
      "BARRIO MANANTIAL ROSALES",
      "BARRIO MILITAR - AEROPUERTO MILITAR",
      "BARRIO PROSPERO PALAZZO",
      "BARRIO RESTINGA ALI",
      "BARRIO RODRIGUEZ PEÑA",
      "BARRIO SAAVEDRA",
      "BARRIO SARMIENTO",
      "BARRIO VILLA S.U.P.E.",
      "COMODORO RIVADAVIA",
      "DIADEMA ARGENTINA",
      "KM. 11 - CUARTELES",
      "KM. 3 - GENERAL MOSCONI",
      "KM. 5 - PRESIDENTE ORTIZ",
      "KM. 8 - DON BOSCO"
    ],
    "CORCOVADO": [
      "CORCOVADO",
      "EL CORCOVADO SUR"
    ],
    "CUSHAMEN": [
      "CUSHAMEN CENTRO"
    ],
    "DIQUE FLORENTINO AMEGHINO": [
      "DIQUE FLORENTINO AMEGHINO",
      "FLORENTINO AMEGHINO"
    ],
    "DOCTOR RICARDO ROJAS": [
      "DOCTOR RICARDO ROJAS"
    ],
    "DOLAVON": [
      "DOLAVON"
    ],
    "EL HOYO": [
      "EL HOYO"
    ],
    "EL MAITEN": [
      "BUENOS AIRES CHICO",
      "EL MAITEN"
    ],
    "EPUYEN": [
      "EL COIHUE",
      "EPUYEN",
      "LAGO EPUYEN"
    ],
    "ESQUEL": [
      "ESQUEL",
      "NAHUEL PAN",
      "RIO PERCEY",
      "VILLA FUTALAUFQUEN"
    ],
    "FACUNDO": [
      "FACUNDO"
    ],
    "GAIMAN": [
      "BRYN GWYN",
      "GAIMAN",
      "LA ANGOSTURA"
    ],
    "GAN GAN": [
      "GAN GAN"
    ],
    "GASTRE": [
      "GASTRE"
    ],
    "GOBERNADOR COSTA": [
      "GOBERNADOR COSTA"
    ],
    "GUALJAINA": [
      "GUALJAINA"
    ],
    "JOSE DE SAN MARTIN": [
      "JOSE DE SAN MARTIN"
    ],
    "LAGO BLANCO": [
      "LAGO BLANCO"
    ],
    "LAGO PUELO": [
      "CERRO RADAL",
      "ENTRE RIOS",
      "LA ISLA",
      "LAGO PUELO",
      "LAS GOLONDRINAS"
    ],
    "LAGUNITA SALADA": [
      "BLANCUNTRE",
      "EL ESCORIAL",
      "LAGUNITA SALADA",
      "YALA LAUBAT"
    ],
    "LAS PLUMAS": [
      "LAS PLUMAS"
    ],
    "LOS ALTARES": [
      "LOS ALTARES"
    ],
    "PASO DE INDIOS": [
      "PASO DE INDIOS"
    ],
    "PASO DEL SAPO": [
      "PASO DEL SAPO"
    ],
    "PUERTO MADRYN": [
      "PUERTO MADRYN",
      "QUINTA EL MIRADOR",
      "RESERVA AREA PROTEGIDA EL DORADILLO"
    ],
    "PUERTO PIRAMIDES": [
      "PUERTO PIRAMIDE"
    ],
    "RADA TILLY": [
      "RADA TILLY"
    ],
    "RAWSON": [
      "PLAYA MAGAGNA",
      "PLAYA UNION",
      "RAWSON"
    ],
    "RIO MAYO": [
      "ALTO RIO MAYO",
      "RIO MAYO"
    ],
    "RIO PICO": [
      "RIO PICO"
    ],
    "SARMIENTO": [
      "CHACRAS DE SARMIENTO",
      "PIO PIO",
      "SARMIENTO"
    ],
    "TECKA": [
      "TECKA"
    ],
    "TELSEN": [
      "TELSEN"
    ],
    "TRELEW": [
      "DROFA DULOG",
      "DROFA GABETS",
      "LOMA GRANDE",
      "TRELEW"
    ],
    "TREVELIN": [
      "ALDEA ESCOLAR",
      "COLONIA 16 DE OCTUBRE",
      "LAGO ROSARIO",
      "LOS CIPRESES",
      "TREVELIN"
    ],
    "VIGLIONE": [
      "FRONTERA DE RIO PICO"
    ]
  },
  "CIUDAD DE BUENOS AIRES": {
    "COMUNA 1": [
      "CONSTITUCION",
      "MONSERRAT",
      "PUERTO MADERO",
      "RETIRO",
      "SAN NICOLAS",
      "SAN TELMO"
    ],
    "COMUNA 10": [
      "FLORESTA",
      "MONTE CASTRO",
      "VELEZ SARSFIELD",
      "VERSALLES",
      "VILLA LURO",
      "VILLA REAL"
    ],
    "COMUNA 11": [
      "VILLA DEL PARQUE",
      "VILLA DEVOTO",
      "VILLA GENERAL MITRE",
      "VILLA SANTA RITA"
    ],
    "COMUNA 12": [
      "COGHLAN",
      "SAAVEDRA",
      "VILLA PUEYRREDON",
      "VILLA URQUIZA"
    ],
    "COMUNA 13": [
      "BELGRANO",
      "COLEGIALES",
      "NUÑEZ"
    ],
    "COMUNA 14": [
      "PALERMO"
    ],
    "COMUNA 15": [
      "AGRONOMIA",
      "CHACARITA",
      "PARQUE CHAS",
      "PATERNAL",
      "VILLA CRESPO",
      "VILLA ORTUZAR"
    ],
    "COMUNA 2": [
      "RECOLETA"
    ],
    "COMUNA 3": [
      "BALVANERA",
      "SAN CRISTOBAL"
    ],
    "COMUNA 4": [
      "BARRACAS",
      "BOCA",
      "NUEVA POMPEYA",
      "PARQUE PATRICIOS"
    ],
    "COMUNA 5": [
      "ALMAGRO",
      "BOEDO"
    ],
    "COMUNA 6": [
      "CABALLITO"
    ],
    "COMUNA 7": [
      "FLORES",
      "PARQUE CHACABUCO"
    ],
    "COMUNA 8": [
      "VILLA LUGANO",
      "VILLA RIACHUELO",
      "VILLA SOLDATI"
    ],
    "COMUNA 9": [
      "LINIERS",
      "MATADEROS",
      "PARQUE AVELLANEDA"
    ]
  },
  "CORRIENTES": {
    "3 DE ABRIL": [
      "COLONIA 3 DE ABRIL"
    ],
    "9 DE JULIO": [
      "9 DE JULIO",
      "ALGARROBAL",
      "CERNA",
      "COLONIA JUAN RAMON VIDAL",
      "COSTA SANTA LUCIA"
    ],
    "ALVEAR": [
      "AGUAPEY",
      "ALTAMIRA",
      "ALVEAR",
      "ARROYO MENDEZ",
      "LAS PALMITAS",
      "PANCHO CUE",
      "PASO ITU",
      "PIRAYU",
      "SANTA ANA",
      "SANTA ISABEL",
      "SANTA ROSA"
    ],
    "BELLA VISTA": [
      "BELLA VISTA",
      "CARRIZAL NORTE",
      "CEBOLLAS",
      "COLONIA PROGRESO",
      "DESMOCHADO",
      "ISLA ALTA",
      "JUAN DIAZ",
      "LAS GARZAS",
      "LOMAS ESTE",
      "LOMAS NORTE",
      "LOMAS SUR",
      "MUCHAS ISLAS",
      "RAICES NORTE"
    ],
    "BERÓN DE ASTRADA": [
      "BERON DE ASTRADA",
      "TATARE",
      "VALENCIA",
      "YAHAPE"
    ],
    "BONPLAND": [
      "AYUI",
      "BONPLAND",
      "LINCONIA",
      "LOS ANDES",
      "SANTA ANA"
    ],
    "CAA CATI": [
      "ALGARROBAL",
      "AYALA CUE",
      "CAPILLITA",
      "CERRITO",
      "COLONIA SAN MARTIN",
      "EL ZAPALLO",
      "LA FLECHA",
      "LOMA ALTA",
      "LOMA VILLANUEVA",
      "NUESTRA SEÑORA DEL ROSARIO DE CAA CATI",
      "PASO FLORENTIN",
      "TALATY",
      "TIMBO CORA",
      "VILLA SAN RAMON",
      "VILLANUEVA"
    ],
    "CAROLINA": [
      "COLONIA CAROLINA",
      "COLONIA ISABEL VICTORIA"
    ],
    "CAZADORES CORRENTINOS": [
      "CAZADORES CORRENTINOS"
    ],
    "CECILIO ECHAVARRIA": [
      "COLONIA CECILIO ECHEVERRIA"
    ],
    "CHAVARRIA": [
      "CHAVARRIA",
      "TACUARITAS"
    ],
    "COLONIA CARLOS PELLEGRINI": [
      "CAMBA TRAPO",
      "COLONIA CARLOS PELLEGRINI",
      "ESTANCIA OVECHA RATY"
    ],
    "COLONIA LIBERTAD": [
      "COLONIA LIBERTAD",
      "ESTACION LIBERTAD",
      "PARADA ACUÑA"
    ],
    "COLONIA LIEBIG S": [
      "COLONIA LIEBIG'S",
      "KILOMETRO 517",
      "LA CACHUERA",
      "LAS LOMAS",
      "PLAYADITO",
      "SANTOS LUGARES",
      "URRUTIA"
    ],
    "COLONIA PANDO": [
      "COLONIA PANDO"
    ],
    "COLONIA SANTA ROSA": [
      "AQUINO",
      "BATARA",
      "COLONIA CAIMAN",
      "EL CARMEN",
      "IBATE PORA",
      "LA SELVA",
      "LAS FLORES",
      "SAN AGUSTIN",
      "SAN ANTONIO",
      "SANTA ROSA",
      "SANTA ROSA (RURAL)"
    ],
    "CONCEPCION DEL YAGUARETE CORA": [
      "ARROYO CAABI",
      "BATEL",
      "CARAMBOLA",
      "CONCEPCION",
      "ESPINILLOS",
      "LOMA ALTA",
      "LOS LAPACHOS",
      "ORATORIO",
      "PAIRIRI",
      "PASO BATALLA",
      "PASO LUCERO",
      "RINCON DE LUNA",
      "RODEO PORA",
      "YAJARAVE",
      "YUQUERI"
    ],
    "CORRIENTES": [
      "CORRIENTES",
      "ISLA EL TALAR",
      "LAGUNA BRAVA",
      "LAGUNA PAIVA",
      "LAGUNA SOTO",
      "PASO MARTINEZ",
      "PIRAYUI"
    ],
    "CRUZ DE LOS MILAGROS": [
      "COLONIA GENERAL FERRE",
      "CRUZ DE LOS MILAGROS"
    ],
    "CURUZU CUATIA": [
      "ARROYO MAROTE",
      "ARROYO PORTILLO",
      "AVALOS",
      "BAIBIENE",
      "CAPITAN JOAQUIN MADARIAGA",
      "COLONIA PAIRIRI",
      "CURUZU CUATIA",
      "EL CEIBO",
      "EL CHAÑAR",
      "EMILIO R. CONI",
      "ESPINILLO",
      "ESTANCIA LA CAUTIVA",
      "ESTANCIA SAN JUAN",
      "GARAY",
      "MARIA CARAPE",
      "MARIA CHICA",
      "PAGO LARGO",
      "PASO DE LAS PIEDRAS",
      "PEDRO DIAZ COLODRERO",
      "RINCON DE TUNAS",
      "SAN AGUSTIN",
      "SARANDI",
      "TIERRA COLORADA",
      "TRES BOCAS DEL YATAY",
      "TUNITAS",
      "VACA CUA",
      "YATAY"
    ],
    "EL SOMBRERO": [
      "EL SOMBRERO"
    ],
    "EMPEDRADO": [
      "AHOMA SUR",
      "ARROYO EL SOMBRERO",
      "ARROYO SOLIS",
      "BERNACHEA",
      "CAMPO GRANDE",
      "COLONIA BROUGNES",
      "COLONIA IMPARCIALES",
      "COLONIA SANZ",
      "COSTA DE EMPEDRADO",
      "COSTA GRANDE",
      "EL CARRIZAL",
      "EL POLLO",
      "EL POLLO ESTE",
      "EMPEDRADO",
      "ESTACION MANUEL DERQUI",
      "LOMAS DE EMPEDRADO",
      "OCANTO CUE",
      "PASO QUINTANA",
      "PEHUAJO",
      "PELON ARROYO",
      "REAL CUE",
      "RINCON DE EMPEDRADO",
      "RINCON DEL MADREGON",
      "RINCON DEL SOMBRERO",
      "SAN JUANCITO",
      "SAN LORENCITO",
      "SANTA ROSA",
      "VILLA SAN ISIDRO"
    ],
    "ESQUINA": [
      "ABRA GUAZU",
      "ARROYO SORO",
      "BUENA VISTA",
      "CAMPO LA EMILIA",
      "CAMPO PERNIZZA",
      "CAMPO ROMERO",
      "CHACRAS NORTE",
      "COLONIA BONZON",
      "EL CARMEN",
      "EL CERRO",
      "EL ROSARIO",
      "ESQUINA",
      "GUAYQUIRARO",
      "INGA",
      "LA DORITA",
      "LA FLORESTA",
      "LOS FLOTADORES",
      "MALVINAS NORTE",
      "MALVINAS SUR",
      "PASO HU",
      "PICADA AMARA",
      "RINCON DE SARANDI",
      "SAN ANTONIO",
      "SAN FERNANDO",
      "SANTA BARBARA",
      "SANTA CATALINA",
      "SANTA LIBRADA",
      "SANTA MARIA",
      "SANTO DOMINGO",
      "SARANDI",
      "TRANQUERA CADENA",
      "TRES MOJONES",
      "VILLA ROSA"
    ],
    "ESTACION TORRENT": [
      "ESTACION TORRENT"
    ],
    "FELIPE YOFRE": [
      "CAPITA MINI",
      "CUENCA",
      "FELIPE YOFRE",
      "SAN EDUARDO"
    ],
    "GARAVI": [
      "JOSE RAFAEL GOMEZ",
      "LA COSTA",
      "LAS CHISPAS"
    ],
    "GARRUCHOS": [
      "COLONIA UNION",
      "GARRUCHOS",
      "SAN HORACIO",
      "SAN JUAN"
    ],
    "GOBERNADOR MARTINEZ": [
      "CAMPO VALLEJOS",
      "CASUALIDAD",
      "COLONIA GOBERNADOR GALLINO",
      "EL BONETE",
      "GOBERNADOR JUAN E. MARTINEZ",
      "LAGUNA SIRENA",
      "MONTE FLORIDO",
      "PALERMO",
      "SALINAS GRANDE",
      "SAN JOSE"
    ],
    "GOBERNADOR VIRASORO": [
      "CAABI POI",
      "CAILAR CUE",
      "COLONIA SAN JUSTO",
      "EL ALTILLO",
      "ESPINILLO",
      "ESTANCIA SAN VICENTE",
      "GOBERNADOR IGR.VALENTIN VIRASORO",
      "JESUS CUE",
      "LA CRIOLLA",
      "LAS MARIAS",
      "LOS ARROYOS",
      "SAN ALONSO"
    ],
    "GOYA": [
      "BATEL",
      "BATEL ARAUJO",
      "BUENA VISTA",
      "CASUALIDAD",
      "COCALITO",
      "COLONIA ELENITA",
      "COLONIA MERCEDES COSSIO",
      "COLONIA PORVENIR",
      "COLONIA PROGRESO",
      "COLONIA PUCHETA",
      "COLONIA SAUCE",
      "COLONIA TIMBO",
      "COSTA BATEL",
      "EL CERRITO",
      "EL TRANSITO",
      "ESTANCIA DON RAUL",
      "ESTANCIA RINCON DE LUNA",
      "GOYA",
      "ISLA LA JOSEFINA",
      "ISLA SOLA",
      "LAGUNA PUCU",
      "LAS MERCEDES",
      "LOS CEIBOS",
      "LUJAN",
      "MANANTIALES",
      "MARUCHAS",
      "MARUCHITAS",
      "MORA",
      "PAGO REDONDO",
      "PARANACITO",
      "PTO. BOCA",
      "PUNTA BATEL",
      "PUNTA MARUCHA",
      "REMANSO",
      "RINCON DE GOMEZ",
      "SAN FRANCISCO",
      "SAN JORGE",
      "SAN PEDRO",
      "SAN RAMON",
      "SANTA MARIA",
      "SANTA ROSA",
      "SANTILLAN",
      "SOLEDAD",
      "VILLA LEONOR",
      "VILLA LUJAN"
    ],
    "GUAVIRAVI": [
      "BUENA VISTA",
      "ESTINGANA",
      "GUAVIRAVI"
    ],
    "HERLITZKA": [
      "ESTANCIA GARABATA",
      "HERLITZKA",
      "LAGUNA NEGRA",
      "LOMAS DE AGUIRRE",
      "LOMAS DE GONZALEZ",
      "RIACHUELITO",
      "RINCON DE LA MERCED",
      "RINCON DE MEZA",
      "RINCON DE NAVARRO"
    ],
    "ITA IBATE": [
      "ANGOSTURA",
      "ARERUNGUA",
      "IBAHAY",
      "ITA IBATE",
      "KILOMETRO 137"
    ],
    "ITATI": [
      "EL ABRA",
      "ESTANCIA SAN BENITO",
      "GUAYU",
      "ITATI",
      "RINCON GUAZU",
      "SANTA RITA",
      "SCORZA CUE",
      "VILLA LA PALMIRA",
      "YACAREY"
    ],
    "ITUZAINGO": [
      "BUENA VISTA",
      "CAA CARAI",
      "ISLA APIPE CHICO",
      "ITUZAINGO",
      "LIBERTAD",
      "PASO MORENO",
      "PUERTO VALLE",
      "RINCON SANTA MARIA"
    ],
    "JUAN PUJOL": [
      "ARROYO MOTA",
      "COLONIA BUEN RETIRO",
      "COLONIA SAN FRANCISCO",
      "JUAN PUJOL",
      "SAENZ VALIENTE",
      "TRES BOCAS"
    ],
    "LA CRUZ": [
      "AGUAPEY",
      "ALEN CUE",
      "BLANCO CUE",
      "COSTA GUAVIRAVI",
      "EL CHAQUITO",
      "EL OREJANO",
      "ESTANCIA SAN CARLOS",
      "HORQUETA DE GUAVIRAVI",
      "ISOQUI",
      "LA CRUZ",
      "LA HORQUETA",
      "LOMA ALTA",
      "SAN GABRIEL",
      "SANTA MARIA",
      "TRES CERROS",
      "YACARE"
    ],
    "LAVALLE": [
      "LA LOMA",
      "LAVALLE",
      "PUERTO VIEJO",
      "RINCON DE SANTA LUCIA",
      "RINCON DE SOTO"
    ],
    "LOMAS DE VALLEJOS": [
      "BUENA VISTA",
      "COSTA SUD MALOYAS",
      "LOMAS DE VALLEJOS",
      "LOS VENCES",
      "MALOYITAS",
      "PASITO",
      "RINCON DE VENCES",
      "RINCON DE ZALAZAR"
    ],
    "LORETO": [
      "ARROYO BALMACEDA",
      "BARRANQUERITAS",
      "BASTIDORES",
      "LORETO",
      "SAN JUAN LOMA"
    ],
    "MARIANO I LOZA": [
      "MARIANO I. LOZA"
    ],
    "MBURUCUYA": [
      "BLANCO CUE",
      "CHACRAS",
      "COSTA SAN LORENZO",
      "ISIPOYU",
      "LA YERBA",
      "LOMA ALTA",
      "MANANTIALES",
      "MBURUCUYA",
      "PASO AGUIRRE",
      "PUNTA GRANDE",
      "SAN JUAN",
      "SANTA ANA",
      "SANTA TERESA",
      "VELOSO"
    ],
    "MERCEDES": [
      "AGUACERITOS",
      "ARROYO GRANDE",
      "BOQUERON",
      "CALLEJON",
      "DOS HERMANAS",
      "ESTANCIA SANTA CLARA",
      "GUAYAIBI",
      "IRUPE",
      "ITA CORA",
      "LA CONCEPCION",
      "MARIA LUISA",
      "MERCEDES",
      "NARANJITO",
      "PASO PUCHETA",
      "PAY UBRE CHICO",
      "RINCON DE YAGUARY",
      "RINCON DEL OMBU",
      "RINCON DEL SOCORRO",
      "RINCON TRANQUERA GENERAL",
      "SAN DIONISIO",
      "SANTA CATALINA",
      "SANTA JUANA",
      "TIMBOCITO",
      "TORO RATAY",
      "TUNITA",
      "UGUAY",
      "YUQUERI"
    ],
    "MOCORETA": [
      "COLONIA BUENA VISTA",
      "COLONIA MOCORETA",
      "COLONIA SAN ANDRES",
      "COLONIA SAN GREGORIO",
      "MOCORETA",
      "PIEDRITAS"
    ],
    "MONTE CASEROS": [
      "CAMPO GENERAL AVALOS",
      "DOS VIAS",
      "FORTUNA",
      "ITACUMBU",
      "MONTE CASEROS",
      "PARADA LABOUGLE",
      "PASO VALLEJOS",
      "PUERTO CEIBO",
      "TACUABE",
      "TIMBOY"
    ],
    "PAGO DE LOS DESEOS": [
      "PAGO DE LOS DESEOS"
    ],
    "PALMAR GRANDE": [
      "COLONIA JUAN PUJOL",
      "FERNANDEZ",
      "FRONTERA",
      "PALMAR GRANDE",
      "PUISOYE",
      "TIMBOY"
    ],
    "PARADA PUCHETA": [
      "LOS PINOS",
      "PARADA PUCHETA",
      "PASO LEDESMA",
      "SAN ANTONIO",
      "SAN ISIDRO"
    ],
    "PASO DE LA PATRIA": [
      "COSTA RIO PARANA",
      "COSTA TOLEDO",
      "EL RINCON",
      "PASO DE LA PATRIA",
      "PUERTO ARAZA"
    ],
    "PASO DE LOS LIBRES": [
      "BAÑADO YATAY",
      "LA AMELIA",
      "LA FLORIDA",
      "LAS PALMAS",
      "NUEVA ESPERANZA",
      "OMBUCITO",
      "PALMAR",
      "PASO DE LOS LIBRES",
      "QUIYATI",
      "SAN JOAQUIN",
      "SAN SALVADOR"
    ],
    "PEDRO R FERNANDEZ": [
      "COLONIA 2 DE ABRIL",
      "ESTACION SANTIAGO ALCORTA",
      "PEDRO R. FERNANDEZ"
    ],
    "PERUGORRIA": [
      "AGUAY",
      "ARROYO SECO",
      "LA LATA",
      "MALEZAL",
      "OSCURO",
      "PALMITAS",
      "PASO TALA",
      "PERUGORRIA",
      "VACA PASO"
    ],
    "PUEBLO LIBERTADOR": [
      "AQUINO",
      "ARROCERA PAPELHA",
      "CAMPO BORDON",
      "CORONEL ABRAHAM SCHWEIZER",
      "LA CASUALIDAD",
      "LA RINCONADA",
      "LAGUNA ITA",
      "LAS CUCHILLAS",
      "LIBERTADOR",
      "PASO CEJAS",
      "PASO LALLANA",
      "PUEBLO LIBERTADOR"
    ],
    "RAMADA PASO": [
      "RAMADA PASO"
    ],
    "RIACHUELO": [
      "RIACHUELO",
      "SAN CAYETANO",
      "SAN JUAN TADEO",
      "SAN RAMON"
    ],
    "SALADAS": [
      "ANGUA",
      "ANGUA COSTA SANTA LUCIA",
      "ARROYITO",
      "CASUARINAS",
      "COLONIA OFICIAL SARGENTO JUAN B. CABRAL",
      "LA MANSION",
      "LOMAS",
      "PAGO ALEGRE",
      "PAGO ARIAS",
      "PASO NARANJITO",
      "SALADAS",
      "SAN FRANCISCO",
      "SAN LORENCITO",
      "SANTO DOMINGO"
    ],
    "SAN ANTONIO ISLA APIPE GRANDE": [
      "MONTE GRANDE",
      "PUERTO TALA",
      "SAN ANTONIO"
    ],
    "SAN CARLOS": [
      "MONTE HERMOSO",
      "PUNTA DE ORO",
      "SAN CARLOS"
    ],
    "SAN COSME": [
      "ENSENADA GRANDE",
      "ENSENADITA",
      "PUERTO GONZALEZ",
      "RIACHUELO SAN JOSE",
      "SAN COSME",
      "SANTO DOMINGO"
    ],
    "SAN ISIDRO": [
      "BUENA ESPERANZA",
      "CAMPO MORATO",
      "EL QUEBRACHO",
      "ESTANCIA SANTA RITA",
      "INVERNADA",
      "ISLA TALAR",
      "LA CUCUCHA",
      "LA MARTA",
      "PASO LOS ANGELES",
      "PASO SAN JUAN",
      "RINCON DEL PAGO",
      "SAN ANTONIO",
      "SAN GREGORIO",
      "SAN ISIDRO",
      "SAN MARTIN",
      "STELLA MARIS"
    ],
    "SAN LORENZO": [
      "ARROYO CEIBAL",
      "RINCON DE AMBROSIO",
      "RINCON DE SAN LORENZO",
      "SAN LORENZO"
    ],
    "SAN LUIS DEL PALMAR": [
      "AGUIRRE CUE",
      "ALBARDONES",
      "ARROYO PONTON",
      "CAMPO GRANDE",
      "CAVIA CUE",
      "CERRUDO CUE",
      "CHAÑAR",
      "COLONIA LLANO",
      "COSTA CHICA",
      "COSTA GRANDE",
      "EL POLLO",
      "EMPEDRADO LIMPIO",
      "ESPINALLAR",
      "ESQUIVEL CUE",
      "INDIO MUERTO",
      "LAGUNITA",
      "LOMAS DE GALARZA",
      "MALOYAS",
      "MEDIO",
      "ORATORIO",
      "PASO LOVERA",
      "PEICHOTO CUE",
      "RAMONES",
      "SAN LUIS DEL PALMAR",
      "SANTOS LUGARES",
      "TACUARAL",
      "TRES CRUCES"
    ],
    "SAN MIGUEL": [
      "COLONIA MADARIAGA",
      "CURUZU LAUREL",
      "MBOCAYA",
      "ROQUE CUE",
      "SAN MIGUEL",
      "SAN NICOLAS",
      "SANTA BARBARA",
      "SANTA SIXTA",
      "SILVERO CUE"
    ],
    "SAN ROQUE": [
      "ARROYO GONZALEZ",
      "ARROYO PARAISO",
      "COLONIA LA ELISA",
      "COLONIA LAUREL",
      "ESTANCIA BUENA VISTA",
      "LA MARIA",
      "LUJAN",
      "ROSADO GRANDE",
      "SAN ROQUE",
      "SANTA ANGELICA",
      "SANTO DOMINGO",
      "VILLA LIBERTAD",
      "YAZUCA"
    ],
    "SANTA ANA DE LOS GUÁCARAS": [
      "DESAGUADERO",
      "INGENIO PRIMER CORRENTINO",
      "RIACHUELO BARDECI",
      "SANTA ANA"
    ],
    "SANTA LUCIA": [
      "COLONIA MARTINEZ",
      "COLONIA SAN JOSE",
      "ESTANCIA DOS HERMANAS",
      "LA BOLSA",
      "NARANJITO",
      "SANTA LUCIA",
      "VILLA AQUINO",
      "VILLA CORDOBA"
    ],
    "SANTO TOME": [
      "ATALAYA",
      "COLONIA GOBERNADOR RUIZ",
      "CONCEPCION",
      "CORONEL DESIDERIO SOSA",
      "CUAY CHICO",
      "CUAY GRANDE",
      "ESTACION CAZA PAVA",
      "ESTANCIA SAN PEDRO",
      "GALARZA",
      "GAMBAI",
      "GOMEZ CUE",
      "HORMIGUERO",
      "LAUREL",
      "LOS BRETES",
      "SAN GABRIEL",
      "SANTO TOME",
      "VIROCAY"
    ],
    "SAUCE": [
      "ARROYO HORQUETA",
      "CONCEPCION",
      "FRANCISCO GOMEZ",
      "LA ESTRELLA",
      "LOMA ALTA",
      "LOS EUCALIPTOS",
      "MALEZAL",
      "OVEJITA",
      "PASO BERMUDEZ",
      "RINCON DE ANIMAS",
      "RINCON DEL SAUCE",
      "SAN MARTIN",
      "SAN PEDRO",
      "SAN RAMON",
      "SAUCE"
    ],
    "TABAY": [
      "EL PINDO",
      "SANTA TERESITA",
      "TABAY"
    ],
    "TAPEBICUA": [
      "EL PROGRESO",
      "ESTANCIA SANTA RITA",
      "SAN JUAN",
      "TAPEBICUA"
    ],
    "TATACUA": [
      "COLONIA TATACUA",
      "RINCON YURUBI",
      "SANTA ELVIRA",
      "TATACUA"
    ],
    "VILLA OLIVARI": [
      "VILLA OLIVARI"
    ],
    "YAPEYU": [
      "AGUAPE",
      "REMANSO",
      "YAPEYU"
    ],
    "YATAYTI CALLE": [
      "COSTA BATEL",
      "EL CERRITO",
      "PASO LOPEZ",
      "PUENTE BATEL",
      "PUNTA IFRAN",
      "YATAYTI CALLE"
    ]
  },
  "CÓRDOBA": {
    "ACHIRAS": [
      "ACHIRAS"
    ],
    "ADELIA MARIA": [
      "ADELIA MARIA"
    ],
    "AGUA DE ORO": [
      "AGUA DE ORO"
    ],
    "ALCIRA": [
      "ALCIRA"
    ],
    "ALDEA SANTA MARIA": [
      "ALDEA SANTA MARIA"
    ],
    "ALEJANDRO ROCA": [
      "ALEJANDRO ROCA"
    ],
    "ALEJO LEDESMA": [
      "ALEJO LEDESMA"
    ],
    "ALICIA": [
      "ALICIA"
    ],
    "ALMAFUERTE": [
      "ALMAFUERTE"
    ],
    "ALPA CORRAL": [
      "ALPA CORRAL",
      "VILLA SANTA EUGENIA"
    ],
    "ALTA GRACIA": [
      "ALTA GRACIA",
      "EL POTRERILLO",
      "LA DONOSA",
      "VILLA BUENA ESPERANZA"
    ],
    "ALTO ALEGRE": [
      "ALTO ALEGRE",
      "CAMPO SANTA TERESA",
      "COLONIA EL ACEQUION"
    ],
    "ALTO DE LOS QUEBRACHOS": [
      "ALTO DE LOS QUEBRACHOS",
      "LOS CHARCOS"
    ],
    "ALTOS DE CHIPION": [
      "ALTOS DE CHIPION"
    ],
    "AMBOY": [
      "AMBOY",
      "CERRO PELADO",
      "SAN ROQUE"
    ],
    "AMBUL": [
      "ALTO GRANDE",
      "AMBUL",
      "BAJO DE CORRALES",
      "EL MIRADOR",
      "JUAN BAUTISTA ALBERDI",
      "LOS MORTERITOS"
    ],
    "ANA ZUMARAN": [
      "ANA ZUMARAN"
    ],
    "ANISACATE": [
      "ANISACATE",
      "COSTA AZUL",
      "EL ALTO"
    ],
    "AREA SIN GOBIERNO": [
      "A. DE ALVAREZ N° 1",
      "ABRA DEL MANZANO",
      "AGUA DE ORO",
      "ALTAUTINA",
      "ALTO DE FIERRO",
      "ALTO VERDE",
      "ANA ZUMARAN",
      "ARBOL BLANCO",
      "ARROYO DE ALVAREZ",
      "ARROYO DE ALVAREZ NRO 2",
      "ARROYO DE LOS LEONES",
      "ARROYO SAN ANTONIO",
      "ATOS PAMPA",
      "BAJO ALEGRE",
      "BAJO CHICO",
      "BAJO GRANDE",
      "BAJO HONDO",
      "BAJO LINDO",
      "BALDE DE LA ORILLA",
      "BARRANCA COLORADA",
      "BARRANCA YACO",
      "BARRETO",
      "BARRIO LA FORTUNA",
      "BAYADA NUEVA",
      "BELEN",
      "BOCA DEL RIO",
      "BUENA VISTA",
      "BUEY MUERTO",
      "CABITUYO",
      "CACHI YACO",
      "CAMPO 25 DE MAYO",
      "CAMPO ALEGRE",
      "CAMPO AMPURDAN",
      "CAMPO ANCHORENA",
      "CAMPO ASINARI",
      "CAMPO BATTISTON",
      "CAMPO BAUDIN",
      "CAMPO BERTOGLIO",
      "CAMPO BOAGLIO",
      "CAMPO BUENA ESPERANZA",
      "CAMPO CALLERIO",
      "CAMPO CAPRIVI",
      "CAMPO CARLITOS",
      "CAMPO CAROLINI",
      "CAMPO COSTA",
      "CAMPO CRESPO-P/BALLESTERS",
      "CAMPO DANIELE",
      "CAMPO DE LA TORRE",
      "CAMPO DEL BEL",
      "CAMPO EL CHATO",
      "CAMPO EL CHILO",
      "CAMPO EL POLVORIN",
      "CAMPO EL TACO",
      "CAMPO EL ZORRO",
      "CAMPO ESNAOLA",
      "CAMPO EVANGELIST",
      "CAMPO FALCO",
      "CAMPO FICHETTI",
      "CAMPO FIORETTA",
      "CAMPO GAUCHO NUEVO",
      "CAMPO GERBAUDO",
      "CAMPO GRANDE",
      "CAMPO JANON",
      "CAMPO LA ADELA",
      "CAMPO LA AGUADA",
      "CAMPO LA ALBINA",
      "CAMPO LA ALEJANDRA",
      "CAMPO LA ANGELINA",
      "CAMPO LA CALERA",
      "CAMPO LA CHANTADA",
      "CAMPO LA LUISITA",
      "CAMPO LA RAMADA",
      "CAMPO LA ROSA",
      "CAMPO LA SALADA",
      "CAMPO LA SIRENA",
      "CAMPO LA SOLEDAD",
      "CAMPO LA ZULEMA",
      "CAMPO LABORDE",
      "CAMPO LAS CHACRAS",
      "CAMPO LAS LONJAS",
      "CAMPO LAS SELVAS",
      "CAMPO LAS VIBORAS",
      "CAMPO LAVALLE",
      "CAMPO LEOFU",
      "CAMPO LOPEZ",
      "CAMPO LOS ALGARROBOS",
      "CAMPO LOS CORRALITOS",
      "CAMPO LOS GALGOS",
      "CAMPO LOS JAGUELES SUD",
      "CAMPO LOS MATORRALES",
      "CAMPO LOS PORTEÑOS",
      "CAMPO LOS PRADOS",
      "CAMPO LOS TERCERANOS",
      "CAMPO LOS TRES ARBOLES",
      "CAMPO LOS ZORROS",
      "CAMPO MACAGNO",
      "CAMPO MARCHAND",
      "CAMPO MARENGO",
      "CAMPO MARTINELLI",
      "CAMPO MARTOLINO",
      "CAMPO MAYOL",
      "CAMPO MINETTI",
      "CAMPO NATA",
      "CAMPO NIGRO NORTE",
      "CAMPO NIGRO SUR",
      "CAMPO NOVARINO",
      "CAMPO PEROTTI",
      "CAMPO RAMALLO",
      "CAMPO ROSSI",
      "CAMPO SAN ALFREDO",
      "CAMPO SAN ELIAS",
      "CAMPO SAN JUAN",
      "CAMPO SANTA ELENA",
      "CAMPO SANTA FLORINDA",
      "CAMPO SANTA MARIA",
      "CAMPO SANTA RITA",
      "CAMPO SCARAFIOCCA",
      "CAMPO SCARAMUZZA",
      "CAMPO VIONNET",
      "CAMPO YANZI",
      "CAMPO YAÑEZ",
      "CAMPO ZANON",
      "CANTERAS DE QUILPO",
      "CANTERAS QUILPO",
      "CAPILLA DE DOLORES",
      "CAPILLA GARZON",
      "CAROLINA",
      "CAYUQUEO",
      "CAÑADA DEL TALA",
      "CERRO BOLA",
      "CERRO CHAMPAQUI",
      "CHACRAS NORTE",
      "CHACRAS SUR",
      "CHAÑARITOS",
      "CHIPITIN",
      "CIENAGA DE BRITOS",
      "CNIA NORTE",
      "COLONIA 10 DE JULIO",
      "COLONIA 10 DE MAYO",
      "COLONIA 25 DE MAYO",
      "COLONIA ADELA",
      "COLONIA ALTO VERDE",
      "COLONIA AMALIA",
      "COLONIA ARMANDO",
      "COLONIA BEIRO ESTE",
      "COLONIA BEIRO NORTE",
      "COLONIA BELLA VISTA",
      "COLONIA CALCHAQUI",
      "COLONIA CAMPO ALBANO",
      "COLONIA CARLOS CASADO",
      "COLONIA CEFERINA",
      "COLONIA CORRAL DE GUARDIA",
      "COLONIA CORRAL DEL BAJO",
      "COLONIA COYUNDA",
      "COLONIA DOLORES",
      "COLONIA DOS HERMANAS",
      "COLONIA DOS HERMANOS",
      "COLONIA DOS HERMANOS NORTE",
      "COLONIA EL ARBOL",
      "COLONIA EL BALQUIN",
      "COLONIA EL CARMEN",
      "COLONIA EL CHAJA",
      "COLONIA EL DESCANSO",
      "COLONIA EL DORADO",
      "COLONIA EL FORTIN",
      "COLONIA EL GUANACO",
      "COLONIA EL MILAGRO ESTE",
      "COLONIA EL MILAGRO OESTE",
      "COLONIA EL NOY",
      "COLONIA EL OVERO",
      "COLONIA EL PIQUILLIN",
      "COLONIA EL SAUCE",
      "COLONIA EL TORO",
      "COLONIA EL TRABAJO",
      "COLONIA ERMILA",
      "COLONIA ESPERANZA",
      "COLONIA EUGENIA",
      "COLONIA FABRICA N° 3",
      "COLONIA FREYRE NORESTE",
      "COLONIA FREYRE NOROESTE",
      "COLONIA FRONTERA NORTE",
      "COLONIA FRONTERA SUR",
      "COLONIA GARIBALDI",
      "COLONIA GARZON",
      "COLONIA GENERAL DEHEZA",
      "COLONIA GRANJA LA CELINA",
      "COLONIA HOGAR",
      "COLONIA JERUSALEN",
      "COLONIA LA ARGENTINA",
      "COLONIA LA CELINA",
      "COLONIA LA CONCORDIA",
      "COLONIA LA ESCONDIDA",
      "COLONIA LA FLORIDA",
      "COLONIA LA JUANITA",
      "COLONIA LA LEGUA",
      "COLONIA LA LEONCITA",
      "COLONIA LA LOLA",
      "COLONIA LA MADERA",
      "COLONIA LA MONONA",
      "COLONIA LA NUEVA",
      "COLONIA LA PICHONA",
      "COLONIA LA PINTA",
      "COLONIA LA PROVIDENCIA",
      "COLONIA LA TAPERITA",
      "COLONIA LA TERCERA",
      "COLONIA LA TRINCHERA",
      "COLONIA LA UNION",
      "COLONIA LA VERDE",
      "COLONIA LAS LOMAS",
      "COLONIA LAS MERCEDITAS",
      "COLONIA LAS PALMERAS",
      "COLONIA LAVARELLO",
      "COLONIA LOLA",
      "COLONIA LOS CEIBOS",
      "COLONIA LOS TAMARINDOS",
      "COLONIA LOS VASCOS",
      "COLONIA LUIS VELEZ",
      "COLONIA MACKEY",
      "COLONIA MADRESELVA",
      "COLONIA MAIPU",
      "COLONIA MAIZALES-LEONES",
      "COLONIA MARCOS SASTRE",
      "COLONIA MARIA ANGELINA",
      "COLONIA MAUNIER CENTRO",
      "COLONIA MAUNIER NORTE",
      "COLONIA MAUNIER SUR",
      "COLONIA MILESSI",
      "COLONIA MIRAMAR",
      "COLONIA MOLLES",
      "COLONIA MONTE GRANDE",
      "COLONIA MONTE TALA",
      "COLONIA NORTE",
      "COLONIA NUEVA FRANCIA",
      "COLONIA NUEVA SAMPACHO",
      "COLONIA NUEVA UDINE",
      "COLONIA ORCAVI",
      "COLONIA PALO LABRADO",
      "COLONIA PICO CHACO",
      "COLONIA REGERNSBURGER",
      "COLONIA ROCHA",
      "COLONIA SAN EUGENIO",
      "COLONIA SAN JOSE",
      "COLONIA SAN JOSE DE AGUAS COLORADAS",
      "COLONIA SAN MIGUEL",
      "COLONIA SAN RAFAEL",
      "COLONIA SANTA ANA",
      "COLONIA SANTA CATALINA",
      "COLONIA SANTA CLARA",
      "COLONIA SANTA CRISTINA",
      "COLONIA SANTA PAULA",
      "COLONIA SANTA RITA",
      "COLONIA SANTA ROSA",
      "COLONIA SANTO TOMA",
      "COLONIA SEVERINA",
      "COLONIA STABILE",
      "COLONIA UNIDAD",
      "COLONIA VEINTICINCO",
      "COLONIA WHITE",
      "CORRAL DE ARROYO",
      "CORRAL DEL BAJO",
      "CORRAL QUEMADO",
      "COSME NORTE",
      "COSME SUR",
      "COSTA ALEGRE",
      "COSTA DEL CARMEN",
      "COSTA DEL TAMBO",
      "CRUZ MOJADA",
      "CUATRO CAMINOS",
      "CUATRO VIENTOS",
      "CUESTA DEL RIO",
      "DE LA SERNA",
      "EL ALCALDE",
      "EL BAGUAL",
      "EL BARRIAL",
      "EL BARRIALITO",
      "EL CACHI",
      "EL CADILLO",
      "EL CAMPITO",
      "EL CANO",
      "EL CARRIZAL",
      "EL DESQUITE",
      "EL DURAZNAL",
      "EL DURAZNO",
      "EL GUANACO",
      "EL JORDAN",
      "EL MANANTIAL",
      "EL MANANTIAL SUR",
      "EL MOJON",
      "EL MOLINO",
      "EL PAMPERO",
      "EL PANTANO",
      "EL PERCHEL",
      "EL PINO",
      "EL PONIENTE",
      "EL PORVENIR",
      "EL POTOSI",
      "EL PUESTITO",
      "EL QUEBRACHO",
      "EL QUEMADO",
      "EL RINCON",
      "EL SALADITO",
      "EL SALTO",
      "EL TUSCAL",
      "EL UCLE",
      "EL VOLCAN",
      "EL ZAPALLAR",
      "ESPERANZA",
      "ESPINILLAL",
      "ESPINILLO",
      "EST. EL PARAISO",
      "EST. SAN JUAN",
      "ESTACION ACHIRAS",
      "ESTACION KILOMETRO 581",
      "ESTACION LECUEDER",
      "ESTANCIA LA COLORADA",
      "ESTANCIA LA EMILIA",
      "ESTANCIA LA MARGARITA",
      "ESTANCIA LA PACIFICA",
      "ESTANCIA LA VANGUARDIA",
      "ESTANCIA SAN MIGUEL",
      "FRAY CAYETANO RODRIGUEZ",
      "FRONTERA NORTE",
      "GENERAL SOLER",
      "GUARDIA VIEJA",
      "HUASCHA",
      "IGLESIA VIEJA",
      "INGENIERO MALMEN",
      "INTI HUASI",
      "ISCHILIN",
      "ISCHILIN VIEJO",
      "ISLA LARGA",
      "ISLA VERDE",
      "ISLETA CABRAL",
      "JERONIMO CORTES",
      "LA ACEQUIECITA",
      "LA AGUADA",
      "LA AGUADITA",
      "LA AMALIA",
      "LA ANGOSTURA",
      "LA BARRANCA",
      "LA BARRANQUITA",
      "LA BOTIJA",
      "LA BREA",
      "LA BRIANZA",
      "LA CANTERA",
      "LA CARBONADA",
      "LA CAROLINA",
      "LA CASCADA",
      "LA CIENEGUITA",
      "LA COCHA",
      "LA COLONIAL",
      "LA COLORADA",
      "LA CONCEPCION",
      "LA CORTADERA",
      "LA CREMERIA",
      "LA DORMIDA",
      "LA ESPERANZA",
      "LA ESTRECHURA",
      "LA GILDA",
      "LA GUANACA",
      "LA HERRADURA",
      "LA INVERNADA",
      "LA ISLA",
      "LA LAGUNA",
      "LA LAGUNILLA",
      "LA LINEA",
      "LA MAJADILLA",
      "LA MARGARITA",
      "LA MARIA VIRGINIA",
      "LA MAZA",
      "LA MUDANA",
      "LA NACIONAL",
      "LA PATRIA",
      "LA PAZ",
      "LA PENCA",
      "LA PIEDRA BLANCA",
      "LA PLAZA",
      "LA PRIMAVERA",
      "LA PROVIDENCIA",
      "LA PUERTA",
      "LA QUEMADA-TRANSITO",
      "LA RAMADA",
      "LA REPRESA",
      "LA RIBERA",
      "LA SARA",
      "LA SIERRITA",
      "LA TABLADA",
      "LA TIGRA",
      "LA TOMA",
      "LA TOSCANITA",
      "LA TUNA",
      "LA VICTORIA",
      "LA VICTORIA (E)",
      "LA VICTORIA OESTE",
      "LA VUELTA",
      "LAGUNA DEL MONTE",
      "LAGUNA OSCURA",
      "LAGUNA SECA",
      "LAGUNAS VERDES",
      "LAGUNILLA",
      "LAS ACACIAS",
      "LAS AVERIAS",
      "LAS BANDURRIAS",
      "LAS CAÑITAS",
      "LAS CHACRAS",
      "LAS CINCO ESQUINAS",
      "LAS CORTADERAS",
      "LAS DELICIAS",
      "LAS ENSENADAS",
      "LAS GAMAS",
      "LAS HERAS",
      "LAS JARILLAS",
      "LAS LAGUNITAS",
      "LAS MANZANAS",
      "LAS MASITAS",
      "LAS MOJARRAS",
      "LAS OLLAS",
      "LAS OSCURAS",
      "LAS PALMAS",
      "LAS PALMITAS",
      "LAS PETACAS",
      "LAS TAPIAS",
      "LAS TRES COLONIAS UNIDAS",
      "LAS TUSCAS",
      "LOMA BLANCA",
      "LOMA DE LOS INDIOS",
      "LOS ALAMOS",
      "LOS ALFALFARES",
      "LOS ALVAREZ",
      "LOS CASTAÑOS",
      "LOS CERROS",
      "LOS CHAÑARES",
      "LOS COMETIERRA",
      "LOS ESCALONES",
      "LOS ESPINILLOS",
      "LOS GIGANTES",
      "LOS GUINDOS",
      "LOS JAGÑELES",
      "LOS LEONES",
      "LOS MEDANITOS",
      "LOS MOLLES",
      "LOS MORTERITOS",
      "LOS POZOS",
      "LOS QUEBRACHITOS",
      "LOS RUICES",
      "LOS SAUCES",
      "LOS TARTAGOS",
      "LOS TRONCOS",
      "MACHA",
      "MAJADA DE SANTIAGO",
      "MANANTIALES",
      "MANDALA",
      "MESA DE MARIANO",
      "MODESTINO PIZARRO",
      "MOGIGASTA",
      "MONSALVO",
      "MONTE DEL ROSARIO",
      "MULA MUERTA",
      "MUSSI",
      "NUEVA ANDALUCIA",
      "OLMOS",
      "ONGAMIRA",
      "ORATORIO DE PERALTA",
      "ORO GRUESO",
      "PACHANGO",
      "PALOMA POZO",
      "PAMPA DEL MERCADO",
      "PASO DE VELEZ",
      "PASO DEL SAUCE",
      "PAUNERO",
      "PAVIN",
      "PEDANIA YUCAT",
      "PEGASANO",
      "PICHANAS",
      "PIEDRA BLANCA",
      "PIEDRAS ANCHAS",
      "PIEDRITAS ROSADAS",
      "PINAS",
      "PLAYA GRANDE",
      "PLAZA BRUNO",
      "POTRO MUERTO",
      "POZO DE LA ESQUINA",
      "POZO DE LA LOMA",
      "POZO DE LAS OLLAS",
      "POZO DE LAS YEGUAS",
      "POZO DE MOLINA",
      "POZO DEL MORTERO",
      "POZO DEL SIMBOL",
      "POZO SALADO",
      "POZO SOLO",
      "PUEBLO VIEJO",
      "PUENTE LAS SELVAS",
      "PUENTE LOS MOLLES",
      "PUERTA COLORADA",
      "PUERTA LOS MONTES",
      "PUESTO DE AFUERA",
      "PUESTO DE CEJAS",
      "PUESTO DEL ROSARIO",
      "PUESTO NUEVO",
      "PUESTO PEDERNERA",
      "PUESTO PUCHETA",
      "PUESTO SAN JOSE",
      "PUESTO VIEJO",
      "PUNTA DEL AGUA",
      "PUNTA DEL MONTE",
      "QUEBRACHO SOLO",
      "RAMON J. CARCANO",
      "REPRESA DE MORALES",
      "RINCON VIEJO",
      "RIO DEL MEDIO",
      "RIO SECO",
      "RIO TIU MAYU",
      "RUIZ DIAZ DE GUZMAN",
      "SALGUERO",
      "SAN AMBROSIO",
      "SAN ANTONIO",
      "SAN ANTONIO NORTE",
      "SAN BARTOLOME",
      "SAN BERNARDO",
      "SAN CARLOS",
      "SAN ERNESTO",
      "SAN EUSEBIO",
      "SAN ISIDRO",
      "SAN JORGE",
      "SAN JOSE",
      "SAN LORENZO",
      "SAN MARTIN",
      "SAN MELITON",
      "SAN MIGUEL",
      "SAN PEDRO DE TOYOS",
      "SAN PELLEGRINO",
      "SAN SALVADOR",
      "SAN SEVERO",
      "SAN TIBURCIO",
      "SANTA ANA",
      "SANTA CATALINA",
      "SANTA CRUZ",
      "SANTA FLORA",
      "SANTA ISABEL",
      "SANTA MARIA",
      "SANTA RITA",
      "SANTA ROSA",
      "SANTA TERESITA",
      "SANTA VICTORIA",
      "SANTO DOMINGO",
      "SAUCE CHIQUITO",
      "SOCAVONES",
      "SOL DE MAYO",
      "TABAQUILLO",
      "TASNA",
      "TEGUA",
      "TODOS LOS SANTOS",
      "TOTORALEJOS",
      "TRES ARBOLES",
      "TRES POZOS",
      "TRES POZOS SUD",
      "TRINCHERA",
      "VILLA ALBERTINA",
      "VILLA ALICIA",
      "VILLA ALPINA",
      "VILLA COLIMBA",
      "VILLA EL TALA",
      "VILLA HERMINIA",
      "VILLA MODERNA",
      "VILLA RAFAEL BENEGAS",
      "VIVERO",
      "VUELTA DE LA CAÑADA"
    ],
    "ARIAS": [
      "ARIAS"
    ],
    "ARROYITO": [
      "ARROYITO",
      "EL FUERTECITO",
      "LA CURVA"
    ],
    "ARROYO ALGODON": [
      "ARROYO ALGODON"
    ],
    "ARROYO CABRAL": [
      "ARROYO CABRAL"
    ],
    "ARROYO LOS PATOS": [
      "ARROYO LOS PATOS"
    ],
    "ASSUNTA": [
      "ASSUNTA"
    ],
    "ATAHONA": [
      "ATAHONA"
    ],
    "AUSONIA": [
      "AUSONIA",
      "SANABRIA"
    ],
    "AVELLANEDA": [
      "AVELLANEDA",
      "EL ESTANQUE",
      "JUAN GARCIA"
    ],
    "BALLESTEROS": [
      "BALLESTEROS"
    ],
    "BALLESTEROS SUD": [
      "BALLESTEROS SUR"
    ],
    "BALNEARIA": [
      "BALNEARIA"
    ],
    "BAÑADO DE SOTO": [
      "BAÑADO DE SOTO",
      "DOMINGUITO",
      "EL QUEBRACHAL",
      "ZURI POZO"
    ],
    "BELL VILLE": [
      "BELL VILLE",
      "COLONIA COMPIANI"
    ],
    "BENGOLEA": [
      "BENGOLEA"
    ],
    "BENJAMIN GOULD": [
      "BENJAMIN GOULD"
    ],
    "BERROTARAN": [
      "BERROTARAN"
    ],
    "BIALET MASSE": [
      "BIALET MASSE",
      "SAN ROQUE DEL LAGO"
    ],
    "BOUWER": [
      "ALTO DEL DURAZNO",
      "BOUWER",
      "CASEROS CENTRO",
      "POTRERO DEL ESTADO"
    ],
    "BRINKMANN": [
      "BRINCKMANN",
      "COTAGAITA"
    ],
    "BUCHARDO": [
      "HIPOLITO BOUCHARD"
    ],
    "BULNES": [
      "BULNES"
    ],
    "CABALANGO": [
      "CABALANGO"
    ],
    "CALCHIN": [
      "CALCHIN"
    ],
    "CALCHIN OESTE": [
      "CALCHIN OESTE"
    ],
    "CALMAYO": [
      "PARQUE CALMAYO"
    ],
    "CAMILO ALDAO": [
      "CAMILO ALDAO"
    ],
    "CAMINIAGA": [
      "CAMINIAGA"
    ],
    "CANALS": [
      "CANALS"
    ],
    "CANDELARIA SUD": [
      "CAMPO COLUMBO",
      "CANDELARIA SUR",
      "LAS ASTILLAS",
      "LOS ALGARROBITOS",
      "NINTE"
    ],
    "CAPILLA DE LOS REMEDIOS": [
      "CAPILLA DE LOS REMEDIOS",
      "DIAZ"
    ],
    "CAPILLA DEL CARMEN": [
      "CAPILLA DEL CARMEN"
    ],
    "CAPILLA DEL MONTE": [
      "BARRIO SANTA ISABEL",
      "CAPILLA DEL MONTE"
    ],
    "CAPILLA DEL SITON": [
      "CAPILLA DE SITON"
    ],
    "CAPITAN GENERAL BERNARDO O HIGGINS": [
      "CAPITAN GENERAL BERNARDO O`HIGGINS"
    ],
    "CARNERILLO": [
      "CARNERILLO"
    ],
    "CARRILOBO": [
      "CARRILOBO"
    ],
    "CASA GRANDE": [
      "CASA GRANDE"
    ],
    "CAVANAGH": [
      "CAVANAGH"
    ],
    "CAÑADA DE LUQUE": [
      "CAÑADA DE LUQUE"
    ],
    "CAÑADA DE MACHADO": [
      "CAÑADA DE MACHADO"
    ],
    "CAÑADA DE RIO PINTO": [
      "CAÑADA DE RIO PINTO"
    ],
    "CAÑADA DEL SAUCE": [
      "CAÑADA DEL SAUCE",
      "CERRO COLORADO",
      "TALA CRUZ"
    ],
    "CERRO COLORADO": [
      "CERRO COLORADO"
    ],
    "CHAJAN": [
      "CHAJAN"
    ],
    "CHALACEA": [
      "CHALACEA",
      "POZO DEL MORO"
    ],
    "CHANCANI": [
      "CHANCANI"
    ],
    "CHARBONIER": [
      "CHARBONIER"
    ],
    "CHARRAS": [
      "CHARRAS"
    ],
    "CHAZON": [
      "CHAZON"
    ],
    "CHAÑAR VIEJO": [
      "CHAÑAR VIEJO",
      "LA ESTANCIA"
    ],
    "CHILIBROSTE": [
      "CHILIBROSTE"
    ],
    "CHUCUL": [
      "CHUCUL"
    ],
    "CHURQUI CAÑADA": [
      "CHURQUI CAÑADA"
    ],
    "CHUÑA": [
      "CHUÑA",
      "JAIME PETER"
    ],
    "CHUÑA HUASI": [
      "CHUÑA HUASI",
      "RODEITO"
    ],
    "CIENAGA DEL CORO": [
      "CIENAGA DEL CORO",
      "LA MESILLA",
      "PIEDRAS AMONTONADAS",
      "RARA FORTUNA",
      "RUMI HUASI",
      "SAUCE GRANDE"
    ],
    "CINTRA": [
      "CINTRA"
    ],
    "COLAZO": [
      "COLAZO"
    ],
    "COLONIA ALMADA": [
      "COLONIA ALMADA"
    ],
    "COLONIA ANITA": [
      "COLONIA ANITA"
    ],
    "COLONIA BARGE": [
      "CASTRO URDIALES",
      "COLONIA BARGE"
    ],
    "COLONIA BISMARCK": [
      "COLONIA BISMARCK"
    ],
    "COLONIA BREMEN": [
      "COLONIA BREMEN"
    ],
    "COLONIA CAROYA": [
      "COLONIA CAROYA",
      "SANTA TERESA"
    ],
    "COLONIA ITALIANA": [
      "CAMPO MURPHY",
      "COLONIA ITALIANA",
      "COLONIA MARIA GODEKEN",
      "COLONIA SICK"
    ],
    "COLONIA ITURRASPE": [
      "COLONIA ITURRASPE"
    ],
    "COLONIA LAS CUATRO ESQUINAS": [
      "COLONIA LAS CUATRO ESQUINAS"
    ],
    "COLONIA LAS PICHANAS": [
      "COLONIA LAS PICHANAS"
    ],
    "COLONIA MARINA": [
      "COLONIA MARINA"
    ],
    "COLONIA PROSPERIDAD": [
      "COLONIA PROSPERIDAD",
      "COLONIA SANTA MARIA"
    ],
    "COLONIA SAN BARTOLOME": [
      "COLONIA SAN BARTOLOME"
    ],
    "COLONIA SAN PEDRO": [
      "COLONIA SAN PEDRO"
    ],
    "COLONIA TIROLESA": [
      "COLONIA LOS ALGARROBOS",
      "COLONIA RIO CHICO",
      "COLONIA TIROLESA",
      "EL QUEBRACHAL",
      "EL VERGEL",
      "ESTACION COLONIA TIROLESA",
      "LA CORINA",
      "LA PUERTA",
      "LAS CHACRAS",
      "SANTA ELENA"
    ],
    "COLONIA VALTELINA": [
      "COLONIA VALTELINA"
    ],
    "COLONIA VICENTE AGUERO": [
      "COLONIA V. AGUERO",
      "COLONIA VICENTE AGUERO"
    ],
    "COLONIA VIDELA": [
      "COLONIA VIDELA",
      "PLAZA VIDELA"
    ],
    "COLONIA VIGNAUD": [
      "COLONIA VIGNAUD"
    ],
    "COMECHINGONES": [
      "PUEBLO COMECHINGONES"
    ],
    "CONLARA": [
      "CONLARA",
      "LOS ROMEROS"
    ],
    "COPACABANA": [
      "AGUA DEL MOLLE",
      "COPACABANA"
    ],
    "CORDOBA": [
      "CORDOBA",
      "CORONEL OLMEDO",
      "EL GATEADO",
      "JARDIN ARENALES",
      "LA FLORESTA",
      "LOS QUEBRACHOS",
      "VILLA ESQUIU",
      "VILLA LA QUEBRADA"
    ],
    "CORONEL BAIGORRIA": [
      "CORONEL BAIGORRIA"
    ],
    "CORONEL MOLDES": [
      "CORONEL MOLDES"
    ],
    "CORRAL DE BUSTOS": [
      "CORRAL DE BUSTOS"
    ],
    "CORRALITO": [
      "CORRALITO"
    ],
    "COSQUIN": [
      "BOSQUE ALEGRE",
      "COSQUIN",
      "EL CARRIZAL",
      "OLAEN",
      "PUESTO RAMALLO",
      "QUEBRADA DE LUNA"
    ],
    "COSTA SACATE": [
      "COSTASACATE"
    ],
    "CRUZ ALTA": [
      "CRUZ ALTA"
    ],
    "CRUZ DE CAÑA": [
      "CHAÑARITOS N° 2",
      "CRUZ DE CAÑA",
      "LA CANDELARIA"
    ],
    "CRUZ DEL EJE": [
      "CRUZ DEL EJE"
    ],
    "CUESTA BLANCA": [
      "CUESTA BLANCA"
    ],
    "DALMACIO VELEZ": [
      "DALMACIO VELEZ"
    ],
    "DEAN FUNES": [
      "DEAN FUNES"
    ],
    "DEL CAMPILLO": [
      "DEL CAMPILLO"
    ],
    "DESPEÑADEROS": [
      "DESPEÑADEROS"
    ],
    "DEVOTO": [
      "DEVOTO"
    ],
    "DIEGO DE ROJAS": [
      "DIEGO DE ROJAS"
    ],
    "DIQUE CHICO": [
      "DIQUE CHICO"
    ],
    "EL ARAÑADO": [
      "EL ARAÑADO"
    ],
    "EL BRETE": [
      "EL BRETE",
      "EL SIMBOLAR",
      "EL TROPIEZO"
    ],
    "EL CHACHO": [
      "AGUA DE RAMON",
      "EL CHACHO",
      "PIEDRITA BLANCA"
    ],
    "EL CRISPIN": [
      "EL CRISPIN"
    ],
    "EL FORTIN": [
      "EL FORTIN"
    ],
    "EL MANZANO": [
      "CANTERAS EL SAUCE",
      "EL MANZANO"
    ],
    "EL RASTREADOR": [
      "EL RASTREADOR"
    ],
    "EL RODEO": [
      "EL RODEO",
      "LA MAZA"
    ],
    "EL TIO": [
      "EL TIO"
    ],
    "ELENA": [
      "ELENA"
    ],
    "EMBALSE": [
      "EL QUEBRACHO",
      "EMBALSE"
    ],
    "ESQUINA": [
      "ESQUINA",
      "PUNTA DEL AGUA",
      "RANGEL",
      "TRES ESQUINAS"
    ],
    "ESTACION GENERAL PAZ": [
      "GENERAL PAZ",
      "POZO DEL TIGRE"
    ],
    "ESTACION JUAREZ CELMAN": [
      "1 DE AGOSTO",
      "ALMIRANTE BROWN",
      "CIUDAD DE LOS NIÑOS",
      "GUIÑAZU NORTE",
      "JUAREZ CELMAN",
      "PARQUE NORTE",
      "VILLA EL FACHINAL - PARQUE NORTE - GUIÑA",
      "VILLA LOS LLANOS",
      "VILLA PASTORA"
    ],
    "ESTANCIA DE GUADALUPE": [
      "ESTANCIA DE GUADALUPE",
      "LA ARGENTINA",
      "MOGOTES ASPEROS",
      "OJO DE AGUA",
      "SAN FELIPE",
      "TRES LOMAS"
    ],
    "ESTANCIA VIEJA": [
      "ESTANCIA VIEJA"
    ],
    "ETRURIA": [
      "ETRURIA"
    ],
    "EUFRASIO LOZA": [
      "EUFRASIO LOZA",
      "SAN IGNACIO"
    ],
    "FALDA DEL CARMEN": [
      "BARRIO LAS QUINTAS",
      "FALDA DEL CARMEN",
      "VALLE ALEGRE"
    ],
    "FREYRE": [
      "FREYRE"
    ],
    "GENERAL BALDISSERA": [
      "GENERAL BALDISSERA"
    ],
    "GENERAL CABRERA": [
      "GENERAL CABRERA"
    ],
    "GENERAL DEHEZA": [
      "GENERAL DEHEZA"
    ],
    "GENERAL FOTHERINGHAM": [
      "GENERAL FOTHERINGHAM"
    ],
    "GENERAL LEVALLE": [
      "GENERAL LEVALLE"
    ],
    "GENERAL ROCA": [
      "GENERAL ROCA"
    ],
    "GUANACO MUERTO": [
      "EL ABRA",
      "GUANACO MUERTO",
      "SAN ANTONIO",
      "SANTO DOMINGO"
    ],
    "GUASAPAMPA": [
      "ALTO SIERRA",
      "EL SAUCE",
      "GUASAPAMPA",
      "LA BISMUTINA"
    ],
    "GUATIMOZIN": [
      "GUATIMOZIN"
    ],
    "GUTEMBERG": [
      "GUTEMBERG",
      "SAN PEDRO DE GUTEMBERG"
    ],
    "HERNANDO": [
      "CAMPO BARA",
      "CAMPO OJO DE AGUA",
      "HERNANDO"
    ],
    "HUANCHILLA": [
      "HUANCHILLAS"
    ],
    "HUERTA GRANDE": [
      "HUERTA GRANDE"
    ],
    "HUINCA RENANCO": [
      "HUINCA RENANCO"
    ],
    "IDIAZABAL": [
      "IDIAZABAL"
    ],
    "IMPIRA": [
      "IMPIRA"
    ],
    "INRIVILLE": [
      "INRIVILLE"
    ],
    "ISLA VERDE": [
      "ISLA VERDE"
    ],
    "ITALO": [
      "ITALO"
    ],
    "JAMES CRAIK": [
      "JAMES CRAIK"
    ],
    "JESUS MARIA": [
      "JESUS MARIA"
    ],
    "JOVITA": [
      "SANTA MAGDALENA"
    ],
    "JUSTINIANO POSSE": [
      "JUSTINIANO POSSE"
    ],
    "KILOMETRO 658": [
      "KILOMETRO 658",
      "PEDRO E. VIVAS"
    ],
    "LA BATEA": [
      "LA BATEA"
    ],
    "LA CALERA": [
      "CASA BAMBA",
      "DUMESNIL",
      "EL DIQUECITO",
      "LA CALERA",
      "LA MESADA",
      "PIEDRAS BLANCAS"
    ],
    "LA CARLOTA": [
      "LA CARLOTA"
    ],
    "LA CAROLINA EL POTOSI": [
      "LA CAROLINA"
    ],
    "LA CAUTIVA": [
      "LA CAUTIVA"
    ],
    "LA CESIRA": [
      "LA CESIRA"
    ],
    "LA CRUZ": [
      "LA CRUZ"
    ],
    "LA CUMBRE": [
      "EL ROSARIO",
      "LA CUMBRE",
      "PINTOS"
    ],
    "LA CUMBRECITA": [
      "LA CUMBRECITA",
      "VILLA BERNA"
    ],
    "LA FALDA": [
      "LA FALDA",
      "PIEDRAS GRANDES"
    ],
    "LA FRANCIA": [
      "LA FRANCIA"
    ],
    "LA GRANJA": [
      "ASCOCHINGA",
      "LA GRANJA",
      "LOS MOLLES"
    ],
    "LA HIGUERA": [
      "LA HIGUERA"
    ],
    "LA LAGUNA": [
      "LA LAGUNA"
    ],
    "LA PAISANITA": [
      "LA ISLA",
      "LA PAISANITA"
    ],
    "LA PALESTINA": [
      "LA PALESTINA"
    ],
    "LA PAMPA": [
      "LA PAMPA"
    ],
    "LA PAQUITA": [
      "LA PAQUITA"
    ],
    "LA PARA": [
      "LA PARA",
      "LAGUNA DE ANSENUZA",
      "LOMAS DEL TROZO"
    ],
    "LA PAZ": [
      "CRUZ CAÑA",
      "EL MANANTIAL",
      "LA GUARIDA",
      "LA PAZ",
      "LA RAMADA",
      "LAS CHACRAS",
      "LOMA BOLA",
      "LOS MANANTIALES",
      "LOS MATES",
      "QUEBRACHO LADEADO"
    ],
    "LA PLAYA": [
      "LA PLAYA"
    ],
    "LA PLAYOSA": [
      "LA PLAYOSA"
    ],
    "LA POBLACION": [
      "LA POBLACION"
    ],
    "LA POSTA": [
      "LA POSTA"
    ],
    "LA PUERTA": [
      "LA PUERTA"
    ],
    "LA QUINTA": [
      "LA QUINTA"
    ],
    "LA RANCHERITA": [
      "LA RANCHERITA"
    ],
    "LA RINCONADA": [
      "CAMPO ALEGRE",
      "EL ZAPALLAR",
      "ESTANCIA MARULL",
      "LA RINCONADA",
      "LOS EUCALIPTOS"
    ],
    "LA SERRANITA": [
      "LA SERRANITA"
    ],
    "LA TORDILLA": [
      "LA TORDILLA"
    ],
    "LABORDE": [
      "LABORDE"
    ],
    "LABOULAYE": [
      "LABOULAYE"
    ],
    "LAGUNA LARGA": [
      "LAGUNA LARGA"
    ],
    "LAS ACEQUIAS": [
      "LAS ACEQUIAS"
    ],
    "LAS ALBAHACAS": [
      "LA AGUADA",
      "LAS ALBAHACAS",
      "RODEO VIEJO"
    ],
    "LAS ARRIAS": [
      "BAJO HONDO",
      "EL VENCE",
      "LA ESPERANZA",
      "LAS ARRIAS",
      "LAS MARAVILLAS"
    ],
    "LAS BAJADAS": [
      "LAS BAJADAS",
      "SOCONCHO"
    ],
    "LAS CALERAS": [
      "LAS CALERAS",
      "VILLA TRONQUILS"
    ],
    "LAS CALLES": [
      "EL HUAYCO",
      "LAS CALLES",
      "SAN HUBERTO"
    ],
    "LAS CAÑADAS": [
      "LA RINCONADA",
      "LAS CAÑADAS",
      "NEGRO HUASI"
    ],
    "LAS GRAMILLAS": [
      "LAS GRAMILLAS"
    ],
    "LAS HIGUERAS": [
      "LAS HIGUERAS"
    ],
    "LAS ISLETILLAS": [
      "LAS ISLETILLAS"
    ],
    "LAS JUNTURAS": [
      "LAS JUNTURAS"
    ],
    "LAS PALMAS": [
      "EL POTRERO",
      "LAS PALMAS"
    ],
    "LAS PERDICES": [
      "LAS PERDICES"
    ],
    "LAS PEÑAS": [
      "LAS PEÑAS"
    ],
    "LAS PEÑAS SUD": [
      "LAS PEÑAS"
    ],
    "LAS PLAYAS": [
      "LAS PLAYAS"
    ],
    "LAS RABONAS": [
      "LAS RABONAS"
    ],
    "LAS SALADAS": [
      "LAS SALADAS"
    ],
    "LAS TAPIAS": [
      "LAS TAPIAS"
    ],
    "LAS VARAS": [
      "LAS VARAS"
    ],
    "LAS VARILLAS": [
      "LAS VARILLAS"
    ],
    "LAS VERTIENTES": [
      "LAS VERTIENTES"
    ],
    "LEGUIZAMON": [
      "LEGUIZAMON"
    ],
    "LEONES": [
      "LEONES"
    ],
    "LOS CEDROS": [
      "LOS CEDROS"
    ],
    "LOS CERRILLOS": [
      "LOS CERRILLOS"
    ],
    "LOS CHAÑARITOS (CRUZ DEL EJE)": [
      "LOS CHAÑARITOS",
      "LOS HORMIGUEROS",
      "SAN ISIDRO"
    ],
    "LOS CHAÑARITOS (RÍO SEGUNDO)": [
      "LOS CHAÑARITOS"
    ],
    "LOS CISNES": [
      "LOS CISNES"
    ],
    "LOS COCOS": [
      "LOS COCOS"
    ],
    "LOS CONDORES": [
      "BANDA SUD",
      "LOS CONDORES"
    ],
    "LOS HORNILLOS": [
      "DOS ARROYOS",
      "EL PANTANILLO",
      "LOS HORNILLOS"
    ],
    "LOS HOYOS": [
      "LA COSTA",
      "LOS HOYOS",
      "SANTO DOMINGO"
    ],
    "LOS MISTOLES": [
      "LOS MISTOLES"
    ],
    "LOS MOLINOS": [
      "LOS MOLINOS",
      "VILLA SAN MIGUEL"
    ],
    "LOS POZOS": [
      "LOS POZOS"
    ],
    "LOS REARTES": [
      "LOS REARTES"
    ],
    "LOS SURGENTES": [
      "COLONIA M. JUAREZ CELMAN",
      "LOS SURGENTES"
    ],
    "LOS TALARES": [
      "LOS TALARES"
    ],
    "LOS ZORROS": [
      "LOS ZORROS"
    ],
    "LOZADA": [
      "LOZADA"
    ],
    "LUCA": [
      "LUCA"
    ],
    "LUCIO VICTORIO MANSILLA": [
      "LUCIO V. MANSILLA"
    ],
    "LUQUE": [
      "LUQUE"
    ],
    "LUTTI": [
      "CARAHUASI",
      "EL ESPINILLO",
      "LOS VALLECITOS",
      "LUTTI"
    ],
    "LUYABA": [
      "EL PORTEZUELO",
      "GUANACO BOLEADO",
      "LA TRAVESIA",
      "LUYABA",
      "SAN ISIDRO",
      "TRAVESIA"
    ],
    "MALAGUEÑO": [
      "BARRIO GILBERT (1° DE MAYO)",
      "CAUSANA",
      "FALDA DEL CAÑETE",
      "LA PERLA",
      "MALAGUEÑO",
      "MILENICA",
      "PUNTA DE AGUA",
      "SAN NICOLAS",
      "TEJAS TRES",
      "TIERRA ALTA",
      "VILLA SIERRAS DE ORO",
      "YOCSINA"
    ],
    "MALENA": [
      "MALENA"
    ],
    "MALVINAS ARGENTINAS": [
      "MALVINAS ARGENTINAS",
      "VILLA CORAZON DE MARIA"
    ],
    "MANFREDI": [
      "MANFREDI"
    ],
    "MAQUINISTA GALLINI": [
      "MAQUINISTA GALLINI",
      "TIMON CRUZ",
      "TRES POZOS"
    ],
    "MARCOS JUAREZ": [
      "MARCOS JUAREZ"
    ],
    "MARULL": [
      "MARULL"
    ],
    "MATORRALES": [
      "MATORRALES"
    ],
    "MATTALDI": [
      "MATTALDI"
    ],
    "MAYU SUMAJ": [
      "MAYU SUMAJ"
    ],
    "MEDIA NARANJA": [
      "MEDIA NARANJA",
      "PUESTO DEL GALLO"
    ],
    "MELO": [
      "MELO"
    ],
    "MENDIOLAZA": [
      "MENDIOLAZA"
    ],
    "MI GRANJA": [
      "MI GRANJA"
    ],
    "MINA CLAVERO": [
      "GIULO CESARE",
      "LA GLORIA",
      "LA VENTANA",
      "MINA CLAVERO",
      "PUENTE DEL CURA",
      "RIO HONDO"
    ],
    "MIRAMAR": [
      "MIRAMAR"
    ],
    "MONTE BUEY": [
      "MONTE BUEY"
    ],
    "MONTE CRISTO": [
      "KILOMETRO 691",
      "MEDIA LUNA SUR",
      "MONTECRISTO"
    ],
    "MONTE DE LOS GAUCHOS": [
      "COLONIA MONTE DE LOS GAUCHOS",
      "MONTE DE LOS GAUCHOS"
    ],
    "MONTE LEÑA": [
      "MONTE LEÑA"
    ],
    "MONTE MAIZ": [
      "MONTE MAIZ"
    ],
    "MONTE RALO": [
      "MONTE RALO"
    ],
    "MORRISON": [
      "MORRISON"
    ],
    "MORTEROS": [
      "MORTEROS"
    ],
    "NICOLAS BRUZZONE": [
      "NICOLAS BRUZZONE"
    ],
    "NOETINGER": [
      "NOETINGER"
    ],
    "NONO": [
      "CIENAGA DE ALLENDE",
      "LA MAJADA",
      "LOS ALGARROBOS",
      "NONO",
      "OJO DE AGUA"
    ],
    "OBISPO TREJO": [
      "OBISPO TREJO"
    ],
    "OLAETA": [
      "OLAETA"
    ],
    "OLIVA": [
      "OLIVA"
    ],
    "OLIVARES DE SAN NICOLAS": [
      "COLONIA ROMANA",
      "ESQUINA DEL ALAMBRE",
      "LA CONCEPCION",
      "LAS PALMAS",
      "OLIVARES DE SAN NICOLAS"
    ],
    "ONAGOITY": [
      "ONAGOITY"
    ],
    "ONCATIVO": [
      "ONCATIVO"
    ],
    "ORDOÑEZ": [
      "ORDOÑEZ"
    ],
    "PACHECO DE MELO": [
      "PACHECO DE MELO"
    ],
    "PAMPAYASTA NORTE": [
      "CAMPO ASINARI",
      "PAMPAYASTA NORTE"
    ],
    "PAMPAYASTA SUD": [
      "PAMPAYASTA SUR"
    ],
    "PANAHOLMA": [
      "PANAHOLMA"
    ],
    "PASCANAS": [
      "PASCANAS"
    ],
    "PASCO": [
      "PASCO"
    ],
    "PASO DEL DURAZNO": [
      "PASO DEL DURAZNO"
    ],
    "PASO VIEJO": [
      "PASO VIEJO"
    ],
    "PILAR": [
      "PILAR"
    ],
    "PINCEN": [
      "PINCEN"
    ],
    "PIQUILLIN": [
      "PIQUILLIN"
    ],
    "PLAZA DE MERCEDES": [
      "PLAZA DE MERCEDES"
    ],
    "PLAZA LUXARDO": [
      "ESTACION LUXARDO",
      "PLAZA LUXARDO"
    ],
    "PORTEÑA": [
      "PORTEÑA"
    ],
    "POTRERO DE GARAY": [
      "GOLPE DE AGUA",
      "LOS ESPINILLOS",
      "POTRERO DE GARAY"
    ],
    "POZO DEL MOLLE": [
      "POZO DEL MOLLE"
    ],
    "POZO NUEVO": [
      "EL BARREAL",
      "POZO NUEVO",
      "SAN MARTIN",
      "SAN MIGUEL"
    ],
    "PUEBLO ITALIANO": [
      "PUEBLO ITALIANO"
    ],
    "PUESTO DE CASTRO": [
      "PUESTO DE CASTRO"
    ],
    "PUNTA DEL AGUA": [
      "PUNTA DEL AGUA"
    ],
    "QUEBRACHO HERRADO": [
      "QUEBRACHO HERRADO"
    ],
    "QUILINO": [
      "LAS CHACRAS",
      "LOS CADILLOS",
      "QUILINO",
      "VILLA QUILINO"
    ],
    "RAFAEL GARCIA": [
      "RAFAEL GARCIA"
    ],
    "RANQUELES": [
      "RANQUELES"
    ],
    "RAYO CORTADO": [
      "RAYO CORTADO"
    ],
    "REDUCCION": [
      "VILLA REDUCCION"
    ],
    "RINCON": [
      "RINCON"
    ],
    "RIO CEBALLOS": [
      "BARRIO NUEVO RIO CEBALLOS",
      "PAJAS BLANCAS",
      "RIO CEBALLOS"
    ],
    "RIO CUARTO": [
      "LA ESQUINA",
      "RIO CUARTO"
    ],
    "RIO DE LOS SAUCES": [
      "CERRO SAN LORENZO",
      "HUERTA VIEJA",
      "R. DE LA CRUZ OESTE",
      "RIO DE LOS SAUCES",
      "SAN FRANCISCO",
      "SAN JOSE",
      "VILLA SAN LORENZO"
    ],
    "RIO PRIMERO": [
      "RIO PRIMERO"
    ],
    "RIO SEGUNDO": [
      "RIO SEGUNDO"
    ],
    "RIO TERCERO": [
      "CAMPO GIODA",
      "EL CALLEJON NORTE",
      "LOS POTREROS",
      "RIO TERCERO"
    ],
    "RIOBAMBA": [
      "RIO BAMBA"
    ],
    "ROSALES": [
      "ROSALES"
    ],
    "ROSARIO DEL SALADILLO": [
      "LOS TAJAMARES",
      "PUESTO DE FIERRO",
      "ROSARIO DEL SALADILLO"
    ],
    "SACANTA": [
      "SACANTA"
    ],
    "SAGRADA FAMILIA": [
      "SAGRADA FAMILIA"
    ],
    "SAIRA": [
      "SAIRA"
    ],
    "SALADILLO": [
      "SALADILLO"
    ],
    "SALDAN": [
      "SALDAN"
    ],
    "SALSACATE": [
      "CASA BLANCA",
      "SALSACATE",
      "TANINGA",
      "VILLA VISO"
    ],
    "SALSIPUEDES": [
      "EL PUEBLITO",
      "LA ESTANCITA",
      "SALSIPUEDES"
    ],
    "SAMPACHO": [
      "SAMPACHO"
    ],
    "SAN AGUSTIN": [
      "SAN AGUSTIN",
      "VILLA SANTA RITA"
    ],
    "SAN ANTONIO DE ARREDONDO": [
      "LAS JARILLAS",
      "SAN ANTONIO",
      "SAN ANTONIO DE ARREDONDO",
      "SANTA ROSA"
    ],
    "SAN ANTONIO DE LITIN": [
      "SAN ANTONIO DE LITIN"
    ],
    "SAN BASILIO": [
      "SAN BASILIO"
    ],
    "SAN CARLOS MINAS": [
      "AGUA DEL CRESPIN",
      "LOS BARRIALES",
      "MESA DE MARIANO",
      "NINALQUIN",
      "SAN CARLOS MINAS",
      "SAUCE DE LOS QUEVEDOS"
    ],
    "SAN CLEMENTE": [
      "PASO DE LA PAMPA",
      "SAN CLEMENTE"
    ],
    "SAN ESTEBAN": [
      "SAN ESTEBAN"
    ],
    "SAN FRANCISCO": [
      "PLAZA SAN FRANCISCO",
      "SAN FRANCISCO"
    ],
    "SAN FRANCISCO DEL CHAÑAR": [
      "LOS CERRILLOS",
      "POZO DEL TIGRE",
      "SAN FRANCISCO DEL CHAÑAR",
      "SANTA ANA"
    ],
    "SAN GERONIMO": [
      "BUENA VISTA",
      "SAN GERONIMO"
    ],
    "SAN IGNACIO": [
      "SAN IGNACIO (LOTEO SAN JAVIER)"
    ],
    "SAN JAVIER Y YACANTO": [
      "LA CONSTANCIA",
      "SAN JAVIER Y YACANTO"
    ],
    "SAN JOAQUIN": [
      "SAN JOAQUIN"
    ],
    "SAN JOSE": [
      "SAN JOSE"
    ],
    "SAN JOSE DE LA DORMIDA": [
      "ALTO DE FLORES",
      "SAN JOSE DE LA DORMIDA"
    ],
    "SAN JOSE DE LAS SALINAS": [
      "AGUA HEDIONDA",
      "ISLA DE SAN ANTONIO",
      "SAN JOSE DE LAS SALINAS"
    ],
    "SAN LORENZO": [
      "LAS MARAVILLAS",
      "SAN LORENZO"
    ],
    "SAN MARCOS SIERRAS": [
      "LA BANDA",
      "LOS SAUCES",
      "SAN MARCOS SIERRA"
    ],
    "SAN MARCOS SUD": [
      "SAN MARCOS"
    ],
    "SAN PEDRO": [
      "EL BORDO",
      "LOS CALLEJONES",
      "SAN PEDRO",
      "SAN SEBASTIAN"
    ],
    "SAN PEDRO NORTE": [
      "LA LAGUNA",
      "SAN PEDRO NORTE"
    ],
    "SAN ROQUE": [
      "CASSAFFOUSTH",
      "SAN ROQUE"
    ],
    "SAN VICENTE": [
      "BALDE DE LA MORA",
      "EL CADILLO",
      "LA LINEA",
      "LA REDUCCION",
      "LAS TOSCAS",
      "SAN MIGUEL",
      "SAN RAFAEL",
      "SAN VICENTE",
      "SANTA MARIA"
    ],
    "SANTA CATALINA": [
      "SANTA CATALINA"
    ],
    "SANTA ELENA": [
      "SANTA ELENA"
    ],
    "SANTA EUFEMIA": [
      "SANTA EUFEMIA"
    ],
    "SANTA MARIA DE PUNILLA": [
      "MALLIN",
      "SANTA MARIA DE PUNILLA",
      "VILLA SAN JOSE"
    ],
    "SANTA ROSA DE CALAMUCHITA": [
      "ARROYO SECO",
      "SAN IGNACIO (LOTEO VELEZ CRESPO)",
      "SANTA MONICA",
      "SANTA ROSA DE CALAMUCHITA"
    ],
    "SANTA ROSA DE RIO PRIMERO": [
      "SANTA ROSA DE RIO PRIMERO"
    ],
    "SANTIAGO TEMPLE": [
      "SANTIAGO TEMPLE"
    ],
    "SARMIENTO": [
      "AGUA DE LAS PIEDRAS",
      "SARMIENTO"
    ],
    "SATURNINO MARIA LASPIUR": [
      "SATURNINO MARIA LASPIUR"
    ],
    "SAUCE ARRIBA": [
      "PIEDRA PINTADA",
      "SAUCE ARRIBA"
    ],
    "SEBASTIAN ELCANO": [
      "SEBASTIAN ELCANO"
    ],
    "SEEBER": [
      "SEEBER"
    ],
    "SEGUNDA USINA": [
      "SEGUNDA USINA"
    ],
    "SERRANO": [
      "SERRANO"
    ],
    "SERREZUELA": [
      "CACHIYUYO",
      "EL DIECISEIS",
      "EL QUICHO",
      "LAS ABRAS",
      "SAN AGUSTIN",
      "SERREZUELA"
    ],
    "SILVIO PELLICO": [
      "SILVIO PELLICO"
    ],
    "SIMBOLAR": [
      "SIMBOLAR"
    ],
    "SINSACATE": [
      "SINSACATE"
    ],
    "SUCO": [
      "SUCO"
    ],
    "TALA CAÑADA": [
      "SAGRADA FAMILIA",
      "TALA CAÑADA"
    ],
    "TALA HUASI": [
      "TALA HUASI"
    ],
    "TALAINI": [
      "TALAINI"
    ],
    "TANCACHA": [
      "TANCACHA"
    ],
    "TANTI": [
      "TANTI",
      "VILLA FLOR SERRANA"
    ],
    "TICINO": [
      "TICINO"
    ],
    "TINOCO": [
      "MEDIA LUNA NORTE",
      "TINOCO"
    ],
    "TIO PUJIO": [
      "CAMPO EL CABURE",
      "CHACRAS DE TIO PUJIO",
      "COLONIA SANTA RITA",
      "GRANJA LA MARGARITA",
      "PEDANIA YUCAT P/TIO PUJIO",
      "TIO PUJIO"
    ],
    "TOLEDO": [
      "CASEROS ESTE",
      "KILOMETRO 15",
      "LA ARABIA",
      "LA ARCADIA",
      "TOLEDO"
    ],
    "TORO PUJIO": [
      "TORO PUJIO"
    ],
    "TOSNO": [
      "RIO SECO",
      "RODEO GRANDE",
      "TOSNO"
    ],
    "TOSQUITA": [
      "TOSQUITAS"
    ],
    "TRANSITO": [
      "TRANSITO",
      "VILLA DEL TRANSITO"
    ],
    "TUCLAME": [
      "TUCLAME"
    ],
    "UCACHA": [
      "UCACHA"
    ],
    "UNQUILLO": [
      "LAS CORZUELAS",
      "UNQUILLO"
    ],
    "VALLE DE ANISACATE": [
      "VALLE DE ANISACATE"
    ],
    "VALLE HERMOSO": [
      "VALLE HERMOSO"
    ],
    "VIAMONTE": [
      "VIAMONTE"
    ],
    "VICUÑA MACKENNA": [
      "COLONIA PUEYRREDON",
      "VICUÑA MACKENNA"
    ],
    "VILLA ALLENDE": [
      "COUNTRY CHACRAS DE LA VILLA",
      "COUNTRY SAN ISIDRO",
      "LA MORADA",
      "SAN FERNANDO",
      "VILLA ALLENDE"
    ],
    "VILLA AMANCAY": [
      "RIO GRANDE",
      "VILLA AMANCAY"
    ],
    "VILLA ASCASUBI": [
      "CAMPO AGÑERO",
      "CAMPO CAFFARATTI",
      "CAMPO PICATTO",
      "VILLA ASCASUBI"
    ],
    "VILLA CANDELARIA NORTE": [
      "EL EJE DE CANDELARIA",
      "SAN LUIS",
      "VILLA CANDELARIA NORTE"
    ],
    "VILLA CARLOS PAZ": [
      "SANTA CRUZ DEL LAGO",
      "VILLA CARLOS PAZ"
    ],
    "VILLA CERRO AZUL": [
      "VILLA CERRO AZUL"
    ],
    "VILLA CIUDAD DE AMERICA": [
      "BARRIO VILLA DEL PARQUE",
      "VILLA CIUDAD DE AMERICA"
    ],
    "VILLA CIUDAD PARQUE LOS REARTES": [
      "SOLAR DE LOS MOLINOS",
      "VILLA CIUDAD PARQUE LOS REARTES",
      "VILLA CIUDAD PARQUE LOS REARTES (3Ñ SECCION)",
      "VILLA CIUDAD PARQUES LOS REARTES (1Ñ SECCION)",
      "VILLA DEL PARQUE (VILLA RUMIPAL)"
    ],
    "VILLA CONCEPCION DEL TIO": [
      "VILLA CONCEPCION DEL TIO"
    ],
    "VILLA CURA BROCHERO": [
      "VILLA CURA BROCHERO"
    ],
    "VILLA DE LAS ROSAS": [
      "ALTO RESBALOSO - EL BARRIAL",
      "EL PUEBLITO",
      "EL VALLE",
      "LAS CHACRAS",
      "LOS MOLLES",
      "QUEBRADA DE LOS POZOS",
      "RODEO DE PIEDRA",
      "VILLA DE LAS ROSAS",
      "VILLA LA VIÑA"
    ],
    "VILLA DE MARIA": [
      "VILLA DE MARIA"
    ],
    "VILLA DE POCHO": [
      "VILLA DE POCHO"
    ],
    "VILLA DE SOTO": [
      "BELLA VISTA",
      "VILLA DE SOTO"
    ],
    "VILLA DEL DIQUE": [
      "VILLA DEL DIQUE"
    ],
    "VILLA DEL PRADO": [
      "VILLA DEL PRADO"
    ],
    "VILLA DEL ROSARIO": [
      "VILLA DEL ROSARIO"
    ],
    "VILLA DEL TOTORAL": [
      "EL PEDACITO",
      "VILLA DEL TOTORAL"
    ],
    "VILLA DOLORES": [
      "EL BALDECITO",
      "LA PRIMAVERA",
      "LAS ENCRUCIJADAS",
      "PIEDRA PINTADA",
      "VILLA DOLORES"
    ],
    "VILLA EL CHACAY": [
      "VILLA EL CHACAY"
    ],
    "VILLA ELISA": [
      "CAMPO LA REDENCION",
      "VILLA ELISA"
    ],
    "VILLA FONTANA": [
      "EL TOSTADO",
      "PUNTA DEL ARROYO",
      "SANTA RITA",
      "VILLA FONTANA"
    ],
    "VILLA GENERAL BELGRANO": [
      "CAPILLA VIEJA",
      "CERRO HERMOSO",
      "FALDA DE LOS REARTES",
      "VILLA GENERAL BELGRANO"
    ],
    "VILLA GIARDINO": [
      "LOS TRONCOS",
      "VILLA GIARDINO"
    ],
    "VILLA GUTIERREZ": [
      "VILLA GUTIERREZ"
    ],
    "VILLA HUIDOBRO": [
      "VILLA HUIDOBRO"
    ],
    "VILLA LA BOLSA": [
      "VILLA LA BOLSA"
    ],
    "VILLA LOS AROMOS": [
      "VILLA LOS AROMOS"
    ],
    "VILLA LOS PATOS": [
      "VILLA LOS PATOS"
    ],
    "VILLA MARIA": [
      "LAS PLAYAS",
      "VILLA ALBERTINA",
      "VILLA MARIA"
    ],
    "VILLA NUEVA": [
      "VILLA NUEVA",
      "VILLA OESTE"
    ],
    "VILLA PARQUE SANTA ANA": [
      "CAMPOS DEL VIRREY",
      "MI VALLE",
      "VILLA PARQUE SANTA ANA"
    ],
    "VILLA PARQUE SIQUIMAN": [
      "VILLA PARQUE SIQUIMAN"
    ],
    "VILLA QUILLINZO": [
      "VILLA LA RIVERA",
      "VILLA QUILLINZO"
    ],
    "VILLA RIO ICHO CRUZ": [
      "VILLA RIO ICHO CRUZ"
    ],
    "VILLA ROSSI": [
      "VILLA ROSSI"
    ],
    "VILLA RUMIPAL": [
      "EL CORCOVADO - EL TORREON",
      "VILLA RUMIPAL"
    ],
    "VILLA SAN ESTEBAN": [
      "VILLA SAN ESTEBAN"
    ],
    "VILLA SAN ISIDRO": [
      "JOSE DE LA QUINTANA",
      "LA BOCA DEL RIO",
      "VILLA SAN ISIDRO - JOSE DE LA QUINTANA"
    ],
    "VILLA SANTA CRUZ DEL LAGO": [
      "VILLA LAGO AZUL",
      "VILLA SANTA CRUZ DEL LAGO"
    ],
    "VILLA SARMIENTO": [
      "VILLA SARMIENTO"
    ],
    "VILLA TULUMBA": [
      "LA MAJADILLA",
      "LAS JUNTAS",
      "RIO DE BUSTOS",
      "SOCAVONES",
      "VILLA TULUMBA"
    ],
    "VILLA VALERIA": [
      "VILLA VALERIA"
    ],
    "VILLA YACANTO": [
      "CAPILLA DEL CARMEN",
      "EL DURAZNO",
      "RIO DEL DURAZNO",
      "VILLA YACANTO"
    ],
    "WASHINGTON": [
      "WASHINGTON"
    ],
    "WENCESLAO ESCALANTE": [
      "WENCESLAO ESCALANTE"
    ]
  },
  "ENTRE RÍOS": {
    "1° DE MAYO": [
      "1 DE MAYO",
      "COLONIA 3 DE FEBRERO",
      "COLONIA EL PANTANOSO",
      "COLONIA GENERAL URQUIZA"
    ],
    "ALBARDON - PUNTA DEL MONTE": [
      "PUNTA DEL MONTE"
    ],
    "ALCARAZ": [
      "ALCARAZ",
      "COLONIA 25 DE MAYO"
    ],
    "ALCARAZ NORTE": [
      "CAMPO JOURBET",
      "COLONIA 3 DE FEBRERO",
      "COLONIA TABOADA"
    ],
    "ALCARAZ SUR": [
      "CAMPO PARERA",
      "ESTANCIA LOS PARAISOS"
    ],
    "ALDEA ASUNCION": [
      "ALDEA ASUNCION",
      "CAMPO VASALLE",
      "DISTRITO JACINTA"
    ],
    "ALDEA BRASILERA": [
      "ALDEA BRASILERA",
      "PARAJE LA VIRGEN"
    ],
    "ALDEA EIGENFELD": [
      "ALDEA EIGENFELD"
    ],
    "ALDEA GRAPSCHENTAL": [
      "ALDEA GRAPSCHENTAL"
    ],
    "ALDEA MARIA LUISA": [
      "ALDEA MARIA LUISA"
    ],
    "ALDEA PROTESTANTE": [
      "ALDEA PROTESTANTE",
      "COLONIA ALVEAR"
    ],
    "ALDEA SALTO": [
      "ALDEA SALTO"
    ],
    "ALDEA SAN ANTONIO": [
      "ALDEA SAN ANTONIO",
      "ALDEA SANTA CELIA",
      "COLONIA EL PARAISO"
    ],
    "ALDEA SAN JUAN": [
      "ALDEA SAN JUAN"
    ],
    "ALDEA SAN MIGUEL": [
      "ALDEA SAN MIGUEL",
      "CAMPO GARCIA"
    ],
    "ALDEA SAN RAFAEL": [
      "ALDEA SAN RAFAEL",
      "CAMPO ZIEGLER"
    ],
    "ALDEA SANTA MARIA": [
      "ALDEA SANTA MARIA",
      "ANTONIO TOMAS",
      "CAMPO FURLAN"
    ],
    "ALDEA SANTA ROSA": [
      "ALDEA SANTA ROSA"
    ],
    "ALDEA SPATZENKUTTER": [
      "ALDEA SPATZENKUTTER"
    ],
    "ALDEA VALLE MARIA": [
      "ALDEA SAN FRANCISCO",
      "ALDEA VALLE MARIA"
    ],
    "ALTAMIRANO SUR": [
      "ALTAMIRANO SUR",
      "COLONIA EL CLAVO"
    ],
    "ANTELO": [
      "ANTELO"
    ],
    "ANTONIO TOMAS": [
      "GENERAL GUEMES"
    ],
    "ARANGUREN": [
      "ALGARROBITOS SEGUNDO",
      "ARANGUREN",
      "COLONIA ALGARROBITOS"
    ],
    "AREA SIN GOBIERNO": [
      "ALDEA SAN GREGORIO",
      "ALGARROBITOS",
      "ARROYO HONDO",
      "ARROYO OBISPO",
      "CAMPO LACORAZA",
      "CAMPO MICHELOUD",
      "CARPINCHORI",
      "CARRIZAL",
      "COLONIA BARREROS",
      "COLONIA BELGRANO",
      "COLONIA CAÑADA GRANDE",
      "COLONIA ESPINDOLA",
      "COLONIA GENACITO",
      "COLONIA ITALIANA",
      "COLONIA LA ESPERANZA",
      "COLONIA LA GERONIMA",
      "COLONIA LA LLAVE",
      "COLONIA LA PERLA",
      "COLONIA LA ROSADA",
      "COLONIA LAS MERCEDES",
      "COLONIA LAS PIEDRAS",
      "COLONIA LOS SAUCES",
      "COLONIA LUCIENVILLE",
      "COLONIA MABRAGAÑA",
      "COLONIA MAXIMO CASTRO",
      "COLONIA OFICIAL 21",
      "COLONIA PALMAR YATAY",
      "COLONIA SAN EMILIO",
      "COLONIA SAN FRANCISCO",
      "COLONIA SAN JORGE",
      "COLONIA SAN JUAN",
      "COLONIA SAN VICENTE",
      "COLONIA SANTA MARGARITA",
      "COLONIA SANTAFESINA",
      "COLONIA SAUCE NORTE",
      "COLONIA STAUBER",
      "COSTA LAS MASITAS",
      "CUATRO BOCAS",
      "CUATRO MANOS",
      "DISTRITO ALBARDON",
      "DISTRITO CEIBAS",
      "DISTRITO CLE",
      "DISTRITO CORRALES",
      "DISTRITO FELICIANO",
      "DISTRITO MOSCAS",
      "DISTRITO PEHUAJO NORTE",
      "DISTRITO PEHUAJO SUD",
      "DISTRITO PUEBLO PRIMERO",
      "DISTRITO QUEBRACHITOS",
      "DISTRITO RAICES AL SUD",
      "DISTRITO SAUCE",
      "DISTRITO SAUCE AL NORTE",
      "DISTRITO VIZCACHA",
      "EL EMPALME",
      "EL SALADERO",
      "EL SALADO",
      "EL SAUCE",
      "EL TROPEZON",
      "ESQUINA",
      "EST. EL TIGRE",
      "ESTACAS",
      "ESTACION DON GONZALO",
      "ESTACION JUAN JORGE",
      "ESTACION PALAVECINO",
      "ESTANCIA EL REFUGIO",
      "ESTANCIA SAN JUAN",
      "ESTANCIA SANTA INES",
      "GUALEYANCITO",
      "HARAS GENERAL URQUIZA",
      "ISLA JUANICO",
      "LA ARGENTINA",
      "LA CALANDRIA",
      "LA CUADRA",
      "LOS TALAS",
      "MIÑONES",
      "MONTIEL",
      "PAJONAL",
      "PASO TELEGRAFO",
      "RAMBLONES",
      "RINCON DEL VILLAGUAY",
      "SUMACA",
      "TRES BOCAS",
      "TRES ESQUINAS",
      "VILLA LIBERTAD",
      "VILLAGUAY ESTE"
    ],
    "ARROYO BARU": [
      "ARROYO BARU",
      "COLONIA IZQUIERDO"
    ],
    "ARROYO BURGOS": [
      "LA COLMENA"
    ],
    "ARROYO CLE": [
      "ESTACION ARROYO CLE"
    ],
    "ARROYO CORRALITO": [
      "ARROYO CORRALITO"
    ],
    "ARROYO DEL MEDIO": [
      "ARROYO DEL MEDIO"
    ],
    "ARROYO GENA": [
      "COLONIA SAGASTUME",
      "COLONIA SAN MARTIN",
      "ESTANCIA LA SILVIA"
    ],
    "BANDERAS": [
      "BANDERITAS",
      "COLONIA LA BERTA"
    ],
    "BASAVILBASO": [
      "BASAVILBASO",
      "PUEBLO NUEVO"
    ],
    "BETBEDER": [
      "BETBEDER"
    ],
    "BOVRIL": [
      "BOVRIL"
    ],
    "CASEROS": [
      "CASEROS"
    ],
    "CEIBAS": [
      "CEIBAS"
    ],
    "CERRITO": [
      "CERRITO",
      "PUEBLO GENERAL PAZ",
      "PUEBLO MORENO"
    ],
    "CHAJARI": [
      "CHAJARI",
      "COLONIA VILLA LIBERTAD"
    ],
    "CHILCAS": [
      "DISTRITO CHILCAS"
    ],
    "CLODOMIRO LEDESMA": [
      "CLODOMIRO LEDESMA"
    ],
    "COLON": [
      "COLON",
      "COLONIA HUGUES",
      "COLONIA PASO PAYSANDU"
    ],
    "COLONIA ADIVINO": [
      "COLONIA ADIVINOS"
    ],
    "COLONIA ALEMANA": [
      "COLONIA ALEMANA",
      "COLONIA MANDISOVI"
    ],
    "COLONIA AVELLANEDA": [
      "COLONIA AVELLANEDA"
    ],
    "COLONIA AVIGDOR": [
      "CAPIVARA",
      "COLONIA AVIGDOR",
      "EL CORCOVADO",
      "LAS GURISAS"
    ],
    "COLONIA AYUI": [
      "COLONIA AYUI"
    ],
    "COLONIA BAYLINA": [
      "COLONIA SANTA ELENA-COLONIABAYLINA"
    ],
    "COLONIA CARRASCO": [
      "CARRASCO"
    ],
    "COLONIA CELINA": [
      "COLONIA CELINA",
      "EL CERRO"
    ],
    "COLONIA CRESPO": [
      "CARMONA",
      "COLONIA CRESPO",
      "EL PALENQUE"
    ],
    "COLONIA ELIA": [
      "CAMPICHUELO",
      "COLONIA ELIA",
      "DISTRITO POTRERO",
      "EL POTRERO",
      "ESTANCIA CENTELLA"
    ],
    "COLONIA ENSAYO": [
      "COLONIA ENSAYO",
      "LA JAULA",
      "LA JUANITA"
    ],
    "COLONIA GENERAL ROCA": [
      "COLONIA GENERAL ROCA"
    ],
    "COLONIA MEROU": [
      "COLONIA GOBERNADOR CRESPO",
      "COLONIA MEROU"
    ],
    "COLONIA OFICIAL N° 13": [
      "COLONIA OFICIAL Nº 13"
    ],
    "COLONIA OFICIAL N° 3 Y 14": [
      "CUATRO BOCAS",
      "ESTACION ESTACAS"
    ],
    "COLONIA OFICIAL N° 5": [
      "ARROYO GRANDE",
      "COLONIA OFICIAL N° 5"
    ],
    "COLONIA REFFINO": [
      "COLONIA REFFINO"
    ],
    "COLONIA SAN ANSELMO Y ALEDAÑAS": [
      "COLONIA PEREIRA",
      "COLONIA SAN ANSELMO"
    ],
    "COLONIA SAN JUSTO": [
      "COLONIA SAN JUSTO",
      "COLONIA SAN PASCUAL"
    ],
    "COLONIA SANTA MARIA Y LAS MARGARITAS": [
      "COLONIA OFICIAL 17",
      "COLONIA SANTA MARIA",
      "FORTUNA"
    ],
    "COLONIA TUNAS": [
      "LAS TUNAS"
    ],
    "COLONIA VIRARO": [
      "COLONIA VIRARO"
    ],
    "CONCEPCION DEL URUGUAY": [
      "ARROYO URQUIZA",
      "COLONIA PERFECCION",
      "COLONIA SANTA ANA",
      "CONCEPCION DEL URUGUAY",
      "DISTRITO MOLINO",
      "TALITA"
    ],
    "CONCORDIA": [
      "BENITO LEGEREN",
      "CAMBA PASO",
      "CONCORDIA",
      "LAS TEJAS",
      "VILLA ADELA",
      "VILLA ZORRAQUIN"
    ],
    "CONSCRIPTO BERNARDI": [
      "CONSCRIPTO BERNARDI",
      "EL CARUMBE",
      "LAS ACHIRAS"
    ],
    "COSTA GRANDE": [
      "MOLINO DOLL"
    ],
    "COSTA URUGUAY NORTE": [
      "DISTRITO COSTA URUGUAY NORTE"
    ],
    "COSTA URUGUAY SUR": [
      "DISTRITO COSTA URUGUAY SUR"
    ],
    "CRESPO": [
      "ALDEA SAN JUAN",
      "COLONIA SAN JUAN",
      "CRESPO"
    ],
    "CRUCESITAS OCTAVA": [
      "CRUCESITAS"
    ],
    "CRUCESITAS TERCERA": [
      "CRUCESITAS TERCERA"
    ],
    "CUCHILLA REDONDA": [
      "CUCHILLA REDONDA",
      "DISTRITO CUCHILLA REDONDA"
    ],
    "CURTIEMBRE": [
      "COLONIA SAN MARTIN",
      "COLONIA SEDNA",
      "CURTIEMBRE",
      "PUEBLO GENERAL SAN MARTIN"
    ],
    "DIAMANTE": [
      "DIAMANTE",
      "STROBEL"
    ],
    "DISTRITO CHAÑAR": [
      "COLONIA OFICIAL 18"
    ],
    "DISTRITO CHIQUEROS": [
      "ALDEA ANDREOLI"
    ],
    "DISTRITO DIEGO LOPEZ": [
      "COLONIA LA LATA",
      "COLONIA LA MARTA",
      "COLONIA SAN LORENZO",
      "DIEGO LOPEZ"
    ],
    "DISTRITO PRIMERO (PRIMER DISTRITO CUCHILLA)": [
      "DISTRITO CUCHILLA"
    ],
    "DISTRITO SEXTO COSTA DE NOGOYA": [
      "DISTRITO COSTA DE NOGOYA",
      "PUERTA DE CRESPO"
    ],
    "DISTRITO TALA": [
      "DISTRITO TALA"
    ],
    "DISTRITO TALITAS": [
      "CAMPO TAFAREL"
    ],
    "DON CRISTOBAL PRIMERO": [
      "EL PUEBLITO"
    ],
    "DON CRISTOBAL SEGUNDO": [
      "DON CRISTOBAL"
    ],
    "DURAZNO": [
      "ALTAMIRANO NORTE",
      "DURAZNO",
      "EL GUINEO"
    ],
    "EL CARMEN - ESTACION RACEDO": [
      "GENERAL RACEDO"
    ],
    "EL CIMARRON": [
      "ALDEA SAN ISIDRO",
      "BARRAGAN",
      "EL CIMARRON"
    ],
    "EL GATO - LOMA LIMPIA": [
      "EL GATO",
      "LOMA LIMPIA"
    ],
    "EL GRAMIYAL": [
      "EL GRAMILLAL",
      "LA ENCIERRA"
    ],
    "EL PALENQUE": [
      "COLONIA RIVADAVIA"
    ],
    "EL PINGO": [
      "EL PINGO"
    ],
    "EL QUEBRACHO": [
      "EL QUEBRACHO"
    ],
    "EL REDOMON": [
      "COLONIA URQUIZA",
      "EL REDOMON",
      "LA QUERENCIA",
      "PASO DEL GALLO",
      "YAROS"
    ],
    "EL SOLAR, SAN CARLOS Y COLONIA BERTOZZI": [
      "COLONIA BERTOZI",
      "COLONIA LA PROVIDENCIA",
      "COLONIA SAN CARLOS",
      "EL SOLAR"
    ],
    "ENRIQUE CARBO": [
      "ALARCON",
      "ENRIQUE CARBO"
    ],
    "ESPINILLO NORTE": [
      "ESPINILLO"
    ],
    "ESTACION CAMPS": [
      "ESTACION CAMPS"
    ],
    "ESTACION ESCRIÑA": [
      "ESTACION ESCRIÑA"
    ],
    "ESTACION LAZO": [
      "ESTACION LAZO"
    ],
    "ESTACION LIBAROS": [
      "COLONIA LA JOYA",
      "LIBAROS"
    ],
    "ESTACION RAICES": [
      "COLONIA OFICIAL 2",
      "DISTRITO RAICES",
      "ESTACION RAICES",
      "LAS PAJITAS"
    ],
    "ESTACION YERUA": [
      "ESTACION YERUA",
      "PUEBLO FERRE"
    ],
    "ESTACION YUQUERI": [
      "ESTACION YUQUERI"
    ],
    "ESTANCIA GRANDE": [
      "CALABACILLA",
      "COLONIA YERUA",
      "ESTANCIA GRANDE"
    ],
    "ESTAQUITAS": [
      "COLONIA BUENA VISTA",
      "EL CHAÑAR",
      "ESTAQUITAS",
      "LA SELVA",
      "MOLINO PUBLICO",
      "PASO MEDINA"
    ],
    "FAUSTINO M PARERA": [
      "COLONIA GOBERNADOR BASAVILBASO",
      "FAUSTINO M. PARERA"
    ],
    "FEDERACION": [
      "COLONIA EL BIZCOCHO",
      "COLONIA ENSANCHE",
      "COLONIA FLORES",
      "FEDERACION",
      "SALTO GRANDE"
    ],
    "FEDERAL": [
      "EL RINCON",
      "FEDERAL",
      "LAS DELICIAS",
      "SAUCE SUR"
    ],
    "GENERAL ALMADA": [
      "GENERAL ALMADA"
    ],
    "GENERAL ALVEAR": [
      "GENERAL ALVEAR"
    ],
    "GENERAL CAMPOS": [
      "GENERAL CAMPOS"
    ],
    "GENERAL GALARZA": [
      "GENERAL GALARZA"
    ],
    "GENERAL RAMIREZ": [
      "GENERAL RAMIREZ"
    ],
    "GILBERT": [
      "GILBERT"
    ],
    "GOBERNADOR ECHAGUE": [
      "GOBERNADOR ECHAGUE"
    ],
    "GOBERNADOR FEBRE": [
      "DISTRITO MONTOYA",
      "FEBRE"
    ],
    "GOBERNADOR MANSILLA": [
      "COLONIA MANSILLA",
      "GOBERNADOR MANSILLA"
    ],
    "GOBERNADOR SOLA": [
      "GOBERNADOR SOLA",
      "OLEGARIO VICTOR ANDRADE"
    ],
    "GONZALEZ CALDERON": [
      "GONZALEZ CALDERON"
    ],
    "GUALEGUAY": [
      "GUALEGUAY",
      "PASO DE ALONSO",
      "PUERTO RUIZ"
    ],
    "GUALEGUAYCHU": [
      "GUALEGUAYCHU",
      "GUALEYAN",
      "PUERTO UNZUE",
      "SARANDI"
    ],
    "GUALEGUAYCITO": [
      "COLONIA LA GLORIA",
      "COLONIA LA PAZ"
    ],
    "GUARDAMONTE": [
      "GUARDAMONTE"
    ],
    "HAMBIS": [
      "COLONIA SAN HUBERTO",
      "HAMBIS"
    ],
    "HASENKAMP": [
      "HASENKAMP"
    ],
    "HERNANDARIAS": [
      "HERNANDARIAS",
      "PUERTO VIBORAS"
    ],
    "HERNANDEZ": [
      "HERNANDEZ"
    ],
    "HERRERA": [
      "CAMPO LA VIRGINIA",
      "COLONIA RINCON DEL GENA",
      "COLONIA SANTA ZELMIRA",
      "HERRERA",
      "SANTA MARGARITA DEL GENA"
    ],
    "HINOJAL": [
      "DISTRITO HINOJAL"
    ],
    "HOCKER": [
      "HOCKER"
    ],
    "IBICUY": [
      "ESTACION LIBERTADOR GENERAL SAN MARTIN",
      "IBICUY",
      "PUERTO CONSTANZA",
      "PUERTO PERAZZO"
    ],
    "INGENIERO SAJAROFF": [
      "INGENIERO MIGUEL SAJAROFF"
    ],
    "IRAZUSTA": [
      "COLONIA LAS FLORES",
      "IRAZUSTA"
    ],
    "ISLAS LAS LECHIGUANAS": [
      "ARROYO LAS LECHIGUANAS",
      "ARROYO SEPULTURA"
    ],
    "ISLETAS": [
      "DISTRITO ISLETAS",
      "ISLETAS"
    ],
    "JUBILEO": [
      "JUBILEO"
    ],
    "LA CLARITA": [
      "LA CLARITA"
    ],
    "LA CRIOLLA": [
      "LA CRIOLLA",
      "LAGO GRANDE",
      "SAN BONIFACIO"
    ],
    "LA ESMERALDA": [
      "BASUALDO",
      "LA ESMERALDA",
      "RINCON DE MESA"
    ],
    "LA FLORIDA": [
      "COLONIA OFICIAL 16"
    ],
    "LA FRATERNIDAD Y SANTA JUANA": [
      "COLONIA OFICIAL 25",
      "COLONIA SANTA JUANA"
    ],
    "LA HIERRA": [
      "ESTACION LA HIERRA"
    ],
    "LA OLLITA": [
      "LA OLLITA"
    ],
    "LA PAZ": [
      "LA PAZ",
      "PILOTO AVILA"
    ],
    "LA PICADA": [
      "LA PICADA"
    ],
    "LA PROVIDENCIA": [
      "LA PROVIDENCIA"
    ],
    "LA VERBENA": [
      "LA VERBENA",
      "VIBORAS"
    ],
    "LAGUNA BENITEZ": [
      "LAGUNA BENITEZ",
      "PASO BRAVO"
    ],
    "LAGUNA DEL PESCADO": [
      "LA TACUARA",
      "LAGUNA DEL PESCADO"
    ],
    "LARROQUE": [
      "LARROQUE"
    ],
    "LAS CUEVAS": [
      "DISTRITO DOLL",
      "PUERTO LAS CUEVAS"
    ],
    "LAS GARZAS": [
      "COLONIA LA GAMA",
      "PUEBLO BELLOCQ"
    ],
    "LAS GUACHAS": [
      "LAS GUACHAS",
      "SAUCE NORTE"
    ],
    "LAS MERCEDES": [
      "DOS HERMANAS",
      "LAS MERCEDES"
    ],
    "LAS MOSCAS": [
      "LAS MOSCAS"
    ],
    "LAS MULITAS": [
      "LAS MULITAS"
    ],
    "LAS TOSCAS": [
      "LAS TOSCAS"
    ],
    "LAS TUNAS": [
      "LAS TUNAS"
    ],
    "LAURENCENA": [
      "LAURENCENA"
    ],
    "LOS CHARRUAS": [
      "LOMA NEGRA",
      "LOS CHARRUAS"
    ],
    "LOS CONQUISTADORES": [
      "LOS CONQUISTADORES"
    ],
    "LUCAS GONZALEZ": [
      "ALDEA SAN SIMON",
      "LUCAS GONZALEZ"
    ],
    "LUCAS NORTE": [
      "EL ACHIRAL",
      "EL CURUPI",
      "EL GUAYABO",
      "LUCAS NORTE"
    ],
    "LUCAS SUR PRIMERO": [
      "COLONIA LA SARITA",
      "RINCON LUCAS SUD"
    ],
    "LUCAS SUR SEGUNDO": [
      "COLONIA BERRO",
      "COLONIA CONDOR",
      "COLONIA LA BLANQUITA",
      "COLONIA LA CHUNGA",
      "COLONIA LA MORA",
      "COLONIA NUEVA ALEMANIA",
      "COLONIA NUEVA ITATI",
      "COLONIA SAN GREGORIO",
      "LAGUNA LARGA",
      "LUCAS SUD",
      "ZENON ROCA"
    ],
    "MACIA": [
      "EL TALITA",
      "MACIA"
    ],
    "MARIA GRANDE": [
      "CAMPO MUJICA",
      "MARIA GRANDE"
    ],
    "MARIA GRANDE 2°": [
      "BARRANCAS COLORADAS"
    ],
    "MEDANOS": [
      "MEDANOS"
    ],
    "MOJONES NORTE": [
      "MOJONES NORTE",
      "PASO BLANCO"
    ],
    "MOJONES SUR": [
      "EL TIGRE",
      "LOS TASES",
      "MOJONES SUR"
    ],
    "MOLINO DOLL": [
      "MOLINO DOLL"
    ],
    "MONTE REDONDO (O 7° DISTRITO)": [
      "MONTE REDONDO"
    ],
    "MONTOYA": [
      "MONTOYA"
    ],
    "MULAS GRANDES": [
      "COSTA DE MULAS",
      "MULAS GRANDES"
    ],
    "NOGOYA": [
      "NOGOYA"
    ],
    "NUEVA ESCOCIA": [
      "NUEVA ESCOCIA"
    ],
    "NUEVA VIZCAYA": [
      "NUEVA VIZCAYA"
    ],
    "OMBU": [
      "EL OMBU"
    ],
    "ORO VERDE": [
      "ORO VERDE"
    ],
    "PAJONAL": [
      "LAS TRES ESQUINAS"
    ],
    "PARAJE GUAYAQUIL": [
      "GUAYAQUIL"
    ],
    "PARAJE LOS ALGARROBOS": [
      "EL CHAJARI"
    ],
    "PARANA": [
      "BAJADA GRANDE",
      "LAS PIEDRAS",
      "PARANA",
      "VILLA URANGA"
    ],
    "PASO DE LA ARENA": [
      "PASO DE LA ARENA"
    ],
    "PASO DE LA LAGUNA": [
      "COLONIA DESPARRAMADOS",
      "PASO DE LA LAGUNA"
    ],
    "PASO DE LAS PIEDRAS": [
      "COLONIA ARGENTINA",
      "PASO DE LAS PIEDRAS"
    ],
    "PASO DUARTE": [
      "ARROYO CHAÑAR",
      "COLONIA J. FINK",
      "DISTRITO CHAÑAR",
      "MOREIRA"
    ],
    "PASTOR BRITOS": [
      "PASTOR BRITOS"
    ],
    "PEDERNAL": [
      "COLONIA SANTA ISABEL",
      "PEDERNAL"
    ],
    "PERDICES": [
      "DISTRITO PERDICES",
      "PERDICES"
    ],
    "PICADA BERON": [
      "EL CARMEN",
      "EL YESO",
      "PICADA BERÓN"
    ],
    "PIEDRAS BLANCAS": [
      "CAMPO REBECHI",
      "CAMPOS SANCHEZ",
      "PIEDRAS BLANCAS"
    ],
    "PRONUNCIAMIENTO": [
      "COLONIA SANTA TERESITA",
      "PRONUNCIAMIENTO"
    ],
    "PUEBLO BRUGO": [
      "PUEBLO BRUGO"
    ],
    "PUEBLO CAZES": [
      "COLONIA SAN MIGUEL",
      "PUEBLO CAZES"
    ],
    "PUEBLO GENERAL BELGRANO": [
      "PUEBLO GENERAL BELGRANO"
    ],
    "PUEBLO LIEBIG S": [
      "PUEBLO LIEBIG'S"
    ],
    "PUERTO ALGARROBO": [
      "COLONIA SAN LUIS",
      "PASO POTRILLO",
      "PUERTO ALGARROBO"
    ],
    "PUERTO YERUA": [
      "LA ROSADA",
      "PUERTO YERUA"
    ],
    "QUEBRACHO": [
      "EL RAMBLON",
      "QUEBRACHO",
      "RAMBLONES"
    ],
    "RAICES OESTE": [
      "ALDEA DIAZ",
      "CANTINA BONALDO",
      "EL MALAGUEÑO",
      "EL TROPEZON",
      "RAICES OESTE"
    ],
    "RINCON DE NOGOYA": [
      "LOS CERROS",
      "PUERTO ESQUINA",
      "RINCON DE NOGOYA"
    ],
    "RINCON DEL DOLL": [
      "RINCON DEL DOLL"
    ],
    "RINCON DEL GATO": [
      "RINCON DEL GATO"
    ],
    "ROCAMORA": [
      "COLONIA ALMADA",
      "COLONIA NUEVA MONTEVIDEO",
      "ESTANCIA LA ESTRELLA",
      "ROCAMORA"
    ],
    "ROSARIO DEL TALA": [
      "ROSARIO DEL TALA"
    ],
    "SAN BENITO": [
      "SAN BENITO",
      "SAUCE MEDIO"
    ],
    "SAN CIPRIANO": [
      "COLONIA SAN RAMON",
      "LAS ACHIRAS",
      "SAN CIPRIANO"
    ],
    "SAN ERNESTO": [
      "COLONIA PUNTAS DEL GUALEGUAYCHU",
      "COLONIA SAN ERNESTO"
    ],
    "SAN GUSTAVO": [
      "COLONIA SAN PEDRO",
      "SAN GUSTAVO"
    ],
    "SAN JAIME DE LA FRONTERA": [
      "COLONIA OFICIAL 9",
      "SAN JAIME DE LA FRONTERA"
    ],
    "SAN JOSE": [
      "EL BRILLANTE",
      "EL COLORADO",
      "PERUCHO VERNA",
      "SAN JOSE"
    ],
    "SAN JOSE DE FELICIANO": [
      "ATENCIO",
      "LA TE",
      "SAN JOSE DE FELICIANO"
    ],
    "SAN JUSTO": [
      "RINCON SANTA MARIA",
      "VILLA SAN JUSTO"
    ],
    "SAN MARCIAL": [
      "VILLA SAN MARCIAL"
    ],
    "SAN MIGUEL": [
      "COLONIA LAS PEPAS",
      "COLONIA NUEVA SAN MIGUEL",
      "COLONIA PUENTE DEL GUALEG",
      "COLONIA SANTA ROSA",
      "SAN MIGUEL"
    ],
    "SAN PEDRO": [
      "COLONIA CADEL",
      "SAN PEDRO"
    ],
    "SAN RAMIREZ": [
      "SAN RAMIREZ"
    ],
    "SAN RAMON": [
      "COLONIA EL TROMPO",
      "COLONIA PEÑA",
      "MANDISOVI",
      "SAN RAMON"
    ],
    "SAN ROQUE": [
      "COLONIA AYMAN"
    ],
    "SAN SALVADOR": [
      "COLONIA SAN SALVADOR",
      "SAN SALVADOR"
    ],
    "SAN VICTOR": [
      "ESTACION PALO A PIQUE",
      "SAN VICTOR"
    ],
    "SANTA ANA": [
      "COLONIA ENSANCHE SAUCE",
      "SANTA ANA"
    ],
    "SANTA ANITA": [
      "COLONIA TUYUTI",
      "SANTA ANITA"
    ],
    "SANTA ELENA": [
      "SANTA ELENA"
    ],
    "SANTA LUCIA": [
      "COLONIA SANTA LUCIA"
    ],
    "SANTA LUISA": [
      "COLONIA SANTA LUISA"
    ],
    "SAUCE DE LUNA": [
      "SAUCE DE LUNA"
    ],
    "SAUCE MONTRULL": [
      "SAUCE MONTRULL"
    ],
    "SAUCE PINTO": [
      "SAUCE PINTO"
    ],
    "SAUCE SUR": [
      "SAUCE SUD"
    ],
    "SAUCECITO": [
      "COLONIA EL SAUCESITO"
    ],
    "SEGUI": [
      "CAMPO MASSINE",
      "SEGUI"
    ],
    "SIR LEONARD": [
      "SIR LEONARD"
    ],
    "SOSA": [
      "SOSA"
    ],
    "TABOSSI": [
      "TABOSSI"
    ],
    "TALA": [
      "LOS CEIBOS"
    ],
    "TEZANOS PINTO": [
      "TEZANOS PINTO"
    ],
    "UBAJAY": [
      "ARROYO CONCEPCION",
      "COLONIA SAN ANTONIO",
      "DISTRITO SEXTO",
      "UBAJAY"
    ],
    "URDINARRAIN": [
      "COLONIA LA FLORIDA",
      "URDINARRAIN"
    ],
    "VIALE": [
      "VIALE"
    ],
    "VICTORIA": [
      "ARROYO BARRANCOSO",
      "ARROYO PIAGGIO",
      "BOCA DE LAS PIEDRAS",
      "CHARIGUE",
      "ISLA EL PILLO",
      "LA INVERNADA",
      "LAS CUATRO BOCAS",
      "PRIMERA SECCION DE ISLAS",
      "TERCERA SECCION DE ISLAS",
      "VICTORIA"
    ],
    "VILLA CLARA": [
      "VILLA CLARA"
    ],
    "VILLA DEL ROSARIO": [
      "COLONIA SANTA ELOISA",
      "VILLA DEL ROSARIO"
    ],
    "VILLA DOMINGUEZ": [
      "VILLA DOMINGUEZ"
    ],
    "VILLA ELISA": [
      "COLONIA EL CARMEN",
      "COLONIA LA MATILDE",
      "COLONIA VAZQUEZ",
      "VILLA ELISA"
    ],
    "VILLA FONTANA": [
      "VILLA FONTANA"
    ],
    "VILLA GOBERNADOR ETCHEVEHERE": [
      "VILLA GOBERNADOR LUIS F. ETCHEVEHERE"
    ],
    "VILLA LIBERTADOR SAN MARTIN": [
      "COSTA GRANDE",
      "ESTACION PUIGGARI",
      "VILLA LIBERTADOR SAN MARTIN"
    ],
    "VILLA MANTERO": [
      "VILLA MANTERO"
    ],
    "VILLA PARANACITO": [
      "ARROYO BRAZO CHICO",
      "ARROYO GRANDE",
      "ARROYO MERLO",
      "ARROYO NEGRO",
      "ARROYO SANTOS GRANDE",
      "BRAZO LARGO",
      "SAGASTUME",
      "VILLA PARANACITO"
    ],
    "VILLA URQUIZA": [
      "LA BALSA",
      "LOS AROMOS",
      "VILLA URQUIZA"
    ],
    "VILLAGUAY": [
      "VILLAGUAY"
    ],
    "WALTER MOSS": [
      "COLONIA LA ARMONIA",
      "COLONIA WALTER MOSS"
    ],
    "XX DE SETIEMBRE": [
      "XX DE SETIEMBRE"
    ],
    "YACARE": [
      "ARROYO HONDO"
    ],
    "YESO OESTE": [
      "CHACABUCO",
      "DISTRITO YESO",
      "EL CHIMANGO",
      "VILLA ALVAREZ"
    ],
    "ÑANCAY": [
      "ÑANCAY"
    ]
  },
  "FORMOSA": {
    "AREA SIN GOBIERNO": [
      "9 DE JULIO",
      "ACOSTA",
      "AGENTE LEGUIZAMON",
      "AGUA DULCE",
      "AGUA VERDE",
      "AHI VEREMOS",
      "AIBAL EL SILENCIO",
      "ALGARROBO",
      "ALTO ALEGRE",
      "APAYEREY",
      "AURORA",
      "BAJO HONDO",
      "BAJO VERDE",
      "BANCO LA EMILIA",
      "BARRIO EL FAVORITO",
      "BELLA VISTA",
      "BOLSA DEL PALOMO",
      "BOQUERON",
      "BUEY MUERTO",
      "CACIQUE COQUERO",
      "CAMPO ALEGRE",
      "CAMPO AZCURRA",
      "CAMPO AZUL",
      "CAMPO BANDERA",
      "CAMPO DE AVIACION",
      "CAMPO DEL ACHA",
      "CAMPO DEL CIELO",
      "CAMPO DEL MEDIO",
      "CAMPO GRANDE",
      "CAMPO HARDY",
      "CAMPO LA CRUZ",
      "CAMPO SAN RAFAEL",
      "CAMPO TRES POZOS",
      "CANDELARIA",
      "CANDIA",
      "CASCO CUE",
      "CASUALIDAD",
      "CAÑADA RICA II",
      "CEIBO TRECE",
      "CENTRO FORESTAL PIRANE",
      "CHICO DOWAGAN",
      "COGORNO",
      "COLONIA 14 DE MAYO",
      "COLONIA 15",
      "COLONIA 20 DE JUNIO",
      "COLONIA 25 DE MAYO",
      "COLONIA 5 DE OCTUBRE",
      "COLONIA ABORIGEN",
      "COLONIA ALTO ALEGRE",
      "COLONIA BOUVIER",
      "COLONIA CANO",
      "COLONIA CEFERINO NAMUNCURA",
      "COLONIA DALMACIA",
      "COLONIA DANTE SANDRELLI",
      "COLONIA EL ALBA",
      "COLONIA EL CATORCE",
      "COLONIA EL CEIBO",
      "COLONIA EL CHAJA",
      "COLONIA EL COMIENZO",
      "COLONIA EL DESAGUADERO",
      "COLONIA EL DORADO",
      "COLONIA EL ENSANCHE",
      "COLONIA EL NARANJITO",
      "COLONIA EL OLVIDO",
      "COLONIA EL PALMAR",
      "COLONIA EL PAVAO",
      "COLONIA EL PROGRESO",
      "COLONIA EL RINCON",
      "COLONIA EL SILENCIO",
      "COLONIA EL ZAPALLITO",
      "COLONIA ENSANCHE NORTE",
      "COLONIA ESPERANZA",
      "COLONIA ISLA SOLA",
      "COLONIA ITATI",
      "COLONIA ITUZAINGO",
      "COLONIA JUANITA",
      "COLONIA LA DISCIPLINA",
      "COLONIA LA PREFERIDA",
      "COLONIA LA PRIMAVERA",
      "COLONIA LA UNION",
      "COLONIA LAGUNA GOBERNADOR",
      "COLONIA LAKA-WICHI",
      "COLONIA LAS CHOYAS",
      "COLONIA LAS LOMITAS",
      "COLONIA LOMA SENES",
      "COLONIA LOS SANTAFESINOS",
      "COLONIA NAPENAY",
      "COLONIA PAMPA VILLANUEVA",
      "COLONIA PRESIDENTE URIBURU",
      "COLONIA PRESIDENTE YRIGOYEN",
      "COLONIA RECONQUISTA",
      "COLONIA RIGONATO",
      "COLONIA RODA",
      "COLONIA SAN ANTONIO",
      "COLONIA SAN ISIDRO",
      "COLONIA SAN JOSE",
      "COLONIA SAN JUAN",
      "COLONIA SAN PABLO",
      "COLONIA SAN PEDRO",
      "COLONIA SAN ROQUE",
      "COLONIA SANTA CRUZ",
      "COLONIA SANTA ROSA",
      "COLONIA SARMIENTO",
      "COLONIA SIETE QUEBRACHOS",
      "COLONIA SUDAMERICANA",
      "COLONIA TAJEREY",
      "COLONIA TATANE",
      "COLONIA TRES MARIAS",
      "COLONIA UNION ESCUELA",
      "COLONIA WEITZEL",
      "COLONIA YATAY",
      "COMUNIDAD 7 DE JUNIO",
      "COMUNIDAD ABORIGEN WICHI",
      "COMUNIDAD ABORIGEN WICHI FWINAFWAS",
      "COMUNIDAD LOTE 21",
      "COMUNIDAD WICHI BARRIO EL COLORADO",
      "COMUNIDAD WICHI OBLITAJ",
      "COPO BLANCO",
      "CORRALITO",
      "COSTA ALEGRE",
      "COSTA RIACHO ALAZAN",
      "CRUCERO GENERAL BELGRANO",
      "EL AGUARA",
      "EL AIBALITO",
      "EL ALAMBRADO",
      "EL ALAZAN",
      "EL ALGARROBAL",
      "EL ALGARROBO",
      "EL ANGELITO",
      "EL AZOTADO",
      "EL BAJO",
      "EL BELLACO",
      "EL BORDO SANTO",
      "EL BOSQUECILLO",
      "EL BRAGADO",
      "EL BREAL",
      "EL CABURE",
      "EL CACUY",
      "EL CAJON",
      "EL CASTOR",
      "EL CAVADO",
      "EL CEIBAL",
      "EL CERRITO",
      "EL CHAÑARAL",
      "EL CHIVIL",
      "EL CHURCAL",
      "EL CHURCALITO",
      "EL COATI",
      "EL COGOIK",
      "EL COLETO",
      "EL COLORADO",
      "EL CORRALITO",
      "EL CRUCE",
      "EL CUCHILLO",
      "EL DESCANSO",
      "EL DESEMBOQUE",
      "EL DESPUNTE",
      "EL DIVISADERO",
      "EL ESCONDIDO",
      "EL ESTANQUE",
      "EL GALLEGO",
      "EL GATO",
      "EL IBAGAY",
      "EL INDIO",
      "EL LECHERON",
      "EL LEON",
      "EL LINDERO",
      "EL MARTILLO",
      "EL MBIGUA",
      "EL MILAGRO",
      "EL MIRADOR",
      "EL MISTOLAR",
      "EL MOLINO",
      "EL NARANJO",
      "EL OCULTO",
      "EL OMBU",
      "EL PALMAR",
      "EL PALMARCITO",
      "EL PALO SANTO",
      "EL PARAGUAYO MUERTO",
      "EL PARAISO",
      "EL PELIGRO",
      "EL PERDIDO",
      "EL PICASO",
      "EL PIQUETE",
      "EL POI",
      "EL POMBERO",
      "EL PORVENIR",
      "EL POTRERITO",
      "EL QUEBRACHO",
      "EL QUEBRANTO",
      "EL QUEMADO",
      "EL QUIMIL",
      "EL RECODO",
      "EL RELEVO",
      "EL REMANSO",
      "EL RESGUARDO",
      "EL RETIRO",
      "EL ROSADO",
      "EL ROSARIO",
      "EL ROSILLO",
      "EL SALADILLO",
      "EL SALADO",
      "EL SAUCE",
      "EL SILENCIO",
      "EL SIMBOLAR",
      "EL SOL",
      "EL SOLITARIO",
      "EL TABIQUE",
      "EL TARTAGAL",
      "EL TIMBO",
      "EL TORDILLO",
      "EL TOTORAL",
      "EL TRASLADO",
      "EL TREBOL",
      "EL TRIANGULO",
      "EL TRONQUITO",
      "EL TUCUMANCITO",
      "EL VIOLIN",
      "EL YACARE",
      "ESPERANZA",
      "ESTERITO",
      "FELDMAN",
      "FLOR DE TUNA",
      "FORTIN PILCOMAYO",
      "FORTIN PILCOMAYO NUEVO",
      "FRANCESA CUE",
      "FRANCHI",
      "GENERAL URQUIZA",
      "GUADALCAZAR",
      "GUAYACANTY",
      "GUAYCOLEC",
      "HERTELENDY",
      "ISLA 25 DE MAYO",
      "ISLA APANDO",
      "ISLA AZUL",
      "ISLA BANCO ORTELLADO",
      "ISLA CHICA",
      "ISLA DE LUNA",
      "ISLA GARCIA",
      "ISLA LEONA",
      "ISLA PUEN",
      "ISLA TOLDO",
      "ISLA VERDE",
      "ISLA YOBAI GUAZU",
      "ISLETA",
      "JOSE MARIA PAZ",
      "JULIO CUE",
      "KILOMETRO 100",
      "KILOMETRO 117",
      "KILOMETRO 142",
      "KILOMETRO 15",
      "KILOMETRO 210",
      "KILOMETRO 224",
      "KILOMETRO 503",
      "LA AURORA",
      "LA BREA",
      "LA CAROLINA",
      "LA CIERVA",
      "LA DORA",
      "LA ELIDA",
      "LA ENSENADA",
      "LA ENTRADA",
      "LA ESPERANZA",
      "LA ESQUINA",
      "LA ESTRELLA",
      "LA EXTRANJERA",
      "LA FELICIDAD",
      "LA FLORENCIA",
      "LA FLORESTA",
      "LA HORQUETA",
      "LA IGUANA",
      "LA INVERNADA",
      "LA JUNTA",
      "LA LAGUNA",
      "LA LIBERTAD",
      "LA LINEA",
      "LA LOMA",
      "LA LOMITA",
      "LA LUISA",
      "LA MADRUGADA",
      "LA MEDIA LUNA",
      "LA MOCHA",
      "LA PALIZADA",
      "LA PALMA",
      "LA PALMITA",
      "LA PAMPA",
      "LA PAZ",
      "LA PERDIZ",
      "LA PICADITA",
      "LA PLAYA",
      "LA PORFIA",
      "LA PRIMAVERA",
      "LA PROVIDENCIA",
      "LA PUERTA",
      "LA QUERENCIA",
      "LA RAFAELA",
      "LA REPRESA",
      "LA RINCONADA",
      "LA SARITA",
      "LA SIRENA",
      "LA SOLEDAD",
      "LA SORPRESA",
      "LA TIGRA",
      "LA TOMASA",
      "LA TUSCA",
      "LA UNION",
      "LA VICTORIA",
      "LA ZANJA",
      "LAGO VERDE",
      "LAGUNA ACEVAL",
      "LAGUNA TORO",
      "LAGUNA TRES PACES",
      "LAGUNA YACARE",
      "LAGUNITA",
      "LAMADRID",
      "LAQTASATANYIE (KM14)",
      "LAS AVISPAS",
      "LAS BANDERITAS",
      "LAS BOLIVIANAS",
      "LAS CALAVERAS",
      "LAS CAÑITAS",
      "LAS DELICIAS",
      "LAS FLORES",
      "LAS HORQUETAS",
      "LAS MARAVILLAS",
      "LAS MERCEDES",
      "LAS MOCHAS",
      "LAS PALMAS",
      "LAS PALMITAS",
      "LAS VERTIENTES",
      "LAS VIDALITAS",
      "LEON",
      "LOMA CLAVEL",
      "LOMA DEL QUEBRANTO",
      "LOMA HERMOSA",
      "LOMA SAN PABLO",
      "LOMA SENES",
      "LOMA TUYUTU",
      "LOMA ZAPATU",
      "LORO CUE",
      "LOS CIENEGUITOS",
      "LOS CLAVELES",
      "LOS COLORADOS",
      "LOS GALPONES",
      "LOS INMIGRANTES",
      "LOS JUBILADOS",
      "LOS LAURELES",
      "LOS POCITOS",
      "LOS SUSPIROS",
      "LOS TRES REYES",
      "LOS YUCHANES",
      "LOTE 1",
      "LOTE 108 LADRILLERIA",
      "LOTE 11",
      "LOTE 17-LEGUA A",
      "LOTE 20 RURAL",
      "LOTE 219",
      "LOTE 8",
      "LOTE 9",
      "LUCERO CUE",
      "MAESTRA BLANCA GOMEZ",
      "MAGALLANES",
      "MAGLIETTI",
      "MANSILLA",
      "MARCA M",
      "MARIA CRISTINA",
      "MARIA LUISA",
      "MARTIN FIERRO",
      "MATIAS GULACSI",
      "MEDIA LUNA",
      "MERCEDES CUE",
      "MIRANDA",
      "MISION SAN ANDRES",
      "MONTE ALEGRE",
      "MONTE LINDO",
      "MONTE QUEMADO",
      "MONTE RICO",
      "MURUA",
      "NUEVA MORADA",
      "OVEJERO",
      "PALMA SOLA",
      "PALMAR LARGO",
      "PALO MARCADO",
      "PALO SECO",
      "PALOS BLANCOS",
      "PASO ANGELITO",
      "PASO DE LOS TOBAS",
      "PASO NAITE",
      "PASO POLENTA",
      "PESCADO NEGRO",
      "POLVORIN",
      "PONCHO QUEMADO",
      "POSTA DEL SALADO",
      "POTRERO DE LOS CABALLOS",
      "POTRERO NORTE",
      "POTRERO OCULTO",
      "POZO CABALLO",
      "POZO CERCADO",
      "POZO CHARATA",
      "POZO DE LA YEGUA",
      "POZO DE LOS CHANCHOS",
      "POZO DE LOS MILICOS",
      "POZO DE LOS PATOS",
      "POZO DE MOLINA",
      "POZO DEL CIERVO",
      "POZO DEL OSO",
      "POZO EL ESCONDIDO",
      "POZO EL YACARE",
      "POZO HONDO",
      "POZO LA CHIVA",
      "POZO LARGO",
      "POZO RAMON",
      "POZO REDONDO",
      "POZO SARGENTO",
      "POZO VERDE",
      "PRALINE",
      "PRESIDENTE AVELLANEDA",
      "PRESIDENTE YRIGOYEN",
      "PRIMAVERA",
      "PRINCICH",
      "PUENTE SAN HILARIO",
      "PUERTA MISION",
      "PUERTO CABO IRIGOYEN",
      "PUERTO LAVALLE",
      "PUESTO RAMONA",
      "PUNTA DE AGUA",
      "PUNTA GUIA",
      "PUNTA PORA",
      "QUEBRACHO COTO",
      "RACEDO ESCOBAR",
      "RANERO CUE",
      "RIACHO",
      "RIACHO DE ORO",
      "RIACHO LINDO",
      "RINCON FLORIDO",
      "RINCON GRANDE",
      "RIO MUERTO",
      "RIO SECO",
      "RODEO TAPITI",
      "ROJAS",
      "SALVACION",
      "SAN ALBERTO",
      "SAN ANTONIO",
      "SAN BENITO",
      "SAN BLAS",
      "SAN CAMILO",
      "SAN CARLOS",
      "SAN CAYETANO",
      "SAN CRISTOBAL",
      "SAN FELIPE",
      "SAN FRANCISCO",
      "SAN ISIDRO",
      "SAN JORGE",
      "SAN JOSE",
      "SAN JUAN",
      "SAN JULIAN",
      "SAN LORENZO",
      "SAN LUIS",
      "SAN MARTIN",
      "SAN MIGUEL",
      "SAN NICOLAS",
      "SAN PABLO",
      "SAN PEDRO",
      "SAN RAFAEL",
      "SAN RAMON",
      "SAN SIMON",
      "SANTA ANA",
      "SANTA CATALINA",
      "SANTA ELENA",
      "SANTA ISABEL",
      "SANTA MARIA",
      "SANTA RITA",
      "SANTA ROSA",
      "SANTA TERESA",
      "SANTO DOMINGO",
      "SOL DE MAYO",
      "SOLDADO EDMUNDO SOSA",
      "SOLEDAD",
      "SOMBRERO NEGRO",
      "SUMAYEN",
      "TENIENTE BROWN",
      "TENIENTE GENERAL ROSENDO M. FRAGA",
      "TIERRA BLANCA",
      "TIMBO",
      "TOLDO CUE",
      "TRANQUERITA",
      "TRES ESQUINAS",
      "TRES MOJONES",
      "TRES PALMAS",
      "TRES PALMITAS",
      "TRES POZOS",
      "TRES YUCHAN",
      "URBANA VIEJA",
      "VACA MUERTA",
      "VACA PERDIDA",
      "VIDAL",
      "VILLA DEVOTO",
      "VILLA GENERAL URQUIZA",
      "VILLA HERMOSA",
      "VILLA MARIA",
      "VILLA MARIN",
      "VILLA REAL",
      "VILLA RURAL",
      "VIRASOL",
      "VISTA ALEGRE",
      "YAGUARETE",
      "ZANIN",
      "ZORRILLA CUE"
    ],
    "BANCO PAYAGUA": [
      "BANCO PAYAGUA"
    ],
    "BARTOLOME DE LAS CASAS": [
      "BARTOLOME DE LAS CASAS",
      "COMUNIDAD ABORIGEN BARTOLOME DE LAS CASAS"
    ],
    "BUENA VISTA": [
      "BUENA VISTA"
    ],
    "CLORINDA": [
      "CLORINDA",
      "PUERTO PILCOMAYO"
    ],
    "COLONIA PASTORIL": [
      "COLONIA PASTORIL"
    ],
    "COLONIA SARMIENTO": [
      "COLONIA SARMIENTO",
      "LAS LOLAS"
    ],
    "COMANDANTE FONTANA": [
      "COMANDANTE FONTANA",
      "EL MATADERO"
    ],
    "EL COLORADO": [
      "EL COLORADO"
    ],
    "EL ESPINILLO": [
      "EL ESPINILLO"
    ],
    "EL POTRILLO": [
      "EL POTRILLO",
      "PUERTO IRIGOYEN"
    ],
    "EL RECREO": [
      "EL RECREO"
    ],
    "ESTANISLAO DEL CAMPO": [
      "ESTACION BOUCHARD",
      "ESTANISLAO DEL CAMPO"
    ],
    "FORMOSA": [
      "COLONIA FORMOSA",
      "FORMOSA",
      "ISLA OCA",
      "LA COLONIA",
      "SAN ANTONIO"
    ],
    "FORTIN CABO 1°  LUGONES": [
      "FORTIN CABO 1Ñ LUGONES"
    ],
    "FORTIN SARGENTO 1° LEYES": [
      "FORTIN SARGENTO 1Ñ LEYES"
    ],
    "GENERAL BELGRANO": [
      "VILLA GENERAL MANUEL BELGRANO"
    ],
    "GENERAL LUCIO V MANSILLA": [
      "GENERAL LUCIO V MANSILLA"
    ],
    "GENERAL MOSCONI": [
      "GENERAL MOSCONI"
    ],
    "GRAN GUARDIA": [
      "GRAN GUARDIA"
    ],
    "HERRADURA": [
      "HERRADURA"
    ],
    "IBARRETA": [
      "IBARRETA"
    ],
    "INGENIERO GUILLERMO NICASIO JUAREZ": [
      "INGENIERO GUILLERMO N. JUAREZ"
    ],
    "JUAN G BAZAN": [
      "JUAN G. BAZAN"
    ],
    "LAGUNA BLANCA": [
      "LAGUNA BLANCA"
    ],
    "LAGUNA GALLO": [
      "LAGUNA GALLO"
    ],
    "LAGUNA NAICK NECK": [
      "LAGUNA NAICK-NECK"
    ],
    "LAGUNA YEMA": [
      "LAGUNA YEMA"
    ],
    "LAS LOMITAS": [
      "COLONIA ABORIGEN LA BOMBA",
      "LA PANTALLA",
      "LAS LOMITAS",
      "LOTE 27"
    ],
    "LOS CHIRIGUANOS": [
      "LOS CHIRIGUANOS"
    ],
    "MARIANO BOEDO": [
      "MARIANO BOEDO"
    ],
    "MAYOR VICENTE E": [
      "COLONIA CAMPO VILLAFAÑE"
    ],
    "MISION SAN FRANCISCO DE LAISHI": [
      "SAN FRANCISCO DE LAISHI"
    ],
    "MISION TACAAGLE": [
      "MISION TACAAGLE"
    ],
    "MOJON DE FIERRO": [
      "MOJON DE FIERRO"
    ],
    "PALMA SOLA": [
      "PALMA SOLA"
    ],
    "PALO SANTO": [
      "PALO SANTO"
    ],
    "PIRANE": [
      "PIRANE"
    ],
    "PORTON NEGRO": [
      "PORTON NEGRO"
    ],
    "POSTA CAMBIO ZALAZAR": [
      "POSTA CAMBIO ZALAZAR"
    ],
    "POZO DE MAZA": [
      "POZO DE MAZA"
    ],
    "POZO DEL MORTERO": [
      "POZO DEL MORTERO"
    ],
    "POZO DEL TIGRE": [
      "POZO DEL TIGRE"
    ],
    "RIACHO HE-HE": [
      "RIACHO HE-HE"
    ],
    "RIACHO NEGRO": [
      "PUEYRREDON",
      "RIACHO NEGRO"
    ],
    "SAN HILARIO": [
      "SAN HILARIO"
    ],
    "SAN MARTIN DOS": [
      "SAN MARTIN",
      "SAN MARTIN II"
    ],
    "SAN MARTIN I": [
      "SAN MARTIN I"
    ],
    "SIETE PALMAS": [
      "SIETE PALMAS"
    ],
    "SUBTENIENTE PERIN": [
      "SUBTENIENTE PERIN"
    ],
    "TATANE": [
      "TATANE"
    ],
    "TRES LAGUNAS": [
      "TRES LAGUNAS"
    ],
    "VILLA DEL CARMEN": [
      "VILLA DEL CARMEN"
    ],
    "VILLA DOS TRECE": [
      "VILLA KILOMETRO 213"
    ],
    "VILLA ESCOLAR": [
      "VILLA ESCOLAR"
    ],
    "VILLA GENERAL GUEMES": [
      "VILLA GENERAL GUEMES"
    ]
  },
  "JUJUY": {
    "ABRA PAMPA": [
      "ABRA PAMPA",
      "AGUA CALIENTE DE LA PUNA",
      "AGUA CHICA",
      "CASABINDO",
      "COCHINOCA",
      "DONCELLAS",
      "ENCRUCIJADA",
      "MIRAFLORES DE LA CANDELARIA",
      "OJO DE AGUA",
      "ORATORIO",
      "PASAJES",
      "QUETA",
      "QUINILICAN",
      "RACHAITE",
      "RUMI CRUZ",
      "SAN JOSE",
      "SANTA ROSA",
      "SAUZALITO",
      "SAYATE",
      "TABLADITAS",
      "TAMBILLOS"
    ],
    "ABRALAITE": [
      "ABRALAITE",
      "AGUA DE CASTILLA",
      "COCHAGOSTA",
      "QUEBRALEÑA",
      "QUERA",
      "RIO GRANDE"
    ],
    "AGUAS CALIENTES": [
      "AGUAS CALIENTES",
      "FLEMING",
      "LAS PICHANAS",
      "PILA PARDO",
      "SAN ISIDRO"
    ],
    "ARRAYANAL": [
      "ARRAYANAL",
      "EL QUEMADO",
      "LA MANGA"
    ],
    "BARRANCAS": [
      "ABDON CASTRO TOLAY",
      "RINCONADILLAS",
      "SALADO",
      "SAN FRANCISCO DE ALFARCITO",
      "SANTA ANA",
      "SANTA ANA DE LA PUNA",
      "SANTUARIO DE TRES POZOS",
      "TOLARITO",
      "TRANCAS",
      "TUSAQUILLAS"
    ],
    "BARRIOS": [
      "BARRIOS",
      "CERRO COLORADO",
      "ESQUINA GRANDE"
    ],
    "CAIMANCITO": [
      "CAIMANCITO",
      "URUNDEL"
    ],
    "CALILEGUA": [
      "BERMEJITO",
      "CALILEGUA",
      "LIBERTAD"
    ],
    "CANGREJILLOS": [
      "CANGREJILLOS",
      "CANGREJOS"
    ],
    "CASPALA": [
      "CASPALA"
    ],
    "CATUA": [
      "CATUA",
      "MEDANITOS"
    ],
    "CIENEGUILLAS": [
      "CALAHOYO",
      "CASIRA",
      "CIENEGUILLAS",
      "PUESTO CHICO",
      "PUESTO GRANDE",
      "RODEO CHICO",
      "YOSCABA"
    ],
    "CORANZULI": [
      "CIENAGA GRANDE",
      "CORANZULI",
      "EL TORO",
      "JAMA",
      "LOMA BLANCA",
      "MINA PROVIDENCIA",
      "OLAROZ CHICO",
      "OLAROZ GRANDE",
      "POTRERO",
      "SALAR DE JAMA",
      "SAN JUAN DE QUILLAQUES"
    ],
    "CUSI CUSI": [
      "CIENEGA",
      "CUSI CUSI",
      "LAGUNILLAS DE FARALLON",
      "MISARRUMI",
      "OJO DE AGUA",
      "PAICONE",
      "SAN JUAN DE ORO",
      "SAN JUAN DE OROS",
      "SAN JUAN Y MISA RUMI"
    ],
    "EL AGUILAR": [
      "CASA GRANDE",
      "CASA PUCA",
      "EL AGUILAR",
      "EL PORTILLO",
      "LA POMA",
      "RIO GRANDE",
      "VIZCARRA"
    ],
    "EL CARMEN": [
      "AVALOS",
      "DIQUE LA CIENAGA",
      "EL CARMEN",
      "EL SUNCHAL",
      "SAN ANTONIO"
    ],
    "EL CONDOR": [
      "CORRAL BLANCO",
      "EL CONDOR",
      "ESCOBAR",
      "LLULLUCHAYOC"
    ],
    "EL FUERTE": [
      "EL FUERTE"
    ],
    "EL PIQUETE": [
      "AGUA BLANCA",
      "EL PALMAR",
      "EL PIQUETE",
      "LA QUINTA",
      "LECHERONAL",
      "RETIRO",
      "SALADILLO"
    ],
    "EL TALAR": [
      "EL TALAR"
    ],
    "FRAILE PINTADO": [
      "CHALICAN",
      "FRAILE PINTADO",
      "LA BAJADA",
      "MAIZ NEGRO",
      "SAN BORJAS",
      "TORTUGAS",
      "YERBA BUENA"
    ],
    "HIPOLITO YRIGOYEN": [
      "AZUL PAMPA",
      "CASILLAS",
      "CONDOR",
      "HIPOLITO YRIGOYEN",
      "LA CUEVA",
      "MIYUYOC",
      "NEGRA MUERTA",
      "PUEBLO VIEJO"
    ],
    "HUACALERA": [
      "ALONSO",
      "COLONIA SAN JOSE",
      "HUACALERA",
      "VOLCAN DE YACORAITE",
      "YACORAITE"
    ],
    "HUMAHUACA": [
      "APARZO",
      "CALETE",
      "CAPLA",
      "CHORCAN",
      "CHORRILLOS",
      "CHUCALEZNA",
      "CIANZO",
      "COCTACA",
      "CORAYA",
      "HORNADITAS",
      "HUMAHUACA",
      "OCUMAZO",
      "OVARA",
      "PALCA DE APARZO",
      "PALCA DE VARAS",
      "PUCARA",
      "QUERAGUA",
      "RODERO",
      "RONQUE",
      "SAN ROQUE",
      "UQUIA",
      "VALIAZO",
      "VARAS"
    ],
    "LA ESPERANZA": [
      "EL PUESTO",
      "LA ESPERANZA",
      "MIRAFLORES",
      "PARAPETI",
      "SAN ANTONIO"
    ],
    "LA MENDIETA": [
      "LA MENDIETA",
      "SAUZAL"
    ],
    "LA QUIACA": [
      "LA CIENAGA",
      "LA QUIACA",
      "PUEBLO VIEJO",
      "SANSANA",
      "SANSANA NORTE",
      "TAFNA"
    ],
    "LIBERTADOR GENERAL SAN MARTIN": [
      "AGUA BLANCA",
      "AGUA NEGRA",
      "BELLA VISTA",
      "LIBERTADOR GENERAL SAN MARTIN",
      "MANANTIAL",
      "PALMITAS",
      "PAULINA",
      "PUEBLO LEDESMA",
      "RIO BLANCO"
    ],
    "MAIMARA": [
      "BELLA VISTA",
      "HORNILLOS",
      "MAIMARA",
      "TASTAS"
    ],
    "MINA PIRQUITAS": [
      "COYAGUAIMA",
      "LIVIARA",
      "LOMA BLANCA",
      "LOPIARA",
      "MINA PIRQUITAS",
      "NUEVO PIRQUITAS",
      "OROSMAYO",
      "RAMALLO",
      "SALITRE",
      "SANTA ANA"
    ],
    "MONTERRICO": [
      "ALTO VERDE",
      "BARRIO EL MILAGRO",
      "LOS LAPACHOS",
      "MONTERRICO",
      "SAN VICENTE"
    ],
    "PALMA SOLA": [
      "ARROYO DEL MEDIO",
      "ISLA CHICA",
      "LAS DELICIAS",
      "OJO DE AGUA",
      "PALMA SOLA",
      "REAL DE LOS TOROS",
      "SAN ANTONIO",
      "SAN RAFAEL",
      "SANTA CORNELIA",
      "VILLA MONTES"
    ],
    "PALPALA": [
      "CARAHUNCO",
      "CENTRO FORESTAL",
      "EL ALGARROBAL",
      "EL BRETE",
      "EL CUCHO",
      "EL PONGO",
      "EL REMATE",
      "LAS ESCALERAS",
      "LOS BLANCOS",
      "MINA 9 DE OCTUBRE",
      "PALPALA",
      "RIO BLANCO"
    ],
    "PAMPA BLANCA": [
      "PAMPA BLANCA",
      "PAMPA VIEJA"
    ],
    "PAMPICHUELA": [
      "PAMPICHUELA",
      "SAN LUCAS",
      "SANTA BARBARA"
    ],
    "PERICO": [
      "BARRIO LA UNION",
      "BORDO LA ISLA",
      "CORONEL ARIAS",
      "EL CADILLAL",
      "EL CHAMICAL",
      "LA POSTA",
      "LAS PAMPITAS",
      "PERICO",
      "SAN JUANCITO",
      "SEVERINO"
    ],
    "PUESTO DEL MARQUEZ": [
      "ARBOLITO NUEVO",
      "LA REDONDA",
      "MACHO CRUZ",
      "POTRERO",
      "PUEBLO VIEJO",
      "PUESTO DEL MARQUEZ"
    ],
    "PUESTO VIEJO": [
      "MANANTIALES",
      "PUESTO VIEJO"
    ],
    "PUMAHUASI": [
      "ABRA COLORADA",
      "CERRILLOS",
      "CHOCOITE",
      "LA AGUADA",
      "LA INTERMEDIA",
      "MINA BELGICA",
      "PASAJES",
      "PIEDRA NEGRA",
      "PULPERA",
      "PUMAHUASI",
      "PUNTA DEL AGUA",
      "RODEO",
      "SOL DE MAYO"
    ],
    "PURMAMARCA": [
      "AGUADITA",
      "CIENAGA",
      "CIENAGA GRANDE",
      "COLORADOS",
      "EL MORENO",
      "ESTANCIA GRANDE",
      "MOLLE PUNCO",
      "PIEDRAS BLANCAS",
      "POZO BRAVO",
      "POZO COLORADO",
      "PUERTA DE COLORADOS",
      "PUERTA DE LIPAN",
      "PURMAMARCA",
      "SALADILLO",
      "SAN JUAN DE POZO COLORA",
      "SANTA ROSA",
      "TRES MORROS",
      "TUNALITO"
    ],
    "RINCONADA": [
      "CARAHUASI",
      "CASA COLORADA",
      "GUAYATAYOC",
      "LAGUNA LARGA",
      "MINA PAN DE AZUCAR",
      "NAZARENO",
      "POZUELOS",
      "RAMADAS",
      "RINCONADA",
      "SANTO DOMINGO"
    ],
    "RODEITO": [
      "EL MOLLAR",
      "LAVAYEN",
      "PUERTA VERDE",
      "RODEITO",
      "SAN LUCAS",
      "VILLA CAROLINA",
      "VILLA LAS ROSAS"
    ],
    "ROSARIO DE RIO GRANDE": [
      "BELLA VISTA",
      "DON EMILIO",
      "PALOS BLANCOS",
      "PIEDRITAS",
      "ROSARIO DE RIO GRANDE"
    ],
    "SAN ANTONIO": [
      "CERRO NEGRO",
      "EL CEIBAL",
      "LA TOMA",
      "LOS ALISOS",
      "LOTEO NAVEA",
      "NUESTRA SEÑORA DEL ROSARIO",
      "PUEBLO VIEJO",
      "RIO BLANCO",
      "SAN ANTONIO"
    ],
    "SAN FRANCISCO": [
      "ALTO CALILEGUA",
      "SAN FRANCISCO"
    ],
    "SAN PEDRO DE JUJUY": [
      "ARROYO COLORADO",
      "ARROYO DEL MEDIO",
      "EL ACHERAL",
      "PALO HACHADO",
      "SAN JUAN DE DIOS",
      "SAN PEDRO",
      "TUNALITO"
    ],
    "SAN SALVADOR DE JUJUY": [
      "GUERRERO",
      "JUAN GALAN",
      "LA ALMONA",
      "REYES",
      "SAN JOSE DE CHIJRA",
      "SAN SALVADOR DE JUJUY",
      "TERMAS DE REYES",
      "TILQUIZA"
    ],
    "SANTA ANA": [
      "SANTA ANA",
      "TORO MUERTO",
      "VALLE COLORADO"
    ],
    "SANTA CATALINA": [
      "EL ANGOSTO",
      "EL FILO",
      "HORNILLOS",
      "LA CIENEGA",
      "LA CRUZ",
      "LA PALCA",
      "MERCO",
      "MINA EUREKA",
      "ORATORIO",
      "PIZCUNO",
      "PUEBLO VIEJO",
      "SAN FRANCISCO",
      "SAN LEON",
      "SANTA CATALINA",
      "TIMON CRUZ",
      "VILLA MARIA",
      "VIZCACHERAS"
    ],
    "SANTA CLARA": [
      "PUENTE LAVAYEN",
      "SANTA CLARA",
      "SAUCE GUACHO"
    ],
    "SUSQUES": [
      "EL PORVENIR",
      "HUANCAR",
      "MINA PROVIDENCIA",
      "OLACAPATO",
      "PASTOS CHICOS",
      "PUESTO SEY",
      "SIJES",
      "SUSQUES"
    ],
    "TILCARA": [
      "ABRA MAYO",
      "ALFARCITO",
      "DURAZNOS",
      "EL PERCHEL",
      "HUICHAIRA",
      "JUELLA",
      "LA BANDA",
      "LOMA LARGA",
      "MOLULO",
      "PUNTA CORRAL",
      "SAN ANTONIO",
      "TILCARA",
      "YALA DE MONTE CARMELO",
      "YAQUISPAMPA"
    ],
    "TRES CRUCES": [
      "TRES CRUCES"
    ],
    "TUMBAYA": [
      "AGUA BENDITA",
      "CARCEL",
      "COIRURO",
      "PUNTA CORRAL",
      "TUMBAYA",
      "TUMBAYA GRANDE"
    ],
    "VALLE GRANDE": [
      "JURANCO",
      "TIPAL",
      "VALLE GRANDE"
    ],
    "VINALITO": [
      "AGUA SALADA",
      "BELLA VISTA",
      "LA LUCRECIA",
      "SANTA RITA",
      "VINALITO"
    ],
    "VOLCAN": [
      "BARCENA",
      "CHILCAYOC",
      "SAN BERNARDO",
      "VOLCAN"
    ],
    "YALA": [
      "DESPENSA",
      "DURAZNAL",
      "JAIRE",
      "LAS CAPILLAS",
      "LEON",
      "LOS NOGALES",
      "LOZANO",
      "OCLOYAS",
      "OVEJERIA",
      "PAYO",
      "SAN PABLO DE REYES",
      "TESORERO",
      "TIRAXI",
      "TIRAXI GRANDE",
      "YALA",
      "YERBA BUENA"
    ],
    "YAVI": [
      "CASTI",
      "CHALCAMAYOC",
      "CHOLACOR",
      "LARCAS",
      "OVEJERIA",
      "QUIRQUINCHOS",
      "SALADILLO",
      "SAN JOSE",
      "YAVI CHICO"
    ],
    "YUTO": [
      "BANANAL",
      "YUTO"
    ]
  },
  "LA PAMPA": {
    "ABRAMO": [
      "ABRAMO",
      "HUCAL"
    ],
    "ADOLFO VAN PRAET": [
      "ADOLFO VAN PRAET"
    ],
    "AGUSTONI": [
      "AGUSTONI"
    ],
    "ALGARROBO DEL AGUILA": [
      "ALGARROBO DEL AGUILA"
    ],
    "ALPACHIRI": [
      "ALPACHIRI",
      "ESTANCIA LA NATURAL",
      "URDANE"
    ],
    "ALTA ITALIA": [
      "ALTA ITALIA",
      "OJEDA"
    ],
    "ANGUIL": [
      "ANGUIL"
    ],
    "ARATA": [
      "ARATA",
      "COLONIA LA CARLOTA",
      "LOS HORNOS",
      "VILLA SAN ROQUE"
    ],
    "ATALIVA ROCA": [
      "ATALIVA ROCA",
      "COLONIA CHAPALCO",
      "NAICO"
    ],
    "BERNARDO LARROUDE": [
      "BERNARDO LARROUDE"
    ],
    "BERNASCONI": [
      "BERNASCONI"
    ],
    "CALEUFU": [
      "CALEUFU",
      "ESTANCIA LA FAMA"
    ],
    "CARRO QUEMADO": [
      "CARRO QUEMADO",
      "EL DURAZNO"
    ],
    "CASA DE PIEDRA": [
      "CASA DE PIEDRA"
    ],
    "CATRILO": [
      "CATRILO",
      "IVANOWSKY"
    ],
    "CEBALLOS": [
      "CEBALLOS"
    ],
    "CHACHARRAMENDI": [
      "CHACHARRAMENDI",
      "VALLE DAZA"
    ],
    "COLONIA 25 DE MAYO": [
      "25 DE MAYO",
      "COLONIA CHICA",
      "COLONIA EL SAUZAL",
      "GOBERNADOR AYALA"
    ],
    "COLONIA BARON": [
      "COLONIA BARON",
      "COLONIA SAN JOSE",
      "HUELEN"
    ],
    "COLONIA SANTA MARIA": [
      "COLONIA SANTA MARIA"
    ],
    "COLONIA SANTA TERESA": [
      "COLONIA LOS TOROS",
      "SANTA TERESA"
    ],
    "CONHELO": [
      "CONHELO"
    ],
    "CORONEL HILARIO LAGOS": [
      "CORONEL HILARIO LAGOS",
      "MARIANO MIRO"
    ],
    "CUCHILLO CO": [
      "CUCHILLO CO"
    ],
    "DOBLAS": [
      "DOBLAS"
    ],
    "DORILA": [
      "DORILA"
    ],
    "EDUARDO CASTEX": [
      "BOEUF",
      "COLONIA LA RAQUEL",
      "EDUARDO CASTEX"
    ],
    "EMBAJADOR MARTINI": [
      "EMBAJADOR MARTINI"
    ],
    "FALUCHO": [
      "FALUCHO"
    ],
    "GENERAL ACHA": [
      "EL CARANCHO",
      "EL VERANEO",
      "GENERAL ACHA",
      "UTRACAN"
    ],
    "GENERAL CAMPOS": [
      "COLONIA SAN JUAN",
      "GENERAL MANUEL J. CAMPOS",
      "LA LOMA"
    ],
    "GENERAL PICO": [
      "ESTANCIA SANTA AURELIA",
      "GENERAL PICO",
      "TREBOLARES"
    ],
    "GENERAL SAN MARTIN": [
      "GENERAL SAN MARTIN"
    ],
    "GOBERNADOR DUVAL": [
      "GOBERNADOR DUVAL"
    ],
    "GUATRACHE": [
      "GUATRACHE",
      "REMECO"
    ],
    "INGENIERO LUIGGI": [
      "EL TALA",
      "ESTANCIA EL PUMA",
      "INGENIERO LUIGGI"
    ],
    "INTENDENTE ALVEAR": [
      "INTENDENTE ALVEAR"
    ],
    "JACINTO ARAUZ": [
      "COLONIA LA COLORADA CHICA",
      "COLONIA SAN ROSARIO",
      "JACINTO ARAUZ"
    ],
    "LA ADELA": [
      "ANZOATEGUI",
      "GAVIOTAS",
      "LA ADELA"
    ],
    "LA HUMADA": [
      "AGUA DE TORRES",
      "CHOSMALAL",
      "LA HUMADA"
    ],
    "LA MARUJA": [
      "INGENIERO FOSTER",
      "LA MARUJA",
      "LOBOCO"
    ],
    "LA REFORMA": [
      "LA REFORMA"
    ],
    "LIMAY MAHUIDA": [
      "LIMAY MAHUIDA"
    ],
    "LONQUIMAY": [
      "LONQUIMAY"
    ],
    "LOVENTUE": [
      "LOVENTUE"
    ],
    "LUAN TORO": [
      "LUAN TORO"
    ],
    "MACACHIN": [
      "ATREUCO",
      "COLONIA EL PROVENIR",
      "ESTANCIA EL PAMPERO",
      "MACACHIN"
    ],
    "MAISONAVE": [
      "DAMIAN MAISONAVE"
    ],
    "MAURICIO MAYER": [
      "COLONIA INES Y CARLOTA",
      "MAURICIO MAYER"
    ],
    "METILEO": [
      "METILEO"
    ],
    "MIGUEL CANE": [
      "MIGUEL CANE"
    ],
    "MIGUEL RIGLOS": [
      "CEREALES",
      "COLONIA SAN MIGUEL",
      "MIGUEL RIGLOS"
    ],
    "MONTE NIEVAS": [
      "MONTE NIEVAS"
    ],
    "PARERA": [
      "PARERA"
    ],
    "PERU": [
      "COTITA",
      "PERU"
    ],
    "PICHI HUINCA": [
      "LAS PIEDRITAS",
      "PICHI HUINCA"
    ],
    "PUELCHES": [
      "LIHUEL CALEL",
      "PUELCHES"
    ],
    "PUELEN": [
      "PUELEN"
    ],
    "QUEHUE": [
      "QUEHUE"
    ],
    "QUEMU QUEMU": [
      "LA PUMA",
      "QUEMU QUEMU"
    ],
    "QUETREQUEN": [
      "QUETREQUEN"
    ],
    "RANCUL": [
      "CHAMAICO",
      "RANCUL"
    ],
    "REALICO": [
      "REALICO"
    ],
    "RELMO": [
      "RELMO"
    ],
    "ROLON": [
      "HIDALGO",
      "ROLON"
    ],
    "RUCANELO": [
      "RUCANELO",
      "TENIENTE GENERAL EMILIO MITRE"
    ],
    "SANTA ISABEL": [
      "ARBOL SOLO",
      "COLONIA LA PASTORIL",
      "MEDANOS NEGROS",
      "SANTA ISABEL"
    ],
    "SANTA ROSA": [
      "BARRANCAS COLORADAS",
      "POTRILLO OSCURO",
      "SANTA ROSA"
    ],
    "SARAH": [
      "SARAH"
    ],
    "SPELUZZI": [
      "SPELUZZI"
    ],
    "TELEN": [
      "TELEN"
    ],
    "TOAY": [
      "CACHIRULO",
      "EL TROPEZON",
      "TOAY"
    ],
    "TOMAS M ANCHORENA": [
      "TOMAS M. ANCHORENA"
    ],
    "TRENEL": [
      "ESTANCIA EL TIGRE",
      "ESTANCIA RUCA PIRE",
      "TRENEL"
    ],
    "UNANUE": [
      "EPU PEL",
      "GAMAY",
      "UNANUE"
    ],
    "URIBURU": [
      "LA GLORIA",
      "URIBURU"
    ],
    "VERTIZ": [
      "VERTIZ"
    ],
    "VICTORICA": [
      "VICTORICA"
    ],
    "VILLA MIRASOL": [
      "LA PUMA",
      "VILLA MIRASOL"
    ],
    "WINIFREDA": [
      "COLONIA EL DESTINO",
      "WINIFREDA"
    ]
  },
  "LA RIOJA": {
    "ARAUCO": [
      "AIMOGASTA",
      "ARAUCO",
      "BAÑADO DE LOS PANTANOS",
      "ESTACION MAZAN",
      "LA CANCHITA",
      "LA CAUCHITA",
      "LA CIMBRITA",
      "MACHIGASTA",
      "SAN ANTONIO",
      "TERMAS DE SANTA TERESITA",
      "TINOCAN",
      "UDPINANGO",
      "VILLA MAZAN"
    ],
    "CAPITAL": [
      "AMPATA",
      "ANCHICO",
      "BAJO HONDO",
      "BAZAN",
      "CARRIZAL",
      "CEBOLLAR",
      "COLONIA FRUTIHORTICOLA",
      "EL BARREAL",
      "EL CANTADERO",
      "EL DURAZNILLO",
      "EL QUEBRACHO",
      "EL ROSARIO",
      "EL SUNCHAL",
      "EL TALA",
      "ESTANCIA SAN JOSE",
      "LA ANTIGUA",
      "LA CAÑADA",
      "LA LANCHA",
      "LA LATA",
      "LA RAMADITA",
      "LA RIOJA",
      "LAS CATAS",
      "LAS HIGUERILLAS",
      "POZO DE LA YEGUA",
      "PUERTO ALEGRE",
      "SALADILLO",
      "SAN ANTONIO",
      "SAN BERNARDO",
      "SAN JOSE",
      "SAN JUAN",
      "SAN LORENZO",
      "SAN MIGUEL",
      "SAN NICOLAS",
      "SAN NICOLAS DEL RECREO",
      "SAN PEDRO",
      "SAN RAFAEL",
      "SANTO DOMINGO",
      "SIERRA BRAVA",
      "TALAMUYUNA",
      "TRAMPA DEL TIGRE"
    ],
    "CASTRO BARROS": [
      "AGUA BLANCA",
      "AMINGA",
      "ANILLACO",
      "ANJULLON",
      "CHUQUIS",
      "ISMIANGO",
      "LOS MOLINOS",
      "PINCHAS",
      "SAN PEDRO",
      "SANTA CRUZ",
      "SANTA VERA CRUZ"
    ],
    "CHAMICAL": [
      "BAJO DE LUCAS",
      "BASE CHAMICAL",
      "BELLA VISTA",
      "CHAMICAL",
      "CHULO",
      "EL CARMEN",
      "EL GARABATO",
      "EL MOLLAR",
      "EL QUEBRACHAL",
      "EL RETAMO",
      "ESQUINA DEL NORTE",
      "LA AGUADITA",
      "LA CORTADA",
      "LA RESISTENCIA",
      "LA SERENA",
      "LAS AMOLADERAS",
      "LAS FLORES",
      "LAS TALAS",
      "LOS BALDES",
      "LOS BORDOS",
      "POLCO",
      "POZO DE LA VACA",
      "POZO REDONDO",
      "ROSILLO MUERTO",
      "SAN RAFAEL",
      "SANTA BARBARA",
      "SANTA LUCIA",
      "SANTA RITA DE LA ZANJA",
      "VILLA CARMELA"
    ],
    "CHILECITO": [
      "ANGUINAN",
      "CHILECITO",
      "COLONIA ANGUINAN",
      "COLONIA CATINZACO",
      "COLONIA MALLIGASTA",
      "COLONIA VICHIGASTA",
      "GUANCHIN",
      "LA PUNTILLA",
      "LAS HIGUERITAS",
      "LOS SARMIENTOS",
      "MALLIGASTA",
      "MIRANDA",
      "NONOGASTA",
      "SAN MIGUEL",
      "SAN NICOLAS",
      "SANTA FLORENTINA",
      "SAÑOGASTA",
      "TILIMUQUI",
      "VICHIGASTA"
    ],
    "CORONEL FELIPE VARELA": [
      "AICUÑA",
      "ANCHUMBIL",
      "BANDA FLORIDA",
      "EL CARDON",
      "EL CHUSCHIN",
      "EL FUERTE",
      "EL MOLLE",
      "EL ZAPALLAR",
      "GUANDACOL",
      "LA BREA",
      "LA CIENAGA",
      "LA MARAVILLA",
      "LAS CUEVAS",
      "LOS NACIMIENTOS",
      "LOS PALACIOS",
      "LOS PATILLOS",
      "LOS TAMBILLOS",
      "MINA DELINA",
      "PAGANCILLO",
      "PASO SAN ISIDRO",
      "PIEDRA PINTADA",
      "PUERTO ALEGRE",
      "SAN JOSE",
      "SANTA CLARA",
      "VILLA ESTHER",
      "VILLA UNION"
    ],
    "FAMATINA": [
      "ALTO CARRIZAL",
      "ANGULOS",
      "ANTINACO",
      "BAJO CARRIZAL",
      "BARRIO DE GALLI",
      "CAMPANAS",
      "CHAÑARMUYO",
      "EL JUMEAL",
      "EL POTRERILLO",
      "FAMATINA",
      "LA CUADRA",
      "PITUIL",
      "PLAZA VIEJA",
      "SANTA CRUZ",
      "SANTO DOMINGO"
    ],
    "GENERAL ANGEL V PEÑALOZA": [
      "AGUADITA DE LOS VALDECES",
      "ALCAZAR",
      "BAJO VERDE",
      "CHILA",
      "COLOZOCAN",
      "EL MONTE",
      "LA REPRESITA",
      "LAS AGUADITAS",
      "LAS LOMITAS",
      "PACATALA",
      "PUNTA DE LOS LLANOS",
      "SAN NICOLAS",
      "SANTA TERESA",
      "TAMA",
      "TASQUIN",
      "TUIZON"
    ],
    "GENERAL BELGRANO": [
      "AGUA COLORADA",
      "BAJO HONDO",
      "CASTRO BARROS",
      "CHAÑAR",
      "COLONIA EL CISCO",
      "CORRAL DEL NEGRO",
      "CORTADERAS",
      "EL BORDO",
      "EL CONSUELO",
      "EL SIMBOLAR",
      "EL VIRQUE",
      "ESQUINA DEL SUD",
      "LA AGUADA",
      "LA FLORIDA",
      "LA HUERTA",
      "LOMA ALTA",
      "LOMA BLANCA",
      "MIRAFLORES",
      "MONTE GRANDE",
      "MONTE NEGRO",
      "NEPES",
      "OLTA",
      "S.DE LAS HIGUERAS",
      "SAN ISIDRO",
      "SAN PEDRO",
      "SANTA CRUZ",
      "SIERRA DE LOS QUINTEROS",
      "TALA VERDE",
      "TALVA"
    ],
    "GENERAL JUAN F QUIROGA": [
      "ATILES",
      "BALDE DE AMAYA",
      "CASANGATE",
      "EL CHORRO",
      "EL PORONGO",
      "EL POTRERO",
      "EL RETAMAL",
      "LA CHIMENEA",
      "LAS BARRANCAS",
      "LOMA LARGA",
      "LOS ALGARROBOS",
      "LOS BARREALES",
      "MALANZAN",
      "NACATE",
      "PORTEZUELO",
      "PULUCHAN",
      "QUEBRADA DEL VALLECITO",
      "SALANA",
      "SAN ANTONIO",
      "SAN PEDRO",
      "SAN RAMON",
      "SAN ROQUE",
      "SANTA MARIA",
      "SOLCA",
      "TOSQUEA",
      "TRES CRUCES",
      "TUANI",
      "UNQUILLAL"
    ],
    "GENERAL LAMADRID": [
      "EL CONDADO",
      "PARECITAS",
      "RIVADAVIA",
      "VILLA CASTELLI"
    ],
    "GENERAL OCAMPO": [
      "AGUA COLORADA",
      "AGUADITA DE LOS PERALTA",
      "AMBIL",
      "BALDE SALADO",
      "COLONIA ORTIZ DE OCAMPO",
      "EL BARRANCO",
      "EL CERCO",
      "EL FRAILE",
      "EL QUEMADO",
      "ESQUINA GRANDE",
      "LA AGUADITA",
      "LA BANDERITA",
      "LA BARRERA",
      "LA COLONIA",
      "LA DORADA",
      "LA ISLA",
      "LA MARAVILLA",
      "LA MARUJA",
      "LA PLAYA",
      "LA REPRESA",
      "LA RIPIEDRA",
      "LAS CORTADERAS",
      "LOS AGUIRRES",
      "LOS BARRIALITOS",
      "LOS MISTOLES",
      "LOS TELLOS",
      "MILAGRO",
      "MOLLACO",
      "OLPAS",
      "POZO DEL MEDIO",
      "RIO GRANDE",
      "SAN CRISTOBAL",
      "SAN JOSE",
      "SAN PEDRO",
      "SAN RAMON",
      "SAN ROQUE",
      "SANTA RITA DE CATUNA",
      "TORRECITAS"
    ],
    "GENERAL SAN MARTIN": [
      "AGUAYO",
      "ALGARROBO GRANDE",
      "BAJO HONDO",
      "CORRAL DE ISAAC",
      "CUATRO ESQUINAS",
      "EL ABRA",
      "EL BALDE DE LA VIUDA",
      "EL BUEN RETIRO",
      "EL CADILLO",
      "EL CALDEN",
      "EL MEDANITO",
      "EL MOSQUITO",
      "ENTRE RIOS",
      "ISLA DEL TIGRE",
      "KILOMETRO 14",
      "LA CHILCA",
      "LA INDUSTRIA",
      "LA ISLA",
      "LA LILIA",
      "LA LOMITA",
      "LA PORFIA",
      "LA REPRESA",
      "LA REPRESITA",
      "LA RESERVA",
      "LA SUSPENSION",
      "LAS MALVINAS",
      "LAS VENTANITAS",
      "NUEVA ESPERANZA",
      "PUESTO DICHOSO",
      "PUESTO LOS CORNEJOS",
      "SAN LORENZO",
      "SAN RAFAEL",
      "SAN SOLANO",
      "SANTA ELENA",
      "SIEMPRE VERDE",
      "TRES DE MAYO",
      "ULAPES",
      "VILLA LUISA",
      "VILLA NIDIA",
      "VIRGEN DEL VALLE"
    ],
    "INDEPENDENCIA": [
      "AGUANGO",
      "AMANA",
      "BALDE SAN ISIDRO",
      "EL CHIFLON",
      "LA MESADA",
      "LA TORRE",
      "LOS BALDECITOS",
      "LOS COLORADOS",
      "PAGANZO",
      "PATQUIA",
      "PATQUIA VIEJO",
      "REPRESA DE LA PUNTA"
    ],
    "ROSARIO VERA PEÑALOZA": [
      "ABRA VERDE",
      "AGUA BLANCA",
      "AGUA DE AGUIRRE",
      "AGUA DE LA PIEDRA",
      "ALTO BAYO",
      "CASAS VIEJAS",
      "CHELCOS",
      "CHEPES",
      "DESIDERIO TELLO",
      "EL BARRIAL",
      "EL CARDON",
      "EL DIVISADERO",
      "EL POTRERILLO",
      "EL RODEO",
      "EL ROSARIO",
      "EL TALA",
      "EL TOTORAL",
      "EL ZAMPAL",
      "LA AGUADA",
      "LA CALERA",
      "LA CALLANA",
      "LA CONSULTA",
      "LA JARILLA",
      "LA LAGUNA",
      "LAS TOSCAS",
      "LOS LAGARCITOS",
      "LOS OROS",
      "MASCASIN",
      "REAL DEL CADILLO",
      "RODEO GRANDE",
      "SAN ANTONIO",
      "SAN ISIDRO",
      "SAN JOSE",
      "SAN PEDRO",
      "SANTA CRUZ",
      "SANTA RITA",
      "VALLE HERMOSO",
      "VILLA CASANA"
    ],
    "SAN BLAS DE LOS SAUCES": [
      "ALPASINCHE",
      "AMUSCHINA",
      "ANDOLUCAS",
      "CHAUPIHUASI",
      "CUIPAN",
      "EL RETIRO",
      "LAS TALAS",
      "LOS ROBLES",
      "SALICAS",
      "SAN BLAS",
      "SHAQUI",
      "SURIYACO",
      "TUYUBIL"
    ],
    "SANAGASTA": [
      "HUACO",
      "LA ESCALERA",
      "LA TORRECITA",
      "VILLA SANAGASTA"
    ],
    "VINCHINA": [
      "BOCA DE LA QUEBRADA",
      "CASA PINTADA",
      "DISTRITO PUEBLO",
      "EL HORNO",
      "JAGUE",
      "LA ARMONIA",
      "LA BANDA",
      "LA CIENAGA",
      "POTRERO GRANDE",
      "VALLE HERMOSO",
      "VILLA SAN JOSE DE VINCHINA"
    ]
  },
  "MENDOZA": {
    "CAPITAL": [
      "10A. SECCION",
      "11A. SECCION",
      "1A. SECCION",
      "2A. SECCION",
      "3A. SECCION",
      "4A. SECCION",
      "5A. SECCION",
      "6A. SECCION",
      "7A. SECCION",
      "8A. SECCION",
      "9A. SECCION"
    ],
    "GENERAL ALVEAR": [
      "BOWEN",
      "CANALEJAS",
      "CARMENSA",
      "COCHICO",
      "CORRAL DE LORCA",
      "EL CEIBO",
      "EL JUNCALITO",
      "GENERAL ALVEAR",
      "GOICO",
      "KILOMETRO 884",
      "LA CALIFORNIA",
      "LA ESCANDINAVA",
      "LA MARZOLINA",
      "LA MONTILLA",
      "LA MORA",
      "LOS CAMPAMENTOS",
      "LOS COMPARTOS",
      "OVEJERIA",
      "POSTE DE FIERRO"
    ],
    "GODOY CRUZ": [
      "GOBERNADOR BENEGAS",
      "GODOY CRUZ",
      "LAS TORTUGAS",
      "PRESIDENTE SARMIENTO",
      "SAN FRANCISCO DEL MONTE",
      "VILLA HIPODROMO",
      "VILLA MARINI"
    ],
    "GUAYMALLEN": [
      "BERMEJO",
      "BUENA NUEVA",
      "CAPILLA DEL ROSARIO",
      "COLONIA SEGOVIA",
      "DORREGO",
      "EL SAUCE",
      "GENERAL BELGRANO",
      "GUAYMALLEN",
      "JESUS NAZARENO",
      "KILOMETRO 11 (GUAYMALLEN)",
      "LA PRIMAVERA",
      "LAGUNITA",
      "LAS CAÑAS",
      "LOS CORRALITOS",
      "PEDRO MOLINA",
      "PUENTE DE HIERRO",
      "RODEO DE LA CRUZ",
      "SAN FRANCISCO DEL MONTE",
      "SAN JOSE",
      "VILLA NUEVA"
    ],
    "JUNIN": [
      "ALGARROBO GRANDE",
      "ALTO VERDE",
      "INGENIERO GIAGNONI",
      "JUNIN",
      "LA COLONIA",
      "LOS BARRIALES",
      "MEDRANO",
      "MUNDO NUEVO",
      "PHILLIPS",
      "RODRIGUEZ PEÑA",
      "TRES ESQUINAS"
    ],
    "LA PAZ": [
      "CADETES DE CHILE",
      "CHAMUSCAO",
      "CRUZ DEL YUGO",
      "DESAGUADERO",
      "EL CAMPAMENTO",
      "EL LECHUCITO",
      "LA GLORIOSA",
      "LA MENTA",
      "LA PAZ",
      "LAS CHACRITAS",
      "MAQUINISTA LEVET",
      "VILLA ANTIGUA"
    ],
    "LAS HERAS": [
      "BLANCO ENCALADA",
      "CAPDEVILA",
      "EL ALGARROBAL",
      "EL BORBOLLON",
      "EL CHALLAO",
      "EL PLUMERILLO",
      "EL PUESTITO",
      "EL RESGUARDO",
      "EL ZAPALLAR",
      "ESPEJO",
      "GUIDO",
      "HORNITO DEL GRINGO",
      "JOCOLI",
      "LA CASA DEL TIGRE",
      "LA CIENEGUITA",
      "LA HULLERA",
      "LA UNION",
      "LAS CORTADERAS",
      "LAS CUEVAS",
      "LAS HERAS",
      "LOS PENITENTES",
      "PANQUEHUA",
      "POLVAREDAS",
      "PUENTE DEL INCA",
      "PUNTA DE VACAS",
      "SALAGASTA",
      "SANTA ELENA",
      "SIERRAS DE ENCALADA",
      "USPALLATA",
      "VILLAVICENCIO"
    ],
    "LAVALLE": [
      "3 DE MAYO",
      "ARROYITO",
      "BARRIO ALTO DEL OLVIDO",
      "BARRIO JOCOLI II",
      "BARRIO LA ESPERANZA",
      "BARRIO LA PALMERA",
      "BARRIO LA PEGA",
      "BARRIO LAGUNAS DE BARTOLUZZI",
      "BARRIO LOS JARILLEROS",
      "BARRIO LOS OLIVOS",
      "BARRIO VIRGEN DEL ROSARIO",
      "CAPILLA DEL ROSARIO",
      "COSTA DE ARAUJO",
      "EL 15",
      "EL CARMEN",
      "EL FORZUDO",
      "EL PARAMILLO",
      "EL PLUMERO",
      "EL RETAMO",
      "EL RETIRO",
      "EL VERGEL",
      "ESTACION KILOMETRO 976",
      "INGENIERO GUSTAVO ANDRE",
      "JOCOLI",
      "JOCOLI VIEJO",
      "LA ASUNCION",
      "LA HOLANDA",
      "LA POLVOSA",
      "LAGUNITA",
      "LAS LAGUNITAS",
      "LAS VIOLETAS",
      "LOS SAUCES",
      "SAN FRANCISCO",
      "SAN MIGUEL",
      "VILLA TULUMAYA"
    ],
    "LUJAN DE CUYO": [
      "AGRELO",
      "ANCHORIS",
      "BARRIO ADINA I Y II",
      "BARRIO PERDRIEL IV",
      "CACHEUTA",
      "CARRODILLA",
      "CHACRAS DE CORIA",
      "COSTA FLORES",
      "EL CARMELO",
      "EL CARRIZAL",
      "EL SALTO",
      "LA PICADA",
      "LA PUNTILLA",
      "LAS CARDITAS",
      "LAS COMPUERTAS",
      "LAS VEGAS",
      "LOS MANANTIALES",
      "LUJAN DE CUYO",
      "MAYOR DRUMMOND",
      "NUEVA COLONIA",
      "PERDRIEL",
      "PIEDRAS BLANCAS",
      "POTRERILLOS",
      "UGARTECHE",
      "VALLE DEL SOL",
      "VILLA EL REFUGIO",
      "VISTALBA"
    ],
    "MAIPU": [
      "BARRANCAS",
      "BARRIO JESUS DE NAZARET",
      "COLONIA BOMBAL",
      "COLONIA IRIGOYEN",
      "COLONIA JARA",
      "COQUIMBITO",
      "CRUZ DE PIEDRA",
      "EL PARAISO",
      "EL PEDREGAL",
      "FRAY LUIS BELTRAN",
      "GENERAL GUTIERREZ",
      "GENERAL ORTEGA",
      "ISLA CHICA",
      "ISLA GRANDE",
      "LOS ALAMOS",
      "LUNLUNTA",
      "LUZURIAGA",
      "MAIPU",
      "RODEO DEL MEDIO",
      "RUSSELL",
      "SAN ROQUE",
      "SANTA BLANCA",
      "TRES ESQUINAS",
      "VILLA SECA",
      "VILLA TERESA"
    ],
    "MALARGUE": [
      "AGUA ESCONDIDA",
      "CALMUCO",
      "EL ALAMBRADO",
      "EL CARAPACHO",
      "EL CHACAY",
      "EL INFIERNILLO",
      "EL MANZANO",
      "EL VATRO",
      "LA JUNTA",
      "LA SALINILLA",
      "LA VALENCIANA",
      "LAS CHACRAS",
      "LAS LEÑAS",
      "LLANO BLANCO",
      "LOS CARRIZALES",
      "LOS CORRALES",
      "LOS MOLLES",
      "LUANCO",
      "MALARGUE",
      "MINACAR",
      "PATA MORA",
      "RINCON CHICO",
      "RIO GRANDE"
    ],
    "RIVADAVIA": [
      "ANDRADE",
      "BARRIO COOPERATIVA LOS CAMPAMENTOS",
      "BARRIO RIVADAVIA",
      "COSTA ANZORENA",
      "CUADRO ORTEGA",
      "EL MIRADOR",
      "LA CENTRAL",
      "LA ESPERANZA",
      "LA FLORIDA",
      "LA LIBERTAD",
      "LOS ARBOLES",
      "LOS CAMPAMENTOS",
      "MEDRANO",
      "MUNDO NUEVO",
      "REDUCCION DE ABAJO",
      "RIVADAVIA",
      "SANTA MARIA DE ORO"
    ],
    "SAN CARLOS": [
      "BARRIO CARRASCO",
      "BARRIO EL CEPILLO",
      "CAPIZ",
      "CHILECITO",
      "EL CAPACHO",
      "EL PARRAL",
      "EUGENIO BUSTOS",
      "LA CONSULTA",
      "LA JAULA",
      "LOS ALAMITOS",
      "PAREDITAS",
      "PASO DE LAS CARRETAS",
      "PIEDRAS BLANCAS",
      "SAN CARLOS",
      "TRES ESQUINAS",
      "VILLA EL CHACON"
    ],
    "SAN MARTIN": [
      "ALTO SALVADOR",
      "ALTO VERDE",
      "BARRIO CHIVILCOY",
      "BARRIO EMANUEL",
      "BARRIO LA ESTACION",
      "BARRIO LOS CHARABONES",
      "BARRIO NTRA. SRA. DE FATIMA",
      "BUEN ORDEN",
      "CHAPANAY",
      "CHIVILCOY",
      "CIUDAD DE SAN MARTIN",
      "COLONIA LAMBARE",
      "EL DIVISADERO",
      "EL ESPINO",
      "EL RAMBLON",
      "MONTECASEROS",
      "NUEVA CALIFORNIA",
      "PALMIRA",
      "TRES ESQUINAS",
      "TRES PORTEÑAS",
      "VILLA CENTENARIO"
    ],
    "SAN RAFAEL": [
      "25 DE MAYO",
      "ARISTIDES VILLANUEVA",
      "BARRIO CAMPOS EL TOLEDANO",
      "BARRIO ECHEVERRIA",
      "BARRIO EL NEVADO",
      "BARRIO EMPLEADOS DE COMERCIO",
      "BARRIO INTENDENCIA",
      "BARRIO LAS ROSAS",
      "BARRIO PRIMAVERA",
      "CAPITAN MONTOYA",
      "COLONIA COLOMER",
      "COLONIA EL USILLAL",
      "COLONIA ELENA",
      "COLONIA GELMAN",
      "COLONIA JAUREGUI",
      "COLONIA LOPEZ",
      "COLONIA RUSA",
      "CUADRO BOMBAL",
      "CUADRO NACIONAL",
      "CUESTA DE LOS TERNEROS",
      "EL ALGARROBAL",
      "EL CERRITO",
      "EL ESCORIAL",
      "EL NIHUIL",
      "EL SOSNEADO",
      "EL TROPEZON",
      "EL VENCEDOR",
      "EL VIDALINO",
      "GOUDGE",
      "GUADALES",
      "JAIME PRATS",
      "LA GUEVARINA",
      "LA HORQUETA",
      "LA LLAVE",
      "LA LLAVE NUEVA",
      "LA LLAVE SUR",
      "LA NORA",
      "LA PICHANA",
      "LA TOMBINA",
      "LA TOSCA",
      "LA VASCONIA",
      "LAS AGUADITAS",
      "LAS MALVINAS",
      "LOS CLAVELES",
      "LOS PEJES",
      "LOS REYUNOS",
      "LOS SIFONES",
      "LOS TABLEROS",
      "MONTE COMAN",
      "PEDRO VARGAS",
      "PIEDRA DE AFILAR",
      "POBRE DIABLO",
      "PUNTA DEL AGUA",
      "RAMA CAIDA",
      "REAL DEL PADRE",
      "RESOLANA",
      "RINCON DEL INDIO",
      "SALTO DE LAS ROSAS",
      "SAN RAFAEL",
      "SANTA TERESA",
      "SOITUE",
      "VILLA ATUEL",
      "VILLA ATUEL NORTE"
    ],
    "SANTA ROSA": [
      "BALDE DE PIEDRA",
      "BALDE NUEVO",
      "BANDERITA",
      "BARRIO 12 DE OCTUBRE",
      "BARRIO MARIA AUXILIADORA",
      "BARRIO MOLINA CABRERA",
      "CATITAS VIEJAS",
      "COLONIA SAN JORGE",
      "COLONIA SUR",
      "EL ALGARROBO",
      "GOBERNADOR CIVIT",
      "LA ANGELINA",
      "LA BANDERA",
      "LA CIENAGUITA",
      "LA COSTA",
      "LA DORMIDA",
      "LA JOSEFA",
      "LAS CATITAS",
      "LOMAS BLANCAS",
      "LOS LOTES",
      "MORON CHICO",
      "MORON VIEJO",
      "PARRALES MENDOCINOS",
      "SAN PEDRO",
      "SANTA ROSA",
      "TALQUENCA",
      "VILLA CABECERA"
    ],
    "TUNUYAN": [
      "AGUA AMARGA",
      "BARRIO SAN CAYETANO",
      "CAMPO LOS ANDES",
      "COLONIA LAS ROSAS",
      "EL ALGARROBO",
      "EL MANZANO",
      "EL TOTORAL",
      "LA PRIMAVERA",
      "LA REMONTA",
      "LA RIOJITA",
      "LAS PINTADAS",
      "LOS SAUCES",
      "SAN PABLO",
      "TUNUYAN",
      "VILLA SECA",
      "VISTA FLORES"
    ],
    "TUPUNGATO": [
      "ANCON",
      "BARRIO BELGRANO NORTE",
      "CORDON DEL PLATA",
      "EL PERAL",
      "EL ZAMPAL",
      "EL ZAMPALITO",
      "ESTANCIA LAS CUEVAS",
      "ESTANCIA PALMA",
      "GUALTALLARY",
      "LA ARBOLEDA",
      "LA CARRERA",
      "OJO DE AGUA",
      "SAN JOSE",
      "SANTA CLARA",
      "TUPUNGATO",
      "VILLA BASTIAS",
      "ZAPATA"
    ]
  },
  "MISIONES": {
    "25 DE MAYO": [
      "25 DE MAYO",
      "ALBORADA",
      "EL SALTITO",
      "LA YERBA",
      "LIBERTAD",
      "PICADA MALVINAS",
      "PICADA RIO URUGUAY",
      "TAMANDUA",
      "TORTA QUEMADA"
    ],
    "9 DE JULIO": [
      "9 DE JULIO",
      "9 DE JULIO KILOMETRO 20",
      "MARIANO MORENO",
      "VALLE HERMOSO"
    ],
    "ALBA POSSE": [
      "9 DE JULIO",
      "ALBA POSSE",
      "BARRA BONITA",
      "COLONIA ACARAGUA",
      "CORONEL PRINGLES",
      "EL BARRERITO",
      "LA UVA",
      "SAN FRANCISCO DE ASIS",
      "SANTA RITA"
    ],
    "ALMAFUERTE": [
      "ALMAFUERTE",
      "PICADA YACUTINGA"
    ],
    "ANDRESITO": [
      "11 DE SEPTIEMBRE",
      "28 DE DICIEMBRE",
      "ARROYO VERD",
      "CABALLERO (SAN ANTONIO)",
      "CABUREI",
      "COMANDANTE ANDRESITO",
      "DESEADO",
      "INTEGRACION",
      "PENINSULA",
      "PUERTO ANDRESITO",
      "PUERTO DESEADO",
      "SOBERANIA"
    ],
    "APOSTOLES": [
      "APOSTOLES",
      "BARRIO RURAL",
      "EL CRUCE",
      "EL PARAISO",
      "ESTACION APOSTOLES",
      "LA CAPILLA"
    ],
    "ARISTOBULO DEL VALLE": [
      "ARAZA",
      "ARISTOBULO DEL VALLE",
      "CUÑA PIRU",
      "CUÑA PIRU I",
      "EL CRUCE PINDAYTI",
      "LAS YERBAS",
      "MAVALLE PINDAYTI",
      "PICADA PROPAGANDA",
      "TAMANDUA",
      "TRES ARROYOS"
    ],
    "ARROYO DEL MEDIO": [
      "ARROYO DEL MEDIO"
    ],
    "AZARA": [
      "AZARA",
      "CAPON BONITO",
      "COLONIA APOSTOLES",
      "RINCON DE AZARA"
    ],
    "BERNARDO DE IRIGOYEN": [
      "BAJO PEPIRI",
      "BERNARDO DE IRIGOYEN",
      "DOS HERMANAS",
      "FACUNDO QUIROGA",
      "JUAN MANUEL DE ROSAS",
      "LAGUNA AZUL"
    ],
    "BONPLAND": [
      "BONPLAND"
    ],
    "CAA YARI": [
      "CAA - YARI",
      "COLONIA FINLANDESA",
      "PICADA SUECA",
      "VILLA LIBERTAD"
    ],
    "CAMPO GRANDE": [
      "1 DE MAYO",
      "CAMPO GRANDE",
      "EL TIGRE",
      "JOSE LUIS",
      "KILOMETRO 17 (RUTA 8)",
      "YERBAL VIEJO"
    ],
    "CAMPO RAMON": [
      "BARRIO ESCUELA 633",
      "CAMPO RAMON",
      "PICADA GUARAIPO",
      "PICADA INTERNACI",
      "VILLA BONITA",
      "VILLA UNION",
      "YERBAL VIEJO"
    ],
    "CAMPO VIERA": [
      "CAMPO VIERA",
      "SEGUIN",
      "YAZA"
    ],
    "CANDELARIA": [
      "BARRIO DEL LAGO",
      "CANDELARIA"
    ],
    "CAPIOVI": [
      "CAPIOVI",
      "EL PORVENIR",
      "SAN GOTARDO"
    ],
    "CARAGUATAY": [
      "AVELLANEDA",
      "CARAGUATAY",
      "MONTE QUEMADO",
      "PUERTO AVELLANEDA",
      "PUERTO CARAGUATAY",
      "TARUMA"
    ],
    "CERRO AZUL": [
      "CERRO AZUL",
      "PICADA BELGRANO",
      "PICADA POLACA"
    ],
    "CERRO CORA": [
      "BELLA VISTA",
      "CERRO CORA",
      "LA INVERNADA",
      "LAS QUEMADAS",
      "VILLA VENECIA"
    ],
    "COLONIA ALBERDI": [
      "ALBERDI"
    ],
    "COLONIA AURORA": [
      "ALICIA BAJA",
      "APARECIDA",
      "CHAFARIZ",
      "COLONIA ALICIA",
      "COLONIA ALICIA ALTA",
      "COLONIA AURORA",
      "COLONIA EL PROGRESO",
      "EL PALMITAL",
      "FLOR DE MAYO",
      "LAS LIMAS",
      "PUERTO LONDERO",
      "SAN CARLOS"
    ],
    "COLONIA DELICIA": [
      "AGUARAY GUAZU",
      "MARIA MAGDALENA",
      "NUEVA DELICIA",
      "PUEBLO NUEVO",
      "PUERTO MADO",
      "YACUTINGA"
    ],
    "COLONIA POLANA": [
      "COLONIA NARANJITO",
      "COLONIA POLANA",
      "PUERTO NARANJITO"
    ],
    "COLONIA VICTORIA": [
      "COLONIA VICTORIA",
      "CUATRO BOCAS",
      "PAREJHA"
    ],
    "CONCEPCION DE LA SIERRA": [
      "BARRA CONCEPCION",
      "CIEN HECTAREAS",
      "CONCEPCION DE LA SIERRA",
      "EL TIGRE",
      "PUERTO SAN ISIDRO",
      "PUERTO SAN LUCAS",
      "SAN ISIDRO"
    ],
    "CORPUS": [
      "CORPUS"
    ],
    "DOS ARROYOS": [
      "DOS ARROYOS"
    ],
    "DOS DE MAYO": [
      "CAINGUAS",
      "CASCUDA",
      "COLONIA MILAGRO",
      "DOS DE MAYO NUCLEO I",
      "DOS DE MAYO NUCLEO II",
      "DOS DE MAYO NUCLEO III",
      "EL PORTON",
      "INDUMAR",
      "NUCLEO I",
      "NUCLEO II",
      "PUEBLO ILLIA",
      "SALTITO II"
    ],
    "EL ALCAZAR": [
      "EL ALCAZAR",
      "VILLA URRUTIA"
    ],
    "EL SOBERBIO": [
      "ANDRESITO (EL SOBERBIO)",
      "ARROYO BONITO (EL SOBERBIO)",
      "COLONIA PRIMAVERA",
      "EL BOTON (EL SOBERBIO)",
      "EL SOBERBIO",
      "FRAY LUIS BELTRAN",
      "LA BONITA",
      "MARIANO MORENO",
      "MARTIN GÑEMES",
      "MONTEAGUDO",
      "NUEVA (EL SOBERBIO)",
      "PEPIRI MINI",
      "PICADA GUARANI"
    ],
    "ELDORADO": [
      "ELDORADO",
      "PUERTO PINARES",
      "VILLA ROULET"
    ],
    "FACHINAL": [
      "FACHINAL",
      "SAN ANDRES"
    ],
    "FLORENTINO AMEGHINO": [
      "CHICO ALFEREZ",
      "FLORENTINO AMEGHINO",
      "PUERTO ROSARIO"
    ],
    "GARUHAPE": [
      "3 DE MAYO",
      "GARUHAPE",
      "PUERTO GARUHAPE",
      "SAN MIGUEL"
    ],
    "GARUPA": [
      "BARRIO NUEVO GARUPA",
      "GARUPA",
      "SANTA INES"
    ],
    "GENERAL ALVEAR": [
      "GENERAL ALVEAR",
      "LOS INDIOS",
      "PICADA VASCA"
    ],
    "GENERAL URQUIZA": [
      "BARRIO TUNGOIL",
      "EL DESTIERRO",
      "GENERAL URQUIZA",
      "PUERTO ESPAÑA",
      "PUERTO GISELA",
      "PUERTO NUEVO"
    ],
    "GOBERNADOR LOPEZ": [
      "EL CHATON",
      "GOBERNADOR LOPEZ"
    ],
    "GOBERNADOR ROCA": [
      "GOBERNADOR ROCA",
      "PASTOREO",
      "ROCA CHICA"
    ],
    "GUARANI": [
      "GUARANI",
      "PICADA YAPEYU",
      "VILLA SOMMER"
    ],
    "HIPOLITO YRIGOYEN": [
      "HELVECIA",
      "HIPOLITO YRIGOYEN"
    ],
    "ITACARUARE": [
      "INVERNADA CHICA",
      "INVERNADA DE ITACARUARE",
      "ITACARUARE",
      "LA ARROCERA"
    ],
    "JARDIN AMERICA": [
      "COLONIA SOL DE MAY",
      "FLORA",
      "JARDIN AMERICA",
      "OASIS",
      "PUERTO TABAY",
      "VILLA LIBERTADOR GENERAL SAN MARTIN"
    ],
    "LEANDRO N ALEM": [
      "LEANDRO N. ALEM",
      "PICADA AFRICANA",
      "PICADA SUD"
    ],
    "LORETO": [
      "ARROYO PASTORA",
      "LORETO"
    ],
    "LOS HELECHOS": [
      "BARRIO ESCUELA 461",
      "LOS HELECHOS"
    ],
    "MARTIRES": [
      "COLONIA MARTIRES",
      "MARTIRES"
    ],
    "MOJON GRANDE": [
      "MOJON GRANDE",
      "PANAMBI"
    ],
    "MONTECARLO": [
      "BARIO ITA",
      "BARRIO CUATRO BOCAS",
      "BARRIO GUATAMBU",
      "COLONIA GUARAYPO",
      "GUATAMBU",
      "LAHARRAGUE",
      "MONTECARLO",
      "PUERTO LAHARRAGUE"
    ],
    "OBERA": [
      "EL SALTO",
      "GUAYABERA",
      "OBERA",
      "PICADA VIEJA",
      "TRES ESQUINAS",
      "VILLA BARREYRO",
      "VILLA MARTTOS"
    ],
    "OLEGARIO VICTOR ANDRADE": [
      "COLONIA ALEMANA",
      "OLEGARIO V. ANDRADE",
      "PICADA GALITZIANA"
    ],
    "PANAMBI": [
      "MARIANO MORENO",
      "MBORORE",
      "PANAMBI",
      "PANAMBI KILOMETRO 15",
      "PANAMBI KILOMETRO 8"
    ],
    "POSADAS": [
      "EL PORVENIR",
      "NEMESIO PARMA",
      "POSADAS"
    ],
    "POZO AZUL": [
      "DURAN",
      "FORESTAL (SAN ANTONIO)",
      "NUESTRA SEÑORA DE ITATI",
      "POZO AZUL",
      "TRES VECINOS"
    ],
    "PROFUNDIDAD": [
      "PROFUNDIDAD",
      "TACUARUZU"
    ],
    "PUERTO ESPERANZA": [
      "CELMAN",
      "ESPERANZA",
      "PUERTO SEGUNDO",
      "ROBILLARD CUE (PUERTO ESPERANZA)"
    ],
    "PUERTO IGUAZU": [
      "CATARATAS DEL IGUAZU",
      "FORTIN MBORORE",
      "PUERTO CANOAS",
      "PUERTO IGUAZU",
      "PUERTO PENINSULA",
      "VILLA ALTA",
      "YRYAPU"
    ],
    "PUERTO LEONI": [
      "COLONIA FLORA",
      "PUERTO LEONI",
      "PUERTO MINERAL",
      "VILLA AKERMAN"
    ],
    "PUERTO LIBERTAD": [
      "ALDEA GUAPOY",
      "LIBERTAD",
      "PUERTO ERRECABORDE",
      "PUERTO LIBERTAD",
      "TIRICA",
      "VILLA COOPERATIVA"
    ],
    "PUERTO PIRAY": [
      "COLONIA SANTA TERESA",
      "PIRAY KILOMETRO 18",
      "PUERTO PIRAY",
      "VILLA PARODI"
    ],
    "PUERTO RICO": [
      "CAPIOVICIÑO",
      "COLONIA ORO VERDE",
      "MBOPICUA",
      "PUERTO RICO",
      "SAN ALBERTO"
    ],
    "RUIZ DE MONTOYA": [
      "RUIZ DE MONTOYA"
    ],
    "SALTO ENCANTADO": [
      "SALTO ENCANTADO"
    ],
    "SAN ANTONIO": [
      "ALEGRIA",
      "AZOPARDO",
      "BARBACUA (SAN ANTONIO)",
      "CAMPO ALEGRE",
      "CERRO SIETE (SAN ANTONIO)",
      "EL CENTRAL (SAN ANTONIO)",
      "PARAJE 130",
      "PIÑALITO NORTE",
      "SAN ANTONIO",
      "SARACURA (SAN ANTONIO)",
      "VILLA UNION"
    ],
    "SAN IGNACIO": [
      "ALDEA ABORIGEN",
      "APARICIO CUE",
      "DOMINGO SAVIO",
      "INVERNADA",
      "SAN IGNACIO",
      "SAN RAFAEL",
      "TEYU CUARE",
      "VILLA EMMA"
    ],
    "SAN JAVIER": [
      "INVERNADA GRANDE",
      "LOS GALPONES",
      "PICADA SAN JAVIER",
      "RINCON DEL GUERRERO",
      "SAN JAVIER",
      "TRES ESQUINAS"
    ],
    "SAN JOSE": [
      "COLONIA SAN JOSE",
      "PINDAPOY",
      "SAN JOSE",
      "SIERRITA SAN JOS",
      "TARANCO"
    ],
    "SAN MARTIN": [
      "PICADA FILANDESA",
      "SAN MARTIN"
    ],
    "SAN PEDRO": [
      "ALEGRIA",
      "ASTER",
      "BELLO HORIZONTE",
      "COLONIA PRIMAVERA",
      "CRUCE CABALLERO",
      "GENTILE",
      "LAS MINAS",
      "MACACA",
      "NUEVA ESPERANZA (BERNARDO IRIGOYEN)",
      "PALMERA BOCA",
      "PARAISO",
      "PICADA MARIA AUXILIADORA",
      "PIÑALITO SUR",
      "RIO YABOTY",
      "SAN PEDRO",
      "SANTA ROSA",
      "TIRICA",
      "TOBUNA",
      "VILLA DON BOSCO"
    ],
    "SAN VICENTE": [
      "COLONIA FLORIDA",
      "EL LUCERO (SAN VICENTE)",
      "EL PACIFICO (SAN VICENTE)",
      "EL SOCORRO",
      "FRACRAN",
      "GUIRAY",
      "LAS MERCEDES",
      "PICADA EL MOLINO",
      "PICADA FLOR",
      "PICADA MOJON GRANDE (SAN VICENTE)",
      "PICADA SULMA (SAN VICENTE)",
      "PUERTO ARGENTINO (SAN VICENTE)",
      "SAN JOSE",
      "SAN VICENTE"
    ],
    "SANTA ANA": [
      "LA FORTALEZA",
      "PUERTO SANTA ANA",
      "SANTA ANA"
    ],
    "SANTA MARIA": [
      "ARROYO SANTA MARIA",
      "CASCABEL",
      "CERRO MARTIRES",
      "LA CORITA",
      "SAN JUAN DE LA SIERRA",
      "SANTA MARIA"
    ],
    "SANTIAGO DE LINIERS": [
      "SANTIAGO DE LINIERS"
    ],
    "SANTO PIPO": [
      "EL BONITO",
      "SANTO PIPO",
      "TACUARA"
    ],
    "TRES CAPONES": [
      "LAS TUNAS",
      "TRES CAPONES"
    ],
    "WANDA": [
      "EL SUSTO",
      "PUERTO WANDA",
      "TUPI CUA",
      "WANDA"
    ]
  },
  "NEUQUÉN": {
    "AGUADA SAN ROQUE": [
      "AGUADA SAN ROQUE"
    ],
    "ALUMINE": [
      "ALUMINE",
      "CHACRA 8",
      "SAIHUEQUE CACIQUE"
    ],
    "ANDACOLLO": [
      "ANDACOLLO",
      "HUARACO",
      "LA PRIMAVERA"
    ],
    "AREA SIN GOBIERNO": [
      "ABRA ANCHA",
      "AGUA DEL OVERO",
      "ARROYO BLANCO",
      "ATREUCO (RAI)",
      "ATREUCO ARRIBA",
      "AUCA MAHUIDA",
      "AUCAPAN ABAJO",
      "AUQUINCO",
      "BAJADA DE LOS MOLLES",
      "BELISLE",
      "CAJON DE ALMAZA",
      "CARRI LIL",
      "CARRO QUEBRADO",
      "CASA DE PIEDRA",
      "CATAN LIL",
      "CATATUN",
      "CHACAICO",
      "CHACAYCO",
      "CHALLACO",
      "CHAPELCO",
      "CHAPUA",
      "CHIMEHUIN",
      "CODIHUE",
      "COLIPILLI ABAJO",
      "CONFLUENCIA DEL MALLEO",
      "CORTADERA",
      "COSTA DEL CATAN LIL",
      "COSTA DEL MALLEO",
      "COVUNCO ABAJO",
      "COVUNCO CENTRO",
      "CURRUMIL QUILLEN",
      "EL CHENQUE",
      "EL MANZANO",
      "EL RINCON",
      "EL SALITRAL",
      "EL SAUCE",
      "ESPEJO",
      "ESPINAZO DEL ZORRO",
      "ESTANCIA SANTA LUCIA",
      "HARAS PULMARI",
      "HUAIQUIMIL",
      "HUALCUPEN",
      "HUANTRAICO",
      "HUARENCHENQUE",
      "HUEMUL",
      "HUILQUI MENUCO",
      "HUITRIN",
      "HUNCAL",
      "ISLA VICTORIA",
      "LA AMARGA",
      "LA GREDA",
      "LA LIPELA",
      "LA NEGRA",
      "LA PATRIA",
      "LA PICAZA",
      "LA SALADA",
      "LAGO HERMOSO",
      "LAGUNA BLANCA",
      "LAGUNA MIRANDA",
      "LAPA",
      "LAS CORTADERAS",
      "LEUTO CABALLO",
      "LOMA DE LA LATA",
      "LONCO MULA",
      "LOS ALAZANES",
      "LOS HELECHOS",
      "LOS MOLLES",
      "LOS REMOLINOS",
      "MALLEO",
      "MALLIN DE LOS CABALLOS",
      "MALLIN DEL RUBIO",
      "MALLIN DEL TORO",
      "MALLIN QUEMADO",
      "MARI MENUCO",
      "MEDIA LUNA",
      "NAHUEL HUAPI",
      "NAHUEL MAPE ARRIBA",
      "NAHUEL MAPI ABAJO",
      "PAIMUN",
      "PANTANITOS",
      "PASO DE LOS INDIOS",
      "PICHAIHUE",
      "PIEDRA PINTADA",
      "PINO HACHADO",
      "PINO SOLO",
      "PRIMEROS PINOS",
      "QUECHUQUINA",
      "QUILCA",
      "QUILLEN",
      "QUINTUCO",
      "RAHUE",
      "RAHUECO",
      "RANQUILCO",
      "RANQUILON",
      "SAN CABAO",
      "SAN EDUARDO",
      "SAN IGNACIO",
      "SANTA MARIA",
      "SIERRA DE HUANTRAICO",
      "TAQUIMILAN CENTRO",
      "TILHUE",
      "TRES CHORROS",
      "TROMPUL (RAI)",
      "VILLA PICHI PICUN LEUFU",
      "VILLA RINCON CHICO",
      "ZAINA YEGUA"
    ],
    "AÑELO": [
      "AÑELO"
    ],
    "BAJADA DEL AGRIO": [
      "AGRIO DEL MEDIO",
      "BAJADA DEL AGRIO",
      "BAJADA VIEJA"
    ],
    "BARRANCAS": [
      "AGUA CALIENTE",
      "BARRANCAS"
    ],
    "BUTA RANQUIL": [
      "AGUADA CHACAYCO",
      "BUTA RANQUIL",
      "LAGUNA AUQUINCO",
      "RANQUIL VEGA"
    ],
    "CAVIAHUE - COPAHUE": [
      "CAVIAHUE",
      "COPAHUE"
    ],
    "CENTENARIO": [
      "11 DE OCTUBRE",
      "CENTENARIO"
    ],
    "CHORRIACA": [
      "CHORRIACA",
      "COIHUECO",
      "TRAHUNCURA"
    ],
    "CHOS MALAL": [
      "CHOS MALAL"
    ],
    "COVUNCO ABAJO": [
      "COVUNCO ABAJO",
      "LA PATAGONIA"
    ],
    "COYUCO COCHICO": [
      "COCHICO",
      "COYUCO",
      "LONCO VACA"
    ],
    "CUTRAL CO": [
      "CHACRAS DE MONTE HERMOSO",
      "CUTRAL CO"
    ],
    "EL CHOLAR": [
      "EL CHOLAR"
    ],
    "EL HUECU": [
      "EL HUECU"
    ],
    "EL SAUCE": [
      "EL SAUCE",
      "LIMAY CENTRO",
      "VILLA UNION"
    ],
    "GUAÑACOS": [
      "GUAÑACOS"
    ],
    "HUINGANCO": [
      "BUTALON NORTE",
      "CHARRA RUCA",
      "EL MANZANO",
      "HUINGANCO"
    ],
    "JUNIN DE LOS ANDES": [
      "CERRO DE LOS PINOS",
      "JUNIN DE LOS ANDES",
      "LA RINCONADA",
      "LOLOG",
      "PAMPA DEL MALLEO"
    ],
    "LAS COLORADAS": [
      "LAS COLORADAS"
    ],
    "LAS LAJAS": [
      "LA BUITRERA",
      "LAS LAJAS",
      "SAN DEMETRIO"
    ],
    "LAS OVEJAS": [
      "LAS OVEJAS"
    ],
    "LONCOPUE": [
      "CAMPANA MAHUIDA",
      "LONCOPUE"
    ],
    "LOS CATUTOS": [
      "AGUADA DEL LUCERO",
      "COVUNCO ARRIBA",
      "LOS CATUTOS",
      "MALLIN DEL MUERTO"
    ],
    "LOS CHIHUIDOS": [
      "LOS CHIHUIDOS"
    ],
    "LOS MICHES": [
      "LILEO",
      "LOS MICHES",
      "TIERRAS BLANCAS"
    ],
    "MANZANO AMARGO": [
      "LA MATANSILLA",
      "MANZANO AMARGO",
      "PICHI NEUQUEN"
    ],
    "MARIANO MORENO": [
      "COVUNCO CENTRO",
      "LOS HORNOS",
      "MARIANO MORENO"
    ],
    "NEUQUEN": [
      "COLONIA VALENTINA",
      "NEUQUEN"
    ],
    "OCTAVIO PICO": [
      "OCTAVIO PICO"
    ],
    "PASO AGUERRE": [
      "PASO AGUERRE"
    ],
    "PICUN LEUFU": [
      "PICUN LEUFU"
    ],
    "PIEDRA DEL AGUILA": [
      "PIEDRA DEL AGUILA"
    ],
    "PILO LIL": [
      "PILO LIL"
    ],
    "PLAZA HUINCUL": [
      "PLAZA HUINCUL"
    ],
    "PLOTTIER": [
      "PLOTTIER"
    ],
    "QUILI MALAL": [
      "LA PATAGONIA",
      "QUILI MALAL"
    ],
    "RAMON M CASTRO": [
      "RAMON M. CASTRO",
      "SANTO DOMINGO"
    ],
    "RINCON DE LOS SAUCES": [
      "RINCON DE LOS SAUCES"
    ],
    "SAN MARTIN DE LOS ANDES": [
      "LAGO LOLOG",
      "PUENTE BLANCO",
      "SAN MARTIN DE LOS ANDES"
    ],
    "SAN PATRICIO DEL CHAÑAR": [
      "SAN PATRICIO DEL CHAÑAR"
    ],
    "SANTO TOMAS": [
      "SANTO TOMAS"
    ],
    "SAUZAL BONITO": [
      "SAUZAL BONITO"
    ],
    "SENILLOSA": [
      "AGUADA TOLEDO",
      "ARROYITO",
      "CHINA MUERTA",
      "SENILLOSA"
    ],
    "TAQUIMILAN": [
      "TAQUIMILAN",
      "TAQUIMILAN ARRIBA"
    ],
    "TRICAO MALAL": [
      "AQUIHUECO",
      "CANCHA HUINGANCO",
      "TRICAO MALAL"
    ],
    "VARVARCO - INVERNADA VIEJA": [
      "COLOMICHICO",
      "INVERNADA VIEJA",
      "VARVARCO"
    ],
    "VILLA CURI LEUVU": [
      "CAEPE MALAL",
      "CHACAY MELEHUE/EL ALAMITO",
      "EL ALAMITO",
      "LOS MENUCOS",
      "VILLA DEL CURI LEUVU"
    ],
    "VILLA DEL NAHUEVE": [
      "BELLA VISTA",
      "CAYANTA",
      "LOS CARRIZOS",
      "VILLA DEL NAHUEVE"
    ],
    "VILLA EL CHOCON": [
      "EL CHOCON",
      "VILLA EL CHOCON"
    ],
    "VILLA LA ANGOSTURA": [
      "CORRENTOSO",
      "CUMELEN",
      "VILLA LA ANGOSTURA"
    ],
    "VILLA LAGO MELIQUINA": [
      "LAGO MELIQUINA"
    ],
    "VILLA PEHUENIA": [
      "LONCO LUAN",
      "MOQUEHUE",
      "VILLA PEHUENIA",
      "VILLA UNION"
    ],
    "VILLA PUENTE PICUN LEUFU": [
      "PUENTE PICUN LEUFU"
    ],
    "VILLA TRAFUL": [
      "VILLA TRAFUL"
    ],
    "VISTA ALEGRE": [
      "BARRIO RUCA LUHE",
      "VISTA ALEGRE NORTE",
      "VISTA ALEGRE SUR"
    ],
    "ZAPALA": [
      "EL SALITRAL",
      "LONCO LUAN",
      "ZAPALA"
    ]
  },
  "RÍO NEGRO": {
    "AGUADA CECILIO": [
      "AGUADA CECILIO"
    ],
    "AGUADA DE GUERRA": [
      "AGUADA DE GUERRA"
    ],
    "AGUADA GUZMAN": [
      "AGUADA GUZMAN",
      "BARDA COLORADA",
      "CHASICO",
      "LONCO VACA"
    ],
    "ALLEN": [
      "ALLEN",
      "BARRIO BLANCO",
      "BARRIO CALLE CIEGA N° 10",
      "BARRIO CALLE CIEGA N° 6",
      "BARRIO EL MARUCHITO",
      "BARRIO EMERGENTE",
      "BARRIO GUERRICO",
      "BARRIO LA HERRADURA"
    ],
    "AREA SIN GOBIERNO": [
      "ATRAICO",
      "BAHIA CREEK",
      "BAJO SAN CAYETANO",
      "BARRIO PLANTA COMPRESORA DE GAS",
      "BOCA DE LA TRAVESIA",
      "CAITA TORO",
      "CAÑADON CHILENO",
      "CERRO MESA",
      "CERRO NEGRO",
      "CHACAY HUARRUCA",
      "CHANQUIN",
      "COLONIA CHOCORI",
      "COLONIA EL GUALICHO",
      "COLONIA JOSEFA",
      "COLONIA LA LUISA",
      "COLONIA SAN JUAN",
      "COMALLO ABAJO",
      "COMALLO ARRIBA",
      "EL CHACAY",
      "EL MONTOSO",
      "EL PORTEZUELO",
      "EL PORVENIR",
      "EL TROPEZON",
      "LA ENSENADA",
      "LA ESPERANZA",
      "LA JAPONESA",
      "LA JULIA",
      "LA LOBERIA",
      "LOTEO COSTA DE RIO",
      "MINA SANTA TERESITA",
      "MONTE BAGUAL",
      "NEGRO MUERTO",
      "PAMPA LINDA",
      "PENINSULA RUCA CO",
      "POZO SALADO",
      "PRIMERA ANGOSTURA",
      "QUEPU NIYEU",
      "SALTO ANDERSEN",
      "SAN CARLOS",
      "SAN LORENZO",
      "SAUCE BLANCO",
      "SEGUNDA ANGOSTURA",
      "TRAPALCO",
      "VACA LAUFQUEN",
      "ZANJON DE OYUELA"
    ],
    "ARROYO LOS BERROS": [
      "ARROYO LOS BERROS",
      "CAMPANA MAHUIDA"
    ],
    "ARROYO VENTANA": [
      "ARROYO VENTANA"
    ],
    "CAMPO GRANDE": [
      "BARRIO EL LABRADOR",
      "SARGENTO VIDAL",
      "VILLA MANZANO",
      "VILLA SAN ISIDRO"
    ],
    "CATRIEL": [
      "CATRIEL"
    ],
    "CERRO POLICIA": [
      "BARRIO COSTA ESTE",
      "BARRIO COSTA OESTE",
      "CERRO POLICIA"
    ],
    "CERVANTES": [
      "BARRIO LA DEFENSA",
      "BARRIO PORVENIR",
      "CERVANTES",
      "COLONIA FATIMA"
    ],
    "CHELFORO": [
      "CHELFORO"
    ],
    "CHICHINALES": [
      "BARRIO MOÑO AZUL",
      "CHICHINALES",
      "COLONIA CEFERINO NAMUNCURA",
      "INGENIERO OTTO KRAUSE",
      "VILLA DEL PARQUE"
    ],
    "CHIMPAY": [
      "BARRIO UNION",
      "CHIMPAY",
      "COLONIA SANTA GREGORIA"
    ],
    "CHIPAUQUIL": [
      "CHIPAUQUIL"
    ],
    "CHOELE CHOEL": [
      "CHOELE CHOEL"
    ],
    "CINCO SALTOS": [
      "BARRIO PRESIDENTE PERON",
      "CINCO SALTOS",
      "LA PARRA"
    ],
    "CIPOLLETTI": [
      "BARRIO EL TREINTA",
      "BARRIO GORETTI",
      "BARRIO LA LOR",
      "BARRIO MARIA ELVIRA",
      "BARRIO NORTE",
      "BARRIO PUENTE 83",
      "BARRIO PUENTE DE MADERA",
      "BARRIO TRES LUCES",
      "CIPOLLETTI",
      "COLONIA CONFLUENCIA",
      "COLONIA CURRI LAMUEN",
      "CUATRO ESQUINAS",
      "FERRI",
      "LA FALDA",
      "LAS PERLAS",
      "RENTERIA",
      "TRES LUCES"
    ],
    "CLEMENTE ONELLI": [
      "ANECON GRANDE",
      "CLEMENTE ONELLI"
    ],
    "COLAN CONUE": [
      "COLAN CONUE"
    ],
    "COMALLO": [
      "COMALLO"
    ],
    "COMICO": [
      "CHASICO",
      "COMICO",
      "TAMBELEN"
    ],
    "CONA NIYEU": [
      "CONA NIYEU"
    ],
    "CONTRALMIRANTE CORDERO": [
      "BARDA DEL MEDIO",
      "CONTRALMIRANTE CORDERO"
    ],
    "CORONEL BELISLE": [
      "CORONEL BELISLE"
    ],
    "CUBANEA": [
      "CUBANEA"
    ],
    "DARWIN": [
      "DARWIN"
    ],
    "DINA HUAPI": [
      "DINA HUAPI",
      "ÑIRIHUAU"
    ],
    "EL BOLSON": [
      "ARROYO QUEMQUEMTREU",
      "COSTA DEL RIO AZUL",
      "CUESTA DEL TERNERO",
      "EL BOLSON",
      "LOS REPOLLOS",
      "MALLIN AHOGADO",
      "TRES PUENTES ARRIBA"
    ],
    "EL CAIN": [
      "EL CAIN"
    ],
    "EL CUY": [
      "EL CUY"
    ],
    "EL MANSO": [
      "EL FOYEL",
      "EL MANSO",
      "RIO VILLEGAS"
    ],
    "GENERAL CONESA": [
      "BARRIO COLONIA CONESA",
      "COLONIA SANTA ROSA",
      "COLONIA SANTA TERESITA",
      "GENERAL CONESA"
    ],
    "GENERAL ENRIQUE GODOY": [
      "GENERAL ENRIQUE GODOY"
    ],
    "GENERAL FERNANDEZ ORO": [
      "BARRIO COSTA LINDA",
      "BARRIO ISLA 10",
      "BARRIO UNION",
      "GENERAL FERNANDEZ ORO"
    ],
    "GENERAL ROCA": [
      "BARRIO CANALE",
      "BARRIO CHACRA MONTE",
      "BARRIO EL PETROLEO",
      "BARRIO FRONTERA",
      "BARRIO LA COSTA",
      "BARRIO LA RIBERA - BARRIO APYCAR",
      "BARRIO LAS ANGUSTIAS",
      "BARRIO MAR DEL PLATA",
      "BARRIO MOSCONI",
      "BARRIO PINO AZUL",
      "GENERAL ROCA",
      "PASO CORDOVA"
    ],
    "GUARDIA MITRE": [
      "GUARDIA MITRE"
    ],
    "INGENIERO HUERGO": [
      "BARRIO LA BARDA",
      "BARRIO LA COSTA",
      "INGENIERO LUIS A. HUERGO"
    ],
    "INGENIERO JACOBACCI": [
      "INGENIERO JACOBACCI"
    ],
    "LAGUNA BLANCA": [
      "LAGUNA BLANCA"
    ],
    "LAMARQUE": [
      "LAMARQUE"
    ],
    "LAS GRUTAS": [
      "LAS GRUTAS"
    ],
    "LOS MENUCOS": [
      "LOS MENUCOS"
    ],
    "LUIS BELTRAN": [
      "LUIS BELTRAN"
    ],
    "MAINQUE": [
      "BARRIO LUISILLO",
      "MAINQUE",
      "SANTA LUCIA"
    ],
    "MAMUEL CHOIQUE": [
      "MAMUEL CHOIQUE"
    ],
    "MAQUINCHAO": [
      "MAQUINCHAO"
    ],
    "MENCUE": [
      "BLANCURA CENTRO",
      "LA ANGOSTURA",
      "MENCUE",
      "PALENQUE NIYEU",
      "PILAHUE",
      "QUILI MALAL"
    ],
    "MINISTRO RAMOS MEXIA": [
      "MINISTRO RAMOS MEXIA"
    ],
    "NAHUEL NIYEU": [
      "NAHUEL NIYEU",
      "SALITRAL NEGRO",
      "SANTA ROSA"
    ],
    "NAUPA HUEN": [
      "NAUPA HUEN"
    ],
    "OJOS DE AGUA": [
      "LIPETREN",
      "OJOS DE AGUA",
      "YUQUICHE"
    ],
    "PASO FLORES": [
      "PASO FLORES"
    ],
    "PEÑAS BLANCAS": [
      "BARRIO DESTACAMENTO",
      "BARRIO PINAR",
      "PEÑAS BLANCAS",
      "VALLE VERDE"
    ],
    "PICHI MAHUIDA": [
      "PICHI MAHUIDA"
    ],
    "PILCANIYEU": [
      "COQUELEN",
      "CORRALITO",
      "LAS BAYAS",
      "PASO CHACABUCO",
      "PASO DE LOS MOLLES",
      "PASO MIRANDA",
      "PICHI LEUFU",
      "PICHI LEUFU ABAJO",
      "PILCANIYEU"
    ],
    "PILQUINIYEU": [
      "PILQUINIYEU"
    ],
    "PILQUINIYEU DEL LIMAY": [
      "PILQUINIYEU DEL LIMAY"
    ],
    "POMONA": [
      "POMONA"
    ],
    "PRAHUANIYEU": [
      "PRAHUANIYEU"
    ],
    "RINCON TRENETA": [
      "TRENETA"
    ],
    "RIO CHICO": [
      "RIO CHICO"
    ],
    "RIO COLORADO": [
      "BARRIO ESPERANZA",
      "COLONIA JULIA Y ECHARREN",
      "COLONIA REIG",
      "JUVENTUD UNIDA",
      "RIO COLORADO"
    ],
    "SAN ANTONIO OESTE": [
      "ESTACION EMPALME",
      "LOS ALAMOS",
      "PUERTO SAN ANTONIO ESTE",
      "SACO VIEJO",
      "SAN ANTONIO OESTE"
    ],
    "SAN CARLOS DE BARILOCHE": [
      "BARRIO EL PILAR",
      "COLONIA SUIZA",
      "PENINSULA SAN PEDRO",
      "SAN CARLOS DE BARILOCHE",
      "VILLA ARELAUQUEN",
      "VILLA CAMPANARIO",
      "VILLA CATEDRAL",
      "VILLA LLAO LLAO",
      "VILLA LOS COIHUES"
    ],
    "SAN JAVIER": [
      "SAN JAVIER"
    ],
    "SIERRA COLORADA": [
      "SIERRA COLORADA"
    ],
    "SIERRA GRANDE": [
      "MINA GONZALITO",
      "PLAYAS DORADAS",
      "PUNTA COLORADA",
      "SIERRA GRANDE"
    ],
    "SIERRA PAILEMAN": [
      "ARROYO EL TEMBRAO",
      "CHAJAIJO",
      "SIERRA PAILEMAN"
    ],
    "VALCHETA": [
      "VALCHETA"
    ],
    "VALLE AZUL": [
      "VALLE AZUL"
    ],
    "VIEDMA": [
      "EL CONDOR",
      "EL JUNCAL",
      "EL PASO",
      "LA BOCA",
      "VIEDMA"
    ],
    "VILLA LLANQUIN": [
      "VILLA LLANQUIN"
    ],
    "VILLA MASCARDI": [
      "VILLA MASCARDI"
    ],
    "VILLA REGINA": [
      "BARRIO SANTA RITA",
      "VILLA ALBERDI",
      "VILLA REGINA"
    ],
    "YAMINUE": [
      "YAMINUE"
    ],
    "ÑORQUINCO": [
      "ÑORQUINCO"
    ]
  },
  "SALTA": {
    "AGUARAY": [
      "ACAMBUCO",
      "AGUARAY",
      "CAMPO LARGO",
      "CAPIAZUTI",
      "DIQUE ITIYURO",
      "EL CHILCAR",
      "EL PAJEAL",
      "LA REPRESA",
      "MACUETA",
      "PIQUIRENDA",
      "SAN FRANCISCO",
      "TIMBOIRENDA",
      "TOBANTIRENDA"
    ],
    "AGUAS BLANCAS": [
      "AGUAS BLANCAS"
    ],
    "ANGASTACO": [
      "ANGASTACO",
      "EL ARREMO",
      "EL CARMEN",
      "LA ANGOSTURA",
      "LA ARCADIA",
      "LA ISLA",
      "LOS CARDONES",
      "LOS SAUCES",
      "PUCARA",
      "RIO GRANDE",
      "SANTA ROSA",
      "VALLECITO"
    ],
    "ANIMANA": [
      "ANIMANA",
      "CORRALITO",
      "EL BARRIAL",
      "SAN ANTONIO"
    ],
    "APOLINARIO SARAVIA": [
      "AGUA SUCIA",
      "APOLINARIO SARAVIA",
      "CORONEL MOLLINEDO",
      "EL BORDO (FINCA)",
      "EL CARMEN",
      "EL DORADO",
      "LA JUNTA",
      "LA PELADA",
      "LA QUINTA",
      "LAS FLACAS",
      "PALO BLANCO",
      "SAN CAYETANO",
      "SAN LUIS",
      "SAN VICENTE",
      "SANTA LUCIA"
    ],
    "CACHI": [
      "CACHI",
      "CACHI ADENTRO",
      "CACHIPAMPA",
      "COLTE",
      "EL BARRIAL",
      "EL VALLECITO",
      "ESCALCHI",
      "ESCALCHI ADENTRO",
      "LA PAYA",
      "LAS ARCAS",
      "LAS CUEVAS",
      "LAS PAILAS",
      "LAS TRANCAS",
      "PALERMO OESTE",
      "PIEDRA DEL MOLINO",
      "PUCARA",
      "RANCAGUA",
      "RUMIHUASI",
      "SAN JOSE DE ESCALCHI",
      "VALLECITO"
    ],
    "CAFAYATE": [
      "CAFAYATE",
      "DIVISADERO",
      "EL PASO",
      "LAS CONCHAS",
      "SANTA BARBARA",
      "TOLOMBOM",
      "YACOCHUYA"
    ],
    "CAMPO QUIJANO": [
      "AGUA CHICA",
      "CAMPO QUIJANO",
      "CARRERA MUERTA",
      "CHORRILLOS",
      "COLONIA NEUROPSIQUIATICA",
      "EL ALISAL",
      "EL ENCON",
      "EL MANZANO",
      "EL MOLLAR",
      "EL PALOMAR",
      "EL POTRERO",
      "EL ROSAL",
      "EL TORO",
      "ESTANCIA EL GOLGOTA",
      "INCAHUASI",
      "INGENIERO MAURY",
      "LA HOYADA",
      "LA SILLETA",
      "LAS CUEVAS",
      "MOROHUASI",
      "PASCHA",
      "SAN BERNARDO DE LAS ZORRAS",
      "SANTA ROSA DE TASTIL",
      "TACUARA",
      "TRES CRUCES",
      "VILLA ANGELICA"
    ],
    "CAMPO SANTO": [
      "BETANIA",
      "CABEZA DE BUEY",
      "CAMPO SANTO",
      "COBOS",
      "LA RAMADA"
    ],
    "CERRILLOS": [
      "BARRIO EL CONGRESO",
      "BARRIO LAS TUNAS",
      "BARRIO LOS OLMOS",
      "BARRIO LOS PINARES",
      "CERRILLOS",
      "FINCA LA BLANCA",
      "LA CANDELARIA (FINCA)",
      "LA FALDA",
      "LA ISLA",
      "LAS PALMAS (FINCA)",
      "LOS PINOS",
      "VILLA LOS ALAMOS"
    ],
    "CHICOANA": [
      "AGUA NEGRA",
      "BARRIO LA ROTONDA",
      "BARRIO SANTA TERESITA",
      "BELLA VISTA",
      "CHICOANA",
      "CHIVILME",
      "EL CANDADO",
      "EL MOLLAR",
      "EL NOGALAR",
      "EL RODEO",
      "EL SIMBOLAR",
      "EL TIPAL",
      "ESCOIPE",
      "LA MAROMA",
      "LA ZANJA",
      "LAS ANIMAS",
      "LAS MORAS",
      "MOLINO DE GONGORA",
      "POTRERO DIAZ",
      "PULARES",
      "QUEBRADA DE ESCOIPE",
      "SAN MARTIN",
      "SANTA ANA",
      "SUNCHAL",
      "VILLA FANNY"
    ],
    "COLONIA SANTA ROSA": [
      "COLONIA SANTA ROSA",
      "LA MISION",
      "SAUCELITO"
    ],
    "CORONEL MOLDES": [
      "CABRA CORRAL",
      "CHURQUI SOLO",
      "CORONEL MOLDES",
      "LA BODEGA",
      "OSMA"
    ],
    "EL BORDO": [
      "EL BORDO",
      "EL CEIBAL",
      "EL PRADO",
      "EL SAUCE",
      "LOS NOQUES"
    ],
    "EL CARRIL": [
      "CALVIMONTE",
      "EL CARRIL",
      "EL PEDREGAL",
      "LAS BARRANCAS",
      "LAS GARZAS",
      "SAN SIMON"
    ],
    "EL GALPON": [
      "AGUA BLANCA",
      "ALTO DEL MISTOL",
      "BAJO GRANDE",
      "CORRAL QUEMADO",
      "CUCHI POZO",
      "EL ALTAMISQUI",
      "EL BORDO",
      "EL GALPON",
      "EL GUAYACAN",
      "EL MOJON",
      "EL PACARA",
      "EL PORVENIR",
      "EL SAUZAL",
      "EL TUNAL",
      "EL VALLECITO",
      "LA POBLACION",
      "LAGUNITA",
      "LAS VERTIENTES",
      "LOS ROSALES",
      "OVEJERIA",
      "PASO DE LAS CARRERAS",
      "POBLACION DE ORTEGA",
      "POTRERO",
      "PRINGLES",
      "QUEBRACHO HERRADO",
      "SALADILLO",
      "SAN JOSE DE ORQUERA",
      "SANTA ANA"
    ],
    "EL JARDIN": [
      "EL JARDIN",
      "POTRERILLOS"
    ],
    "EL POTRERO": [
      "ALMIRANTE BROWN",
      "ALMONA",
      "ANTILLA",
      "ARAGON",
      "BELLA VISTA",
      "CANTEROS",
      "COPO QUILE",
      "EL BORDO",
      "EL CADILLAL",
      "EL CHURCALITO",
      "EL CHURQUI",
      "EL POTRERO",
      "EL RECREO",
      "LA ALMONA",
      "LA BAJADA",
      "LA COSTOSA",
      "LA FIRMEZA",
      "LA SOLEDAD",
      "LAS CATITAS",
      "LAS LAJAS",
      "LAS MERCEDES",
      "LOS CORRALES",
      "LOS NOGALES",
      "PUENTE DE PLATA",
      "SAN LORENZO",
      "SAN LUIS",
      "SAN PEDRO",
      "SANTA CRUZ",
      "SANTA MARIA",
      "SANTA ROSA",
      "SIMBOL YACO",
      "UNQUILLO"
    ],
    "EL QUEBRACHAL": [
      "ALGARROBAL",
      "ALTO ALEGRE",
      "ANTA POZO",
      "BOCA DEL TIGRE",
      "EL GEOLOGO",
      "EL MOSQUITO",
      "EL NORTE",
      "EL PORVENIR",
      "EL QUEBRACHAL",
      "EL QUIRQUINCHO",
      "EL SIMBOL",
      "EL VENCIDO",
      "FLOR DE MAYO",
      "GAONA",
      "LA BOMBA",
      "LA JORNADA",
      "LA LAGUNA",
      "LAGUNITA",
      "LAS PIEDRAS",
      "LOS JARDINES",
      "MACAPILLO",
      "MACAPILLO VIEJO",
      "MANGRULLO",
      "NUESTRA SEÑORA DE TALAVERA",
      "SAN FRANCISCO",
      "SAN ISIDRO",
      "SAN JUAN",
      "SAN MARCOS",
      "SAN RAFAEL",
      "SAN TADEO",
      "SANTA CLARA",
      "SANTA ELENA",
      "SANTA ROSA",
      "TOLLOCHE"
    ],
    "EL TALA": [
      "EL BRETE",
      "EL TALA",
      "LOS MOGOTES"
    ],
    "EMBARCACION": [
      "AGUA BLANCA",
      "AGUA LINDA",
      "CAMPICHUELO",
      "CARBONCITO",
      "DRAGONES",
      "EL CARMEN",
      "EL CHIVIL",
      "EL ESPINILLO",
      "EL MELONAR",
      "EL QUEMADO",
      "EL SAUCE",
      "EL SURI",
      "EL TAJAMAR",
      "EMBARCACION",
      "HICKMAN",
      "LA EMBOSCADA",
      "LA FLORIDA",
      "LA FORTUNA",
      "LA GRANADA",
      "LA ISLA",
      "LA MINA",
      "LA QUENA",
      "LA SOLEDAD",
      "LAS PAVAS",
      "LAS YANAS",
      "LUNA MUERTA",
      "MEDIA LUNA",
      "MISION CHAQUEÑA",
      "MISION TIERRAS FISCALES",
      "MONTE CARMELO",
      "MONTE SECO",
      "PADRE LOZANO",
      "PALO SANTO",
      "POMPEYA",
      "POZO BRAVO",
      "POZO DEL MACHO",
      "ROSARIO",
      "SAN ESTEBAN",
      "SAN MARTIN",
      "SANTA FE",
      "SANTILLAN",
      "SENDA HACHADA",
      "TABACO CIMARRON",
      "TARTAGALITO",
      "TUCUMANCITO",
      "VILLA NUEVA"
    ],
    "GENERAL BALLIVIAN": [
      "CAMPO EL TIGRE",
      "CAMPO LIBRE",
      "EL ARENAL",
      "EL BREAL",
      "EL CAMPAMENTO",
      "EL CASTIGADO",
      "EL PESCADITO",
      "EL RETIRO",
      "EL SILENCIO",
      "EL TENIENTE",
      "EL TRASLADO",
      "GENERAL BALLIVIAN",
      "LA BOLSA",
      "LA CURTIEMBRE",
      "LA SALVACION",
      "LAS CANTORAS",
      "LAS CATAS",
      "LAS PALMAS",
      "LOS DESMONTES",
      "MONTEVIDEO",
      "RIO SECO",
      "SAN JOSE"
    ],
    "GENERAL GUEMES": [
      "AGUA BLANCA",
      "EL ALGARROBAL",
      "EL SALADILLO",
      "EL ZAPALLAR",
      "GENERAL GUEMES",
      "LA CUEVA",
      "LA TRAMPA (FINCA)",
      "LAS HORQUETAS",
      "LOS CORRALES",
      "LOS NOGALES",
      "MADRE VIEJA",
      "OJO DE AGUA",
      "PALOMITAS",
      "PUESTO VIEJO",
      "SANTA RITA",
      "YAQUIASME"
    ],
    "GENERAL MOSCONI": [
      "BARRIO EL JARDIN DE SAN MARTIN",
      "CAMPAMENTO VESPUCIO",
      "CORONEL CORNEJO",
      "EL TREMENTINAL",
      "GENERAL MOSCONI",
      "MADREJONES",
      "POCOY",
      "RECAREDO",
      "SAN TELMO"
    ],
    "GENERAL PIZARRO": [
      "AGUA CALIENTE",
      "ARRAYANAL",
      "CORRAL QUEMADO",
      "EL CEBILAR",
      "EL DESMONTE",
      "EL LINDERO",
      "EL PUESTITO (FINCA)",
      "EL REAL",
      "FINCA LA MORALEJA",
      "GENERAL PIZARRO",
      "LA ESMERALDA",
      "LAS AVISPAS",
      "LAS BEBIDAS",
      "LOMA DE BURRO",
      "LUIS BURELA",
      "PALO A PIQUE",
      "PALO SANTO"
    ],
    "GUACHIPAS": [
      "ACOSTA",
      "ALEMANIA",
      "CARAHUASI",
      "CINCO DURAZNOS",
      "COROPAMPA",
      "EL GALPON",
      "EL SAPO",
      "GUACHIPAS",
      "LA BODEGUITA",
      "LA COSTA",
      "LA FLORIDA",
      "LAS JUNTAS",
      "LOS CASTILLOS",
      "LOS SAUCES",
      "PAMPA GRANDE",
      "SANTA BARBARA",
      "SANTA CLARA",
      "SANTA ROSA",
      "SAUCE REDONDO",
      "VAQUERIA"
    ],
    "HIPOLITO YRIGOYEN": [
      "EL TABACAL",
      "HIPOLITO YRIGOYEN"
    ],
    "IRUYA": [
      "ABRA DE ARAGUYOC",
      "ABRA DEL SAUCE",
      "CAMPO CABRERA",
      "CASA GRANDE",
      "CHIYAYOC",
      "COLANZULI",
      "CORTADERAS",
      "EL ALFARCITO",
      "HUAYRA HUASI",
      "IRUYA",
      "LA MESADA GRANDE",
      "LAS CAPILLAS",
      "LAS TRANCAS",
      "MANTACILLAS DEL VALLE DELGADO",
      "PALCA",
      "PORONGAL",
      "PUEBLO VIEJO",
      "RODEO COLORADO",
      "SALA ESCUYA",
      "SAN ANTONIO",
      "SAN ISIDRO DE IRUYA",
      "SAN JUAN",
      "TRES MORROS",
      "VALLE DELGADO",
      "VIZCARRA",
      "VOLCAN HIGUERAS"
    ],
    "ISLA DE CAÑAS": [
      "ISLA DE CAÑAS"
    ],
    "JOAQUIN V GONZALEZ": [
      "BALBUENA",
      "BELLA FLOR",
      "BELLA VISTA",
      "BUEN LUGAR",
      "CAMPO REDONDO (PUESTO)",
      "CEIBALITO",
      "CENTRO 25 DE JUNIO",
      "CORONEL OLLEROS",
      "EL 103",
      "EL 21",
      "EL 93",
      "EL CARDITO",
      "EL DESTIERRO",
      "EL ESTANQUE",
      "EL GRITAO",
      "EL GUAYACAN",
      "EL JARDIN",
      "EL MANANTIAL",
      "EL POTRERILLO",
      "EL QUEBRACHALITO",
      "EL RECREO",
      "EL RETIRO",
      "EL SUNCHAL",
      "EL TOTORAL",
      "EL VALLE (FINCA)",
      "EL YESO",
      "EL YUCHAN",
      "ESPERANZA",
      "FINCA EL ALGARROBAL",
      "FINCA EL MILAGRO",
      "FINCA LA FLORESTA",
      "FINCA LOS TAPIRES",
      "INDEPENDENCIA",
      "JOAQUIN V. GONZALEZ",
      "JUME POZO",
      "LA AGUADA",
      "LA ARGENTINA",
      "LA CANDELARIA",
      "LA LAGUNITA",
      "LA POBLACION",
      "LA POSICION",
      "LA UNION",
      "LAGUNA BLANCA",
      "LAGUNA VERDE",
      "LAS MERCEDES",
      "LAS VACAS",
      "LOS BLANCOS",
      "LOS LAURELES",
      "LOS POZOS",
      "LOS VIBORONES",
      "LUJAN",
      "LUZ DE ANTA",
      "NOLASCO",
      "PILCOMAYO",
      "PIQUETE CABADO",
      "POZO GRANDE",
      "POZO HALLADO",
      "POZO LARGO",
      "POZO NUEVO",
      "POZO VERDE",
      "PUERTA BLANCA",
      "PUESTO DEL MEDIO",
      "PUESTO LA PROVIDENCIA",
      "REMANCITO",
      "RESISTENCIA",
      "RETIRO",
      "SALTA FORESTAL",
      "SAN ALFONSO",
      "SAN ANDRES",
      "SAN ANTONIO",
      "SAN BERNARDO",
      "SAN CRISTOBAL",
      "SAN DAVID",
      "SAN FELIPE",
      "SAN IGNACIO",
      "SAN JORGE",
      "SAN JOSE",
      "SAN MARTIN",
      "SAN NICOLAS",
      "SAN PEDRO",
      "SAN ROQUE",
      "SAN SIMON",
      "SANTA ANA",
      "SANTA CECILIA",
      "SANTA LAURA",
      "SANTA MARIA",
      "SANTA TERESA",
      "SANTO DOMINGO",
      "SANTOS LUGARES",
      "TORO POZO",
      "VIZCACHERAL"
    ],
    "LA CALDERA": [
      "CAMPO ALEGRE",
      "EL GALLINATO",
      "ISLAS DE VAQUEROS",
      "LA CALDERA",
      "LA CALDERILLA",
      "LOS PORONGOS",
      "LOS SAUCES",
      "MOJOTORO",
      "SANTA GERTRUDIS"
    ],
    "LA CANDELARIA": [
      "CEIBAL",
      "LA CANDELARIA",
      "SAN ANTONIO",
      "SAN PEDRO DE ARANDA"
    ],
    "LA MERCED": [
      "EL HUAICO",
      "EL RUMICAL",
      "LA MERCED",
      "LAS PIRCAS",
      "LAS TIENDITAS",
      "SAN AGUSTIN",
      "SAN MIGUEL",
      "SUMALAO",
      "VILLA SARMIENTO"
    ],
    "LA POMA": [
      "CANGREJILLOS",
      "CERRO NEGRO",
      "CHURCAL",
      "COBRES",
      "EL CAJON",
      "EL RODEO",
      "EL SALADILLO",
      "EL TRIGAL",
      "ESQUINA AZUL",
      "ESQUINA COLORADA",
      "ESQUINA DE GUARDIA",
      "HORNADILLAS",
      "LA POMA",
      "PISCUNO",
      "POZO BRAVO",
      "PUEBLO VIEJO"
    ],
    "LA VIÑA": [
      "ALEMANIA",
      "AMPASCACHI",
      "EL CHURQUI",
      "EL INFIERNILLO",
      "ENTRE RIOS",
      "FINCA SAN NICOLAS",
      "LA ENCRUCIJADA",
      "LA VIÑA",
      "LAS ABRITAS",
      "LAS CURTIEMBRES",
      "LAS LECHUZAS",
      "LAS TACANAS",
      "LAS TRAMPAS",
      "LOS RASTROJITOS",
      "TALAPAMPA"
    ],
    "LAS LAJITAS": [
      "ALTO BELLO",
      "CABEZA DE ANTA",
      "EL FUERTE",
      "EL GRAMILLAL",
      "EL LIBANO",
      "EL MOLINO",
      "EL PIQUETE",
      "EL REY",
      "ESTANCIA VIEJA DEL REY",
      "FINCA EL MOLLAR",
      "LA FLORIDA",
      "LAS LAJITAS",
      "LAS VIBORAS",
      "LOS NOGALES",
      "LOS NOQUES",
      "MIRAFLORES",
      "OVEJERIA",
      "PALERMO",
      "PANTANILLO",
      "PASO DE LA CRUZ",
      "REINA DEL VALLE",
      "RIO DEL VALLE",
      "RIO SECO",
      "SALADILLO DE JUAREZ",
      "SAN GABRIEL"
    ],
    "LOS TOLDOS": [
      "ARAZAY",
      "LA MISION",
      "LOS TOLDOS"
    ],
    "METAN": [
      "EL GARABATAL",
      "EL GUANACO",
      "EL PASTIADERO",
      "LA AGUADITA",
      "LAS CONCHAS",
      "LAS JUNTAS",
      "LOS LAPACHOS",
      "METAN VIEJO",
      "NOGALITO",
      "PUNTA DEL AGUA",
      "SACHA PERA",
      "SAN JOSE DE METAN",
      "SANTA MARIA",
      "VERA CRUZ"
    ],
    "MOLINOS": [
      "AGUADITA",
      "ALUMBRE",
      "AMAICHA",
      "BANDA GRANDE",
      "COCHIYACO",
      "COLOME",
      "COMPUEL",
      "CUCHIYACO",
      "EL CHURCAL",
      "LA PUERTA",
      "LURACATAO",
      "MOLINOS",
      "SAN LUCAS",
      "TACUIL"
    ],
    "NAZARENO": [
      "BACOYA",
      "BARITU",
      "CAMPO LA CRUZ",
      "CUESTA AZUL",
      "EL MOLINO DE CUESTA AZUL",
      "EL PABELLON",
      "KELLOTICAR",
      "LIPEO",
      "NAZARENO",
      "POSCAYA",
      "SAN F. DE TUCTUCA",
      "SAN JUANCITO",
      "SAN MARCOS"
    ],
    "PAYOGASTA": [
      "BUENA VISTA",
      "LAS CORTADERAS",
      "PAYOGASTA",
      "PIUL",
      "POTRERO DE PAYOGASTA",
      "POZO BRAVO",
      "SAN GERONIMO",
      "TONCO"
    ],
    "PICHANAL": [
      "BELLA VISTA",
      "BORDO LA ESQUINA",
      "BUENA VISTA",
      "CAMPO LARGO",
      "EL CARMEN",
      "EL MISTOL",
      "EL QUEBRACHAL",
      "EL TOTORAL",
      "GUAYACAN",
      "JERONIMO MATORRAS",
      "LA ESQUINA",
      "LA ESTRELLA",
      "LA PAJA",
      "LA PROVIDENCIA",
      "LOS POCITOS",
      "MANUEL ELORDI",
      "MARTINEZ DEL TINEO",
      "MORTERITO",
      "PALO SANTO",
      "PICHANAL",
      "POZO AZUL",
      "POZO CERCADO",
      "POZO LA ESQUINA",
      "PUESTO DEL MEDIO",
      "TRES POZOS"
    ],
    "PROFESOR SALVADOR MAZZA": [
      "CAMPO DURAN",
      "EL ALGARROBAL",
      "EL CHORRO",
      "EL OCULTO",
      "PLAYA ANCHA",
      "PROFESOR SALVADOR MAZZA",
      "SAUZAL",
      "TUYUNTI",
      "YERBA BUENA"
    ],
    "RIO PIEDRAS": [
      "ARENALES",
      "LUMBRERAS",
      "RIO PIEDRAS"
    ],
    "RIVADAVIA BANDA NORTE": [
      "ALTO VERDE",
      "BALBUENA",
      "BELLA VISTA",
      "BUENA VISTA",
      "CAMPO ALEGRE",
      "CAMPO ARGENTINO",
      "CAPITAN JUAN PAGE",
      "CASAS VIEJAS",
      "CORONEL JUAN SOLA",
      "DOS YUCHANES",
      "EL AZUL",
      "EL BOTIN",
      "EL CAMPAMENTO",
      "EL CARANCHO",
      "EL CARPINTERO",
      "EL CHIVIL",
      "EL CHORRO",
      "EL CIENEGO",
      "EL COLETO",
      "EL CORTADERAL",
      "EL DESEMBOQUE",
      "EL ESCONDIDO",
      "EL ESPINILLO",
      "EL GANSO",
      "EL GRITAO",
      "EL MADREJON",
      "EL NARANJO",
      "EL PARAISO",
      "EL PERGAMINO",
      "EL PERTIGO",
      "EL PORONGAL",
      "EL POTRERITO",
      "EL PUESTITO",
      "EL PUESTO",
      "EL QUEBRACHO",
      "EL QUEJON",
      "EL QUIRQUINCHO",
      "EL RONDADERO",
      "EL ROSARIO",
      "EL SALADO",
      "EL SAUZAL",
      "EL SUNCHAL",
      "EL TALAR",
      "EL TARTAGAL",
      "EL TRAMPEADERO",
      "EL TRASLADO",
      "EL YACON",
      "FINCA LA ARGENTINA",
      "FINCA RESISTENCIA",
      "FORTALEZA",
      "FORTIN BELGRANO",
      "LA BOLSA",
      "LA BREA",
      "LA ELENITA",
      "LA ENSENADA",
      "LA ENTRADA",
      "LA ESPERANZA",
      "LA IGUANA",
      "LA INVERNADA",
      "LA JUNTA",
      "LA LOMA",
      "LA MESADA",
      "LA MORA (FINCA)",
      "LA PALMITA",
      "LA PROVIDENCIA",
      "LA RINCONADA",
      "LA SALVACION",
      "LA TRAMPA",
      "LA VICTORIA",
      "LAS DELICIAS",
      "LAS HORQUETAS",
      "LAS HORQUETASAS",
      "LAS JUNTAS",
      "LAS MARAVILLAS",
      "LOS BALDES",
      "LOS BLANCOS",
      "LOS NOGALES",
      "LOS RANCHITOS",
      "MONTE RICO",
      "MONTEVIDEO",
      "PALMAR",
      "PALO SANTO",
      "PLUMA DE PATO",
      "POZO DE ALGARROBO",
      "POZO DEL SAUCE",
      "POZO EL ANTA",
      "POZO EL CHAÑAR",
      "POZO EL MULATO",
      "PUESTO EL PANCHO",
      "SAN AGUSTIN",
      "SAN ANTONIO",
      "SAN MARTIN",
      "SAN NICOLAS",
      "SAN PATRICIO",
      "SAN ROQUE",
      "TRES DE MAYO"
    ],
    "RIVADAVIA BANDA SUR": [
      "AGUAS MUERTAS",
      "BUEN LUGAR",
      "CIERVO CANSADO",
      "EL AZOTADO",
      "EL BREAL",
      "EL CERCADO",
      "EL CIELITO",
      "EL COCAL",
      "EL DESTIERRO",
      "EL DIVISADERO",
      "EL LECHERON",
      "EL LINDERO",
      "EL MILAGRO",
      "EL MIRADOR",
      "EL OCULTAR",
      "EL PESCADERO",
      "EL PORVENIR",
      "EL RETIRO",
      "EL TIMON",
      "EL TOBA",
      "EL TOTORAL",
      "EL VALLE",
      "EL VINALAR",
      "EL YACARE",
      "FINCA SANTA ROSA",
      "LA CARNEADA",
      "LA FORTUNA",
      "LA LAGUNA",
      "LA MEDIA LUNA (FINCA)",
      "LA REPRESA",
      "LA SIBERIA",
      "LA SOTA",
      "LA TOMA",
      "LA UNION",
      "LAS BARRANCAS",
      "LAS BOLSAS",
      "LAS FLORES",
      "LAS LLAVES",
      "LAS TORTUGAS",
      "LOS NARANJOS",
      "LOS TRES POZOS",
      "MARTIN GARCIA",
      "MIRAFLORES",
      "MISION SAN FELIPE",
      "MONTE ALTO",
      "PALMARCITO",
      "PELICANO QUEMADO",
      "POZO DEL ZORRO",
      "POZO LARGO",
      "POZO VERDE",
      "PUESTO VIEJO",
      "RIVADAVIA",
      "SAN ANICETO",
      "SAN FERMIN",
      "SAN GABRIEL",
      "SAN JOSE",
      "SAN MANUEL",
      "SANTA CRUZ",
      "SANTA ROSA",
      "SANTA TERESA",
      "TERNERA ATADA",
      "TRES HORCONES",
      "TRES POZOS",
      "VILLA PETRONA"
    ],
    "ROSARIO DE LA FRONTERA": [
      "ARENAL VIEJO",
      "BAJADA GRANDE",
      "BALBOA",
      "CABAS",
      "CAMARA",
      "CANTA RANA",
      "EL ALGORROBAL",
      "EL CAJON",
      "EL CEIBAL",
      "EL NARANJO",
      "EL PALOMAR",
      "EL PORTEZUELO",
      "EL PORVENIR",
      "HORCONES",
      "LA BANDA",
      "LA BEBIDA",
      "LA CARRERA",
      "LA CIENAGA",
      "LA FEDERACION",
      "LA HOYADA",
      "LA LAGUNA",
      "LAS DELICIAS",
      "LAS MESILLAS",
      "LAS MOJARRAS",
      "LOS CHURQUIS",
      "LOS COLORADOS",
      "LOS SAUCES",
      "OJO DE AGUA",
      "POZO VERDE",
      "ROSARIO DE LA FRONTERA",
      "SAN FELIPE",
      "SAN ISIDRO",
      "SANTA ISABEL"
    ],
    "ROSARIO DE LERMA": [
      "CARABAJAL",
      "CERRO NEGRO DE TIRAO",
      "CORRALITO",
      "EL PUCARA",
      "EL TIMBO",
      "LA MERCED DE ARRIBA",
      "LA MERCED DEL ENCON",
      "ROSARIO DE LERMA",
      "VILLA MERCEDES (FINCA)"
    ],
    "SALTA": [
      "CC EL TIPAL",
      "CC LA ALMUDENA",
      "CHAMICAL",
      "EL CEIBALITO",
      "LA HIGUERA",
      "LA QUESERA",
      "LA TROJA",
      "LA UNION",
      "SALTA",
      "SAN FRANCISCO"
    ],
    "SAN ANTONIO DE LOS COBRES": [
      "ACAZOQUE",
      "AGUA DE CASTILLA",
      "CARACHI",
      "CHORRILLOS",
      "CONDOR HUASI",
      "CORRALITOS",
      "EL RINCON",
      "OLACAPATO",
      "SALAR DE POCITOS",
      "SAN ANTONIO DE LOS COBRES",
      "SANTA ROSA DE LOS PASTOS GRANDES",
      "TOLAR CHICO",
      "TORON"
    ],
    "SAN CARLOS": [
      "AMBLAYO",
      "ISONZA",
      "LAS BARRANCAS",
      "LAS CORTADERAS",
      "OVEJERIA",
      "PALO PINTADO",
      "PAYOGASTILLA",
      "RIO SALADO",
      "RUMIARCO",
      "SALADILLO",
      "SAN CARLOS",
      "SAN FELIPE",
      "SAN LUCAS",
      "SAN RAFAEL"
    ],
    "SAN LORENZO": [
      "ATOCHA",
      "BARRIO SAN RAFAEL",
      "CASTELLANOS",
      "LA CIENAGA",
      "LAS COSTAS",
      "VILLA SAN LORENZO"
    ],
    "SAN RAMON DE LA NUEVA ORAN": [
      "ABRA GRANDE",
      "ANTA MUERTA",
      "CANDADO",
      "COLONIA G",
      "FINCA EL CEDRAL",
      "LOS NARANJOS",
      "PARANI",
      "RIO PESCADO",
      "SAN AGUSTIN",
      "SAN ANDRES",
      "SAN RAMON DE LA NUEVA ORAN",
      "SANTA CRUZ",
      "SANTA MARIA",
      "TABLADA"
    ],
    "SANTA VICTORIA ESTE": [
      "AGUA VERDE",
      "ALTO DE LA SIERRA",
      "AMBERES",
      "BAJO GRANDE",
      "CAMPO LARGO",
      "EL PALMAR",
      "EL PELICANO",
      "EL ROSADO",
      "EL SAUCE",
      "HITO 1",
      "LA CHINA",
      "LA CURVITA",
      "LA ESTRELLA",
      "LA GRACIA",
      "LA MERCED",
      "LA PAZ",
      "LA PUNTANA",
      "LAS MOJARRAS",
      "LAS VERTIENES",
      "MAGDALENA",
      "MISION LA PAZ",
      "MISION SAN LUIS",
      "MONTE CARMELO",
      "POZO BRAVO",
      "POZO DEL TORO",
      "POZO EL BRAVO",
      "POZO EL TIGRE",
      "POZO EL TORO",
      "SAN BERNARDO",
      "SAN M. DE LA CEIBA",
      "SAN MIGUEL",
      "SANTA ELENA",
      "SANTA MARIA",
      "SANTA VICTORIA ESTE"
    ],
    "SANTA VICTORIA OESTE": [
      "ABRA DE SAN ANTONIO",
      "ABRA DE SANTA CRUZ",
      "ACOYTE",
      "ANTIGAL",
      "CAMPO LA PAZ",
      "CHORRO",
      "EL PUESTO",
      "HORNILLOS",
      "LA FALDA",
      "LA HUERTA",
      "LA SOLEDAD",
      "LAGUNA",
      "LIZOITE",
      "MECOYITA",
      "PUCALLPA",
      "PUCARA",
      "PUEBLO VIEJO",
      "RODEO PAMPA",
      "SAN FELIPE",
      "SAN FRANCISCO",
      "SAN JOSE",
      "SAN JOSE DE AGUILAR",
      "SANTA CRUZ",
      "SANTA CRUZ DE AGUILAR",
      "SANTA VICTORIA"
    ],
    "SECLANTAS": [
      "SECLANTAS",
      "SECLANTAS ADENTRO"
    ],
    "TARTAGAL": [
      "BARRIO EL MILAGRO",
      "BOBADAL",
      "EL DESIERTO",
      "EL ESCONDIDO",
      "EL SAUZAL",
      "MISION CHERENTA",
      "MISION EL CRUCE",
      "MISION KILOMETRO 6",
      "PACARA",
      "PALO BLANCO",
      "SAN RAMON",
      "TARTAGAL",
      "TONONO",
      "TRANQUITAS",
      "TRES POZOS",
      "YACUY",
      "YARIGUARENDA",
      "ZANJA HONDA"
    ],
    "TOLAR GRANDE": [
      "ABRA NAVARRO",
      "CAIPE",
      "CHUCULAQUI",
      "QUEBRADA DEL AGUA",
      "SOCOMPA",
      "TACA TACA",
      "TOLAR GRANDE",
      "VEGA DE ARIZARO"
    ],
    "URUNDEL": [
      "URUNDEL"
    ],
    "VAQUEROS": [
      "LESSER",
      "LOS YACONES",
      "VAQUEROS"
    ]
  },
  "SAN JUAN": {
    "25 DE MAYO": [
      "CUATRO ESQUINAS",
      "DIVISORIA",
      "EL ENCON",
      "ESTACION ALGARROBO VERDE",
      "ESTACION PUNTA DEL AGUA",
      "LA CHIMBERA",
      "LA TRANCA",
      "LAS CASUARINAS",
      "POZO DEL SALADO",
      "TUPELI",
      "VILLA BORJAS",
      "VILLA EL TANGO",
      "VILLA SANTA ROSA"
    ],
    "9 DE JULIO": [
      "9 DE JULIO",
      "COLONIA FIORITO",
      "LA MAJADITA",
      "LAS CHACRITAS",
      "RINCON CERCADO"
    ],
    "ALBARDON": [
      "CAMPO AFUERA",
      "EL RINCON",
      "EL SALADO",
      "EL TOPON",
      "FINCA EL SALADO",
      "LA CAÑADA",
      "LAS PIEDRITAS",
      "LAS TAPIAS",
      "OBISPO ZAPATA",
      "TIERRA ADENTRO",
      "VILLA AMPACAMA",
      "VILLA GENERAL SAN MARTIN"
    ],
    "ANGACO": [
      "EL ALAMITO",
      "EL BOSQUE",
      "LAS TAPIAS",
      "PUNTA DEL MONTE",
      "VILLA EL SALVADOR",
      "VILLA SEFAIR (TALACASTO)"
    ],
    "CALINGASTA": [
      "ALCAPARROSA",
      "BARREAL",
      "BELLA VISTA",
      "CALINGASTA",
      "COLON",
      "EL LEONCITO",
      "HILARIO",
      "LA ALUMBRERA",
      "LA ISLA",
      "PUCHUZUN",
      "SOROCAYENSE",
      "TAMBERIAS",
      "TIRA LARGA",
      "VILLA CORRAL",
      "VILLA NUEVA",
      "VILLA PITUIL"
    ],
    "CAUCETE": [
      "BARRIO JUSTO P. CASTRO IV",
      "BERMEJO",
      "CAUCETE",
      "DIVISORIA",
      "EL RINCON",
      "LA PUNTILLA",
      "LAGUNA SECA",
      "LAS CHACRAS",
      "LAS CHACRAS MARAYES",
      "LAS LIEBRES",
      "LAS TALAS",
      "LOS MEDANOS",
      "MARAYES",
      "PIE DE PALO",
      "POZO DE LOS ALGARROBOS",
      "VALLECITO",
      "VILLA INDEPENDENCIA"
    ],
    "CHIMBAS": [
      "BARRIO PARQUE IDUSTRIAL",
      "BARRIO PARQUE INDEPENDENCIA",
      "CHIMBAS",
      "EL MOGOTE",
      "VILLA OBRERA",
      "VILLA OBSERVATORIO",
      "VILLA PAULA ALBARRACIN",
      "VILLA SARMIENTO",
      "VILLA UNION"
    ],
    "IGLESIA": [
      "ACHANGO",
      "ANGUALASTO",
      "BAUCHACETA",
      "BELLA VISTA",
      "EL RETIRO",
      "FIERRO NUEVO",
      "FIERRO VIEJO",
      "GUARDIA VIEJA",
      "IGLESIA",
      "LAS FLORES",
      "MALIMAN DE ABAJO",
      "MALIMAN DE ARRIBA",
      "MONDACA",
      "PISMANTA",
      "RODEO",
      "TOCOTA",
      "TUDCUM",
      "ZONDA"
    ],
    "JACHAL": [
      "BELLA VISTA",
      "BOCA DE LA QUEBRADA",
      "CRUZ DE PIEDRA",
      "DIQUE PACHIMOCO",
      "EL FISCAL",
      "EL MEDANO",
      "EL VOLCAN",
      "GRAN CHINA",
      "GUALCAMAYO",
      "HUACO",
      "INDIO MUERTO",
      "LA CIENAGA",
      "LA FALDA",
      "LA FRONTERA",
      "LA TOMA",
      "LAS AGUADITAS",
      "LOS PUESTOS",
      "MOGNA",
      "NIQUIVIL",
      "NIQUIVIL VIEJO",
      "OTRA BANDA",
      "PAMPA VIEJA",
      "PANACAN",
      "SAN ISIDRO",
      "SAN JOSE DE JACHAL",
      "TAMBERIAS",
      "VILLA MALVINAS ARGENTINAS",
      "VILLA MERCEDES"
    ],
    "POCITO": [
      "BARRIO MUNICIPAL",
      "BARRIO RUTA 40",
      "CAMPO DE BATALLA",
      "CARPINTERIA",
      "COLONIA CANTONI",
      "EL ABANICO",
      "ESTACION SANCHEZ DE LORIA",
      "LA CALLECITA",
      "LA RINCONADA",
      "LAS PIEDRITAS",
      "QUINTO CUARTEL",
      "SEGUNDO CUARTEL",
      "VILLA ABERASTAIN",
      "VILLA AEROPUERTO",
      "VILLA BARBOZA",
      "VILLA CABECERA",
      "VILLA CENTENARIO",
      "VILLA NACUSI"
    ],
    "RAWSON": [
      "COLONIA MEDANO DE ORO",
      "COLONIA PAN DE AZUCAR",
      "COLONIA RODAS",
      "EL MEDANITO",
      "LOS CORREDORES",
      "RAWSON",
      "VILLA BOLAÑOS",
      "VILLA KRAUSE",
      "VILLA SAN DAMIAN"
    ],
    "RIVADAVIA": [
      "BARRIO CAMUS",
      "BARRIO FORTABAT",
      "JARDIN DE LOS POETAS",
      "MARQUESADO",
      "RIVADAVIA",
      "VILLA NUEVA ARGENTINA"
    ],
    "SAN JUAN": [
      "SAN JUAN"
    ],
    "SAN MARTIN": [
      "BARRIO SADOP",
      "BOCA DEL TIGRE",
      "DOS ACEQUIAS",
      "LA PUNTILLA",
      "LOS COMPARTOS",
      "SAN ISIDRO",
      "VILLA DOMINGUITO",
      "VILLA DON BOSCO",
      "VILLA EL SALVADOR",
      "VILLA SAN MARTIN"
    ],
    "SANTA LUCIA": [
      "ALTO DE SIERRA",
      "BARRIO BERMEJITO",
      "COLONIA GUTIERREZ",
      "COLONIA RICHET ZAPATA",
      "LA LEGUA",
      "LAS PIEDRITAS",
      "SANTA LUCIA"
    ],
    "SARMIENTO": [
      "CAÑADA HONDA",
      "CIENAGUITA",
      "COLONIA FISCAL",
      "COLONIA SAN ANTONIO",
      "DIVISADERO",
      "ESTACION COCHAGUAL",
      "GUANACACHE",
      "LAS LAGUNAS",
      "LOS BERROS",
      "PEDERNAL",
      "PUNTA DEL MEDANO",
      "SAN CARLOS",
      "TRES ESQUINAS",
      "VILLA MEDIA AGUA"
    ],
    "ULLUM": [
      "DIQUE ULLUM",
      "EL CHILOTE",
      "VILLA IBAÑEZ"
    ],
    "VALLE FERTIL": [
      "AGUA CERCADA",
      "ASTICA",
      "BALDE DEL ROSARIO",
      "BALDES DE LA CHILCA",
      "BALDES DEL NORTE",
      "CHUCUMA",
      "COLONIA LOS VALECIANOS",
      "LA HUERTA",
      "LA MAJADITA",
      "LAS JUNTAS",
      "LOS BALDECITOS",
      "LOS BRETES",
      "RINCON CHICO",
      "SAN ANTONIO",
      "SANTO DOMINGO",
      "SIERRA DE ELIZONDO",
      "USNO",
      "VILLA SAN AGUSTIN"
    ],
    "ZONDA": [
      "LOS PARAMILLOS",
      "PACHACO",
      "VILLA BASILIO NIEVAS",
      "VILLA TACU",
      "ZONDA ARRIBA"
    ]
  },
  "SAN LUIS": {
    "ALTO PELADO": [
      "ALTO PELADO",
      "HUEJEDA"
    ],
    "ALTO PENCOSO": [
      "ALTO PENCOSO"
    ],
    "ANCHORENA": [
      "ANCHORENA"
    ],
    "AREA SIN GOBIERNO": [
      "5TA BRIGADA",
      "ARBOL SOLO",
      "BAJO DE VELIZ",
      "BALDE DE AZCURRA",
      "BALDE DE LOS TORRES",
      "BALDE DE QUINES",
      "BALDE DEL CARMEN",
      "BALDE RETAMO",
      "BALDE ULTIMO",
      "BALDE VIEJO",
      "BALDECITO DE LA PAMPA",
      "BARRANCA ALTA",
      "BELLA ESTANCIA",
      "BELLA VISTA",
      "BUEN ORDEN",
      "CABEZA DE NOVILLO",
      "CABEZA DE VACA",
      "CALDENADAS",
      "CASA DE LOS TIGRES",
      "CERRITO BLANCO",
      "CERROS LARGOS",
      "CHALANTA",
      "CHARLONE",
      "CHOSMES",
      "CIENAGA DE INTIHUASI",
      "COLONIA CALZADA",
      "COLONIA DON ANTONIO",
      "COLONIA URDANIZ",
      "COLONIA ZUBELZU",
      "COMANDANTE GRANVILLE",
      "CONLARA",
      "CORONEL ALZOGARAY",
      "COUNTRY CLUB LOS CALDENES",
      "CRAMER",
      "CUATRO ESQUINAS",
      "DANIEL DONOVAN",
      "DONADO",
      "EL AGUILA",
      "EL ALGARROBAL",
      "EL ARENAL",
      "EL BALDECITO",
      "EL BARRIAL",
      "EL CALDEN",
      "EL CHARABON",
      "EL DIVISADERO",
      "EL ESPINILLO",
      "EL GUANACO",
      "EL INJERTO",
      "EL JARILLAL",
      "EL MANANTIAL",
      "EL MATACO",
      "EL MILAGRO",
      "EL MOLLE",
      "EL PARAGUAY",
      "EL PARAISO",
      "EL PEDERNAL",
      "EL PORTEZUELO",
      "EL RAMBLON",
      "EL RECODO",
      "EL RECUERDO",
      "EL RETAMAL",
      "EL RINCON",
      "EL RODEO",
      "EL TALA",
      "EL VALLE",
      "EL VINAGRILLO",
      "EL ZAMPAL",
      "ELEODORO LOBOS",
      "ESTANCIA DE AMIEVA",
      "FRISIA",
      "GORGONTA",
      "GUANACO PAMPA",
      "HUALTARAN",
      "INTIHUASI",
      "JUAN W. GEZ",
      "LA AGUADA",
      "LA ANGELINA",
      "LA AVENENCIA",
      "LA BAJADA",
      "LA BOTIJA",
      "LA CELESTINA",
      "LA CHILCA",
      "LA COCHA",
      "LA ESQUINA",
      "LA ESTRELLA",
      "LA FLORIDA",
      "LA FORTUNA",
      "LA GRAMILLA",
      "LA HUERTA",
      "LA IRENE",
      "LA ISLA",
      "LA MAROMA",
      "LA PETRA",
      "LA PLATA",
      "LA PRIMAVERA",
      "LA RAMADA",
      "LA REPRESITA",
      "LA ROSADA",
      "LA SALVADORA",
      "LA SUIZA",
      "LA TOTORA",
      "LA TRANCA",
      "LA VERDE",
      "LAS BARRANCAS",
      "LAS CHIMBAS",
      "LAS CLARITAS",
      "LAS GAMAS",
      "LAS ISLETAS",
      "LAS LAGUNITAS",
      "LAS MESTIZAS",
      "LAS PIEDRITAS",
      "LAS TOSQUITAS",
      "LAS VIZCACHERAS",
      "LIBORIO LUNA",
      "LOMA ALTA",
      "LOMAS BLANCAS",
      "LOS ARADITOS",
      "LOS CERRILLOS",
      "LOS COMEDEROS",
      "LOS CONDORES",
      "LOS LOBOS",
      "LOS MOLLES",
      "LOS OVEROS",
      "LOS POZOS",
      "LOS PUQUIOS",
      "LOS QUEBRACHOS",
      "LOS QUEMADOS",
      "LOS RAMBLONES",
      "MANANTIAL",
      "MARMOL VERDE",
      "MARTIN DE LOYOLA",
      "MESILLA DEL CURA",
      "MONTE CARMELO",
      "MOSMOTA",
      "NAHUEL MAPA",
      "NARANJO ESQUINO",
      "NUEVA CONSTITUCION",
      "NUEVA ESCOCIA",
      "OJO DE AGUA",
      "OJO DEL RIO",
      "PAMPA GRANDE",
      "PASO DE LAS CARRETAS",
      "PASO DE LAS VACAS",
      "PEDERNERA",
      "PESCADORES",
      "PIEDRA BOLA",
      "PLANTA DE SANDIA",
      "POTRERILLO",
      "POZO CAVADO",
      "POZO DEL TALA",
      "PUERTA COLORADA",
      "PUNTA DE LA LOMA",
      "PUNTA DEL CERRO",
      "REPRESA DEL CARMEN",
      "RINCON DEL CARMEN",
      "RIO QUINTO",
      "RODEO DE CADENAS",
      "SAN ANTONIO",
      "SAN FELIPE",
      "SAN FERNANDO",
      "SAN GREGORIO",
      "SAN IGNACIO",
      "SAN ISIDRO",
      "SAN MARTIN DEL ALTO NEGRO",
      "SAN MIGUEL",
      "SAN PEDRO",
      "SAN ROQUE",
      "SAN VICENTE",
      "SANTA ANA",
      "SANTA CECILIA",
      "SANTA MARTINA",
      "SANTA RITA",
      "SANTA ROSA",
      "SANTA ROSA DE CATANTAL",
      "SANTA ROSA DEL GIGANTE",
      "SANTA TERESA",
      "SANTO DOMINGO",
      "SOVEN",
      "SUYUQUE NUEVO",
      "TALITA",
      "TORO NEGRO",
      "VALLE DE PANCANTA",
      "VARELA",
      "VILLA REYNOLDS"
    ],
    "ARIZONA": [
      "ARIZONA"
    ],
    "BAGUAL": [
      "BAGUAL"
    ],
    "BALDE": [
      "BALDE",
      "SALINAS DEL BEBEDERO"
    ],
    "BATAVIA": [
      "BATAVIA"
    ],
    "BEAZLEY": [
      "BEAZLEY",
      "LAS HORQUETAS"
    ],
    "BUENA ESPERANZA": [
      "BUENA ESPERANZA"
    ],
    "CANDELARIA": [
      "CANDELARIA",
      "LA MODERNA",
      "SANTA MARIA"
    ],
    "CAROLINA": [
      "CAROLINA"
    ],
    "CARPINTERIA": [
      "CARPINTERIA"
    ],
    "CONCARAN": [
      "CONCARAN",
      "EL CHURRASCO",
      "EL SAUCE",
      "EL SIFON"
    ],
    "CORTADERAS": [
      "BALCARCE",
      "CORTADERAS"
    ],
    "DESAGUADERO": [
      "DESAGUADERO",
      "JARILLA"
    ],
    "EL TRAPICHE": [
      "BALDE DE LA ISLA",
      "EL TRAPICHE",
      "LAS PIRCAS",
      "PAMPA DEL TAMBOREO",
      "PASO DEL REY",
      "RIO GRANDE",
      "RIOCITO"
    ],
    "EL VOLCAN": [
      "EL VOLCAN"
    ],
    "ESTANCIA GRANDE": [
      "EL DURAZNO",
      "ESTANCIA GRANDE",
      "LAS BARRANQUITAS"
    ],
    "FORTIN EL PATRIA": [
      "FORTIN EL PATRIA"
    ],
    "FORTUNA": [
      "FORTUNA"
    ],
    "FRAGA": [
      "FRAGA"
    ],
    "JUAN JORBA": [
      "JUAN JORBA"
    ],
    "JUAN LLERENA": [
      "JUAN LLERENA"
    ],
    "JUANA KOSLAY": [
      "CERRO COLORADO",
      "CRUZ DE PIEDRA",
      "EL CHORRILLO",
      "LAS CHACRAS",
      "QUEBRADA DE LOS CONDORES",
      "SAN ROQUE"
    ],
    "JUSTO DARACT": [
      "JUSTO DARACT",
      "VILLA SALLES"
    ],
    "LA CALERA": [
      "LA CALERA"
    ],
    "LA PUNILLA": [
      "LA PUNILLA"
    ],
    "LA PUNTA": [
      "CIUDAD DE LA PUNTA",
      "POZO DEL CARRIL"
    ],
    "LA TOMA": [
      "LA TOMA"
    ],
    "LA VERTIENTE": [
      "9 DE JULIO",
      "EL RINCON",
      "LA VERTIENTE"
    ],
    "LAFINUR": [
      "LA LOMITA",
      "LAFINUR",
      "LOMITAS"
    ],
    "LAS AGUADAS": [
      "EL PUESTO",
      "LA CIENAGA",
      "LAS AGUADAS",
      "LOS MOLLES",
      "TALA VERDE"
    ],
    "LAS CHACRAS": [
      "EL CERRITO",
      "EL ESTANQUITO",
      "LA QUINTA",
      "LAS CHACRAS"
    ],
    "LAS LAGUNAS": [
      "LAS LAGUNAS"
    ],
    "LAVAISSE": [
      "LAVAISSE"
    ],
    "LEANDRO N ALEM": [
      "LA MAJADA",
      "LEANDRO N ALEM",
      "POZO DE LOS RAYOS",
      "TINTITACO"
    ],
    "LOS CAJONES": [
      "BALDE DE ESCUDERO",
      "LAS BARRANCAS",
      "LAS ISLITAS",
      "LAS PALOMAS",
      "LOS CAJONES",
      "SANTA ANA"
    ],
    "LOS MOLLES": [
      "LOS MOLLES"
    ],
    "LUJAN": [
      "LUJAN"
    ],
    "NACION RANQUEL": [
      "NACION RANQUEL"
    ],
    "NASCHEL": [
      "NASCHEL"
    ],
    "NAVIA": [
      "NAVIA"
    ],
    "NOGOLI": [
      "NOGOLI"
    ],
    "NUEVA GALIA": [
      "NUEVA GALIA"
    ],
    "PAPAGAYOS": [
      "EL RECUERDO",
      "PAPAGAYOS"
    ],
    "PASO GRANDE": [
      "PASO GRANDE"
    ],
    "POTRERO DE LOS FUNES": [
      "POTRERO DE LOS FUNES"
    ],
    "QUINES": [
      "EL ZAPALLAR",
      "LA AGUADA",
      "LA BREA",
      "QUINES"
    ],
    "RENCA": [
      "RENCA"
    ],
    "SALADILLO": [
      "SALADILLO",
      "SAN GREGORIO"
    ],
    "SAN FRANCISCO DEL MONTE DE ORO": [
      "CARPINTERIA",
      "LAS CHACRAS",
      "POZO DEL MOLLE",
      "SAN FRANCISCO DEL MONTE DE ORO"
    ],
    "SAN JERONIMO": [
      "SAN JERONIMO"
    ],
    "SAN JOSE DEL MORRO": [
      "SAN JOSE DEL MORRO"
    ],
    "SAN LUIS": [
      "BOCA DEL TIGRE",
      "LOS ALGARROBOS BLANCOS",
      "SAN LUIS"
    ],
    "SAN MARTIN": [
      "SAN MARTIN"
    ],
    "SAN PABLO": [
      "SAN PABLO"
    ],
    "SANTA ROSA DEL CONLARA": [
      "EL DURAZNITO",
      "SANTA ROSA DEL CONLARA"
    ],
    "TALITA": [
      "LAS PLAYAS",
      "TALITA"
    ],
    "TILISARAO": [
      "TILISARAO"
    ],
    "UNION": [
      "UNION"
    ],
    "VILLA DE LA QUEBRADA": [
      "VILLA DE LA QUEBRADA"
    ],
    "VILLA DE MERLO": [
      "CERRO DE ORO",
      "MERLO"
    ],
    "VILLA DE PRAGA": [
      "EL PARAISO",
      "LA PUERTA",
      "VILLA DE PRAGA"
    ],
    "VILLA DEL CARMEN": [
      "SAN MIGUEL",
      "VILLA DEL CARMEN"
    ],
    "VILLA GENERAL ROCA": [
      "VILLA GENERAL ROCA"
    ],
    "VILLA LA FLORIDA": [
      "LA FLORIDA"
    ],
    "VILLA LARCA": [
      "LAS ROSAS",
      "MINA LOS CONDORES",
      "SAN ANTONIO",
      "VILLA LARCA"
    ],
    "VILLA MERCEDES": [
      "DIQUE VULPIANI",
      "LA RIBERA",
      "LA RIVERA",
      "VILLA MERCEDES"
    ],
    "ZANJITAS": [
      "CAZADOR",
      "CAZADOR VIEJO",
      "LA COSTA",
      "ZANJITAS"
    ]
  },
  "SANTA CRUZ": {
    "28 DE NOVIEMBRE": [
      "28 DE NOVIEMBRE"
    ],
    "AREA SIN GOBIERNO": [
      "ALMA GAUCHA",
      "BAHIA LAURA",
      "BELLA VISTA",
      "CANCHA CARRERA",
      "CERRO LEON",
      "CHARLES FUHR",
      "EL CERRITO",
      "EL PORTEZUELO",
      "EL SALADO",
      "ESTANCIA EL CONDOR",
      "ESTANCIA GLENCROSS",
      "ESTANCIA LAS VEGAS",
      "ESTANCIA SAN RAMON",
      "FLORIDA NEGRA",
      "GAYPON",
      "GENDARME BARRETO",
      "GOBERNADOR MOYANO",
      "LA ARAGONESA",
      "LA BARRANCOSA",
      "LA ESPERANZA",
      "LA LEONA",
      "LA LOBERIA",
      "LA MANCHURIA",
      "LA PENINSULA",
      "LAGO CARDIEL",
      "LAGUNA GRANDE",
      "LAS HORQUETAS",
      "LAS TRES HERMANAS",
      "LE MARCHAND",
      "LOS MONOS",
      "MINERALES",
      "OCHO HERMANOS",
      "PAMPA ALTA",
      "PIEDRA CLAVADA",
      "PUENTE BLANCO",
      "PUERTO COIG",
      "PUNTA BANDERA",
      "RINCON",
      "TEHUELCHES",
      "TRES CERROS"
    ],
    "BAJO CARACOLES": [
      "BAJO CARACOLES"
    ],
    "CALETA OLIVIA": [
      "CALETA OLIVIA"
    ],
    "CAÑADON SECO": [
      "CAÑADON SECO"
    ],
    "COMANDANTE LUIS PIEDRA BUENA": [
      "COMANDANTE LUIS PIEDRABUENA"
    ],
    "EL CALAFATE": [
      "EL CALAFATE"
    ],
    "EL CHALTEN": [
      "EL CHALTEN"
    ],
    "EL TURBIO": [
      "EL TURBIO"
    ],
    "GOBERNADOR GREGORES": [
      "GOBERNADOR GREGORES"
    ],
    "JARAMILLO - FITZ ROY": [
      "FITZ ROY",
      "JARAMILLO"
    ],
    "JULIA DUFOUR": [
      "JULIA DUFOUR"
    ],
    "LAGO POSADAS": [
      "HIPOLITO YRIGOYEN"
    ],
    "LAS HERAS": [
      "LAS HERAS"
    ],
    "LOS ANTIGUOS": [
      "LOS ANTIGUOS"
    ],
    "MINA 3": [
      "MINA 3"
    ],
    "NUESTRA SEÑORA DE LOS DOLORES DE KOLUEL KAIKE": [
      "KOLUEL KAIKE"
    ],
    "PERITO MORENO": [
      "PERITO MORENO"
    ],
    "PICO TRUNCADO": [
      "PICO TRUNCADO"
    ],
    "PUERTO DESEADO": [
      "PUERTO DESEADO"
    ],
    "PUERTO SAN JULIAN": [
      "PUERTO SAN JULIAN"
    ],
    "PUERTO SANTA CRUZ": [
      "PUERTO SANTA CRUZ"
    ],
    "RIO GALLEGOS": [
      "RIO GALLEGOS"
    ],
    "RIO TURBIO": [
      "YACIMIENTOS RIO TURBIO"
    ],
    "ROSPENTEK": [
      "ROSPENTEK"
    ],
    "TELLIER": [
      "TELLIER"
    ],
    "TRES LAGOS": [
      "TRES LAGOS"
    ]
  },
  "SANTA FE": {
    "AARON CASTELLANOS": [
      "AARON CASTELLANOS",
      "LA PICASA"
    ],
    "ACEBAL": [
      "ACEBAL"
    ],
    "AGUARA GRANDE": [
      "AGUARA GRANDE",
      "LA ALICIA"
    ],
    "ALBARELLOS": [
      "ALBARELLOS"
    ],
    "ALCORTA": [
      "ALCORTA"
    ],
    "ALDAO": [
      "ALDAO"
    ],
    "ALEJANDRA": [
      "ALEJANDRA",
      "COLONIA ALEJANDRA",
      "COLONIA LA MARIA",
      "EL CEIBO",
      "EL PROGRESO",
      "LOS CORRALITOS",
      "LOS CUERVOS",
      "LOS JACINTOS",
      "VILLA SAN ANTONIO"
    ],
    "ALVAREZ": [
      "ALVAREZ",
      "EL CARAMELO"
    ],
    "ALVEAR": [
      "ALVEAR",
      "ARBILLA",
      "KILOMETRO 101",
      "MONTE FLORES"
    ],
    "AMBROSETTI": [
      "ACHAVAL RODRIGUEZ",
      "AMBROSETTI"
    ],
    "AMENABAR": [
      "AMENABAR",
      "CAMPO CULLAK",
      "COLONIA FALUCHO",
      "ESTANCIA EL ABOLENGO"
    ],
    "ANGELICA": [
      "ANGELICA",
      "CAMPO BAUDINO",
      "CAMPO MORELLO"
    ],
    "ANGELONI": [
      "ANGELONI",
      "LUCIANO LEIVA"
    ],
    "AREQUITO": [
      "AREQUITO",
      "COLONIA LA POSTA"
    ],
    "ARMINDA": [
      "ARMINDA"
    ],
    "ARMSTRONG": [
      "ARMSTRONG",
      "CAMPO SPAGNOLO"
    ],
    "AROCENA": [
      "AROCENA",
      "BARRIO EL PACAA - BARRIO COMIPINI"
    ],
    "ARROYO AGUIAR": [
      "ARROYO AGUIAR",
      "VILLA LAURA",
      "YAMANDU"
    ],
    "ARROYO CEIBAL": [
      "ARROYO CEIBAL",
      "CAMPO SAGER"
    ],
    "ARROYO LEYES": [
      "ARROYO LEYES",
      "RINCON NORTE",
      "RINCON POTRERO"
    ],
    "ARROYO SECO": [
      "ARROYO SECO",
      "PUERTO ARROYO SECO"
    ],
    "ARRUFO": [
      "ARRUFO",
      "SAN RAFAEL"
    ],
    "ARTEAGA": [
      "ARTEAGA"
    ],
    "ATALIVA": [
      "ATALIVA",
      "EL BAYO"
    ],
    "AURELIA": [
      "AURELIA",
      "AURELIA NORTE"
    ],
    "AVELLANEDA": [
      "AVELLANEDA",
      "COLMENA",
      "EL CARMEN DE AVELLANEDA",
      "EL TIMBO",
      "LA VERTIENTE",
      "MOUSSY",
      "SANTA ANA"
    ],
    "BARRANCAS": [
      "BARRANCAS",
      "PUERTO ARAGON"
    ],
    "BAUER Y SIGEL": [
      "BAUER Y SIGEL",
      "CAMPO BORGARELLO",
      "CAMPO CANAVESIO"
    ],
    "BELLA ITALIA": [
      "BELLA ITALIA"
    ],
    "BERABEVU": [
      "BERAVEBU"
    ],
    "BERNA": [
      "BERNA",
      "CAMPO FURRER",
      "EL RICARDITO",
      "LA DIAMELA"
    ],
    "BERNARDO DE IRIGOYEN": [
      "BERNARDO DE IRIGOYEN",
      "CAMPO GENERO"
    ],
    "BIGAND": [
      "BIGAND"
    ],
    "BOMBAL": [
      "BOMBAL",
      "CAMPO CUCO"
    ],
    "BOUQUET": [
      "BOUQUET",
      "COLONIA LUSSINO"
    ],
    "BUSTINZA": [
      "BUSTINZA",
      "CAMPO MOSCA",
      "CAMPO UBINO"
    ],
    "CABAL": [
      "ARROYO VERDE",
      "CABAL"
    ],
    "CACIQUE ARIACAIQUIN": [
      "CACIQUE ARIACAIQUIN"
    ],
    "CAFERATA": [
      "CAFFERATA",
      "ESTACION EL CANTOR"
    ],
    "CALCHAQUI": [
      "CALCHAQUI",
      "CAMPO BARONI",
      "COLONIA DOÑA MARIANA",
      "DESVIO KM 213",
      "EL AROMAL",
      "ESTANCIA LAS AVES",
      "ESTANCIA SAN PEDRO",
      "LA HOSCA"
    ],
    "CAMPO ANDINO": [
      "CAMPO ANDINO",
      "LOS BRETES"
    ],
    "CAMPO PIAGGIO": [
      "CAMPO PIAGGIO"
    ],
    "CANDIOTI": [
      "CANDIOTI"
    ],
    "CAPITAN BERMUDEZ": [
      "CAPITAN BERMUDEZ"
    ],
    "CAPIVARA": [
      "CAPIVARA"
    ],
    "CARCARAÑA": [
      "CARCARAÑA"
    ],
    "CARLOS PELLEGRINI": [
      "CAMPO BUSSO",
      "CAMPO LA CALEDONIA",
      "CAMPO LAS MELLIZAS",
      "CAMPO MARIA TERESA",
      "CAMPO NICOLI",
      "CARLOS PELLEGRINI"
    ],
    "CARMEN": [
      "CARMEN",
      "RABIOLA"
    ],
    "CARMEN DEL SAUCE": [
      "CARMEN DEL SAUCE",
      "CUATRO ESQUINAS"
    ],
    "CARRERAS": [
      "CARRERAS"
    ],
    "CARRIZALES": [
      "CARRIZALES"
    ],
    "CASALEGNO": [
      "CASALEGNO"
    ],
    "CASAS": [
      "CAMPO CRAVERO",
      "CASAS"
    ],
    "CASILDA": [
      "CASILDA",
      "COLONIA CANDELARIA",
      "COLONIA DESMOCHADO AFUERA",
      "COLONIA LAS FLORES"
    ],
    "CASTELAR": [
      "CAMPO OROÑO",
      "CASTELAR"
    ],
    "CASTELLANOS": [
      "CASTELLANO PLAZA",
      "CASTELLANOS"
    ],
    "CAVOUR": [
      "CAVOUR",
      "COLONIA CAVOUR"
    ],
    "CAYASTA": [
      "CAYASTA",
      "LOS CERRILLOS"
    ],
    "CAYASTACITO": [
      "CAYASTACITO",
      "LA CLORINDA"
    ],
    "CAÑADA DE GOMEZ": [
      "CAMPO CARBONARI",
      "CAMPO CARDINI",
      "CAMPO IADANZA",
      "CAMPO LAS VASCAS",
      "CAMPO MARINSALTA",
      "CAMPO TORRIGLIA",
      "CAÑADA DE GOMEZ",
      "SAN ESTANISLAO"
    ],
    "CAÑADA DEL UCLE": [
      "CAÑADA DEL UCLE"
    ],
    "CAÑADA OMBU": [
      "CAÑADA OMBU"
    ],
    "CAÑADA RICA": [
      "CAÑADA RICA"
    ],
    "CAÑADA ROSQUIN": [
      "CAÑADA ROSQUIN",
      "COLONIA LA FRANCIA"
    ],
    "CENTENO": [
      "CENTENO"
    ],
    "CEPEDA": [
      "CEPEDA",
      "STEPHENSON"
    ],
    "CERES": [
      "CERES"
    ],
    "CHABAS": [
      "CHABAS"
    ],
    "CHAPUY": [
      "CHAPUY",
      "VILLA SOL DE MAYO"
    ],
    "CHAÑAR LADEADO": [
      "CHAÑAR LADEADO"
    ],
    "CHOVET": [
      "CHOVET",
      "VILLA DIVISA DE MAYO"
    ],
    "CHRISTOPHERSEN": [
      "CAMPANA",
      "CHRISTOPHERSEN",
      "COLONIA LA ARGENTINA CHICA",
      "LA CAMPANA"
    ],
    "CLASSON": [
      "CAMPO CALCATERRA",
      "CAMPO EL ENSAYO",
      "CAMPO LA GERMANIA",
      "CLASSON"
    ],
    "COLONIA ALDAO": [
      "ALDAO"
    ],
    "COLONIA ANA": [
      "COLONIA ANA"
    ],
    "COLONIA BELGRANO": [
      "COLONIA BELGRANO",
      "WILDERMUTH"
    ],
    "COLONIA BICHA": [
      "COLONIA BICHA"
    ],
    "COLONIA BIGAND": [
      "COLONIA BIGAND"
    ],
    "COLONIA BOSSI": [
      "COLONIA BOSSI"
    ],
    "COLONIA CELLO": [
      "COLONIA CELLO"
    ],
    "COLONIA DOLORES": [
      "COLONIA DOLORES"
    ],
    "COLONIA DURAN": [
      "CAMPO BERLI",
      "CAMPO HUBER",
      "COLONIA DURAN",
      "EL 94",
      "EL GUSANO"
    ],
    "COLONIA ITURRASPE": [
      "COLONIA ITURRASPE"
    ],
    "COLONIA MARGARITA": [
      "COLONIA MARGARITA"
    ],
    "COLONIA MASCIAS": [
      "COLONIA MASCIAS",
      "COLONIA SAN JOAQUIN"
    ],
    "COLONIA RAQUEL": [
      "COLONIA RAQUEL"
    ],
    "COLONIA ROSA": [
      "COLONIA ROSA"
    ],
    "COLONIA TERESA": [
      "COLONIA TERESA"
    ],
    "CONSTANZA": [
      "CONSTANZA"
    ],
    "CORONDA": [
      "COLONIA CORONDINA",
      "CORONDA"
    ],
    "CORONEL ARNOLD": [
      "CORONEL ARNOLD"
    ],
    "CORONEL BOGADO": [
      "COLONIA ESCRIBANO",
      "CORONEL BOGADO",
      "NAVARRO"
    ],
    "CORONEL DOMINGUEZ": [
      "CORONEL RODOLFO S. DOMINGUEZ",
      "EL CARMELO"
    ],
    "CORONEL FRAGA": [
      "CORONEL FRAGA"
    ],
    "CORREA": [
      "BERRETTA",
      "CORREA",
      "ESTACION BERRETA"
    ],
    "CRISPI": [
      "CAMPO SEVESO",
      "COLONIA LAS YERBAS",
      "CRISPI"
    ],
    "CULULU": [
      "CAMPO LA TERESITA",
      "CULULU"
    ],
    "CURUPAITY": [
      "CURUPAYTI"
    ],
    "DESVIO ARIJON": [
      "BARRIO CAIMA",
      "DESVIO ARIJON"
    ],
    "DIAZ": [
      "DIAZ"
    ],
    "DIEGO DE ALVEAR": [
      "DIEGO DE ALVEAR"
    ],
    "DOS ROSAS Y LA LEGUA": [
      "DOS ROSAS Y LA LEGUA"
    ],
    "EGUSQUIZA": [
      "CAPILLA FASSI",
      "EGUSQUIZA"
    ],
    "EL ARAZA": [
      "EL ARAZA"
    ],
    "EL RABON": [
      "CAMPO FIANT",
      "CAMPO STANGAFERRO",
      "EL RABON",
      "KILOMETRO 54"
    ],
    "EL SOMBRERITO": [
      "CAMPO MORZAN",
      "COLONIA EL YAGUARE",
      "COSTA RICA"
    ],
    "EL TREBOL": [
      "CAMPO GHIANO",
      "CAMPO RIBERI",
      "CAMPO ULLA",
      "EL TREBOL"
    ],
    "ELISA": [
      "ELISA"
    ],
    "ELORTONDO": [
      "ELORTONDO",
      "SANTA EMILIA"
    ],
    "EMILIA": [
      "EMILIA"
    ],
    "EMPALME SAN CARLOS": [
      "EMPALME SAN CARLOS"
    ],
    "EMPALME VILLA CONSTITUCION": [
      "BARRIO MITRE",
      "EL COLORADO",
      "EMPALME VILLA CONSTITUCION"
    ],
    "ESMERALDA": [
      "ESMERALDA"
    ],
    "ESPERANZA": [
      "COLONIA LARRECHEA",
      "COLONIA PUJOL",
      "ESPERANZA",
      "RINCON DEL PINTADO"
    ],
    "ESTACION CLUCELLAS": [
      "ESTACION CLUCELLAS"
    ],
    "ESTEBAN RAMS": [
      "ESTEBAN RAMS",
      "NUEVA ITALIA"
    ],
    "ESTHER": [
      "ESTHER"
    ],
    "EUSEBIA Y CAROLINA": [
      "EUSEBIA Y CAROLINA"
    ],
    "EUSTOLIA": [
      "EUSTOLIA"
    ],
    "FELICIA": [
      "FELICIA"
    ],
    "FIDELA": [
      "FIDELA"
    ],
    "FIGHIERA": [
      "FIGHIERA"
    ],
    "FIRMAT": [
      "COLONIA LOS TROJES",
      "FIRMAT"
    ],
    "FLORENCIA": [
      "CAMPO PUERTA",
      "CAMPO SPERANZA",
      "FLORENCIA"
    ],
    "FORTIN OLMOS": [
      "EL 17",
      "EL CAMPANAL",
      "EL CHAÑAR",
      "EL HISTORICO",
      "FORTIN CHARRUA",
      "FORTIN CHILCAS",
      "FORTIN OLMOS",
      "KILOMETRO 48",
      "LOS CHARABONES",
      "LOTE 12",
      "PARAJE 29",
      "PUEBLO LUIS BERLI"
    ],
    "FRANCK": [
      "FRANCK"
    ],
    "FRAY LUIS BELTRAN": [
      "FRAY LUIS BELTRAN"
    ],
    "FRONTERA": [
      "BARRIOS ACAPULCO Y VERACRUZ",
      "FRONTERA",
      "VILLA JOSEFINA"
    ],
    "FUENTES": [
      "FUENTES"
    ],
    "FUNES": [
      "FUNES"
    ],
    "GABOTO": [
      "BALNEARIO MONJE",
      "GABOTO"
    ],
    "GALISTEO": [
      "GALISTEO"
    ],
    "GALVEZ": [
      "GALVEZ"
    ],
    "GARABATO": [
      "GARABATO",
      "KILOMETRO 115",
      "LOS TRES POZOS",
      "POZO DE LOS INDIOS"
    ],
    "GARIBALDI": [
      "GARIBALDI"
    ],
    "GATO COLORADO": [
      "CAMPO EL DORMIDO",
      "EL SALITRAL",
      "FORTIN 6",
      "GATO COLORADO"
    ],
    "GENERAL GELLY": [
      "CAMPO FONDATO",
      "GENERAL GELLY"
    ],
    "GENERAL LAGOS": [
      "GENERAL LAGOS"
    ],
    "GESSLER": [
      "GESSLER"
    ],
    "GOBERNADOR CRESPO": [
      "GOBERNADOR CRESPO"
    ],
    "GODEKEN": [
      "GODEKEN"
    ],
    "GODOY": [
      "CAMPO LA VICTORIA",
      "GODOY",
      "ORATORIO MORANTE"
    ],
    "GOLONDRINA": [
      "GOLONDRINA"
    ],
    "GRANADERO BAIGORRIA": [
      "EL PRADO",
      "GRANADERO BAIGORRIA"
    ],
    "GREGORIA PEREZ DE DENIS": [
      "GREGORIA PEREZ DE DENIS",
      "LA CURVA"
    ],
    "GRUTLY": [
      "GRUTLY"
    ],
    "GUADALUPE NORTE": [
      "GUADALUPE NORTE"
    ],
    "HARDY": [
      "CAMPO HARDY"
    ],
    "HELVECIA": [
      "CAMPO DEL MEDIO",
      "COLONIA HELVECIA OESTE",
      "HELVECIA",
      "HELVECIA SUR",
      "LOS ALGARROBOS"
    ],
    "HERSILIA": [
      "HERSILIA"
    ],
    "HIPATIA": [
      "GRUTLY NORTE",
      "HIPATIA"
    ],
    "HUANQUEROS": [
      "BALNEARIO LA VERDE",
      "HUANQUEROS"
    ],
    "HUGENTOBLER": [
      "HUGENTOBLER"
    ],
    "HUGHES": [
      "HUGHES"
    ],
    "HUMBERTO PRIMO": [
      "CAMPO LA NIEVA",
      "CAMPO RODEO CHICO",
      "COLONIA REINA MARGARITA",
      "COLONIA ROCCIA",
      "HUMBERTO PRIMO"
    ],
    "HUMBOLDT": [
      "COLONIA NUEVA CENTRO",
      "COLONIA NUEVA NORTE",
      "HUMBOLDT"
    ],
    "IBARLUCEA": [
      "IBARLUCEA"
    ],
    "INGENIERO CHANOURDIE": [
      "ARROYO DEL REY",
      "ESTACION KILOMETRO 41",
      "INGENIERO CHANOURDIE",
      "LOS LAPACHOS",
      "TRES BOCAS",
      "TRES ISLETAS"
    ],
    "INTIYACO": [
      "COLMENA",
      "FLORIDA",
      "INTIYACO",
      "LOS LEONES",
      "MONTENEGRO"
    ],
    "IRIGOYEN": [
      "IRIGOYEN"
    ],
    "ITUZAINGO": [
      "ITUZAINGO"
    ],
    "JACINTO L": [
      "JACINTO L. ARAUZ"
    ],
    "JOSEFINA": [
      "CAMPO ALMENDRA",
      "CAPILLA VOTTERO",
      "JOSEFINA"
    ],
    "JUAN B MOLINA": [
      "CAMPO MUGUETA",
      "JUAN B. MOLINA"
    ],
    "JUAN DE GARAY": [
      "CAMPO GARAY"
    ],
    "JUNCAL": [
      "CAMPO SAN PEDRO",
      "JUNCAL"
    ],
    "LA BRAVA": [
      "LA BRAVA"
    ],
    "LA CABRAL": [
      "LA CABRAL",
      "PALOS NEGROS"
    ],
    "LA CAMILA": [
      "LA CAMILA"
    ],
    "LA CHISPA": [
      "LA CHISPA"
    ],
    "LA CRIOLLA": [
      "COLONIA LA BLANCA",
      "LA CRIOLLA",
      "LA NEVADA"
    ],
    "LA GALLARETA": [
      "CAMPO GIAUQUE",
      "CAMPO ROTELLA",
      "CAMPO SAN JOSE",
      "CAMPO TALEB",
      "EL 38",
      "EL PALMAR",
      "ESTACION KILOMETRO 213",
      "ESTANCIA EL PELUDO",
      "KM EL 13",
      "LA GALLARETA",
      "SAN ROBERTO"
    ],
    "LA LUCILA": [
      "LA LUCILA"
    ],
    "LA PELADA": [
      "LA PELADA"
    ],
    "LA PENCA Y CARAGUATA": [
      "COLONIA LA MORA",
      "LA PENCA Y CARAGUATA",
      "LA RINCONADA"
    ],
    "LA RUBIA": [
      "CAMPO EL MATACO",
      "LA RUBIA"
    ],
    "LA SARITA": [
      "COLONIA SAN MANUEL",
      "CUATRO BOCAS",
      "EL UNO -LA SARITA",
      "LA CAROLA",
      "LA SARITA",
      "LA SELVA",
      "LA VANGUARDIA",
      "PARAJE SAN MANUEL"
    ],
    "LA VANGUARDIA": [
      "LA VANGUARDIA"
    ],
    "LABORDEBOY": [
      "LABORDEBOY"
    ],
    "LAGUNA PAIVA": [
      "LAGUNA PAIVA"
    ],
    "LANDETA": [
      "COLONIALANDETA",
      "LANDETA"
    ],
    "LANTERI": [
      "CAMPO BONAZOLA",
      "CAMPO SIETE PROVINCIAS",
      "FLOR DE ORO",
      "FORTIN ARENALES",
      "LA BRITANICA",
      "LANTERI",
      "LAS TAPERITAS"
    ],
    "LARRECHEA": [
      "LARRECHEA"
    ],
    "LAS AVISPAS": [
      "LAS AVISPAS"
    ],
    "LAS BANDURRIAS": [
      "CAMPO CASTRO",
      "LAS BANDURRIAS"
    ],
    "LAS GARZAS": [
      "EL PALMAR",
      "EL TAPIALITO",
      "ISLA GUAYCURU",
      "LAS GARZAS"
    ],
    "LAS PALMERAS": [
      "LAS PALMERAS"
    ],
    "LAS PAREJAS": [
      "CAMPO ALBERTENGO",
      "CAMPO CHIODI",
      "COLONIA LOS TRONCOS",
      "ESTACION KILOMETRO 405",
      "LAS PAREJAS"
    ],
    "LAS PETACAS": [
      "LAS PETACAS",
      "SANTA ANITA"
    ],
    "LAS ROSAS": [
      "CAMPO EL RAFANGO",
      "CAMPO LA ORIENTAL",
      "CAMPO LA PRADERA",
      "CAMPO SANTA ISABEL",
      "COLONIA SAN ANTONIO",
      "ITURRASPE",
      "LA CALIFORNIA",
      "LAS ROSAS"
    ],
    "LAS TOSCAS": [
      "CAMPO WINKLER",
      "LAS TOSCAS"
    ],
    "LAS TUNAS": [
      "LAS TUNAS"
    ],
    "LAZZARINO": [
      "LAZZARINO"
    ],
    "LEHMANN": [
      "CAMPO GIACOSSA",
      "LEHMANN",
      "NUEVA LEHMANN"
    ],
    "LLAMBI CAMPBELL": [
      "AROMOS",
      "ESTANCIA LA MARKONIA",
      "LLAMBI CAMPBELL"
    ],
    "LOGROÑO": [
      "ESTANCIA LA FLORIDA",
      "INDEPENDENCIA",
      "LAS NORIAS",
      "LOGROÑO"
    ],
    "LOMA ALTA": [
      "LOMA ALTA"
    ],
    "LOPEZ": [
      "LOPEZ"
    ],
    "LOS AMORES": [
      "ESTACION KILOMETRO 302",
      "ESTANCIA EL TOURNE",
      "ESTANCIA EL ÑACURUTU",
      "ESTANCIA LA SOMBRILLA",
      "ESTANCIA LA VIRUELA",
      "LOS AMORES"
    ],
    "LOS CARDOS": [
      "CAMPO LA UNION",
      "LOS CARDOS"
    ],
    "LOS LAURELES": [
      "CAMPO MENDOZA",
      "LA ESMERALDA",
      "LAS AMINTAS",
      "LAS PALMAS",
      "LOS LAURELES"
    ],
    "LOS MOLINOS": [
      "CAMPO FORESSI",
      "LOS MOLINOS"
    ],
    "LOS QUIRQUINCHOS": [
      "CAMPO CRENNA",
      "LOS QUIRQUINCHOS"
    ],
    "LOS TABANOS": [
      "LOS TABANOS"
    ],
    "LUCIO V LOPEZ": [
      "CAMPO MEDINA",
      "LUCIO  V. LOPEZ",
      "LUCIO V. LOPEZ"
    ],
    "LUIS PALACIOS": [
      "LUIS PALACIOS"
    ],
    "MACIEL": [
      "MACIEL"
    ],
    "MAGGIOLO": [
      "CAMPO EL RINCON",
      "MAGGIOLO"
    ],
    "MALABRIGO": [
      "CAMPO MAGNAGO",
      "CAMPO MOSCHEN",
      "CAMPO RAMSEYER",
      "KILOMETRO 742",
      "MALABRIGO"
    ],
    "MARCELINO ESCALADA": [
      "MARCELINO ESCALADA"
    ],
    "MARGARITA": [
      "CAMPO  PAVICICH",
      "CAMPO COLNAGHI",
      "CAMPO LA ROSARIO",
      "CAMPO MOLASSI",
      "COLONIA LAS MARGARITAS",
      "LA NICOLOSA",
      "MARGARITA",
      "SAN EUGENIO"
    ],
    "MARIA JUANA": [
      "MARIA JUANA"
    ],
    "MARIA LUISA": [
      "EL BOSQUE",
      "MARIA LUISA"
    ],
    "MARIA SUSANA": [
      "CAMPO BAJO LAS LIEBRES",
      "CAMPO EL 51",
      "LAS LIMPIAS",
      "MARIA SUSANA"
    ],
    "MARIA TERESA": [
      "EST. LA BARRANCOSA",
      "MARIA TERESA"
    ],
    "MATILDE": [
      "MATILDE",
      "PLAZA MATILDE"
    ],
    "MAUA": [
      "MAUA"
    ],
    "MAXIMO PAZ": [
      "COLONIA NORTE",
      "MAXIMO PAZ"
    ],
    "MELINCUE": [
      "CAMPO SIERRA",
      "MELINCUE"
    ],
    "MIGUEL TORRES": [
      "MIGUEL TORRES"
    ],
    "MOISES VILLE": [
      "MOISES VILLE"
    ],
    "MONIGOTES": [
      "MONIGOTES"
    ],
    "MONJE": [
      "MONJE"
    ],
    "MONTE OSCURIDAD": [
      "MONTE OSCURIDAD"
    ],
    "MONTE VERA": [
      "ANGEL GALLARDO",
      "ASCOCHINGA",
      "CAMPO CRESPO",
      "MONTE VERA",
      "PARAJE CHACO CHICO",
      "PARAJE LA COSTA"
    ],
    "MONTEFIORE": [
      "LA ELSA",
      "MONTEFIORE"
    ],
    "MONTES DE OCA": [
      "CAMPO LOS TRONCOS",
      "MONTES DE OCA"
    ],
    "MURPHY": [
      "COLONIA LOS ROBLES",
      "MURPHY"
    ],
    "NARE": [
      "LAS CAÑAS",
      "MIGUEL ESCALADA",
      "NARE"
    ],
    "NELSON": [
      "IRIONDO",
      "MANUCHO",
      "NELSON",
      "RINCON DE AVILA"
    ],
    "NICANOR MOLINAS": [
      "LA POTASA"
    ],
    "NUEVO TORINO": [
      "NUEVO TORINO"
    ],
    "OLIVEROS": [
      "OLIVEROS",
      "VILLA LA RIVERA - OLIVEROS"
    ],
    "PALACIOS": [
      "PALACIOS"
    ],
    "PAVON": [
      "PAVON"
    ],
    "PAVON ARRIBA": [
      "CAMPO LA MALAGUEÑA",
      "PAVON ARRIBA"
    ],
    "PEDRO GOMEZ CELLO": [
      "COLONIA LA OSCA",
      "LA CLARA",
      "LA MORA Y PANTANOSO",
      "PEDRO GOMEZ CELLO"
    ],
    "PEREZ": [
      "PEREZ",
      "VILLA AMERICA"
    ],
    "PEYRANO": [
      "PEYRANO"
    ],
    "PIAMONTE": [
      "PIAMONTE"
    ],
    "PILAR": [
      "PILAR"
    ],
    "PIÑERO": [
      "LA CAROLINA",
      "LOS MUCHACHOS - LA ALBORADA",
      "PIÑERO"
    ],
    "PLAZA CLUCELLAS": [
      "PLAZA CLUCELLAS"
    ],
    "PORTUGALETE": [
      "PORTUGALETE"
    ],
    "POZO BORRADO": [
      "CAMPO CONTARDE",
      "CAMPO LAS MELLIZAS",
      "CAMPO LOS CLAVELES",
      "EL PIRINCHO",
      "EL TUNALITO",
      "POZO BORRADO"
    ],
    "PRESIDENTE ROCA": [
      "ESTACION PRESIDENTE ROCA",
      "PRESIDENTE ROCA"
    ],
    "PROGRESO": [
      "PROGRESO"
    ],
    "PROVIDENCIA": [
      "PROVIDENCIA"
    ],
    "PUEBLO ANDINO": [
      "PUEBLO ANDINO",
      "VILLA LA RIVERA - PUEBLO ANDINO"
    ],
    "PUEBLO ESTHER": [
      "PUEBLO ESTHER"
    ],
    "PUEBLO MARINI": [
      "PUEBLO MARINI"
    ],
    "PUEBLO MUÑOZ": [
      "PUEBLO MUÑOZ"
    ],
    "PUERTO GENERAL SAN MARTIN": [
      "BELLA VISTA",
      "PUERTO GENERAL SAN MARTIN"
    ],
    "PUJATO": [
      "CAMPO RISSO",
      "PUJATO"
    ],
    "PUJATO NORTE": [
      "PUJATO NORTE"
    ],
    "RAFAELA": [
      "CAMPO RUBIOLO",
      "RAFAELA"
    ],
    "RAMAYON": [
      "ESTANCIA SAN JUAN",
      "RAMAYON",
      "SAN JUAN",
      "VILLA LASTENIA",
      "VILLA MERCEDES"
    ],
    "RAMONA": [
      "RAMONA"
    ],
    "RECONQUISTA": [
      "CAMPO LEONHARDT",
      "LA LOLA",
      "PUERTO RECONQUISTA",
      "RECONQUISTA"
    ],
    "RECREO": [
      "RECREO"
    ],
    "RICARDONE": [
      "RICARDONE"
    ],
    "RIVADAVIA": [
      "RIVADAVIA"
    ],
    "ROLDAN": [
      "ROLDAN"
    ],
    "ROMANG": [
      "CAMPO ALTHAUS",
      "CAMPO KAUFMANN",
      "COLONIA SAGER",
      "COLONIA WINGEYER",
      "COSTA DEL TOBA",
      "ROMANG"
    ],
    "ROSARIO": [
      "ESTACION EL GAUCHO",
      "ISLA EL ESPINILLO",
      "ROSARIO"
    ],
    "RUEDA": [
      "RUEDA"
    ],
    "RUFINO": [
      "COLONIA ALBERTENGO",
      "CORONEL ROSETTI",
      "RUFINO",
      "TARRAGONA"
    ],
    "SA PEREYRA": [
      "CANTON DE ZARATE",
      "SA PEREYRA"
    ],
    "SAGUIER": [
      "ESTACION SAGUIER",
      "PLAZA SAGUIER"
    ],
    "SALADERO MARIANO CABAL": [
      "EL LAUREL",
      "SALADERO CABAL",
      "SALADERO MARIANO CABAL"
    ],
    "SALTO GRANDE": [
      "COLONIA EL CARMEN",
      "SALTO GRANDE"
    ],
    "SAN AGUSTIN": [
      "BAJO LAS TUNAS",
      "CAMPO PERIOTTI",
      "LOS TRES REYES",
      "SAN AGUSTIN"
    ],
    "SAN ANTONIO": [
      "SAN ANTONIO"
    ],
    "SAN ANTONIO DE OBLIGADO": [
      "SAN ANTONIO DE OBLIGADO"
    ],
    "SAN BERNARDO": [
      "CAMPO LOS BAYOS",
      "COLONIA TRES REYES",
      "EL CENTINELA",
      "EL DESCANSO",
      "EL MOLLE",
      "KILOMETRO 844",
      "LA CAUTIVA",
      "LA EMA",
      "LAS CHAÑAS",
      "SAN BERNARDO"
    ],
    "SAN CARLOS CENTRO": [
      "SAN CARLOS CENTRO"
    ],
    "SAN CARLOS NORTE": [
      "SAN CARLOS NORTE"
    ],
    "SAN CARLOS SUD": [
      "SAN CARLOS SUD"
    ],
    "SAN CRISTOBAL": [
      "ESTANCIA SAN FRANCISCO",
      "SAN CRISTOBAL"
    ],
    "SAN EDUARDO": [
      "CAMPO LA FORTUNA",
      "SAN EDUARDO"
    ],
    "SAN EUGENIO": [
      "SAN EUGENIO"
    ],
    "SAN FABIAN": [
      "SAN FABIAN"
    ],
    "SAN FRANCISCO DE SANTA FE": [
      "SAN FRANCISCO DE SANTA FE"
    ],
    "SAN GENARO": [
      "SAN GENARO",
      "SAN GENARO NORTE"
    ],
    "SAN GREGORIO": [
      "CAMPO LA CHINGOLA",
      "COLONIAMORGAN",
      "SAN GREGORIO"
    ],
    "SAN GUILLERMO": [
      "SAN GUILLERMO"
    ],
    "SAN JAVIER": [
      "COLONIA CALIFORNIA",
      "COLONIA CRIOLLA",
      "COLONIA INDIGENA",
      "COLONIA SAN IGNACIO",
      "COLONIA SAN JOSE",
      "ISLA LAS PALMAS",
      "SAN JAVIER"
    ],
    "SAN JERONIMO DEL SAUCE": [
      "CAMPO LA VIGILANCIA",
      "SAN JERONIMO DEL SAUCE"
    ],
    "SAN JERONIMO NORTE": [
      "SAN JERONIMO NORTE",
      "SAN WENDELINO"
    ],
    "SAN JERONIMO SUD": [
      "SAN JERONIMO SUD"
    ],
    "SAN JORGE": [
      "CAMPO DURANDO",
      "CAMPO EL INJERTO",
      "SAN JORGE"
    ],
    "SAN JOSE": [
      "COLONIA SAN JOSE",
      "SAN JOSE"
    ],
    "SAN JOSE DE LA ESQUINA": [
      "LOS NOGALES",
      "SAN JOSE DE LA ESQUINA"
    ],
    "SAN JOSE DEL RINCON": [
      "SAN JOSE DEL RINCON"
    ],
    "SAN JUSTO": [
      "CAMPO LA PEPITA",
      "COLONIA EL FORTIN",
      "ESTANCIA PICHUCO",
      "LOS SALADILLOS",
      "PAIKIN",
      "SAN JUSTO",
      "VERA MUJICA"
    ],
    "SAN LORENZO": [
      "SAN LORENZO"
    ],
    "SAN MARIANO": [
      "LA PENCA - SAN MARIANO",
      "SAN MARIANO"
    ],
    "SAN MARTIN DE LAS ESCOBAS": [
      "AVENA",
      "CAMPO DONNET",
      "CAMPO EL DANUBIO",
      "CAMPO OITANA",
      "SAN MARTIN DE LAS ESCOBAS"
    ],
    "SAN MARTIN NORTE": [
      "COLONIA OVEJITA",
      "SAN MARTIN NORTE"
    ],
    "SAN VICENTE": [
      "LOS SEMBRADOS",
      "SAN VICENTE"
    ],
    "SANCTI SPIRITU": [
      "CAMPO LANGARICA",
      "CAMPO TARDINI",
      "SANCTI SPIRITU"
    ],
    "SANFORD": [
      "SANFORD"
    ],
    "SANTA CLARA DE BUENA VISTA": [
      "CAMPO COLLA",
      "CORONEL RODRIGUEZ",
      "LAS HIGUERITAS",
      "SANTA CLARA DE BUENA VISTA"
    ],
    "SANTA CLARA DE SAGUIER": [
      "CAMPO RIVAROSSA",
      "SANTA CLARA DE SAGUIER"
    ],
    "SANTA FE": [
      "ISLA VUELTA DEL PARAGUAYO",
      "SANTA FE"
    ],
    "SANTA ISABEL": [
      "COLONIA SANTA LUCIA",
      "RUNCIMAN",
      "SANTA ISABEL"
    ],
    "SANTA MARGARITA": [
      "CAMPO DEROTIER",
      "LOS QUEBRACHALES",
      "SANTA MARGARITA"
    ],
    "SANTA MARIA CENTRO": [
      "SANTA MARIA CENTRO"
    ],
    "SANTA MARIA NORTE": [
      "SANTA MARIA NORTE"
    ],
    "SANTA ROSA DE CALCHINES": [
      "LOS ZAPALLOS",
      "SANTA ROSA DE CALCHINES"
    ],
    "SANTA TERESA": [
      "FRANCISCO PAZ",
      "SANTA TERESA"
    ],
    "SANTO DOMINGO": [
      "SANTO DOMINGO"
    ],
    "SANTO TOME": [
      "CAMPO JULLIER",
      "SANTO TOME"
    ],
    "SANTURCE": [
      "SANTURCE"
    ],
    "SARGENTO CABRAL": [
      "SARGENTO CABRAL"
    ],
    "SARMIENTO": [
      "INGENIERO BOASSI",
      "LA RAMADA",
      "SARMIENTO"
    ],
    "SASTRE": [
      "ESTACION KILOMETRO 465",
      "SASTRE"
    ],
    "SAUCE VIEJO": [
      "SAUCE VIEJO",
      "VILLA ADELINA"
    ],
    "SERODINO": [
      "SERODINO"
    ],
    "SILVA": [
      "LOS QUEBRACHOS",
      "SAN MIGUEL",
      "SILVA"
    ],
    "SOLDINI": [
      "SOLDINI"
    ],
    "SOLEDAD": [
      "SOLEDAD"
    ],
    "SOUTOMAYOR": [
      "COLONIA LA RINCONADA",
      "SOUTOMAYOR"
    ],
    "SUARDI": [
      "SUARDI"
    ],
    "SUNCHALES": [
      "CAMPO RISTORTO",
      "COLONIA LA MANUELITA",
      "EL FORTIN",
      "SUNCHALES"
    ],
    "SUSANA": [
      "CAMPO PIACENZA",
      "SAN MIGUEL",
      "SUSANA"
    ],
    "TACUARENDI": [
      "LA HORTENSIA",
      "TACUARENDI"
    ],
    "TACURAL": [
      "TACURAL"
    ],
    "TACURALES": [
      "CAMPO AMBROGGIO"
    ],
    "TARTAGAL": [
      "CAMPO DEAN",
      "CAMPO MARIA ROSA",
      "EL TAJAMAR",
      "LA JOSEFINA",
      "TARTAGAL"
    ],
    "TEODELINA": [
      "CAMPO GERARDO",
      "CAMPO LA DELIA",
      "CAMPO TAZZIOLI",
      "ESTANCIA SANTA JUANA",
      "SAN MARCELO",
      "TEODELINA"
    ],
    "THEOBALD": [
      "COLONIA ALBERDI",
      "THEOBALD"
    ],
    "TIMBUES": [
      "TIMBUES",
      "VILLA ELVIRA"
    ],
    "TOBA": [
      "GUAYCURU",
      "KILOMETRO 12",
      "KILOMETRO 302",
      "LA ZULEMA",
      "LOTE 127",
      "TOBA"
    ],
    "TORTUGAS": [
      "CAMPO CHARO",
      "CAMPO GIMBATTI",
      "CAMPO MARINZALDA",
      "TORTUGAS"
    ],
    "TOSTADO": [
      "ANTONIO PINI",
      "CAMPO DON BOSCO",
      "CAMPO LA MARUCA",
      "CAMPO MARIA ALICIA",
      "CAMPO PERGOLESI",
      "COLONIA EL INCA",
      "COLONIA50 LOS CHARABONES",
      "EL CACIQUE",
      "ESTANCIA EL PALMAR",
      "LOS CHARABONES",
      "TOSTADO",
      "TRES POZOS"
    ],
    "TOTORAS": [
      "BARRIO CICARELLI",
      "CAMPO BARBERO",
      "CAMPO RASETTO",
      "CAMPO ROVETTO",
      "COLONIA MEDICI",
      "LARGUIA",
      "TOTORAS"
    ],
    "TRAILL": [
      "TRAILL"
    ],
    "URANGA": [
      "PUEBLO URANGA"
    ],
    "VENADO TUERTO": [
      "COLONIA EL EMPALME",
      "LA ESCONDIDA",
      "SAN MARCOS",
      "VENADO TUERTO"
    ],
    "VERA": [
      "CAMPO BERNARDI",
      "CAMPO ZAMO",
      "CARAGUATAY",
      "EL ÑANDUBAY",
      "ESPIN",
      "KILOMETRO 38",
      "KILOMETRO 71",
      "LOTE 184",
      "LOTE 21",
      "PUEBLO SANTA LUCIA",
      "SANTA FELICIA",
      "VERA"
    ],
    "VERA Y PINTADO": [
      "LA CABAÑA",
      "LA NEGRA",
      "VERA Y PINTADO"
    ],
    "VIDELA": [
      "COLONIA SOL DE MAYO",
      "VIDELA"
    ],
    "VILA": [
      "CAMPO BERTONI",
      "VILA"
    ],
    "VILLA AMELIA": [
      "VILLA AMELIA",
      "VILLA DEL PLATA"
    ],
    "VILLA ANA": [
      "CAMPO REDONDO",
      "COLONIA PILOTO",
      "EL AMARGO",
      "GUASUNCHO",
      "KILOMETRO 28",
      "LA RESERVA",
      "LOS TABANOS",
      "VILLA ANA"
    ],
    "VILLA CAÑAS": [
      "CAMPO BALLESTEROS",
      "CAMPO CHAPINO",
      "CAMPO TROFFE",
      "VILLA CAÑAS"
    ],
    "VILLA CONSTITUCION": [
      "BARRIO ARROYO DEL MEDIO",
      "VILLA CONSTITUCION"
    ],
    "VILLA ELOISA": [
      "CAMPO LOMA PARTIDA",
      "SAN RICARDO",
      "VILLA ELOISA"
    ],
    "VILLA GOBERNADOR GALVEZ": [
      "CORONEL AGUIRRE",
      "VILLA GOBERNADOR GALVEZ",
      "VILLA SAN DIEGO"
    ],
    "VILLA GUILLERMINA": [
      "NOGHE",
      "OBRAJE SAN JUAN",
      "RAMAL SAN JUAN",
      "VILLA GUILLERMINA"
    ],
    "VILLA MINETTI": [
      "CAMPO SAN ISIDORO",
      "COLONIA BELGRANO",
      "COLONIA EL DICHOSO",
      "COLONIA EL MATE",
      "COLONIA LA AVANZADA",
      "COLONIA LA HIEDRA",
      "EMPALME RUTA 91",
      "ESTANCIA LOS GUASUNCHOS",
      "FORTIN ATAHUALPA",
      "VILLA MINETTI"
    ],
    "VILLA MUGUETA": [
      "CAMPO LA CELIA",
      "MAIZALES",
      "VILLA MUGUETA"
    ],
    "VILLA OCAMPO": [
      "CAMPO BELLO NORTE",
      "CAMPO BELLO SUR",
      "CAMPO EL PIAVE",
      "CAMPO FANTIN",
      "CAMPO PICCOLI",
      "CAMPO YACCUZZI",
      "DESVIO KM 407",
      "ESTACION KILOMETRO 403",
      "LA ISLETA",
      "SAN VICENTE",
      "VILLA ADELA",
      "VILLA OCAMPO"
    ],
    "VILLA SAN JOSE": [
      "VILLA SAN JOSE"
    ],
    "VILLA SARALEGUI": [
      "MARIA EUGENIA",
      "PETRONILA",
      "RINCON DEL QUEBRACHO",
      "VILLA SARALEGUI"
    ],
    "VILLA TRINIDAD": [
      "CAMPO BOTTO",
      "VILLA TRINIDAD"
    ],
    "VILLADA": [
      "COLONIA LOS PRADOS",
      "COLONIAS LAS LONJAS",
      "VILLADA"
    ],
    "VIRGINIA": [
      "VIRGINIA"
    ],
    "WHEELWRIGHT": [
      "MERCEDITAS",
      "WHEELWRIGHT"
    ],
    "ZAVALLA": [
      "CAMPO LA ELVIRA",
      "ZAVALLA"
    ],
    "ZENON PEREYRA": [
      "ESTACION KILOMETRO 501",
      "ZENON PEREYRA"
    ],
    "ÑANDUCITA": [
      "ÑANDUCITA"
    ]
  },
  "SANTIAGO DEL ESTERO": {
    "ABRA GRANDE": [
      "ABRA GRANDE"
    ],
    "ACOS - POZO DEL ARBOLITO": [
      "POZO DEL ARBOLITO"
    ],
    "AHI VEREMOS": [
      "AHI VEREMOS"
    ],
    "AMAMA": [
      "AMAMA"
    ],
    "AMICHA": [
      "AMICHA"
    ],
    "ANTAJE": [
      "ANTAJE"
    ],
    "ARDILES": [
      "ARDILES"
    ],
    "AREA SIN GOBIERNO": [
      "14 DE MAYO",
      "25 DE MAYO",
      "25 DE MAYO DE BANEGAS",
      "7 DE ABRIL",
      "9 DE JULIO",
      "ABRA GRANDE",
      "ABRITA GRANDE",
      "ACOSTA",
      "AEROLITO",
      "AGUA AMARGA",
      "AGUA AZUL",
      "AGUA BLANCA",
      "AGUAS COLORADAS",
      "AGUSTINA LIBARONA",
      "AHI VEREMOS",
      "ALGARROBAL VIEJO",
      "ALGARROBALES",
      "ALGARROBO",
      "ALHUAMPA",
      "ALTO BELLO",
      "ALTO POZO",
      "AMAPOLA",
      "AMBARGASTA",
      "AMIMAN",
      "AMOLADERAS",
      "AMPA",
      "ANCA OVERA",
      "ANCAJAN",
      "ANCOCHA",
      "ANGA",
      "ANTILO",
      "ARAGONES",
      "ARBOL BLANCO",
      "ARBOL SOLO",
      "ARDILES DE LA COSTA",
      "ARMONIA",
      "ASPIRANTE",
      "AVERIAS",
      "AYUNCHA",
      "AZOGASTA",
      "BABILONIA",
      "BAEZ",
      "BAHIA BLANCA",
      "BAHOMA",
      "BAJO ALEGRE",
      "BAJO GRANDE",
      "BAJO HONDO",
      "BALBUENA",
      "BARRANCAS",
      "BARRIAL ALTO",
      "BARRIALITO",
      "BAYO MUERTO",
      "BELGICA",
      "BELGRANO",
      "BELTRAN",
      "BLANCA POZO",
      "BORDO PAMPA",
      "BREA LOMA",
      "BREA POZO VIEJO",
      "BREA PUÑUNA",
      "BREAYOJ",
      "BUEN LUGAR",
      "BUEN PASO",
      "BUENA VISTA",
      "BUENOS AIRES",
      "BUEY MUERTO",
      "CABEZA DEL TORO",
      "CALLEJON BAJADA",
      "CALOJ",
      "CALOJ POZO",
      "CAMPO ALEGRE",
      "CAMPO BANDERA",
      "CAMPO CONTARDI",
      "CAMPO DE LEONES",
      "CAMPO DEL CIELO",
      "CAMPO DEL CISNE",
      "CAMPO LAGAR",
      "CAMPO TOLEDO",
      "CAMPO VERDE",
      "CAMPO Y CIELO",
      "CAMPOS DE CEJAS",
      "CARA PUJIO",
      "CARDON ESQUINA",
      "CARRETA PASO",
      "CARTAVIO",
      "CASILLA DEL MEDIO",
      "CATAMARCA",
      "CAÑADA DE ROBLES",
      "CAÑADA DEL MONTE",
      "CEJA POZO",
      "CELESTINA",
      "CERRILLOS",
      "CERRO CHICO",
      "CHACRAS",
      "CHARCO VIEJO",
      "CHAUCHILLAS",
      "CHAÑAR POZO DE ABAJO",
      "CHAÑAR POZO DE ARRIBA",
      "CHAÑAR POZO DEL MEDIO",
      "CHAÑAR SINUCHAY",
      "CHAÑARITO",
      "CHEEJ",
      "CHICHILLAL",
      "CHILCA",
      "CHILCA LA LOMA",
      "CHILCAN",
      "CHIRA",
      "CHURQUI",
      "CODO VIEJO",
      "COLLERA HUARCANA",
      "COLOMBIA",
      "COLONIA ALCIRA",
      "COLONIA ALPINA",
      "COLONIA ARBOL BLANCO",
      "COLONIA ARGENTINA",
      "COLONIA GAMARA",
      "COLONIA HERMELINDA",
      "COLONIA ISLA",
      "COLONIA JAIME",
      "COLONIA JOSEFINA",
      "COLONIA LA VICTORIA",
      "COLONIA LIBANESA",
      "COLONIA LIBERTAD",
      "COLONIA MACKINLAY",
      "COLONIA MARIA LUISA",
      "COLONIA SIEGEL",
      "COLONIA TOTORILLAS",
      "CONCEPCION",
      "CONCHAYOJ",
      "CONSUELO",
      "CORO PAMPA",
      "CORONEL FERNANDEZ",
      "CORONEL MANUEL L. RICO",
      "CORRAL DEL REY",
      "CORRAL QUEMADO",
      "CRUCESITAS",
      "CRUZ BAJADA",
      "CRUZ CHICA",
      "CRUZ DEL NORTE",
      "CUATRO ESQUINAS",
      "CUCHI CORRAL",
      "CUQUERO",
      "CUYOJ",
      "DIASPA",
      "DIENTE DEL ARADO",
      "DIQUE FRONTAL",
      "DOLORES",
      "DOMINGO DE RAMOS",
      "DONADEU",
      "DOS ARBOLES",
      "DOS HERMANAS",
      "DOS PROVINCIAS",
      "EL  MOLINO",
      "EL 20",
      "EL 60",
      "EL AEROLITO",
      "EL AIBAL",
      "EL ALAMBRADO",
      "EL ALBARDON",
      "EL ALGARROBAL",
      "EL APEADERO",
      "EL ARBOL",
      "EL ARBOLITO",
      "EL ARENAL",
      "EL AROMITO",
      "EL AYUDANTE",
      "EL AZUL",
      "EL BAGUAL",
      "EL BAJO",
      "EL BARRIAL",
      "EL BARRIALITO",
      "EL BORDO",
      "EL CACHI",
      "EL CADILLAL",
      "EL CADILLO",
      "EL CAJON",
      "EL CAMBIADO",
      "EL CANARIO",
      "EL CANDELARIO",
      "EL CARDONAL",
      "EL CARMEN",
      "EL CARRETEL",
      "EL CEIBAL",
      "EL CERRO",
      "EL CHARCO",
      "EL CHURQUI",
      "EL CORRALITO",
      "EL CORRIDO",
      "EL CUADRO",
      "EL DESMONTE",
      "EL DESTINO",
      "EL DESVIO",
      "EL DIABLO",
      "EL DORADO",
      "EL ESPARTAL",
      "EL FAVORITO",
      "EL FISCO",
      "EL FISCO DE FATIMA",
      "EL FISCO/LOTE48",
      "EL GALPON",
      "EL GUAPO",
      "EL HOYO",
      "EL HUAICO",
      "EL LAUREL",
      "EL MAJAN",
      "EL MALACARA",
      "EL MANANTIAL",
      "EL MANGRULLO",
      "EL MILAGRO",
      "EL MISTOL",
      "EL MOJON",
      "EL MOLLE",
      "EL MSITOL",
      "EL NEGRITO",
      "EL OJITO",
      "EL OJO DE AGUA",
      "EL OSO",
      "EL PACARA",
      "EL PALMAR",
      "EL PALOMAR",
      "EL PARAISO",
      "EL PERAL",
      "EL PERTIGO",
      "EL PERU",
      "EL PIRUCHO",
      "EL POLEAR",
      "EL PORVENIR",
      "EL PRADO",
      "EL PUEBLITO",
      "EL PUENTE",
      "EL PUESTITO",
      "EL PUESTO",
      "EL QUEBRACHAL",
      "EL QUEBRACHO",
      "EL QUEMADO",
      "EL QUIMIL",
      "EL REFUGIO",
      "EL REMANSO",
      "EL REMATE",
      "EL RINCON",
      "EL ROSADO",
      "EL ROSARIO",
      "EL SALADILLO",
      "EL SALVADOR",
      "EL SAUCE",
      "EL SIMBOL",
      "EL SIMBOLAR",
      "EL SOCORRO",
      "EL SOLER",
      "EL TABLEADO",
      "EL TAJAMAR",
      "EL TALAR",
      "EL TANQUE",
      "EL TROPEZON",
      "EL TUNQUELEN",
      "EL UCLE",
      "EL VALLE",
      "EL VIZCACHERAL",
      "EL YUNCHANCITO",
      "ESQUINA POZO",
      "ESTACION INGENIERO EZCURRA",
      "ESTACION LA PUNTA",
      "ESTACION LAS GAMAS",
      "ESTADOS UNIDOS",
      "ESTECO",
      "ESTEROS",
      "FLORESTA",
      "FUERTE VIEJO",
      "GALEANO",
      "GAUCHO DE GUEMES",
      "GRAMILLA",
      "GRAMILLA VIEJA",
      "GUANACO SOMBRIANA",
      "GUAYACAN POZO",
      "GUAYCURU",
      "GUERRA",
      "HASSE",
      "HERNAN MEJIA MIRAVAL",
      "HIGUERA CHACRA",
      "HORCOS TUCUCUNA",
      "HOYO CERCO",
      "HUACHANA",
      "HUAICO HONDO",
      "HUILLA CATINA",
      "HUMAITA",
      "HURMANITA ESTANCIA",
      "HUYAMAMPA",
      "IFIA",
      "INGRATA NORTE",
      "INGRATA SUR",
      "INTI HUASI",
      "ISCA YACU",
      "ISCA YACU SEMAUL",
      "ISKOY POZO",
      "ISLA BAJA",
      "ISLA CORRAL",
      "ISLA DE ARAGONES",
      "ISLA DE LOS SOTELOS",
      "ISLA VERDE",
      "ITATI",
      "JANTA",
      "JUME ESQUINA",
      "JUMI POZO",
      "JUMIAL GRANDE",
      "JUMIALITO",
      "KILOMETRO 30",
      "KILOMETRO 454",
      "KILOMETRO 477",
      "KILOMETRO 55",
      "KILOMETRO 83",
      "KILOMETRO 88",
      "KILOMETRO 96",
      "KILOMETRO CERO",
      "LA ABRITA",
      "LA AGUADA",
      "LA AGUADITA",
      "LA ARMONIA",
      "LA AURORA",
      "LA BAJADA",
      "LA BARROSA",
      "LA BLANCA",
      "LA BLANQUITA",
      "LA BOLSA",
      "LA BREITA",
      "LA CALERA",
      "LA CAMBICHA",
      "LA CANDELARIA",
      "LA CAPILLA",
      "LA CAÑADA",
      "LA CENTELLA",
      "LA CHICHARRA",
      "LA CHILCA",
      "LA CHIRQUITA",
      "LA COSTA",
      "LA COSTOSA",
      "LA CRUZ",
      "LA CURVA",
      "LA DELIA",
      "LA DORMIDA",
      "LA ESPERANZA",
      "LA ESTANCIA",
      "LA ESTANCITA",
      "LA FALDA",
      "LA FEDERACION",
      "LA FIRMEZA",
      "LA FLORIDA",
      "LA FORTUNA",
      "LA FRONTERA",
      "LA GRANADA",
      "LA GRANJA",
      "LA GUANACA",
      "LA GUARDIA",
      "LA HIGUERA",
      "LA HUANACA",
      "LA HUERTA",
      "LA INGRATA",
      "LA INVERNADA SUD",
      "LA ISLA",
      "LA LAGUNA",
      "LA LOMA",
      "LA MAGDALENA",
      "LA MANGA",
      "LA MELEADA",
      "LA MESADA",
      "LA NOMBRADA",
      "LA NUEVA DONOSA",
      "LA OVEJA",
      "LA OVEJERIA",
      "LA PACIENCIA",
      "LA PALOMA",
      "LA PAMPA",
      "LA PAULINA",
      "LA PIAMONTESA",
      "LA PROVIDENCIA",
      "LA PUERTA",
      "LA QUISCA",
      "LA RAMADA",
      "LA RAMADITA",
      "LA REACCION",
      "LA REPRESA",
      "LA RESBALOSA",
      "LA RESERVA",
      "LA REVANCHA",
      "LA RIVERA",
      "LA ROMELIA",
      "LA SALAMANCA",
      "LA SALVACION",
      "LA SARITA",
      "LA SOLEDAD",
      "LA TAPA",
      "LA TRAMPA",
      "LA TUSCA",
      "LA UNION",
      "LA VERDE",
      "LA VICTORIA",
      "LA VIRTUD",
      "LA VUELTA",
      "LA YERBA",
      "LAGO MUYOJ",
      "LAS ABRAS",
      "LAS BARRANCAS",
      "LAS CARPAS",
      "LAS CEJAS",
      "LAS CHACRAS",
      "LAS DOLORES",
      "LAS DOS A",
      "LAS JUNTAS",
      "LAS LAJAS",
      "LAS LOMAS",
      "LAS LOMITAS",
      "LAS MALVINAS",
      "LAS MANGAS",
      "LAS PALMERAS",
      "LAS PALMITAS",
      "LAS PERFORACIONES",
      "LAS PROMESAS",
      "LAS PUERTAS",
      "LAS TALITAS",
      "LAS TEJAS",
      "LAS VIBORITAS",
      "LAS ZANJITAS",
      "LAVALLE",
      "LEDESMA",
      "LIMACHE",
      "LINCHO",
      "LOAJ",
      "LOJLO",
      "LOMA DEL MEDIO",
      "LOMA GRANDE",
      "LOMAS BLANCAS",
      "LOMAS DE ZAMORA",
      "LOMITAS",
      "LOMITAS BLANCAS",
      "LORO HUASI",
      "LORO PAMPA",
      "LOS ACOSTA",
      "LOS ALDERETES",
      "LOS ALGARROBOS",
      "LOS ANGELES",
      "LOS ARIAS",
      "LOS CARDOZOS",
      "LOS CASTILLOS",
      "LOS CERCOS",
      "LOS CERRILLOS",
      "LOS CERROS",
      "LOS DIAZ",
      "LOS ENCANTOS",
      "LOS GALLARDO",
      "LOS GALLEGOS",
      "LOS GOMEZ",
      "LOS LINARES",
      "LOS MILAGROS",
      "LOS MIRANDA",
      "LOS MORTEROS",
      "LOS PERALTAS",
      "LOS PEREYRA",
      "LOS POCITOS",
      "LOS PORONGOS",
      "LOS POSITOS",
      "LOS POZANCONES",
      "LOS QUEBRACHOS",
      "LOS RALOS",
      "LOS REMANSOS",
      "LOS SANTILLAN",
      "LOS SORIA",
      "LOS TABLEROS",
      "LOS TIGRES",
      "LOS TOLOZOS",
      "LOS TUNALES",
      "LOTE 110",
      "LOTE 115",
      "LOTE 15",
      "LOTE 24",
      "LOTE 28",
      "LOTE 29 CHICO",
      "LOTE 31",
      "LOTE 32 LA RESERVA",
      "LOTE 40",
      "LOTE 42",
      "LOTE 43",
      "LOTE 48",
      "LOTE 59",
      "LOTE 63",
      "LOTE 69",
      "LOTE 87",
      "LOTE L 3",
      "LOTE LA CAÑADA",
      "LOTES 1 A 9",
      "LOTES 25 A 29",
      "LOTES 33-37-40-42",
      "LOTES 46 A 48",
      "LUJAN",
      "MACHAGUAY HUANCHINA",
      "MACO",
      "MADERAS",
      "MAGDALENA",
      "MAILIN",
      "MAJADAS",
      "MAL PASO",
      "MALOTA",
      "MANCAPA",
      "MANGA BAJADA",
      "MANINIOJ",
      "MANSUPA",
      "MEDIA LUNA",
      "MEDIO MUNDO",
      "MERCEDES",
      "MIEL DE PALO",
      "MILAGROS",
      "MILI",
      "MINERVA",
      "MINGUECHO",
      "MIRELLA",
      "MISTOL MUYOJ",
      "MISTOL POZO",
      "MISTOL PUESTO",
      "MISTOLITO",
      "MONTE BELLO",
      "MONTE PAMPA",
      "MONTE POTRERO",
      "MONTE QUEMADO",
      "MONTE REDONDO",
      "MONTE RICO",
      "MONTEVIDEO",
      "MORALES",
      "MORAMPA",
      "MORCILLO",
      "MORON",
      "MUYUSKA",
      "NAVARRO",
      "NAVICHA",
      "NEGRA MUERTA",
      "NOQUEOJ",
      "NOVILLO POZO",
      "NUEVA CERES",
      "NUEVA COLONIA",
      "NUEVA ESPERANZA",
      "NUEVA INDUSTRIA",
      "NUEVA LIBANO",
      "NUEVA LOMA",
      "NUEVA LUJAN",
      "NUEVO SIMBOLAR",
      "OBRAJE MAILIN",
      "OBRAJE MARIA ANGELICA",
      "ONCAN",
      "ORATORIO",
      "OSO HUANCHINA",
      "OVEJERIA",
      "PAAJ POZO",
      "PAAJ RODEO",
      "PALERMO",
      "PALMA POZO",
      "PALMA REDONDA",
      "PALMARES",
      "PALMITA DE GEREZ",
      "PALMITAS",
      "PALO PARADO",
      "PALOMA",
      "PALOMAR",
      "PALOS QUEMADOS",
      "PAMPA ATUN",
      "PAMPA CHARQUINA",
      "PAMPA GRANDE",
      "PAMPA MAYO",
      "PAMPA MUYOJ",
      "PAMPA POZO",
      "PAMPA SUNI",
      "PARAJE 12",
      "PARANA",
      "PASO GRANDE",
      "PERCAS",
      "PERCHIL BAJO",
      "PICHANA",
      "PIEDRA BLANCA",
      "PIRUAJ BAJO",
      "POLEO POZO",
      "POZANCON",
      "POZANCONES",
      "POZO BARRANCAYOJ",
      "POZO CAVADO",
      "POZO CIEGO",
      "POZO DE LA PUERTA",
      "POZO DEL GARABATO",
      "POZO DEL MEDIO",
      "POZO DEL MONTE",
      "POZO DEL SIMBOL",
      "POZO DEL TIGRE",
      "POZO GRANDE",
      "POZO HERRERA",
      "POZO LIMPIO",
      "POZO LINDO",
      "POZO MOSOJ",
      "POZO NUEVO",
      "POZO SALADO",
      "POZO SUMI",
      "POZO VERDE",
      "PUEBLO NUEVO",
      "PUENTE BAJADA",
      "PUENTE DEL SALADILLO",
      "PUENTE NEGRO",
      "PUERTA DE CHAVEZ",
      "PUERTA DE LOS CERROS",
      "PUERTA DE LOS RIOS",
      "PUERTA DEL MONTE",
      "PUERTA GRANDE",
      "PUESTITO",
      "PUESTO CORDOBA",
      "PUESTO DE BELTRAN",
      "PUESTO DE JUANES",
      "PUESTO DE MENA",
      "PUESTO DE SAN ANTONIO",
      "PUESTO DEL ANGEL",
      "PUESTO DEL MEDIO",
      "PUESTO DEL ROSARIO",
      "PUESTO DEL SAUZAL",
      "PUESTO LIBERTAD",
      "PUESTO NUEVO",
      "PUESTOS UNIDOS",
      "PUNITAYOJ",
      "PUNTA CORRAL",
      "PUNTA DEL MONTE",
      "PUNTA ISLA",
      "PUNUA",
      "QUEBRACHITOS",
      "QUEBRACHO ESQUINA",
      "QUIMILI",
      "QUIMILIOJ",
      "QUISHCA",
      "QUITA PUNCO",
      "RAMA PASO",
      "RANCHILLOS",
      "RANCHITOS",
      "RINCON DEL SALADILLO",
      "RINCON DEL VALLE",
      "RINCON GRANDE",
      "RIO MUERTO",
      "RIO PINTO",
      "RIO VIEJO",
      "RODEO BAJADA",
      "RODEO DE SORIA",
      "RODEO DE VALDEZ",
      "ROVERSI",
      "RUBIA MORENO",
      "RUBIA PASO",
      "RUMI ESQUINA",
      "RUMI POZO",
      "SALADILLO",
      "SALVIAYOJ",
      "SAN ANDRES",
      "SAN ANTONIO",
      "SAN ANTONIO DE COPO",
      "SAN ANTONIO DE LOS CACERES",
      "SAN BARTOLO",
      "SAN BERNARDO",
      "SAN CARLOS",
      "SAN CRISTOBAL",
      "SAN DELFIN",
      "SAN DIONISIO",
      "SAN FELIPE",
      "SAN FELIX",
      "SAN FRANCISCO",
      "SAN GREGORIO",
      "SAN IGNACIO",
      "SAN ISIDRO",
      "SAN JAVIER",
      "SAN JORGE",
      "SAN JOSE",
      "SAN JUAN",
      "SAN JUSTO",
      "SAN LORENZO",
      "SAN LORENZO DE LOS SAYAGOS",
      "SAN LUIS",
      "SAN MARCOS",
      "SAN MARTIN",
      "SAN MIGUEL",
      "SAN NICOLAS",
      "SAN PABLO",
      "SAN PEDRO",
      "SAN RAFAEL",
      "SAN RAMON",
      "SAN ROQUE",
      "SAN SALVADOR",
      "SAN SERAFIN",
      "SAN VICENTE",
      "SANAVIRONES",
      "SANTA ANA",
      "SANTA BARBARA",
      "SANTA CATALINA",
      "SANTA CRUZ",
      "SANTA ELENA",
      "SANTA FELISA",
      "SANTA FELIZA",
      "SANTA ISABEL",
      "SANTA JUSTINA",
      "SANTA LUCIA",
      "SANTA MARIA",
      "SANTA MARIA DE LAS CHACRAS",
      "SANTA MARIA SALOME",
      "SANTA RITA",
      "SANTA ROSA",
      "SANTA TERESITA",
      "SANTO DOMINGO",
      "SANTOS LUGARES",
      "SAUCE BAJADA",
      "SAUCIOJ",
      "SELVA BLANCA",
      "SELVA NEGRA",
      "SHILLPI",
      "SHISHI POZO",
      "SIETE ARBOLES",
      "SIMBOL POZO",
      "SOBREMONTE",
      "SOCONCHO",
      "SOL DE MAYO",
      "SOTELILLOS",
      "STAYLE",
      "SUMAMPA VIEJO",
      "SUNCHO POZO",
      "SUNCHO POZO ALTO",
      "SUNCHO POZO DEL TRIUNFO",
      "SURI POZO",
      "TABLA REDONDA",
      "TABLADA DEL BOQUERON",
      "TACANAS",
      "TACANITAS",
      "TACKO YURAJ",
      "TACO  POZO",
      "TACO ATUN",
      "TACO BAJADA",
      "TACO ISLA",
      "TACO POZO",
      "TACO PUNCO",
      "TACOYOJ",
      "TALA ATUN",
      "TALA POZO",
      "TALA YACU",
      "TAQUELLO",
      "TARUY",
      "TASIGASTA",
      "TIERRA DEL ESTE",
      "TINAJERAYOJ",
      "TIO POZO",
      "TIPIRO",
      "TORO HUMAN",
      "TORO PAMPA",
      "TORO POZO",
      "TOTORA",
      "TOTORA PAMPA",
      "TRAMO 16",
      "TRAMO 20",
      "TRAMO 26",
      "TRES BAJOS",
      "TRES CERROS",
      "TRES JAZMINES",
      "TRES LAGUNAS",
      "TRES MOJONES",
      "TRES POZOS",
      "TRES QUEBRACHOS",
      "TRES VARONES",
      "TRINIDAD",
      "TRONCO BLANCO",
      "TRONCOS",
      "TUNAS PUNCO",
      "TUSCA BAJADA",
      "TUSCA POZO",
      "UPIANITA",
      "URUTAU",
      "UTURUNGO",
      "VACA MUERTA",
      "VENTURA PAMPA",
      "VERON",
      "VILLA ABREGU",
      "VILLA ADELA",
      "VILLA CAROLINA",
      "VILLA ESTELA",
      "VILLA GIMENEZ",
      "VILLA LOS POCITOS",
      "VILLA MATARA",
      "VILLA MATILDE",
      "VILLA NUEVA",
      "VILLA PALMAR",
      "VILLA PETOCHA",
      "VILLA QUEBRACHOS",
      "VILLA ROSA",
      "VILLA TURISTICA DEL EMBALSE",
      "VILLA VIEJA",
      "VINAL ISLA",
      "VINAL POZO",
      "VINAL SUNI",
      "VINAL VIEJO",
      "VIVA MERCEDES",
      "YACASNIOJ",
      "YACU HICHACUNA",
      "YACU HURMANA",
      "YANDA",
      "YUCHANCITO"
    ],
    "ARGENTINA": [
      "ARGENTINA"
    ],
    "ARRAGA": [
      "ARRAGA"
    ],
    "ATOJ POZO": [
      "ATOJ POZO"
    ],
    "AVERIAS": [
      "AVERIAS"
    ],
    "AÑATUYA": [
      "AÑATUYA",
      "LA ESTANCIA"
    ],
    "BANDERA": [
      "BANDERA"
    ],
    "BANDERA BAJADA": [
      "BANDERA BAJADA"
    ],
    "BELTRAN": [
      "BELTRAN"
    ],
    "BREA POZO": [
      "BREA POZO"
    ],
    "CAMPO GALLO": [
      "CAMPO GALLO"
    ],
    "CAMPO GRANDE": [
      "CAMPO GRANDE"
    ],
    "CASARES": [
      "CASARES"
    ],
    "CASPI CORRAL": [
      "CASPI CORRAL"
    ],
    "CAÑADA ESCOBAR": [
      "CAÑADA ESCOBAR"
    ],
    "CHAUCHILLAS": [
      "SAUZAL"
    ],
    "CHAUPI POZO": [
      "CHAUPI POZO"
    ],
    "CHILCA JULIANA": [
      "CHILCA JULIANA"
    ],
    "CHOYA": [
      "CHOYA"
    ],
    "CLODOMIRA": [
      "CLODOMIRA"
    ],
    "COLONIA ALPINA": [
      "COLONIA ALPINA"
    ],
    "COLONIA DORA": [
      "COLONIA DORA"
    ],
    "COLONIA EL SIMBOLAR": [
      "COLONIA EL SIMBOLAR"
    ],
    "COLONIA SAN JUAN": [
      "COLONIA SAN JUAN"
    ],
    "COLONIA TINCO": [
      "COLONIA TINCO"
    ],
    "CUATRO BOCAS": [
      "CUATRO BOCAS"
    ],
    "DONADEU": [
      "DONADEU"
    ],
    "DOÑA LUISA": [
      "DOÑA LUISA"
    ],
    "EL AIBE": [
      "EL AIBE"
    ],
    "EL ARENAL": [
      "EL ARENAL"
    ],
    "EL BOBADAL": [
      "EL BOBADAL"
    ],
    "EL CABURE": [
      "EL CABURE"
    ],
    "EL CHARCO": [
      "EL CHARCO"
    ],
    "EL COLORADO": [
      "EL COLORADO"
    ],
    "EL CRUCE": [
      "EL CRUCERO"
    ],
    "EL CUADRADO": [
      "EL CUADRADO"
    ],
    "EL DEAN": [
      "EL DEAN"
    ],
    "EL MOJON": [
      "EL MOJON"
    ],
    "EL SAUZAL": [
      "EL SAUZAL"
    ],
    "ESTACION ATAMISQUI": [
      "ESTACION ATAMISQUI"
    ],
    "ESTACION ROBLES": [
      "ESTACION ROBLES"
    ],
    "ESTACION SIMBOLAR": [
      "SIMBOLAR"
    ],
    "FERNANDEZ": [
      "FERNANDEZ"
    ],
    "FORRES": [
      "INGENIERO FORRES"
    ],
    "FORTIN INCA": [
      "FORTIN INCA"
    ],
    "FRIAS": [
      "FRIAS"
    ],
    "GARZA": [
      "GARZA"
    ],
    "GRAMILLA": [
      "GRAMILLA"
    ],
    "GUAMPACHA": [
      "GUAMPACHA"
    ],
    "GUARDIA ESCOLTA": [
      "GUARDIA ESCOLTA"
    ],
    "HERRERA": [
      "HERRERA"
    ],
    "HOYON": [
      "EL HOYON"
    ],
    "HUACHANA": [
      "HUACHANA"
    ],
    "ICAÑO": [
      "ICAÑO"
    ],
    "JUANILLO": [
      "JUANILLO"
    ],
    "KILOMETRO 49": [
      "KM 49"
    ],
    "LA AURORA": [
      "LA AURORA"
    ],
    "LA BANDA": [
      "LA BAJADA",
      "LA BANDA",
      "SAN CARLOS"
    ],
    "LA CAÑADA": [
      "LA CAÑADA"
    ],
    "LA INVERNADA": [
      "LA INVERNADA"
    ],
    "LA NENA - LA SIMONA": [
      "LA NENA",
      "LA SIMONA"
    ],
    "LA NORIA": [
      "LA NORIA"
    ],
    "LAPRIDA": [
      "LAPRIDA"
    ],
    "LAS DELICIAS": [
      "LAS DELICIAS"
    ],
    "LAS TINAJAS": [
      "LAS TINAJAS"
    ],
    "LAVALLE": [
      "LAVALLE"
    ],
    "LESCANO": [
      "LEZCANOS"
    ],
    "LIBERTAD": [
      "LIBERTAD"
    ],
    "LILO VIEJO - PATAY": [
      "LILO VIEJO",
      "PATAY"
    ],
    "LORETO": [
      "VILLA SAN MARTIN"
    ],
    "LOS JURIES": [
      "LOS JURIES"
    ],
    "LOS NUÑEZ": [
      "LOS NUÑEZ"
    ],
    "LOS OVEJEROS": [
      "LOS OVEJEROS"
    ],
    "LOS PIRPINTOS": [
      "LOS PIRPINTOS"
    ],
    "LOS QUIROGA": [
      "LOS QUIROGA"
    ],
    "LOS ROMANOS - SANTO DOMINGO": [
      "LOS ROMANOS"
    ],
    "LOS TELARES": [
      "LOS TELARES"
    ],
    "LUGONES": [
      "LUGONES"
    ],
    "MALBRAN": [
      "MALBRAN"
    ],
    "MATARA": [
      "MATARA"
    ],
    "MEDELLIN": [
      "MEDELLIN"
    ],
    "MELERO": [
      "CANAL MELERO"
    ],
    "MONTE QUEMADO": [
      "MONTE QUEMADO"
    ],
    "NEGRA MUERTA": [
      "NEGRA MUERTA"
    ],
    "NUEVA ESPERANZA": [
      "NUEVA ESPERANZA"
    ],
    "NUEVA FRANCIA": [
      "NUEVA FRANCIA"
    ],
    "OTUMPA": [
      "PUEBLO PABLO TORELO"
    ],
    "PALO NEGRO": [
      "PALO NEGRO"
    ],
    "PAMPA DE LOS GUANACOS": [
      "PAMPA DE LOS GUANACOS"
    ],
    "PINTO": [
      "VILLA GENERAL MITRE"
    ],
    "POZO BETBEDER": [
      "POZO BETBEDER"
    ],
    "POZO DEL TOBA": [
      "POZO DEL TOBA"
    ],
    "POZO HONDO": [
      "POZO HONDO"
    ],
    "POZUELOS": [
      "POZUELOS"
    ],
    "PUNTA POZO": [
      "PUNTA POZO"
    ],
    "QUEBRACHO COTO": [
      "QUEBRACHO COTO"
    ],
    "QUIMILI": [
      "QUIMILI"
    ],
    "RAMIREZ DE VELAZCO": [
      "RAMIREZ DE VELAZCO"
    ],
    "RAPELLI": [
      "RAPELLI"
    ],
    "REAL SAYANA": [
      "REAL SAYANA"
    ],
    "REMES": [
      "REMES"
    ],
    "SABAGASTA": [
      "SABAGASTA"
    ],
    "SACHAYOJ": [
      "SACHAYOJ"
    ],
    "SAN ANTONIO - ROLDAN": [
      "ROLDAN",
      "SAN ANTONIO"
    ],
    "SAN BENITO": [
      "SAN BENITO"
    ],
    "SAN JOSE DEL BOQUERON": [
      "SAN JOSE DEL BOQUERON"
    ],
    "SAN PEDRO": [
      "SAN PEDRO"
    ],
    "SAN PEDRO DE GUASAYAN": [
      "SAN PEDRO"
    ],
    "SAN RAMON - LA DARSENA": [
      "LA DARSENA",
      "SAN RAMON"
    ],
    "SAN VICENTE": [
      "SAN VICENTE"
    ],
    "SANTA CATALINA": [
      "SANTA CATALINA"
    ],
    "SANTA MARIA": [
      "SANTA MARIA"
    ],
    "SANTIAGO DEL ESTERO": [
      "MAQUITO",
      "SANTIAGO DEL ESTERO"
    ],
    "SANTO DOMINGO": [
      "SANTO DOMINGO"
    ],
    "SANTOS LUGARES": [
      "SANTOS LUGARES"
    ],
    "SAUCE SOLO": [
      "SAUCE SOLO"
    ],
    "SELVA": [
      "SELVA"
    ],
    "SOL DE JULIO": [
      "SOL DE JULIO"
    ],
    "SOL DE MAYO": [
      "SOL DE MAYO"
    ],
    "SOTELO": [
      "SOTELOS"
    ],
    "SUMAMAO": [
      "SUMAMAO"
    ],
    "SUMAMPA": [
      "SUMAMPA"
    ],
    "SUNCHO CORRAL": [
      "SUNCHO CORRAL"
    ],
    "TABOADA": [
      "ESTACION TABOADA"
    ],
    "TACAÑITAS": [
      "ESTACION TACAÑITAS"
    ],
    "TAPSO": [
      "TAPSO"
    ],
    "TERMAS DE RIO HONDO": [
      "TERMAS DE RIO HONDO"
    ],
    "TINTINA": [
      "TINTINA"
    ],
    "TIO POZO": [
      "TIO POZO"
    ],
    "TOMAS YOUNG": [
      "TOMAS YOUNG"
    ],
    "TRES CRUCES": [
      "TRES CRUCES"
    ],
    "VACA HUAÑUNA": [
      "VACA HUAÑUNA"
    ],
    "VACA HUMAN": [
      "VACA HUMAN"
    ],
    "VILELAS": [
      "VILELAS"
    ],
    "VILLA ATAMISQUI": [
      "VILLA ATAMISQUI"
    ],
    "VILLA BRANA": [
      "VILLA BRANA"
    ],
    "VILLA FIGUEROA": [
      "VILLA FIGUEROA"
    ],
    "VILLA GUASAYAN": [
      "VILLA GUASAYAN"
    ],
    "VILLA HIPOLITA": [
      "VILLA HIPOLITA"
    ],
    "VILLA LA PUNTA": [
      "VILLA LA PUNTA"
    ],
    "VILLA MAILIN": [
      "VILLA MAILIN"
    ],
    "VILLA MATOQUE": [
      "VILLA MATOQUE"
    ],
    "VILLA MERCEDES": [
      "VILLA MERCEDES"
    ],
    "VILLA NUEVA": [
      "VILLA NUEVA"
    ],
    "VILLA OJO DE AGUA": [
      "VILLA OJO DE AGUA"
    ],
    "VILLA RIO HONDO": [
      "VILLA RIO HONDO"
    ],
    "VILLA ROBLES": [
      "VILLA ROBLES"
    ],
    "VILLA SALAVINA": [
      "VILLA SALAVINA"
    ],
    "VILLA SILIPICA": [
      "SIMBOL",
      "VILLA SILIPICA"
    ],
    "VILLA UNION": [
      "VILLA UNION"
    ],
    "VILLA ZANJON": [
      "EL ZANJON"
    ],
    "VILMER": [
      "VILMER"
    ],
    "VINARA": [
      "VINARA"
    ],
    "VUELTA DE LA BARRANCA": [
      "VUELTA DE LA BARRANCA"
    ],
    "WEISBURD": [
      "WEISBURD"
    ],
    "YUCHAN": [
      "YUCHAN"
    ]
  },
  "TIERRA DEL FUEGO, ANTÁRTIDA E ISLAS DEL ATLÁNTICO SUR": {
    "AREA SIN GOBIERNO": [
      "BASE BELGRANO II",
      "BASE BROWN",
      "BASE CARLINI",
      "BASE ESPERANZA",
      "BASE MARAMBIO",
      "BASE MATIENZO",
      "BASE ORCADAS",
      "BASE PRIMAVERA",
      "BASE SAN MARTIN",
      "CULLEN",
      "DESTACAMENTO CAMARA",
      "DESTACAMENTO DECEPCION",
      "DESTACAMENTO MELCHIOR",
      "DESTACAMENTO PETREL",
      "EL PARAMO",
      "ESTANCIA SARA",
      "GRYTVIKEN",
      "LAGUNA ESCONDIDA",
      "PRADERA DEL GANSO",
      "PUERTO ARGENTINO",
      "PUERTO DARWIN",
      "PUERTO LEITH",
      "SAN SEBASTIAN"
    ],
    "RIO GRANDE": [
      "RIO GRANDE"
    ],
    "TOLHUIN": [
      "TOLHUIN"
    ],
    "USHUAIA": [
      "USHUAIA"
    ]
  },
  "TUCUMÁN": {
    "7 DE ABRIL": [
      "7 DE ABRIL",
      "CHILCAS",
      "EL CASTORAL",
      "LA RUDA",
      "LAGUNA DE ROBLES",
      "PAMPA POZO",
      "POZO GRANDE"
    ],
    "ACHERAL": [
      "ACHERAL",
      "ALTO DE LEIVA",
      "LA CIENAGA",
      "LOS ROBLES",
      "RINCON DE BALDERRAMA",
      "SAN JOSE DE FLORES"
    ],
    "AGUA DULCE Y LA SOLEDAD": [
      "AGUA DULCE",
      "CONDOR HUASI",
      "ESTACION CACHI YACO",
      "LAGUNA BLANCA",
      "ORAN",
      "TUSCA POZO"
    ],
    "AGUILARES": [
      "AGUILARES",
      "COLONIA SANTA BARBARA",
      "EL TUSCAL",
      "INGENIO SANTA BARBARA",
      "LOS RIOS",
      "MONTE REDONDO",
      "SAN MIGUEL",
      "SANTA ROSA"
    ],
    "ALDERETES": [
      "ALDERETES",
      "BOCA DEL TIGRE",
      "EL CORTE",
      "LAS PIEDRITAS",
      "LOS GUTIERREZ"
    ],
    "ALPACHIRI Y EL MOLINO": [
      "ALPACHIRI",
      "COCHUNA",
      "EL MOLINO",
      "LA CALERA",
      "LAS LENGUAS",
      "LAS PAVAS",
      "MUYO"
    ],
    "ALTO VERDE Y LOS GUCHEA": [
      "ALTO VERDE",
      "CARRETA QUEMADA",
      "CORTADERAS",
      "MONTE RICO VIEJO"
    ],
    "AMAICHA DEL VALLE": [
      "AMAICHA DEL VALLE",
      "AMPIMPA",
      "CALIMONTE",
      "EL CARMEN",
      "EL PASO",
      "EL TIO",
      "LA HOYADA",
      "LOS ZAZOS",
      "SALAS",
      "TIO PUNCO",
      "YASYAMAYO"
    ],
    "AMBERES": [
      "AMBERES"
    ],
    "ANCAJULI": [
      "ANCAJULI",
      "CHASQUIVIL",
      "SAN JOSE DE CHASQUIVIL"
    ],
    "ARCADIA": [
      "ARCADIA",
      "FINCA LA FALDA",
      "FINCA LEON CORNET",
      "GASTONA",
      "GASTONILLA",
      "LA HIGUERA",
      "LAS FALDAS"
    ],
    "AREA SIN GOBIERNO": [
      "CASAS VIEJAS",
      "POZO DE LA ESQUINA"
    ],
    "ATAHONA": [
      "ALTO DE LAS LECHUZAS",
      "AMPATA",
      "ATAHONA",
      "CEJAS DE AROCA"
    ],
    "BANDA DEL RIO SALI": [
      "BANDA DEL RIO SALI",
      "LASTENIA",
      "PACARA",
      "PACARA PINTADO"
    ],
    "BELLA VISTA": [
      "AMAICHA DEL LLANO",
      "BELLA VISTA",
      "COLONIA SOBRECASAS",
      "EL MOLLAR",
      "SAN RAMON"
    ],
    "BENJAMIN ARAOZ  Y EL TAJAMAR": [
      "EL SINQUIAL",
      "EL TAJAMAR",
      "LA TOMA",
      "TARUCA PAMPA",
      "VILLA BENJAMIN ARAOZ"
    ],
    "BUENA VISTA": [
      "BUENA VISTA",
      "BUENA VISTA OESTE",
      "CAMPO VOLANTE"
    ],
    "BURRUYACU": [
      "VILLA BURRUYACU"
    ],
    "CAPITAN CACERES": [
      "CAPITAN CACERES",
      "PUEBLO VIEJO",
      "YACUCHINA"
    ],
    "CEVIL REDONDO": [
      "CEVIL REDONDO",
      "COUNTRY JOCKEY CLUB",
      "CURVA DE LOS VEGAS",
      "VILLA CARMELA"
    ],
    "CHICLIGASTA": [
      "LAS JUNTAS",
      "LAS TALITAS",
      "VILLA CHICLIGASTA",
      "YACUCHIRI"
    ],
    "CHOROMORO": [
      "CHOROMORO",
      "GONZALO",
      "LA HIGUERA",
      "POTRERO GRANDE",
      "RODEO GRANDE",
      "SAN VICENTE",
      "TICUCHO"
    ],
    "CIUDACITA": [
      "CIUDACITA",
      "LOMA DE CIUDACITA"
    ],
    "COLALAO DEL VALLE": [
      "ANJUANA",
      "COLALAO DEL VALLE",
      "EL ARBOLAR",
      "LA FRONTERITA",
      "LARA",
      "PICHAO",
      "QUILMES",
      "RINCON DE QUILMES"
    ],
    "COLOMBRES": [
      "COLOMBRES",
      "ESTACION CRUZ DEL NORTE",
      "GENERAL PAZ",
      "POZO DEL ALTO",
      "SAN MIGUELITO"
    ],
    "CONCEPCION": [
      "CONCEPCION",
      "ILTICO",
      "SAN ROQUE"
    ],
    "DELFIN GALLO": [
      "BARRIO AEROPUERTO",
      "CEVIL POZO",
      "COLONIA LA BONARIA",
      "EX INGENIO LUJAN"
    ],
    "EL BRACHO Y EL CEVILAR": [
      "EL BRACHO",
      "EL CEVILAR"
    ],
    "EL CADILLAL": [
      "EL CADILLAL"
    ],
    "EL CERCADO": [
      "EL CERCADO",
      "EL CHURQUI"
    ],
    "EL CHAÑAR": [
      "BOCA DEL TIGRE",
      "EL CHAÑAR",
      "EL ESPINILLO",
      "LA MARTA",
      "TACO PALTA",
      "TAQUELLO"
    ],
    "EL MANANTIAL": [
      "BARRIO ARAUJO",
      "EL MANANTIAL",
      "LA RINCONADA"
    ],
    "EL MOJON": [
      "EL MOJON",
      "EL QUIMIL",
      "VICLOS"
    ],
    "EL MOLLAR": [
      "EL MOLLAR",
      "EL RINCON",
      "ESQUINA DEL VALLE",
      "LA ANGOSTURA",
      "LA JUNTA",
      "LAS CARRERAS",
      "LOS CUARTOS",
      "OJO DE AGUA",
      "RODEO GRANDE",
      "SANTA CRUZ"
    ],
    "EL NARANJITO": [
      "AGUA DULCE",
      "EL NARANJITO",
      "FAVORINA",
      "LA TALA",
      "SAN VICENTE"
    ],
    "EL NARANJO Y EL SUNCHAL": [
      "BARRIO SAN JORGE",
      "EL NARANJO",
      "EL SUNCHAL",
      "LAS CORZUELAS",
      "MARIÑO",
      "TRANQUITAS"
    ],
    "EL POLEAR": [
      "LOS CORDOBA",
      "RIO CHICO"
    ],
    "EL PUESTITO": [
      "AGUA BLANCA",
      "EL OBRAJE",
      "EL PUESTITO",
      "EL PUESTITO DE ARRIBA",
      "POZO CAVADO",
      "REQUELME",
      "SAN JOSE",
      "TALA PAMPA"
    ],
    "EL SACRIFICIO": [
      "ALTO DEL PUESTO",
      "EL NOGAL",
      "EL SACRIFICIO",
      "LA INVERNADA",
      "LA SALVACION"
    ],
    "EL TIMBO": [
      "ALTA GRACIA",
      "EL CADILLAL",
      "LAS SALINAS",
      "TIMBO NUEVO",
      "TIMBO VIEJO"
    ],
    "ESCABA": [
      "EL MOLLAR",
      "ESCABA DE ABAJO",
      "ESCABA DE ARRIBA"
    ],
    "ESQUINA Y MANCOPA": [
      "ERIN",
      "ESQUINA",
      "ESQUINA DEL LLANO",
      "MANCOPA",
      "MANCOPA CHICO"
    ],
    "ESTACION ARAOZ Y TACANAS": [
      "ESTACION ARAOZ",
      "LAS TUSQUITAS",
      "TRES POZOS"
    ],
    "FAMAILLA": [
      "AGUA BLANCA",
      "BARRIO CASA ROSADA",
      "BARRIO OESTE",
      "CAMPO DE HERRERA",
      "CUMBRE EL MATADERO",
      "EL CRUCE",
      "ESTACION PADILLA",
      "EX INGENIO NUEVA BAVIERA",
      "FAMAILLA",
      "INGENIO FRONTERITA",
      "KILOMETRO102",
      "LA RINCONADA",
      "MONTE GRANDE",
      "SAN GABRIEL",
      "SAN GABRIEL DEL MONTE",
      "SANTA CLARA"
    ],
    "GARMENDIA": [
      "EL TRIUNFO",
      "GARMENDIA",
      "PAJA COLORADA",
      "PASO DE LA PATRIA",
      "PUERTA ALEGRE"
    ],
    "GASTONA Y BELICHA": [
      "BELICHA",
      "BELICHA HUAICO",
      "GASTONA NORTE",
      "GASTONA SUR",
      "YUCUMANITA"
    ],
    "GRANEROS": [
      "ALTO DEL PUESTO",
      "BARRANQUERAS",
      "CAMPO GRANDE",
      "CASAS VIEJAS",
      "CHACRAS VIEJAS",
      "GRANEROS",
      "ICHIPUCA",
      "LOS DIAZ",
      "TACO RODEO",
      "TORO MUERTO"
    ],
    "HUASA PAMPA": [
      "BAJASTINE",
      "EL POTRERILLO",
      "HUASA PAMPA SUR",
      "PUEBLO VIEJO",
      "QUEBRACHITO"
    ],
    "JUAN BAUTISTA ALBERDI": [
      "CAMPO BELLO",
      "DONATO ALVAREZ",
      "JUAN BAUTISTA ALBERDI",
      "LA CALERA",
      "NARANJO ESQUINA",
      "YAQUILO"
    ],
    "LA COCHA": [
      "ALTO DE LA COCHA",
      "EL PORVENIR",
      "LA COCHA",
      "LA POSTA",
      "MONTE GRANDE",
      "VILLA NUEVA"
    ],
    "LA ESPERANZA": [
      "NUEVA ESPERANZA",
      "TAFICILLO"
    ],
    "LA FLORIDA Y LUISIANA": [
      "EL FORTIN",
      "EL PARAISO",
      "EL TALAR",
      "EX INGENIO ESPERANZA",
      "INGENIO LA FLORIDA",
      "LA FLORIDA"
    ],
    "LA RAMADA Y LA CRUZ": [
      "EL RODEO",
      "LA CRUZ",
      "LA CRUZ DE ARRIBA",
      "LA RAMADA",
      "MACOMITAS",
      "SAN JOSE DE MACOMITAS",
      "TUSCA PAMPA"
    ],
    "LA TRINIDAD": [
      "EL MILAGRO",
      "LA ESPERANZA",
      "LA TRINIDAD",
      "SAN CARLOS"
    ],
    "LAMADRID": [
      "AMUMPA",
      "ARBOLES GRANDES",
      "BARRANCAS",
      "DOS POZOS",
      "LA ESPERANZA",
      "LA LOMA",
      "LAGUNA LARGA",
      "LAMADRID",
      "LAS ANIMAS",
      "LAS LOMITAS",
      "LOS CERCOS",
      "LOS RANCHILLOS",
      "LOS RUIZ",
      "LOS SAUCES",
      "SOL DE MAYO"
    ],
    "LAS CEJAS": [
      "BLANCO POZO",
      "LAS CEJAS",
      "RAFAELA POZO"
    ],
    "LAS TALAS": [
      "EL SUNCHAL",
      "FINCA TINA",
      "LAS TALAS"
    ],
    "LAS TALITAS": [
      "ARSENAL MIGUEL DE AZCUENAGA",
      "DIAG. NORTE - LUZ Y FUERZA - LOS POCITOS",
      "VILLA MARIANO MORENO - EL COLMENAR"
    ],
    "LEALES": [
      "LOS QUEMADOS",
      "SAN ANTONIO",
      "VILLA DE LEALES",
      "VIZCACHERAL"
    ],
    "LEON ROUGES Y STA": [
      "HUASA PAMPA",
      "ISLA SAN JOSE",
      "ORAN",
      "PILCO",
      "PUEBLO INDEPENDENCIA",
      "YONOPONGO"
    ],
    "LOS BULACIO Y LOS VILLAGRA": [
      "LOS BULACIOS"
    ],
    "LOS GOMEZ": [
      "LOS JUAREZ"
    ],
    "LOS NOGALES": [
      "BARRIO EL CRUCE",
      "BARRIO LOMAS DE TAFI",
      "BARRIO LOS POCITOS (LAS TALITAS)",
      "BARRIO MUTUAL SAN MARTIN",
      "LA AGUADITA",
      "LOS NOGALES"
    ],
    "LOS PEREYRA": [
      "LOS PEREYRA NORTE"
    ],
    "LOS PEREZ": [
      "COLONIA MAYO - BARRIO LA MILAGROSA",
      "FINCA MAYO",
      "LOLITA",
      "LOS PEREZ",
      "SAN AGUSTIN"
    ],
    "LOS PUESTOS": [
      "AGUA SALADA",
      "CAMPO AZUL",
      "CARANCHO POZO",
      "EL CARMEN",
      "EL GUARDAMONTE",
      "LA ENCRUCIJADA",
      "LA FLORIDA",
      "LOS BRITOS",
      "LOS DIAZ",
      "LOS HERRERA",
      "LOS PUESTOS",
      "MOLLE POZO",
      "MONTE BELLO",
      "PUESTO CHICO",
      "YALAPA"
    ],
    "LOS RALOS": [
      "CAMPO LA FLOR",
      "EX INGENIO LOS RALOS",
      "LAS MERCEDES",
      "VILLA RECASTE",
      "VILLA TERCERA"
    ],
    "LOS SARMIENTOS Y LA TIPA": [
      "EL RODEO",
      "LA TIPA",
      "LOS SARMIENTOS"
    ],
    "LOS SOSA": [
      "EL NARANJAL",
      "LA RAMADITA",
      "LAS MESADAS",
      "LOS SOSA"
    ],
    "MANUEL GARCIA FERNANDEZ": [
      "LA BOLSA",
      "MANUEL GARCIA FERNANDEZ"
    ],
    "MANUELA PEDRAZA": [
      "BALDERRAMA",
      "ESTACION MANUELA PEDRAZA",
      "LA RINCONADA"
    ],
    "MEDINA": [
      "MEDINA",
      "SAN RAMON"
    ],
    "MONTE BELLO": [
      "LAS ANIMAS",
      "MONTE BELLO"
    ],
    "MONTEAGUDO": [
      "ARROYO ATAHONA",
      "LA REINA",
      "LAZARTE",
      "LOS AMAYA",
      "LOS PEREZ",
      "MONTEAGUDO",
      "PALOMINOS"
    ],
    "MONTEROS": [
      "MONTEROS"
    ],
    "PAMPA MAYO": [
      "EL OVAL",
      "GUEMES",
      "LAS CEJAS",
      "PAMPA MAYO"
    ],
    "PIEDRABUENA": [
      "EL ONCE",
      "LA SOLEDAD",
      "LA TUNA",
      "LA UNION",
      "LA VERDE",
      "LA VIRGINIA",
      "PIEDRABUENA",
      "PUESTO DEL MEDIO",
      "SAN MIGUEL",
      "SANTA ROSA",
      "TALA POZO",
      "VILLA DOLORES",
      "VILLA MARIA"
    ],
    "QUILMES Y LOS SUELDOS": [
      "ESTACION LA ENCANTADA",
      "LOS SUELDOS",
      "PALA PALA",
      "QUILMES",
      "SAN NICOLAS",
      "VILLA FIAD - INGENIO LEALES"
    ],
    "RACO": [
      "ALTO DE ANFAMA",
      "ANFAMA",
      "LA HOYADA",
      "LAS TIPAS",
      "RACO",
      "SAN JAVIER",
      "SAN JOSE DE RACO"
    ],
    "RANCHILLOS Y SAN MIGUEL": [
      "ARBOL SOLO",
      "BAJO GRANDE",
      "CARBON POZO",
      "EL PUESTO",
      "RANCHILLOS"
    ],
    "RIO CHICO Y NUEVA TRINIDAD": [
      "EL DURAZNO",
      "EL PACARA",
      "LA JUNTA",
      "NIOGASTA",
      "NUEVA TRINIDAD",
      "SANTA ISABEL",
      "SUR DE LAZARTE",
      "SUR DE TREJOS"
    ],
    "RIO COLORADO": [
      "ENTRE RIOS",
      "MANCHALA",
      "RIO COLORADO",
      "SAN JOSE DE BUENA VISTA"
    ],
    "RIO SECO": [
      "RIO SECO"
    ],
    "RUMI PUNCO": [
      "HUACRA",
      "RUMI PUNCO"
    ],
    "SAN ANDRES": [
      "COLONIA SAN JOSE",
      "EL CARMEN",
      "LOS PORCELES",
      "SAN ANDRES"
    ],
    "SAN FELIPE Y SANTA BARBARA": [
      "BARRIO SAN FELIPE",
      "LOS AGUIRRE",
      "PUENTE EL MANANTIAL",
      "SANTA BARBARA"
    ],
    "SAN ISIDRO DE LULES": [
      "EL CEIBAL",
      "LA BOLSA",
      "LA REDUCCION",
      "LULES",
      "POTRERO GRANDE",
      "SAN RAFAEL",
      "TECOTEX"
    ],
    "SAN JAVIER": [
      "SAN JAVIER"
    ],
    "SAN JOSE DE LA COCHA": [
      "SAN JOSE DE LA COCHA"
    ],
    "SAN MIGUEL DE TUCUMAN": [
      "SAN MIGUEL DE TUCUMAN"
    ],
    "SAN PABLO Y VILLA NOUGUES": [
      "EL DURAZNILLO",
      "EL NOGALITO",
      "INGENIO SAN PABLO",
      "LOS NOGALITOS",
      "MALA MALA",
      "MUNDO NUEVO",
      "POTRERO DE LAS TABLAS",
      "PUNTA DEL MONTE"
    ],
    "SAN PEDRO DE COLALAO": [
      "CHULCA",
      "HUALINCHAY",
      "REARTE",
      "REARTE SUR",
      "SAN FERNANDO",
      "SAN PEDRO DE COLALAO",
      "ZARATE",
      "ZARATE NORTE",
      "ZARATE SUR"
    ],
    "SAN PEDRO Y SAN ANTONIO": [
      "EL MOLLAR",
      "EL PUESTO",
      "LA TUNA",
      "PUESTO LOS VALDEZ",
      "SAN ANTONIO DE PADUA",
      "SAN PEDRO MARTIR"
    ],
    "SANTA ANA": [
      "SANTA ANA",
      "VILLA CLODOMIRO HILERET"
    ],
    "SANTA CRUZ Y LA TUNA": [
      "SANTA CRUZ"
    ],
    "SANTA LUCIA": [
      "CASPINCHANGO",
      "SANTA LUCIA"
    ],
    "SANTA ROSA DE LEALES Y LAGUNA BLAN": [
      "AGUA AZUL",
      "EL CORTADERAL",
      "LAS MERCEDES",
      "LOMA VERDE",
      "LOS CAMPEROS",
      "MIXTA",
      "PUMA POZO",
      "ROMERA POZO",
      "SANTA ROSA DE LEALES"
    ],
    "SARGENTO MOYA": [
      "SARGENTO MOYA"
    ],
    "SIMOCA": [
      "SIMOCA"
    ],
    "SOLDADO MALDONADO": [
      "SOLDADO MALDONADO"
    ],
    "TACO RALO": [
      "CAMPO BELLO",
      "EL DURAZNO",
      "EL JARDIN",
      "EL MISTOL",
      "EL PARAISO",
      "EL PUESTITO",
      "EL QUEBRACHITO",
      "EL SIMBOL",
      "EL ZAPALLAR",
      "LA CHILCA",
      "LA FLORIDA",
      "LA IGUANA",
      "LOS MISTOLES",
      "LOS MOLLES",
      "PAEZ",
      "POZO HONDO",
      "POZO VERDE",
      "PUESTO DEL MEDIO",
      "PUESTO LOS PEREZ",
      "RAMOS",
      "SANTA ROSA",
      "TACO RALO",
      "VILLA PUJIO"
    ],
    "TAFI DEL VALLE": [
      "EL INFIERNILLO",
      "LA BOLSA",
      "LA CIENAGA",
      "LAS TACANAS",
      "TAFI DEL VALLE"
    ],
    "TAFI VIEJO": [
      "BARRIO PARADA 14",
      "BARRIO U.T.A. II",
      "LA PICADA",
      "LOS POCITOS",
      "TAFI VIEJO",
      "VILLA LAS FLORES"
    ],
    "TAPIA": [
      "LA LAGUNITA",
      "VIPOS"
    ],
    "TENIENTE BERDINA": [
      "TENIENTE BERDINA"
    ],
    "TRANCAS": [
      "ARAGON",
      "BENJAMIN PAZ",
      "EL BRETE",
      "EL SAUCE",
      "EL SIMBOLAR",
      "LA ESPERANZA",
      "LAS ARCAS",
      "LAS JUNTAS",
      "LEOCADIO PAZ",
      "SAN ISIDRO",
      "SAN JOSE",
      "TUNA SOLA",
      "VILLA DE TRANCAS"
    ],
    "VILLA BELGRANO": [
      "EL CHURQUI",
      "TALAMUYO",
      "VILLA BELGRANO"
    ],
    "VILLA PADRE MONTI": [
      "AGUA NEGRA",
      "ALTO DE MEDINA",
      "EL NOGALITO",
      "EL TIPAL",
      "LA CUCHILLA",
      "LA RINCONADA",
      "LAS LAJITAS",
      "RIO DEL NIO",
      "VACAHUASI",
      "VILLA PADRE MONTI"
    ],
    "VILLA QUINTEROS": [
      "LA FLORIDA",
      "LOS ROJOS",
      "VILLA QUINTEROS"
    ],
    "YANIMA": [
      "EL CORRALITO",
      "YANIMAS"
    ],
    "YERBA BUENA": [
      "BALDERRAMA SUR",
      "BARRIO SAN JOSE III",
      "EL CORTE",
      "EL JARDIN",
      "EX INGENIO SAN JOSE",
      "VILLA SAN JAVIER",
      "YERBA BUENA",
      "YERBA BUENA - MARCOS PAZ"
    ]
  }
};

// Estructura maestra: Categoría -> Marca -> Modelo -> Versiones
export const VEHICLE_DATA_MAP: {
  [category: string]: {
    [brand: string]: {
      [model: string]: string[]
    }
  }
} = {
  "Autos": {
    "Alfa Romeo": {
      "159": [
        "1,8 TBI 200CV DISTINCTIVE",
        "2,2 JTS 185CV S-SPEED CRO",
        "2,2 JTS 189CV S-SPEED DISTINCTIVE",
        "3,2 JTS HIGHT 4X4 CA ELEGANCE",
        "Otro"
      ],
      "Brera": [
        "2,2 JTS S-SPEED 6TA",
        "3,2 MD 4X4 CA",
        "Otro"
      ],
      "Giulia": [
        "2,0 T AT RDW 200CV DISTINCTIVE",
        "2,0 T AT AWD 280CV VELOCE",
        "2,9 BT AT RDW 510CV QUADRIFOGLIO",
        "2,9 BT 8AT 520CV QV SUPER SPORT",
        "Otro"
      ],
      "Giulietta": [
        "1,4 120CV PROG. SPRINT M6",
        "1,4 120CV PROG. SPRINT M6 CRO MILANO",
        "1,4 120CV PROG. SPRINT M6 CRO MILANO TECHNOLOGY",
        "1,4 120CV PROG. SPRINT M6 CRO MILANO NAV",
        "1,4 120CV PROGRESSION",
        "1,4 120CV PROGRESSION CRO MILANO",
        "1,4 120CV DISTINCTIVE",
        "1,4 170CV DISTINCTIVE",
        "1,4 170CV DISTINCTIVE T/C",
        "1,4 170CV DISTINCTIVE TCT AT",
        "1,4 170CV DISTINCTIVE TCT T/C AT",
        "1,4 170CV DISTINCTIVE TCT T/C AT CRO",
        "1,4 170CV DISTINCTIVE TCT PREMIUM",
        "1,4 170CV DISTINCTIVE TCT 6M",
        "1,4 170CV DISTINCTIVE TCT 6M CRO MILANO",
        "1,4 170CV DISTINCTIVE TCT 6M CRO MILANO TECHNOLO GY",
        "1,4 170CV DISTINCTIVE TCT 6M CRO MILANO TECHNOLO GY T/C",
        "1,4 170CV DISTINCTIVE TCT 6M ASIENTO ELEC",
        "1,4 170CV DISTINCTIVE TCT 6M ASIENTO ELEC NAV",
        "1,4 170CV TCT PROGRESSION AT",
        "1,4 170CV TCT PROGRESSION AT CRO",
        "1,8 TBI 235CV QUADRIFOGLIO",
        "1,8 TBI 235CV QUADRIFOGLIO T/C",
        "1,8 T 240CV QUADRIFOGLIO TCT VELOCE",
        "1,8 T 240CV QUADRIFOGLIO TCT VELOCE T/C",
        "1,8 TCT 240CV VELOCE",
        "1,8 TCT 240CV VELOCE CRO ASIENTO ELEC",
        "1,8 TCT 240CV VELOCE CRO ASIENTO ELEC NAV",
        "1,8 TCT 240CV VELOCE GRIGIO RACER",
        "Otro"
      ],
      "MiTo": [
        "1,4 JUNIOR",
        "1,4 JUNIOR CRO MILANO",
        "1,4 JUNIOR CRO MILANO TECHNOLOGY",
        "1,4 JUNIOR CRO MILANO TECHNOLOGY NAV",
        "1,4 PROGRESSION M5",
        "1,4 PROGRESSION M5 CRO MILANO",
        "1,4 PROGRESSION M5 CRO MILANO TECHNOLOGY",
        "1,4 PACK RACER",
        "1,4 MULTIAIR 6TA PROGRESSION",
        "1,4 MULTIAIR 6TA PLUS",
        "1,4 TBI 6TA DISTINCTIVE",
        "1,4 TBI 6TA DISTINCTIVE T/C",
        "1,4 T MULTIAIR 6TA DISTINCTIVE",
        "1,4 T MULTIAIR 6TA DISTINCTIVE T/C",
        "1,4 TBI 6TA QUADRIFOGLIO T/C",
        "1,4 T PROGRESSION TCT",
        "1,4 T PROGRESSION TCT CRO MILANO",
        "1,4 T QV M6 CRO ALCANTARA",
        "1,4 T QV M6 CRO ALCANTARA T/C",
        "1,4 T QV M6 CRO MILANO",
        "1,4 T QV M6 CRO MILANO T/C",
        "1,4 T QV M6 CRO MILANO T/C PREMIUM",
        "1,4 T QV M6 CRO MILANO T/C PACK RACER",
        "1,4 T TCT DISTINCTIVE AT",
        "1,4 T TCT DISTINCTIVE T/C",
        "1,4 T 170CV VELOCE M6",
        "1,4 T 170CV VELOCE M6 CRO MILANO",
        "1,4 T 170CV VELOCE M6 CRO MILANO TECHNOLOGY",
        "1,4 T 170CV VELOCE M6 CRO MILANO TECHNOLOGY NAV",
        "1,4 T 170CV VELOCE M6 CRO MILANO TECHNOLOGY NAV SUNROOF",
        "1,4 T 170CV VELOCE TCT",
        "1,4 T 170CV VELOCE TCT CRO MILANO",
        "1,4 T 170CV VELOCE TCT CRO MILANO TECHNOLOGY",
        "1,4 T 170CV VELOCE TCT CRO MILANO TECHNOLOGY NAV",
        "1,4 T 170CV VELOCE TCT CRO MILANO TECHNOLOGY NAV SUNROOF",
        "1,4 T 170CV QUADRIFOGLIO 6M",
        "1,4 T 170CV QUADRIFOGLIO 6M CRO MILANO",
        "1,4 T 170CV QUADRIFOGLIO 6M CRO MILANO TECHNOLOG Y",
        "1,4 T 170CV QUADRI 6M CRO MILA TECHNOLOGY RACER",
        "1,4T SPORT",
        "1,4T SPORT T/C",
        "SPIDER",
        "2,2 JTS S-SPEED 6TA",
        "STELVIO",
        "2,0 T AT AWD 200CV DISTINCTIVE",
        "2,0 T AT AWD 280CV VELOCE",
        "2,0 T AT AWD 280CV SUPER Q4",
        "2,9 BT RWD 510CV QUADRIFOGLIO",
        "TONALE",
        "1,5 T 7AT MHEV SPRINT",
        "1,5 T 7AT MHEV VELOCE",
        "1,3 T 6AT PHEV 4Q TRIBUTO ITALIANO",
        "ARCFOX",
        "KOALA S",
        "MINIVAN ELECTRICA",
        "S5",
        "SEDAN SPORTBACK ELECTRICO",
        "T1",
        "SUV SUBCOMPACTO ELECTRICO",
        "T5",
        "SUV CROSSOVER ELECTRICO",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Audi": {
      "A1": [
        "Otro"
      ],
      "A3": [
        "1,4 TFSI",
        "1,4 TFSI S-TRONIC",
        "1,4 TFSI ALCANTARA",
        "1,4 TFSI ALCANTARA S-TRONIC",
        "1,4 TFSI CRO",
        "1,4 TFSI CRO S-TRONIC",
        "1,4 TFSI PREMIUM",
        "1,4 TFSI PREMIUM S-TRONIC",
        "1,4 TFSI PLUS",
        "1,4 TFSI PLUS S-TRONIC",
        "1,6",
        "1,6 ALCANTARA",
        "1,6 CRO",
        "1,6 PREMIUM",
        "1,6 PLUS",
        "1,8 TFSI",
        "1,8 TFSI S-TRONIC",
        "1,8 TFSI ALCANTARA",
        "1,8 TFSI ALCANTARA S-TRONIC",
        "1,8 TFSI CRO",
        "1,8 TFSI CRO S-TRONIC",
        "1,8 TFSI PREMIUM",
        "1,8 TFSI PREMIUM S-TRONIC",
        "1,8 TFSI PLUS",
        "1,8 TFSI PLUS S-TRONIC",
        "1,8 TFSI S-TRONIC QUATTRO",
        "2,0 TFSI",
        "2,0 TFSI TIPT",
        "2,0 TFSI ALCANTARA",
        "2,0 TFSI ALCANTARA TIPT",
        "2,0 TFSI CRO",
        "2,0 TFSI CRO TIPT",
        "2,0 TFSI PREMIUM",
        "2,0 TFSI PREMIUM TIPT",
        "2,0 TFSI S-TRONIC",
        "2,0 TDi S-TRONIC",
        "2,0 TDi S-TRONIC ALCANTARA",
        "2,0 TDi S-TRONIC CRO",
        "2,0 TDi S-TRONIC PREMIUM",
        "1,4 TFSI 35 150CV",
        "1,4 TFSI 35 150CV ADVANCED",
        "2,0 TFSI S-TRONIC LINE STYLE",
        "2,0 TFSI 40 190CV S LINE",
        "2,0 TFSI 40 190CV ADVANCE S-TRONIC",
        "2,0 TFSI 190CV S LINE",
        "1,4 TFSI SPORTBACK",
        "1,4 TFSI SPORTBACK S-TRONIC",
        "1,4 TFSI SPORTBACK ALCANTARA",
        "1,4 TFSI SPORTBACK ALCANTARA S-TRONIC",
        "1,4 TFSI SPORTBACK CRO",
        "1,4 TFSI SPORTBACK CRO S-TRONIC",
        "1,4 TFSI SPORTBACK PREMIUM",
        "1,4 TFSI SPORTBACK PREMIUM S-TRONIC",
        "1,4 TFSI SPORTBACK PLUS",
        "1,4 TFSI SPORTBACK PLUS S-TRONIC",
        "1,4 TFSI SPORTBACK 35 150CV",
        "1,4 TFSI SPORTBACK 35 150CV 8TRIP",
        "1,4 TFSI SPORTBACK 35 150CV 8TRIP ADVANCED",
        "1,6 SPORTBACK",
        "1,6 SPORTBACK TIPT",
        "1,6 SPORTBACK ALCANTARA",
        "1,6 SPORTBACK CRO",
        "1,6 SPORTBACK PREMIUM",
        "1,6 SPORTBACK PLUS",
        "1,8 TFSI SPORTBACK",
        "1,8 TFSI SPORTBACK S-TRONIC",
        "1,8 TFSI SPORTBACK ALCANTARA",
        "1,8 TFSI SPORTBACK ALCANTARA S-TRONIC",
        "1,8 TFSI SPORTBACK CRO",
        "1,8 TFSI SPORTBACK CRO S-TRONIC",
        "1,8 TFSI SPORTBACK PREMIUM",
        "1,8 TFSI SPORTBACK PREMIUM S-TRONIC",
        "1,8 TFSI SPORTBACK PLUS",
        "1,8 TFSI SPORTBACK PLUS S-TRONIC",
        "1,8 TFSI SPORTBACK 180CV",
        "1,8 TFSI SPORTBACK S-TRONIC 180CV",
        "1,8 TFSI SPORTBACK S-TRONIC QUATTRO 180CV",
        "2,0 TFSI SPORTBACK",
        "2,0 TFSI SPORTBACK S-TRONIC",
        "2,0 TFSI SPORTBACK ALCANTARA",
        "2,0 TFSI SPORTBACK ALCANTARA S-TRONIC",
        "2,0 TFSI SPORTBACK CRO",
        "2,0 TFSI SPORTBACK CRO S-TRONIC",
        "2,0 TFSI SPORTBACK PREMIUM",
        "2,0 TFSI SPORTBACK PREMIUM S-TRONIC",
        "2,0 TFSI SPORTBACK S-TRONIC LINE STYLE",
        "2,0 TFSI SPORTBACK 40 190CV S LINE",
        "2,0 TDi SPORTBACK S-TRONIC",
        "2,0 TDi SPORTBACK S-TRONIC ALCANTARA",
        "2,0 TDi SPORTBACK S-TRONIC CRO",
        "2,0 TDi SPORTBACK S-TRONIC PREMIUM",
        "Otro"
      ],
      "A4": [
        "1,8 TFSI ATTRACTION",
        "1,8 TFSI ATTRACTION MULTI",
        "1,8 TFSI PLUS AMBITION",
        "1,8 TFSI PLUS AMBITION MULTI",
        "1,8 TFSI SPORT CRO",
        "1,8 TFSI SPORT CRO MULTI",
        "1,8 TFSI SPORT ALCANTARA",
        "1,8 TFSI SPORT ALCANTARA MULTI",
        "1,8 TFSI SPORT CRO PLUS",
        "1,8 TFSI SPORT CRO PLUS MULTI",
        "1,8 TFSI ATTRACTION MULTITRONIC",
        "1,8 TFSI PLUS AMBITION MULTITRONIC",
        "2,0 TFSI ATTRACTION",
        "2,0 TFSI ATTRACTION MULTI",
        "2,0 TFSI PLUS AMBITION",
        "2,0 TFSI PLUS AMBITION MULTI",
        "2,0 TFSI SPORT ALCANTARA",
        "2,0 TFSI SPORT ALCANTARA MULTI",
        "2,0 TFSI SPORT CRO",
        "2,0 TFSI SPORT CRO MULTI",
        "2,0 TFSI QUATTRO ATTRACTION",
        "2,0 TFSI QUATTRO ATTRACTION S-TRONIC",
        "2,0 TFSI QUATTRO PLUS AMBITION",
        "2,0 TFSI QUATTRO PLUS AMBITION S-TRONIC",
        "2,0 TFSI QUATTRO SPORT ALCANTARA",
        "2,0 TFSI QUATTRO SPORT ALCANTARA S-TRONIC",
        "2,0 TFSI QUATTRO SPORT CRO",
        "2,0 TFSI QUATTRO SPORT CRO S-TRONIC",
        "2,0 TDi MULTI ATTRACTION",
        "2,0 TDi MULTI SPORT CRO",
        "2,0 TDi MULTI PLUS AMBITION",
        "2,0 TDi ATTRACTION MULTI",
        "2,0 TDi SPORT ALCANTARA MULTI",
        "2,0 TDi SPORT CRO MULTI",
        "2,0 TDi PLUS AMBITION MULTI",
        "2,0 TFSI 190CV",
        "2,0 TFSI 190CV S-TRONIC FRONT",
        "2,0 TFSI 252CV S-TRONIC FRONT",
        "2,0 TFSI 252CV S-TRONIC QUATTRO",
        "2,0 TFSI 190CV 40",
        "2,0 TFSI 40 ADVANCED",
        "2,0 TFSI 45 S-TRONIC QUATTRO ADVANCE MH",
        "3,0 TFSI S-TRONIC QUATTRO",
        "3,0 TDi QUATTRO S-TRONIC",
        "3,2 QUATTRO",
        "3,2 QUATTRO TIPT",
        "Otro"
      ],
      "A5": [
        "SPORTBACK 2,0 TFSI",
        "SPORTBACK 2,0 TFSI MULTI",
        "SPORTBACK 2,0 TFSI SPORT ALCANTARA",
        "SPORTBACK 2,0 TFSI SPORT ALCANTARA MULTI",
        "SPORTBACK 2,0 TFSI SPORT CRO",
        "SPORTBACK 2,0 TFSI SPORT CRO MULTI",
        "SPORTBACK 2,0 TFSI PLUS",
        "SPORTBACK 2,0 TFSI PLUS MULTI",
        "SPORTBACK 2,0 TFSI S-TRONIC",
        "SPORTBACK 2,0 TFSI 190CV 40 FRONT",
        "SPORTBACK 2,0 TFSI 40 S-TRONIC",
        "SPORTBACK 2,0 TFSI QUATTRO",
        "SPORTBACK 2,0 TFSI QUATTRO S-TRONIC",
        "SPORTBACK 2,0 TFSI QUATTRO SPORT ALCANTARA",
        "SPORTBACK 2,0 TFSI QUATTRO SPORT ALCANTARA MULTI",
        "SPORTBACK 2,0 TFSI QUATTRO SPORT CRO",
        "SPORTBACK 2,0 TFSI QUATTRO SPORT CRO MULTI",
        "SPORTBACK 2,0 TFSI QUATTRO PLUS",
        "SPORTBACK 2,0 TFSI QUATTRO PLUS MULTI",
        "SPORTBACK 2,0 TFSI QUATTRO 252CV 45",
        "SPORTBACK 2,0 TFSI QUATTRO 45",
        "SPORTBACK 3,0 TFSI QUATTRO S-TRONIC",
        "SPORTBACK 3,2 FSI QUATTRO S-TRONIC",
        "2,0 TFSI",
        "2,0 TFSI MULTI",
        "2,0 TFSI SPORT ALCANTARA",
        "2,0 TFSI SPORT ALCANTARA MULTI",
        "2,0 TFSI SPORT CRO",
        "2,0 TFSI SPORT CRO MULTI",
        "2,0 TFSI PLUS",
        "2,0 TFSI PLUS MULTI",
        "2,0 TFSI S-TRONIC",
        "2,0 TFSI 190CV 40 FRONT",
        "2,0 TFSI 40",
        "2,0 TFSI QUATTRO",
        "2,0 TFSI QUATTRO S-TRONIC",
        "2,0 TFSI QUATTRO SPORT ALCANTARA",
        "2,0 TFSI QUATTRO SPORT ALCANTARA S-TRONIC",
        "2,0 TFSI QUATTRO SPORT CRO",
        "2,0 TFSI QUATTRO SPORT CRO S-TRONIC",
        "2,0 TFSI QUATTRO PLUS",
        "2,0 TFSI QUATTRO PLUS S-TRONIC",
        "2,0 TFSI QUATTRO 252CV 45",
        "2,0 TFSI QUATTRO 45",
        "3,0 TFSI QUATTRO S-TRONIC",
        "3,2 QUATTRO",
        "3,2 QUATTRO S-TRONIC",
        "3,2 FSI QUATTRO S-TRONIC",
        "2,0 TFSI S-TRONIC 190CV MILDHYBIRD ADVANCE",
        "2,0 TFSI S-TRONIC 272CV MILDHYBIRD S-LINE QUATTR O",
        "Otro"
      ],
      "A6": [
        "2,8 FSI MULTI",
        "3,0 TFSI QUATTRO S-TRONIC",
        "3,0 TFSI QUATTRO 340CV 55",
        "3,0 TDi S-TRONIC QUATTRO",
        "Otro"
      ],
      "A7": [
        "SPORTBACK 3.0 FSI V6 S-TRONIC QUATTRO",
        "SPORTBACK 3.0 FSI QUATTRO 340CV 55",
        "SPORTBACK 3.0 TDi S-TRONIC QUATTRO",
        "Otro"
      ],
      "A8": [
        "4.2 TFSI QUATTRO TIPT",
        "4,0 V8 TFSI TRONIC QUATTRO",
        "4,0 V8 TFSI TRONIC QUATTRO L",
        "4,0 TFSI QUATTRO 460CV 60",
        "4,0 TFSI QUATTRO 460CV 60 L",
        "ALLROAD",
        "A 4 2,0 TFSI QUATTRO S-TRONIC",
        "A 4 2,0 TFSI QUATTRO S-TRONIC ATTRACTION",
        "A 4 2,0 TFSI QUATTRO S-TRONIC AMBITION",
        "A 4 2,0 TFSI QUATTRO S-TRONIC STR MH",
        "A 6 3,0 TFSI S-TRONIC QUATTRO",
        "A 6 3,0 TFSI QUATTRO 340CV 55",
        "A 6 3,0 TDi S-TRONIC QUATTRO",
        "Otro"
      ],
      "R8": [
        "4,2 FSI QUATTRO",
        "4,2 FSI QUATTRO S-TRONIC",
        "5,2 FSI QUATTRO",
        "5,2 FSI QUATTRO S-TRONIC",
        "5,2 V10 PLUS QUATTRO S-TRONIC",
        "SPYDER 5,2 FSI QUATTRO",
        "SPYDER 5,2 FSI QUATTRO S-TRONIC",
        "SPYDER 5,2 V10 PLUS QUATTRO S-TRONIC",
        "Otro"
      ],
      "RS3": [
        "2,5 TFSI S-TRONIC QUATTRO 400CV",
        "2,5 TFSI S-TRONIC QUATTRO 400CV SPORTBACK",
        "TFSI S-TRONIC 400CV SPORTBACK",
        "TFSI S-TRONIC 400CV",
        "Otro"
      ],
      "RS5": [
        "4,2 FSI V8 S-TRONIC QUATTRO",
        "2,9 TFSI 450CV TIPT QUATTRO",
        "Otro"
      ],
      "RS7": [
        "SPORTBACK 4,0 TFSI V8 BT TIPT QUATTRO",
        "RS E-TRON",
        "GT QUATTRO",
        "Otro"
      ],
      "S3": [
        "Otro"
      ],
      "S4": [
        "Otro"
      ],
      "S5": [
        "Otro"
      ],
      "S6": [
        "Otro"
      ],
      "S7": [
        "Otro"
      ],
      "TT": [
        "1,8 TFSI 160CV",
        "1,8 TFSI 160CV PREMIUM",
        "1,8 TFSI 160CV SPORT",
        "1,8 TFSI 160CV PREMIUM SPORT",
        "2,0 TFSI",
        "2,0 TFSI S-TRONIC",
        "2,0 TFSI 211CV",
        "2,0 TFSI 211CV S-TRONIC",
        "2,0 TFSI 211CV PREMIUM",
        "2,0 TFSI 211CV PREMIUM S-TRONIC",
        "2,0 TFSI 211CV SPORT",
        "2,0 TFSI 211CV SPORT S-TRONIC",
        "2,0 TFSI 211CV PREMIUM SPORT",
        "2,0 TFSI 211CV PREMIUM SPORT S-TRONIC",
        "2,0 TFSI 230CV S-TRONIC",
        "2,0 TFSI S 310CV QUATTRO S-TRONIC",
        "2,5 TFSI RS 400CV QUATTRO S-TRONIC",
        "2,5 TFSI 340 RS QUATTRO",
        "2,5 TFSI 340 RS QUATTRO S-TRONIC",
        "3,2 QUATTRO",
        "3,2 QUATTRO S-TRONIC",
        "2,0 TFSI 200CV",
        "2,0 TFSI 200CV S-TRONIC",
        "2,0 TFSI 310CV QUATTRO S-TRONIC",
        "3,2 V6 DSG QUATTRO 250CV",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "BMW": {
      "116": [
        "1,6 i ACTIVE",
        "1,6 i",
        "1,6 i AT",
        "Otro"
      ],
      "118": [
        "1,8 i ACTIVE",
        "1,8 d ACTIVE",
        "1,8 i SPORT/URBAN",
        "1,8 i SPORT/URBAN AT",
        "1,8 d SPORT/URBAN",
        "1,8 i SPORT LINE",
        "1,5 T 7AT ADVANTAGE",
        "1,5 T 7AT SPORTLINE",
        "Otro"
      ],
      "120": [
        "2,0 i ACTIVE",
        "2,0 D ACTIVE",
        "2,0 i SPORT",
        "2,0 i EXECUTIVE",
        "CONV 2,0 i ACTIVE",
        "Otro"
      ],
      "125": [
        "1,6 i AT",
        "2,0 D SPORT LINE",
        "3,0 EXECUTIVE",
        "Otro"
      ],
      "130": [
        "3,0 i LIMITED EDITION",
        "Otro"
      ],
      "135": [
        "3,0 i SPORTIVE",
        "3,0 i M",
        "218 i",
        "1,5 T 7SEPT GRAN COUPE ADVANTAGE",
        "220 i",
        "2,0 T SPORT LINE",
        "2,0 T SPORT",
        "CONV 2,0 T SPORT",
        "2,0 T SPORT LCI 8AT",
        "CONV 2,0 T SPORT LCI 8AT",
        "2,0 T 8AT SPORTLINE LCI",
        "2,0 T 8AT M SPORT LCII",
        "2,0 T 8AT ADVANTAGE",
        "235 i",
        "3,0 T M PACKAGE",
        "Otro"
      ],
      "218": [
        "Otro"
      ],
      "220": [
        "Otro"
      ],
      "235": [
        "Otro"
      ],
      "318": [
        "1,8 i EXECUTIVE",
        "Otro"
      ],
      "320": [
        "2,0 i EXECUTIVE",
        "2,0 D EXECUTIVE",
        "2,0 D SPORT/LUXYRY",
        "2,0 i",
        "320 i",
        "2,0 T EXECUTIVE",
        "2,0 T SPORTLINE",
        "2,0 T SPORTLINE II",
        "Otro"
      ],
      "325": [
        "2,5 i EXECUTIVE",
        "2,5 i EXECUTIVE TRONIC",
        "CONV 3,0 i EXECUTIVE",
        "3,0 i SPORTIVE",
        "Otro"
      ],
      "328": [
        "2,0 i SPORT/LUXURY",
        "Otro"
      ],
      "330": [
        "3,0 i EXECUTIVE",
        "3,0 i EXECUTIVE TRONIC",
        "2,0 T SPORTLINE 8AT",
        "2,0 T SPORTLINE 8AT SHADOW",
        "330e",
        "2,0 T SPORTLINE",
        "Otro"
      ],
      "335": [
        "3,0 i",
        "3,0 SPORTIVE BT",
        "3,0 SPORTIVE BT AT",
        "428 i",
        "2,0 T SPORT LINE",
        "430 i",
        "2,0 T SPORT",
        "2,0 T SPORTLINE LCI 8AT",
        "2,0 T M SPORTPACKAGE 8AT",
        "GRAN COUPE 2,0 T SPORT",
        "GRAN COUPE 2,0 T SPORTLINE LCI 8AT",
        "GRAN COUPE 2,0 T SPORTLINE 8AT",
        "435 i",
        "3,0 T V6 M PACKAGE",
        "440 i",
        "3,0 T M PACKAGE",
        "GRAN COUPE 3,0 T M PACKAGE",
        "3,0 T SPORT LINE",
        "3,0 T M SPORT LCI 8AT",
        "GRAN COUPE 3,0 T MSPORT LCI 8AT",
        "3,0 T M PACKAGE 8AT",
        "Otro"
      ],
      "428": [
        "Otro"
      ],
      "430": [
        "Otro"
      ],
      "435": [
        "Otro"
      ],
      "440": [
        "Otro"
      ],
      "525": [
        "2,0 D EXECUTIVE",
        "Otro"
      ],
      "528": [
        "2,8 i EXECUTIVE",
        "Otro"
      ],
      "530": [
        "3,0 i EXECUTIVE",
        "3,0 D EXECUTIVE",
        "530 i",
        "SPORTLINE",
        "Otro"
      ],
      "535": [
        "3,0 i EXECUTIVE",
        "3,0 GRAN TURISMO",
        "535 i",
        "3,0 T M PACKAGE",
        "540 i",
        "Otro"
      ],
      "540": [
        "Otro"
      ],
      "550": [
        "4,4 i PREMIUM",
        "550e",
        "3,0 8AT XDRIVE M SPORT PRO",
        "Otro"
      ],
      "640": [
        "3,0 i SPORTIVE",
        "CONV SPORTIVE",
        "GRAN COUPE 3,0 i",
        "640 i",
        "3,0 T SPORTIVE",
        "Otro"
      ],
      "650": [
        "4,8 Ci PREMIUM",
        "4,8 Ci PREMIUM TRONIC",
        "650 i",
        "4,4 BT 8AT M SPORT",
        "GRAN 4,4 BT 8AT M SPORT",
        "GRAN 4,4 V8 BT 8AT M SPORT",
        "GRAN 4,4 V8 BT 8AT M SPORT M6",
        "Otro"
      ],
      "750": [
        "4,8 i PREMIUM TRONIC",
        "4,8 iA INDIVIDUAL TRONIC",
        "4,4 BT 8AT M SPORT EXCELLENCE",
        "Li XDRIVE M SPORT PURE EXC",
        "760 i",
        "4,4 BT V8 8AT MILDHYBRID XDRIVE MSPORT PRO",
        "M1",
        "COUPE",
        "Otro"
      ],
      "M140": [
        "Otro"
      ],
      "M2": [
        "3,0 T",
        "3,0 BT 8AT",
        "Otro"
      ],
      "M235": [
        "Otro"
      ],
      "M240": [
        "Otro"
      ],
      "M3": [
        "4,0 M SPORT",
        "3,0 BT",
        "COMPETITION MRACE TRACK 510CV",
        "Otro"
      ],
      "M340": [
        "Otro"
      ],
      "M4": [
        "3,0 BT",
        "3,0 BT F82 LCI",
        "3,0 BT LCI",
        "COMPETITION MRACE TRACK 510CV",
        "Otro"
      ],
      "M440": [
        "Otro"
      ],
      "M5": [
        "5,0 SPORT 7 VEL",
        "4,4 V8 BT",
        "35 J",
        "4,4 BT 8STEP MXDRIVE PLUG-IN HYBRID",
        "M6",
        "5,0 V10 SPORT",
        "GRAN",
        "GRAN 4,4 BT",
        "GRAN 4,4 V8 BT 8AT M SPORT M6",
        "M135",
        "2,0 8AT XDRIVE M PACKAGE",
        "XDRIVE M PERFORMANCE",
        "2,0 T XDRIVE 8AT",
        "M140i",
        "3,0 M PACKAGE",
        "M235i",
        "GRAN COUPE 2,0 T 8SEPT XDRIVE",
        "M240i",
        "3,0 T 8AT",
        "3,0 T 8AT M PERFORMANCE LCI",
        "3,0 T 8AT 388CV XDRIVE",
        "CONV 3,0 T M PACKAGE 8AT",
        "M340i",
        "3,0 T XDRIVE 8AT",
        "3,0 T XDRIVE 8AT PERFORMANCE II",
        "M440i",
        "3,0 T XDRIVE M PERFORMANCE 8AT",
        "M850i",
        "4,4 8AT MPA",
        "Otro"
      ],
      "M850": [
        "Otro"
      ],
      "Z4": [
        "2,3 i ACTIVE",
        "3,0 i EXECUTIVE",
        "3,0 i EXECUTIVE TRONIC",
        "2,0 i EXECUTIVE",
        "2,8 i EXECUTIVE TRONIC",
        "3,5 i EXECUTIVE",
        "3,5 IS M PACKAGE",
        "3,5 I M PACKAGE",
        "2,0 T SDRIVE 3,0 i M SPORT 8AT",
        "2,0 T SDRIVE 3,0 i M SPORT 8AT THE",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "BYD": {
      "Dolphin Mini": [
        "GL ELECTRICO AT",
        "GS ELECTRICO AT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Chery": {
      "Arrizo 5": [
        "1,5 COMFORT MT",
        "1,5 LUXURY MT",
        "1,5 LUXURY 7CVT",
        "Otro"
      ],
      "Arrizo 8": [
        "1,5 T PHEV HYBRID COMFORT",
        "Otro"
      ],
      "Face": [
        "1,3 LUXURY",
        "Otro"
      ],
      "Fulwin": [
        "1,5",
        "1,5 2",
        "Otro"
      ],
      "QQ": [
        "1,1 BASIC",
        "1,1 LIGHT",
        "1,1 LIGHT SECURITY",
        "1,1 COMFORT",
        "1,1 COMFORT SECURITY",
        "1,0 LIGHT SECURITY (LN)",
        "1,0 COMFORT SECURITY (LN)",
        "Otro"
      ],
      "Skin": [
        "1,6",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Chevrolet": {
      "Agile": [
        "1,4 LS",
        "1,4 LT",
        "1,4 LTZ",
        "1,4 LS SPIRIT",
        "1,4 LT SPIRIT",
        "1,4 LTZ SPIRIT",
        "1,4 LS ABG ABS",
        "1,4 LT ABG ABS",
        "1,4 LT ABG ABS LLANTAS",
        "1,4 LTZ ABG ABS",
        "1,4 LTZ ABG ABS EFFECT",
        "Otro"
      ],
      "Aveo": [
        "1,6 16V LS G3",
        "1,6 16V LT G3",
        "1,6 16V LT G3 AT",
        "CAMARO SS",
        "2P 6,2 V8 405CV",
        "6,2 V8 8AT",
        "CONV 6,2 V8 8AT",
        "Otro"
      ],
      "Camaro": [
        "Otro"
      ],
      "Celta": [
        "1,4 LS",
        "1,4 LS A/C",
        "1,4 LS A/C ABG ABS",
        "1,4 LT",
        "1,4 LT SPIRIT",
        "1,4 LS SPIRIT",
        "1,4 LT SPIRIT ABS ABG",
        "1,4 LT SPIRIT PACK",
        "1,4 LT SPIRIT PLUS",
        "1,4 ADVANTAGE",
        "1,4 ADVANTAGE PACK",
        "Otro"
      ],
      "Classic": [
        "1,4 LS",
        "1,4 LS A/C DH",
        "1,4 LS A/C DH SPIRIT",
        "1,4 LS A/C DH ABG ABS",
        "1,4 LS A/C DH ABG ABS PACK",
        "1,4 LT SPIRIT",
        "1,4 LT SPIRIT PACK",
        "Otro"
      ],
      "Cobalt": [
        "1,8 LT",
        "1,8 LTZ",
        "1,8 LTZ AT",
        "1,8 LT ADVANTAGE",
        "1,8 LTZ ADVANTAGE",
        "1,8 LTZ ADVANTAGE AT",
        "1,3 TD LT",
        "1,3 TD LTZ",
        "Otro"
      ],
      "Cruze": [
        "1,8 LT",
        "1,8 LT AT",
        "1,8 LTZ",
        "1,8 LTZ AT",
        "2,0 DSL LT",
        "2,0 DSL LTZ",
        "2,0 DSL LTZ AT",
        "2,0 DSL LT AT",
        "1,4 T LT MT",
        "1,4 T LTZ MT",
        "1,4 T LTZ AT",
        "1,4 T LTZ PLUS AT",
        "1,4 T SEDAN MT",
        "1,4 T LT 6MT",
        "1,4 T PREMIER AT",
        "1,4 T LT 6AT",
        "1,4 T MIDNIGHT 6AT",
        "1,4 T LTZ 6AT",
        "1,4 T PREMIER 6AT",
        "1,8 LTZ S/CC",
        "1,8 LTZ AT S/CC",
        "1,4 T RS 6AT",
        "Otro"
      ],
      "Joy": [
        "1,4 BASE",
        "1,4 BLACK EDITION",
        "1,4 BASE PLUS",
        "1,4 BLACK EDITION PLUS",
        "Otro"
      ],
      "Meriva": [
        "1,8 GL",
        "1,8 GL PLUS ABG",
        "1,8 GLS",
        "MONTANA PICK - UP",
        "1,8 LS",
        "1,8 LS A/C",
        "1,8 LS A/C PACK",
        "1,8 LS SPORT",
        "1,2 T LT MT",
        "1,2 T LTZ AT",
        "1,2 T PREMIER AT",
        "1,2 T LT AT",
        "1,2 T RS AT",
        "Otro"
      ],
      "Onix": [
        "1,4 LT",
        "1,4 LTZ",
        "1,4 LTZ AT",
        "1,4 EFFECT",
        "1,4 JOY LS",
        "1,4 JOY LS + LV",
        "1,4 LTZ ACTIV",
        "1,4 JOY BLACK EDITION",
        "1,2 90CV LS",
        "1,2 90CV LT",
        "1,2 90CV LT TECH",
        "1,2 90CV LT TECH ONSTAR",
        "1,2 90CV PLUS",
        "1,2 90CV PLUS LT",
        "1,2 90CV PLUS LT TECH",
        "1,2 90CV PLUS LT TECH ONSTAR",
        "1,2 LS",
        "1,2 LT",
        "1,2 LT TECH",
        "1,0 T LT",
        "1,0 T LTZ",
        "1,0 T LTZ AT",
        "1,0 T PREMIER I",
        "1,0 T PREMIER II AT",
        "1,0 T RS",
        "1,2 PLUS LS",
        "1,2 PLUS LT",
        "1,2 PLUS LT TECH",
        "1,0 T PLUS LT",
        "1,0 T PLUS LTZ",
        "1,0 T PLUS LTZ AT",
        "1,0 T PLUS PREMIER I",
        "1,0 T PLUS PREMIER II AT",
        "1,0 T PREMIER AT",
        "1,0 T PLUS PREMIER AT",
        "Otro"
      ],
      "Prisma": [
        "1,4 LS",
        "1,4 LT",
        "1,4 LTZ",
        "1,4 LTZ AT",
        "1,4 JOY LS",
        "1,4 JOY LS + LV",
        "S-10 PICK - UP",
        "2,8 TD 4X2 ELEC",
        "2,8 TD STD 4X2 ELEC",
        "2,8 TD DLX 4X2 ELEC",
        "2,8 TD STD 4X4 A/C ELEC",
        "2,8 TD DLX 4X4 ELEC",
        "2,8 TD LTD 4X4 ELEC",
        "2,8 CTDi LS 4X2 CV180",
        "2,8 CTDi LS 4X4 CV180",
        "2,8 CTDi LT 4X2 CV180",
        "2,8 CTDi LTZ 4X2 CV180",
        "2,8 CTDi LT 4X4 CV180",
        "2,8 CTDi LTZ 4X4 AT CV180",
        "2,8 CTDi 6V LS 4X2 CV200",
        "2,8 CTDi 6V LS 4X4 CV200",
        "2,8 CTDi 6V LT 4X2 CV200",
        "2,8 CTDi 6V LTZ 4X2 CV200",
        "2,8 CTDi 6V LT 4X4 CV200",
        "2,8 CTDi 6V LTZ 4X4 CV200",
        "2,8 CTDi LTZ 4X4 AT CV200",
        "2,8 TD HC 4X2",
        "2,8 TD HC 4X4",
        "2,8 TD HC 4X4 AT",
        "2,8 CTDi 6V LT 4X4 AT CV200",
        "2,8 TD 100 YEARS 4X2",
        "2,8 TD 100 YEARS 4X4",
        "2,8 CTDi MIDNIGHT 4X4",
        "2,8 CTDi MIDNIGHT 4X4 AT",
        "2,8 TD LS MT 4X2",
        "2,8 TD LS MT 4X4",
        "2,8 TD LT MT 4X2",
        "2,8 TD LT MT 4X4",
        "2,8 TD LT AT 4X4",
        "2,8 TD LTZ MT 4X2",
        "2,8 TD LTZ AT 4X4",
        "2,8 TD HC AT 4X4",
        "2,8 TD WT MT 4X2",
        "2,8 TD WT MT 4X4",
        "2,8 TD WT AT 4X4",
        "2,8 TD Z71 AT 4X4",
        "2,8 TD MIDNIGHT SS AT 4X4",
        "2,8 TD 4X2 WT",
        "2,8 TD 4X4 WT",
        "Otro"
      ],
      "Sonic": [
        "1,6 16V LT",
        "1,6 16V LT MX",
        "1,6 16V LTZ",
        "1,6 16V LTZ MX",
        "1,6 16V LTZ AT",
        "1,6 16V LTZ AT MX",
        "1,6 16V EFFECT",
        "SPARK",
        "1,2 LT FULL",
        "SPARK EUV",
        "ELECTRICO",
        "Otro"
      ],
      "Spin": [
        "1,8 LT",
        "1,8 LTZ",
        "1,8 LTZ 7A",
        "1,8 LTZ 7A AT",
        "1,3 DSL LTZ",
        "1,3 DSL LTZ 7A",
        "1,8 LT MY LINK",
        "1,8 LTZ ACTIV",
        "1,8 LTZ ACTIV AT",
        "1,8 LTZ ACTIV 7A AT",
        "1,8 PREMIER 7A",
        "1,8 PREMIER 7A AT",
        "1,8 ACTIV 7A AT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Chrysler": {
      "300": [
        "3,6 C",
        "TOWN & COUNTRY",
        "3,6 LTD ATX FULL",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Citroen": {
      "C3": [
        "Otro"
      ],
      "C4": [
        "Otro"
      ],
      "C-Elysee": [
        "Otro"
      ],
      "Xsara Picasso": [
        "1,6 i 16V",
        "1,6 i 16V EXCLUSIVE",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Dodge": {
      "Journey": [
        "2,4 SE 2F AT",
        "2,4 SE 3F AT",
        "2,4 SXT 3F AT",
        "2,4 SXT 3F AT DVD",
        "2,4 SXT 3F AT T/C DVD",
        "2,4 SXT 3F 6AT T/C DVD",
        "3,6 RT ATX AWD",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "DS Automobiles": {
      "DS 3": [
        "1,6 VTi SPORT CHIC",
        "1,6 TURBO SPORT CHIC",
        "1,6 SPORT CHIC THP",
        "1,6 VTi SO CHIC",
        "1,6 VTi 1955",
        "1,6 VTi 120 SO CHIC",
        "1,6 THP 156 6MT SPORT CHIC",
        "1,6 VTi 120 BE CHIC",
        "1,6 VTi 120 GIVENCHY",
        "1,6 110 6AT SO CHIC PURE TECH",
        "1,6 110 6AT DARK SIDE PURE TECH",
        "1,6 THP 165 6MT SPORT CHIC",
        "1,6 THP 208 6MT S&S PERFORMANCE",
        "1,6 110 6AT CAFÉ RACER",
        "1,6 110 6AT PERFORMANCE LINE",
        "1,2 T HYBRID ETOILE",
        "Otro"
      ],
      "DS 4": [
        "1,6 TURBO",
        "1,6 THP 163 6AT SO CHIC AM24",
        "1,6 THP 163 6AT SO CHIC AM24 CROSSBACK",
        "1,6 THP 163 6AT BE CHIC CB",
        "1,6 THP 163 6AT BE CHIC CB PACK INSPIRATION",
        "1,6 THP 208 6MT S&S PERFORMANCE LINE",
        "1,6 THP 215 8AT PERFORMANCE LINE",
        "1,6 THP 215 8AT TROCADERO",
        "1,2 T 8AT PURETECH ETOILE",
        "1,2 T HYBRID ETOILE",
        "Otro"
      ],
      "DS 9": [
        "1,6 RIVOLI E8AT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Ferrari": {
      "458": [
        "Otro"
      ],
      "California": [
        "4,6 414 383 358",
        "CALIFORNIA T",
        "3,9 V8 BT 7AT CONV 498 473 434",
        "F 8 TRIBUTO",
        "3,9 V8 BT 7AT 754",
        "F 430",
        "4,3 412 382 357",
        "4,3 F1 437 405 378",
        "4,3 SPIDER 437 405 379",
        "4,3 SPIDER F1 461 427 399",
        "4,3 SCUDERIA 484 448 419",
        "F 488",
        "3,9 V8 BT 7AT GTB 789 724",
        "3,9 V8 BT 7AT GTB SPIDER 852 809",
        "F 599",
        "6,0 GTB 513 475 444",
        "6,0 GTB F1 534 494 462",
        "F 612",
        "5,8 SCAGLIETTI 501 464 434",
        "5,8 SCAGLIETTI F1 523 484 453",
        "F 812",
        "6,5 SUPERFAST 893 849",
        "Otro"
      ],
      "F8 Tributo": [
        "Otro"
      ],
      "F430": [
        "Otro"
      ],
      "F488": [
        "Otro"
      ],
      "F599": [
        "Otro"
      ],
      "F612": [
        "Otro"
      ],
      "F812": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Fiat": {
      "500": [
        "2P 1,4 85CV CULT",
        "2P 1,4 85CV CULT SERIE 4",
        "2P 1,4 105CV SPORT",
        "2P 1,4 105CV SPORT SERIE 4",
        "2P 1,4 105CV SPORT AT",
        "2P 1,4 105CV LOUNGE AT",
        "2P 1,4 105CV LOUNGE AT SERIE 4",
        "2P 1,4 16V BY GUCCI",
        "2P 1,4 T-JET ABARTH",
        "2P 1,4 T-JET ABARTH TURISMO",
        "2P 1,4 T-JET ABARTH TURISMO 595",
        "1,4 16V",
        "1,4 16V BY GUCCI",
        "1,4 16V LOUNGE AT",
        "1,4 16V LOUNGE AT SERIE 4",
        "500 L",
        "1,4 16V 95CV POP STAR",
        "1,4 16V 95CV POP STAR LUXURY",
        "500 X",
        "1,4 T POP STAR",
        "1,4 T CROSS 9AT 4X4",
        "600",
        "1,2 HYBRID 6AT",
        "Otro"
      ],
      "Argo": [
        "1,3 DRIVE GSE",
        "1,3 DRIVE GSE PACK CONECTIVIDAD",
        "1,8 PRECISION",
        "1,8 PRECISION PACK PREMIUM",
        "1,8 PRECISION PACK TECNHOLOGY",
        "1,8 PRECISION 6AT",
        "1,8 PRECISION PACK PREMIUM 6AT",
        "1,8 PRECISION PACK TECNHOLOGY 6AT",
        "1,8 HGT",
        "1,3 DRIVE GSE MT",
        "1,3 DRIVE MT",
        "1,3 DRIVE CVT",
        "BRAVO",
        "1,4 DYNAMIC",
        "1,4 DYNAMIC T/C",
        "1,4 DYNAMIC T/C CRO",
        "1,4 DYNAMIC SPORT",
        "1,4 DYNAMIC SPORT CRO XENON",
        "1,4 SPORT",
        "1,4 SPORT T/C",
        "1,4 SPORT T/C CRO",
        "1,6 DYNAMIC",
        "1,6 DYNAMIC T/C",
        "1,6 DYNAMIC T/C CRO",
        "1,6 DYNAMIC SPORT",
        "1,6 DYNAMIC SPORT CRO XENON",
        "Otro"
      ],
      "Cronos": [
        "1,3 DRIVE GSE",
        "1,3 DRIVE GSE PACK CONECTIVIDAD",
        "1,8 PRECISION",
        "1,8 PRECISION PACK PREMIUM",
        "1,8 PRECISION PACK TECNHOLOGY",
        "1,8 PRECISION AT",
        "1,8 CENTENARIO AT",
        "1,3 ATTRACTIVE",
        "1,3 DRIVE S-DESING",
        "1,8 PRECISION PACK STYLE",
        "1,8 HGT PACK",
        "1,3 ATTRACTIVE GSE",
        "1,3 DRIVE GSE PACK S-DESING",
        "1,3 DRIVE GSE CVT",
        "1,3 PRECISION GSE CVT",
        "1,3 LIKE GSE",
        "1,3 DRIVE GSE PACK PLUS",
        "1,3 DRIVE GSE PACK PLUS CVT",
        "1,3 STILE GSE",
        "DOBLÓ",
        "1,4 16V ACTIVE",
        "1,4 16V ACTIVE FAMILY",
        "1,4 16V ACTIVE HIGH SECURITY",
        "DOBLÓ CARGO",
        "2P 1,4 16V ACTIVE",
        "2P 1,4 16V ACTIVE HIGH SECURITY",
        "2P 1,4 16V ACTIVE ABS EBD",
        "2P 1,4 16V ACTIVE P/LATERAL",
        "2P 1,4 16V ACTIVE P/LATERAL HIGH SECURITY",
        "Otro"
      ],
      "Grand Siena": [
        "1,4 ATTRACTIVE",
        "1,4 ATTRACTIVE PACK TOP",
        "1,4 ATTRACTIVE PACK TOP SEG",
        "1,6 16V ESSENCE",
        "1,6 16V ESSENCE DUALOGIC",
        "1,6 16V ESSENCE EMOTION",
        "1,6 16V ESSENCE EMOTION DUALOGIC",
        "1,6 16V ESSENCE HIGH TECH",
        "1,6 16V ESSENCE HIGH TECH DUALOGIC",
        "1,6 16V ESSENCE DUALOGIC HIGH TECH",
        "Otro"
      ],
      "Idea": [
        "1,4 ELX ATTRACTIVE",
        "1,4 ELX ATTRACTIVE PACK TOP",
        "1,4 ELX ATTRACTIVE PACK TOP III",
        "1,6 16V ESSENCE",
        "1,6 16V ESSENCE T/C",
        "1,6 16V ESSENCE PACK EMOTION",
        "1,6 16V ESSENCE PACK EMOTION T/C",
        "1,6 16V ESSENCE PACK TOP",
        "1,6 16V ESSENCE PACK TOP T/C",
        "1,6 16V ADVENTURE",
        "1,6 16V ADVENTURE T/C",
        "1,6 16V ADVENTURE LOCKER",
        "1,6 16V ADVENTURE LOCKER T/C",
        "1,6 16V ADVENTURE PACK TOP",
        "1,6 16V ADVENTURE PACK TOP T/C",
        "1,6 16V SPORTING",
        "1,6 16V SPORTING T/C",
        "Otro"
      ],
      "Linea": [
        "1,9 16V ESSENCE",
        "1,9 16V ESSENCE DUALOGIC",
        "1,9 16V ABSOLUTE",
        "1,9 16V ABSOLUTE DUALOGIC",
        "1,8 16V ESSENCE",
        "1,8 16V ABSOLUTE",
        "1,8 16V ABSOLUTE DUALOGIC",
        "1,8 16V ESSENCE UCONNECT",
        "1,8 16V ABSOLUTE DUALOGIC UCONNECT NAV",
        "Otro"
      ],
      "Mobi": [
        "1,0 EASY",
        "1,0 EASY TOP",
        "1,0 EASY TOP LIVE ON",
        "1,0 WAY",
        "1,0 WAY LIVE ON",
        "1,0 LIKE",
        "1,0 TREKKING",
        "Otro"
      ],
      "Palio": [
        "1,4 FIRE",
        "1,4 FIRE CONFORT",
        "1,4 FIRE TOP",
        "1,4 ATTRACTIVE",
        "1,4 ATTRACTIVE ACTIVE",
        "1,6 ELX ESSENCE ACTIVE",
        "1,4 ACTIVE",
        "1,4 ATTRACTIVE PACK SEG",
        "1,4 ATTRACTIVE PACK SEG TOP",
        "1,6 ESSENCE",
        "1,6 ESSENCE PACK SEG",
        "1,6 ESSENCE DUALOGIC",
        "1,6 ESSENCE DUALOGIC PACK SEG",
        "1,6 SPORTING",
        "1,6 SPORTING PACK SEG",
        "WEEKEND 1,4 ATTRACTIVE",
        "WEEKEND 1,4 ATTRACTIVE ACTIVE",
        "WEEKEND 1,4 ATTRACTIVE SEG",
        "WEEKEND 1,4 TREKKING",
        "WEEKEND 1,4 TREKKING SEG",
        "WEEKEND 1,6 ADVENTURE",
        "WEEKEND 1,6 ADVENTURE SEG",
        "WEEKEND 1,6 ADVENTURE SEG XTREME",
        "WEEKEND 1,6 ADVENTURE LOCKER",
        "WEEKEND 1,6 ADVENTURE LOCKER SEG",
        "WEEKEND 1,6 ADVENTURE LOCKER SEG XTREME",
        "Otro"
      ],
      "Punto": [
        "1,4 ATTRACTIVE",
        "1,4 ATTRACTIVE TOP",
        "1,4 ATTRACTIVE TOP T/C",
        "1,4 ATTRACTIVE TOP UCONNECT",
        "1,6 16V BLACKMOTION",
        "1,6 16V ESSENCE",
        "1,6 16V ESSENCE T/C",
        "1,6 16V ESSENCE DUALOGIC",
        "1,6 16V ESSENCE DUALOGIG T/C",
        "1,6 16V ESSENCE EMOTION",
        "1,6 16V ESSENCE EMOTION T/C",
        "1,6 16V ESSENCE UCONNECT NAV",
        "1,6 16V ESSENCE UCONNECT NAV T/C",
        "1,6 16V ESSENCE UCONNECT NAV DUALOGIC",
        "1,6 16V ESSENCE UCONNECT NAV DUALOGIC T/C",
        "1,6 16V ESSENCE UCONNECT NAV EMOTION",
        "1,6 16V ESSENCE UCONNECT NAV EMOTION T/C",
        "1,6 16V SPORTING",
        "1,6 16V SPORTING TECH",
        "1,6 16V SPORTING T/C",
        "1,6 16V SPORTING T/C CRO",
        "1,6 16V SPORTING UCONNECT NAV",
        "1,6 16V SPORTING UCONNECT NAV TECH II",
        "1,6 16V SPORTING UCONNECT NAV T/C",
        "1,6 16V SPORTING UCONNECT NAV T/C CRO",
        "Otro"
      ],
      "Siena": [
        "1,4 FIRE",
        "1,4 FIRE A/C",
        "1,4 FIRE WAY",
        "1,4 FIRE PACK TOP",
        "1,4 EL FLP",
        "1,4 ATTRACTIVE ACTIVE",
        "1,4 ATTRACTIVE EMOTION",
        "1,4 EL",
        "1,4 EL ATTRACTIVE",
        "1,6 16V ESSENCE EMOTION",
        "1,6 16V ESSENCE EMOTION HIGH TECH",
        "1,6 EL",
        "1,6 EL CONFORT II",
        "1,6 16V NPM EL",
        "STRADA PICK - UP",
        "C/EXTEN. 1,6 16V ADVENTURE",
        "C/EXTEN. 1,6 16V ADVENTURE PACK SEG",
        "C/EXTEN. 1,6 16V ADVENTURE LOCKER",
        "C/EXTEN. 1,6 16V ADVENTURE LOCKER SEG",
        "1,6 16V ADVENTURE",
        "1,6 16V ADVENTURE PACK SEG",
        "1,6 16V ADVENTURE LOCKER",
        "1,6 16V ADVENTURE LOCKER SEG",
        "1,4 WORKING",
        "1,4 WORKING A/C",
        "1,4 TREKKING",
        "1,4 TREKKING PACK SEG",
        "C/EXTEN. 1,7 TD ADVENTURE",
        "C/EXTEN. 1,7 TD ADVENTURE XTREME",
        "1,3 MULTIJET TREKKING",
        "1,3 MULTIJET TREKKING A/C",
        "1,3 MULTIJET TREKKING SEG A/C",
        "C/EXTEN. 1,3 MULTIJET TREKKING A/C",
        "C/EXTEN. 1,3 MULTIJET TREKKING SEG A/C",
        "1,4 8V WORKING",
        "1,4 8V TREKKING",
        "3P 1,4 8V WORKING",
        "C/EXTEN. 1,6 16V ADVENTURE TOP",
        "C/EXTEN. 1,6 16V ADVENTURE TOP T/C",
        "C/EXTEN. 1,6 16V ADVENTURE TOP EXTREME",
        "3P 1,6 16V ADVENTURE TOP",
        "3P 1,6 16V ADVENTURE TOP T/C",
        "3P 1,6 16V ADVENTURE TOP XTREME",
        "3P 1,3 JTD MULTIJET TREKKING TOP",
        "C/PLUS 1,4 FIRE ENDURANCE",
        "1,4 FIRE ENDURANCE",
        "1,4 FIRE FREEDOM",
        "1,4 FIRE FREEDOM TECH",
        "1,3 FIRE FLY GSE VOLCANO",
        "1,3 FIRE FLY GSE VOLCANO CVT",
        "1,3 FIRE RANCH CVT",
        "1,3 FIRE FREEDOM",
        "1,3 FIRE ENDURANCE",
        "1,3 FIRE FREEDOM TECH",
        "1,3 FIRE VOLCANO",
        "1,3 FIRE VOLCANO CVT",
        "T200 RANCH CVT",
        "T200 ULTRA CVT",
        "TIPO",
        "1,6 POP 6AT",
        "1,6 EASY 6AT",
        "TITANO PICK UP",
        "2,2 ENDURENCE MT",
        "2,2 ENDURENCE MT 4WD",
        "2,2 FREEDOM MT 4WD",
        "2,2 FREEDOM 8AT AWD PLUS",
        "2,2 RANCH 8AT AWD",
        "TORO PICK UP",
        "1,8 FREEDOM 4X2 6AT PACK SEG",
        "1,8 FREEDOM 4X2 6AT PACK SEG CHROME",
        "2,0 TD FREEDOM 4X2 6MT",
        "2,0 TD FREEDOM 4X4 6MT",
        "2,0 TD FREEDOM 4X4 6MT PACK XTREME",
        "2,0 TD FREEDOM 4X4 9AT",
        "2,0 TD FREEDOM 4X4 9AT PACK SEG",
        "2,0 TD FREEDOM 4X4 9AT NEW HOLLAN",
        "2,0 TD VOLCANO 4X4 9AT",
        "2,0 TD BLACKJACK 4X4 9AT",
        "2,0 TD VOLCANO 4X4 9AT PACK PREMIUM",
        "2,0 TD RANCH 4X4 9AT",
        "1,8 FREEDOM 4X2 6AT",
        "1,8 FREEDOM 4X2 6AT S-DESIGN",
        "1,3 T VOLCANO 4X2 6AT",
        "2,0 16V TD MULTIJET ULTRA 4X4 9AT",
        "2,0 16V TD FREEDOM 4X4 9AT",
        "2,0 16V TD VOLCANO 4X4 9AT",
        "2,0 16V TD MULTIJET RANCH 4X4 9AT",
        "T270 6AT 4X2 FREEDOM",
        "T270 6AT 4X2 VOLCANO",
        "TD350 9AT 4X4 VOLCANO",
        "TD350 9AT 4X4 ULTRA",
        "Otro"
      ],
      "Uno": [
        "1,3 FIRE",
        "1,3 FIRE DH",
        "1,3 FIRE CONFORT",
        "1,3 FIRE CONFORT DH",
        "1,4 FIRE EVO ATTRACTIVE (LN)",
        "1,4 FIRE EVO ATTRACTIVE PACK SEG (LN)",
        "1,4 FIRE EVO ATTRACTIVE TOP (LN)",
        "1,4 FIRE EVO ATTRACTIVE TOP PACK SEG (LN)",
        "1,4 FIRE EVO WAY (LN)",
        "1,4 FIRE EVO WAY PACK SEG (LN)",
        "1,4 FIRE EVO WAY TOP (LN)",
        "1,4 FIRE EVO WAY TOP PACK SEG (LN)",
        "1,4 FIRE EVO SPORTING (LN)",
        "1,4 FIRE EVO SPORTING PACK SEG",
        "1,3 WAY",
        "UNO CARGO",
        "1,3 VAN FIRE",
        "1,3 VAN FIRE DH",
        "1,3 VAN FIRE A/C",
        "1,3 VAN FIRE DH A/C",
        "1,4 EVO",
        "1,4 EVO PACK TOP",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Ford": {
      "Escort": [
        "Otro"
      ],
      "Fiesta": [
        "1,6 AMBIENTE ONE",
        "1,6 AMBIENTE PLUS ABG ONE",
        "1,6 EDGE PLUS ABS ONE",
        "1,6 MAX AMBIENTE ONE",
        "1,6 MAX AMBIENTE PLUS ONE",
        "1,6 MAX EDGE PLUS ONE",
        "1,4 TDCI MAX AMBIENTE ONE",
        "1,4 TDCI MAX EDGE ONE",
        "FIESTA KINETIC DESIGN ATTRACTION",
        "1,6 TITANIUM",
        "1,6 S",
        "1,6 S PLUS",
        "1,6 SE",
        "1,6 SE POWERSHIFT",
        "1,6 SE PLUS",
        "1,6 SE PLUS POWERSHIFT",
        "1,6 TITANIUM POWERSHIFT",
        "1,6 SE AT",
        "1,6 TREND",
        "1,6 TREND PLUS",
        "Otro"
      ],
      "Focus": [
        "1,6 STYLE",
        "1,6 TREND",
        "2,0 TREND",
        "2,0 TREND PLUS",
        "2,0 GHIA",
        "2,0 GHIA AT",
        "1,8 TDCi TREND PLUS",
        "1,8 TDCi GHIA",
        "1,6 STYLE EXE",
        "1,6 TREND EXE",
        "2,0 TREND EXE",
        "2,0 TREND PLUS EXE",
        "2,0 GHIA EXE",
        "2,0 GHIA AT EXE",
        "1,8 TDCi TREND PLUS EXE",
        "1,8 TDCi GHIA EXE",
        "FOCUS KINETIC DESIGN ATTRACTION",
        "1,6 S",
        "2,0 SE",
        "2,0 SE PLUS",
        "2,0 SE PLUS AT",
        "2,0 TITANIUM",
        "2,0 TITANIUM AT",
        "2,0 SE AT",
        "Otro"
      ],
      "Ka": [
        "1,0 FLY",
        "1,0 FLY PLUS A/C",
        "1,6 PULSE",
        "1,6 PULSE TOP",
        "1,5 16V S",
        "1,5 16V SE",
        "1,5 16V SEL",
        "1,5 12V S",
        "1,5 12V SE",
        "1,5 12V SE AT",
        "1,5 12V SEL",
        "1,5 12V SEL AT",
        "KA +",
        "KA FREESTYLE",
        "Otro"
      ],
      "Mondeo": [
        "2,0 TDCI GHIA",
        "2,0 TDCI GHIA TITANIUM AT",
        "2,0 ECOBOOST TITANIUM AT",
        "2,3 GHIA AT",
        "2,3 TITANIUM AT",
        "2,5 SE AT",
        "2,0 GTDi ECOBOOST SE AT",
        "2,0 GTDi ECOBOOST TITANIUM AT",
        "2,0 T 240CV SEL 6AT",
        "2,0 T 240CV TITANIUM 6AT",
        "2,0 CVT VIGNALE HYBRID",
        "2,0 CVT TITANIUM HYBRID",
        "Otro"
      ],
      "Mustang": [
        "5,0 V8 GT AT",
        "5,0 V8 GT 10AT",
        "5,0 V8 MACH 1 10AT",
        "MACH-E GT PERFORMANCE AT",
        "5,0 V8 GT PERFORMANCE AT",
        "5,0 V8 DARK HORSE AT",
        "RANGER PICK - UP",
        "3,0 D XL 4X2 PLUS",
        "3,0 D XL 4X2 F-TRUCK",
        "3,0 D XL 4X4 PLUS",
        "2,3 N XL 4X2 PLUS",
        "3,0 D XL 4X2",
        "3,0 D XLS 4X2 PLUS",
        "3,0 D XLT 4X2",
        "3,0 D XLT 4X4",
        "3,0 D XLT 4X4 SUPERDUTY",
        "3,0 D XLT 4X4 LTD",
        "2,5 NAFTA XL 4X2",
        "2,2 TD XL 4X2",
        "2,2 TD XL 4X4 SAFETY",
        "2,2 TD XL 4X2 SAFETY",
        "2,2 TD XLS 4X2",
        "3,2 TDCi XLS 4X4",
        "3,2 TDCi XLT 4X2",
        "3,2 TDCi XLT 4X4",
        "3,2 TDCi LIMITED 4X4",
        "3,2 TDCi LIMITED 4X4 AT",
        "2,5 NAFTA XL 4X2 SAFETY",
        "3,2 TDCi XLS 4X2",
        "3,2 TDCi XLS 4X2 AT",
        "3,2 TDCi XLT 4X2 AT",
        "3,2 TDCi XLT 4X4 AT",
        "2,2 TDCi XL 4X2",
        "2,2 TDCi XL 4X4",
        "2,5 NAFTA XLT 4X2",
        "2,5 NAFTA XL 4X2 5MT",
        "2,2 TDCi XL 4X2 6MT",
        "2,2 TDCi XL 4X4 6MT",
        "2,5 NAFTA XLT 4X2 5MT",
        "3,2 TDCi XLS 4X2 6MT",
        "3,2 TDCi XLS 4X2 6AT",
        "3,2 TDCi XLS 4X4 6MT",
        "3,2 TDCi XLT 4X2 6MT",
        "3,2 TDCi XLT 4X2 6AT",
        "3,2 TDCi XLT 4X4 6MT",
        "3,2 TDCi XLT 4X4 6AT",
        "3,2 TDCi LIMITED 4X4 6MT",
        "3,2 TDCi LIMITED 4X4 6AT",
        "3,2 TDCi BLACK EDITION 4X4 6AT",
        "2,2 TDCi XLT 4X2 6AT",
        "3,2 TDCi FX4 4X4 6AT",
        "2,0 T PANTHER RAPTOR",
        "3,0 T V6 RAPTOR",
        "2,0 TD 4X2 MT",
        "C/CHASIS 2,0 TD 4X4 MT",
        "2,0 TD 4X4 MT",
        "2,0 TD XL 4X2 6MT",
        "2,0 TD XL 4X2 AT",
        "2,0 TD XL 4X4 6MT",
        "2,0 TD XL 4X4 AT",
        "2,0 TD XLS 4X2 6MT",
        "3,0 TD V6 LION XLS 4X4 10AT",
        "2,0 BI TD XLT 4X2 10AT",
        "2,0 BI TD XLT 4X4 10AT",
        "2,0 BI TD LTD 4X4 10AT",
        "3,0 TD V6 LION XLT 4X4 10AT",
        "3,0 TD V6 LION LTD + 4X4 10AT",
        "2,0 BI TD BLACK 4X4 6MT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Geely": {
      "515": [
        "1,5 HATCH GS",
        "1,5 HATCH GL",
        "1,5 SEDAN GS",
        "1,5 SEDAN GL",
        "Otro"
      ],
      "Emgrand 7": [
        "1,8 GS",
        "1,8 GL 6AT",
        "1,8 GS DRIVE",
        "1,8 GL ACTIVE",
        "EMGRAND FE 3",
        "1,8 GS MT",
        "1,8 GL AT",
        "Otro"
      ],
      "Emgrand FE3": [
        "Otro"
      ],
      "LC": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Great Wall": {
      "Ora 03": [
        "ELECTRICO",
        "POER PICK -UP",
        "2,0 TD 4X4 8AT LUXURY",
        "2,0 VGT 2WD 6MT ELITE",
        "2,0 VGT 4WD 6MT ELITE",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Honda": {
      "Accord": [
        "2,4 EXL AT",
        "3,5 V6 EX",
        "V6",
        "3,5 V6 EXL 6AT",
        "2,0 T EXT 10AT",
        "ADVANCED HYDRID",
        "Otro"
      ],
      "City": [
        "1.5 LX",
        "1.5 EXL",
        "1.5 EXL AT",
        "Otro"
      ],
      "Civic": [
        "1,8 LX S",
        "1,8 LX S AT",
        "1,8 EX S",
        "1,8 EX S AT",
        "1,8 LX S 6VEL",
        "1,8 EX S 6VEL",
        "2,0 EX CVT",
        "2,0 EXL CVT",
        "1,5 EXT CVT PADDLE-SHIFT 7",
        "2,0 ADVANCED HYBRID",
        "Otro"
      ],
      "Fit": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ],
      "Prelude": [
        "2.3 SI",
        "2.0",
        "2.2",
        "2.2 VTEC",
        "Otro"
      ]
    },
    "Hyundai": {
      "Coupe": [
        "Otro"
      ],
      "Elantra": [
        "1,8 GLS FULL PREMIUM",
        "1,8 GLS FULL PREMIUM AT",
        "GRAND i 10",
        "1,2 GLS",
        "1,2 GLS AT",
        "Otro"
      ],
      "Grand i10": [
        "Otro"
      ],
      "HB20": [
        "1,6 COMFORT PLUS",
        "1,6 COMFORT PLUS AT",
        "1,6 PLATINUM SAFETY AT",
        "HB20 SEDAN",
        "H 1",
        "2,6 TD 12/A MT FULL",
        "2,6 TD 12/A MT FULL PREMIUM",
        "2,6 TD 12/A AT FULL PREMIUM",
        "2,5 NAFTA 12/A FULL PREMIUM",
        "2,5 CRDI 170CV 12/A FULL",
        "2,5 CRDI 170CV 12/A FULL PREMIUM",
        "2,5 CRDI 170CV 12/A FULL PREMIUM AT",
        "H 100 HB20 0KM EN PESOS",
        "TRUCK 2,5 CRDi EXTRALARGO",
        "TRUCK 2,5 CRDi EXTRALARGO C/CAJA",
        "H 350",
        "2,5 CRDI 150HP LARGO T/ALTO 6MT",
        "i 10",
        "1,2 GLS",
        "i 30",
        "1,4 GLS FULL SEG",
        "1,6 GLS FULL SEG",
        "1,6 GLS FULL SEG AT",
        "1,6 GLS FULL SEG PREMIUM",
        "1,6 GLS FULL SEG PREMIUM AT",
        "2,0 GLS FULL SEG PREMIUM",
        "2,0 GLS FULL SEG PREMIUM AT",
        "1,8 GLS FULL SEG",
        "1,8 GLS FULL SEG AT",
        "1,8 GLS FULL SEG PREMIUM",
        "1,8 GLS FULL SEG PREMIUM AT",
        "1,8 GLS 6MT FULL SEG",
        "1,8 6AT GLS FULL SEG",
        "1,8 6MT GLS FULL SEG PREMIUM",
        "1,8 6AT GLS FULL SEG PREMIUM",
        "Otro"
      ],
      "i10": [
        "Otro"
      ],
      "i30": [
        "Otro"
      ],
      "Ioniq": [
        "1,6 6AT HIBRIDO",
        "Otro"
      ],
      "Veloster": [
        "1,6",
        "1,6 AT",
        "1,6 6MT",
        "1,6 6AT",
        "1,6 TURBO SPORT 6MT",
        "2,0 TECH 6AT",
        "1,6 T ULTIMATE 7DCT",
        "2,0 T N 6MT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Jaguar": {
      "F-Type": [
        "Otro"
      ],
      "XE": [
        "2,0 T SE 8AT 36",
        "2,0 T R-SPORT 8AT 53",
        "3,0 V6 S 67",
        "2,0 PURE 49 40 38",
        "2,0 PRESTIGE 59 48 45",
        "2,0 R-SPORT 67 64",
        "3,0 SUPERCHARGED S 82 74 70",
        "Otro"
      ],
      "XF": [
        "2,0 PREMIUM LUXURY 51",
        "3,0 V6 35 33",
        "5,0 R S/C 80 74 67 63 JAGUAR EN US$",
        "2,0 PRESTIGE 8AT 63 57 54",
        "3,0 V6 S 8AT 86 77 73",
        "XK",
        "5,0 R S/C 91 86",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Kia": {
      "Cerato": [
        "1,6 EX FORTE",
        "1,6 EX FORTE PREMIUM",
        "2,0 EX FORTE PREMIUM",
        "2,0 EX FORTE ELEGANCE AT",
        "KOUP 2,0 ELX",
        "1,6 EX 6VEL",
        "1,6 EX 6VEL AT",
        "1,6 AT",
        "2,0 AT",
        "2,0 EX AT",
        "2,0 SX AT",
        "2,0 SX PLUS AT",
        "2,0 SX AT GT LINE",
        "1,6 GT AT",
        "Otro"
      ],
      "K3": [
        "1,6 EX AT SEDAN",
        "1,6 GT-LINE AT SEDAN",
        "1,6 EX AT CROSS",
        "1,6 GT-LINE AT CROSS",
        "Otro"
      ],
      "K4": [
        "2,0 EX SEDAN",
        "2,0 GT-LINE AT SEDAN",
        "Otro"
      ],
      "Picanto": [
        "1,1 EX",
        "1,1 EX AT",
        "1,2",
        "Otro"
      ],
      "Rio": [
        "1,4 EX 6MT",
        "1,4 EX 4AT",
        "1,6 EX MT",
        "1,6 EX AT",
        "1,6 SX AT",
        "1,4 EX 6AT",
        "1,6 SX 6AT",
        "1,6 SX 6AT SC",
        "Otro"
      ],
      "Soul": [
        "1,6 CLASSIC",
        "1,6 POP AT",
        "1,6 ROCK AT",
        "1,6 6VEL",
        "1,6 6VEL BC",
        "1,6 AT",
        "1,6 AT TC",
        "1,6 6AT EX FULL",
        "1,6 6AT EX PREMIUM",
        "1,6 6AT EX",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Lexus": {
      "ES": [
        "2,5 300H LUXURY",
        "Otro"
      ],
      "GS": [
        "3,5 V6 350 F-SPORT (NAFTA)",
        "3,5 V6 450H LUXURY (HV)",
        "3,5 V6 450H F-SPORT (HV)",
        "GX 550",
        "3,5 V6 BITURBO 10AT LUXURY",
        "Otro"
      ],
      "IS": [
        "2,5 300H LUXURY",
        "2,0 T 300 F-SPORT 8AT",
        "Otro"
      ],
      "LC": [
        "5,0 8V 10AT 500",
        "Otro"
      ],
      "LS": [
        "3,5 V6 500H EXECUTIVE (HV)",
        "3,5 V6 500H F-SPORT (HV)",
        "Otro"
      ],
      "RC": [
        "3,5 V6 8AT 350 F-SPORT",
        "3,5 V6 8AT 350 F-SPORT MARCK LEVINSON",
        "3,5 V6 8AT 450H F-SPORT (LHD)",
        "3,5 V6 8AT 450H LUXURY (LHD)",
        "2,5 CVT 450H + PHEV LUXURY",
        "2,4 T 6AT HIBRIDO 500H F SPORT +",
        "UX",
        "2,0 250H (LHD)",
        "2,0 250H (LHD) F-SPORT",
        "2,0 200H HIBRIDO",
        "2,0 300H HIBRIDO E-CVT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Lotus": {
      "Elise": [
        "CONV 1,6 SPORT 28",
        "CONV 1,8 SPORT 220 30",
        "CONV 1,8 CUP 250 35",
        "Otro"
      ],
      "Emira": [
        "3,5 V6 405CV 6MT 114 103",
        "3,5 V6 405CV 6AT 119 107",
        "Otro"
      ],
      "Evora": [
        "3,5 V6 400 55",
        "3,5 V6 400 AT 55",
        "3,5 V6 SPORT 410 60",
        "Otro"
      ],
      "Exige": [
        "COUPE/ROADSTER 3,5 V6 350 40",
        "COUPE/ROADSTER 3,5 V6 380 45",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Maserati": {
      "Coupe": [
        "4,2 GRAN TURISMO 190 179",
        "Otro"
      ],
      "Ghibli": [
        "3,0 V6 BT 8AT 163 155 143",
        "Otro"
      ],
      "Gran Turismo": [
        "4,6 V8 6SEC SPORT 220",
        "4,6 V8 6SEC S 249 236 LOTUS EN US$",
        "McLAREN EN US$",
        "4,6 V8 6SEC MC STRADALE 269 256",
        "Otro"
      ],
      "Quattroporte": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "McLaren": {
      "Artura": [
        "3,0 V6 T 8AT HIBRIDO 600",
        "Otro"
      ],
      "750S": [
        "4,0 V8 7AT 608",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Mercedes Benz": {
      "Clase A": [
        "Otro"
      ],
      "Clase B": [
        "Otro"
      ],
      "Clase C": [
        "Otro"
      ],
      "Clase CLA": [
        "Otro"
      ],
      "Clase CLE": [
        "Otro"
      ],
      "Clase CLS": [
        "Otro"
      ],
      "Clase E": [
        "Otro"
      ],
      "Clase S": [
        "Otro"
      ],
      "Clase SL": [
        "Otro"
      ],
      "Clase SLC": [
        "Otro"
      ],
      "Clase SLK": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Mini": {
      "Cooper": [
        "Otro"
      ],
      "Clubman": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Mitsubishi": {
      "Lancer": [
        "2,0 GLS",
        "2,0 GLS AT",
        "2,0 GT AT CRO",
        "L 200 PICK - UP",
        "3,2 CR 4WD CRO",
        "3,2 CR 4WD CRO AT",
        "3,2 GLS 4WD",
        "3,2 GLX 4WD",
        "2,5 HP DI-D 4WD",
        "2,5 HP DI-D 4WD CRO T/C",
        "2,5 HP DI-D 4WD CRO AT T/C",
        "2,4 DI-D HIGH-POWER 4WD 6MT",
        "2,4 DI-D HIGH-POWER 4WD 5AT",
        "2,4 TDi GLS 6MT FULL",
        "2,4 TDi GLS 6AT",
        "2,4 TDi GLS 6AT FULL",
        "2,4 TDi GLS 6AT 4WD FULL",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Nissan": {
      "Altima": [
        "2,5 ADVANCE PURE",
        "2,5 ADVANCE MEDIA TECH",
        "COUPE",
        "3,7 V6 370 Z",
        "3,7 V6 370 Z AT",
        "3,7 V6 370 Z AT ROADSTER",
        "FRONTIER PICK - UP",
        "2,5 TDi 4X4 LE",
        "2,5 TDi 4X4 LE CRO",
        "2,5 TDi 4X4 LE CRO AT",
        "2,5 TDi 4X4 LE 6MT",
        "2,5 TDi 4X4 LE 6MT PACK PREMIUM",
        "2,5 TDi 4X4 LE AT ATTACK",
        "2,3 TD 4X2 SE PLUS MT",
        "2,3 TD 4X2 S MT",
        "2,3 TD 4X4 S MT",
        "2,3 TD 4X2 SE MT",
        "2,3 TD 4X4 SE MT",
        "2,3 TD 4X2 XE MT",
        "2,3 TD 4X4 XE MT",
        "2,3 TD 4X2 LE MT",
        "2,3 TD 4X4 LE MT",
        "2,3 TD 4X4 LE AT",
        "2,3 TD 4X2 X-GEAR 7AT",
        "2,3 TD 4X4 X-GEAR 7AT",
        "2,3 TD 4X4 X-GEAR PLUS 7AT",
        "2,3 TD 4X2 S MT 160CV",
        "2,3 TD 4X4 S MT 160CV",
        "2,3 TD 4X2 S AT 190CV",
        "2,3 TD 4X4 X-GEAR AT 190CV",
        "2,3 TD 4X2 XE MT 160CV",
        "2,3 TD 4X2 XE AT 190CV",
        "2,3 TD 4X4 XE MT 190CV",
        "2,3 TD 4X2 PLATINUM AT 190CV",
        "2,3 TD 4X4 PLATINUM AT 190CV",
        "2,3 TD 4X4 PRO-4X AT 190CV",
        "KICKS",
        "1,6 ADVANCE",
        "1,6 ADVANCE CVT",
        "1,6 EXCLUSIVE CVT",
        "1,6 EXCLUSIVE CVT TBT",
        "1,6 SENSE",
        "1,6 SPECIAL EDITION CVT",
        "1,6 UCL LIMITED EDITION CVT",
        "1,6 ADVANCE CVT UCL",
        "1,6 EDITION CVT",
        "1,6 ADVANCE CVT PLUS",
        "1,6 X-PLAY",
        "1,6 X-PLAY-III",
        "1,0 TCE 6AT SENSE",
        "1,0 TCE 6AT ADVANCE",
        "1,0 TCE 6AT EXCLUSIVE",
        "KICKS PLAY",
        "Otro"
      ],
      "Leaf": [
        "5P",
        "TEKNA",
        "Otro"
      ],
      "March": [
        "1,6 VISIA",
        "1,6 VISIA PLUS",
        "1,6 ACENTA ABS",
        "1,6 SR",
        "1,6 ACTIVE",
        "1,6 SENSE",
        "1,6 SENSE AT",
        "1,6 ADVANCE",
        "1,6 ADVANCE AT",
        "1,6 MEDIA TECH",
        "1,6 MEDIA TECH AT",
        "Otro"
      ],
      "Note": [
        "1,6 SENSE",
        "1,6 SENSE PURE DRIVE",
        "1,6 SENSE CVT",
        "1,6 ADVANCE",
        "1,6 ADVANCE CVT",
        "1,6 EXCLUSIVE CVT",
        "1,6 EXCLUSIVE PURE DRIVE CVT",
        "1,6 SR",
        "1,6 SR CVT",
        "NP 300 PICK UP",
        "2,5 TD 4X2",
        "NP 300 PICK UP FRONTIER",
        "2,3 D LE 4X2 6V",
        "2,3 D LE 4X4 6V",
        "2,3 D LE 4X4 AT",
        "2,3 D SE 4X2 6V",
        "2,3 D SE 4X2 6V PLUS",
        "2,3 D XE 4X4 6V",
        "Otro"
      ],
      "Sentra": [
        "2,0 ACENTA",
        "2,0 ACENTA AT",
        "2,0 TEKNA AT",
        "1,8 SENSE",
        "1,8 ADVANCE",
        "1,8 SR CVT",
        "1,8 EXCLUSIVE CVT",
        "1,8 ADVANCE SAFETY PACK",
        "1,8 ADVANCE SAFETY PACK CVT",
        "1,8 SR CVT SAFETY PACK",
        "1,8 EXCLUSIVE CVT SAFETY PACK",
        "2,0 ADVANCE CVT",
        "2,0 SR CVT",
        "2,0 SR CVT NIGHTFALL",
        "2,0 EXCLUSIVE CVT",
        "TEANA",
        "250 XV",
        "Otro"
      ],
      "Tiida": [
        "1,8 ACENTA HATCHBACK",
        "1,8 ACENTA SEDAN",
        "1,8 TEKNA HATCHBACK",
        "1,8 TEKNA SEDAN",
        "1,8 VISIA HATCHBACK",
        "1,8 VISIA SEDAN",
        "Otro"
      ],
      "Versa": [
        "1,6 VISIA MT",
        "1,6 ACENTA MT",
        "1,6 ACENTA AT",
        "1,6 EXCLUSIVE AT",
        "1,6 EXCLUSIVE CVT",
        "1,6 SENSE",
        "1,6 SENSE AT",
        "1,6 SENSE CVT",
        "1,6 ADVANCE",
        "1,6 ADVANCE AT",
        "1,6 ADVANCE CVT",
        "1,6 SR CVT",
        "V-DRIVE MT",
        "V-DRIVE PLUS AT",
        "XTRAIL",
        "2,5 ACENTA 6MT",
        "2,5 TEKNA CVT",
        "2,5 4X4 EXCLUSIVE 7CVT",
        "2,5 4X4 ADVANCE 7CVT",
        "2,5 4X2 ADVANCE CVT",
        "2,5 4X4 EXCLUSIVE CVT",
        "1,5 4X4 E-POWER CVT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Peugeot": {
      "206": [
        "1,4 GENERATION",
        "1,4 GENERATION PLUS",
        "1,4 ACTIVE SEG",
        "1,4 ALLURE SEG",
        "Otro"
      ],
      "207": [
        "1,4 XR COMPACT",
        "1,6 XT COMPACT",
        "1,6 XT COMPACT PREMIUM",
        "1,4 ACTIVE COMPACT SEG",
        "1,6 FELINE COMPACT",
        "1,6 GRIFFE COMPACT",
        "1,4 XS COMPACT",
        "1,6 XT COMPACT TIPT",
        "1,4 HDi XR",
        "1,4 HDi XS",
        "1,4 HDi XT",
        "1,4 HDi ACTIVE COMPACT SEG",
        "1,4 ALLURE COMPACT SEG",
        "1,4 HDi ALLURE COMPACT SEG",
        "1,4 HDi FELINE COMPACT",
        "1,4 QUIKSILVER",
        "1,6 XS COMPACT",
        "1,4 ACTIVE COMPACT",
        "1,6 ALLURE COMPACT SEG",
        "1,6 FELINE COMPACT TIPT",
        "GTI",
        "1,6 CC 156HP",
        "SW 1,6 XS COMPACT",
        "SW 1,6 XT COMPACT",
        "Otro"
      ],
      "208": [
        "1,2 LIKE",
        "1,2 LIKE NEW",
        "1,2 T GT 6TIPT",
        "1,2 T GT 6TIPT LINE",
        "1,5 ACTIVE",
        "1,5 ALLURE",
        "1,5 ALLURE TOUCHSCREEN",
        "1,5 ALLURE SMEG",
        "1,6 ACTIVE",
        "1,6 ACTIVE PACK",
        "1,6 ACTIVE MT5",
        "1,6 ACTIVE TIPT6",
        "1,6 ACTIVE TIPT6 PACK",
        "1,6 ALLURE",
        "1,6 ALLURE NAV",
        "1,6 ALLURE PACK",
        "1,6 ALLURE MT5",
        "1,6 ALLURE MT5 PK",
        "1,6 ALLURE TOUCHSCREEN",
        "1,6 ALLURE TIPT",
        "1,6 ALLURE TIPT SMEG",
        "1,6 ALLURE TIPT NAV",
        "1,6 ALLURE TIPT6",
        "1,6 ALLURE TIPT6 PACK",
        "T200 ALLURE PK CVT6",
        "1,6 FELINE",
        "1,6 FELINE PACK CUIR",
        "1,6 FELINE TIPT6",
        "1,6 IN CONCERT",
        "1,6 LIKE PACK",
        "1,6 STYLE",
        "1,6 STYLE TIPT6",
        "1,6 ROADTRIP",
        "1,6 ROADTRIP TIPT6",
        "1,6 THP GT",
        "T200 CVT GT",
        "1,6 HDi ALLURE PLUS",
        "1,6 HDi 92 ALLURE PLUS",
        "1,6 URBAN TECH",
        "1,6 VTi IN CONCERT",
        "XY",
        "GTI",
        "Otro"
      ],
      "301": [
        "1,6 16V ALLURE",
        "1,6 16V ALLURE PLUS",
        "1,6 16V ALLURE PLUS TIPT",
        "1,6 HDi ALLURE",
        "1,6 HDi ALLURE PLUS",
        "Otro"
      ],
      "307": [
        "1,6 XS",
        "2,0 XS PREMIUM",
        "1,6 XT PREMIUM",
        "Otro"
      ],
      "308": [
        "1,6 ACTIVE",
        "1,6 ACTIVE NAV",
        "1,6 ALLURE",
        "1,6 ALLURE NAV",
        "1,6 ALLURE ESP",
        "1,6 ALLURE PACK",
        "1,6 THP ALLURE PACK TIPT",
        "1,6 THP ROLAND GARROS",
        "1,6 THP ROLAND GARROS TIPT",
        "1,6 THP FELINE",
        "1,6 THP FELINE TIPT",
        "2,0 ALLURE PLUS",
        "2,0 FELINE",
        "2,0 FELINE BVA TIPT",
        "1,6 THP SPORT",
        "1,6 HDi ACTIVE",
        "1,6 HDi ALLURE",
        "1,6 HDi ALLURE NAV",
        "1,6 HDi ALLURE PACK",
        "1,6 HDi FELINE",
        "1,6 HDi ROLLAND GARROS",
        "1,6 GTI",
        "1,6 THP S GTi",
        "1,6 THP S ALLURE PLUS 6AT",
        "1,6 T PURE TECH GT 8AT",
        "1,6 THP S GTi FRANCHE",
        "CC 1,6 T NAV",
        "CC 1,6 T TIPT",
        "Otro"
      ],
      "408": [
        "1,6 ACTIVE",
        "1,6 ALLURE",
        "1,6 ALLURE PACK",
        "1,6 THP ALLURE PLUS T/C CRO +",
        "1,6 THP ALLURE PLUS",
        "1,6 THP ALLURE PACK TIPT",
        "1,6 THP FELINE TIPT",
        "1,6 THP SPORT",
        "2,0 ALLURE",
        "2,0 ALLURE ESP",
        "2,0 ALLURE NAV",
        "2,0 ALLURE T/C CRO +",
        "2,0 ALLURE T/C CRO NAV",
        "2,0 ALLURE TIPT",
        "2,0 ALLURE TIPT NAV",
        "2,0 ALLURE TIPT T/C CRO",
        "2,0 ALLURE TIPT T/C CRO NAV",
        "2,0 FELINE",
        "1,6 HDi ALLURE",
        "1,6 HDi ALLURE PACK",
        "1,6 HDi ALLURE NAV",
        "1,6 HDi ALLURE T/C CRO",
        "1,6 HDi ALLURE + T/C CRO NAV",
        "1,6 HDi FELINE",
        "1,6 T 8AT GT",
        "Otro"
      ],
      "508": [
        "1,6 THP ALLURE TIP",
        "1,6 THP ALLURE TIP T/C",
        "1,6 THP FELINE TIP",
        "2,0 HDi ALLURE TIP",
        "2,0 HDi FELINE TIP",
        "2,2 HDi GT TIP",
        "Otro"
      ],
      "RCZ": [
        "COUPE",
        "TIPT",
        "CARBON CONCEPT",
        "1,6 THP 200CV",
        "1,6 THP 163CV TIPT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Porsche": {
      "911": [
        "2P CARRERA 69",
        "2P CARRERA S 78",
        "2P CARRERA",
        "2P CARRERA S",
        "CONV CARRERA 78",
        "CONV CARRERA S 87",
        "CONV CARRERA",
        "CONV CARRERA S",
        "2P CARRERA 4 75",
        "2P CARRERA 4 S 85",
        "CONV CARRERA 4 86",
        "CONV CARRERA 4 S 91",
        "2P CARRERA 4 S",
        "CONV CARRERA 4 S",
        "2P GT2 RS 460 437 405",
        "2P GT3 RS 111",
        "2P GT3",
        "2P GT3 RS",
        "2P TARGA 4 94",
        "2P TARGA 4 S 100",
        "2P TARGA 4 S",
        "2P TURBO 121 111",
        "2P TURBO S 127 120",
        "CONV TURBO 128 121",
        "CONV TURBO S 134 127",
        "2P TURBO",
        "2P TURBO S",
        "CONV TURBO",
        "CONV TURBO S",
        "CONV 4,0 6MT 491 467",
        "911 (992)",
        "CARRERA 191 182 169 159 151",
        "CARRERA T 214 203 189",
        "CARRERA 4 206 196 182 172 163",
        "CARRERA S 3,0 BT 8AT 225 213 198 187 178 169",
        "CARRERA 4S 3,0 BT 8AT 238 227 211 199 189 180",
        "CARRERA GTS 268 254 237 224",
        "CARRERA 4 GTS 281 267 249 236",
        "GT3",
        "GT3 TOURING",
        "GT3 RS 433 411 382",
        "SPORT CLASSIC 490 466 433",
        "S/T 490 466",
        "CABRIOLET CARRERA 217 207 192 182 173",
        "CABRIOLET CARRERA 4 233 221 206 195 185",
        "CABRIOLET CARRERA S 3,0 BT 8AT 248 235 219 208 197 187",
        "CABRIOLET CARRERA 4S 3,0 BT 8AT 263 250 232 220 209 199",
        "CABRIOLET CARRERA GTS 291 277 257 245",
        "CABRIOLET CARRERA 4 GTS 306 290 270 257",
        "CABRIOLET TARGA 4 233 222 206 195 186",
        "CABRIOLET TARGA 4 S 265 252 234 222 211",
        "CABRIOLET TARGA 4 GTS 281 267 249 236",
        "CABRIOLET EDITION 50 YEARS 469 446",
        "CARRERA",
        "CARRERA T",
        "CARRERA S",
        "CARRERA GTS",
        "CARRERA 4 GTS",
        "TURBO 50 YEARS 490",
        "CARRERA 4 S",
        "TARGA 4 S",
        "TURBO S T HYBRID",
        "CABRIOLET CARRERA",
        "CABRIOLET CARRERA GTS",
        "CABRIOLET CARRERA 4 GTS",
        "CABRIOLET CARRERA 4 S",
        "CABRIOLET TARGA 4 GTS",
        "CABRIOLET TARGA 4 S",
        "CABRIOLET SPIRIT 70",
        "CABRIOLET 4 S",
        "CABRIOLET TURBO S T HYBRID",
        "911 TURBO PDK",
        "383 364 338 322 306",
        "3,8 T 8AT 650CV S 450 428 398 381 361",
        "DAKAR 465 442",
        "CABRIOLET 412 391 364 347 329",
        "CABRIOLET 3,8 T 8AT 650CV S 479 455 423 405 385",
        "BOXSTER 718",
        "CONV 54",
        "CONV S 58",
        "SPYDER 3,4 70",
        "CONV",
        "CONV S",
        "CONV GTS 4.0",
        "CONV SPYDER 213 202 188 179 170",
        "CONV STYLE EDITION",
        "Otro"
      ],
      "Boxster": [
        "Otro"
      ],
      "Cayman": [
        "Otro"
      ],
      "Panamera": [
        "S 60 55",
        "4 S 63 58",
        "TURBO 65 59",
        "GTS 84 76",
        "V6 BT 4 S 8AT II 107 99 92",
        "V8 BT TURBO 8AT II 119 111 102 92",
        "V8 BT TURBO 8AT SPORT TURISMO 122",
        "2,9 330CV",
        "PLATINUM EDITION 204 194 180",
        "4,0 V8 BT 8AT 480CV GTS",
        "4,0 630CV TURBO S",
        "4 E-HYBRID 215 205 190 186 176",
        "4 E-HYBRID PLATINUM EDITION 234 222 207",
        "4 S E-HYBRID 250 237 221 215 204",
        "4 TURBO S E-HYBRID 313 297 277 269 256",
        "2,9 V6",
        "4 E-HYBRYD",
        "4S E-HYBRYD",
        "TURBO-HYBRYD",
        "TURBO-HYBRYD S",
        "GTS",
        "SPYDER 718",
        "CONV RS",
        "TAYCAN (ELECTRICO)",
        "300 KW/408PS 159 151 140 138",
        "300 KW/408PS",
        "270KW",
        "BLACK EDITION",
        "4 S AT 530CV 198 188 179 167 164 155",
        "300KW 4",
        "320KW 4 BLACK EDITION",
        "4 S AT 530CV",
        "4 S BLACK EDITION",
        "4 TURBO AT 680CV 233 222 206 202 192",
        "4 TURBO AT 680CV",
        "4 TURBO S AT 761CV 278 264 246 241 229",
        "4 TURBO S AT 761CV",
        "TURBO GT",
        "TURBO GT WEISSACH",
        "GTS 220 209 195",
        "4 CROSS TURISMO 184 175 163 160",
        "4 CROSS TURISMO",
        "4 S CROSS TURISMO 197 188 174 171",
        "4 S CROSS TURISMO",
        "4 TURBO CROSS TURISMO 244 232 216 212",
        "4 TURBO CROSS TURISMO",
        "Otro"
      ],
      "Taycan": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Renault": {
      "Clio": [
        "1,2 BASE",
        "1,2 PACK",
        "1,2 PACK PLUS",
        "1,2 PACK SL GET UP",
        "1,2 CAMPUS",
        "1,2 CAMPUS PACK I",
        "1,2 CAMPUS PACK II",
        "1,2 PACK A/C DH",
        "CLIO MIO",
        "1,2 16V AUTH PACK",
        "1,2 16V AUTH PACK ABS ABG",
        "1,2 16V AUTH PACK LOOK",
        "1,2 16V AUTH PACK LOOK ABS ABG",
        "1,2 16V CONFORT",
        "1,2 16V CONFORT ABS ABG",
        "1,2 16V CONFORT PACK",
        "1,2 16V CONFORT PACK SAT",
        "1,2 16V CONFORT PLUS",
        "1,2 16V CONFORT PLUS ABS ABG",
        "1,2 16V DYNAMIQUE",
        "1,2 16V DYNAMIQUE SAT",
        "1,2 16V EXP",
        "1,2 16V EXP PACK I",
        "1,2 16V EXP PACK II",
        "1,2 16V EXP PACK II LVAVEL",
        "1,2 16V GT LINE",
        "CLIO WORK",
        "1,2 16V A/C DH ABG ABS",
        "Otro"
      ],
      "Fluence": [
        "1,6 CONFORT",
        "1,6 CONFORT PLUS",
        "1,6 DYNAMIQUE",
        "1,6 DYNAMIQUE PACK",
        "1,6 LUXE",
        "2,0 DYNAMIQUE",
        "2,0 LUXE",
        "2,0 LUXE PACK",
        "2,0 LUXE CVT",
        "2,0 LUXE PACK CVT",
        "2,0 LUXE RLINK",
        "2,0 LUXE RLINK CUIR",
        "2,0 PRIVILEGE",
        "2,0 PRIVILEGE AT",
        "2,0 PRIVILEGE CVT",
        "2,0 16V SPORT",
        "2,0 16V GT",
        "2,0 16V GT 2",
        "Otro"
      ],
      "Kwid": [
        "1,0 LIFE",
        "1,0 ZEN",
        "1,0 INTENS",
        "1,0 ICONIC",
        "1,0 OUTSIDER",
        "1,0 ICONIC BITONO",
        "1,0 ICONIC OUTSIDER",
        "KWID E-TECH",
        "E-TECH",
        "Otro"
      ],
      "Latitude": [
        "2,0 DYNAMIQUE",
        "3,5 V6 PRIVILEGE",
        "Otro"
      ],
      "Logan": [
        "1,6 8V PACK",
        "1,6 8V PACK PLUS",
        "1,6 8V CONFORT",
        "1,6 8V CONFORT PLUS",
        "1,6 8V CONFORT I",
        "1,6 8V CONFORT II",
        "1,6 8V CONFORT II ABS",
        "1,6 AUTHENTIQUE PACK I",
        "1,6 8V AUTHENTIQUE PACK I ABS",
        "1,6 AUTHENTIQUE PACK II",
        "1,6 8V AUTHENTIQUE PACK II ABS/PLUS",
        "1,6 AVANTAGE SL",
        "1,6 EXPRESSION",
        "1,6 EXPRESSION PACK I",
        "1,6 16V PRIVILEGE",
        "1,6 16V PRIVILEGE PLUS",
        "1,6 16V LIFE",
        "1,6 16V LIFE PACK",
        "1,6 16V ZEN",
        "1,6 16V INTENS",
        "1,6 16V INTENS GNC",
        "1,6 16V INTENS CVT",
        "Otro"
      ],
      "Megane": [
        "Otro"
      ],
      "Sandero": [
        "1,6 PACK",
        "1,6 PACK PLUS",
        "1,6 AUTH PACK I",
        "1,6 AUTH PACK II",
        "1,6 AUTH PACK II ABS",
        "1,6 AUTH",
        "1,6 16V CONFORT",
        "1,6 DYNAMIQUE",
        "1,6 16V EXPRESSION",
        "1,6 EXPRESSION ABS",
        "1,6 EXPRESSION",
        "1,6 EXPRESSION PACK",
        "1,6 16V LUXE",
        "1,6 16V PRIVILEGE",
        "1,6 16V PRIVILEGE NAV",
        "1,6 16V PRIVILEGE PACK",
        "1,6 16V GT LINE",
        "1,6 SL TECH RUN",
        "1,6 16V LIFE PH2",
        "1,6 16V LIFE",
        "1,6 16V ZEN PH2",
        "1,6 16V ZEN",
        "1,6 16V INTENS PH2",
        "1,6 16V INTENS",
        "1,6 16V INTENS CVT",
        "1,6 16V GT LINE CVT",
        "2,0 RS",
        "2,0 RS RACING SPIRIT",
        "SANDERO STEPWAY",
        "1,6 16V AUTH",
        "1,6 16V DYNAMIQUE",
        "1,6 16V PRIVILEGE PLUS",
        "1,6 16V RIP CURL",
        "1,6 16V SL TWEED",
        "1,6 16V VOLCOM",
        "1,6 16V INTENS SL",
        "1,6 16V C.A.B.",
        "Otro"
      ],
      "Stepway": [
        "Otro"
      ],
      "Symbol": [
        "1,6 16V PACK",
        "1,6 16V CONFORT",
        "1,6 16V CONNECTION",
        "1,6 16V LUXE",
        "1,6 AUTH PACK I",
        "1,6 AUTH PACK II",
        "1,6 AUTH PACK II ABS",
        "1,6 EXP PACK II",
        "1,5 dCi CONFORT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Smart": {
      "Fortwo": [
        "1,0 CITY",
        "1,0 CITY C453",
        "1,0 PASSION",
        "1,0 PASSION C453",
        "1,0 PASSION HIGH",
        "1,0 PASSION LIMITED EDITION",
        "1,0 PASSION GREY MATT PLUS EDITION",
        "1,0 PLAY",
        "1,0 SHARPRED EDITION",
        "CONV 1,0 PASSION",
        "CONV 1,0 PASSION HIGH",
        "CONV 1,0 PASSION LIMITED EDITION",
        "CONV 1,0 RED & WHITE",
        "CONV 1,0 GREY MATT EDITION",
        "FORFOUR",
        "1,0 PASSION AT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Subaru": {
      "Impreza": [
        "2,0R AWD RN",
        "2,0R AWD RN AT",
        "2,0R AWD NA",
        "2,0R AWD NA AT",
        "1,5R AWD 2A 107CV",
        "1,5R AWD 2A 107CV AT",
        "2,0R AWD RC 150CV",
        "2,0R AWD RC 150CV SPORTSHIFT",
        "2,5R AWD WRX TURBO 265CV",
        "2,5R AWD 300CV STI",
        "2,5 AWD WRX TURBO 265CV",
        "2,0i AWD DYNAMIC CVT",
        "2,0i AWD LIMITED EYESIGHT CVT",
        "2,0i AWD LIMITED CVT",
        "2,0 AWD DYNAMIC EYESIGHT CVT",
        "Otro"
      ],
      "Legacy": [
        "2,0 AWD 6MT X",
        "2,5 AWD CVT XA",
        "2,5 AWD CVT LIMITED",
        "2,5 AWD CVT SPORT",
        "2,5 AWD 5AT GT SI DRIVE",
        "SW 2,0 AWD CVT XA",
        "2,5 i AWD CVT LIMITED",
        "Otro"
      ],
      "WRX": [
        "2,0 T",
        "2,0 T AT",
        "2,0 T CVT",
        "2,4 T AWD 6MT PERFORMANCE ES",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Suzuki": {
      "Baleno": [
        "1,4 GLX",
        "1,4 GLX AT",
        "Otro"
      ],
      "Swift": [
        "1,5",
        "1,4 WT GLX",
        "1,2 GLX CVT",
        "1,2 GLX HYBRID",
        "1,2 GLX HYBRID AT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Toyota": {
      "86": [
        "Otro"
      ],
      "Camry": [
        "2,5 L4 AT",
        "3,5 V6 AT",
        "2,5 L4 6AT",
        "3,5 V6 8AT",
        "2,5 HEV e CVT",
        "C-HR",
        "1,8 HV HIBRIDO eCVT",
        "Otro"
      ],
      "Corolla": [
        "1,8 XLI",
        "1,8 XEI",
        "1,8 XEI PACK",
        "1,8 XEI AT",
        "1,8 XEI AT PACK",
        "1,8 SE-G AT",
        "1,8 XRS",
        "1,8 SE-G",
        "1,8 XLI MT",
        "1,8 XLI CVT",
        "1,8 XEI MT",
        "1,8 XEI CVT",
        "1,8 XEI MT PACK",
        "1,8 XEI CVT PACK",
        "1,8 SEG MT",
        "1,8 SEG CVT",
        "2,0 XLI MT",
        "2,0 XLI CVT",
        "2,0 XEI MT",
        "2,0 XEI CVT",
        "2,0 SEG CVT",
        "2,0 GR-S 10CVT",
        "HV 1,8 XEI CVT",
        "HV 1,8 SEG CVT",
        "HEV 1,8 XEI eCVT",
        "HEV 1,8 SEG eCVT",
        "2,0 XLI CVT SAFETY",
        "2,0 XEI CVT SAFETY",
        "2,0 SEG CVT SAFETY",
        "2,0 GR-S 10CVT SAFETY",
        "HEV 1,8 XEI eCVT SAFETY",
        "HEV 1,8 SEG eCVT SAFETY",
        "Otro"
      ],
      "Etios": [
        "1,5 X",
        "1,5 XS",
        "1,5 XLS",
        "1,5 PLATINUM",
        "1,5 X 6MT",
        "1,5 XS 6MT",
        "1,5 XLS 6MT",
        "1,5 XLS 4AT",
        "1,5 PLATINUM 6MT",
        "1,5 PLATINUM 4AT",
        "1,5 XLS PACK 6MT",
        "1,5 XLS PACK 4AT",
        "1,5 AIBO 6MT",
        "ETIOS CROSS",
        "1,5 XLS 4AMT",
        "Otro"
      ],
      "Prius": [
        "1,8 CVT",
        "1,8 CVT (LN)",
        "1,8 CVT IV",
        "1,8 HV CVT",
        "RAV - 4",
        "2,4 4X2 AT",
        "2,4 4X4 AT",
        "2,4 4X2 AT FULL",
        "2,4 4X4 AT FULL",
        "2,0 16V TX 4X2 CVT",
        "2,0 16V VX 4X2 CVT FULL",
        "2,5 16V TX 4X4 6AT",
        "2,5 16V VX 4X4 6AT FULL",
        "2,5 XLE 4X2 CVT HYBRID",
        "2,5 LIMITED 4X2 CVT HYBRID",
        "2,5 LIMITED 4X4 CVT HYBRID",
        "HEV LIMITED AWD CVT",
        "2,5 HEV LIMITED AWD CVT",
        "Otro"
      ],
      "Yaris": [
        "1,5 CVT 7AT",
        "1,5 XS 6MT",
        "1,5 XLS 6MT",
        "1,5 XLS PACK CVT",
        "1,5 S 6MT",
        "1,5 S CVT",
        "1,5 XLS CVT",
        "1,5 XS CVT",
        "1,5 XLS + CVT",
        "1,6 T GR",
        "1,6 T GR 6MT",
        "1,6 T GR 8AT",
        "YARIS CROSS",
        "1,5 XLI CVT",
        "1,5 XEI CVT",
        "1,5 SEG CVT",
        "1,5 XEI HEV eCVT",
        "1,5 SEG HEV eCVT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Volkswagen": {
      "Bora": [
        "1,8 T HIGHLINE 180CV",
        "1,8 T HIGHLINE 180CV CRO",
        "1,8 T HIGHLINE 180CV TIPT",
        "1,8 T HIGHLINE 180CV CRO TIPT",
        "2,0 TRENDLINE 115CV",
        "2,0 TRENDLINE 115CV TIPT",
        "1,9 TDi TRENDLINE",
        "Otro"
      ],
      "Crossfox": [
        "1,6 COMFORTLINE",
        "1,6 TRENDLINE",
        "1,6 TRENDLINE CRO FULL",
        "1,6 HIGHLINE",
        "1,6 HIGHLINE CRO",
        "1,6 MSI 16V HIGHLINE",
        "Otro"
      ],
      "Fox": [
        "1,6 COMFORTLINE",
        "1,6 COMFORTLINE PACK",
        "1,6 TRENDLINE",
        "1,6 HIGHLINE",
        "1,6 MSI COMFORTLINE",
        "1,6 MSI CONNECT",
        "1,6 MSI TRACK",
        "1,6 MSI TRENDLINE",
        "1,6 TRENDLINE I MOTION",
        "1,6 MSI 16V HIGHLINE",
        "1,6 MSI 16V HIGHLINE PEPPER",
        "1,6 HIGHLINE I MOTION",
        "1,6 MSI 16V HIGHLINE I MOTION",
        "Otro"
      ],
      "Gol": [
        "1,4L POWER 4G",
        "1,4L POWER 4G DH A/C",
        "GOL COUNTRY",
        "1,4 POWER 4G",
        "1,4 POWER 4G DH A/C",
        "GOL TREND",
        "1,6 GP SERIE",
        "1,6 GP SERIE ABG ABS",
        "1,6 GP PACK I",
        "1,6 GP PACK I ABG ABS",
        "1,6 GP PACK II",
        "1,6 GP PACK III",
        "1,6 SERIE",
        "1,6 TRENDLINE",
        "1,6 HIGHLINE",
        "1,6",
        "1,6 PACK I",
        "1,6 PACK I PLUS",
        "1,6 PACK I PLUS I MOTION",
        "1,6 PACK III",
        "1,6 PACK III ABS",
        "1,6 PACK III I MOTION",
        "1,6 GP PACK III I MOTTION",
        "1,6 SPORTLINE",
        "1,6 GP CUP",
        "1,6 HIGHLINE I MOTTION",
        "1,6 COMF",
        "1,6 CONNECT",
        "1,6 TRENDLINE TIPT",
        "1,6 COMF TIPT",
        "Otro"
      ],
      "Golf": [
        "1,6 FORMAT",
        "1,6 CONCEPLINE",
        "1,6 ADVANCE",
        "2,0 ADVANCE",
        "2,0 ADVANCE AT",
        "2,0 CONCEPTLINE",
        "2,0 HIGHLINE T/C",
        "2,0 HIGHLINE T/C TIPT",
        "1,9 TDi CONCEPTLINE",
        "1,9 TDi ADVANCE",
        "1,8 GTi 180CV",
        "1,8 GTi 180CV TIPT",
        "2,0 TSI GTi 211CV",
        "2,0 TSI GTi 211CV NAV",
        "2,0 TSI GTi 211CV DSG",
        "2,0 TSI GTi 211CV DSG NAV",
        "1,6 TRENDLINE",
        "1,4 TSI COMFORTLINE",
        "1,4 TSI COMFORTLINE DSG",
        "1,4 TSI HIGHLINE DSG",
        "2,0 TSI GTI",
        "2,0 TSI GTI CRO",
        "2,0 TSI GTI APP CONNECT",
        "2,0 TSI GTI APP CONNECT CRO",
        "2,0 TSI GTI DSG",
        "2,0 TSI GTI DSG CRO",
        "250 TSI HIGHLINE DSG",
        "GTI",
        "GOLF VARIANT",
        "1,6 TRENDLINE AT",
        "NEW BEETLE",
        "2P 2,0 ADVANCE",
        "2P 2,0 ADVANCE AT",
        "2P 2,0 LUXURY CRO",
        "2P 2,0 LUXURY CRO AT",
        "2P 1,8 T SPORT",
        "2P 1,8 T SPORT TIPT",
        "2P 1,8 T CABRIOLET SPORT TIPT",
        "Otro"
      ],
      "Jetta": [
        "Otro"
      ],
      "Passat": [
        "2,0 TSI ADVANCE",
        "2,0 TSI ADVANCE DSG",
        "2,0 TSI EXCLUSIVE",
        "2,0 TSI EXCLUSIVE DSG",
        "2,0 TSI EXCLUSIVE WOOD",
        "2,0 TSI EXCLUSIVE WOOD DSG",
        "2,0 TSI LUXURY",
        "2,0 TSI LUXURY DSG",
        "2,0 TSI LUXURY WOOD",
        "2,0 TSI LUXURY WOOD DSG",
        "3,2 V6 FSI HIGHLINE 4M",
        "3,2 V6 FSI HIGHLINE 4M WOOD",
        "2,0 TSI CC ADVANCE",
        "2,0 TSI CC ADVANCE DSG",
        "2,0 TSI CC LUXURY",
        "2,0 TSI CC LUXURY DSG",
        "2,0 TSI CC EXCLUSIVE",
        "2,0 TSI CC EXCLUSIVE DSG",
        "3,6 V6 300CV CC DSG DQ",
        "1,8 TSI CONFORT",
        "1,8 TSI CONFORT DSG",
        "2,0 TSI HIGHLINE DSG",
        "2,0 TSI R-LINE DSG",
        "2,0 TDi ADVANCE",
        "2,0 TDi ADVANCE DSG",
        "2,0 TDi LUXURY",
        "2,0 TDi LUXURY 17",
        "2,0 TDi LUXURY WOOD",
        "2,0 TDi LUXURY DSG",
        "2,0 TDi LUXURY DSG WOOD",
        "2,0 TDi EXCLUSIVE",
        "2,0 TDi EXCLUSIVE WOOD",
        "2,0 TDi EXCLUSIVE DSG",
        "2,0 TDi EXCLUSIVE DSG WOOD",
        "2,0 TDi EXCLUSIVE DSG WOOD 17",
        "2,0 TDi CC ADVANCE",
        "2,0 TDi CC ADVANCE DSG",
        "2,0 TDi CC LUXURY",
        "2,0 TDi CC LUXURY DSG",
        "2,0 TDi CC EXCLUSIVE",
        "2,0 TDi CC EXCLUSIVE DSG",
        "2,0 TDi ADVANCE BLUEMOTION",
        "2,0 TDi ADVANCE BLUEMOTION DSG",
        "2,0 TDi LUXURY BLUEMOTION",
        "2,0 TDi LUXURY BLUEMOTION DSG",
        "PASSAT CC",
        "2,0 TSI ADVANCE MQ",
        "2,0 TSI ADVANCE DQ AT",
        "2,0 TSI LUXURY MQ",
        "2,0 TSI LUXURY DQ AT",
        "2,0 TSI EXCLUSIVE MQ",
        "2,0 TSI EXCLUSIVE DQ AT",
        "3,6 V6 HIGHLINE DSG",
        "2,0 TDi ADVANCE MQ",
        "2,0 TDi ADVANCE DQ AT",
        "2,0 TDi LUXURY MQ",
        "2,0 TDi LUXURY DQ AT",
        "2,0 TDi EXCLUSIVE MQ",
        "2,0 TDi EXCLUSIVE DQ AT",
        "2,0 TSI ELEGANCE DSG",
        "PASSAT VARIANT",
        "2,0 TSI ELEGANCE",
        "2,0 TSI ELEGANCE WOOD",
        "2,0 TSI ELEGANCE DSG WOOD",
        "2,0 TSI LUXURY T/C",
        "2,0 TSI LUXURY DSG T/C",
        "2,0 TDi ELEGANCE",
        "2,0 TDi ELEGANCE WOOD",
        "2,0 TDi ELEGANCE DSG",
        "2,0 TDi ELEGANCE DSG WOOD",
        "2,0 TDi ADVANCE T/C",
        "2,0 TDi ADVANCE DSG T/C",
        "Otro"
      ],
      "Polo": [
        "1,6 COMFORTLINE",
        "1,6 COMFORTLINE TIPT",
        "1,6 MSI TRENDLINE",
        "1,6 MSI TRENDLINE TIPT",
        "1,6 MSI COMFORTLINE",
        "1,6 MSI COMFORTLINE PLUS TIPT",
        "1,6 MSI HIGHLINE",
        "1,6 MSI HIGHLINE TIPT",
        "1,4 TSI GTS TIPT",
        "1,6 MSI TREND",
        "1,6 MSI",
        "1,6 MSI TIPT",
        "1,6 MSI TRACK",
        "1,6 MSI TRACK PHU",
        "1,6 MSI TRACK 1ST EDITION",
        "1,0 TSI 170 COMFORTLINE 6AT",
        "1,0 TSI 170 HIGHLINE 6AT",
        "1,4 TSI 250 GTS 6AT",
        "SAVEIRO PICK - UP",
        "1,6 5G",
        "1,6 5G PACK",
        "C/EXT. 1,6 5G",
        "C/EXT. 1,6 5G LLANTAS",
        "C/EXT. 1,6 5G PACK + SEG",
        "1,6 A/C PS",
        "1,6 A/C PS SAFETY",
        "C/EXT. 1,6 A/C PS POWER SAFETY PACK",
        "C/EXT. 1,6 A/C PS POWER SAFETY PACK RADIO",
        "C/EXT. 1,6 A/C PS POWER SAFETY HIGH PACK",
        "1,6 GP POWER",
        "1,6 GP PACK HIGH",
        "1,6 SAFETY",
        "C/EXT. 1,6 SAFETY",
        "C/EXT. 1,6 SAFETY HIGH PACK",
        "1,6 GP TREND",
        "C/EXT. 1,6 GP COMF",
        "1,6 GP HIGH",
        "1,6 MSI COMF",
        "1,6 MSI HIGH",
        "1,6 MSI EXTREME",
        "SAVEIRO PICK - UP CROSS",
        "Otro"
      ],
      "Scirocco": [
        "1,4 TSI",
        "1,4 TSI DSG",
        "2,0 TSI",
        "2,0 TSI DSG",
        "2,0 TSI DSG GTS",
        "Otro"
      ],
      "Suran": [
        "1,6 COMFORTLINE",
        "1,6 COMFORTLINE + ABS",
        "1,6 MSI COMFORTLINE",
        "1,6 COMFORTLINE I MOTION",
        "1,6 MSI TRACK",
        "1,6 STYLE",
        "1,6 TRENDLINE",
        "1,6 MSI TRENDLINE",
        "1,6 TRENDLINE I MOTION",
        "1,6 HIGHLINE",
        "1,6 MSI 16V HIGHLINE",
        "1,6 HIGHLINE I MOTION",
        "1,6 MSI 16V HIGHLINE I MOTION",
        "1,6 HIGHLINE CRO",
        "1,6 HIGHLINE CRO I MOTION",
        "1,6 LIMITED EDITION",
        "SURAN CROSS",
        "Otro"
      ],
      "Up!": [
        "1,0 TAKE A/C",
        "1,0 MOVE",
        "1,0 HIGH",
        "1,0 MOVE I MOTION",
        "1,0 HIGH I MOTION",
        "1,0 BLACK",
        "1,0 WHITE",
        "1,0 CROSS",
        "1,0 TSi CROSS",
        "1,0 TSi PEPPER",
        "Otro"
      ],
      "Vento": [
        "2,0 T FSI SPORTLINE",
        "2,0 T FSI SPORTLINE DSG",
        "2,0 T FSI SPORTLINE BIXENON",
        "2,0 T FSI SPORTLINE BIXENON DSG",
        "2,0 ADVANCE",
        "2,0 ADVANCE SUMMER PACKAGE",
        "2,0 TSI GLI APP CONNET",
        "2,0 TSI GLI APP CONNET NAV",
        "2,0 TSI GLI APP CONNET DSG",
        "2,0 TSI GLI APP CONNET DSG NAV",
        "2,0 TSI GLI DSG",
        "2,5 FSI ADVANCE PLUS",
        "2,5 FSI ADVANCE PLUS TIPT",
        "2,5 FSI LUXURY",
        "2,5 FSI LUXURY TIPT",
        "2,0 TDi CONFORT",
        "2,0 TDi ADVANCE",
        "2,0 TDi LUXURY",
        "2,0 TDi LUXURY DSG",
        "2,0 TDi ADVANCE SUMMER PACKPAGE",
        "1,4 150CV COMFORTLINE",
        "1,4 150CV COMFORTLINE DSG",
        "1,4 150CV HIGHLINE",
        "1,4 150CV HIGHLINE DSG",
        "1,4 150CV HIGHLINE DSG LL17",
        "1,4 TSI 150CV COMFORTLINE 6TIPT",
        "1,4 TSI 150CV HIGHLINE 6TIPT",
        "1,4 TSI 150CV 250 AT HIGHLINE",
        "2,0 TSI 230CV 350 GLI DSG",
        "VENTO VARIANT",
        "2,5 COMFORTLINE",
        "2,5 ADVANCE",
        "2,0 TDi CR CONFORTLINE",
        "2,0 TDi CR ADVANCE",
        "Otro"
      ],
      "Virtus": [
        "1,6 MSI TRENDLINE",
        "1,6 MSI TRENDLINE SAFETY PACK",
        "1,6 MSI TRENDLINE TIPT",
        "1,6 MSI COMFORTLINE",
        "1,6 MSI COMFORTLINE SAFETY PACK",
        "1,6 MSI COMFORTLINE TIPT",
        "1,6 MSI HIGHLINE",
        "1,6 MSI HIGHLINE TIPT",
        "1,4 TSI GTS TIPT",
        "1,6 MSI",
        "1,6 MSI TIPT",
        "170 TSI HIGHLINE AT",
        "250 TSI EXCLUSIVE AT",
        "Otro"
      ],
      "Voyage": [
        "1,6 FORMAT",
        "1,6 SERIE",
        "1,6 COMFORTLINE",
        "1,6 COMFORTLINE PLUS",
        "1,6 COMFORTLINE PLUS I MOTION",
        "1,6 COMFORTLINE PLUS ABS FULL",
        "1,6 COMFORTLINE PLUS ABS FULL I MOTION",
        "1,6 HIGHLINE",
        "1,6 HIGHLINE I MOTION",
        "1,6 SERIE GP",
        "1,6 COMFORTLINE GP",
        "1,6 COMFORTLINE GP PLUS",
        "1,6 COMFORTLINE GP PLUS ABS FULL",
        "1,6 COMFORTLINE GP PLUS ABS FULL I MOTION",
        "1,6 HIGHLINE GP",
        "1,6 SERIE GP ABG ABS",
        "1,6 COMFORTLINE GP ABG ABS",
        "1,6 TRENDLINE",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Volvo": {
      "C30": [
        "Otro"
      ],
      "C40": [
        "Otro"
      ],
      "S40": [
        "Otro"
      ],
      "S60": [
        "Otro"
      ],
      "S90": [
        "Otro"
      ],
      "V40": [
        "Otro"
      ],
      "V60": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    }
  },
  "Camionetas / SUV": {
    "Agrale": {
      "Marrua": [
        "2,8 AM 100 4X4",
        "2,8 AM 150 4X4",
        "2,8 AM 200 4X4",
        "3,8 EUROVI AM 250 S/CAJA 4X4",
        "3,8 EUROVI AM 250 C/CAJA 4X4",
        "3,8 EUROVI AM 250 C/CAJA AT 4X4",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Audi": {
      "Q2": [
        "Otro"
      ],
      "Q3": [
        "Otro"
      ],
      "Q5": [
        "Otro"
      ],
      "Q7": [
        "Otro"
      ],
      "Q8": [
        "Otro"
      ],
      "RS Q3": [
        "2,5 TFSI QUATTRO SPORTBACK",
        "Otro"
      ],
      "RS Q8": [
        "4,0 TFSI QUATTRO 8TIPT 600CV",
        "4,0 TFSI QUATTRO 8TIPT 640CV",
        "S",
        "2,0 3 TFSI QUATTRO",
        "2,0 3 TFSI QUATTRO S-TRONIC",
        "2,0 3 TFSI QUATTRO SPORTBACK",
        "2,0 3 TFSI QUATTRO SPORTBACK S-TRONIC",
        "2,0 3 TFSI S-TRONIC QUATTRO",
        "SPORTBACK 2,0 3 TFSI S-TRONIC QUATTRO",
        "3,0 TFSI 4 QUATTRO",
        "3,0 TFSI 4 QUATTRO S-TRONIC",
        "3,0 TFSI 4 QUATTRO S-TRONIC 354CV",
        "3,0 TFSI 5 QUATTRO TRIP",
        "SPORTBACK 3,0 TFSI 5 QUATTRO TRIP",
        "4,2 FSI 5 V8 QUATTRO",
        "4,2 FSI 5 V8 QUATTRO TIPT",
        "4,0 V8 TFSI 6 S-TRONIC QUATTRO",
        "4,0 TFSI 7 S-TRONIC QUATTRO SPORTBACK",
        "Otro"
      ],
      "SQ5": [
        "Otro"
      ],
      "e-tron": [
        "55 QUATTRO",
        "55 QUATTRO SPORTBACK",
        "Q 2",
        "1,4 TFSI SERIE S-TRONIC",
        "1,4 TFSI SPORT S-TRONIC",
        "1,4 TFSI OFFROAD STYLE S-TRONIC",
        "1,0 TFSI SPORT 30 116CV",
        "1,4 TFSI SPORT S-TRONIC 35 150CV",
        "2,0 TFSI QUATTRO S-TRONIC 40 190CV",
        "Q 3",
        "1,4 TFSI 150CV",
        "1,4 TFSI 150CV S-TRONIC",
        "1,4 TFSI 150CV SPORT",
        "1,4 TFSI 150CV SPORT S-TRONIC",
        "1,4 TFSI 35 150CV",
        "1,4 TFSI SPORTBACK 35 150CV",
        "1,4 TFSI 150CV S-TRONIC ADVANCE",
        "1,4 TFSI 150CV S-TRONIC ADVANCE SPORTBACK",
        "1,4 TFSI 150CV S-TRONIC ADVANCE PLUS",
        "1,4 TFSI 150CV S-TRONIC ADVANCE SPORTBACK PLUS",
        "2,0 TFSI QUATTRO 170CV",
        "2,0 TFSI QUATTRO 170CV S-TRONIC",
        "2,0 TFSI QUATTRO 211CV S-TRONIC",
        "2,0 TFSI QUATTRO 220CV S-TRONIC",
        "2,0 TFSI QUATTRO 220CV S-TRONIC S LINE",
        "2,0 TFSI QUATTRO 40 ADVANCED",
        "2,0 TFSI SPORTBACK QUATTRO 40 S-LINE",
        "2,0 TDi QUATTRO 177CV S-TRONIC",
        "Q 5",
        "2,0 TFSI QUATTRO 180CV",
        "2,0 TFSI QUATTRO 225CV",
        "2,0 TFSI QUATTRO 180CV S-TRONIC",
        "2,0 TFSI QUATTRO 225CV S-TRONIC",
        "2,0 TFSI QUATTRO 252CV S-TRONIC",
        "2,0 TFSI QUATTRO 252CV S-TRONIC SECURITY",
        "2,0 TFSI QUATTRO LUXURY",
        "2,0 TFSI QUATTRO LUXURY S-TRONIC",
        "2,0 TFSI 252CV 45 OFFROAD",
        "2,0 TFSI 252CV 45 SPORT",
        "2,0 TFSI 200CV QUATTRO S-TRONIC ADVANCED MILD-HY BRID",
        "2,0 TFSI 200CV QUATTRO S-TRONIC ADVANCED SPORTBA CK ILD-HYBRID",
        "2,0 TFSI 272CV QUATTRO S-TRONIC ADVANCED PLUS MI LD-HYBRID",
        "2,0 TFSI 272CV QUATTRO S-TRONIC S-LINE MILD-HYBR ID",
        "3,2 FSI V6 QUATTRO S-TRONIC",
        "2,0 TDi QUATTRO",
        "2,0 TDi QUATTRO S-TRONIC",
        "2,0 TDi QUATTRO LUXURY",
        "2,0 TDi QUATTRO LUXURY S-TRONIC",
        "3,0 TDi V6 QUATTRO S-TRONIC",
        "3,0 TFSI 272CV QUATTRO TIPT",
        "3,0 TFSI 354CV QUATTRO TIPT S",
        "3,0 TFSI 367CV QUATTO S-TRONIC SQ5 MILD-HYBIRD",
        "Q 5 SPORTBACK",
        "2,0 TFSI 245CV QUATTRO OFFROAD MH 45",
        "2,0 TFSI 245CV QUATTRO S-TRONIC HYBRID ADVANCE 4 5",
        "2,0 TFSI 245CV QUATTRO S-TRONIC HYBRID S-LINE 45",
        "2,0 TFSI 245CV QUATTRO PREMIUM BLACK",
        "Q 6",
        "50 E-TRON PERFORMANCE",
        "Q 7",
        "3,0 TFSI QUATTRO TIPT 272CV",
        "3,0 TFSI QUATTRO TIPT 333CV",
        "3,0 TDi QUATTRO TIPT",
        "4,2 TDi QUATTRO TIPT (LN)",
        "3,0 TFSI QUATTRO 333CV 8TIPT",
        "3,0 TDi QUATTRO 249CV 8TIPT",
        "55 TFSI QUATTRO 8TIPT OFFROAD",
        "55 TFSI QUATTRO 8TIPT S LINE",
        "45 TDi QUATTRO 8TIPT S LINE",
        "Q 8",
        "3,0 TFSI QUATTRO 340CV 55",
        "3,0 TDi QUATTRO 249CV 45",
        "55 E-TRON",
        "55 E-TRON SPORTBACK",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Baic": {
      "BJ30": [
        "1,5 AT HYBRID 4X2",
        "1,5 AT HYBRID 4X4",
        "Otro"
      ],
      "BJ40": [
        "2,0 T 8AT 4X4",
        "2,0 T 8AT 4X4 PLUS",
        "2,0 T 8AT 4X4 PRO",
        "Otro"
      ],
      "BJ60": [
        "2,0 4WD HYBRID",
        "Otro"
      ],
      "D20": [
        "1,3 MT",
        "EX 260 CROSSOVER ELECTRIC",
        "AT",
        "Otro"
      ],
      "EX 260": [
        "Otro"
      ],
      "EU5": [
        "1,5 CVT",
        "100% ELECTRICO",
        "100% ELECTRICO PLUS",
        "SENOVA ELITE",
        "1,5 MT",
        "1,5 AT",
        "X25 CROSSOVER",
        "X35 CROSSOVER",
        "1,5 T CVT FASHION",
        "1,5 T CVT FASHION PLUS",
        "1,5 T CVT LUXURY",
        "X55 CROSSOVER",
        "1,5 T AT",
        "1,5 T AT II",
        "1,5 T II LUXURY",
        "1,5 T II PLUS",
        "X65 CROSSOVER",
        "2,0 T AT",
        "Otro"
      ],
      "X25": [
        "Otro"
      ],
      "X35": [
        "Otro"
      ],
      "X55": [
        "Otro"
      ],
      "X65": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "BMW": {
      "X1": [
        "1,8 i SDRIVE ACTIVE 4X2",
        "2,0 i SDRIVE ACTIVE 4X2",
        "2,0 d SDRIVE ACTIVE 4X2",
        "2,0 d XDRIVE ACTIVE 4X4",
        "2,0 d XDRIVE ACTIVE 4X4 AT",
        "2,0 i XDRIVE EXECUTIVE 4X4",
        "2,0 i SDRIVE SPORT LINE",
        "2,5 i XDRIVE XLINE",
        "2,8 i XDRIVE EXECUTIVE 4X4",
        "1,8 i 1,5 T 7AT SDRIVE ADVANTAGE LCI",
        "2,0 i 2,0 T 7AT SDRIVE SPORTLINE LCI",
        "1,8 i SDRIVE XLINE BLACK EDITION",
        "1,8 i SDRIVE XLINE",
        "2,0 i SDRIVE XLINE",
        "2,0 i SDRIVE BLACK EDITION",
        "2,0 D SDRIVE",
        "2,5e i SDRIVE XLINE",
        "Otro"
      ],
      "X2": [
        "2,0 i T SDRIVE MSPORTX 4X4",
        "2,0 i T SDRIVE MSPORTX 4X4 II",
        "2,0 T M35I MPA 4X4",
        "2,0 i XDRIVE M SPORT",
        "3,0 i XDRIVE M SPORT",
        "Otro"
      ],
      "X3": [
        "2,0 d XDRIVE ACTIVE",
        "2,0 d XDRIVE EXECUTIVE",
        "2,0 i XDRIVE EXECUTIVE",
        "2,0 i XDRIVE ACTIVE",
        "2,5i XDRIVE LIMITED EDITION",
        "2,8 i XDRIVE EXECUTIVE",
        "2,8 i XDRIVE XLINE",
        "3,0i XDRIVE XLINE",
        "3,5 i XDRIVE EXECUTIVE",
        "3,5 i XDRIVE M PACKAGE",
        "4,0i M XDRIVE",
        "M 480CV",
        "2,0 i XDRIVE LCI XLINE",
        "3,0 i XDRIVE LCI XLINE 252CV",
        "3,0 i XDRIVE LCI XLINE 292CV",
        "2,0 T XDRIVE 8AT MILDHYBRID",
        "3,0 T XDRIVE 8AT MILDHYBRID M50",
        "Otro"
      ],
      "X4": [
        "2,8i XDRIVE XLINE",
        "3,5i XDRIVE M PACKAGE",
        "2,0 T XLINE 3,0i 8AT XDRIVE",
        "3,0 M40i 8AT XDRIVE",
        "3,0 XDRIVE MSPORT",
        "Otro"
      ],
      "X5": [
        "3,0d XDRIVE EXECUTIVE",
        "3,5 i XDRIVE EXECUTIVE",
        "5,0 i XDRIVE PREMIUM",
        "M 555CV AT",
        "3,5 i XDRIVE PURE EXCELLENCE",
        "5,0 i XDRIVE M PACKAGE",
        "4,0 D XDRIVE PURE EXCELLENCE",
        "4,0 D XDRIVE M PAKCAGE",
        "3,0 T 35i XDRIVE EXCELLENCE 8AT",
        "3,0 BT 40d XDRIVE M SPORT 8AT",
        "4,4 BT 50i XDRIVE M SPORT 8AT",
        "4,4 BT XDRIVE M 8ATM",
        "4,4 BT XDRIVE SECURITY 8ATM",
        "3,0 T XDRIVE XLINE 8AT",
        "4,0 i XDRIVE M SPORT PRO",
        "Otro"
      ],
      "X6": [
        "3,0 D XDRIVE SPORTIVE",
        "3,5 i XDRIVE",
        "3,5 i XDRIVE PURE EXTRAVAGANCE",
        "5,0 i XDRIVE PREMIUM",
        "5,0 i XDRIVE M PACKAGE",
        "M 555CV AT",
        "3,0 T 35i XDRIVE EXTRAVAGANCE 8AT",
        "4,4 BT 50i XDRIVE M SPORT 8AT",
        "4,4 BT 50i M PACKAGE 8AT",
        "4,4 BT XDRIVE M 8ATM",
        "4,0 i XDRIVE MSPORT",
        "M 600CV",
        "4,0 i XDRIVE LCI MSPORT PRO MILD HYBRID",
        "M COMPETITION 626CV",
        "M50I M PERFORMANCE",
        "M60I XDRIVE MILD HYBRID",
        "Otro"
      ],
      "X7": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "BYD": {
      "Atto 2": [
        "1,5 GS DM-I HIBRIDO",
        "Otro"
      ],
      "Song Pro DMI": [
        "1,5 GL HIBRIDO AT",
        "1,5 GS HIBRIDO AT",
        "Otro"
      ],
      "Yuan Pro": [
        "GL ELECTRICO AT",
        "GS ELECTRICO AT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Changan": {
      "CS15": [
        "1,5 COMFORT MT",
        "1,5 COMFORT AT",
        "1,5 LUXURY AT",
        "Otro"
      ],
      "CS55": [
        "1,5 PLUS PHEV HIBRIDO",
        "Otro"
      ],
      "CS75": [
        "1,8 T ELITE 6AT",
        "1,8 T LUXURY 6AT 4WD",
        "M",
        "201 1,3 CARGO VAN",
        "MD",
        "201 1,3 CARGO BOX",
        "201 1,3 CARGO REFRIGERADO",
        "201 1,3 PICK UP",
        "Otro"
      ],
      "M201": [
        "Otro"
      ],
      "MD201": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Chery": {
      "Tiggo": [
        "2,0 4X2 COMFORT",
        "2,0 4X4 LUXURY",
        "2,0 4X2 COMFORT MT",
        "2,0 4X2 LUXURY AT",
        "2,0 4X4 LUXURY MT",
        "1,6 4X2 COMFORT",
        "Otro"
      ],
      "Tiggo 2": [
        "1,5 4X2 COMFORT MT",
        "1,5 4X2 COMFORT AT",
        "1,5 4X2 LUXURY MT",
        "1,5 4X2 COMFORT MT PRO",
        "1,5 4X2 COMFORT CVT PRO",
        "1,5 4X2 LUXURY MT PRO",
        "1,5 4X2 STD PRO",
        "1,5 4X2 CONFORT PRO MAX",
        "1,5 4X2 CONFORT PRO MAX CVT9",
        "Otro"
      ],
      "Tiggo 3": [
        "1,6 4X2 COMFORT FL",
        "1,6 4X2 COMFORT",
        "1,6 4X2 LUXURY",
        "1,6 4X2 LUXURY CVT",
        "Otro"
      ],
      "Tiggo 4": [
        "2,0 4X2 COMFORT MT",
        "2,0 4X2 COMFORT CVT",
        "1,5 4X2 COMFORT MT PRO",
        "1,5 4X2 COMFORT CVT PRO",
        "1,5 T 4X2 LUXURY CVT PRO",
        "1,5 4X2 HEV PREMIUM HYBRID",
        "Otro"
      ],
      "Tiggo 5": [
        "2,0 4X2 COMFORT MT",
        "2,0 4X2 COMFORT CVT",
        "2,0 4X2 LUXURY CVT",
        "2,0 4X2 LUXURY",
        "Otro"
      ],
      "Tiggo 7": [
        "1,5 T 4X2 PREMIUM CVT PRO HYBRID",
        "Otro"
      ],
      "Tiggo 8": [
        "1,6 T 4X2 LUXURY CVT PRO ADAS",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Chevrolet": {
      "Captiva": [
        "2,4 LS FWD 4X2",
        "2,4 LT AWD",
        "2,2 DSL LT AWD",
        "2,2 DSL LTZ AWD AT",
        "1,5 T PHEV PREMIER",
        "Otro"
      ],
      "Equinox": [
        "1,5 T 6AT LT 2WD",
        "1,5 T 6AT PREMIER AWD",
        "1,5 T 6AT RS 2WD",
        "Otro"
      ],
      "Montana": [
        "Otro"
      ],
      "S10": [
        "Otro"
      ],
      "Silverado": [
        "V8 AT 4X4 Z71 TRAIL BOSS",
        "V8 AT 4X4 HIGH COUNTRY",
        "Otro"
      ],
      "Tracker": [
        "1,8 LTZ 4X2 FWD",
        "1,8 LTZ AT 4X4 AWD",
        "1,8 LTZ + AT 4X4 AWD",
        "1,8 LTZ 4X2 FWD MIDNIGHT",
        "1,2 T MT",
        "1,2 T 6AT",
        "1,2 T 6AT LTZ",
        "1,2 T 6AT PREMIER",
        "1,2 T 6AT PREMIER 170",
        "1,2 T 6AT RS",
        "Otro"
      ],
      "Trailblazer": [
        "2,8 CTDi 4X4 LT AT",
        "2,8 CTDi 4X4 LTZ AT",
        "2,8 CTDi 4X4 LTZ 7A 6AT",
        "2,8 TD 4X4 PREMIER 7A 6AT",
        "2,8 CTDI 4X4 HIGH COUNTRY 7A 8AT",
        "VECTRA",
        "2,0 GT GLS",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Citroen": {
      "Basalt": [
        "VTi LIVE PK",
        "VTi FEEL",
        "T200 CVT SHINE",
        "T200 CVT SHINE BITONO",
        "T200 CVT DARK EDITION",
        "T200 CVT DARK EDITION BITONO",
        "Otro"
      ],
      "Berlingo": [
        "1,4 i",
        "1,4 i FULL",
        "1,4 i FULL SEG",
        "1,4 i CLUB",
        "1,4 i BUSINESS",
        "1,4 i BUSINESS MIXTO",
        "1,6 VTi 115 BUSINESS",
        "1,6 VTi 115 BUSINESS MIXTO",
        "1,6 HDi",
        "1,6 HDi PLC",
        "1,6 HDi PLC FULL",
        "1,6 HDi PLC FULL SEG",
        "1,6 HDi BUSINESS",
        "1,6 HDi BUSINESS MIXTO",
        "1,6 HDi 92 BUSINESS",
        "1,6 HDi 92 BUSINESS MIXTO",
        "MULTISPACE 1,4 i X",
        "MULTISPACE 1,6 SX",
        "MULTISPACE 1,6 SX PACK",
        "MULTISPACE 1,6 110 XTR",
        "MULTISPACE 1,6 VTi 115 XTR",
        "MULTISPACE 1,6 HDi SX",
        "MULTISPACE 1,6 HDi SX PACK",
        "MULTISPACE 1,6 HDi 92 XTR",
        "C 3",
        "1,4 i SX",
        "1,4 i SX PACK SEG",
        "1,4 i SX PACK PREMIUM",
        "1,4 i XTR",
        "1,6 i SX",
        "1,6 i EXCLUSIVE",
        "1,5 i 90 ORIGINE",
        "1,5 i 90 ORIGINE PACK ZENITH",
        "1,5 i 90 TENDANCE",
        "1,5 i 90 TENDANCE PACK SECURE",
        "1,5 i 90 SOUNDTRACK",
        "1,6 VTi 115 EXCLUSIVE",
        "1,6 VTi 115 EXCLUSIVE PACK MY WAY",
        "1,5 90 START",
        "1,5 90 LIVE",
        "1,5 90 FEEL",
        "1,6 VTi 115 INFINIT AT",
        "1,6 VTi 115 LIVE",
        "1,6 VTi 115 FEEL",
        "1,6 VTi 115 FEEL 6AT",
        "1,6 VTi 115 FEEL BITONO",
        "1,6 VTi 115 FEEL BITONO 6AT",
        "1,6 VTi 115 ORIGINS",
        "1,6 VTi 115 SHINE",
        "1,6 VTi 115 SHINE 6AT",
        "1,6 VTi 115 TECHNO",
        "1,6 VTi 115 URBAN TRAIL",
        "1,6 VTi 115 URBAN TRAIL 6AT",
        "1,2 82 PURE TECH LIVE M22",
        "1,2 82 PURE TECH LIVE PACK M22",
        "1,2 82 PURE TECH FEEL M22",
        "1,2 82 PURE TECH FEEL CONFORT M22",
        "1,2 82 PURE TECH FIRST EDITION",
        "1,2 82 PURE TECH FEEL LOOK",
        "1,2 FEEL DESIGN",
        "1,6 VTi 115 FELL M22",
        "1,6 VTi 115 FELL CONFORT M22",
        "1,6 VTi 115 FELL 6AT PACK M22",
        "1,6 VTi 115 FELL 6AT PACK BITONO M22",
        "1,6 VTi 115 FIRST EDITION 6AT",
        "1,6 VTi FELL AT PK DESING",
        "1,6 VTi FELL AT PK DESING BITONO",
        "1,6 VTi 115 FELL M26",
        "1,6 VTi 115 FELL PK M26",
        "1,6 VTi 115 FELL PK BITONO M26",
        "1,6 VTi 115 XTR AT M26",
        "1,6 VTi 115 XTR AT M26 BITONO",
        "T200 YOU! CVT",
        "T200 YOU! CVT BITONO",
        "C 3 AIRCROSS",
        "1,6 16V SX",
        "1,6 16V SX HIGH TECH",
        "1,6 16V EXCLUSIVE",
        "1,6 16V EXCLUSIVE PACK MY WAY",
        "1,6 VTi 115 TENDANCE",
        "1,6 115 FEEL",
        "1,6 115 FEEL AT",
        "1,6 115 SHINE",
        "1,6 115 SHINE AT",
        "1,6 115 SHINE W",
        "1,6 VTi 115 URBAN EDITION",
        "1,6 115 LIVE",
        "1,6 115 FEEL 6AT",
        "1,6 115 SHINE 6AT",
        "1,6 VTI LIVE",
        "1,6 VTI FEEL PK",
        "T200 FEEL PK",
        "T200 FEEL 7P",
        "T200 SHINE CVT",
        "T200 SHINE CVT BITONO",
        "T200 SHINE CVT XTR",
        "T200 SHINE CVT 7P",
        "T200 SHINE CVT 7P BITONO",
        "C 3 PICASSO",
        "C 4",
        "2,0 i 16V X AM73",
        "2,0 i 16V X PACK LOOK",
        "2,0 i 16V SX AM73",
        "2,0 i 16V EXCLUSIVE BVA AT",
        "1,6 HDi SX",
        "1,6 i 16V X",
        "1,6 i 16V X PACK LOOK",
        "1,6 i 16V X PACK LOOK CONNET",
        "1,6 i 16V X PACK PLUS",
        "2,0 i 16V SX",
        "2,0 i 16V EXCLUSIVE",
        "1,6 HDi SX AM73",
        "2,0 HDi SX",
        "C 4 AIRCROSS",
        "2,0 i TENDANCE 150 2WD",
        "2,0 i TENDANCE 150 2WD CVT",
        "2,0 i TENDANCE 150 4WD CVT",
        "C 4 CACTUS",
        "1,2 T 6AT",
        "1,2 T 6AT RIP CURL",
        "1,6 VTi 115 FEEL PACK",
        "1,6 VTi 115 FEEL PACK E6AT",
        "1,6 THP 165 SHINE E6AT",
        "1,6 THP 165 SHINE E6AT BITONO",
        "1,6 VTi 115 C-SERIES",
        "1,6 VTi 115 C-SERIES E6AT",
        "1,6 VTi 115 RIP CURL",
        "1,6 VTi 115 RIP CURL E6AT",
        "1,6 VTi 115 FEEL PACK PLUS",
        "1,6 VTi 115 FEEL PACK PLUS BITONO",
        "1,6 VTi 115 FEEL PACK E6AT PLUS",
        "1,6 VTi 115 FEEL PACK E6AT PLUS BITONO",
        "1,6 VTi 115 FEEL PACK E6AT LOOK",
        "1,6 VTi 115 X-SERIES",
        "1,6 VTi 115 X-SERIES E6AT",
        "1,6 VTi 115 FEEL AT",
        "1,6 VTi 115 FEEL + AT",
        "1,6 VTi 115 FEEL + AT BITONO",
        "1,6 THP 165 NOIR E6AT",
        "C 4 HYBRID",
        "PLUS",
        "MAX",
        "C 4 LOUNGE",
        "2,0 i 16V ORIGINE",
        "2,0 i 16V TENDANCE S/NAV",
        "2,0 i 16V TENDANCE",
        "2,0 i 16V TENDANCE PACK",
        "1,6 i THP 6MT S",
        "1,6 i THP TENDANCE 6AT S/NAV",
        "1,6 i THP TENDANCE 6AT",
        "1,6 i THP EXCLUSIVE 6AT",
        "1,6 i THP EXCLUSIVE 6AT PACK SELECT",
        "1,6 HDi TENDANCE",
        "1,6 HDi TENDANCE PACK",
        "1,6 HDi EXCLUSIVE",
        "1,6 HDi EXCLUSIVE PACK SELECT",
        "143 LIVE",
        "143 FEEL PACK",
        "1,6 THP 165 6AT FEEL",
        "1,6 THP 165 6MT FEEL",
        "1,6 THP 165 6MT FEEL PACK",
        "1,6 THP 165 6MT FEEL PACK S EDITION",
        "1,6 THP 165 6MT FEEL PACK 10 AÑOS",
        "1,6 THP 165 6AT SHINE",
        "1,6 HDi 115 6MT FEEL PACK",
        "1,6 HDi 115 6MT FEEL PACK 10 AÑOS",
        "1,6 VTi 115 LIVE AM19",
        "1,6 THP 165 6MT FEEL AM19",
        "1,6 THP 165 6AT FEEL AM19",
        "1,6 THP 165 6MT FEEL PACK AM19",
        "1,6 THP 165 6AT SHINE AM19",
        "1,6 HDi 115 6MT FEEL PACK AM19",
        "1,6 HDi 115 6MT ORIGINS",
        "C 4 PICASSO",
        "1,6 HDi ORIGINE",
        "2,0 i BVA AT TENDANCE",
        "1,6 THP 6AT FEEL",
        "1,6 THP 6AT FEEL PACK",
        "VAV 1,6 HDi 6MT FEEL",
        "VAV 1,6 HDi 6MT FEEL PACK",
        "C 4 GRAND PICASSO",
        "2,0 i BVA AT",
        "1,6 THP 6AT SHINE",
        "1,6 HDi 6MT SHINE",
        "C 4 SPACETOURER",
        "1,6 THP E6AT FEEL",
        "1,6 THP E6AT FEEL PACK",
        "1,6 THP E6AT RIP CURL",
        "1,6 HDi 6MT FEEL",
        "1,6 HDi 6MT FEEL PACK",
        "1,6 HDi 6MT RIP CURL",
        "C 4 GRAND SPACETOURER",
        "1,6 THP E6AT SHINE",
        "C 5",
        "2,0 HDi CONFORT",
        "1,6 i TURBO EXCLUSIVE",
        "C 5 AIRCROSS",
        "1,6 THP 165CV E6AT FELL PACK",
        "C-ELYSÉE",
        "1,6 VTi 115 FELL",
        "1,6 VTi 115 FELL AM18",
        "1,6 VTi 115 6AT SHINE",
        "1,6 HDi 92 FEEL",
        "Otro"
      ],
      "C3 Aircross": [
        "Otro"
      ],
      "C4 Aircross": [
        "Otro"
      ],
      "C4 Cactus": [
        "Otro"
      ],
      "C4 Picasso": [
        "Otro"
      ],
      "C4 SpaceTourer": [
        "Otro"
      ],
      "C5 Aircross": [
        "Otro"
      ],
      "Jumper": [
        "2,3 HDi PACK 2",
        "2,3 HDi ALTO 2",
        "2,3 HDi 33M",
        "2,3 HDi 35MH",
        "2,3 HDi 35LH",
        "33M HDi 127",
        "35MH HDi 127",
        "35LH HDi 127",
        "CHASIS 435 CH L3 HDi 130 6MT",
        "CHASIS 440 CH L3 HDi 130 6MT",
        "435 L2H1 HDi 130 6MT",
        "435 L2H2 HDi 130 6MT",
        "435 L3H2 HDi 130 6MT",
        "CHASIS 440 L3 HDi 130 6MT",
        "440 L4H2 HDI 130 6MT 17+1",
        "2,2 HDI L2H2 140 6MT",
        "2,2 HDI L3H2 140 6MT",
        "Otro"
      ],
      "Jumpy": [
        "1,6 HDi 115 6MT BUSINESS",
        "1,6 HDi 115 6MT BUSINESS MIXTO",
        "1,6 HDi 115 6MT",
        "HDi 150 L3",
        "HDi 150 L3 6P",
        "Otro"
      ],
      "SpaceTourer": [
        "2,0 HDi L2 6AT 7A FEEL",
        "2,0 HDi L2 6AT 7A FEEL PACK",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "DFSK": {
      "E5": [
        "1,5 eCVT PLUG-IN HYBRID",
        "Otro"
      ],
      "Glory 500": [
        "1,5 T CVT",
        "Otro"
      ],
      "Glory 580": [
        "1,8 CVT 7A",
        "Otro"
      ],
      "Serie C": [
        "C31 1,5 TRUCK C/S",
        "C31 1,5 TRUCK C/S ESP",
        "C32 1,5 TRUCK D/C",
        "C32 1,5 TRUCK D/C ESP",
        "C35 1,5 FURGON CARGO VAN",
        "C35 1,5 FURGON CARGO VAN ESP",
        "Otro"
      ],
      "Serie K": [
        "PICK UP 1,3 K01H C/EXT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Dongfeng": {
      "Van 312": [
        "1,6 312 CARGO",
        "1,6 312 L CARGO",
        "1,6 312 L BUS CARGO 10+1 A",
        "Otro"
      ],
      "U-Van 414": [
        "U-VAN 2,3 D 414 CARGO",
        "U-VAN 2,3 D 414 BUS 15+1 A",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "DS Automobiles": {
      "DS 3 Crossback": [
        "1,2 T 8AT PURETECH BE CHIC",
        "1,2 T 8AT PURETECH SO CHIC",
        "1,2 T 8AT PURETECH GRAND CHIC",
        "1,2 T 8AT PURETECH RIVOLI",
        "Otro"
      ],
      "DS 7": [
        "1,6 T 215 8AT BASTILLE",
        "1,6 T 215 8AT RIVOLI",
        "1,6 THP E-TENSE 4X4 8AT PALLAS HIBRIDO",
        "PALLAS",
        "PLUG-IN HYBRID AWD",
        "Otro"
      ],
      "DS 7 Crossback": [
        "165 PURE TECH AT PERFORMANCE LINE",
        "2,0 HDi 180 AT SO CHIC",
        "2,0 HDi 180 AT GRAND CHIC",
        "2,0 HDi 180 AT GRAND CHIC OPERA",
        "2,0 HDi 180 AT BASTILLE +",
        "2,0 HDi 180 AT RIVOLI",
        "E-TENSE 4X4 300 BASTILLE +",
        "E-TENSE 4X4 300 BASTILLE + OPREA",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "FAW": {
      "Actis": [
        "1,5 TRUCK",
        "1,5 BOX",
        "Otro"
      ],
      "T33 Bestune": [
        "1,2 T DCT7",
        "X 40",
        "1,6 6AT",
        "Otro"
      ],
      "X40": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Fiat": {
      "Doblo": [
        "Otro"
      ],
      "Ducato": [
        "COMBINATO 2,3 MULTIJET",
        "COMBINATO 2,3 MULTIJET 2A/C",
        "2,3 MULTIJET 15 TN CORTO",
        "2,3 MULTIJET 15 TN CORTO A/C",
        "2,3 MULTIJET 15 TN",
        "2,3 MULTIJET 15 TN A/C",
        "2,3 MULTIJET 15 TE",
        "2,3 MULTIJET 15 TE A/C",
        "2,3 MULTIJET MAXICARGO TE",
        "2,3 MULTIJET MAXICARGO TE A/C",
        "CHASIS 2,3 TD 6MT",
        "2,3 TD CORTO L1H1 6MT",
        "2,3 TD MEDIO L2H1 6MT",
        "2,3 TD MAXICARGO L4H2 6MT",
        "2,3 TD MAXICARGO L4H2 VIDRIADA 6MT",
        "Otro"
      ],
      "Fastback": [
        "1,3 TURBO 270 AT6",
        "1,3 TURBO 270 AT6 ABARTH",
        "Otro"
      ],
      "Fiorino": [
        "1,3 FIRE DH",
        "1,3 FIRE DH CONFORT",
        "1,4 8V",
        "1,4 8V CONFORT",
        "1,4 8V TOP",
        "1,4 8V ENDURANCE",
        "1,3 8V ENDURANCE FIREFLY",
        "FIORINO QUBO",
        "1,4 ACTIVE",
        "1,4 ACTIVE CONFORT",
        "1,4 DYNAMIC",
        "1,4 ACTIVE PLC",
        "1,4 ACTIVE PLC CONFORT",
        "Otro"
      ],
      "Pulse": [
        "1,3 DRIVE GSE MT",
        "1,3 DRIVE GSE CVT",
        "1,0 T AUDACE CVT",
        "1,0 T IMPETUS CVT",
        "270 TURBO ABARTH 6AT",
        "270 TURBO ABARTH STRANGER THINGS 6AT",
        "Otro"
      ],
      "Qubo": [
        "1,4 ACTIVE",
        "1,4 ACTIVE CONFORT",
        "1,4 DYNAMIC",
        "1,4 TREKKING",
        "Otro"
      ],
      "Strada": [
        "Otro"
      ],
      "Titano": [
        "Otro"
      ],
      "Toro": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Ford": {
      "Bronco": [
        "Otro"
      ],
      "EcoSport": [
        "1,6 XL PLUS",
        "1,6 XLS",
        "2,0 XLS",
        "2,0 XLT PLUS CRO",
        "2,0 XLT PLUS CRO AT",
        "1,4 TDCI XL PLUS",
        "1,4 TDCI XLS",
        "2,0 XLT 4X4 PLUS CRO",
        "ECOSPORT KINETIC DESIGN ATTRACTION",
        "1,6 S",
        "1,6 SE",
        "1,6 FREESTYLE",
        "1,6 TITANIUM",
        "2,0 SE",
        "2,0 TITANIUM",
        "2,0 TITANIUM AT",
        "2,0 FREESTYLE 4WD",
        "1,5 TDCI S",
        "1,5 TDCI SE",
        "1,5 S",
        "1,5 SE",
        "1,5 SE AT",
        "1,5 FREESTYLE",
        "1,5 TITANIUM",
        "1,5 TITANIUM AT",
        "2,0 SE AT",
        "2,0 FREESTYLE AT 4WD",
        "2,0 STORM 6AT AWD",
        "Otro"
      ],
      "Everest": [
        "2,3 T 10AT 4X4 TITANIUM",
        "F-100 PICK - UP",
        "3,9 TDi CUMMINS 203CV XL PLUS",
        "3,9 TDi CUMMINS 203CV XL PLUS 4X4",
        "3,9 TDi CUMMINS 203CV XLT",
        "3,9 TDi CUMMINS 203CV XLT 4X4",
        "F-150 PICK - UP",
        "5,0 V8 10AT 4X4 LARIAT LUXURY",
        "3,5 T V6 10AT 4X4 RAPTOR",
        "3,5 T V6 10AT 4X4 LARAIT LUXURY HIBRIDA",
        "5,0 V8 AT 4X4 LARAIT LUXURY",
        "3,5 T V6 10AT 4X4 LARAIT POWERBOOST HIBRIDA",
        "5,0 V8 10AT 4X4 TREMOR",
        "Otro"
      ],
      "F-100": [
        "Otro"
      ],
      "F-150": [
        "Otro"
      ],
      "Kuga": [
        "2,5 4X4 TREND",
        "2,5 4X4 TITANIUM L AT FULL",
        "1,6 4X2 SEL",
        "1,6 4X4 SEL AT",
        "1,6 4X4 TITANIUM AT",
        "2,0 T 4X2 SEL 6AT",
        "2,0 T 4X4 SEL 6AT",
        "2,0 T 4X4 TITANIUM 6AT",
        "2,5 HIBRIDO SE CVT",
        "2,5 HIBRIDO TITANIUM CVT",
        "2,5 HIBRIDO PLATINUM CVT",
        "MAVERICK PICK - UP",
        "2,0 T XLT AWD 8AT",
        "2,0 T LARIAT FX4 8AT",
        "2,5 HIBRIDA LARIAT AWD ECVT",
        "2,0 T TREMOR 4WD 8AT",
        "Otro"
      ],
      "Maverick": [
        "Otro"
      ],
      "Ranger": [
        "Otro"
      ],
      "S-Max": [
        "1,8 TDCi TREND",
        "2,0 TREND",
        "2,3 TITANIUM AT",
        "2,0 T TREND 6AT",
        "2,0 T TITANIUM 6AT",
        "Otro"
      ],
      "Territory": [
        "1,5 T CVT SEL",
        "1,5 T CVT TITANIUM",
        "1,8 T AT7 SEL",
        "1,8 T AT7 TITANIUM",
        "1,5 GTDI HIBRIDA TREND",
        "Otro"
      ],
      "Transit": [
        "CHASIS 2,2 TDCi",
        "CHASIS 2,2 TDCi A/C",
        "2,4 TDCi 16V T/A CORTO",
        "2,4 TDCi 16V T/A CORTO A/C",
        "2,4 TDCi 16V T/A LARGO",
        "2,4 TDCi 16V T/A LARGO A/C",
        "2,2 TDCi CORTO",
        "2,2 TDCi CORTO A/C",
        "2,2 TDCi LARGO",
        "2,2 TDCi LARGO A/C",
        "2,2 TDCi MEDIANO",
        "2,2 TDCi MEDIANO TE",
        "2,2 TDCi LARGO TE",
        "2,4 TDCi 16V",
        "2,2 TDCi A/C",
        "2,2 TDCi",
        "CHASIS 2,2 TD",
        "2,2 TD MEDIANA",
        "2,2 TD MEDIANA TE",
        "2,2 TD LARGA TE",
        "2,2 TD LARGA TE 10AT L3H3",
        "2,2 TD 6MT 17+1",
        "2,2 TD 10AT 17+1",
        "CHASIS 2,0 TD",
        "2,0 TD L2H2 6MT",
        "2,0 TD L2H3 6MT",
        "2,0 TD L3H3 6MT",
        "2,0 TD L3H3 10AT",
        "2,0 TD 6MT",
        "2,0 TD 10AT",
        "E-TRANSIT",
        "CHASIS CABINA",
        "MEDIANA",
        "MEDIANA TE",
        "LARGA TE",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Forthing": {
      "Friday": [
        "Otro"
      ],
      "T5": [
        "1,6 MT",
        "1,5 T 7AT EVO PREMIUM",
        "1,5 T HEV HIBRIDO",
        "U-TOUR",
        "1,5 T 7AT 7ASIENTOS",
        "V9",
        "1,5 T AT 7ASIENTOS HIBRIDO",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Foton": {
      "Gratour": [
        "Otro"
      ],
      "Tunland": [
        "Otro"
      ],
      "View": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "GAC": {
      "Aion": [
        "ES ELECTRICO",
        "Otro"
      ],
      "Emkoo": [
        "2,0 ATDHT GE HYBRID",
        "GS3 EMZOOM",
        "1,5 T 7WDCT GB",
        "1,5 T 7WDCT GL PLUS",
        "1,5 T 7WDCT GL R STYLE",
        "Otro"
      ],
      "Emzoom": [
        "Otro"
      ],
      "GS8": [
        "2,0 T 8AT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Geely": {
      "Emgrand GS": [
        "1,8 GS",
        "1,8 GL",
        "1,8 GT AT",
        "1,8 GS DRIVE",
        "1,8 GS DRIVE PLUS",
        "1,8 GS (GL) ACTIVE",
        "1,8 GS (GC) BALANCE",
        "1,8 GS (GC) BALANCE AT",
        "1,8 GS (GT) EXECUTIVE AT",
        "1,8 GS EXECUTIVE",
        "Otro"
      ],
      "Emgrand X7": [
        "2,0 GS DRIVE",
        "2,4 GL AT ACTIVE",
        "2,4 GT AT 4X4 EXECUTIVE",
        "Otro"
      ],
      "EX5": [
        "PRO ELECTRICO",
        "LC",
        "1,3 GB",
        "1,3 GL",
        "1,3 GL CROSS",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Great Wall": {
      "Poer": [
        "Otro"
      ],
      "Tank 300": [
        "2,0 T 8AT 4X4",
        "WINGLE 5 PICK -UP",
        "2,0 TD 4X2 STANDARD",
        "2,0 TD 4X2 LUXURY",
        "2,0 TD 4X4 STANDARD",
        "WINGLE 6 PICK -UP",
        "2,0 TD 4X4 DIGNITY",
        "WINGLE 7 PICK -UP",
        "2,0 TD 2WD M21",
        "2,0 TD 4WD M21",
        "Otro"
      ],
      "Wingle 5": [
        "Otro"
      ],
      "Wingle 6": [
        "Otro"
      ],
      "Wingle 7": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Haval": {
      "H1": [
        "Otro"
      ],
      "H2": [
        "Otro"
      ],
      "H6": [
        "Otro"
      ],
      "Jolion": [
        "1,5 DTC DELUXE",
        "1,5 DTC 7AT SUPREME",
        "1,5 AT SUPREME HEV HYBRID",
        "1,5 AT PRO DELUXE HYBRID",
        "1,5 AT PRO SUPREME HYBRID",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Honda": {
      "CR-V": [
        "2,4 NEW ACTIVE AT 2WD",
        "2,4 NEW LX 4WD AT",
        "2,4 NEW EX 4WD AT",
        "2,4 NEW EX L 4WD AT",
        "2,4 LX 2WD AT",
        "2,4 LX 2WD CVT",
        "2,4 EX 4WD AT",
        "2,4 EX L 4WD AT",
        "1,5 T EXT AWD CVT",
        "2,4 EX 2WD CVT",
        "1,5 T EXT AWD 7CVT",
        "1,5 T LX 2WD CVT",
        "1,5 T EX 2WD CVT",
        "1,5 T EXL AWD CVT",
        "2,0 ADVANCED HYBRID AWD",
        "F i T",
        "1,4 LX-L MT",
        "1,4 LX-L AT",
        "1,5 EX MT",
        "1,5 EX AT",
        "1,5 EXL",
        "1,5 EXL AT",
        "1,5 EXL 7CVT",
        "1,5 EX 7CVT",
        "Otro"
      ],
      "HR-V": [
        "1,8 LX 2WD",
        "1,8 LX 2WD CVT",
        "1,8 EX 2WD CVT",
        "1,8 EX L 2WD CVT",
        "1,5 LX CVT",
        "1,5 EXL CVT",
        "Otro"
      ],
      "Pilot": [
        "3,5 V6 8A 4X4",
        "3,5 V6 8A EX 2WD",
        "3,5 V6 8A TOURING AWD",
        "Otro"
      ],
      "WR-V": [
        "1,5 EX CVT",
        "1,5 EXL CVT",
        "1,5 CVT",
        "Otro"
      ],
      "ZR-V": [
        "2,0 CVT LX",
        "2,0 CVT TRG",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Hyundai": {
      "Creta": [
        "1,6 MT GL",
        "1,6 AT GL",
        "1,6 MT GL CONNECT",
        "1,6 AT GL CONNECT",
        "1,6 AT EDICION WORD CUP",
        "1,6 6AT STYLE",
        "1,6 6AT SAFETY",
        "1,6 6AT SAFETY +",
        "1,5 CVT SAFETY NEW",
        "1,5 CVT SAFETY + NEW",
        "1,5 CVT SAFETY",
        "1,5 CVT SAFETY PLUS ADAS",
        "Otro"
      ],
      "Grand Santa Fe": [
        "2,2 CRDI 4WD GLS 7A 6AT FULL PREMIUM",
        "2,2 CRDI 4WD GLS 7A 6AT FULL PREMIUM GPS",
        "3,3 4WD GLS 7A 6AT FULL PREMIUM GPS",
        "2,2 CRDI 4WD GLS 7A 6AT FULL",
        "3,3 4WD GLS 7A 6AT FULL",
        "3,3 4WD GLS 7A 6AT FULL PREMIUM",
        "Otro"
      ],
      "H1": [
        "Otro"
      ],
      "H100": [
        "Otro"
      ],
      "Kona": [
        "1,6 T GDI 7AT 4X2 STYLE",
        "1,6 T GDI 7AT 4X2 SAFETY PLUS",
        "1,6 T GDI 7AT 4X4 SAFETY PLUS",
        "1,6 T GDI 7AT 4X4 ULTIMATE",
        "Otro"
      ],
      "Santa Fe": [
        "2,4 GLS 2WD 7P",
        "2,4 GLS 4WD FULL PREMIUM AT",
        "2,4 GLS 4WD FULL 7P",
        "2,4 GLS 4WD FULL 7P PREMIUM AT",
        "2,2 GLS 4WD CRDi FULL PREMIUM AT",
        "2,2 GLS 4WD CRDi FULL 7P",
        "2,2 GLS 4WD CRDi FULL 7P PREMIUM",
        "2,2 GLS 4WD CRDi FULL 7P PREMIUM AT",
        "2,4 GL 6MT 7P 2WD",
        "2,4 GL 6AT 7P 2WD",
        "2,4 GLS 6MT 7P 4WD PREMIUM",
        "2,4 GLS 6AT 7P 4WD PREMIUM",
        "2,2 GLS 4WD CRDi FULL 7P PREMIUM 6AT",
        "2,2 GLS 4WD CRDi FULL 7P PREMIUM 6AT CHAPELCO",
        "2,4 GL 2WD 6AT 7P",
        "2,2 GLS 4WD CRDi 8AT 7P",
        "2,5 T GDI 4WD 8AT 7P NAFTA",
        "Otro"
      ],
      "Staria": [
        "2,2 CRDI 4WD 8AT PREMIUM 11PAS",
        "2,2 CRDI 2WD 8AT SAFETY 11PAS",
        "2,2 CRDI 4WD 8AT ULTIMATE 11PAS",
        "Otro"
      ],
      "Tucson": [
        "2,0 GL 2WD",
        "2,0 GL 2WD AT",
        "2,0 GLS 4WD FULL",
        "2,0 GLS 4WD FULL AT",
        "2,0 GLS 4WD FULL AT PREMIUM",
        "2,0 GL 2WD 6MT",
        "2,0 GL 2WD 6AT",
        "2,0 GLS 4WD 6MT",
        "2,0 GLS 4WD 6AT",
        "2,0 2WD MT NEW",
        "2,0 2WD AT NEW",
        "2,0 2WD AT NEW SUNROOF",
        "2,0 4WD AT FULL PREMIUM NEW",
        "1,6 T 4WD AT FULL PREMIUM NEW",
        "2,0 TD 4WD AT FULL PREMIUM NEW",
        "2,0 2WD STYLE 6MT",
        "2,0 2WD STYLE 6AT",
        "2,0 2WD 6AT PANORAMA SUNROOF",
        "2,0 4WD 6AT H MATIC FULL PREMIUM",
        "1,6 T 4WD GDI 6AT DCT FULL PREMIUM",
        "2,0 TD 4WD 6AT FULL PREMIUM",
        "2,0 2WD 6AT SAFETY",
        "1,6 T 4WD 7AT ULTIMATE",
        "1,6 T 4WD 6AT HYBRID",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Isuzu": {
      "D-Max": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "JAC": {
      "EV30X": [
        "Otro"
      ],
      "JS2": [
        "1,5 CVT LUXURY LV",
        "Otro"
      ],
      "JS4": [
        "1,5 T CVT LUXURY",
        "1,5 T + CVT LV",
        "1,5 T CVT FLAGSHIP",
        "Otro"
      ],
      "JS6": [
        "PHEV EURO VI",
        "Otro"
      ],
      "JS8": [
        "1,5 T GDI+7DCT PRO",
        "Otro"
      ],
      "S2": [
        "1,5 LUXURY",
        "1,5 INTELLIGENT",
        "1,5 INTELLIGENT FL",
        "Otro"
      ],
      "S3": [
        "1,6 INTELLIGENT MT",
        "1,6 INTELLIGENT MT FL",
        "1,6 INTELLIGENT CVT",
        "1,6 INTELLIGENT CVT FL",
        "Otro"
      ],
      "S5": [
        "2,0 T INTELLIGENT DCT",
        "Otro"
      ],
      "S7": [
        "2,0 T LUXURY 6AT",
        "2,0 T INTELLIGENT 6AT",
        "T6 PICK UP",
        "2,0 TDi 4X2 LUXURY 6MT",
        "2,0 TDi 4X4 LUXURY 6MT",
        "T8 PICK UP",
        "2,0 TDi 4X4 INTELLIGENT 6MT",
        "T9 PICK UP",
        "2,0 TDi 4X4 LUXURY AT",
        "Otro"
      ],
      "T6": [
        "Otro"
      ],
      "T8": [
        "Otro"
      ],
      "T9": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Jaguar": {
      "F-Pace": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Jeep": {
      "Cherokee": [
        "3,7 LIMITED AT",
        "3,2 V6 9AT TRAILHAWK",
        "CHEROKEE GRAND",
        "3,6 LIMITED ATX",
        "3,6 LIMITED 8ATX",
        "3,6 LIMITED 8AT AWD",
        "3,6 V6 OVERLAND ATX",
        "3,6 V6 OVERLAND 8ATX",
        "3,6 V6 OVERLAND 8AT AWD",
        "6,4 V8 SRT 8ATX HEMI",
        "6,4 V8 SRT 8AT AWD HEMI",
        "Otro"
      ],
      "Commander": [
        "1,3 T 6AT FWD LIMITED",
        "2,0 TD AT9 4X4 LIMITED",
        "2,0 TD AT9 4X4 OVERLAND",
        "2,0 T AT9 AWD BLACKHAWK",
        "Otro"
      ],
      "Compass": [
        "2,4 SPORT ATX",
        "2,4 LIMITED CVT T/C (LN)",
        "2,4 6MT SPORT 4X2",
        "COMMANDER COMPASS Y",
        "RENAGADE",
        "2,4 6AT SPORT 4X2 FWD",
        "2,4 6AT LONGITUDE 4X2 FWD",
        "2,4 AT9 LONGITUDE 4X4",
        "2,4 AT9 LONGITUDE 4X4 PLUS",
        "2,4 AT9 LIMITED 4X4",
        "2,4 AT9 LIMITED 4X4 PLUS",
        "1,3 T 6AT SPORT 4X2",
        "1,3 T 6AT LONGITUDE 4X2",
        "1,3 T 6AT LONGITUDE PLUS 4X2",
        "1,3 T 6AT LIMITED PLUS 4X2",
        "1,3 T 6AT SERIE-S FWD",
        "2,0 TD AT9 TRAILHAWK 4X4",
        "1,3 T270 6AT SPORT 4X2",
        "1,3 T270 6AT LONGITUDE 4X2",
        "1,3 T270 6AT LONGITUDE PLUS 4X2",
        "1,3 T270 6AT LIMITED 4X2",
        "1,3 T270 6AT SERIE-S FWD",
        "2,0 TD 350 AT9 TRAILHAWK 4X4",
        "2,0 T AT9 AWD BLACKHAWK",
        "GLADIATOR PICK-UP",
        "3,6 8AT 4X4 OVERLAND",
        "3,6 8AT 4X4 RUBICON",
        "Otro"
      ],
      "Gladiator": [
        "Otro"
      ],
      "Grand Cherokee": [
        "Otro"
      ],
      "Patriot": [
        "2,0 SPORT MTX",
        "2,4 SPORT MTX",
        "2,4 SPORT ATX",
        "Otro"
      ],
      "Renegade": [
        "1,8 SPORT 4X2",
        "1,8 SPORT PLUS 4X2",
        "1,8 6AT SPORT 4X2",
        "1,8 6AT SPORT PLUS 4X2",
        "1,8 6AT LONGITUDE 4X2",
        "1,8 6AT ANNIVERSARY 4X2",
        "2,0 AT9 TRAILHAWK 4X4",
        "2,4 AT9 LONGITUDE 4X4",
        "1,3 T 6AT LONGITUDE 4X2",
        "1,3 T 6AT SERIE-S FWD",
        "1,3 T AT9 TRAILHAWK 4X4",
        "T270 AT6 LONGITUDE 4X2",
        "T270 AT6 SERIE-S 4X2",
        "T270 AT9 TRAILHAWK 4X4",
        "T270 AT6 SPORT",
        "T270 AT9 WILLYS 4X4",
        "Otro"
      ],
      "Wrangler": [
        "2P 2,0 8AT 4X4 UNLIMITED RUBICOM",
        "2,0 8AT 4X4 UNLIMITED RUBICOM",
        "2P 3,6 V6 SPORT MTX",
        "2P 3,6 V6 SPORT AMTX",
        "2P 3,6 SPORT 5AT AWD HT",
        "2P 3,6 SPORT 5AT AWD DT",
        "3,6 V6 SPORT AMTX",
        "3,6 V6 UNLIMITED MTX",
        "3,6 V6 RUBICOM ATX",
        "3,6 RUBICOM 5AT AWD DT",
        "3,6 SPORT 5AT UNLIMITED AWD HT",
        "3,6 SPORT 5AT UNLIMITED AWD DT",
        "3,6 V6 8AT RUBICOM",
        "3,6 V6 8AT RUBICOM UNLIMITED",
        "3,6 V6 8AT SAHARA OVERLAND",
        "2P 3,8 SPORT MTX",
        "3,8 SPORT MTX UNLIMITED (LN)",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Jetour": {
      "Dashing": [
        "1,5 T 6AT",
        "1,5 T 6AT +",
        "1,6 T 7AT",
        "Otro"
      ],
      "T1": [
        "2,0 T 8AT 4X4",
        "1,5 I-DM HIDRIDO",
        "Otro"
      ],
      "T2": [
        "2,0 TD DCT7 4X4",
        "1,5 T 6AT",
        "1,5 T 7A",
        "1,5 T 7A 8AT",
        "1,6 T 7A 7AT PLUS",
        "Otro"
      ],
      "X50": [
        "Otro"
      ],
      "X70": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "JMC": {
      "Grand Avenue": [
        "2,3 N 6MT 4X2 GL",
        "2,3 N 8AT 4X4 SLX",
        "2,3 N 8AT 4X4 DADAO PRO",
        "2,3 TD 8AT 4X2 GL",
        "2,3 TD 6MT 4X4 GL",
        "2,3 TD 8AT 4X4 GL",
        "Otro"
      ],
      "N520": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "JMEV": {
      "Easy 3": [
        "ELECTRICO",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Kaiyi": {
      "KYX3": [
        "1,5 CVT LUXURY",
        "1,5 T CVT PRO LUXURY",
        "Otro"
      ],
      "KYX7": [
        "2,0 T CVT LUXURY",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Kia": {
      "Carnival": [
        "2,2 DSL 6AT 11P FULL",
        "2,2 DSL 6AT 11P PREMIUM",
        "2,2 CRDI 6AT 11P PREMIUM",
        "2,2 CRDI 8AT 11P",
        "2,2 CRDI 8AT 11P PREMIUM",
        "2,2 CRDI 8AT 11P PREMIUM T/C",
        "2,2 CRDI 8AT 11P EX",
        "2,2 CRDI 8AT 11P SX",
        "Otro"
      ],
      "Seltos": [
        "1,6 LX AT",
        "1,6 EX AT",
        "1,5 LX CVT",
        "Otro"
      ],
      "Sorento": [
        "2,4 2WD EX FULL AT",
        "2,4 2WD EX FULL AT NEW",
        "2,4 4WD EX FULL AT",
        "2,4 4WD EX PREMIUM AT",
        "2,2 DSL 4WD EX PREMIUM AT",
        "2,2 DSL 4WD EX PREMIUM 6AT",
        "2,2 CRDI 4X2 EX AT",
        "2,2 CRDI 4X4 EX AT",
        "2,4 4X2 EX AT",
        "2,2 CRDI 4X2 EX 8AT",
        "2,2 CRDI 4X4 EX 8AT",
        "2,2 CRDI 4X4 GT 8AT",
        "2,4 4X2 EX 6AT",
        "2,2 CRDI 4WD SX 8AT DCT",
        "Otro"
      ],
      "Sportage": [
        "2,0 EX 4X2",
        "2,0 EX 4X2 AT",
        "2,0 EX 4X4",
        "2,0 EX 4X4 AT",
        "2,0 EX 4X2 6AT",
        "2,0 EX 4X2 6AT PREMIUM",
        "2,0 SX 4X4 AT",
        "2,0 CRDI EX 4X2 AT",
        "2,0 CRDI EX 4X4 AT",
        "2,0 CRDI EX 4X4 AVN AT",
        "2,0 CRDI EX 4X4 GT-LINE AT",
        "1,6 T-GDI EX 4X2 7AT",
        "1,6 T-GDI E-LINE AWD 7AT",
        "2,0 MPI EX AT6 2WD",
        "2,0 CRDI X-LINE AT8 AWD",
        "KYC",
        "MAMUT",
        "1,5",
        "1,5 GNC",
        "C/D 1,5",
        "BOX 1,5 DUAL",
        "BOX 1,5 DUAL REFRIGERADO",
        "BOX 1,5 DUAL REFRIGERADO MY",
        "BOX 1,5 DUAL REFRIGERADO GNC",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Land Rover": {
      "Defender": [
        "110 SW 2,4 7S M",
        "110 SW 2,4 7S PLUS",
        "110 2,2 TD EDICIÓN DE COLECCIÓN",
        "110 2,0 T P400e HSE X-DYNAMIC 8AT HÍBIRDO",
        "Otro"
      ],
      "Discovery": [
        "4 2,7 TD V6 SE",
        "4 2,7 TD V6 SE PLUS",
        "4 2,7 TD V6 HSE",
        "4 3,0 SD V6 HSE",
        "4 HSE",
        "3,0 SD V6 BLACK EDITION",
        "2,0 T SPORT S",
        "2,0 T SPORT SE",
        "2,0 T SPORT HSE",
        "2,0 T SPORT HSE BLACK",
        "2,2 DSL SPORT HSE",
        "3,0 V6 T NAFTA 8AT HSE 5 ALL-NEW",
        "3,0 V6 T DIESEL 8AT HSE 5 ALL-NEW",
        "EVOQUE",
        "2,0 T PURE AT",
        "2,0 T PURE PLUS AT",
        "2,0 T PRESTIGE AT",
        "2,0 T PRESTIGE PLUS AT",
        "2,0 T PURE COUPE AT",
        "2,0 T DYNAMIC PLUS AT",
        "2,0 T BLACK EDITION AT",
        "2,2 D PRESTIGE",
        "2,0 T SE 9AT",
        "2,0 T SE PLUS PURE 9AT",
        "2,0 T HSE 9AT",
        "2,2 D HSE",
        "2,0 T HSE DYNAMIC 9AT",
        "CONV 2,0 T HSE DYNAMIC 9AT",
        "FREELANDER",
        "2 3,2 i6 S PLUS",
        "2 3,2 i6 HSE",
        "2 2,2 TD4 S",
        "2 2,2 TD4 S AT PLUS",
        "2 2,0 S PLUS",
        "2 2,0 HSE",
        "Otro"
      ],
      "Range Rover": [
        "4,4 TDV8 HSE",
        "3,0 TDV6 HSE SPORT SURROUND",
        "5,0 V8 SC SPORT",
        "5,0 V8 HSE SPORT",
        "3,0 SDV6 HSE",
        "3,0 SDV6 HSE SPORT",
        "3,0 SC HSE SPORT",
        "5,0 SC HSE DYNAMIC",
        "5,0 SUPERCHARGED",
        "Otro"
      ],
      "Range Rover Evoque": [
        "2,0 T HIBRIDO 9AT SE",
        "2,0 T HIBRIDO 9AT SE R-DYNAMIC",
        "2,0 T HIBRIDO 9AT HST",
        "RANGE ROVER SE VOGUE",
        "4,4 SDV8",
        "5,0 SCV8",
        "Otro"
      ],
      "Range Rover Velar": [
        "2,0 TD 240HP S 8AT",
        "2,0 T 250HP R-DYNAMIC 8AT",
        "2,0 T 250HP S 8AT",
        "2,0 T 250HP S + 8AT",
        "2,0 T 300HP S + 8AT",
        "3,0 V6 380HP S/RECARGADO R-DYNAMIC 8AT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Lexus": {
      "GX": [
        "Otro"
      ],
      "LBX": [
        "1,5 E-CVT ACTIVE HIBRIDO",
        "Otro"
      ],
      "LX": [
        "5,6 V8 8AT 4X4 570",
        "3,5 V6 BT 10AT 4X4 600 URBAN",
        "Otro"
      ],
      "NX": [
        "2,5 300H LUXURY (HV) CVT 4X4",
        "2,0 T 300H F-SPORT (NAFTA) CVT 4X4",
        "2,4 T 350 F-SPORT",
        "2,5 350H LUXURY E-CVT",
        "2,5 450H +",
        "Otro"
      ],
      "RX": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Lifan": {
      "Foison": [
        "TRUCK 1,2 FULL",
        "CARGO 1,2 FULL",
        "BOX 1,2 FULL",
        "Otro"
      ],
      "MyWay": [
        "1,8 7A FULL",
        "1,8 7A FULL 5AT",
        "M 7",
        "2,0 CVT 7A",
        "X 50",
        "1,5 4X2",
        "X 60",
        "1,8 4X2",
        "X 70",
        "2,0 4X2",
        "2,0 4X2 CVT",
        "Otro"
      ],
      "X50": [
        "Otro"
      ],
      "X60": [
        "Otro"
      ],
      "X70": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Maserati": {
      "Levante": [
        "3,0 V6 BT 350CV 8AT 4X4 113",
        "3,0 V6 BT 430CV 8AT 4X4 S 129",
        "3,0 V6 BT 350CV 8AT 4X4 Q4",
        "3,0 V6 BT 430CV 8AT 4X4 Q4 S",
        "QUATROPORTE",
        "4,2 DUO SELECT 134 126",
        "4,2 DUO SELECT SPORT GT 145 137",
        "4,2 DUO SELECT EXECUTIVE GT 146 138",
        "3,8 V8 BT 8AT GTS GRAN LUSSO 190 181 170",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Maxus": {
      "D90": [
        "2,0 TD 4WD 8AT MILDHYBRID FLAGSHIP",
        "Otro"
      ],
      "eDeliver 3": [
        "SWB VAN",
        "Otro"
      ],
      "eDeliver 5": [
        "L1H1PANEL VAN",
        "Otro"
      ],
      "eDeliver 9": [
        "CHASIS-CABINA L3",
        "L3H2",
        "Otro"
      ],
      "eTerron": [
        "4X4 FLASHIP ELECTRICA",
        "T60 D20",
        "2,0 TD 4X4 DX 6MT",
        "2,0 TD 4X4 GLX 6AT",
        "2,0 D 4X4 6MT",
        "2,0 D 4X2 6MT",
        "2,0 D 4X4 6MT MINERA",
        "2,0 D 4X4 6AT MAX ELITE",
        "2,0 D 4X4 6AT MAX LUXURY",
        "T90",
        "2,0 BTD 4X4 6MT",
        "T90 EV",
        "4X2 AT ELECTRICA",
        "Otro"
      ],
      "T60": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Mercedes Benz": {
      "Clase G": [
        "Otro"
      ],
      "Clase GLA": [
        "Otro"
      ],
      "Clase GLB": [
        "Otro"
      ],
      "Clase GLC": [
        "Otro"
      ],
      "Clase GLE": [
        "Otro"
      ],
      "Clase GLK": [
        "Otro"
      ],
      "Clase GLS": [
        "Otro"
      ],
      "Sprinter": [
        "308 FURGON 2,2 CDI",
        "311 FURGON CDI STREET",
        "311 FURGON CDI",
        "311 FURGON CDI STREET L",
        "313 CHASIS 2,2 CDI",
        "313 COMBI 2,2 CDI",
        "313 FURGON 2,2 CDI",
        "314 CDI CHASIS",
        "314 CDI FURGON",
        "314 CDI FURGON STREET",
        "316 CHASIS CDI",
        "316 FURGON CDI",
        "411 CDI STREET FURGON",
        "413 CDI",
        "414 CDI CHASIS",
        "414 CDI COMBI",
        "414 CDI FURGON",
        "415 CDI FURGON",
        "415 CDI COMBI",
        "415 CDI CHASIS",
        "416 CDI CHASIS",
        "416 CDI FURGON",
        "416 CDI COMBI",
        "417 CDI CHASIS",
        "417 CDI COMBI",
        "417 CDI FURGON",
        "515 CDI FURGON",
        "515 CDI MINIBUS",
        "515 CDI CHASIS",
        "516 CDI CHASIS",
        "516 CDI FURGON",
        "516 CDI MINIBUS",
        "517 CDI CHASIS",
        "517 CDI FURGON",
        "517 CDI MINIBUS",
        "VIANO",
        "2,2 CDI 7A TREND AT",
        "2,2 CDI 7A AMBIENTE AT",
        "2,2 CDI 7A PLC AMBIENTE AT",
        "VITO 111",
        "1,6 CDI V1",
        "1,6 CDI V1 A/C",
        "1,6 CDI V2",
        "1,6 CDI V2 A/C",
        "1,6 CDI MIXTO A/C",
        "1,6 CDI PLUS A/C",
        "VITO 114",
        "CDI V2",
        "CDI PLUS",
        "CDI MIXTO AT PRO",
        "VITO 119",
        "COMBI 1,6 CDI",
        "TOURER 1,6 CDI",
        "TOURER CDI AT 9+1 PRO",
        "VITO 121",
        "TOURER 1,6 CDI AT",
        "TOURER 1,6 CDI AT X",
        "TOURER 1,6 CDI AT 7+1 PLUS",
        "MG",
        "CYBERSTER",
        "ELECTRICO AWD",
        "3 HYBRID",
        "1,5 CVT HYBRID CONFORT",
        "ZS",
        "1,5 CVT HYBRID + CONFORT",
        "MINI COOPER",
        "ACEMAN",
        "SE ELECTRICO",
        "CLUBMAN",
        "1,5 PEPPER WIRED",
        "2,0 S CHILI",
        "COUNTRYMAN",
        "1,6 ONE",
        "1,6 COOPER",
        "1,6 COOPER S AT",
        "1,6 PEPPER",
        "1,6 PEPPER S AT",
        "1,6 PEPPER SD",
        "1,6 CHILI S AT",
        "1,6 CHILI SD",
        "1,6 S ALL 4 AT CHILI",
        "1,6 JOHN COOPER WORKS",
        "1,5 T PEPPER MT",
        "1,5 T PEPPER AT",
        "2,0 T CHILI S AT",
        "2,0 T CHILI S AT ALL 4",
        "1,5 T 136CV CLASSIC 7AT",
        "2,0 T 192CV CLASSIC CONFORT S 7AT",
        "2,0 T 306CV JOHN COOPER WORKS 8AT 4X4",
        "156CV C CLASSIC",
        "2,0 TD MILDHYBRID D ESSENTIAL",
        "204CV S ALL4 CLASSIC CONFORD",
        "204CV S ALL4 FAVOURED",
        "1,6 SALT",
        "1,6 CHILI",
        "1,6 CHILI S",
        "1,6 S HOT",
        "1,6 S HOT AT",
        "1,6 S JOHN COOPER WORKS",
        "1,6 S CLUBMAN",
        "1,6 S PEPPER",
        "1,5 T PEPPER",
        "1,5 T PEPPER WIRED",
        "2,0 T CHILI S",
        "S LOOK JCW",
        "JOHN COOPER WORKS",
        "1,5 T 136CV PEPPER 6AT",
        "2,0 T 192CV CHILI S 7AT SPORT",
        "2,0 T 192CV LOOK JCW S 7AT SPORT",
        "2,0 T 192CV 60 YEARS EDITION 7AT",
        "2,0 T 231CV JOHN COOPER WORKS 7AT SPORT",
        "2,0 T 306CV JOHN COOPER WORKS GP 8AT",
        "1,5 T 136CV CLASSIC",
        "2,0 T 231CV JOHN COOPER WORKS 8AT",
        "204CV S CLASSIC",
        "2,0 T 231CV 7AT JCW",
        "1,6",
        "1,6 S",
        "S",
        "1,6 JCW",
        "CONV 1,6",
        "CONV 1,6 S",
        "CONV 1,6 S AT",
        "CONV S",
        "CONV S CHILI",
        "CONV 2,0 T 192CV S CHILI 7AT SPORT",
        "CONV CLASSIC CONF PLUS",
        "CONV 2,0 T 204CV 7AT S",
        "PACEMAN",
        "1,6 S ALL 4",
        "Otro"
      ],
      "Vito": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Mini": {
      "Countryman": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Mitsubishi": {
      "L200": [
        "Otro"
      ],
      "Montero": [
        "3,2 DI-D GLS AT",
        "3,2 DI-D GLS SPORT",
        "3,2 DI-D GLS SPORT AT",
        "Otro"
      ],
      "Outlander": [
        "2,0 GLS SPORT 2WD",
        "2,0 GLS SPORT 4WD",
        "2,0 GLS SPORT 4WD AT",
        "2,4 GLS AT T/C FULL CRO",
        "3,0 GLS AT T/C FULL CRO",
        "2,0 GLX 2WD AT",
        "2,4 GLS 4WD AT T/C",
        "2,4 GLS 4WD 6CVT CT 7A",
        "2,5 4WD 6CVT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Nissan": {
      "Frontier": [
        "Otro"
      ],
      "Murano": [
        "3,5 XTRONIC CVT",
        "3,5 V6 EXCLUSIVE CVT",
        "Otro"
      ],
      "NP300": [
        "Otro"
      ],
      "X-Trail": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Peugeot": {
      "2008": [
        "1,6 ACTIVE",
        "1,6 ALLURE",
        "1,6 ALLURE TIPT6",
        "1,6 CROSSWAY",
        "1,6 FELINE",
        "1,6 FELINE TIPT6",
        "1,6 FELINE TIPT6 T/C",
        "1,6 THP SPORT",
        "1,6 THP SPORT TIPT6",
        "1,6 IN CONCERT",
        "1,6 IN CONCERT TIPT",
        "1,6 THP IN CONCERT TIPT",
        "T200 CVT ACTIVE",
        "T200 CVT ALLURE",
        "T200 CVT GT",
        "Otro"
      ],
      "3008": [
        "1,6 PREMIUM",
        "1,6 PREMIUM PLUS",
        "1,6 PREMIUM PLUS TIPT",
        "1,6 HDi PREMIUM PLUS TIPT",
        "1,6 ALLURE",
        "1,6 ALLURE TIPT",
        "1,6 FELINE",
        "1,6 FELINE TIPT",
        "1,6 THP ROLAND GARROS",
        "1,6 THP ROLAND GARROS TIPT",
        "1,6 HDi FELINE TIPT",
        "1,6 THP ALLURE 6AT",
        "1,6 THP GT LINE 6AT",
        "2,0 HDi GT LINE 6AT",
        "1,6 THP GT PACK 6AT",
        "1,6 THP GT 6AT",
        "2,0 HDi GT PACK 8AT",
        "1,6 THP GT PACK 8AT HYBRID4 AWD WALLBOX",
        "Otro"
      ],
      "4008": [
        "2,0 16V ALLURE 4X4",
        "2,0 16V ALLURE 4X4 CVT",
        "2,0 16V FELINE 4X4 CVT",
        "Otro"
      ],
      "5008": [
        "1,6 ALLURE 7A",
        "1,6 ALLURE 7A PLUS",
        "1,6 ALLURE 7A TIPT",
        "1,6 FELINE TIPT",
        "1,6 FELINE TIPT B/TECHO",
        "1,6 THP ALLURE TIPT",
        "1,6 THP ALLURE PLUS TIPT",
        "2,0 HDi ALLURE PLUS TIPT",
        "2,0 HDi ALLURE PLUS 8AT",
        "1,6 THP GT PACK TIPT",
        "1,6 THP GT 8AT",
        "Otro"
      ],
      "Boxer": [
        "CHASIS 2,2 HDi 435L CC PREMIUM",
        "CHASIS 2,2 HDi 440 L3 CH 130 PREMIUM",
        "2,3 HDi 330M CONFORT LARGA A/C",
        "2,3 HDi 350M CONFORT LARGA",
        "2,3 HDi 350MH CONFORT LARGA ALTA A/C",
        "2,3 HDi 350LH CONFORT LARGA ALTA FULL",
        "2,2 HDi 435M PREMIUM",
        "2,2 HDi 435MH PREMIUM",
        "2,2 HDi 435LH PREMIUM",
        "2,2 HDi 440 L4H2 130 PREMIUM",
        "HDi 140 L2H2 M23",
        "HDi 140 L3H2 M23",
        "2,2 HDI L2H2 140 6MT",
        "2,2 HDI L3H2 140 6MT",
        "Otro"
      ],
      "Expert": [
        "1,6 HDi PREMIUM",
        "1,6 HDi",
        "HDI 140 L3",
        "1,6 HDi PREMIUM 6P",
        "1,6 HDi CONFORT",
        "2,0 HDi CONFORT",
        "HDI 140 L3 6P",
        "HOGGAR PICK UP",
        "1,6 XR",
        "1,6 XS",
        "1,6 ESCAPADE ABS",
        "Otro"
      ],
      "Partner": [
        "1,4 PRESENCE",
        "1,4 PRESENCE A/C ABS",
        "1,4 CONF A/C PLC CCP",
        "1,4 CONF A/C PLC CCP ABG",
        "1,4 CONF A/C PLC CCP ABG 5A",
        "1,6 115 PRESENCE",
        "1,6 115 CONF",
        "1,6 115 CONF 5A",
        "1,6 HDi PRESENCE A/C ABS",
        "1,6 HDi CONF PLC",
        "1,6 HDi CONF PLC ABG",
        "1,6 HDi CONF PLC ABG 5A",
        "1,6 HDi 92 CONF",
        "1,6 HDi 92 CONF 5A",
        "PATAGONICA 1,4 2PLC FULL",
        "PATAGONICA 1,6 2PLC VTC",
        "PATAGONICA 1,6 N",
        "PATAGONICA 1,6 115",
        "PATAGONICA 1,6 2PLC VTC PLUS",
        "PATAGONICA 1,6 VTC PLUS",
        "PATAGONICA 1,6 115 VTC PLUS",
        "PATAGONICA 1,6 HDi A/C 2PLC BASE",
        "PATAGONICA 1,6 HDi 92",
        "PATAGONICA 1,6 HDi VTC",
        "PATAGONICA 1,6 HDi VTC PLUS ABS",
        "PATAGONICA 1,6 HDi 92 VTC PLUS",
        "Otro"
      ],
      "Traveller": [
        "2,0 HDi 6AT ALLURE PLUS 8A",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Porsche": {
      "Cayenne": [
        "GTS 41 38",
        "TURBO 47 44 40 36",
        "TURBO S 55 49 44",
        "3,0 V6 DIESEL TIPT 31 29 26 24",
        "3,6 V6 TIPT 31 29 26 24",
        "3,0 V6 S HYBRID 33 30 27 25",
        "3,6 V6 300CV TIPT",
        "3,6 V6 BT 420CV TIPT S",
        "3,6 V6 300CV TIPT PLATINUM EDITION 65 60",
        "3,0 V6 105 98 94 86 81 77",
        "PLATINUM EDITION 120 112",
        "2,9 V6 BT S 148 138 132 121 115 109",
        "2,9 V6 BT S PLATINUM EDITION 164 153",
        "4,0 V8 BT 219 203 194 178 169 161",
        "E-HYBRID 123 114 89 81",
        "E-HYBRID PLATINUM EDITION 135 126",
        "TURBO E-HYBRID S 255 237",
        "GTS 171 159 153 140",
        "TURBO GT 311 290 277",
        "CAYENNE BLACK EDITION",
        "E-HYBRID",
        "E-HYBRID BLACK EDITION",
        "E-HYBRID S",
        "E-HYBRID S BLACK EDITION",
        "TURBO E-HYBRID",
        "CAYENNE S",
        "GTS",
        "ELECTRIC",
        "ELECTRIC S",
        "TURBO ELECTRIC",
        "CAYENNE COUPE",
        "3,0 V6 TURBO 8AT 120 111 107 101 96",
        "PLATINUM EDITION 129 120",
        "2,9 V6 BT S 8AT 157 146 140 133 126",
        "2,9 V6 BT S 8AT PLATINUM EDITION 173 160",
        "4,0 V8 BT 8AT 226 210 201 191 181",
        "GTS 179 166 160 152",
        "TURBO S E-HYBRID 259 241 200",
        "E-HYBRID PLATINUM EDITION 159 148",
        "TURBO GT",
        "S COUPE",
        "CAYMAN 718",
        "2P CAYMAN 54",
        "2P CAYMAN S 59",
        "2P CAYMAN",
        "2P CAYMAN S",
        "2P CAYMAN GTS 4.0",
        "2P CAYMAN GT4 205 190 181 170",
        "2P CAYMAN GT4 RS",
        "2P CAYMAN STYLE EDITION",
        "Otro"
      ],
      "Macan": [
        "2,0 T 252CV 49 45 42 37",
        "S 3,0 V6 BT S AT 340CV 58 54 50 45 41",
        "S 3,0 V6 TD GTS 258CV 63 58 54 49",
        "S 3,0 V6 BT 400CV 79 73 68 64 PORSCHE EN US$",
        "2,0 T 252CV",
        "S 3,0 V6 BT 354CV 7AT",
        "2,9 380CV GTS 74 74",
        "2,9 440CV TURBO 86 86",
        "T",
        "3,0 V6 TURBO 354CV S",
        "2,9 V6 BT 380CV GTS",
        "ELECTRIC",
        "4 ELECTRIC",
        "4 S ELECTRIC",
        "4 ELECTRIC TURBO",
        "GTS ELECTRIC",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "RAM": {
      "1500": [
        "Otro"
      ],
      "2500": [
        "Otro"
      ],
      "Dakota": [
        "Otro"
      ],
      "Rampage": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Renault": {
      "Alaskan": [
        "Otro"
      ],
      "Arkana": [
        "Otro"
      ],
      "Boreal": [
        "1,3 T 6AT EVOLUTION",
        "1,3 T 6AT TECHNO",
        "1,3 T 6AT ICONIC",
        "Otro"
      ],
      "Captur": [
        "1,6 LE COP SPORTIF CVT",
        "1,6 LIFE",
        "1,6 INTENS CVT 1TONE",
        "1,6 INTENS CVT",
        "1,6 INTENS CVT SL",
        "1,6 INTENS CVT BOSE",
        "2,0 ZEN",
        "2,0 INTENS",
        "Otro"
      ],
      "Duster": [
        "1,3 T 4X2 OUTSIDER CVT",
        "1,3 T 4X2 ICONIC CVT",
        "1,3 T 4X4 ICONIC",
        "1,6 4X2 ZEN",
        "1,6 4X2 INTENS CVT",
        "1,6 4X2 INTENS MT",
        "1,3 T 4X4 ICONIC MT",
        "1,6 4X2 EXPRESSION",
        "1,6 4X2 DYNAMIQUE",
        "1,6 4X2 CONFORT",
        "1,6 4X2 CONFORT ABS",
        "1,6 4X2 CONFORT PLUS",
        "1,6 4X2 CONFORT PLUS ABS",
        "1,6 4X2 CONFORT PLUS ABS ALU",
        "1,6 4X2 CONFORT PLUS DAKAR",
        "1,6 4X2 TECH ROAD",
        "1,6 4X2 EXPRESION",
        "1,6 4X2 DAKAR",
        "1,6 4X2 PRIVILEGE",
        "1,6 4X2 PRIVILEGE SL",
        "2,0 4X2 PRIVILEGE",
        "2,0 4X4 PRIVILEGE",
        "2,0 4X2 LUXE",
        "2,0 4X2 LUXE NAV",
        "2,0 4X2 LOS PUMAS",
        "2,0 4X2 DAKAR",
        "2,0 4X4 DAKAR",
        "2,0 4X2 DAKAR SPIRIT",
        "2,0 4X4 DAKAR SPIRIT",
        "2,0 4X4 LUXE",
        "2,0 4X4 LUXE NAV",
        "2,0 4X4 TECH ROAD",
        "2,0 4X4 LOS PUMAS",
        "DUSTER OROCH PICK - UP",
        "1,6 DYNAMIQUE",
        "1,6 OUTSIDER",
        "2,0 DYNAMIQUE",
        "2,0 PRIVELEGE",
        "2,0 OUTSIDER PLUS",
        "2,0 DYNAMIQUE 4X4",
        "2,0 OUTSIDER PLUS 4X4",
        "1,6 PROFESIONAL",
        "1,6 SCE EMOTION 114 2WD",
        "1,3 TCE ICONIC 163 2WD CVT",
        "1,3 TCE OUTSIDER 163 4WD",
        "Otro"
      ],
      "Kangoo": [
        "BREAK 1,6 2 AUTH A/C DH CD",
        "BREAK 1,6 AUTH 1PLC PH3",
        "BREAK 1,6 2 AUTH A/C DH CD 2PLC PLUS",
        "BREAK 1,6 2 AUTH A/C DH CD 2PLC PLUS 7A",
        "BREAK 1,6 AUTH 2PLC PH3 PLUS",
        "BREAK 1,6 AUTH 2PLC PH3 PLUS 7A",
        "BREAK 1,6 2 SPORTWAY 2PLC",
        "BREAK 1,6 2 SPORTWAY 2PLC PH3",
        "BREAK 1,6 2 SPORTWAY 2PLC 7A",
        "BREAK 1,6 2 CAMPUS 2PLC",
        "BREAK 1,6 2 CAMPUS 2PLC 7A",
        "BREAK 1,6 2 GET UP 2PLC",
        "BREAK 1,6 2 GET UP 2PLC 7A",
        "BREAK 1,5 DCI 2 AUTH A/C DH CD",
        "BREAK 1,5 DCI 2 AUTH A/C DH CD 2PLC PLUS",
        "BREAK 1,5 DCI 2 SPORTWAY 2PLC",
        "BREAK 1,5 DCI 2 CAMPUS 2PLC",
        "BREAK 1,5 DCI 2 GET UP 2PLC",
        "1,6 CONF 2 1PLC",
        "1,6 CONF 2 1PLC A/C DH",
        "1,6 CONF 2 2PLC A/C DH SVT",
        "1,6 PH3 GENERIQUE",
        "1,6 PH3 CONF 1PLC",
        "1,6 PH3 GRAN CONF 2PLC",
        "1,6 PH3 CONF 2PLC 5A",
        "1,6 PH3 CONF 2PLC 5A PACK",
        "1,5 CONF dCi 2 DH SVT 1PLC",
        "1,5 CONF dCi 2 DH 1PLC",
        "1,5 CONF dCi 2 DH 1PLC A/C",
        "1,5 CONF dCi 1PLC PH3",
        "1,5 CONF dCi 2PLC PH3 5A",
        "1,5 CONF dCi 2 DH 2PLC A/C",
        "1,5 GRAN CONF dCi 2PLC",
        "KANGOO II EXPRESS",
        "1,6 SCe PROFESIONAL",
        "1,6 SCe CONFORT",
        "1,6 SCe CONFORT STD",
        "1,6 SCe CONFORT 114",
        "1,6 SCe CONFORT GNC",
        "1,6 SCe CONFORT 5A",
        "1,6 SCe CONFORT STD 5A",
        "1,6 SCe CONFORT 114 5A",
        "1,6 SCe EMOTION",
        "1,6 SCe EMOTION 5A",
        "1,5 dCi CONFORT",
        "1,5 dCi CONFORT STD",
        "1,5 dCi CONFORT 89",
        "1,5 dCi CONFORT 5A",
        "1,5 dCi CONFORT STD 5A",
        "1,5 dCi CONFORT 89 5A",
        "ZE 2A",
        "ZE MAXI 2A",
        "E-TECH",
        "KANGOO II VERSION PASAJEROS",
        "1,6 SCe LIFE",
        "1,6 SCe ZEN",
        "1,6 SCe STEPWAY",
        "1,5 dCi STEPWAY",
        "KARDIAN",
        "1,6 EVOLUTION",
        "1,0 T AT6 EVOLUTION",
        "1,0 T AT6 TECHNO",
        "1,0 T AT6 PREMIERE EDITION",
        "1,0 T AT6 ICONIC",
        "Otro"
      ],
      "Koleos": [
        "2,5 EXPRESSION 4X2",
        "2,5 DYNAMIQUE 4X4",
        "2,5 DYNAMIQUE 4X4 CLIMA",
        "2,5 PRIVILEGE 4X4",
        "2,5 PRIVILEGE 4X4 AT",
        "2,5 DYNAMIQUE 4X4 CLIMA AT",
        "2,5 ZEN 2WD CVT",
        "2,5 INTENS 4WD CVT",
        "2,5 INTENS 4WD CVT X TRONIC",
        "2,0 T AT8 4WD TECHNO2025",
        "1,5 T E-TECH HYBRID AT8 2WD ALPINE",
        "Otro"
      ],
      "Master": [
        "CHASIS 2,5 dCi CABINA PACK A/C 120",
        "CHASIS 2,5 dCi CABINA A/C",
        "CHASIS 2,3 dCi CABINA A/C",
        "2,5 dCi CORTO PACK 120",
        "2,5 dCi CORTO L1H1",
        "2,3 dCi CORTO L1H1",
        "2,5 dCi CORTO PACK 120 A/C",
        "2,5 dCi CORTO L1H1 A/C",
        "2,3 dCi CORTO L1H1 A/C",
        "2,5 dCi CORTO PACK T/A A/C 120",
        "2,5 dCi MEDIO PACK A/C 120",
        "2,5 dCi MEDIO L2H2 A/C",
        "2,3 dCi MEDIO L2H2 A/C",
        "2,5 dCi LARGO PACK A/C 120",
        "2,5 dCi LARGO L3H2 A/C",
        "2,3 dCi LARGO L3H2 A/C",
        "2,3 dCi L1H1",
        "2,3 dCi L2H2",
        "2,3 dCi L3H3",
        "2,5 dCi PACK A/C ABG ABS 120",
        "2,5 dCi",
        "2,3 dCi H6",
        "2,3 dCi H6H",
        "MEGANE III",
        "1,6 LUXE PACK",
        "2,0 16V LUXE TN",
        "2,0 LUXE",
        "2,0 16V LUXE",
        "2,0 16V LUXE PH2",
        "2,0 PRIVILEGE",
        "2,0 16V PRIVILEGE TN",
        "2,0 16V PRIVILEGE",
        "2,0 16V PRIVILEGE PH2",
        "RS 250 CV",
        "2,0 T RS 265 CV",
        "MEGANE E-TECH",
        "AT",
        "Otro"
      ],
      "Oroch": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Shineray": {
      "SWM G01": [
        "1,5 T",
        "T 30",
        "1,3",
        "T 32",
        "Otro"
      ],
      "T30": [
        "Otro"
      ],
      "T32": [
        "Otro"
      ],
      "X7": [
        "1,8 MT",
        "1,5 T AT",
        "X 30",
        "1,3",
        "1,3 7P",
        "Otro"
      ],
      "X30": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Skywell": {
      "ET5": [
        "ELECTRIC",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Soueast": {
      "DX3": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "SsangYong": {
      "Actyon": [
        "A 230 2WD DYNAMIC PACK 1",
        "A 230 2WD DYNAMIC PACK 2",
        "A 230 2WD DYNAMIC PACK 3 LUXE",
        "Otro"
      ],
      "Korando": [
        "FULL EQUIP II",
        "Otro"
      ],
      "Kyron": [
        "2,0 D I",
        "2,0 D II",
        "2,0 D III",
        "STAVIC",
        "VAN",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Subaru": {
      "Crosstrek": [
        "2,0 CVT AWD LIMITED ES",
        "2,0 CVT AWD LIMITED ES HYBRID",
        "Otro"
      ],
      "Forester": [
        "2,0 X AWD",
        "2,0 X AWD AT",
        "2,0 XS AWD AT",
        "2,0 XS AWD LIMITED",
        "2,0 XS AWD LIMITED AT",
        "2,5 XT AWD TURBO",
        "2,5 XT AWD TURBO AT",
        "FORESTER ALL NEW",
        "2,0 i AWD 6MT X",
        "2,0 i AWD CVT SI DRIVE XS",
        "2,5 i AWD CVT SI DRIVE XS",
        "2,5 i AWD CVT SI DRIVE DYNAMIC",
        "2,5 i AWD CVT SI DRIVE LIMITED SPORT",
        "2,0 XT AWD CVT SI DRIVE TURBO",
        "2,5 i AWD CVT SI DRIVE DYNAMIC SPORT",
        "2,0 i AWD CVT XS",
        "2,0 AWD CVT DYNAMIC",
        "2,5 AWD CVT DYNAMIC EYESIGHT",
        "2,5 AWD CVT LIMITED SPORT ES",
        "2,0 i HYBRID AWD CVT LIMITED ES",
        "2,5 AWD CVT XS ES",
        "2,5 AWD CVT LIMITED ES",
        "2,5 AWD CVT LIMITED ES HYBRID STRONG",
        "Otro"
      ],
      "Outback": [
        "2,5 AWD 6MT XS",
        "2,5 AWD CVT XS",
        "2,5 AWD CVT XA",
        "2,5 AWD CVT LIMITED",
        "2,5 AWD CVT LIMITED TECH",
        "2,5 AWD 5AT SI DRIVE",
        "2,5 i AWD CVT LIMITED",
        "2,5 R AWD CVT LIMITED ES EYESIGHT",
        "2,5 CVT LIMITED ES",
        "3,6 R AWD CVT LIMITED",
        "3,6 R AWD CVT EYESIGHT",
        "Otro"
      ],
      "Tribeca": [
        "3,6R 256CV AWD 7P AT",
        "Otro"
      ],
      "XV": [
        "2,0R AWD",
        "2,0R AWD AT",
        "2,0R AWD LIMITED AT",
        "2,0 AWD 6MT",
        "2,0 AWD CVT",
        "2,0 AWD CVT LIMITED",
        "2,0 i AWD MT",
        "2,0 i AWD CVT",
        "2,0 i AWD CVT DYNAMIC",
        "2,0 i AWD CVT LIMITED",
        "2,0 i CVT",
        "2,0 i AWD CVT DYNAMIC EYESIGHT",
        "2,0 i AWD CVT LIMITED EYESIGHT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Suzuki": {
      "Grand Vitara": [
        "2,4 JX 4WD",
        "2,4 JXL 2WD",
        "2,4 JXL 4WD",
        "2,4 JXL 4WD AT",
        "2,4 JLX-L 4WD AT",
        "JIMMY",
        "1,5 GL",
        "1,5 GLX",
        "1,5 GLX BITONO",
        "1,5 GLX AT",
        "1,5 GLX AT BITONO",
        "Otro"
      ],
      "Jimny": [
        "Otro"
      ],
      "Vitara": [
        "1,6 16V GL 2WD 5MT",
        "1,6 16V GL 2WD 6AT",
        "1,6 16V GL PLUS ALLGRIP 4WD 6AT",
        "1,6 16V GLX SR ALLGRIP 4WD 6AT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Toyota": {
      "Corolla Cross": [
        "2,0 XLI CVT",
        "2,0 XEI CVT",
        "2,0 SEG CVT",
        "HEV 1,8 XEI eCVT",
        "HEV 1,8 SEG eCVT",
        "2,0 GR-SPORT CVT",
        "2,0 XLI CVT SAFETY",
        "2,0 XEI CVT SAFETY",
        "2,0 SEG CVT SAFETY",
        "HEV 1,8 XEI eCVT SAFETY",
        "HEV 1,8 SEG eCVT SAFETY",
        "2,0 GR-SPORT CVT SAFETY",
        "CROWN",
        "2,4 T HEV E-AWD PLATINUM",
        "Otro"
      ],
      "Hiace": [
        "2,8 TDi L1H1 TB 6AT 3A 4P",
        "2,8 TDi L2H2 TA 6AT 3A 5P",
        "COMMUTER 2,8 TDi 6AT 14A",
        "WAGON 2,8 TDi 6AT 10A",
        "2,8 TDi L2H2 6AT 3A 5P",
        "HILUX PICK - UP",
        "2,5 TDi 4X2 DX",
        "2,5 TDi 4X2 DX PACK",
        "2,5 TDi 4X4 DX",
        "2,5 TDi 4X4 DX PACK",
        "3,0 TDi 4X2 SR ABS",
        "3,0 TDi 4X2 SRV",
        "3,0 TDi 4X2 SRV CRO",
        "3,0 TDi 4X4 SR ABS",
        "3,0 TDi 4X4 SRV",
        "3,0 TDi 4X4 SRV CRO",
        "3,0 TDi 4X4 SRV AT",
        "3,0 TDi 4X4 SRV 5AT",
        "3,0 D-4D T 4X4 SRV LIMITED",
        "3,0 D-4D T 4X4 SRV LIMITED 5AT",
        "2,7 N WTi 4X2 SRV",
        "2,7 N WTi 4X2 SRV CRO",
        "2,7 N WTi 4X4 SRV",
        "2,7 N WTi 4X4 SRV CRO",
        "2,4 TDi 4X2 DX 6MT",
        "2,4 TDi 4X2 STD 6MT",
        "2,4 TDi 4X2 SR 6MT",
        "2,8 TDi 4X2 SRV 6MT",
        "2,8 TDi 4X2 SRV 6AT",
        "2,8 TDi 4X2 SRV PACK 6MT",
        "2,8 TDi 4X2 SRX 6MT",
        "2,8 TDi 4X2 SRX 6AT",
        "2,4 TDi 4X4 DX 6MT",
        "2,8 TDi 4X4 SR 6MT",
        "2,8 TDi 4X4 SRV 6MT",
        "2,8 TDi 4X4 SRV 6AT",
        "2,8 TDi 4X4 SRX 6MT",
        "2,8 TDi 4X4 SRX 6AT",
        "2,8 TDi 4X4 LIMITED 6MT",
        "2,8 TDi 4X4 LIMITED 6AT",
        "2,8 TDi 4X4 GR-S 6MT",
        "2,8 TDi 4X4 GR-S 6AT",
        "V6 VVTi 4X4 GR-S II 6AT",
        "C/C 2,4 TDi 4X2 DX 6MT",
        "2,4 TDi 4X2 SR 6AT",
        "C/C 2,4 TDi 4X4 DX 6MT",
        "2,8 TDi 4X4 SR 6AT",
        "2,8 TDi 4X4 GR-S III 6AT",
        "2,8 TDi 4X4 GR-S IV 6AT",
        "2,8 TDi 4X4 CONQUEST 6AT",
        "C/C 2,4 TDi 4X2 DX 6MT HAR",
        "2,4 TDi 4X2 DX 6MT HAR",
        "2,4 TDi 4X2 DX 6AT HAR",
        "2,4 TDi 4X2 SR 6MT HAR",
        "2,4 TDi 4X2 SR 6AT HAR",
        "2,8 TDi 4X2 SRV 6AT HAR",
        "2,8 TDi 4X2 SRX 6AT HAR",
        "C/C 2,4 TDi 4X4 DX 6MT HAR",
        "2,4 TDi 4X4 DX 6MT HAR",
        "2,4 TDi 4X4 DX 6AT HAR",
        "2,8 TDi 4X4 SR 6MT HAR",
        "2,8 TDi 4X4 SR 6AT HAR",
        "2,8 TDi 4X4 SRV 6MT HAR",
        "2,8 TDi 4X4 SRV 6AT HAR",
        "2,8 TDi 4X4 SRV + 6AT",
        "2,8 TDi 4X4 SRX 6AT HAR",
        "2,8 TDi 4X4 GR-S IV 6AT HAR",
        "HILUX PICK - UP COVER",
        "2,5 TDi 4X2 DX CERRADA",
        "2,5 TDi 4X2 DX PACK CERRADA",
        "2,5 TDi 4X2 DX VENTANAS",
        "2,5 TDi 4X2 DX PACK VENTANAS",
        "2,5 TDi 4X4 DX CERRADA",
        "2,5 TDi 4X4 DX PACK CERRADA",
        "2,5 TDi 4X4 DX VENTANAS",
        "2,5 TDi 4X4 DX PACK VENTANAS",
        "HILUX SW4",
        "3,0 TDi 4X4 SRV AT CRO",
        "3,0 TDi 4X4 SRV AT 5 CRO",
        "2,7 N WTi 4X2 AT CRO",
        "2,7 N WTi 4X2 AT CRO 7A",
        "2,8 TDi SR 4X4",
        "2,8 TDi SRX 4X4 7A",
        "2,8 TDi SRX 4X4 7A AT",
        "2,8 TDi DIAMOND 4X4 7A AT",
        "2,8 TDi SR 4X4 6AT",
        "2,8 TDi SRX 4X4 6MT 7A",
        "2,8 TDi SRX 4X4 6AT 7A",
        "2,8 TDi DIAMOND 4X4 6AT 7A",
        "2,8 TDi GR-SPORT 4X4 6AT 7A",
        "2,8 TDi SRX 4X4 6AT 7A HAR",
        "2,8 TDi DIAMOND 4X4 6AT 7A HAR",
        "2,8 TDi GR-SPORT 4X4 6AT 7A HAR",
        "Otro"
      ],
      "Hilux": [
        "Otro"
      ],
      "Innova": [
        "2,7 DUAL-VVTi SR 6AT",
        "2,7 DUAL-VVTi SRV 6AT",
        "Otro"
      ],
      "Land Cruiser": [
        "4,5 LC 200 AT",
        "4,5 VX 200 AT",
        "4,5 VX 200 AT F6",
        "3,3 V6 TD GR-S 300 10AT",
        "3,3 V6 TD VX 300 10AT",
        "4,0 V6 PRADO VX",
        "4,0 V6 PRADO VX AT",
        "4,0 V6 PRADO VX AT B6",
        "4,0 V6 PRADO TXL AT",
        "4,0 V6 PRADO TXL AT C5",
        "4,0 V6 PRADO VX AT SAFETY SENSE",
        "Otro"
      ],
      "RAV4": [
        "Otro"
      ],
      "SW4": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Volkswagen": {
      "Amarok": [
        "Otro"
      ],
      "Multivan": [
        "Otro"
      ],
      "Nivus": [
        "1,0 TSI 170 5MT",
        "1,0 TSI 200 6AT COMFORTLINE",
        "1,0 TSI 200 6AT COMFORTLINE PH4",
        "1,0 TSI 200 6AT HIGHLINE",
        "1,0 TSI 200 6AT HERO",
        "1,0 TSI 200 6AT OUTFIT",
        "1,0 TSI 200 6AT TRENDLINE",
        "Otro"
      ],
      "Saveiro": [
        "Otro"
      ],
      "Sharan": [
        "1,4 TSI BLUEMOTION COMFORTLINE",
        "2,0 TSI HIGHLINE DSG",
        "Otro"
      ],
      "Taos": [
        "1,4 TSI 250 COMFORTLINE TIPT",
        "1,4 TSI 250 HIGHLINE TIPT",
        "1,4 TSI 250 HIGHLINE BITONO TIPT",
        "1,4 TSI 250 HERO TIPT",
        "Otro"
      ],
      "T-Cross": [
        "1,6 TRENDLINE",
        "1,6 COMFORTLINE",
        "1,6 COMFORTLINE TIPT",
        "1,6 HIGHLINE TIPT",
        "1,6 STYLE EDITION TIPT",
        "1,6 HERO TIPT",
        "1,0 TSI 200 COMFORTLINE 6AT",
        "1,0 TSI 200 COMFORTLINE 6AT + PACK SAFE",
        "1,0 TSI 200 EXTREME 6AT",
        "1,0 TSI 200 HIGHLINE 6AT",
        "1,0 TSI 200 HIGHLINE 6AT BITONO",
        "1,0 TSI 200 HIGHLINE 6AT + PACK SAFE",
        "1,0 TSI 200 HIGHLINE 6AT BITONO + PACK SAFE",
        "170 TSI",
        "170 TSI TRENDLINE",
        "170 TSI TRENDLINE + PACK SAFE",
        "1,0 TSI 200 TRENDILINE 6AT",
        "1,0 TSI 200 TRENDILINE 6AT + PACK SAFE",
        "Otro"
      ],
      "Tera": [
        "1,6 MSI TREND",
        "1,6 MSI TREND PACK SAFE I",
        "170 TSI COMFORT AT6",
        "170 TSI COMFORT AT6 PACK SAFE II",
        "170 TSI HIGH AT6",
        "170 TSI OUTFIT AT6",
        "THE BEETLE",
        "2P 1,4 TSI DESIGN",
        "2P 1,4 TSI DESIGN DSG",
        "2P 2,0 TSI SPORT",
        "2P 2,0 TSI SPORT DSG",
        "CONV 2,0 TSI SPORT",
        "CONV 2,0 TSI SPORT DSG",
        "Otro"
      ],
      "Tiguan": [
        "2,0 TSI SPORT & STYLE",
        "2,0 TSI SPORT & STYLE TIPT",
        "2,0 TSI EXCLUSIVE",
        "2,0 TSI EXCLUSIVE TIPT",
        "2,0 TSI ELEGANCE",
        "2,0 TSI ELEGANCE TIPT",
        "2,0 TSI PREMIUM",
        "2,0 TSI PREMIUM TIPT",
        "2,0 TDi SPORT & STYLE TIPT",
        "2,0 TDi EXCLUSIVE TIPT",
        "2,0 TDi ELEGANCE TIPT",
        "2,0 TDi PREMIUM TIPT",
        "TIGUAN ALLSPACE",
        "1,4 TSI TRENDLINE DSG6",
        "2,0 TSI COMFORTLINE DSG7 4MOTION",
        "2,0 TSI COMFORTLINE DSG7 4MOTION T/SOLAR",
        "2,0 TSI HIGHLINE DSG7 4MOTION",
        "2,0 TDi HIGHLINE",
        "250 TSI DSG",
        "350 TSI COMFORTLINE 4MOTION DSG",
        "350 TSI HIGHLINE 4MOTION DSG",
        "350 TSI LIFE 4MOTION 7DSG",
        "250 TSI DSG7 LIFE",
        "250 TSI DSG7 R-LINE",
        "Otro"
      ],
      "Touareg": [
        "3,0 V6 TDi ELEGANCE",
        "3,0 V6 TDi LIFE",
        "3,0 V6 TDi STYLE",
        "3,0 V6 TDi PREMIUM",
        "3,0 V6 TDi PREMIUM 8TIPT",
        "3,6 V6 FSI ELEGANCE",
        "3,6 V6 FSI LIFE",
        "3,6 V6 FSI STYLE",
        "3,6 V6 STYLE AUX EXT",
        "3,6 V6 STYLE AUX INT",
        "3,6 V6 PREMIUM AUX EXT",
        "3,6 V6 PREMIUM AUX INT",
        "4,2 V8 AUX EXT",
        "4,2 V8 AUX INT",
        "4,2 V8 PREMIUM",
        "R5 TDi STYLE AUX EXT",
        "R5 TDi STYLE AUX INT",
        "R5 TDi PREMIUM AUX EXT",
        "R5 TDi PREMIUM AUX INT",
        "HYBRID",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Volvo": {
      "XC40": [
        "2,0 T5 AWD MOMENTUM 8AT",
        "2,0 T5 AWD R-DESIGN 8AT",
        "2,0 T4 KINETIC 8AT",
        "T4 FWD MOMENTUM 190HP",
        "T5 AWD R-DESING 247HP",
        "Otro"
      ],
      "XC60": [
        "3,0 T6 PLUS",
        "3,0 T6 HIGH PLUS",
        "3,0 T6 PREMIUM",
        "3,0 T6 LUXURY R-DESIGN",
        "2,0 T FWD PO",
        "2,0 T PLUS AT",
        "2,0 T5 HIGH",
        "2,0 T5 HIGH PLUS",
        "2,0 T5 HIGH LUXURY AWD",
        "2,0 T5 HIGH LUXURY FWD",
        "2,0 T5 INSCRIPTION FWD",
        "2,0 T5 INSCRIPTION AWD",
        "2,0 T5 MOMENTUM AWD NEW",
        "2,0 T6 INSCRIPTION FWD NEW",
        "2,0 T T8 AWD HIBRIDO RECARGABLE",
        "Otro"
      ],
      "XC90": [
        "2,5 D5 HIGH LUXURY",
        "2,0 T T6 HIGH LUXURY 8AT",
        "2,0 T T6 R DESIGN 8AT",
        "2,0 D5 MOMENTUM 8AT",
        "2,0 T6 INSCRIPTION 8AT",
        "2,0 T6 R DESIGN 8AT",
        "2,0 T T8 AWD HIBRIDO RECARGABLE",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Zanella": {
      "Force Truck": [
        "CHASIS 1,2 MT",
        "1,2 MT",
        "Otro"
      ],
      "Z Truck": [
        "1,2 MT",
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    }
  },
  "Moto / UTV / Cuatriciclo": {
    "Honda": {
      "Wave": [
        "Otro"
      ],
      "XR": [
        "Otro"
      ],
      "CB": [
        "Otro"
      ],
      "Africa Twin": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Yamaha": {
      "YBR": [
        "Otro"
      ],
      "FZ": [
        "Otro"
      ],
      "XTZ": [
        "Otro"
      ],
      "MT": [
        "Otro"
      ],
      "R3": [
        "Otro"
      ],
      "Raptor (Cuatri)": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Kawasaki": {
      "Ninja": [
        "Otro"
      ],
      "Versys": [
        "Otro"
      ],
      "Z": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "KTM": {
      "Duke": [
        "Otro"
      ],
      "Adventure": [
        "Otro"
      ],
      "RC": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "BMW": {
      "G": [
        "Otro"
      ],
      "F": [
        "Otro"
      ],
      "R": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Ducati": {
      "Monster": [
        "Otro"
      ],
      "Multistrada": [
        "Otro"
      ],
      "Scrambler": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Harley-Davidson": {
      "Sportster": [
        "Otro"
      ],
      "Fat Boy": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Can-Am (UTV)": {
      "Maverick": [
        "Otro"
      ],
      "Defender": [
        "Otro"
      ],
      "Commander": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Polaris (UTV)": {
      "RZR": [
        "Otro"
      ],
      "Ranger": [
        "Otro"
      ],
      "General": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "CF Moto (UTV)": {
      "ZForce": [
        "Otro"
      ],
      "UForce": [
        "Otro"
      ],
      "CForce (Cuatri)": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Bajaj": {
      "Rouser": [
        "Otro"
      ],
      "Dominar": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Benelli": {
      "TNT": [
        "Otro"
      ],
      "TRK": [
        "Otro"
      ],
      "Leoncino": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Zanella": {
      "Sapucai": [
        "Otro"
      ],
      "Ceccato": [
        "Otro"
      ],
      "Styler": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    }
  },
  "Lanchas / Yate / Barco": {
    "Bermuda": {
      "Classic": [
        "Otro"
      ],
      "Caribbean": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Regnicoli": {
      "630": [
        "Otro"
      ],
      "Dorado": [
        "Otro"
      ],
      "Sporty": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Canestrari": {
      "160": [
        "Otro"
      ],
      "195": [
        "Otro"
      ],
      "215": [
        "Otro"
      ],
      "275": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Quicksilver": {
      "1600": [
        "Otro"
      ],
      "1750": [
        "Otro"
      ],
      "2000": [
        "Otro"
      ],
      "2400": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Pagliettini": {
      "Comandante": [
        "Otro"
      ],
      "Gacela": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Yamaha (Moto de agua)": {
      "WaveRunner": [
        "Otro"
      ],
      "SuperJet": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Sea-Doo (Moto de agua)": {
      "Spark": [
        "Otro"
      ],
      "GTI": [
        "Otro"
      ],
      "GTX": [
        "Otro"
      ],
      "RXP-X": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Bayliner": {
      "Cuddy": [
        "Otro"
      ],
      "Bowrider": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Sea Ray": {
      "Sundancer": [
        "Otro"
      ],
      "SDX": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    }
  },
  "Trailer": {
    "Fabricación Artesanal": {
      "Un eje": [
        "Otro"
      ],
      "Doble eje": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Homologado": {
      "Carga": [
        "Otro"
      ],
      "Náutico": [
        "Otro"
      ],
      "Vehículo": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    }
  },
  "Chocado": {
    "Toyota": {
      "Otro": [
        "Otro"
      ]
    },
    "Volkswagen": {
      "Otro": [
        "Otro"
      ]
    },
    "Ford": {
      "Otro": [
        "Otro"
      ]
    },
    "Chevrolet": {
      "Otro": [
        "Otro"
      ]
    },
    "Fiat": {
      "Otro": [
        "Otro"
      ]
    },
    "Renault": {
      "Otro": [
        "Otro"
      ]
    },
    "Peugeot": {
      "Otro": [
        "Otro"
      ]
    }
  },
  "De colección": {
    "Ford": {
      "Falcon": [
        "Otro"
      ],
      "A": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Chevrolet": {
      "400": [
        "Otro"
      ],
      "Chevy": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Dodge": {
      "GTX": [
        "Otro"
      ],
      "Polara": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "IKA": {
      "Torino": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ],
      "Buggy": [
        "Burro Buggy",
        "Puelche",
        "Otro"
      ]
    },
    "Fiat": {
      "125": [
        "Otro"
      ],
      "128": [
        "Otro"
      ],
      "600": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Mercedes-Benz": {
      "Pagoda": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Porsche": {
      "911": [
        "Otro"
      ],
      "Otro": [
        "Otro"
      ]
    },
    "Volkswagen": {
      "Karmann Ghia": [
        "Otro"
      ],
      "Escarabajo": [
        "Otro"
      ]
    }
  }
};

// Fallback logic for old code that might expect flat objects
export const BRANDS_MODELS_DATA = VEHICLE_DATA_MAP["Autos"]; // Default to Autos for legacy compatibility

export const MOTORIZATION_DATA: { [model: string]: string[] } = {};
