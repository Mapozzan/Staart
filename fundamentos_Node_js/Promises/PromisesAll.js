Promise.all([
    Promise.resolve(3),
    Promise.reject(Error('Promise 2 deu errado')),
    Promise.resolve(6),
])
.then(([r1,r2,r3]) => r1 + r2 + r3 )
.then(console.log)
.catch(console.error)


//*************************************************** */
Promise.allSettled([
    Promise.resolve(2),
    Promise.reject(Error('Promise falhou')),
    Promise.resolve(9),
])
    //[{status: 'fulfullied, value: } || {status: 'rejected', reason: Error }]
    .then(results => 
        results.filter(r => r.status == 'fulfilled').map(r => r.value)
    )
    .then(console.log)


//*************************************************** */

const delay = (time) =>
        new Promise((resolve) =>
            setTimeout(resolve,time)
        )

Promise.race([
    delay(600).then(() => '600ms'),
    delay(3000).then(() => '3s'),
    delay(5).then(() => '5ms')
    ])
    .then(console.log)


//*************************************************** */
Promise.any([
    Promise.reject(Error('Promise falhou')),
    Promise.reject(Error('Outra Promise falhou')),
//    Promise.resolve('Deu certo'),
])
    .then(console.log)
    .catch(err => console.error('Não deve ser chamado', err))