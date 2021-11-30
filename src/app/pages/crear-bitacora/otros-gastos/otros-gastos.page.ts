import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otros-gastos',
  templateUrl: './otros-gastos.page.html',
  styleUrls: ['./otros-gastos.page.scss'],
})
export class OtrosGastosPage implements OnInit {


  gastos ={
    producto1: '',
    gasto1: '',
    producto2: '',
    gasto2:''
  }
  constructor() { }

  ngOnInit() {
  }

}
