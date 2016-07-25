'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Paginate = React.createClass({
    displayName: 'Paginate',

    render: function () {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'sdsdsdsd'
            ),
            React.createElement(
                'h2',
                null,
                this.props.test
            )
        );
    }
});

module.exports = Paginate;