const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// invocando a função factory
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

// Alterado pq o node manteve o cache da função (cache do objeto)
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

// Não é alterado pq D chama um novo objeto (novas instâncias)
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)