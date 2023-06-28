import React, {useEffect, useState} from 'react';
import axios from "axios";

import './Main.css'

function Main() {
    const [data, setData] = useState([]);


    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en');
            setData(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])


    return <div className='container'>
        <p  key={data.quoteLink}>{data.quoteText}</p>
        <button onClick={fetchData}>Send</button>
    </div>;
}

export default Main;
