//Importação da conexão.
const banco = require("./conexao");

//Definição da estrutura do banco de dados.
const LivroSchema = new banco.Schema({
    _id: banco.Schema.Types.ObjectId,
    titulo: String,
    codEditora: Number,
    resumo: String,
    autores: [String]
})

//Associação de LivroSchema e a coleção livros.
const Livro = banco.model("Livro", LivroSchema, "livros");

module.exports = Livro;