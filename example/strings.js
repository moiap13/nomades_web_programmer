const str = "Hello World"
const str2 = 'Hello World'

// Using both single quotes ' or double quotes " return the same object
console.log(typeof str, typeof str2)
console.log(str === str2)

// index string
console.log(str[5])

// Loop throught a string, like an array
console.log(str.length, str2.length)
for(let i=0; i<str.length; i++){
  console.log(str[i])
}

for(let i=0; i<str.length; i++){
  if(str[i] === "W"){
    console.log(str[i])
  }
}

// Strings are immutable
str[6] = "x"
console.log(str)

// String concatenation
const prenom = "Antonio"
const nom = "Pisanello"
const nomComplet = prenom + " " + nom
console.log(nomComplet)

// String formatting
console.log(`Votre nom complet est: ${nomComplet}`)

// String comparison
console.log("aaa" < "aaa")

// String functions
// SOURCE: https://www.w3schools.com/js/js_string_methods.asp
console.log(prenom.toUpperCase())
console.log(prenom.search("to"))
console.log(prenom.replace("to", "TO"))