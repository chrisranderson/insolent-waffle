'use strict';
var React  = require('react');
var api = require('server-api')

var Collection = React.createClass({
    getInitialState: function () {
        return {
            title: 'Loading...',
            subtitle: '',
            exhibits: []
        }
    },

    componentDidMount: function () {
        api.getCollection(this.props.params.id, (collection) => {
            this.setState({
                title: collection.title,
                subtitle: collection.summary
            })
        });

        api.getExhibits(this.props.params.id, (exhibits) => {
            this.setState({
                exhibits: exhibits
            })
        });
    },

    render: function() {
        return (

            <div className='container'>
                <h1>{this.state.title}</h1>
                <div className="collection-subtitle">{this.state.subtitle}</div>
                Collection page?
            </div>

        );
    }
});

module.exports = Collection;