import React, { useState } from 'react';
import { addBook, updateBook } from '../../../helper/api';
import CloseIcon from '../../../assets/close.png';
import { handleTime } from '../../../helper/dataHandler';

const BookForm = (props) => {

    const { dimentions, close, oldBook, authorId, updateBooks, update } = props;
    const [formData, setFormData] = useState({
        title: oldBook?.title ? oldBook?.title : '',
        rating: oldBook?.rating ? oldBook?.rating : 0,
        relDate: oldBook?.release_date ? handleTime(oldBook?.release_date) : ''
    })

    console.log('Old Book: ',oldBook)

    const updateBooksLibrary = () => {
        updateBooks();
        close({visible: false, oldBook: null});
    }

    const newBookHandler = async () => {
        try {
            await addBook(formData.title, formData.rating, formData.relDate, authorId);
            updateBooksLibrary();
        } catch (err) {
            console.log('Update Book Failed: ',err)
        }
    }

    const updateBookHandler = async () => {
        try {
            await updateBook(formData.title, formData.rating, formData.relDate, authorId, oldBook.id);
            updateBooksLibrary();
        } catch (err) {
            console.log('Update Book Failed: ',err)
        }
    }

    const submitPressHandler = () => {
        oldBook ? updateBookHandler() : newBookHandler()
    }

    return(
        <div style={{height: dimentions.height, width: dimentions.width, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', display: 'flex', alignItems: 'center', position: 'fixed', top: 0}}>
            <div style={{height: dimentions.height/1.5, width: dimentions.width/2, backgroundColor: 'white', borderRadius: 10}}>
                <p style={{position: 'absolute', top: dimentions.height/5.5, left: dimentions.width/2.3, fontWeight: 'bold', fontSize: 25}}>{oldBook ? `Update ${oldBook.name}` : 'New Book Form'}</p>
                <div style={{height: dimentions.height/1.7, width: dimentions.width/2, marginTop: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div>
                        <div style={{height: dimentions.height/10, width: dimentions.width/5}}>
                            <p style={{fontWeight: 'bold', fontSize: 20}}>Title</p>
                            <input value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} type={'text'} style={{width: '95%', height: '50%', marginTop: '-4%'}}/>
                        </div>
                        <div style={{height: dimentions.height/10, width: dimentions.width/5}}>
                            <p style={{fontWeight: 'bold', fontSize: 20}}>Rating</p>
                            <input value={formData.rating} onChange={(e) => setFormData({...formData, rating: e.target.value})} type={'number'} style={{width: '95%', height: '50%', backgroundColor: 'white', marginTop: '-4%'}} />
                        </div>
                        <div style={{height: dimentions.height/10, width: dimentions.width/5}}>
                            <p style={{fontWeight: 'bold', fontSize: 20}}>Release Date</p>
                            <input value={formData.relDate} onChange={(e) => setFormData({...formData, relDate: e.target.value})} type={'text'} style={{width: '95%', height: '50%', marginTop: '-4%'}}/>
                        </div>
                        <div onClick={submitPressHandler} style={{cursor: 'pointer', height: dimentions.height/13, width: dimentions.width/5, backgroundColor: '#29c5f6', borderRadius: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10%'}}>
                            <p style={{fontWeight: 'bold', fontSize: 15, color: 'white'}}>SUBMIT</p>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => close({visible: false, oldBook: null})} style={{cursor: 'pointer', position: 'absolute', right: dimentions.width/3.8, top: dimentions.height/5.4}}>
                <img style={{width: 30, height: 30}} src={CloseIcon} />
            </div>
        </div>
    )
}

export default BookForm;