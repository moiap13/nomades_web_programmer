/**
 * Afficher les nombres de 1 à 10
 * @returns {String} "1 2 3 4 5 6 7 8 9 10"
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
 */
function afficherLesNombresDe1A10() { // Version 3
	// Ton implementation
	// let result = "";
  // for(let i=1; i <= 10; i++){
  //   // if (result.length > 0){
  //   //   result += " ";
  //   // }
  //   if (i !== 1)  {
  //     result += " "
  //   }
  //   result += i;
  // }

  // return result;
  return "1 2 3 4 5 6 7 8 9 10"
}

/**
 * Afficher les nombres pairs de 1 à 10
 * @returns {String} "2 4 6 8 10"
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
 */
function afficherLesNombresPairDe1a10() { // Version 3
	// Ton implementation
	return "2 4 6 8 10";

  // let result = ""

  // for (let i=2; i<= 10; i+=2){
  //   // if(i % 2 === 0){
  //     if(i !== 2){
  //       result += " "
  //     }

  //     result += i
  //   // }
  // }

  // return result
}

/**
 * Afficher les nombres de 1 à n
 * @param {Number} n le nombre maximum
 * @returns {String} "1 2 3 ... n"
 * @example
 * afficherLesNombresDe1aN(5) // "1 2 3 4 5"
 * afficherLesNombresDe1aN(10) // "1 2 3 4 5 6 7 8 9 10"
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
 */
function afficherLesNombresDe1aN(n) {
	// Ton implementation
  let result = ""

  for(let i=1; i<= n; i++){
    if(i!==1){
      result += " "
    }

    result += i
  }

  return result
}

module.exports = {
	afficherLesNombresDe1A10,
	afficherLesNombresPairDe1a10,
	afficherLesNombresDe1aN,
};