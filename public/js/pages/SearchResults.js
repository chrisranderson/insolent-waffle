'use strict';
var React  = require('react');
var {Link} = require('react-router');
var _ = require('underscore');

var SearchResults = React.createClass({

    render: function() {
        return (

            <div>
                {this.props.results.slice(0, 10).map((result) => {
                    return (
                        <Link 
                            to={`/collections/${result._id}`} 
                            className="search-result"> 
                            {highlightMatches(result.title, this.props.query)} 
                        </Link>
                    )
                })}
            </div>

        );
    }
});

function highlightMatches(sample, query) {
    var charactersToMatch = _.uniq(query.split(''));

    var output = sample.split('').map(function(character, index) {
        return _.contains(charactersToMatch, character)? 
                <span className="highlighted-character" key={index}>{character}</span> : 
                <span key={index}>{character}</span>
    });  

    return output;
}

module.exports = SearchResults;