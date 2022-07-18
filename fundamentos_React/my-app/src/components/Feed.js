import React from 'react';

import emptyFolderIcon from '../images/empty-folder.svg'
import clockIcon from '../images/clock.svg'
import userIcon from '../images/user.svg';


import '../styles/Feed.css'

function Feed(props) {
    if (props.posts.length === 0) {
        return (
            <div className='feed-status'>
                <img src={emptyFolderIcon} alt='Empty Folder' />
                <h1>Não encontramos nada</h1>
                <h2>Parece que você e seus amigos não postaram nada. Começe a escrever uma nova história!</h2>
            </div>
        )
    }

    return (
        <React.Fragment>
            <header>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </header>

            <section className='feed'>
                {props.posts.map((post) => (
                    <article key={post.id}>
                        <p> {post.content} </p>

                        <footer>
                            <div className='user-details'>
                                <img src={userIcon} alt='User' />
                                <strong>{post.userName}</strong>
                            </div>

                            <div className='time'>
                                <img src={clockIcon} alt='clock' />
                                <span>Publicado em {post.publisheAt.toLocaleDateString('pt-br')}</span>
                            </div>
                        </footer>
                    </article>
                ))}
            </section>
        </React.Fragment>
    );
}

export default Feed;