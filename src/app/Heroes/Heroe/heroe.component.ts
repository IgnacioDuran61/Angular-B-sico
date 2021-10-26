
import { Component } from "@angular/core";

@Component({
    selector : 'app-heroe',
    templateUrl : 'heroe.component.html'
})

export class HeroesComponent {

    nombre : string = 'Ironman';
    edad : number = 45;

    //Propiedad que se procesa al ser llamada
    get nombreCapitalizado () : String{
        return this.nombre.toUpperCase();
    }

    obtenerNombre () : string {
        return `${this.nombre}-${this.edad} `; //template literal
    }

    cambiarNombre (): void  {
        this.nombre = 'Spiderman';
    }

    cambiarEdad () : void {
        this.edad = 30 ;
    }
}