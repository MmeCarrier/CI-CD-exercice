import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RefugeService } from '../../../services/refuge-service';
import { FormsModule } from "@angular/forms";


@Component({
  selector: 'app-get-animal-par-espece',
  imports: [FormsModule],
  templateUrl: './get-animal-par-espece.html',
  styleUrl: './get-animal-par-espece.scss',
})
export class GetAnimalsParEspece implements OnInit{
rechercher() {
throw new Error('Method not implemented.');
}
  private readonly _refugeService = inject(RefugeService)
  private readonly _activeRoute = inject(ActivatedRoute)

public animal : any = undefined;
espece: any;
animals: any;

  ngOnInit(): void {
    const espece = this._activeRoute.snapshot.params['espece'];
    this. _refugeService.GetAnimalsParEspece(espece).subscribe(apiCallResult =>{    
      this.animal = apiCallResult;
  });
  }
}
