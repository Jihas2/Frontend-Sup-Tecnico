import { Component } from '@angular/core';
import { TecnicosService } from '../services/tecnicos.service';
import { Tecnico } from '../models/tecnico';

@Component({
  selector: 'app-lista-tecnicos',
  templateUrl: './lista-tecnicos.component.html',
  styleUrl: './lista-tecnicos.component.scss'
})
export class ListaTecnicosComponent {

  dados: Tecnico[] = []; // Variável para armazenar os dados

  constructor(private tecnicosService: TecnicosService) {}

  ngOnInit(): void {
    this.tecnicosService.getLista().subscribe({
      next: (response) => {
        this.dados = response; // Armazena a resposta na variável dados
      },
      error: (error) => {
        console.error('Erro ao obter dados:', error);
      }
    });
  }

}