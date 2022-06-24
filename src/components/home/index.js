import React, { useState, useEffect} from 'react';
import { getBooks, getAuthers } from '../../helper/api';
import { assignData } from '../../helper/dataHandler';
import AuthorCell from '../common/authorCell';
import AuthorDialog from '../common/authorDialog';
import BookForm from '../common/bookForm';
import { getAuth, signOut } from "firebase/auth";
import AddIcon from '../../assets/add.png';

const Home = (props) => {

    const { user, setUser, dimentions } = props;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [authorSelection, setAuthorSelection] = useState(null);
    const [newBookForm, setNewBookForm] = useState({
        visible: false,
        oldBook: null
    });

    const googleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser(null)
        }).catch((error) => { 
            console.log('Sign out Failed: ',error)
        });
    }

    const getData = async () => {
        setLoading(true)
        setData(assignData(await getAuthers(), await getBooks()))
    }

    const renderItem = (author, index) => {
        return (
            <AuthorCell key={index} author={author} select={setAuthorSelection} dimentions={dimentions} user={user} />
        )
    }

    useEffect(() => {
        getData();
    },[])

    useEffect(() => {
        setLoading(false);
    },[data])

    useEffect(() => {
        setAuthorSelection(null);
    },[newBookForm])

    console.log('Books: ',data);

    return (
        <div>
            <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                <div style={{width: dimentions.width/1.25, height: dimentions.height/10, display: 'flex', flexDirection: 'row'}}>
                    <p style={{fontSize: 30, fontWeight: 'bold', color: 'rgba(0,0,0,0.4)', marginLeft: '3%'}}>Welcome</p>
                    <p style={{fontSize: 30, fontWeight: 'bold', color: 'rgba(0,0,0,0.8)', marginLeft: '0.5%'}}>{user.name}</p>
                </div>
                <div style={{cursor: 'pointer', height: dimentions.height/14, width: dimentions.width/14, justifyContent: 'center', alignItems: 'center', display: 'flex', marginRight: '1%', backgroundColor: '#29c5f6', borderRadius: 7, marginTop: dimentions.height/17}}>
                    <img style={{height: 20, width: 20}} src={AddIcon} />
                    <p style={{fontWeight: '600', fontSize: 17, color: 'white'}}>ADD</p>
                </div>
                <div style={{position: 'absolute', top: dimentions.height/20, right: dimentions.width/2.2}}>
                    <p style={{fontWeight: 'bold', fontSize: 40, color: 'rgba(0,0,0,0.8)'}}>Authors</p>
                </div>
                <div style={{cursor: 'pointer', height: dimentions.height/14, width: dimentions.width/14, justifyContent: 'center', alignItems: 'center', display: 'flex', backgroundColor: '#ff4500', borderRadius: 7, marginTop: dimentions.height/17}} onClick={() => googleSignOut()}>
                    <p style={{fontWeight: '600', fontSize: 15, color: 'white'}}>LOGOUT</p>
                </div>
            </div>
            <div style={{width: dimentions.width, height: dimentions.height/1.25, position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                {!loading ? (
                    data && (
                        <div style={{height: dimentions.height/1.255, width: dimentions.width/1.1}}>
                            {data.map(renderItem)}
                        </div>
                    )
                ) : <p style={{fontSize: 20, fontWeight: 'bold'}}>LOADING...</p>}
            </div>
            {authorSelection && <AuthorDialog author={authorSelection} updateBook={setNewBookForm} dimentions={dimentions} close={setAuthorSelection} updateBooks={getData} />}
            {newBookForm.visible && <BookForm oldBook={newBookForm.oldBook} updateBooks={setData} />}
        </div>
    )
}

export default Home;