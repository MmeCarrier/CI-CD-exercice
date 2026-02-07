import { Component, OnInit } from '@angular/core';
import { Animal } from '../shared/models/animal/animal';
import { RefugeService } from '../services/refuge-service';
import { RouterLink } from '@angular/router';
import { Navbar } from '../shared/component/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}




// export class Home implements OnInit {

//   animals: Animal[] = [];

//   constructor(private api: RefugeService) {}

//   ngOnInit(): void {
//     this.api.GetAnimalsParEspece('chien').subscribe({
//       next: (data) => {
//         this.animals = data;
//         console.log('Animals reçus :', data);
//       },
//       error: (err) => {
//         console.error('Erreur API', err);
//       }
//     });
//   }
// }
