import {RouterModule, Routes} from '@angular/router'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import {ContenedorComponent} from './components/contenedor/contenedor.component'

import { MundialService } from './services/mundial.service';
import { MundialesService } from './services/mundiales.service';
import { MundialComponent } from './components/mundial/mundial.component';



const routes: Routes = [
  {path: '', component: ContenedorComponent, pathMatch: 'full'},
  {path: 'mundial/:id', component: MundialComponent , pathMatch: 'full'},
  {path: '**', redirectTo:'?', pathMatch: 'full'}
 
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContenedorComponent,
    MundialComponent
  

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    MundialService,
    MundialesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
