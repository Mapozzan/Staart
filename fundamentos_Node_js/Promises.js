// Promise: É um objeto que irá retornar algo dentro dele - Rejected( Quando deu Erro) | Fullfiled (Quando foi resolvido)

// .then((data) => {...}) - recebe um callback usado para objeto da promise
// .catch((error) => {..}) - metodo para tratar um erro da promise.

const {
    promise: {
        readFile,
        writeFile
    }
} = require('fs')

const { join } = require('path')

const packageJsonPath = join(__dirname,'.','package.json')
const destPath = join(__dirname, 'package_Promise.json')

// Promise de leitura
readFile(packageJsonPath)  
    .catch((error) => {
        console.log('Deu erro, avisando que irá subir', error.message)
        return Promise.reject(error)
    })             
    .then((data) => {
        console.log('Terminei de Ler')
        return writeFile(destPath, data)      // Promise da escrita
    })
    //Resultado da promise de escrita
    .then (() => {
        console.log('Terminei de escrever')
    })
    .catch((error) =>{
        console.log('Deu erro de novo', error.message)
    } )

let cachedContent = null

const readPackageJson = () => {
    console.log('Arquivo será lido')
    readFile(packageJsonPath, {encoding : 'utf8'}).then(data =>{
        console.log('Arquivo Lido')
        cachedContent = data
        return data
    })
}

const getPackageJsonContent = () =>
    Promise.resolve(
        cachedContent ?? readFile()
    )

getPackageJsonContent()
        .then(data => console.log(data))
        .then(() => getPackageJsonContent())
        .then(data => console.log(data))



