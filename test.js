/**
 * Testing callback functions
 * @param {function} f callback
 * @param {number} a param 1 for callback
 * @param {number} b param 2 for callback
 * @returns 
 */
function computation(f, a, b){
  return f(a, b)
}

function square(a){
  return a*a
}

function double(a) {
  return a*2
}

// function add(a,b) {
//   return a+b
// }

const add = function(x,y) {
  return x+y
}

const addF = (x,y) => x+y

const arrowWoutParams = _ => console.log("Hello World")


let a = null

// console.log(a)
// arrowWoutParams()

// console.log(add)
// console.log(add(1,2))

const nb1 = 2
const nb2 = 3
const testResult = computation((a,b) => a+b, nb1, nb2)
// const testResult2 = computation(function(a,b) {
//   return a-b
// }, 2, 3)
// console.log(testResult, testResult2)

// console.log(
//   (function(a,b) {
//     return a+b
//   })
//   (2, 3)
// )

const p1 = {
  "name": "Antonio",
  "lastname": "Pisanello",
  "age": 28
}
const p2 = {
  "name": "Bruno",
  "lastname": "Silva",
  "age": 28
}

for(let v in p1)
  console.log(p1[v])
// console.log(typeof obj.name)

const list = [1,2,3]
list[1] = 20
console.log(list)

list.push(10)
console.log(list)

// console.log(list.length)
// // list[40] = 12
// // console.log(list[390])

// for(let i=0; i<list.length; i++)
//   if(list[i]%2===0)
//     console.log(list[i])

// for(let n in list)
//   if(n%2===0)
//     console.log(n)

list.forEach((v) => {
  v*=v
  console.log(v)
})
