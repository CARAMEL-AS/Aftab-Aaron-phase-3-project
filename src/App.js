import React, { useEffect, useState } from 'react';
import Login from './components/login';
import Home from './components/home';
import { initializeApp } from "firebase/app";

const App = () => {

  const [user, setUser] = useState(null);
  const [pageDimensions, setPageDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  const dimentionChangeListener = () => {
    window.addEventListener('resize', () => {
      setPageDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    })
  }

  const initializeFirebaseApp = () => {
    const envVars = process.env;
    const firebaseConfig = {
      apiKey: envVars.REACT_APP_apiKey,
      authDomain: envVars.REACT_APP_authDomain,
      projectId: envVars.REACT_APP_projectId,
      storageBucket: envVars.REACT_APP_storageBucket,
      messagingSenderId: envVars.REACT_APP_messagingSenderId,
      appId: envVars.REACT_APP_appId,
      measurementId: envVars.REACT_APP_measurementId
    };
    
    initializeApp(firebaseConfig);
  }

  useEffect(() => {
    dimentionChangeListener();
    initializeFirebaseApp();
  },[])

  return(
    <div style={{height: pageDimensions.height, width: pageDimensions.width}}>
      {!user ? <Login setUser={setUser} /> : <Home user={user} />}
    </div>
  )

}

export default App;