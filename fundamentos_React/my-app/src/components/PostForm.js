import { useState } from 'react';

import '../styles/PostForm.css'

import userIcon from '../images/user.svg';
import paperPlaneIcon from '../images/paper-plane.svg'


function PostForm(props) {

    const [history, setHistory] = useState('');
    const [userName, setUserName] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        props.onSubmit([history,userName]);

        setHistory('');
        setUserName('');
    }

    return(
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
        
    )
}

export default PostForm;