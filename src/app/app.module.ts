import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputcomponentComponent } from './components/inputcomponent/inputcomponent.component';
import { FormsModule } from '@angular/forms';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';

@NgModule({
  declarations: [
    AppComponent,
    InputcomponentComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
