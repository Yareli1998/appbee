import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
interface Componente{
  icon: string;
  name: string;
  redirectTo: string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [

    {
      icon: 'calendar',
      name: 'Agenda',
      redirectTo:'/agenda'
    },
    
    {
      icon: 'albums',
      name: 'Ver bitacora',
      redirectTo:'/ver-bitacora'
    },
    
    {
      icon: 'add-circle',
      name: 'Crear Bitacora',
      redirectTo:'/crear-bitacora'
    },
    
    {
      icon: 'exit',
      name: 'Salir',
      redirectTo:'/inicio-sesion'
    }
  ];

  constructor( private menuCtrl: MenuController,) {}

  ngOnInit() {
    
  }

}
