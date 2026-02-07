import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Benevole } from '../shared/models/benevole/benevole';
import { Observable } from 'rxjs';
import { Animal, AnimalRequest } from '../shared/models/animal/animal';

@Injectable({
  providedIn: 'root'
})
export class RefugeService {
  private http = inject(HttpClient);
  private baseUrl = environment.api_url;

  public GetBenevoleBySurname(prenom: string) {
    return this.http.get<Benevole[]>(`${this.baseUrl}/api/Refuge/prenom/${prenom}`)}

    public GetAnimalsParEspece(espece: string): Observable<Animal[]> {
        return this.http.get<Animal[]>(`${this.baseUrl}/api/Refuge/animal/espece/${espece}`);
    }
    public GetAnimalsParNom(nom: string): Observable<Animal[]> {
        return this.http.get<Animal[]>(`${this.baseUrl}/api/Refuge/animal/nom/${nom}`);
    }
    public CreateAnimal (animalToCreate: AnimalRequest): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/api/Refuge/AjouterAnimal`, animalToCreate);
  }

}