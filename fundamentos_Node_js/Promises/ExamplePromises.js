const{
    withPromises: {
        authenticate,
        getPost,
        listPosts
    }, 
} =  require('../helpers/social-media')

const getFirstPost = (username, password) =>
    authenticate(username,password)
        .then(token => 
            listPosts(token)
                .then(([{ id }]) => getPost(token,id))
    )

getFirstPost('staart','nodelife')
    .then(console.log)
    .catch(console.error)
    
//********************************************/
//Segunda forma de fazer com o codigo mais linear*/

const listPostsWithContenxt = (token) =>
    listPosts(token)
        .then(posts => ({posts,token }))

const getPostWithContenxt = ({token, posts:[{ id }]}) =>
        getPost(token, id)

const getFirstPost2 = (username, password) =>
    authenticate(username,password)
    .then(listPostsWithContenxt)
    .then(getPostWithContenxt)

    getFirstPost2('staart','nodelife')
    .then(console.log)
    .catch(console.error)