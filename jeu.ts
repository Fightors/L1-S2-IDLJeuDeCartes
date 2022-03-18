/**
 * Enumerations, classes et fonctions nécessaires à la création et gestion de nos cartes
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
export type carte = {
    couleur :  Couleur,
    valeur  :  number
};