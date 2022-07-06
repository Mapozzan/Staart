const {
    readFile,
    writeFile,
} = require('fs')

const { join } = require('path')

const packageJsonPath = join(__dirname,'.','package.json')
const testeError = join(__dirname,'.','package.js')
const destPath = join(__dirname, 'packageCopy.json')

// Sem Tratamento de Erro
readFile (packageJsonPath, (errorRead, data) => {

    writeFile(destPath, data, (errorWrite) =>{

    })
})

//Com Tratamento de Erro rudimentar
readFile(packageJsonPath, (errorRead,data) =>{
    if(!errorRead){
        console.log("1> Terminado de ler")
        writeFile(destPath,data, (errorWrite) => {
            if(!errorWrite){
                console.log("1>> Terminado de escrever")
            }
        })
    }
})

// Com Tratamento de Erro + early return
readFile(testeError, (errorRead, data) =>{
    if(errorRead){
        console.log("Erro de leitura", errorRead)
        return
    } 
    console.log("> Terminado de ler")
    writeFile(destPath, data, (errorWrite) =>{
        if(errorWrite){
            console.log(">> Erro de escrita", errorWrite)
            return
        }
        console.log(">> Terminado de escrever")
    })
})