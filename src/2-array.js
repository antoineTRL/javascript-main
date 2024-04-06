/**
 * Fonctions sur les tableaux.
 * https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array
 */


/**
 * La fonction prend en paramètre un tableau de tableau (coordonnées x, y) et doit retourner un tableau simple avec toutes les valeurs :
 * ```
 * const arr = [
 *  [1, 2],
 *  [3, 4]
 * ];
 * const res = spreadCoordinates(arr); // [1, 2, 3, 4]
 * ```
 * @param {Array} arr 
 * @returns {Array}
 */
export function spreadCoordinates(arr) {
    return arr.flat();
}

/**
 * Retourne la moyenne des valeurs contenu dans le tableau.
 * Pour rappel, la moyenne est obtenu en divisant la somme des valeurs par leur nombre
 * @param {Array} arr 
 * @returns {Number}
 */
export function average(arr) {
    if (arr.length === 0) {
        return 0; // Si le tableau est vide, la moyenne est 0.
    }
    const sum = arr.reduce((acc, val) => acc + val, 0); // Somme des valeurs.
    return sum / arr.length; // Moyenne = somme / nombre de valeurs.
}

/**
 * Retourne toutes les valeurs paires d'un tableau
 * @param {Array} arr 
 * @returns {Array}
 */
export function getEvenValues(arr) {

}

/**
 * Retourne true si toutes les entrées du tableau sont égales. false sinon.
 * @param {Array} arr 
 * @returns {Array}
 */
export function areItemsEqual(arr) {

}
