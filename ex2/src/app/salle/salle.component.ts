import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Salle } from '../salles/salles';

@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit{
  public salle!: Salle | undefined;
  public salleId!: number;
  

  constructor(private route: ActivatedRoute) { }

  salles: Salle[] = [
    { id: 1, nom: 'éléctro mecanique', capacite: 30 },
    { id: 2, nom: 'Genie civile', capacite: 50 },
    { id: 3, nom: 'IOT', capacite: 100 },
    { id: 4, nom: 'Informatique mecanique', capacite: 10 },
    { id: 5, nom: 'BI', capacite: 50 },
  ];

  ngOnInit() {
    this.salleId = Number(this.route.snapshot.paramMap.get('id'));
    this.salle = this.getSalleById(this.salleId);
  }
  
  getSalleById(salleId: number) {
    return this.salles.find((salle: Salle) => salle.id === salleId);
  }

}
