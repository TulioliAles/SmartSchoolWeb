import { Professor } from './../models/Professor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';
  public profSelecionado: Professor;

  public prof = [
    {id:1, nome: 'Daniele', disciplina: 'Engenharia'},
    {id:2, nome: 'Fernando', disciplina: 'POO'},
    {id:3, nome: 'Joaquim', disciplina: 'Linux'},
    {id:4, nome: 'Paulo', disciplina: 'SQL'},
  ]

  profSelect(prof: Professor){
    this.profSelecionado = prof;
  }

  voltar(){
    this.profSelecionado = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
