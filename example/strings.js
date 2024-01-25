let str = "Hello World"
const str2 = 'Hello World'

// String loop

// for(let i=0; i<str.length; i++){
//   console.log(str[i])
// }

// String index
console.log(str[6])

// String immutable
console.log(str)
str[0] = "P"
console.log(str)

// string concatenation
const prenom = "Charles"
const nom = "Pisanello"
const bonjour = "Bonjour " + prenom + " ` " + nom
console.log(bonjour)

// String formatin`
const bonjour_2 = `Bonjour ${prenom} \` ${nom}`
console.log(bonjour_2)

// string comparaison
console.log('aaa' < 'AAA')
console.log('aaa'.toLowerCase() == 'AAA'.toLowerCase())

// String functions
const name_replaced = nom.replace("ne", "a")
console.log(name_replaced)

console.log("Pisanello".search("ll"))