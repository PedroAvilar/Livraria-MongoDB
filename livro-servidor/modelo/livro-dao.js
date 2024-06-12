//Importação de livro-schema.
const Livro = require("./livro-schema");

//Função para obter os livros.
const obterLivros = async () => {
    try {
        const livros = await Livro.find();
        return livros;
    } catch (error) {
        console.log(error);
    }
};

//Função para incluir um livro.
const incluir = async (livro) => {
    try {
        await Livro.create(livro);
    } catch (error) {
        console.log(error);
    }
};

//Função para excluir um livro.
const excluir = async (codigo) => {
    try {
        await Livro.deleteOne({_id: codigo})
    } catch (error) {
        console.log(error);
    }
};

module.exports = {obterLivros, incluir, excluir};
