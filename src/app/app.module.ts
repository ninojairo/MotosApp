import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';

//Services
import { MotorcyclesService } from './services/motorcycles.service';
import { MotorcyclesComponent } from './components/motorcycles/motorcycles.component';
import { HttpModule } from '@angular/http';
import { KeysPipe } from './pipes/keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MotorcyclesComponent,
    KeysPipe,
    
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    MotorcyclesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
