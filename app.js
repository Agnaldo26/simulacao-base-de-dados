const livros = require('./database'); /*importando // ter acesso à base de livros*/


// pegar o input

const readline = require('readline-sync');

const entradaInicial = readline.question('Deseja buscar um livro? S/N \n');

// Se for Sim, mostra as categorias disponíveis, e pergunta qual categoria ela escolhe

if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis: \n');
    console.log('Produtividade', '/História brasileira','/Américas','/Estilo de vida','/Tecnologia');
    const entradaCategoria = readline.question('Qual categoria voce escolhe? \n');
    
    const retorno = livros.filter(livro => livro.categoria == entradaCategoria);

    console.table(retorno);
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);
    console.log('Essas são todos os livros disponíveis: \n');
    console.table(livrosOrdenados)
}

// Se Não, mostra todos os livros em ordem crescente pela quantidade de páginas
