const { error } = require('console')
const { EventEmitter} = require('events')

const pingpongServer = () => {
    const pingpong = new EventEmitter()

    pingpong
        .on('ping', () => {
            console.log('ping!!')
            setTimeout(() => {
                pingpong.emit('pong')
            }, 0)

        })
        .on('pong', () => {
            console.log('pong!!')
            setTimeout(() => {
                pingpong.emit('ping')
            }, 0)
        })

    pingpong.emit('ping')
}

const delay = (time) => new Promise(resolve => setTimeout(resolve,time) )
const pingpongServerPromisse = async () => {
    const pingpong = new EventEmitter()
    
    pingpong
    .on('ping', async () => {
        console.log('ping')
        await delay('500')
        pingpong.emit('pong')
    })
    .on('ping', async () => {
        console.log('pong')
        await delay('500')
        pingpong.emit('ping')
    })

    pingpong.emit('ping')
}

// pingpongServerPromisse()

const errors = async () => {
    const pingpong = new EventEmitter({
        captureRejections: true
    })
    
    pingpong
    .on('ping', async () => {
        console.log('ping')
        await delay('500')
        pingpong.emit('pong')
    })
    .on('ping', async () => {
        console.log('pong')
        await delay('500')
        pingpong.emit('ping')
    })
    .on('error', (error) =>{
        console.error('Erro emitido capturado',error.message)
    })
    .on('forceExplodeAsync',error => Promise.reject(error) )

    //**************Tratamento de error da para Node v14*********** */
    //pingpong[Symbol.for('nodejs.rejection')] = (error) => {
    //    console.error('Erro emitido capturado',error.message)
    //}
    //***************************************************************/

    
    pingpong.emit('ping')

    await delay(2000)
    pingpong.emit('error', Error('deu ruim depois de 2s'))

    await delay(1000)
    pingpong.emit('forceExplodeAsync', Error('deu ruim depois de 3s'))
}

errors()
