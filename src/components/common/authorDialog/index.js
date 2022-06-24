import React, { useEffect, useState } from 'react';
import BookCell from '../bookCell';
import CloseIcon from '../../../assets/close.png';

const AuthorDialog = (props) => {

    const { author, updateBook, dimentions, close, updateBooks } = props;

    const deleteBook = (bookId) => {
        close(null);
        updateBooks();
    }

    const renderCell = (item, index) => {
        return (
            <BookCell key={index} book={item} dimentions={dimentions} update={updateBook} delBook={deleteBook} />
        )
    }

    useEffect(() => {
        console.log('Render')
    },[])

    return(
        <div style={{height: dimentions.height, width: dimentions.width, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', display: 'flex', alignItems: 'center', position: 'fixed', top: 0}}>
            <div style={{height: dimentions.height/1.5, width: dimentions.width/2, backgroundColor: 'white', borderRadius: 10}}>
                <div style={{height: '10%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1%' }}>
                    <p style={{fontSize: 25, fontWeight: 'bold'}}>{author.name}</p>
                </div>
                <div style={{height: '80%', width: '100%', marginTop: '3%'}}>
                    {author.books.length > 0 ? author.books.map(renderCell) : (
                        <div style={{height: dimentions.height/2, width: dimentions.width/2, display: 'flex', justifyContenr: 'center', alignItems: 'center'}}>
                            <p style={{fontWeight: 'bold', fontSize: 30, color: 'rgba(0,0,0,0.2)'}}>No Books!</p>
                        </div>
                    )}
                </div>
                <div onClick={() => close(null)} style={{cursor: 'pointer', position: 'absolute', right: dimentions.width/3.8, top: dimentions.height/5.4}}>
                    <img style={{width: 30, height: 30}} src={CloseIcon} />
                </div>
            </div>
        </div>
    )
}

export default AuthorDialog;