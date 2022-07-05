const {
    readFileSync,
    writeFileSync,
    readFile,            //Asynchronously reads the entire contents of a file.
    writeFile,           //When file is a filename, asynchronously writes data to the file, replacing the file if it already exists. data can be a string or a buffer
} = require('fs')

const {
    join,
} = require('path')  //Encontrar o caminho do arquivo, independente do OS


const logDuration = (label,startTime) => {
    console.log(`${label} levou ${Date.now - startTime} ms`)
}

const copyFileBlocking = (source, dest) => {
    const startTime = Date.now()
    
    console.log('Lendo blocking content')
    const content = readFileSync(source)

    console.log('Escrevendo blocking content')
    writeFileSync(dest, content)

    logDuration('copyFileBlocking',startTime)
}

const sourcePath = join(__dirname ,'files', 'example.txt')
const destPath = join(__dirname ,'files', 'example.copy.blocking.txt')

copyFileBlocking(sourcePath,destPath)
console.log('*'.repeat(30))

const copyFileNonBlocking = (source, dest) => {
    const startTime = Date.now()
    console.log('Começou a copia non-blocking')

    readFile(source, (_err, data) => {  
        console.log('> Terminou de Ler non-blocking')
        writeFile(dest,data, (_err) => {
            
            console.log('>> Terminou de escrever non-blocking')

            logDuration('>> copyFileNonBlocking',startTime)
        })
    })
}


const destPathNonBlocking = join(__dirname ,'files', 'example.copy.nonblocking.txt')

copyFileNonBlocking(sourcePath, destPathNonBlocking)

console.log('Terminou mesmo?')
console.log('Continuando')

