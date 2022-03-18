/**
 * Enumérations, classes et fonctions nécessaires à la création et gestion de nos cartes
 * 
 * @module

 */

/**
 * Implémentation des couleurs des cartes
 */

export enum couleur {
    pique,
    carreau,
    trefle,
    coeur
}

/**
 * Caractéristiques d'une carte
 */

export type carte = {
    couleur :  couleur,
    valeur  :  number
};

/**
 * Céer une carte de la valeur et couleur voulues
 * @param color Couleur correspondante à la carte
 * @param value Valeur correspondant à la carte
 * @returns Retourne la carte créée selon les paramètres entrés.
 */

 export function creationCarte(color : couleur, value : number): carte {
    let card : carte ;
    card.couleur = color;
    card.valeur = value;
    return card;
}

/**
 * Fonction qui affiche la carte voulue
 * 
 * @param card carte que l'on souhaite afficher
 */

 export function affichageCarte(card : carte){
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