// ES8: Object.values/Object.entries
const obj = {a: 1, b: 4, c: 's'}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias da Notação literal
const nome = 'Renato'
const pessoa = {
    nome,
    ola() {
        return 'Helloww'
    }
}

console.log(pessoa.nome,pessoa.ola())

// Class
class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'miau'
    }
}
console.log(`O cachorro faz ${new Cachorro().falar()}`)

