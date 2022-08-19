const usuario = {
    email: 'seuemail@email.com'
};

// Criando atributo não existente
usuario.nome = 'Aluno';
usuario.senha = 12345678;

console.log(usuario);
// console.log(usuario.email);
// Se tenta acessa atributo não existente gera um undefined
// console.log(usuario.nome);