import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const Login = (props) => {

    const { setUser } = props;
    const [provider, setProvider] = useState(null);

    // USER SIGNOUT
    // const googleSignOut = () => {
    //     const auth = getAuth();
    //     signOut(auth).then(() => {
    //         setUser(null)
    //     }).catch((error) => {
    //     // An error happened.
    //     });
    // }

    const googleSignIn = () => {
        console.log('Hello World')
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            setUser(user)
        }).catch((error) => {
            console.log('Error: ',error)
        });
    }

    const getProvider = () => {
        setProvider(new GoogleAuthProvider())
    }

    useEffect(() => {
        if(!provider) {
            getProvider()
        }
    },[])

    return (
        <div style={{height: '100%', width: '100%'}}>
           <div onClick={googleSignIn}>
                <h1>Google Sign-In</h1>
           </div>
        </div>
    )

}

export default Login;