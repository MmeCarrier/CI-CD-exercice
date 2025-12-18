import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Benevole } from '../shared/models/benevole/benevole';
import { Observable } from 'rxjs';
import { Animal } from '../shared/models/animal/animal';

@Injectable({
  providedIn: 'root'
})
export class RefugeService {
  private http = inject(HttpClient);
  private baseUrl = environment.api_url;

  public GetBenevoleByPrenom(prenom: string) {
    return this.http.get(`${this.baseUrl}/benevole/prenom/${prenom}`)}

    public GetAnimalsByEspece(espece: string): Observable<Animal[]> {
        return this.http.get<Animal[]>(`${this.baseUrl}/api/Refuge/animal/espece/${espece}`);
    }
  }

