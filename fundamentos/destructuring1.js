// novo recurso ES2015

const person = {
    name: 'Ana',
    age: 15,
    address: {
        street: 'Street Two',
        number: 1000
    }
}

const {name, age} = person
console.log(name,age)
const {name: n, age: a} = person
console.log(n,a)

const {lastname, goodHumor = true} = person
console.log(lastname,goodHumor)

const {address: {street, number}} = person
console.log(street, number)