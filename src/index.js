import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const yt_API_key = 'AIzaSyDqOz5nGSISKm9sKX0bpfAr9F0eM9Wnipo';


// who needs access to video data?
// - video detail
// - list
// - list item

// Create a new component. This component should
// produce some HTML.
// =>  is a 'fat arrow' -- ES6
class App extends Component {
    // constructor always gets called w props
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selected_video: null
        };

        YTSearch({key: yt_API_key, term: "Rick Ross"}, (videos) => {
            this.setState({
                videos: videos,
                selected_video: videos[0]
            });
        });
    }

    videoSearch(term) {
        YTSearch({key: yt_API_key, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selected_video: videos[0]
            });
        });
    }

    // props.videos now available on VideoList
    render () {
        return (
            <div>
            <SearchBar
                onSearchTermChange={ (term) => this.videoSearch(term)}
            />
            <VideoDetail video={this.state.selected_video}/>
            <VideoList
                videos={this.state.videos}
                onVideoSelect={selected_video => this.setState({selected_video})}
            />
            </div>
        )
    }
};

// Take this component's generated HTML and put it
// on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
