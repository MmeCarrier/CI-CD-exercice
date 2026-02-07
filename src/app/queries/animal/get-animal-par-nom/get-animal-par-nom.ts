import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RefugeService } from '../../../services/refuge-service';
import { Animal } from '../../../shared/models/animal/animal';

@Component({
  selector: 'app-get-animal-par-nom',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-animal-par-nom.html',
  styleUrl: './get-animal-par-nom.scss',
})
export class GetAnimalsParNom {

  nom: string = '';
  animals: Animal[] = [];

  private refugeService = inject(RefugeService);

  rechercher() {
    this.refugeService.GetAnimalsParNom(this.nom).subscribe(result => {
      this.animals = result;
    });
  }
}
