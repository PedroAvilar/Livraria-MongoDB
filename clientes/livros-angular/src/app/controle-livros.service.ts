import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  //Atributo livros com elementos no formato JSON.
  private livros: Array<Livro> = [
    {codigo: 1000, codEditora: 789, titulo: "JavaScript", 
    resumo: "Conheça a história da linguagem e sua sintaxe com exemplos.", autores: ["Will", "Pedro"]},
    {codigo: 1001, codEditora:456, titulo: "CSS", 
    resumo: "Exercícios práticos para se tornar um expert na formatação de sites.", autores: ["Wilson", "Aráujo"]},
    {codigo: 1002, codEditora: 123, titulo: "HTML", 
    resumo: "Explore sua evolução e conheça todas as tags disponíveis.", autores: ["Pedro", "Avilar"]}
  ]
  //Método que retorna o vetor de livros.
  obterLivros() {
    return this.livros;
  }
  //Método que adiciona um livro ao vetor de livros incrementando o código.
  incluir(novoLivro: Livro): void {
    const maiorCodigo = this.livros.reduce((maior, livro) => (livro.codigo > maior ? livro.codigo : maior), 0);
    novoLivro.codigo = maiorCodigo + 1;
    this.livros.push(novoLivro);
  }
  //Método que exclui um livro do vetor de livros pelo código.
  excluir(codigo: Number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
  constructor() { }
}
