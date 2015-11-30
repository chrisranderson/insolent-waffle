'use strict';
var React  = require('react');
var _ = require('underscore');

var SearchResults = React.createClass({

    render: function() {
        return (

            <div>
                {this.props.results.slice(0, 10).map((result) => {
                    return (
                        <div className="search-result"> {highlightMatches(result.title, this.props.query)} </div>
                    )
                })}
            </div>

        );
    }
});

function highlightMatches(sample, query) {
    var charactersToMatch = _.uniq(query.split(''));

    var output =  sample.split('').map(function(character, index) {
        return _.contains(charactersToMatch, character)? 
                <span className="highlighted-character" key={index}>{character}</span> : 
                <span key={index}>{character}</span>
    });  

    return output;
}

module.exports = SearchResults;