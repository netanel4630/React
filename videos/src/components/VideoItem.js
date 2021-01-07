import './VideoItem.css'
import React from 'react';

//call back in line 7 -> call onVideoSelect func from app.js and pass video object
const VideoItem=({video, onVideoSelect})=>{
    return(
        <div onClick={()=>onVideoSelect(video)} className="item video-item">
            <img alt ={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
        ) 
        
}

export default VideoItem;