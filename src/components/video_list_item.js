import React from 'react';

// es6 {argumentName} syntax
const VideoListItem = (props) => {
    const video = props.video;
    const imageURL = video.snippet.thumbnails.default.url
    return (
        <li
            onClick={() => props.onVideoSelect(video)}
            className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object"
                         src={imageURL} alt=""
                         />
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        </li>)
};

export default VideoListItem;
