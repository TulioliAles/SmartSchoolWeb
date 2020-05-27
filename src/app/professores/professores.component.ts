import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public titulo = 'Professores';
  public profSelecionado: string;

  public prof = [
    {id:1, nome: 'Daniele', disciplina: 'Engenharia'},
    {id:2, nome: 'Fernando', disciplina: 'POO'},
    {id:3, nome: 'Joaquim', disciplina: 'Linux'},
    {id:4, nome: 'Paulo', disciplina: 'SQL'},
  ]

  profSelect(prof: any){
    this.profSelecionado = prof.nome;
  }

  voltar(){
    this.profSelecionado = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
