import React from 'react'
import './Widgets.css';
import { 
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

function Widgets(){
    
    return(
        <div className='widgets'>

            <div className="widgets__input">
                <SearchIcon className='widgets__searchIcon' />
                <input type='text' placeholder='Search Twitter' />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId='1681530244841472000' />

                <TwitterTimelineEmbed
                    sourceType='profile'
                    screenName='kayky_mourao_'
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://twitter.com/kayky_mourao_"}
                    options={ {text: "react is awesome", via: "kayky_mourao_"} }
                />
            </div>
        </div>
    )

}

export default Widgets;