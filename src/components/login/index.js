import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { login } from '../../helper/api';
import GoogleIcon from '../../assets/google.png';

const Login = (props) => {

    const { setUser } = props;
    const [provider, setProvider] = useState(null);
    const [GoogleButtonHighLight, setGoogleButtonHighLight] = useState(false);

    const loginHandler = async (name, email) => {
        const user = await login(name, email);
        setUser(user)
    }

    const googleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            loginHandler(user.displayName, user.email)
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
        <div style={{height: '100%', width: '100%', textAlign: 'center', justifyContent: 'center' }}>
            <div style={{marginTop: '10%'}}>
                <p style={{fontSize: 40, fontWeight: 'bold'}}>BOOKS</p>
            </div>
            <div
                onMouseEnter={() => setGoogleButtonHighLight(true)}
                onMouseLeave={() => setGoogleButtonHighLight(false)}
                style={{
                    width: '20%',
                    height: '10%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    right: window.innerWidth/2.5,
                    border: '1px solid black',
                    textAlign: 'center',
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    backgroundColor: GoogleButtonHighLight ? 'rgba(0,0,0,0.2)' : 'white',
                    position: 'absolute',
                    bottom: '10%'
            }} onClick={googleSignIn}>
                    <img style={{height: 30, width: 30, marginRight: '8%'}} src={GoogleIcon} />
                    <h4>Google Sign-In</h4>
            </div>
        </div>
    )

}

export default Login;