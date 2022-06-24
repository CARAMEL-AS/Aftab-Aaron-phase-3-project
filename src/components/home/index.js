import React, { useState, useEffect} from 'react';
import { getBooks, getAuthers } from '../../helper/api';
import { assignData } from '../../helper/dataHandler';
import AuthorCell from '../common/authorCell';
import AuthorDialog from '../common/authorDialog';
import BookForm from '../common/bookForm';
import { getAuth, signOut } from "firebase/auth";

const Home = (props) => {

    const { user, setUser } = props;
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
            <AuthorCell key={index} author={author} select={setAuthorSelection} />
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

    return (
        <div>
            <h1>Welcome {user.name}</h1>
            <div onClick={() => googleSignOut()}>
                <h5>Logout</h5>
            </div>
            <h2>Authers</h2>
            {!loading ? (
                data && (
                    <div>
                        {data.map(renderItem)}
                    </div>
                )
            ) : <h5>LOADING...</h5>}
            {authorSelection && <AuthorDialog author={authorSelection} updateBook={setNewBookForm} />}
            {newBookForm.visible && <BookForm oldBook={newBookForm.oldBook} />}
        </div>
    )
}

export default Home;