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
            code:
                `<html style="color: green">
                  <!-- this is a comment -->
                  <head>
                    <title>Mixed HTML Example</title>
                    <style type="text/css">
                      h1 {font-family: comic sans; color: #f0f;}
                      div {background: yellow !important;}
                      body {
                        max-width: 50em;
                        margin: 1em 2em 1em 5em;
                      }
                    </style>
                  </head>
                  <body>
                    <h1>Mixed HTML Example</h1>
                    <script>
                      function jsFunc(arg1, arg2) {
                        if (arg1 && arg2) document.body.innerHTML = "achoo";
                      }
                    </script>
                  </body>
                </html>
                `
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
                    <iframe id="preview"></iframe>
                  </div>
              </div>
            </div>
        )
    }
});


module.exports = HTMLEditor;
