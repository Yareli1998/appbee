import { Component, OnInit } from '@angular/core';

 interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
 }

 @Component({
  selector: 'app-crear-bitacora',
  templateUrl: './crear-bitacora.page.html',
  styleUrls: ['./crear-bitacora.page.scss'],
 })
export class CrearBitacoraPage implements OnInit {

  componentes: Componente[] = [

    {
      icon: '',
      name: 'Datos Generales',
      redirectTo:'/datos-generales'
    },
    
    {
      icon: '',
      name: 'Registro',
      redirectTo:'/registro'
    },
    {
      icon: '',
      name: 'Manejo Realizado',
      redirectTo:'/manejo-realizado'
    },
    {
      icon: '',
      name: 'Salud Colmena',
      redirectTo:'/salud-colmena'
    },
    {
      icon: '',
      name: 'Observaciones',
      redirectTo:'/observaciones'
    },
    {
      icon: '',
      name: 'Otros Gastos',
      redirectTo:'/otros-gastos'
    },
    {
      icon: '',
      name: 'Producción',
      redirectTo:'/produccion'
    },
  ]
  
  ngOnInit(): void {
    
  }
  
    
}
