import React, { useEffect, useState } from 'react'
import { useQuoteContext } from './context/useQuoteContext';
import './style/quoteBox.css'

const API_URL = '/v1/quotes';
const QuoteBox = () => {
    const [newQuote, setNewQuote] = useState(true);
    const { state, dispatch } = useQuoteContext();

    const loadQuote = async () => {
        const data = await fetch(API_URL, {
            headers: {
                'X-Api-Key': process.env.REACT_APP_API_KEY
            }
        })
            .then((res) => res.json())
        //console.log(data[0]);
        dispatch({
            type: 'NEW_QUOTE',
            payload: data[0]
        })
        setNewQuote(false);
    }

    useEffect(() => {
        if (newQuote)
            loadQuote();

        //console.log(state);
    }, [newQuote])

    return (
        <>
            {state ? (
                <div className='quote-box'>
                    <div className="card">
                        <div className="card-header">
                            Quote
                        </div>
                        <div className="card-body">
                            <blockquote className="blockquote mb-0">
                                <p>{state.quote}</p>
                                <footer className="blockquote-footer"><cite title="Source Title">{state.author}</cite></footer>
                                <a href={'https://twitter.com/intent/tweet?hashtags=' + 'quotes,' + state.category + '&text=' +
                                    encodeURIComponent('"' + state.quote + '" ' + ' - ' + state.author)} target="_blank">
                                    <i className="fa fa-twitter-square btn" style={{ fontSize: '40px' }}></i>
                                </a>
                                <input type="button" className='btn btn-primary' value="New Quote" onClick={() => { setNewQuote(true) }} />
                            </blockquote>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </>
    )
}

export default QuoteBox