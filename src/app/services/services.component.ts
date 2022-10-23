import {  Injectable } from '@angular/core';
import { Machine } from '../model/model.component';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
  })
export class MachineServices  {
machines: Machine[];
machine!: Machine;
  constructor(private router:Router) { 
  this.machines = [
    { idmachine : 1, nommachine : "machine1",  prixmachine: 900, dateachat: new Date("01/14/2019")},
    { idmachine : 2, nommachine : "machine2", prixmachine : 560, dateachat : new Date("12/17/2018")},
    {idmachine : 3, nommachine :"machine3", prixmachine : 500, dateachat : new Date("02/20/2020")}
    ];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  listeMachines():Machine[] {
    return this.machines;
  }
  ajouterMachine( prod: Machine){
  this.machines.push(prod);
  this.router.navigate(['/machine'])
  }
  supprimerMachine( prod: Machine){
  //supprimer le produit prod du tableau produits
  const index = this.machines.indexOf(prod, 0);
  if (index > -1) {
  this.machines.splice(index, 1);
  }

}
consulterMachine(id:number): Machine{
  this.machine= this.machines.find(p => p.idmachine == id)!;
  return this.machine;
  }
  updateMachine(p:Machine)
{
// console.log(p);
this.supprimerMachine(p);
this.ajouterMachine(p);
this.trierMachine();

}
trierMachine(){
  this.machines= this.machines.sort((n1,n2) => {
  if (n1.idmachine! > n2.idmachine!) {
  return 1;
  }
  if (n1.idmachine! < n2.idmachine!) {
  return -1;
  }
  return 0;
  });
  }
}
