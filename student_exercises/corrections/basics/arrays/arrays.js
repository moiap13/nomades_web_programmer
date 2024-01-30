/**
 * Tri croissant d'un tableau de nombres
 * Pour cet exercice utiliser seulement des for et des if
 * @param {Array} tab le tableau à trier 
 * @returns {Array} le tableau trié
 * @example
 * triCroissant([1, 3, 2, 5, 4]) // [1, 2, 3, 4, 5]
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else
 */
function triCroissant(tab) { // O(n^2) -> O(nlog(n))
  // for(let i=0; i<tab.length;i++){
  //   let min_i = tab[i]

  //   for(let j=i+1;j<tab.length;j++){
  //     let curr_elem = tab[j]

  //     if(curr_elem < min_i){
  //       tab[i] = curr_elem
  //       tab[j] = min_i
  //       min_i = curr_elem
  //     }
  //   }
  // }

  for(let i=0; i<tab.length;i++){ 
    for(let j=i+1;j<tab.length;j++){
      if(tab[j] < tab[i]){          
        // swap values      
        const tmp = tab[i]          
        tab[i] = tab[j]             
        tab[j] = tmp                  
      }
    }
  }

  return tab
}

/**
 * Tri décroissant d'un tableau de nombres
 * Pour cet exercice utiliser seulement des for et des if
 * @param {Array} tab le tableau à trier 
 * @returns {Array} le tableau trié de manière décroissante
 * @example
 * triCroissant([1, 3, 2, 5, 4]) // [5, 4, 3, 2, 1]
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/if...else
 */
function triDecroissant(tab) {
	 // Ton implementation
   for(let i=0; i<tab.length;i++){ 
    for(let j=i+1;j<tab.length;j++){
      if(tab[j] > tab[i]){          
        // swap values      
        const tmp = tab[i]          
        tab[i] = tab[j]             
        tab[j] = tmp                  
      }
    }
  }

  return tab
}

/**
 * Somme des éléments d'un tableau de nombres
 * @param {Array} tableau le tableau de nombres
 * @returns {Number} la somme des éléments du tableau
 * @example
 * somme([1, 2, 3, 4, 5]) // 15
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/for
 */
function somme(tableau) {
  let total = 0
  // for(let i=1; i<=tableau.length-1; i++){
  //   total += tableau[i] // total += tableau[i] <==> total = total + tableau[i] 
  // }

  // for(curr_elem of tableau){
  //   total += curr_elem 
  // }

  // tableau.forEach(curr_elem => {
  //   total += curr_elem 
  // })
  // return total

  return tableau.reduce((pv, cv) => pv+cv)
}

/**
 * Moyenne des éléments d'un tableau de nombres
 * @param {Array} tableau le tableau de nombres
 * @returns {Float} la moyenne des éléments du tableau
 * @example
 * moyenne([1, 2, 3, 4, 5]) // 3
 * moyenne([1, 2, 3, 4, 5, 6]) // 3.5
 * moyenne([1, 1, 1, 1, 1, 1]) // 1
 * moyenne([1, 1, 1, 10, 10]) // 4.6
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/parseFloat
 */
function moyenne(tableau) { // O(n)
  // return somme(tableau)/tableau.length

  let total = 0
  for(let i=0; i<=tableau.length-1; i++){
    total += tableau[i] // total += tableau[i] <==> total = total + tableau[i] 
  }

  return total / tableau.length
}

/**
 * Minimum d'un tableau de nombres
 * @param {Array} tableau le tableau de nombres
 * @returns {Number} le minimum du tableau
 * @example
 * min([1, 2, 3, 4, 5]) // 1
 * min([10, 3, 2, 5, 4]) // 2
 */
function min(tableau) {
  let curr_min = Infinity

  // basic for approach
  // for(let i=0; i<tableau.length; i++){
  //   let curr_elem = tableau[i]
  //   if(curr_elem < curr_min){
  //     curr_min = curr_elem
  //   }
  // }

  // While approach
  // let i = 0
  // while(i < tableau.length){
  //   let curr_elem = tableau[i]
  //   if(curr_elem < curr_min){
  //     curr_min = curr_elem
  //   }
  //   i++
  // }
  
  // foreach approach
  for(curr_elem of tableau)
    if(curr_elem < curr_min)
      curr_min = curr_elem
  
  return curr_min
}

/**
 * Maximum d'un tableau de nombres
 * @param {Array} tableau le tableau de nombres
 * @returns {Number} le maximum du tableau
 * @example
 * max([1, 2, 3, 4, 5]) // 5
 * max([10, 3, 2, 5, 4]) // 10
 */
function max(tableau) {
  let curr_min = -Infinity
  
  for(curr_elem of tableau)
    if(curr_elem > curr_min)
      curr_min = curr_elem
  
  return curr_min
}

/**
 * Minimum et maximum d'un tableau de nombres
 * @param {Array} tableau le tableau de nombres
 * @returns {Array} un tableau contenant le minimum et le maximum du tableau
 * @example
 * minMax([1, 2, 3, 4, 5]) // [1, 5]
 */
function minMax(tableau) {
  return [min(tableau), max(tableau)]
}

/**
 * Médiane d'un tableau de nombres
 * La médiane est la valeur centrale d'un tableau de nombres triés
 * Si le tableau contient un nombre pair d'éléments, la médiane est la moyenne des deux éléments centraux
 * Si le tableau contient un nombre impair d'éléments, la médiane est l'élément central
 * @param {Array} tableau le tableau de nombres
 * @returns {Number} la médiane du tableau
 * @example
 * mediane([1, 2, 3, 4, 5]) // 3
 * mediane([1, 2, 3, 4, 5, 6]) // 3.5
 * mediane([1, 1, 1, 1, 1, 1]) // 1
 * mediane([1, 1, 1, 10, 10]) // 1
 * mediane([3, 5, 1, 4, 2]) // 3
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor
 */
function mediane(tableau) {
  const sorted_array = triCroissant(tableau)

  let res
  let index

  if(sorted_array.length % 2 != 0){
    index = Math.floor(tableau.length/2)
    res = tableau[index]
    return res
  } else {
    index = tableau.length/2
    res = (tableau[index] + tableau[index-1])/2
    return res
  } 
 
  // let index = sorted_array.length/2
  // let res = (sorted_array[index] + sorted_array[index-1])/2

  // if(sorted_array.length % 2 != 0){
  //   index = Math.floor(sorted_array.length/2)
  //   res = sorted_array[index]
  // }
  
  // return res

  // const sorted_array = triCroissant(tableau)

  // let index = (
  //   sorted_array.length % 2 != 0 
  //   ? Math.floor(sorted_array.length/2) 
  //   : sorted_array.length/2
  // )
  
  // return (
  //   sorted_array.length % 2 != 0 
  //   ? tableau[index]
  //   : (tableau[index] + tableau[index-1])/2
  // )
}

/**
 * Mode d'un tableau de nombres 
 * Le mode est le nombre qui apparait le plus souvent dans le tableau
 * Si plusieurs nombres apparaissent le même nombre de fois, le mode est le plus petit de ces nombres
 * @param {Array} tableau le tableau de nombres
 * @returns {Number} le mode du tableau
 * @example
 * mode([1, 2, 3, 4, 5]) // 1
 * mode([1, 1, 1, 1, 1, 1]) // 1
 * mode([1, 1, 1, 10, 10]) // 1
 * mode([4, 2, 4, 3, 2, 2]) // 2
 */
function mode(tableau) {
  // let o = {}
  
  // for(let i in tableau){ // for(let i=0; i<tableau; i++)
  //   let currElem = tableau[i]
  //   if(o[currElem] === undefined){
  //     o[currElem] = 1
  //   } else {
  //     o[currElem] += 1 // "nb_" + str(currElem)
  //   }
  // }

  // let maxCount = -1
  // let modeValue

  // for(let i in o){
  //   if(o[i] > maxCount){
  //     maxCount = o[i]
  //     modeValue = i
  //   }
  // }

  // return Number(modeValue)
  // return parseInt(modeValue)
  // return modeValue-0

  const counter = {}

  function callbackForEach(e, i, a){
    counter[e] = counter[e] === undefined ? 0 : counter[e] 
    counter[e] = counter[e] || 0
    counter[e]++
  }

  tableau.forEach((e, i, a) => {
    counter[e] = counter[e] === undefined ? 0 : counter[e] 
    counter[e] = counter[e] || 0
    counter[e]++
  })

  let maxFreq = 0
  let mode = 0

  for(const currElem in counter){
    if(counter[currElem] > maxFreq){
      maxFreq = counter[currElem]
      mode = currElem
    }
  }

  return mode
}

/**
 * Ecart type d'un tableau de nombres
 * L'écart type est la racine carrée de la moyenne des carrés des écarts à la moyenne
 * @param {Array} tableau le tableau de nombres
 * @returns {Float} l'écart type du tableau
 * @example
 * ecartType([1, 2, 3, 4, 5]) // 1.4142135623730951
 * ecartType([1, 1, 1, 1, 1, 1]) // 0
 * ecartType([1, 1, 1, 10, 10]) // 4.041451884327381
 * ecartType([4, 2, 4, 3, 2, 2]) // 1.0954451150103321
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/sqrt
 */
function ecartType(tableau) {
  const mean = moyenne(tableau)
  let total = 0
  for(const curr_elem of tableau){
    total += ((curr_elem-mean)**2)
  }
  return Math.sqrt(total / tableau.length)
}

/**
 * Vérifie si un tableau contient une valeur
 * @param {Array} tableau le tableau de nombres
 * @param {Number} valeur la valeur à rechercher
 * @returns {Boolean} true si la valeur est présente dans le tableau, false sinon
 * @example
 * existe([1, 2, 3], 2) // true
 * existe([1, 2, 3], 4) // false
 */
function existe(tableau, valeur) {
  for(curr_elem of tableau){
    if(curr_elem === valeur){
      return true
    } 
  }
      
  return false

  // let exist = false
  // for(curr_elem of tableau){
  //   if(curr_elem === valeur){
  //     exist = true
  //   }
  // }

  // return exist
}


/**
 * Retourne la position d'une valeur dans un tableau
 * sinon retourne -1
 * @param {Array} tableau Le tableau de nombres
 * @param {Number} valeur La valeur à rechercher
 * @returns {Number} La position de la valeur dans le tableau, -1 si la valeur n'est pas présente
 * @example
 * position([1, 2, 3], 1) // 0
 * position([1, 2, 3], 2) // 1
 * position([1, 2, 3], 4) // -1
 */
function position(tableau, valeur) {
  // if (!existe(tableau, valeur))
  // if (existe(tableau, valeur) == false){
  //   return -1
  // }

  for(let i=0; i<tableau.length; i++){
    const curr_elem = tableau[i]
    if(curr_elem === valeur){
      return i
    }
  }

  return -1
}

/**
 * Vérifie si deux tableaux sont similaires
 * @param {Array} arr1 le premier tableau
 * @param {Array} arr2 le second tableau
 * @returns {Boolean} true si les deux tableaux sont similaires, false sinon
 * @example
 * similaires([1, 2, 3], [1, 2, 3]) // true
 * similaires([1, 2, 3], [1, 2, 4]) // false
 * similaires([1, 2, 3], [1, 2]) // false
 */
function similaires(arr1, arr2) {
  // if(arr1.length === arr2.length){
  //   for(let i=0;i<arr1.length;i++){
  //     if(arr1[i] !== arr2[i]){
  //       return false
  //     }
  //   }

  //   return true
  // }

  // return false

  if(arr1.length !== arr2.length) return false

  for(let i=0;i<arr1.length;i++){
    if(arr1[i] !== arr2[i]){
      return false
    }
  }

  return true
}

/**
 * Vérifie si un élément est un tableau
 * @param {*} tableau l'élément à vérifier
 * @returns {Boolean} true si l'élément est un tableau, false sinon
 * @example
 * estTableau([]) // true
 * estTableau([1, 2, 3]) // true
 * estTableau(1) // false
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/instanceof
 */
function estTableau(tableau) {
  // Ton implementation
	// return Array.isArray(tableau);
	return tableau instanceof Array;
}

/**
 * Vérifie si un tableau est composé uniquement de nombres
 * @param {Array} tableau l'élément à vérifier
 * @returns {Boolean} true si le tableau est composé uniquement de nombres, false sinon
 * @example
 * estTableauDeNombres([]) // false
 * estTableauDeNombres([1, 2, 3]) // true
 * estTableauDeNombres([1, 2, '3']) // false
 * estTableauDeNombres(1) // false
 * @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/typeof
 */
function estTableauDeNombres(tableau) {
  if (!estTableau(tableau) || tableau.length == 0) 
    return false

  // Je suis sur que je suis un tableau et que j'ai au moin un element dans le tableau
  for(const cur_elem of tableau){
    if(typeof cur_elem != "number"){
      return false
    }
  }

  return true
}

module.exports = {
	triCroissant,
	triDecroissant,
	somme,
	moyenne,
	min,
	max,
	minMax,
	mediane,
	mode,
	ecartType,
	existe,
	position,
	similaires,
	estTableau,
	estTableauDeNombres
};
