import React, { useEffect } from 'react';

const AuthorCell = (props) => {

    const { author, select, dimentions, user } = props;

    const getCellBackgroundColor = () => {
        return author.id === user.id ? 'rgba(255, 215, 0, 0.7)' : 'rgba(128, 128, 128, 0.5)'
    }

    useEffect(() => {},[])

    return (
        <div onClick={() => select(author)} style={{cursor: 'pointer', height: dimentions.height/3, width: dimentions.width/4, backgroundColor: getCellBackgroundColor(), marginTop: '2%', borderRadius: 10 }} onClick={() => select(author)}>
            <div style={{height: dimentions.height/18, width: dimentions.width/5, alignItems: 'center', display: 'flex', marginLeft: '3%'}}>
                <p style={{fontWeight: 'bold', fontSize:23}}>{author.name}</p>
            </div>
            <div style={{height: dimentions.height/25, width: dimentions.width/5, alignItems: 'center', display: 'flex', marginLeft: '3%'}}>
                <p style={{fontWeight: 'bold', color: 'rgba(0,0,0,0.4)', fontSize: 16}}>{author.email}</p>
            </div>
            <div style={{height: dimentions.height/25, width: dimentions.width/5, alignItems: 'center', display: 'flex', marginLeft: '3%'}}>
                <p style={{fontWeight: 'bold', color: 'rgba(0,0,0,0.4)', fontSize: 16}}>YEAR:</p>
                <p style={{fontWeight: 'bold', color: 'rgba(0,0,0,1)', marginLeft: '2%', fontSize: 16}}>{author.birth_year}</p>
            </div>
            <div style={{height: dimentions.height/25, width: dimentions.width/5, alignItems: 'center', display: 'flex', marginLeft: '3%'}}>
                <p style={{fontWeight: 'bold', color: 'rgba(0,0,0,0.4)', fontSize: 16}}>BOOKS: </p>
                <p style={{fontWeight: 'bold', color: 'rgba(0,0,0,1)', marginLeft: '2%', fontSize: 16}}>{author.books.length}</p>
            </div>
        </div>
    )
}

export default AuthorCell;