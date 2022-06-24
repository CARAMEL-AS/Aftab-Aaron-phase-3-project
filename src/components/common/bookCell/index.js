import React, { useEffect } from 'react';
import { handleTime } from '../../../helper/dataHandler';

const BookCell = (props) => {

    const { book, dimentions } = props;

    /**
     * author_id: 1
        id: 2
        rating: 10
        release_date: "1970-01-01T00:32:53.920Z"
        title: "The Yellow Meads of Asphodel"
     */

    useEffect(() => {
        console.log('Book: ',book)
    },[])

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <div style={{width: '95%', backgroundColor: 'rgba(0,0,0,0.3)', marginBottom: '2%', borderRadius: 10, paddingLeft: '2%'}}>
                <p style={{width: '70%', fontWeight: 'bold', fontSize: 20, color: 'rgba(0,0,0,0.9)'}}>{book.title}</p>
                <div style={{flexDirection: 'row', display: 'flex', marginTop: '-4%'}}>
                    <p style={{fontWeight: '700', color: 'rgba(0,0,0,0.3)'}}>Release Date: </p>
                    <p style={{fontWeight: '700', color: 'rgba(0,0,0,0.6)', marginLeft: '0.5%'}}>{handleTime(book.release_date)}</p>
                    <div style={{flexDirection: 'row', display: 'flex', marginLeft: '2%'}}>
                        <p style={{fontWeight: '700', color: 'rgba(0,0,0,0.3)'}}>Rating: </p>
                        <p style={{fontWeight: '700', color: 'rgba(0,0,0,0.8)'}}>{book.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCell;