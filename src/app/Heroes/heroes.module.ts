import { CommonModule } from "@angular/common";
import { NgModule  } from "@angular/core";

import { HeroesComponent } from "./Heroe/heroe.component";
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations : [ // que cosa contiene el modulo
        HeroesComponent,
        ListadoComponent
    ],
    exports : [
        ListadoComponent
    ],
    imports : [ //modulos obbjetos
        CommonModule
    ]
})

export class HeroesModule {

}