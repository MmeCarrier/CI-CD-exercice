import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RefugeService } from '../../../services/refuge-service';
import { Animal } from '../../../shared/models/animal/animal';

@Component({
  selector: 'app-get-animal-par-espece',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-animal-par-espece.html',
  styleUrl: './get-animal-par-espece.scss',
})
export class GetAnimalsParEspece {

  espece: string = '';
  animals: Animal[] = [];

  private refugeService = inject(RefugeService);

  rechercher() {
    this.refugeService.GetAnimalsParEspece(this.espece).subscribe(result => {
      this.animals = result;
    });
  }
}
