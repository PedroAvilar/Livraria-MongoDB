import Livro from "../modelo/Livro";

//Endereço de base do servidor express.
const baseURL = "http://localhost:3030/livros";

//Compatibiliza o tipo de Livro às chamadas para o sevidor.
interface LivroMongo {
    _id: string | null;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];
}

//Classe com métodos para retornar os livros, incluir ou excluir.
class ControleLivro {
    obterLivros = async () => {
        try {
            const resposta = await fetch(baseURL, {method: "GET"});
            const respostaJSON = await resposta.json();
            return respostaJSON.map((livro: any) => {
                new Livro(
                    livro._id,
                    livro.codEdditora,
                    livro.titulo,
                    livro.resumo,
                    livro.autores
                )
            })
        } catch (error) {
            console.log(error);
        }
    }
    incluir = async (livro: Livro) => {
        const livroMongo: LivroMongo = {
            _id: livro.codigo,
            codEditora: livro.codEditora,
            titulo: livro.titulo,
            resumo: livro.resumo,
            autores: livro.autores
        };
        try {
            const resposta = await fetch(baseURL, {
                method: "POST",
                headers: {
                    "Contenty-Type": "application/json"
                },
                body: JSON.stringify(livroMongo)
            });
            return resposta.ok;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    excluir = async (codigo: string) => {
        try {
            const resposta = await fetch(`${baseURL}/${codigo}`, {method: "DELETE"});
            return resposta.ok
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
export default ControleLivro;