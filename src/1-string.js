/**
 * Fonctions sur les string.
 * https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String
 */


/**
 * La fonction reverse inverse le contenu d'une chaine de charactères : 
 * reverse("bonjour") // "ruojnob"
 * @param {*} str 
 * @returns {String}
 */
export function reverse(str) {
    // Utilise la méthode split() pour diviser la chaîne en un tableau de caractères.
    // Ensuite, utilise la méthode reverse() pour inverser l'ordre des éléments dans le tableau.
    // Enfin, utilise la méthode join() pour reconstituer la chaîne inversée.
    return str.split('').reverse().join('');
}

/**
 * Détermine si la string passée en paramètre est un palindrome ou non.
 * Un palindrome est un mot ou une phrase qui peut être lue dans le deux sens. Ex : elle, été, radar...
 * @param {String} str 
 * @returns {String}
 */
export function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
