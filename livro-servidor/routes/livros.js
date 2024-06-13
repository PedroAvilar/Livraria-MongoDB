//Importações e referências.
const banco = require("../modelo/conexao");
const {obterLivros, incluir, excluir} = require("../modelo/livro-dao")
const express = require("express");
const Livro = require('../modelo/livro-schema');

//Objeto Router.
const router = express.Router();

//Rota raiz para obter os livros, modo GET.
router.get("/", async (req, res) => {
    try {
        const livros = await obterLivros();
        res.json(livros);
    } catch (error) {
        res.status(500).json({message: "Erro ao obter os livros.", error});
    }
});

//Rota raiz para incluir um livro, modo POST.
router.post("/", async (req, res) => {
    try {
        const livro = req.body;
        //Variável auxiliar para substituir o _id string recebido do front para um ObjectId aceito pelo MongoDB.
        const novoLivro = new Livro({
            _id: new banco.Types.ObjectId,
            codEditora: livro.codEditora,
            titulo: livro.titulo,
            resumo: livro.resumo,
            autores: livro.autores
          });
        await incluir(novoLivro);
        res.json({message: "Livro incluído com sucesso."})
    } catch (error) {
        res.status(500).json({message: "Erro ao incluir o livro.", error})
    }
});

//Rota raiz para excluir um livro, modo DELETE.
router.delete("/:id", async (req, res) => {
    try {
        const codigo = req.params.id;
        await excluir(codigo);
        res.json({message: "Livro excluído com sucesso."})
    } catch (error) {
        res.status(500).json({message: "Erro ao excluir o livro.", error})
    }
});

module.exports = router;
