const process = require('process')
const fs = require('fs')

const comandoCount = 'count'
const comandoSize = 'size'
const comandoLength = 'length'
const comandoSearch = 'search'

const args = process.argv

const comandoSeleccionado = args[2]

const carpetaFile = './files/'

const archivos = fs.readdirSync(carpetaFile, 'utf-8')

switch(comandoSeleccionado){

    case comandoCount:
        contarArchivos(archivos)
        break
    
    case comandoSize:
        pesoArchivos(archivos)
        break
    
    case comandoLength:
        cantidadCaracteresArchivos(archivos)
        break
    
    case comandoSearch:
        const palabraPasada = args[3].split(" ")
        palabraBuscada = palabraPasada[0]
        archivosConPalabra(archivos, palabraBuscada)
        break
    
    default:
        console.log(`El comando ${comandoSeleccionado} no se reconoce. Los comandos validos son: ${comandoCount}, ${comandoSize}, ${comandoLength}, ${comandoSearch}`)

}

function contarArchivos(archivos){
    const cantArchivos = archivos.length
    console.log(`Cantidad de archivos en carpeta files: ${cantArchivos}`)
}

function pesoArchivos(archivos){
    let tamanioArchivo
    for (let i = 0; i < archivos.length; i++) {
        tamanioArchivo = fs.statSync(carpetaFile.concat(archivos[i])).size
        fs.appendFileSync('summary.txt', `${archivos[i]} ${tamanioArchivo} kb\r\n`)
    }
}

function cantidadCaracteresArchivos(archivos){
    let cantCaracteres
    let totalCaracteres = 0
    for (let i = 0; i < archivos.length; i++) {
        cantCaracteres = fs.readFileSync(carpetaFile.concat(archivos[i]), 'utf-8').length
        totalCaracteres += cantCaracteres
        fs.appendFileSync('summary.txt', `${archivos[i]} ${cantCaracteres} chars\r\n`)
    }
    fs.appendFileSync('summary.txt', `\r\n${totalCaracteres} chars`)
}

function archivosConPalabra(archivos, palabraBuscada){
    let archivo
    for (let i = 0; i < archivos.length; i++) {
        archivo = fs.readFileSync(carpetaFile.concat(archivos[i]), 'utf-8')
        if(archivo.includes(palabraBuscada)) console.log(archivos[i])
    }
}