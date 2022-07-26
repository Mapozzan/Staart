import { useState } from 'react';

import '../styles/PostForm.css'

import userIcon from '../images/user.svg';
import paperPlaneIcon from '../images/paper-plane.svg'
import loader from '../images/loader-white.svg'

import { createPost } from '../services/PostService';


function PostForm(props) {

    const [history, setHistory] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] =useState(null);

    async function handleSubmit(event) {

        try {
            event.preventDefault();

            setIsLoading(true);
            setErrorMessage(true);
        
            const response = await createPost({history,userName});

            if(response === true){
                props.onSubmit(history, userName);
                setUserName('');
                setHistory('');
                return;
            }

            setErrorMessage(response);

        } catch {
            setErrorMessage('Ocorreu um erro ao cadastrar um post')
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <form className='post-form' onSubmit={handleSubmit}>

            {errorMessage && (
                <div className='error-container'>
                    <strong>{errorMessage}</strong>
                </div>
            )}

            <input placeholder='Escreva uma nova história...' onChange={(event) => setHistory(event.target.value)} value={history} />

            <div>
                <img src={userIcon} alt='userIcon' />
                <input placeholder='Digite seu nome...' onChange={(event) => setUserName(event.target.value)} value={userName} />

                <button type='submit' disabled={isLoading}>
                {
                    !isLoading && <img src={paperPlaneIcon} alt='PaerIcon' />
                }
                {
                    isLoading && <img src={loader} alt='carregando' />
                }
                Publicar
                </button>
            </div>
        </form>
    )
}

export default PostForm;