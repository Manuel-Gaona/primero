import { Component, OnInit } from '@angular/core';

import {Registro} from './registro.model';
import {RegistrosService} from './registros.service';

@Component({
  standalone: false,
  selector: 'app-registros',
  templateUrl: './registros.page.html',
  styleUrls: ['./registros.page.scss'],
})
export class RegistrosPage implements OnInit {

  registros:Registro[] = [];

  constructor(private registroService:RegistrosService) { }

  ngOnInit() {
    this.registros = this.registroService.getRegistros();
  }
  ionViewWillEnter() {
    this.registros = this.registroService.getRegistros();
  }
}
