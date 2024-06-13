import { Component } from '@angular/core';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrl: './livro-lista.component.css'
})
export class LivroListaComponent {
  //Atributo editoras que inicializa um vetor vazio.
  public editoras: Array<Editora> = [];
  //Atributo livros que inicializa um vetor vazio.
  public livros: Array<Livro> = [];

  //Serviços injetados através do construtor.
  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService
  ) {}
  //Método que preenche os vetores editoras e livros.
  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }
  //Método excluir que chama servLivros.
  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  }
  //Método obterNome que chama servEditora.
  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  }
}
