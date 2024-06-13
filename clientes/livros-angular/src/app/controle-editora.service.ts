import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root'
})
export class ControleEditoraService {
  //Atributo editoras com elementos no formato JSON.
  public editoras: Array<Editora> = [
    {codEditora: 123, nome: "Editora Janeiro"},
    {codEditora: 456, nome: "Editora Fevereiro"},
    {codEditora: 789, nome: "Editora Março"}
  ]
  //Método que retorna o nome da editora pelo código.
  getNomeEditora(codEditora: number) {
    const editora = this.editoras.filter((editora) => editora.codEditora === +codEditora)[0];
    return editora ? editora.nome : 'Desconhecida';
  }
  //Método que retorna o vetor das editoras.
  getEditoras() {
    return this.editoras;
  }
  constructor() { }
}
