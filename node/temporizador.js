const schedule = require('node-schedule')


const tarefa1 = schedule.scheduleJob('*/5 * 5 * * 5', function() {
    console.log('Teste do temporizador', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Tarefa 1 Cancelada.')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 5
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('2ª tarefa', new Date().getSeconds())
})