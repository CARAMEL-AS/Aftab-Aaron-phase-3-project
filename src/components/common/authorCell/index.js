import React, { useEffect } from 'react';

const AuthorCell = (props) => {

    const { author, select } = props;

    useEffect(() => {
        console.log('Author: ',author)
    },[])

    return (
        <div onClick={() => select(author)}>

        </div>
    )
}

export default AuthorCell;