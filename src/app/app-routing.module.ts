import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMachineComponent } from './add-machine/add-machine.component';
import { MachineComponent } from './machine/machine.component';
import { UpdateMachineComponent } from './update-machine/update-machine.component';

const routes: Routes = [
  {path:"machine",component:MachineComponent},
  {path:"add-machine",component:AddMachineComponent},
  {path:"update-machine/:id",component:UpdateMachineComponent},
  {path:"",redirectTo:"machine",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
