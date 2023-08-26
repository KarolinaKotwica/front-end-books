import { useState } from 'react';
import useBooksContext from './hooks/use-books-context';
import axios from 'axios';
import './style/promptPopup.css';

const PromptPopup = ({book, setIsOpen}) => {
    const [answer, setAnswer] = useState('')
    const [info, setInfo] = useState('')
    const { deleteBookById } = useBooksContext();

    const handleRemove =  async (e) => {
        const response = await axios.get('http://localhost:3001/test')

        if (answer === response.data[0]) {
            deleteBookById(book.id)
        } else {
            setInfo("Wrong password!")
        }
    }

    const handleChange = (e) => {
        setAnswer(e.target.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleRemove();
        }
    };

    return (
        <>
            <div className="prompt-container">
                <div className="prompt-content">
                    <p>You can delete only if you know the password!</p>
                    <input type="password" onChange={handleChange} onKeyUp={handleKeyPress} autoFocus required/>
                    <div className='button-group'>
                        <button onClick={() => setIsOpen(false)}>Cancel</button>
                        <button onClick={handleRemove}>Remove</button>
                    </div>
                    <span className='colorRed'>{info}</span>
                </div>
            </div>
        </>
    )

}

export default PromptPopup;