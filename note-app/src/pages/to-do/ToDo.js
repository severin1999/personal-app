import React, { useContext, useEffect } from 'react';
import Form from '../../components/to-do/Form';
import { Notes } from '../../components/to-do/Notes';
import { FirebaseContext } from '../../context/firebase/firebaseContext';
import Loader from '../../components/to-do/Loader';
import Alert from '../../components/to-do/Alert';


const ToDo = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes();
        // eslint-disable-next-line
    }, [])

    return (
        <div id='to-do' className='pt-4'>
            <Alert />
            <Form /> 
            <hr />
            {loading
                ? <Loader />
                : <Notes notes={notes} onRemove={removeNote} />
            }
        </div>
    )
}

export default ToDo;
