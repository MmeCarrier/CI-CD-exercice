import { Component } from '@angular/core';
import { Fa } from '../fa/fa';

export interface Animal {
  animalId: number;
  nom: string;
  espece: string;
  age?: number;
  mf?: boolean;
  sterilise: boolean;
  primoVaccin?: boolean;
  vaccinComplet?: boolean;
  provenance: string;
  lieuProvenance?: string;
  localisation: string;
  remarque?: string;
  secteurId: number;
  // secteur: Secteur;
  fas: Fa[];
}
