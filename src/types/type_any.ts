// Evitar ao máximo o uso do tipo 'any', pois ele desativa a verificação de tipos do TypeScript.

let precoProduto;

precoProduto = 29.99;
console.log(`Preço do produto: R$${precoProduto}`);
precoProduto = "29.99";
console.log(`Preço do produto: R$${precoProduto}`);
precoProduto = true;
console.log(`Preço do produto: R$${precoProduto}`);
precoProduto = { valor: 29.99, moeda: "BRL" };
console.log(`Preço do produto: R$${precoProduto.valor} ${precoProduto.moeda}`);