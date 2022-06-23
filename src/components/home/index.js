import React, { useState, useEffect} from 'react';
import { getBooks, getAuthers } from '../../helper/api';
import { assignData } from '../../helper/dataHandler';

const Home = (props) => {

    const { user } = props;
    const [data, setData] = useState(null);

    const getData = async () => {
        setData(assignData(await getAuthers(), await getBooks()))
    }

    useEffect(() => {
        getData();
    },[])

    console.log('Data: ',data)

    return (
        <div>
            <h1>Home</h1>
            <h5>Logout</h5>
        </div>
    )
}

export default Home;