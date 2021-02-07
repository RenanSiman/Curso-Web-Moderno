// operador ... rest(juntar)/spread(espalhar)
// usar rest com parâmetro de função

// usar spread com objeto
const func = {nome: 'Jão', salario: 5000.00}
const clone = {ativo: true, ...func}

console.log(clone)

//usar spread com array
const grupoA = ['joao','pedrao', 'gui']
const grupoFinal = ['San', ...grupoA, 'Rafa']
console.log(grupoFinal)