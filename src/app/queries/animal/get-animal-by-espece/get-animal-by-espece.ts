import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RefugeService } from '../../../services/refuge-service';


@Component({
  selector: 'app-get-animal-by-espece',
  imports: [],
  templateUrl: './get-animal-by-espece.html',
  styleUrl: './get-animal-by-espece.css',
})
export class GetAnimalsByEspece implements OnInit{
  private readonly _refugeService = inject(RefugeService)
  private readonly _activeRoute = inject(ActivatedRoute)

public animal : any = undefined;

  ngOnInit(): void {
    const espece = this._activeRoute.snapshot.params['espece'];
    this. _refugeService.GetAnimalsByEspece(espece).subscribe(apiCallResult =>{    
      this.animal = apiCallResult;
  });
  }
}
