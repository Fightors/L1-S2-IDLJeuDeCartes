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
    let valeurcarte : number = card.valeur;
    let tetecarte : string;
    if (valeurcarte == 11){
        tetecarte= "Valet";
    }
    else if (valeurcarte ==12){
        tetecarte="Dame";
    }
    else if (valeurcarte ==13){
        tetecarte="Roi";
    }
    else if (valeurcarte ==14){
        tetecarte="As";
    }
    else{
        tetecarte= String(valeurcarte);
    }
    
    if(card.couleur==0){
        console.log(tetecarte , " de ♠️"  );
    }
    else if(card.couleur == 1) {
        console.log(tetecarte , " de ♦️" );
    }
    else if(card.couleur == 2) {
        console.log(tetecarte , " de ♣️" );
    }
     else{
        console.log(tetecarte , " de ♥️" );
    }
}

/**
 * Fonction qui compare une première carte à une deuxième
 * 
 * @param carte1 1ere carte à comparer
 * @param carte2 2eme carte à comparer
 * @returns retourne un 1, -1 ou 0 si la première carte est plus forte, plus faible ou égal à la deuxième
 */
 export function comparerCartes ( carte1 : Carte , carte2 : Carte): number{
    if (carte1.valeur > carte2.valeur){
        return 1;
    }else if ( carte1.valeur = carte2.valeur){
        return 0;
    }else{
        return -1;
    }
}
