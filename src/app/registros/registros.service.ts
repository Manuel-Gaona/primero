import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {
  public registros = [
    {
      id: 1,
      nombre: 'Manuel',
      foto: 'https://cdn0.bioenciclopedia.com/es/posts/1/1/0/osos_11_600_square.jpg',
      observaciones: ['Trabajador destacado', 'No ve el futbol']
    },
    {
      id: 2,
      nombre: 'Sara',
      foto: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png',
      observaciones: ['No es puntual', 'Ella si ve el futbol']
    },
    {
      id: 3,
      nombre: 'Maria',
      foto: 'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png',
      observaciones: ['Trabajador destacado', 'No ve el futbol']
    }
  ];
  constructor() {}
  // Muestra todos los registros
  getRegistros() {
    return this.registros;
  }
  // Muestra un registro
  getRegistro() {}
  // Añaade un registro
  addRegistro() {}
  // Elimina un registro
  deleteRegistro() {}
}
