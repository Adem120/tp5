import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Machine } from '../model/model.component';
import { MachineServices } from '../services/services.component';
@Component({
  selector: 'app-update-machine',
  templateUrl: './update-machine.component.html',
 
})
export class UpdateMachineComponent implements OnInit {
  currentMachine = new Machine();

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router,
    private MachineServices: MachineServices){ }

  ngOnInit(): void {
    this.currentMachine = this.MachineServices.consulterMachine(this.activatedRoute.snapshot. params['id']);
    console.log(this.currentMachine);
  }
  updateProduit()
{ //console.log(this.currentProduit);
this.MachineServices.updateMachine(this.currentMachine);
this.router.navigate(['machine']);
}
}
