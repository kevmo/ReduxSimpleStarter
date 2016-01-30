import React, { Component } from 'react';

// function component
//const SearchBar = () => {
//    return <input />;
//};

// class component

class SearchBar extends Component {
    constructor(props) {
        // Component has its own props
        super(props);

        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    render() {
        return (
            <div className="search-bar">
            <input
                value={this.state.term}
                onChange={event =>  this.onInputChange(event.target.value)}/>
            </div>
        )
    }

}


export default SearchBar;
