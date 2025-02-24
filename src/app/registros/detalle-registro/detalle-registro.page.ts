import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Registro} from '../registro.model';
import {RegistrosService} from '../registros.service';

import {AlertController} from '@ionic/angular';

@Component({
  standalone: false,
  selector: 'app-detalle-registro',
  templateUrl: './detalle-registro.page.html',
  styleUrls: ['./detalle-registro.page.scss'],
})
export class DetalleRegistroPage implements OnInit {

  registro:any = [];

  constructor(private activateRoute:ActivatedRoute, 
              private registrosService:RegistrosService, 
              private router:Router,
              private alertCtrl:AlertController
    ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      let recipeId:string = String(paramMap.get('registroId'));
      this.registro = this.registrosService.getRegistro(recipeId);
      console.log(this.registro);
    });
  }

  async deleteRegistro() {
    const alertElement = await this.alertCtrl.create({
      header: '¿Estás seguro?',
      message: '¿Quieres eliminar este registro?',
      buttons: [
        {text: 'Cancelar',role: 'cancel'},
        {text: 'Eliminar',handler: () => {
            this.registrosService.deleteRegistro(this.registro.id);
            this.router.navigate(['/registros']);
          }
        }
      ]
    })
    await alertElement.present()
  }
}
