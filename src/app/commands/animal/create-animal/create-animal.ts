import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RefugeService } from '../../../services/refuge-service';
import { Router } from '@angular/router';
import { AnimalRequest } from '../../../shared/models/animal/animal';

@Component({
  selector: 'app-create-animal',
  imports: [FormsModule],
  templateUrl: './create-animal.html',
  styleUrl: './create-animal.scss',
})
export class CreateAnimal implements OnInit {    
  private readonly _refugeService = inject(RefugeService);
  private readonly _Router = inject(Router);
  nom: string = '';
  espece: string = '';
  age: number = 0;
  mf: boolean = false;
  sterilise: boolean = false;
  primovaccin: boolean = false;
  vaccincomplet: boolean = false;
  provenance: string = '';
  lieuprovenance: string = '';
  localisation: string = '';
  remarque: string = '';
  secteurId: number = 1;
  fas: [] = [];

  message: string='';
  ngOnInit(): void {}
  
  onSubmit(formulaire: any) {
    if (formulaire.valid) {      
      const animal: AnimalRequest = {
        nom: this.nom,
        espece: this.espece,
        age: this.age,
        mf: this.mf,
        sterilise: this.sterilise,
        primoVaccin: this.primovaccin,
        vaccinComplet: this.vaccincomplet,
        provenance: this.provenance,
        lieuProvenance: this.lieuprovenance,
        localisation: this.localisation,
        remarque: this.remarque,
        secteurId: this.secteurId,
        fas: this.fas
      };

      this.createAnimal(animal);
  }
}

createAnimal(animalData: AnimalRequest) {
this._refugeService.CreateAnimal(animalData).subscribe({
next: () => {
  console.log('Animal créé');
  this._Router.navigate(['/']) // sinon il fait /animal/create/animal et va vars une route qui n'existe pas
},
error: (err) => {
    console.error('Impossible de créer d animal', err);
}
});
}
 public reussite(formulaire: any){
    this.message= formulaire.valid
}}