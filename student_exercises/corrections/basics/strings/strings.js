/**
 * Retourne le nombre de mots dans une phrase
 * Un mot est une suite de caractères séparés par un espace
 * @param {String} phrase 
 * @returns {Number} nombre de mots
 * @example
 * compteMots("Hello World") // 2
 * compteMots(" Hello World ") // 2
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/trim
 */
function compteMots(phrase) {
  // let total = 0
  // for(let i=0; i<phrase.length; i++){
  //   charcode = phrase.charCodeAt(i)
  //   if (65 <= charcode && charcode <= 90){
  //     total = total + 1
  //   }
  // }

  // return total
  
  return phrase.trim().split(" ").length

  // if(phrase.length === 0) return 0
  // let total = 1
  // for(c of phrase.trim()){
  //   if(c === ' '){
  //     total++
  //   }
  // }
  // return total
}
/**
 * Retourne un string contentant les caractères de la phrase dans l'ordre inverse
 * @param {String} mot 
 * @returns {String} mot inversé
 * @example
 * inverser("hello") // "olleh"
 * inverser("hello world") // "dlrow olleh"
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length
 */
function inverser(mot) {
  // return mot.split("").reverse().join("")
  // return Array.from(mot).reverse().join("")
  
  let res = ''
  for(let i=mot.length-1; i>=0; i--){
    res += mot[i]
  }
  return res
}

/**
 * Retourne true si le mot est un palindrome
 * Un palindrome est un mot qui se lit de la même manière dans les deux sens
 * @param {String} mot 
 * @returns {Boolean} true si le mot est un palindrome
 * @example
 * estPalindrome("kayak") // true
 * estPalindrome("alla") // true
 * estPalindrome("hello") // false
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length
 */
function estPalindrome(mot) {
  // for(let i=0; i<Math.ceil(mot.length/2); i++){
  //   if(mot[i] !== mot[(mot.length-1)-i]){
  //     return false
  //   }
  // }

  // return true
  return mot === inverser(mot)
}

/**
 * Retourne le nombre de caractères dans un string
 * Un caractère est une lettre, un chiffre ou un symbole
 * @param {String} mot 
 * @returns {Number} nombre de caractères
 * @example
 * compteCaracteres("hello") // 5
 * compteCaracteres("hello world") // 11
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length
 */
function compteCaracteres(mot) {
  // const mot_tab = Array.from(mot)
  // const res = mot_tab.length
  // return res

  // let i=0
  // for(char of mot){
  //   i++
  // }
  // return i

  // let total = 0
  // for(let i=0; i<mot.length;i++){
  //   let c = mot.charCodeAt(i)
  //   total++
  // }

  // return total

  return mot.length
}
/**
 * Retourne le nombres de lettres dans un string
 * @param {String} mot 
 * @returns {Number} nombre de lettres
 * @example
 * compterLesLettres("hello") // 5
 * compterLesLettres("hello world") // 10
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length
 */
function compterLesLettres(mot) {
  // let total = 0
  // for(let i=0; i<mot.length;i++){
  //   let c = mot.charCodeAt(i)
  //   if(c === 32) 
  //     continue // break

  //   total++
  // }

  // return total 

  // let total = 0
  // for(let i=0; i<mot.length;i++){    
  //   if(mot[i] === ' ') 
  //     continue // break

  //   total++
  // }

  // return total 

  // return mot.replace(" ", "").length

  const split = mot.trim().split(" ")
  if (split.length === 1) return split[0].length
  else return split.reduce((sp, sc) => sp.length + sc.length)
}

/**
 * Retourne le nombre de voyelles dans un mot
 * Une voyelle est une lettre qui fait partie de l'alphabet suivant : a, e, i, o, u, y
 * @param {String} mot 
 * @returns {Number} nombre de voyelles
 * @example
 * compteVoyelles("hello") // 2
 * compteVoyelles("hello world") // 3
 * compteVoyelles("HellO World") // 3
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length
 * 
 */
function compteVoyelles(mot) {
  let count = 0
  for(let i=0; i<mot.length; i++){
    switch(mot[i].toLowerCase()){
      case 'a':
        count++
        break
      case 'e':
        count++
        break
      case 'i':
        count++
        break
      case 'o':
        count++
        break
      case 'u':
        count++
        break    
      case 'y':
        count++
        break
    }
  }
  return count

  // const voyelles = ["a", "e", "i", "o", "u", "y"]
  // let count = 0
  // for(c of mot){
  //   for(v of voyelles){
  //     if(c === v){
  //       
  //     }
  //   }
  // }

  const split = mot.trim().split(RegExp("[aeiouyAEIOUY]"))
  console.log(split)
  if (split.length === 1) return split[0].length
  else return split.reduce((sp, sc) => {
    if(sc.length > 0) return sp.length + sc.length
    else return sp.length + 0 
  })
}

/**
 * Retourne le nombre de consonnes dans un mot
 * une consonne est une lettre qui fait partie de l'alphabet suivant : b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, z
 * @param {String} mot
 * @returns {Number} nombre de consonnes
 * @example
 * compteConsonnes("hello") // 3
 * compteConsonnes("hello world") // 7
 * compteConsonnes("HellO World") // 7
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/length
 */
function compteConsonnes(mot) {
  // let count = 0
  // for(let i=0; i<mot.length; i++){
  //   switch(mot[i].toLowerCase()){
  //     case 'a':
  //       continue
  //       break
  //     case 'e':
  //       continue
  //       break
  //     case 'i':
  //       continue
  //       break
  //     case 'o':
  //       continue
  //       break
  //     case 'u':
  //       continue
  //       break    
  //     case 'y':
  //       continue
  //       break
  //     default:
  //       count++
  //       break
  //   }
  // }
  // return count
  
  // const voyelles = ["a", "e", "i", "o", "u", "y"]
  // let count = 0
  // let voyelle = false
  // for(c of mot){
  //   for(v of voyelles){
  //     if(c === v){
  //       voyelle = true
  //       break
  //     }
  //   }
  //   if(!voyelle){
  //     count++
  //   } else {
  //     voyelle = false
  //   }
  // }

  return mot.replace(" ", "").length - compteVoyelles(mot)
}

/**
 * Retourne la concaténation de deux mots
 * @param {String} mot1
 * @param {String} mot2
 * @returns {String} la concaténation des deux mots
 * @example
 * concatenation("hello", "world") // "helloworld"
 */
function concatenation(mot1, mot2) {
  return mot1 + mot2

  // const t = [mot1, mot2]
  // return t.join("")
}

module.exports = {
	compteMots,
	inverser,
	estPalindrome,
	compterLesLettres,
	compteCaracteres,
	compteVoyelles,
	compteConsonnes,
	concatenation,
};
