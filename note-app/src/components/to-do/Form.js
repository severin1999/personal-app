import React, { useState, useContext } from 'react';
import { AlertContext } from '../../context/alert/alertContext';
import { FirebaseContext } from '../../context/firebase/firebaseContext';

const Form = () => {
    const [value, setValue] = useState('');
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);

    const submitHandler = event => {
        event.preventDefault();

        if (value.trim()) {
            firebase.addNote(value.trim()).then(() =>  {
                alert.show('Note has been created', 'success');
            }).catch(() => {
                alert.show('Ooops! Something went wrong :(', 'error');
            })
            setValue('')
        } else {
            alert.show('Please, write your note before creating it', 'warning');
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Write down your note...'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}

export default Form;
