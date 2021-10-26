import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {

  heroes : string[] = ['Spiderman','Ironman','Hulk'];
  heroeBorrado : string  = ''

  borrarHeroe() { 
    console.log("borrando..");
    const borrado : string = this.heroes.pop() || '';
    this.heroeBorrado = borrado;
  }


}
