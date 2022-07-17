import React, { useState } from 'react';


import './styles/App.css';
import './styles/PostForm.css'
import './styles/Feed.css'

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg'
import clockIcon from './images/clock.svg'
import emptyFolderIcon from './images/empty-folder.svg'

function App() {

  const[history, setHistory] = useState('');
  const[userName, setUserName] = useState('');
  const [posts, setPosts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    setPosts([
      ...posts,
      {
      id: Math.random(),
      content: history,
      userName,
      publisheAt: new Date(),
    }
  ])

  setHistory('');
  setUserName('');
}

  return (
    <div className="wrapper">

      <form className='post-form' onSubmit={handleSubmit}>
        <input placeholder='Escreva uma nova história...' onChange={(event) => setHistory(event.target.value)} value={history} />

        <div>
          <img src={userIcon} alt='userIcon' />
          <input placeholder='Digite seu nome...' onChange={(event) => setUserName(event.target.value)} value={userName} />

          <button type='submit'>
            <img src={paperPlaneIcon} alt='PaerIcon' />
            Publicar
          </button>
        </div>
      </form>

      <main>

        {
          posts.length === 0 && (
            <div className='feed-status'>
              <img src={emptyFolderIcon} alt='Empty Folder' />
              <h1>Não encontramos nada</h1>
              <h2>Parece que você e seus amigos não postaram nada. Começe a escrever uma nova história!</h2>
            </div>
          )
        }

        {posts.length > 0 && (

          <React.Fragment>
            <header>
              <h1>Seu feed</h1>
              <h2>Acompanhe o que seus amigos estão pensando em tempo real</h2>
            </header>

            <section className='feed'>
              {posts.map((post) => (
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
        )}
      </main>
    </div>
  );
}

export default App;
