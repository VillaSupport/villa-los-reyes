/**
 * Obtiene un subconjunto de elementos de forma aleatoria y circular.
 * @param array El array original de elementos.
 * @param size El tamaño de la muestra que deseas obtener.
 * @returns Un nuevo array con los elementos seleccionados.
 */
export const getRandomCircularSlice = <T>(array: T[], size: number): T[] => {
  const length = array.length;
  if (length === 0) return [];

  // 1. Elegimos un índice de inicio aleatorio (x) entre 0 y length - 1
  const startIndex = Math.floor(Math.random() * length);

  // 2. Creamos el nuevo array usando el operador de módulo para el ciclo circular
  return Array.from({ length: size }, (_, i) => {
    return array[(startIndex + i) % length];
  });
};