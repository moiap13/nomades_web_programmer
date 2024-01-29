/**
 * Tester si un nombre est pair
 * @param {Number} nombre Le nombre à tester
 * @returns {String} "Le nombre est pair" ou "Le nombre est impair"
 * @example
 * estPair(2) // "Le nombre est pair"
 * estPair(3) // "Le nombre est impair"
 */
function estPair(nombre) { // O(1)c
  // if(nombre%2 === 1){
  //   return "Le nombre est impair" 
  // }
  // return "Le nombre est pair"

  return nombre%2===1 ? "Le nombre est impair" : "Le nombre est pair"
}

/**
 * Factorielle d'un nombre
 * La factorielle d'un nombre n est le produit de tous les nombres entiers strictement positifs inférieurs ou égaux à n
 * @see https://fr.wikipedia.org/wiki/Factorielle
 * @param {Number} n Le nombre dont on veut calculer la factorielle
 * @returns {Number} La factorielle du nombre
 * @example
 * factorielle(0) // 1
 * factorielle(1) // 1
 * factorielle(2) // 2
 * factorielle(3) // 6
 * factorielle(4) // 24
 * factorielle(5) // 120
 * factorielle(6) // 720
 * factorielle(7) // 5040
 * factorielle(25) // 15511210043330985984000000
 */
function factorielle(n) {
  // let total = 1

  // for(let i=n; i>=1; i--){
  //   total *= i
  // }

  // return total

  if(n == 0 || n == 1) return 1
  return n * factorielle(n-1)
}

/**
 * Suite de Fibonacci
 * La suite de Fibonacci est une suite d'entier naturels, définie par la somme des deux termes précédents
 * @see https://fr.wikipedia.org/wiki/Suite_de_Fibonacci
 * @param {Number} n 
 * @returns {Number} Le n-ième terme de la suite de Fibonacci
 * @example
 * fibonacci(0) // 0
 * fibonacci(1) // 1
 * fibonacci(2) // 1
 * fibonacci(3) // 2
 * fibonacci(4) // 3
 * fibonacci(5) // 5
 * fibonacci(6) // 8
 * fibonacci(7) // 13
 * fibonacci(25) // 75025
 */
function fibonacci(n) {
  if(n<2) return n

  const fib = [0, 1]
  console.log(fib)
  for(let i=2; i <= n; i++){
    // Ajouter a la fin du tableau fib
    // les valeurs du dernier et de l'avant dernier elementsd
    fib.push(fib[fib.length-1] + fib[fib.length-2])
    console.log(fib)
  }

  // Tableau construit
  return fib[fib.length-1] 
}
/**
 * Somme des n premiers entiers
 * @param {Number} n le nombre d'entiers à additionner
 * @returns {Number} La somme des n premiers entiers
 * @example
 * somme(0) // 0
 * somme(1) // 1
 * somme(2) // 3
 * somme(3) // 6
 * somme(4) // 10
 * somme(5) // 15
 * somme(10) // 55
 * somme(50) // 1275
 */
function somme(n) { // O(n) -> O(1)
  // let res = 0
  // for(let i=0; i<=n; i++){
  //   res += i
  // }
  // return res

  return n*(n+1)/2
}

/**
 * Retourne le carré d'un nombre
 * @param {Nuber} n Le nombre dont on veut le carré
 * @returns {Number} Le carré du nombre
 * @example
 * auCarre(0) // 0
 * auCarre(1) // 1
 * auCarre(2) // 4
 * auCarre(3) // 9
 * auCarre(4) // 16
 * auCarre(5) // 25
 * auCarre(10) // 100
 * auCarre(50) // 2500
 */
function auCarre(n) {
  return n**2
  // return Math.pow(n, 2)
}

/**
 * Retourne true si le nombre est premier, false sinon
 * Un nombre est premier si il est divisible uniquement par 1 et par lui-même
 * Par convention, le nombre o et 1 ne sont pas des nombres premiers
 * @see https://fr.wikipedia.org/wiki/Nombre_premier
 * @param {Number} n Le nombre à tester
 * @returns {Boolean} true si le nombre est premier, false sinon
 * @example
 * estPremier(0) // false
 * estPremier(1) // false
 * estPremier(2) // true
 * estPremier(3) // true
 * estPremier(4) // false
 * estPremier(5) // true
 * estPremier(6) // false
 */
function estPremier(n) {
  if(n == 0 || n == 1) return false
  const r2 = Math.sqrt(n)

  for(let i=2; i<=r2; i++){
    if(n%i===0) {
      return false
    }
  }
  return true
}
module.exports = {
	estPair,
	factorielle,
	fibonacci,
	somme,
	auCarre,
  estPremier
};
