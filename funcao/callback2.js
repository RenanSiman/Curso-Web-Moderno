const notas = [7.4,6.9,9.5,8.0,5.9,8.7,6.7]

// sem Callback
const notasBaixas = []
for (let i in notas){
    if (notas[i] < 7)
        notasBaixas.push(notas[i])
}

console.log(notasBaixas)

// com Callback
const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)