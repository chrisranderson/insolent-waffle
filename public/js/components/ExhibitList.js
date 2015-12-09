'use strict';
var React  = require('react');
var {showIf} = require('styles');
var Exhibit = require('Exhibit');
var HTMLEditor = require('./HTMLEditor')
var api = require('server-api')

var ExhibitList = React.createClass({
    getInitialState: function () {
        return {
            proposing: false
        }
    },

    proposeExhibit: function () {
        this.setState({
            proposing: true
        })
    },

    addExhibit: function (exhibit) {
        api.addExhibit({
            collectionId: this.props.collectionId,
            exhibit: exhibit
        })
    },

    render: function() {

        if (this.props.exhibits.length === 0 && !this.state.proposing) {
            return (
                <div>
                    <h2>Sorry, there aren't any exhibits for {this.props.collectionName} yet.</h2>
                    <button 
                        className="submit-button"
                        onClick={this.proposeExhibit}>
                        Propose an exhibit
                    </button>
                </div>
            )
        }

        return (
            <div>
                <Exhibit 
                    comment="This exhibit is to be used for submitted new exhibits."
                    collectionId={this.props.collectionId} 
                    collectionName={this.props.collectionName}
                    new={true} 
                    style={showIf(this.state.proposing)} 
                    onSubmit={this.addExhibit}
                />
                {this.props.exhibits.map((exhibit, index) => {
                    return (
                        <Exhibit 
                            collectionId={this.props.collectionId}
                            new={false}
                            exhibit={exhibit}
                            key={index}/>

                    )
                })}
            </div>
        );
    }
});

module.exports = ExhibitList;