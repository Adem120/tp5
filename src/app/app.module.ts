import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { MachineComponent } from './machine/machine.component';
import { FormsModule } from '@angular/forms';
import { UpdateMachineComponent } from './update-machine/update-machine.component';


@NgModule({
  declarations: [
    AppComponent,
    AddMachineComponent,
    MachineComponent,
    UpdateMachineComponent
  
 
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
