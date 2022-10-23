import { Component, OnInit } from '@angular/core';
import { Machine } from '../model/model.component';
import { MachineServices } from '../services/services.component';
@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',

})
export class MachineComponent implements OnInit {
  machine : Machine[];
    
    constructor(private machineservice: MachineServices ) {
      this.machine= machineservice.listeMachines();
  }
  ngOnInit(): void {
  }
 
     supprimerMachine(p: Machine)
    {
      //console.log(p);
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.machineservice.supprimerMachine(p);
      }
    }

