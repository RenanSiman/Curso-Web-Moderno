// par nome/valor
const saudation = 'Hi'

function exec(){
    const saudation = 'Hellowwww' // contexto léxico 2N
    return saudation
}

// Objetos são grupos aninhados de pares nome/valor
const client = {
    name: 'John',
    age: 23,
    weight: 70,
    address: {
        street: "One",
        number: 0
    }
}

console.log(saudation)
console.log(exec())
console.log(client)