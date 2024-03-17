import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { db } from './firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import FlipMove from 'react-flip-move';

function Feed(){

    const [posts, setPosts] = useState([])
/*
    useEffect(() => {
        analytics.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])
*/

    useEffect(() => {
        return onSnapshot(collection(db, 'posts'), (snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()))
        })
    }, [])

    return( 
        <div className='feed'>
            {/* header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            <FlipMove>
            {posts.map(post => (
                <Post 
                    key={post.text}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
            </FlipMove>


          {/*  <Post
                displayName="Kayky Mourao"
                username='KaykyMourao'
                verified={false}
                text= "Esta funcionando!!!"
                avatar='./avatar.png'
                image="https://media1.giphy.com/media/jgGTWxiHjQ76Wo8eMX/200_d.gif?cid=e826c9fckjkxpn844g4ich9eba4gptpvh2s50wpxk6nho5ib&ep=v1_gifs_search&rid=200_d.gif&ct=g"
            />*/}
            
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}

        </div>
    )

}

export default Feed;