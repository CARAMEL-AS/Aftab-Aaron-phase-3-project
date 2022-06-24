import React, { useEffect } from 'react';

const AuthorCell = (props) => {

    const { author, select, dimentions } = props;

    useEffect(() => {
        console.log('Author: ',author)
    },[])

    return (
        <div style={{height: dimentions.height/3, width: dimentions.width/3, backgroundColor: 'red', marginTop: '2%', display: 'flex', flexDirection: 'row'}} onClick={() => select(author)}>

        </div>
    )
}

export default AuthorCell;