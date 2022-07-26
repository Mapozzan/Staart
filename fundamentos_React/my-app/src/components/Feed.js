import React from 'react';


import clockIcon from '../images/clock.svg'
import userIcon from '../images/user.svg';
import loader from '../images/loader-primary.svg'
import emptyFolderIcon from '../images/empty-folder.svg'
import cloudError from '../images/cloud-error.svg'


import '../styles/Feed.css'
import FeedStatus from './FeedStatus';

function Feed(props) {

    if (props.isLoading) {
        return < img src={loader} alt='Loadig' className='spin' />
    }

    if(props.hasError){
        <FeedStatus image={cloudError} title='Algo deu errado' subtitle='Não foi possivel carregar o seu feed.Tente novamente mais tarde'/>
    }


    if (props.posts.length === 0) {
        return (
            <FeedStatus image={emptyFolderIcon} title='Não encontramos nada' subtitle='Parece que você e seus amigos não postaram nada. Começe a escrever uma nova história!'/>
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