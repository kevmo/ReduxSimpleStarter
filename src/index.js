import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const yt_API_key = 'AIzaSyDqOz5nGSISKm9sKX0bpfAr9F0eM9Wnipo';

// Create a new component. This component should
// produce some HTML.
// =>  is a 'fat arrow' -- ES6
const App = () => {
    return <SearchBar />
};

// Take this component's generated HTML and put it
// on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
