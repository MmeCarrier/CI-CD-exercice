import { Component } from '@angular/core';
import { Fa } from '../fa/fa';

export interface Benevole {
  benevoleId: number;
  prenom: string;
  nom: string;
  tel: number;
  adresse: string;
  estResponsable: boolean;
  formeFerme: boolean;
  formeReptile: boolean;
  formeContrat: boolean;
  secteurId: number;
  secteurNom?: string;
  fas: Fa[];

}