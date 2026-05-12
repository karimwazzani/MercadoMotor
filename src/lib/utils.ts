/**
 * Formatea un string para que la primera letra de cada palabra sea mayúscula
 * y el resto minúscula (Title Case).
 */
export function formatLocation(text: string | null | undefined): string {
  if (!text) return "";
  
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
