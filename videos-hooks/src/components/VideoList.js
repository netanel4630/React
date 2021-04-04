import React from 'react';
import VideoItem from './VideoItem'

const VideoList=({videos, onVideoSelect})=>{  //instead of props and line 6 call to props.video

    const renderList = videos.map((video)=>{
        return <VideoItem key={video.id.videoId} video = {video} onVideoSelect={onVideoSelect}/>
    })

    return <div className="ui relaxed divided list">{renderList}</div>
}

export default VideoList;