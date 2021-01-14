const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // Pega chaves
console.log(Object.values(pessoa)) // Pega Valores
console.log(Object.entries(pessoa)) // Array de chave-valor

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: false,
    writable: true, // dado pode ser sobrescrito
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa)) // se enumarable for false, a dataNascimento não aparecerá na lista de chaves

//Object.assign() (EcmaScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
console.log(dest)
const obj = Object.assign(dest, o1, o2) // add prop. ao obj do 1º parâm., se prop existir, sobrescreve valor
console.log(dest)