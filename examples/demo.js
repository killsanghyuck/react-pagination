var React = require('react');
var ReactDOM = require('react-dom');
var Paginate = require('../lib/react-pagination-component.js');

var Demo = React.createClass({
    render: function(){
        return(
            <Paginate totalPages='100' focusNum='6' />
        );
    }
});

ReactDOM.render(
    <Demo />,
    document.getElementById('demo')
);