'use strict';
var React  = require('react');
var {Link} = require('react-router');
var _ = require('underscore');



var SearchResults = React.createClass({

    getInitialState: function() {
        return {
            highlighted: 0,
        }
    },

    keyDown: function(event) {
        var left = 37;
        var up = 38;
        var right = 39;
        var down = 40;
        var enter = 13;
        var currentlyHighlighted = this.state.highlighted;

        if (event.keyCode == enter) {
            var location = $('.highlighted-result').attr('href')
            this.props.itemSelected(location);
        }

        if (currentlyHighlighted !== 0 &&
            (event.keyCode == left || event.keyCode == up)) {
            currentlyHighlighted--;
        }

        if (currentlyHighlighted !== 9 &&
            (event.keyCode == right || event.keyCode == down)) {
            currentlyHighlighted++;
        }

        this.setState({
            highlighted: currentlyHighlighted
        })
    },

    render: function() {
        return (

            <div>
                {this.props.results.slice(0, 10).map((result, index) => {
                    return (
                        <Link
                            onClick={this.props.collapseResults}
                            to={`/collections/${result._id}`}
                            className={`search-result ${this.state.highlighted === index ?
                                "highlighted-result" :
                                ""
                            }`}>
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
