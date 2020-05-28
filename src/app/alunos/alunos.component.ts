import { Aluno } from './../models/Aluno';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;

  public alunos = [
    {id:1, nome: 'Maria', sobrenome: 'Andrade', telefone: 33215564},
    {id:2, nome: 'Roberta', sobrenome: 'Vieira', telefone: 43215111},
    {id:3, nome: 'Vilma', sobrenome: 'Bastos', telefone: 33505000},
    {id:4, nome: 'Antonia', sobrenome: 'Camila', telefone: 23211111},
    {id:5, nome: 'Roberto', sobrenome: 'Joen', telefone: 99915564},
    {id:6, nome: 'Márcio', sobrenome: 'Silva', telefone: 77211264},
  ]

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
  }

  voltar(){
    this.alunoSelecionado = null;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
