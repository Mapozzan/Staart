import error from "../config/errors";

export async function getPostsList(){
    const response = await  fetch('http://localhost:3001/posts')

    if (!response.ok){
        return false;
    }

    const body = await response.json();

    return body.map((post) => ({
        ...post,
        publisheAt: new Date(post.publisheAt),
    }));
}

export async function getMostViewedPostsList(){
    const response = await  fetch('http://localhost:3001/posts/most-viewed')

    if (!response.ok){
        return false;
    }

    const body = await response.json();

    return body.map((post) => ({
        ...post,
        publisheAt: new Date(post.publisheAt),
    }));
}

export async function createPost({history,userName}){

    const response = await fetch('http://localhost:3001/posts',
        {method : 'POST',   
        body: JSON.stringify({
            content : history,
            userName,
        }),
        headers : {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        const body = await response.json();

        return error[body.code] || 'Ocorreu um erro ao cadastrat um post';
    }

    return true;
}