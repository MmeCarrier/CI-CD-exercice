import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Benevole } from '../../../shared/models/benevole/benevole';
import { RefugeService } from '../../../services/refuge-service';
import { Test } from '../../../test/test';

@Component({
  selector: 'app-get-benevole-by-surname',
  standalone: true,
  imports: [CommonModule, FormsModule, Test],
  templateUrl: './get-benevole-by-surname.html',
  styleUrl: './get-benevole-by-surname.scss',
})
export class GetBenevoleBySurname {

  prenom: string= '';
  benevoles: Benevole[] = [];
   rechercheEffectuee: boolean = false;

  private refugeService = inject(RefugeService);

rechercher() {
  this.refugeService.GetBenevoleBySurname(this.prenom).subscribe({next:
    (result) => {
    this.benevoles = result;
    this.rechercheEffectuee = true; },
    error: (err) => {
    console.log(err);
    this.benevoles = [];
    this.rechercheEffectuee = true;
}});

  }
}
