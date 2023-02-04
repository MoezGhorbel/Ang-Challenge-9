import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalleComponent } from './salle/salle.component';
import { SallesListComponent } from './salles-list/salles-list.component';

const routes: Routes = [
  { path: 'salles', component: SallesListComponent },
  { path: 'salles/:id', component: SalleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
