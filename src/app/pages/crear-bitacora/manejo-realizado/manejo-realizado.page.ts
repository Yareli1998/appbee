import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manejo-realizado',
  templateUrl: './manejo-realizado.page.html',
  styleUrls: ['./manejo-realizado.page.scss'],
})
export class ManejoRealizadoPage implements OnInit {


  actividad: string;
  

  manejo ={
    alimentacion: '',
    cantidad: '',
    gasto: ''
  }

  constructor() { }

  ngOnInit() {
  }

}
