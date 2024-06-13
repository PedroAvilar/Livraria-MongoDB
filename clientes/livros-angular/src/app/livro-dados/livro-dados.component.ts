import { Component } from '@angular/core';
import { Livro } from '../livro';
import { Editora } from '../editora';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrl: './livro-dados.component.css'
})
export class LivroDadosComponent {
  //Atributo livro instanciado via construtor.
  public livro: Livro;
  //Atributo autoresForm que inicializa vazio.
  public autoresForm:string = "";
  //Atributo editoras que inicializa um vetor vazio.
  public editoras: Array<Editora> = [];

  //Serviços injetados através do construtor.
  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {
    this.livro = new Livro(0, 0, "", "", []);
  }
  //Método que preenche o vetor de editoras.
  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
  }
  /*Método incluir que preenche o aributo autores e
  invoca incluir de controle-livros.service.*/
  incluir = (): void => {
    this.livro.autores = this.autoresForm.split("\n").filter(author => author.trim() !== '');
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl("/lista");
  }
}
