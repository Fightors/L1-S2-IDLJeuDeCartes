/**
 * Enumérations, classes et fonctions nécessaires à la création et gestion de nos cartes
 * 
 * @module

 */

/**
 * Implémentation des couleurs des cartes
 */

 export enum Couleur {
    pique,
    carreau,
    trefle,
    coeur
}

/**
 * Caractéristiques d'une carte
 */

export type Carte = {
    couleur :  Couleur,
    valeur  :  number
};

/**
 * Céer une carte de la valeur et couleur voulues
 * @param color Couleur correspondante à la carte
 * @param value Valeur correspondant à la carte
 * @returns Retourne la carte créée selon les paramètres entrés.
 */

 export function creerCarte (color : Couleur, value : number): Carte {
    let card : Carte ;
    card.couleur = color;
    card.valeur = value;
    return card;
}

/**
 * Fonction qui affiche la carte voulue
 * 
 * @param card carte que l'on souhaite afficher
 */

 export function afficherCarte (card : Carte){
    let valeurCarte : number = card.valeur;
    let teteCarte : string;
    if (valeurCarte == 11){
        teteCarte= "Valet";
    }
    else if (valeurCarte ==12){
        teteCarte="Dame";
    }
    else if (valeurCarte ==13){
        teteCarte="Roi";
    }
    else if (valeurCarte ==14){
        teteCarte="As";
    }
    else{
        teteCarte= String(valeurCarte);
    }
    
    if(card.couleur==0){
        console.log(teteCarte , " de ♠️"  );
    }
    else if(card.couleur == 1) {
        console.log(teteCarte , " de ♦️" );
    }
    else if(card.couleur == 2) {
        console.log(teteCarte , " de ♣️" );
    }
     else{
        console.log(teteCarte , " de ♥️" );
    }
}

/**
 * Fonction qui compare une première carte à une deuxième
 * 
 * @param carte1 1ere carte à comparer
 * @param carte2 2eme carte à comparer
 * @returns retourne 1, -1 ou 0 si la première carte est plus forte, plus faible ou égal à la deuxième
 */

 export function comparerCartes ( carte1 : Carte , carte2 : Carte): number{
    if (carte1.valeur > carte2.valeur){
        return 1;
    }
    else if (carte1.valeur < carte2.valeur){
        return -1;
    }
    else{
        return 0;
    }
}