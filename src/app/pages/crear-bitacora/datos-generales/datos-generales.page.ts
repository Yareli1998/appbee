import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-generales',
  templateUrl: './datos-generales.page.html',
  styleUrls: ['./datos-generales.page.scss'],
})
export class DatosGeneralesPage implements OnInit {

  responsable: string;
  

  datosgenerales ={
    ubicacion: '',
    bitacora: '',
    apiario: '',
    fecha:''
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log('Form submit');
    console.log(this.datosgenerales);

  }

}
