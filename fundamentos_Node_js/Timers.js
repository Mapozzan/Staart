const logCalled = () => {
    console.log('Teste de chamada')
}

setTimeout(logCalled,1000)

const timeoutID = setTimeout(() => {
    console.log('Teste de chamada1')
}, 3000)

clearTimeout(timeoutID)

const intevalID = setInterval(() => {
    console.log('Teste de chamada intervalo')
},1000)

setTimeout(() =>{
    clearInterval(intevalID)
},5000)