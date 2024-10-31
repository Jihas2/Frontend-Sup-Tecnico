import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicosService {

  private apiUrl = 'http://localhost:8080/tecnico'; // URL do endpoint
  private listaCache: Tecnico[] | null = null; // Cache para armazenar dados temporariamente

  constructor(private http: HttpClient) {}

  // Método para obter dados da API, usando cache
  getLista(): Observable<Tecnico[]> {
    if (this.listaCache) {
      // Se os dados já estão no cache, retorna-os diretamente
      return of(this.listaCache);
    } else {
      // Se não estão no cache, faz a requisição e armazena o resultado no cache
      return this.http.get<Tecnico[]>(this.apiUrl + "/todos").pipe(
        tap(data => this.listaCache = data) // Armazena no cache
      );
    }
  }
}