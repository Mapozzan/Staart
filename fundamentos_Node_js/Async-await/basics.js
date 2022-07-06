(async () =>{

const { exec } = require('child_process')
const {
    promises: {
        readFile,
        writeFile
    },
    readFileSync,
} = require('fs')

const { join } = require('path')
const packageJsonPath = join(__dirname,'..','package.json')
const destPath = join(__dirname, 'packageAsync.json')

const copyFile = async (source, dest) => {
    try{
        const data = await readFile(source)
        console.log('Deu certo a Leitura')
        await writeFile(dest,data)
    } catch (error) {
        console.error('Pego no catch', error)
    } finally {
        console.log('Executo independentemente de erro ou sucesso')
    }
}

await copyFile(packageJsonPath, destPath)

/*********************************************************** */

const example = async () => {
    const [r1,r2,r3] = await Promise.all([
        Promise.resolve(3),
        Promise.resolve(7),
        Promise.resolve(1),
    ])
    return r1 + r2 + r3
}

console.log(await example())


/*********************************************************** */

const {
    withPromises:{
        authenticate,
        listPosts,
        getPost,
    }
} = require('../helpers/social-media')

const getFirstPost = async(username,passworrd) => {
    const token = await authenticate(username,passworrd)
    const [{ id }] =await listPosts(token)
    return getPost(token, id)
}

try{
    const post = await getFirstPost('staart','nodelife')
    console.log(post)
} catch(error) {
    console.error('deu ruim', error)
}



})()






