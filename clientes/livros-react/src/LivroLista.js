import ControleLivro from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import React, {useState, useEffect} from "react";

//Instâncias das classes.
const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

//Componente para a linha com informações do livro e botão de excluir.
function LinhaLivro (props) {
    const {livro, excluir} = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);
    return (
        <tr>
            <td>
                <div className="d-flex flex-column">
                    <span>{livro.titulo}</span>
                    <button type="button" className="btn btn-danger col-md-6" onClick={() => excluir(livro.codigo)}>Excluir</button>
                </div>
            </td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>{livro.autores.map((autor, index) => (<li key = {index}>{autor}</li>))}</td>
        </tr>
    )
}

//Componente para exibir o catálogo de livros em uma tabela.
function LivroLista () {
    const [livros, setLivros] = useState ([]);
    const [carregado, setCarregado] = useState (false);
    useEffect (() => {
        if (!carregado){
            controleLivro.obterLivros()
            .then((livros) => {
                setLivros(livros);
                setCarregado(true);
            })
        }
    }, [carregado]);

    //Método para excluir o livro chamado pelo botão.
    const excluir = (codigo) => {
        controleLivro.excluir(codigo)
        .then(() => {
            setCarregado (false);
        })
    };

    //Retorna o nome da tabela, seu cabeçalho e os livros com botão de exclusão.
    return (
        <div className="container">
            <main>
                <h1 className="my-3">Catálogo de livros</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="bg-dark text-white col-2 text-left p-2">Título</th>
                            <th className="bg-dark text-white col-6 text-left p-2">Resumo</th>
                            <th className="bg-dark text-white col-2 text-left p-2">Editora</th>
                            <th className="bg-dark text-white col-2 text-left p-2">Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro, index) => (
                            <LinhaLivro key = {index} livro = {livro} excluir = {excluir}/>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    )
}
export default LivroLista;