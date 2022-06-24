import React from 'react';
import { addBook, updateBook } from '../../../helper/api';

const BookForm = () => {

    const updateBookHandler = async () => {
        try {
            const updatedBook = await updateBook();
            console.log('Updated Book: ',updatedBook)
        } catch (err) {
            console.log('Update Book Failed: ',err)
        }
    }

    return(
        <div>

        </div>
    )
}

export default BookForm;