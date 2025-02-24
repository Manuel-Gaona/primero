import { Injectable } from '@angular/core';

import {Registro} from './registro.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  public registros:Registro[] = [
    {
      id: '1',
      nombre: 'Manuel',
      foto: 'https://cdn0.bioenciclopedia.com/es/posts/1/1/0/osos_11_600_square.jpg',
      observaciones: ['Trabajador destacado', 'No ve el futbol']
    },
    {
      id: '2',
      nombre: 'Sara',
      foto: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png',
      observaciones: ['HOLA', 'ADIOS']
    },
    {
      id: '3',
      nombre: 'Maria',
      foto: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png',
      observaciones: ['tranquila', 'no habla mucho']
    }
  ];
  constructor() {}
  // Muestra todos los registros
  getRegistros() {
    return [...this.registros];
  }
  // Muestra un registro
  getRegistro(registroId: string) {
    return {...this.registros.find(registro => {
      return registro.id === registroId;
    })};
  }
  // Añaade un registro
  addRegistro() {}
  // Elimina un registro
  deleteRegistro(id: string) {
    this.registros = this.registros.filter(registro => {
      return registro.id !== id;
    });
  }
}
