// Crea un codigo para filtrar los numeros pares de un array con tipado de typescript

export const filterNumbers = (numbers: number[]): number[] =>
	numbers.filter(number => number % 2 === 0)
