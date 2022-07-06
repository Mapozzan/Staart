// Promise: É um objeto que irá retornar algo dentro dele - Rejected( Quando deu Erro) | Fullfiled (Quando foi resolvido)

// .then((data) => {...}) - recebe um callback usado para objeto da promise
// .catch((error) => {..}) - metodo para tratar um erro da promise.

const {
    promises: {
        readFile,
        writeFile,
    }
} = require('fs')

const { join } = require('path')

const packageJsonPath = join(__dirname, '.' ,'package.json')
const destPath = join(__dirname, 'package_Promise.json')

//********* Aula Programação Assincrona com Promise
//readFile(packageJsonPath)  // Promise de leitura
//    .catch((error) => {
//        console.log('Deu erro, avisando que irá subir', error.message)
//        return Promise.reject(error)
//    })             
//    .then((data) => {
//        console.log('Terminei de Ler')
//        return writeFile(destPath, data)      // Promise da escrita
//    })
    //Resultado da promise de escrita
//    .then (() => {
//        console.log('Terminei de escrever')
//    })
//    .catch((error) =>{
//        console.log('Deu erro de novo', error.message)
//    } )
//***********************************

//********* Aula Customizando erros com Promises*/
readFile(packageJsonPath)      
    .then(
        // só cai aqui se o ReafFile2 der certo
        // podemos retornar valores puros
    )
    .then (
        //podemos retornar outra promise
        (data) => writeFile(destPath, data)
    )
    .then(
        // só cai aqui se o writeFile for fullfilled
        () => console.log('cópia feito com sucesso')
    )
    .catch(
        //lidando com erro
        (error) => {
            if(error.code == 'Enoent'){
                return Promise.reject(Error('Arquivo não existe'))
            }
            return Promise.reject(error)
        }
    )
    .finally(() => {
        console.log('Entra em operação independentemente de ter dado certo ou error ')
    })
//***********************************************/

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
        cachedContent ?? readPackageJson()
    )

getPackageJsonContent()
        .then(data => console.log(data))
        .then(() => getPackageJsonContent())
        .then(data => console.log(data))


//*****Aula transformando Callbacks em Promisses*******
const funcBaseadoEmCallback = (param,callback) => {
    setTimeout(() => {
        callback(undefined, param)
    },1000)
}

const funcBaeadoemPromises = param =>
    new Promise((resolve, rejects) => {
        funcBaseadoEmCallback(param, (error, data) =>{

            if(error){
                rejects(error)
            } else{
                resolve(data)
            }
        })
    })

funcBaeadoemPromises('será mesmo')
    .then((data) =>console.log(`${data}\né mesmo hein`))
