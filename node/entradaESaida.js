const { stdout } = require("process")

const anonimo = process.argv.indexOf('-a') !== -1

// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Deu certo...\n')
    process.exit()
} else {
    process.stdout.write('Informe seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n','')
        
        process.stdout.write(`Kole ${nome}\n`)
        process.exit()
    })
}
