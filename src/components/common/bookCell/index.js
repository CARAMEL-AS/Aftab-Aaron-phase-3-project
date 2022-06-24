import React, { useEffect } from 'react';
import { handleTime } from '../../../helper/dataHandler';
import EditIcon from '../../../assets/edit.png';
import DeleteIcon from '../../../assets/delete.png';
import { deleteBook, updateBook } from '../../../helper/api';

const BookCell = (props) => {

    const { book, dimentions, update, delBook } = props;

    const updateBookPopUp = () => {
        updateBook({
            visible: true,
            oldBook: book
        })
    }

    const deleteBookHandler = async () => {
        try {
            await deleteBook(book.id);
            delBook(book.id);
        } catch (err) {
            console.log('Book Delete Error: ',err)
        }
    }

    useEffect(() => {},[])

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <div style={{width: '95%', backgroundColor: 'rgba(0,0,0,0.3)', marginBottom: '2%', borderRadius: 10, paddingLeft: '2%', flexDirection: 'row', display: 'flex'}}>
                <div style={{width: dimentions.width/3.1}}>
                    <p style={{width: '70%', fontWeight: 'bold', fontSize: 20, color: 'rgba(0,0,0,0.9)'}}>{book.title}</p>
                    <div style={{flexDirection: 'row', display: 'flex', marginTop: '-6%'}}>
                        <p style={{fontWeight: '700', color: 'rgba(0,0,0,0.3)'}}>Release Date: </p>
                        <p style={{fontWeight: '700', color: 'rgba(0,0,0,0.6)', marginLeft: '0.5%'}}>{handleTime(book.release_date)}</p>
                        <div style={{flexDirection: 'row', display: 'flex', marginLeft: '2%'}}>
                            <p style={{fontWeight: '700', color: 'rgba(0,0,0,0.3)'}}>Rating: </p>
                            <p style={{fontWeight: '700', color: 'rgba(0,0,0,0.8)'}}>{book.rating}</p>
                        </div>
                    </div>
                </div>
                <div style={{flexDirection: 'row', display: 'flex', width: dimentions.width/7, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div onClick={updateBookPopUp} style={{cursor:'pointer', height: 50, width: 50, borderRadius: 50, border: '1px solid black', display: 'flex', justifyContent: 'center', alignItems: 'center', marginRight: '4%'}}>
                        <img style={{height: 30, width: 30}} src={EditIcon} />
                    </div>
                    <div onClick={deleteBookHandler} style={{cursor:'pointer', height: 50, width: 50, borderRadius: 50, border: '1px solid #ff4500', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '4%'}}>
                        <img style={{height: 30, width: 30}} src={DeleteIcon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCell;