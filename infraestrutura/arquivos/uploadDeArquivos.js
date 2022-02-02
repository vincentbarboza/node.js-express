const fs = require('fs')
const path = require('path')

module.exports = (caminho, nomeDoArquivo, callbackImagenCriada) => {
    const tiposValidos = ['jpg', 'png', 'jpeg']
    const tipo = path.extname(caminho)
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    if(tipoEhValido) {
        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`
        fs.createReadStream(caminho)
        .pipe(fs.createWriteStream(novoCaminho))
        .on('finish', () => callbackImagenCriada(false, novoCaminho))        
    } else {
        const erro = 'Tipo e invalido'
        console.log('ERRO! Tipo invalido')
        callbackImagenCriada(erro)
    }
}


