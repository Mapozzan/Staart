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

pingpongServerPromisse()
