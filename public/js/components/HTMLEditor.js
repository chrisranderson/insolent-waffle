'use strict';
var React  = require('react');
var {Link} = require('react-router')

var CodeMirror = require('react-codemirror');

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');
require('codemirror/mode/htmlmixed/htmlmixed');

/*
bespin
midnight
railscasts
tomorrow-night-bright
*/

var HTMLEditor = React.createClass({
    getDefaultProps: function () {
        return {
            code: ' '
        }
    },

    getInitialState: function() {
        return {
            code: this.props.code,
            iFrameId: `preview-${this.props.id}`
        };
    },

    updateCode: function(newCode) {
        this.setState({
            code: newCode
        });

        var previewFrame = $('#'+this.state.iFrameId)[0];
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
        preview.write(newCode);
        preview.close();
    },

    getCode: function() {
        return this.state.code;
    },

    render: function() {
        var options = {
            lineNumbers: true,
            mode: "htmlmixed",
            theme: 'monokai',
            autofocus: this.props.focus,
            indentUnit: 4,
            // for emmet
            profile: 'xhtml'
        };

        return(
          <div className="row">
              <div className="col-md-6">
                <CodeMirror 
                    id="editor" 
                    value={this.state.code} 
                    onChange={this.updateCode} 
                    options={options} 
                />
              </div>
              <div className="col-md-6">
                <iframe ref='iframe' id={this.state.iFrameId} sandbox="allow-same-origin"></iframe>
              </div>
          </div>
        )
    },

    componentDidMount: function () {
        var cssLink = document.createElement("link") 
        cssLink.href = "css/main.css"; 
        cssLink.rel = "stylesheet"; 
        cssLink.type = "text/css";
        var iframeBody = this.refs.iframe.contentDocument.body;
        this.refs.iframe.contentDocument.body.appendChild(document.createElement('head'));
        this.refs.iframe.contentDocument.body.children[0].appendChild(cssLink);
    }
});

module.exports = HTMLEditor;