import { Component, OnInit } from '@angular/core';
import { Machine } from '../model/model.component';
import {MachineServices} from '../services/services.component';
@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.css']
})
export class AddMachineComponent implements OnInit {

  newMachine = new Machine();
  constructor(private machineService: MachineServices) { }
  addMachine(){
  // console.log(this.newProduit);
  this.machineService.ajouterMachine(this.newMachine);
  }
  ngOnInit(): void {
  }

}
