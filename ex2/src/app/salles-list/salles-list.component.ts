import { Component, OnInit } from '@angular/core';
import { Salle } from '../salles/salles';
import { Router } from "@angular/router";

@Component({
  selector: 'app-salles-list',
  templateUrl: './salles-list.component.html',
  styleUrls: ['./salles-list.component.css']
})
export class SallesListComponent implements OnInit{

constructor(private router: Router){}

  salles: Salle[] = [
    { id: 1, nom: 'éléctro mecanique', capacite: 30 },
    { id: 2, nom: 'Genie civile', capacite: 50 },
    { id: 3, nom: 'IOT', capacite: 100 },
    { id: 4, nom: 'Informatique mecanique', capacite: 10 },
    { id: 5, nom: 'BI', capacite: 50 },
  ];

  ngOnInit(): void {
  }
}
