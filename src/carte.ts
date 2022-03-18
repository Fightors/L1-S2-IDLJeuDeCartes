/**
 * Fonctions de création et manipulation d'un jeu de cartes
 *
 * @module

 */

 import {Couleur,Carte} from "../src/carte";

 /**
  * Fonction qui créer et retourne un jeu de 52 cartes
  * 
  * @returns Retourne le jeu de 52 cartes créé
  */

  export function creerJeu(): Carte[] {
    let jeu_cartes : Carte[] ;
    let card: Carte;
    let i: number=0;
    let j: number=0;
    for(i;i<=5;i+=1){
        for(j;j<=14;j+=1){
            card.valeur = i;
            card.couleur = j ;
            jeu_cartes[jeu_cartes.length+1] = card;
            }
        }
    return jeu_cartes;
}

