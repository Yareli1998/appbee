 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produccion',
  templateUrl: './produccion.page.html',
  styleUrls: ['./produccion.page.scss'],
})
export class ProduccionPage implements OnInit {


  produccion ={
    cosecha: '',
  fecha_cosecha  : ''
  }
  constructor() { }

  ngOnInit() {
  }

}
