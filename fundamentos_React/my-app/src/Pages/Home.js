import { useState,useEffect } from 'react';

import Feed from '../components/Feed';
import PostForm  from '../components/PostForm';
import {getPostsList} from '../services/PostService'

function Home() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(() =>{

        async function loadPosts() {    

            try {   
                const postList = await getPostsList()

                if (!postList){
                    setHasError(true);
                    return;
                }
                setPosts(postList);
            } catch {
                setHasError(true);
            } finally {
                setIsLoading(false);
            }
        }

        loadPosts();
    },[])


    function handleSubmit(history, userName) {
        setPosts([
            ...posts,
            {
                id: Math.random(),
                content: history,
                userName,
                publisheAt: new Date(),
            }
        ])
    }

    return (
        <>
            <PostForm onSubmit={handleSubmit} />

            <main>
                <Feed posts={posts} title='Seu Feed' subtitle ='Acompanhe o que seus amigos estão pensando em tempo real' 
                isLoading={isLoading}
                hasError={hasError}   
                />
            </main>
        </>
    )


}

export default Home