
const {
    withCallbacks: {
        authenticate,
        listPosts,
        getPost,
    }
} = require('./helpers/social-media.js')

const firstPost = (username, password, callback) => {
    
    authenticate(username, password, (errorAuth, token) => {
        if(errorAuth){
            callback(errorAuth)
            return
        }

        listPosts(token, (errorList,posts) =>{
            if(errorList){
                callback(errorList)
                return
            }

            getPost(token, posts[0].id , (errorPost, post) => {
            if(errorPost){
                callback(errorPost)
                return
            }

            //Temos o Post
            callback(undefined, post)
        })      

        })
    })

}

firstPost('staart', 'nodelife', (error, post) => {
    if(error){
        console.log('Deu ruim',error)
        return
    }
    console.log('Temos o post')
    console.log(post)
})