var React = require('react');
var ReactDOM = require('react-dom');
var Paginate = require('./react-pagination-component.js');

var Demo = React.createClass({
    render: function(){
        return(
            <Paginate totalPage='100' />
        );
    }
});

ReactDOM.render(
    <Demo />,
    document.getElementById('demo')
);
