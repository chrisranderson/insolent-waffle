'use strict';
var React  = require('react');
var api = require('server-api');
var Fuse = require('fuse.js')
var SearchResults = require('./SearchResults');

var Searchbar = React.createClass({
    getInitialState: function () {
        return {
            value: '',
            collections: [],
            matches: []
        }
    },

    componentDidMount: function () {
        api.getCollections((collections) => {
            this.setState({
                collections: collections
            })
        })
    },

    // Each change should result in a search through the collections
    // Matching collections should be displayed beneath the searchbar
    onChange: function (event) {
        this.setState({
            value: event.target.value,
            matches: fuzzyFindMatches(this.state.collections, event.target.value)
        })
    },

    collapseResults: function() {
        this.setState({
            value: '',
            matches: []
        })
    },

    render: function() {

        return (
            <div className="col-md-offset-2 col-md-8">
                <label className='search-label' htmlFor='query'>Search for any HTML element or CSS attribute</label>
                <br/>
                <input className="searchbar"
                    name='query'
                    autoFocus
                    type='text'
                    onChange={this.onChange}
                    placeholder='e.g. "background" or "input"'
                    value={this.state.value}
                    onKeyDown={this.refs.results?
                        this.refs.results.keyDown :
                        function(){}
                    }
                />
                <SearchResults
                    ref="results"
                    query={this.state.value}
                    results={this.state.matches}
                    itemSelected={this.props.itemSelected}
                    collapseResults={this.collapseResults}
                />
            </div>
        );
    }
});

function fuzzyFindMatches(collections, query) {
    var fuse = new Fuse(collections, {
        keys: ["title"],

    })

    return fuse.search(query);
}

module.exports = Searchbar;
