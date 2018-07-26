import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes:  Routes = [
{ path: 'home', component: PortafolioComponent },
{ path: 'about', component: AboutComponent },
{ path: 'item', component: ItemComponent },
{ path: '**', pathMatch: 'full', redirectTo: '' } // todo lo que no funcione redirecciona al Home
];

@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, {useHash: true}) // lo que viene luego del hash es una pagina
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}
