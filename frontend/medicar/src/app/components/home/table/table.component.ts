import { Component, OnInit } from '@angular/core';
import {Consultas} from '../../../models/consultas';



@Component({
  selector: 'medicar-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  consultas: Consultas[] = [
    {
    especialidade: 'Especialidade',
    profissional: 'Joao Willian Lemos Celedonio',
    data: '21/12/1221',
    hora: '13:00'
    },
    {
      especialidade: 'Especialidade',
      profissional: 'Joao Willian Lemos Celedonio',
      data: '21/12/1221',
      hora: '13:00'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
