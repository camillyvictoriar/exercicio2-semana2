import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  Titulo: String = 'Teste de Interpolação';

  colaborador: colaborador = {
    id: 7,
    nome: 'Nathan Carlos Exercicio',
    salario: 4500,
    cargo: 'Dev PI'
  }

  
  ngOnInit(): void {
  
  }

}

export interface colaborador {

  id: number;
  nome: string;
  salario: number;
  cargo: string;

}
