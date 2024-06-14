import Livro from "../modelo/Livro";

//Endereço de base do servidor express.
const baseURL = "http://localhost:3030/livros";

//Compatibiliza o tipo de Livro às chamadas para o sevidor.
interface LivroMongo {
    _id: String | null;
    codEditora: number;
    titulo: String;
    resumo: String;
    autores: String[];
}

//Classe com métodos para retornar os livros, incluir ou excluir.
class ControleLivro {
    obterLivros = async () => {
        try {
            const resposta = await fetch(baseURL, {method: "GET"});
            const respostaJSON = await resposta.json();
            const livros = respostaJSON.map((livro: any) => new Livro(
                livro._id,
                livro.codEditora,
                livro.titulo,
                livro.resumo,
                livro.autores
            ));
            return livros;
        } catch (error) {
            console.log(error);
            return [];
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
                    "Content-Type": "application/json"
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