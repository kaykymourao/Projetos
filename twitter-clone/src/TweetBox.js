import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import { useState } from 'react'
import { db } from './firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import Avatarr from './avatar.png'
import { addDoc } from 'firebase/firestore';

const TweetBox = () => {

    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const sendTweet = (e) => {
        e.preventDefault()

        try {
            
            addDoc(collection(db, 'posts'), {
                displayName: "Kayky Mourao",
                username: "KaykyMourao",
                verified: false,
                text: tweetMessage,
                image: tweetImage,
                avatar: Avatarr,
            })

        } catch (error) {
            console.log(error)
        }

        setTweetMessage("")
        setTweetImage("")
    }
    
    return (
        <div className='tweetBox'>  
            <form>
                
                <div className='tweetBox__input'>
                    <Avatar src='./avatar.png' />
                    <input 
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening ?" type='text'/>
                </div>
                <input 
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className='tweetBox__imageInput' 
                    type="text" 
                    placeholder="Optional: Enter image URL" /> 
                <Button onClick={sendTweet} type='submit' className="tweetBox__tweetButton" >Tweet</Button>

            </form>
        </div>  
    )

}

export default TweetBox;