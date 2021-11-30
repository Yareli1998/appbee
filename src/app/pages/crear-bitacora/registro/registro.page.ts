import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  no_de_caja: string;
  

  registro ={
    no_de_caja: '',
    no_de_colmenaorigen: '',
    fecha: ''
  }
  constructor() { }

  ngOnInit() {
  }

}
