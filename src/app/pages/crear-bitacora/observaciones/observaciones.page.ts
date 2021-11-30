import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.page.html',
  styleUrls: ['./observaciones.page.scss'],
})
export class ObservacionesPage implements OnInit {


  observacion ={
    poblacion: '',
    cria: '',
    limpieza: '',
    observaciones:'',
    otra:'',
    revision:''
  }

  constructor() { }

  ngOnInit() {
  }

}
