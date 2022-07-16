import './styles/App.css';
import './styles/PostForm.css'
import './styles/Feed.css'

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg'
import clockIcon from './images/clock.svg'

function App() {

  const posts = [{
    id: Math.random(),
    content: 'Conteudo do post',
    userName: 'Matheus',
    publisheAt: new Date(),
  }]


  return (
    <div className="wrapper">
      <form className='post-form' onSubmit={() => alert('Formulario submetido')}>
        <input placeholder='Escreva uma nova história...'/>
        <div>
          <img src={userIcon} alt='userIcon'/>
          <input placeholder='Digite seu nome...' />
          
          <button type='submit'>
            <img src={paperPlaneIcon} alt='PaerIcon' />
            Publicar
          </button>
        </div>
      </form>

      <main>
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
      </main>
    </div>
  );
}

export default App;
