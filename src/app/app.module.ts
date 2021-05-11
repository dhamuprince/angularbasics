import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertybindingComponent } from './components/propertybinding/propertybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    InterpolationComponent,
    PropertybindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
