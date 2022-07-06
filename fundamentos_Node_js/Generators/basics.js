// generator function possui o *
function* example(arg) {
    const incremented = arg + 1
    console.log(`me invocou com ${arg}`)
    yield arg

    console.log('estava "suspeded" mas agora estou "resumed"')
    console.log(`ainda tenho o contexto da função: arg=${arg}, incremented=${incremented}`)
    const resumedArg = yield incremented

    console.log(`fui "resumed" recebendo o valor ${resumedArg}`)
    yield resumedArg + 3

    console.log('"resumed" novamente, mas agora é a última')
    return 42
    // lembrando que não retornar nada === return === return undefined
}

//console.log(example)
//const generator = example()
//console.log(generator)
//console.log(generator.next())

function* naturals() {
    let n = 0
    while(true){
        yield n++
    }
}
// Não vai travar: só cria o genarator
const N = naturals()

//for (const n of naturals()){
//    if (n > 20) break
//    console.log(n)
//}

function* hello(){
    yield 'Hello'
    yield 'World'
    yield '!!!'
}

//for (const msg of hello()){
//    console.log(msg)
//}


const take = (limit,gen) => {
    const acc = []
    for(let i =0; i< limit; i++){
        const { value, done } = gen.next()
        if (done) {
            if(value != undefined) {
                acc.push(value)
            }
            break
        }
        acc.push(value)
    }
    return acc
}
//console.log(
//    take(10, N)
//)


//iterator protocol
//Iterator = {next: () => { value: T, done : boolean }}

const ZeroToNIterator = (n) => ({
    counter: 0,
    next() {
        const done = this.counter > n
        return{
            done,
            value: done ? undefined : this.counter++
        } 
    }
})

// iterable protocol
// iterable = {[Symbol.interator]: () => Iterator}

const ZeroToN = (n) => ({
    [Symbol.iterator](){
        return ZeroToNIterator(n)
    }
})

for(const n of ZeroToN(5)){
    console.log(n)
}