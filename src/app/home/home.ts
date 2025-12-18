import { Component, OnInit } from '@angular/core';
import { Animal } from '../shared/models/animal/animal';
import { RefugeService } from '../services/refuge-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  animals: Animal[] = [];

  constructor(private api: RefugeService) {}

  ngOnInit(): void {
    this.api.GetAnimalsByEspece('chien').subscribe({
      next: (data) => {
        this.animals = data;
        console.log('Animals reçus :', data);
      },
      error: (err) => {
        console.error('Erreur API', err);
      }
    });
  }
}
