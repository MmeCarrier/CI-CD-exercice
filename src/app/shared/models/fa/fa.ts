import { Component } from '@angular/core';
import { Benevole } from '../benevole/benevole';
import { Animal } from '../animal/animal'


export interface Fa {
  faId: number;
  benevoleId: number;
  benevole: Benevole;
  animalId: number;
  animal: Animal;
  dateDebut: string;
  dateFin?: string;
}
