import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.page.html',
  styleUrls: ['./convertidor.page.scss'],
})
export class ConvertidorPage implements OnInit {
  cantidadDinero: number = 0;
  tipoMoneda:string="";
  opcionSeleccionada: string = "";
  resultadoConversion: number = 0;

  constructor(private alertcontroller:AlertController) {}

  ngOnInit() {

  }

  conversion() {
    if (this.cantidadDinero <= 0) {
      this.mostrarMensaje('inserta un valor valido');
      return;
    }
    if(this.tipoMoneda === 'dolarP'){
      if(this.opcionSeleccionada === 'opcion1'){
        this.resultadoConversion = this.cantidadDinero * 0.93;
      }else if(this.opcionSeleccionada === 'opcion2'){
        this.resultadoConversion = this.cantidadDinero * 1;
      }else if(this.opcionSeleccionada === 'opcion3'){
        this.resultadoConversion = this.cantidadDinero * 82.99;
      }else if(this.opcionSeleccionada === 'opcion4'){
      this.resultadoConversion = this.cantidadDinero * 6.85;
      }else if(this.opcionSeleccionada === 'opcion5'){
      this.resultadoConversion = this.cantidadDinero * 17.09;
      }
    }else if(this.tipoMoneda === 'euroP'){
      if(this.opcionSeleccionada === 'opcion1'){
        this.resultadoConversion = this.cantidadDinero * 1;
      }else if(this.opcionSeleccionada === 'opcion2'){
        this.resultadoConversion = this.cantidadDinero * 1.08;
      }else if(this.opcionSeleccionada === 'opcion3'){
        this.resultadoConversion = this.cantidadDinero * 89.49;
      }else if(this.opcionSeleccionada === 'opcion4'){
      this.resultadoConversion = this.cantidadDinero * 7.39;
      }else if(this.opcionSeleccionada === 'opcion5'){
      this.resultadoConversion = this.cantidadDinero * 18.41;
      }
    }else if(this.tipoMoneda === 'pesoP'){
      if(this.opcionSeleccionada === 'opcion1'){
        this.resultadoConversion = this.cantidadDinero * 0.054;
      }else if(this.opcionSeleccionada === 'opcion2'){
        this.resultadoConversion = this.cantidadDinero * 0.058;
      }else if(this.opcionSeleccionada === 'opcion3'){
        this.resultadoConversion = this.cantidadDinero * 4.85;
      }else if(this.opcionSeleccionada === 'opcion4'){
      this.resultadoConversion = this.cantidadDinero * 0.40;
      }else if(this.opcionSeleccionada === 'opcion5'){
      this.resultadoConversion = this.cantidadDinero * 1;
      }
    }else if(this.tipoMoneda === 'bolivarP'){
      if(this.opcionSeleccionada === 'opcion1'){
        this.resultadoConversion = this.cantidadDinero * 0.13;
      }else if(this.opcionSeleccionada === 'opcion2'){
        this.resultadoConversion = this.cantidadDinero * 0.14;
      }else if(this.opcionSeleccionada === 'opcion3'){
        this.resultadoConversion = this.cantidadDinero * 11.92;
      }else if(this.opcionSeleccionada === 'opcion4'){
      this.resultadoConversion = this.cantidadDinero * 1;
      }else if(this.opcionSeleccionada === 'opcion5'){
      this.resultadoConversion = this.cantidadDinero * 2.45;
      }

    }else if(this.tipoMoneda === 'rupiaP'){
      if(this.opcionSeleccionada === 'opcion1'){
        this.resultadoConversion = this.cantidadDinero * 0.011;
      }else if(this.opcionSeleccionada === 'opcion2'){
        this.resultadoConversion = this.cantidadDinero * 0.012;
      }else if(this.opcionSeleccionada === 'opcion3'){
        this.resultadoConversion = this.cantidadDinero * 1;
      }else if(this.opcionSeleccionada === 'opcion4'){
      this.resultadoConversion = this.cantidadDinero * 0.083;
      }else if(this.opcionSeleccionada === 'opcion5'){
      this.resultadoConversion = this.cantidadDinero * 0.21;
      }
    }else{
     this.mostrarMensaje('no valido');
       
    }
  }
    async mostrarMensaje(mensaje:string) {
      const alert = await this.alertcontroller.create({
        header: 'Error',
        message: mensaje,
        buttons: ['OK']
      });
  
      await alert.present();
    }
    
  
}
