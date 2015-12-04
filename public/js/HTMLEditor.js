'use strict';
var React  = require('react');
var {Link} = require('react-router')

var CodeMirror = require('react-codemirror');
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');
require('codemirror/mode/css/css');
require('codemirror/mode/htmlmixed/htmlmixed');

var HTMLEditor = React.createClass({
    getInitialState: function() {
        return {
            code: ''
        };
    },
    updateCode: function(newCode) {
        this.setState({
            code: newCode
        });

        var previewFrame = document.getElementById('preview');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
        preview.write(newCode);
        preview.close();
    },
    render: function() {
        var options = {
            lineNumbers: true,
            mode: "htmlmixed"
        };

        return(
            <div className="container-fluid">
              <div className="row">
                  <div className="col-md-6">
                    <CodeMirror id="editor" value={this.state.code} onChange={this.updateCode} options={options} />
                  </div>
                  <div className="col-md-6">
                    <iframe id="preview" sandbox="allow-same-origin"></iframe>
                  </div>
              </div>
            </div>
        )
    }
});


module.exports = HTMLEditor;
