import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salud-colmena',
  templateUrl: './salud-colmena.page.html',
  styleUrls: ['./salud-colmena.page.scss'],
})
export class SaludColmenaPage implements OnInit {



    salud ={
    tratamiento: '',
    dosis: '',
    gasto: ''
  }
  constructor() { }

  ngOnInit() {
  }

}
