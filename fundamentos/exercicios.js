// Q1
const { result } = require("lodash")

function cumprimentar(text){
    return 'Olá, ' + text + '!'
}
//console.log(cumprimentar('Renan'))

// Q2
function converterIdadeEmAnosParaDias(age){
    return age*365 
}
//console.log(converterIdadeEmAnosParaDias(23))

// Q3
function calcularSalario(horas, valHora){
    let salario = horas*valHora
    return 'Salário igual a R$ ' + salario
}
//console.log(calcularSalario(150,40.5))

// Q4
function nomeDoMes(num){
    switch(num){
        case 1:
            return 'janeiro'
        case 2:
            return 'fevereiro'
        case 3:
            return 'março'
        case 4:
            return 'abril'
        case 5:
            return 'maio'
        case 6:
            return 'junho'
        case 7:
            return 'julho'
        case 8:
            return 'agosto'
        case 9:
            return 'setembro'
        case 10:
            return 'outubro'
        case 11:
            return 'novembro'
        case 12:
            return 'dezembro'
    }
}
//console.log(nomeDoMes(1), nomeDoMes(4))

// Q5
function maiorOuIgual(num1,num2){
    if (num1 === num2)
        return true
    else if (num1 > num2)
        return true
    else 
        return false
}
//console.log(maiorOuIgual(0,0),maiorOuIgual(0,"0"),maiorOuIgual(5,1))

// Q6
function inverso(arg){
    if (typeof arg === 'number')
        return arg*-1
    else if (typeof arg === 'boolean')
        return !arg
    else if (typeof arg === 'string')
        return 'booleano ou número esperados, mas o parâmetro é do tipo string'
}
//console.log(inverso(true) + '\n', inverso("6") + '\n', inverso(-2000) + '\n', inverso("programação") + '\n')

// Q7
function estaEntre(num, min, max, inclusivo){
    if (inclusivo)
        return num >= min && num <= max
    else
        return num > min && num < max
}
//console.log(estaEntre())

// Q8
function multiplicar(num1,num2){
    let result = 0
    for (i=0; i<num1; i+=1){
        result += num2
    }
    return result
}
//console.log(multiplicar(5,5),  multiplicar(0,7))

// Q9
function repetir(rep,num){
    let vet = []
    for (i=0;i<num;i++)
        vet.push(rep)
    return vet
}
// console.log(repetir("código", 2), repetir(7,3))

// Q10
function simboloMais(num){
    if (num>0)
        return '+' + simboloMais(num-1)
    else
        return ''
}
//console.log(simboloMais(2), simboloMais(4))

// Q11
function receberPrimeiroEUltimoElemento(vet){
    return [ vet[0], vet[vet.length-1] ]
}
//console.log(receberPrimeiroEUltimoElemento([7,14,'olá']), receberPrimeiroEUltimoElemento([-100,'aplicativo',16]))

// Q12
function removerPropriedade(obj, prop){
    const copia_obj = {...obj}
    delete copia_obj[prop]
    return copia_obj

}
//console.log(removerPropriedade({a: 1, b: 2}, "a"))
//console.log(removerPropriedade({  id: 20,  nome: "caneta",  descricao: "Não preenchido"}, "descricao"))

// Q13
function filtrarNumeros(vet){
    let numbers = []
    for (i=0; i<vet.length; i++){
        if (typeof vet[i] === 'number')
            numbers.push(vet[i])
    }
    return numbers
}
//console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))

// Q14
function objetoParaArray(obj){
    return Object.entries(obj)
}
//console.log(objetoParaArray({  nome: "Maria",  profissao: "Desenvolvedora de software"}))
//console.log(objetoParaArray({  codigo: 11111,  preco: 12000}))

// Q15
function receberSomenteOsParesDeIndicesPares(vet){
    let pares = []
    for (i=0; i<vet.length; i++)
        if ((i % 2 == 0) && (vet[i] % 2 == 0))
            pares.push(vet[i])
    return pares
}
//console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]), receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]))

// Q16
function checarAnoBissexto(ano){
    if ((ano % 4 == 0) && (ano % 100 != 0))
        return true
    else if (ano % 100 == 0 && ano % 400 == 0)
        return true
    else 
        return false
}
console.log(checarAnoBissexto(2020), checarAnoBissexto(2100))