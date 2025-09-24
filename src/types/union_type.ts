let userId: number | string;
userId = 12345;
console.log(`User ID: ${userId}`);

userId = "user_67890";
console.log(`User ID: ${userId}`);

// userId = true; // Erro: Tipo booleano não é atribuível a tipo 'string | number'.