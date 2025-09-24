// Tipagem dinâmica

let curso = "TypeScript"; // Quando passa o valor direto, o TS infere o tipo
console.log(curso);

// curso = 1234; // Dá erro, pois o TS infere o tipo string
// console.log(curso);

let curso2: string | number = "TypeScript"; // Quando declara o tipo, pode ser alterado
console.log(curso2);

curso2 = 1234; // Agora pode ser número
console.log(curso2);