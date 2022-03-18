/**
 * Fonctions de création et manipulation d'un jeu de cartes
 *
 * @module

 */

 import {Carte} from "../src/carte";

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

/**
 * Fonction qui retourne la première carte tiré d'un paquet de jeu de cartes
 * @param jeu_de_cartes Jeu de cartes auquel on va tiré une carte
 * @returns retourne la carte tiré dans le jeu de carte
 */

 export function tirerCarte(jeu_de_cartes : Carte[]): Carte{
    let card : Carte ;
    card = jeu_de_cartes[0];
    jeu_de_cartes.splice(0,1);
    return card;
}