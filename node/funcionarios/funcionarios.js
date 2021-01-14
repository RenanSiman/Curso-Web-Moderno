const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'Brazil'
const mulheres = f => f.genero === 'F'
const MenorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // Procurar: mulher-chinesa-menor salario
    //console.log(funcionarios)
    const func = funcionarios.filter(chineses).filter(mulheres).reduce(MenorSalario)

    console.log(func)
})






