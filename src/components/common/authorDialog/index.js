import React, { useEffect, useState } from 'react';

const AuthorDialog = (props) => {

    const { author, updateBook, dimentions, close } = props;

    useEffect(() => {
        console.log('Render')
    },[])

    return(
        <div style={{height: dimentions.height, width: dimentions.width, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', display: 'flex', alignItems: 'center', position: 'absolute', top: 0}}>
            <div style={{height: dimentions.height/1.5, width: dimentions.width/2, backgroundColor: 'white', borderRadius: 10}}>
                <div style={{height: '10%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '1%' }}>
                    <p style={{fontSize: 25, fontWeight: 'bold'}}>{author.name}</p>
                </div>
                <div style={{height: '80%', width: '100%', backgroundColor: 'red', marginTop: '3%'}}>

                </div>
            </div>
        </div>
    )
}

export default AuthorDialog;