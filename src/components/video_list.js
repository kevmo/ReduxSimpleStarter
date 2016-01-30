// doesn't actually need data

import React from 'react';

import VideoListItem from './video_list_item';

// function component --> takes props arg
// class component --> this.props is available
const VideoList =  (props) => {

    const videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}
        />
    });


    return (
        <ul className="col-md-8 list-group">
            {videoItems}
        </ul>
    )
};

export default VideoList;
