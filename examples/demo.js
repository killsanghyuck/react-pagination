var React = require('react');
var ReactDOM = require('react-dom');
var Paginate = require('../lib/react-pagination-component.js');


var demo1 = document.getElementById('demo1');
var demo2 = document.getElementById('demo2');
var demo3 = document.getElementById('demo3');

ReactDOM.render(
    <Paginate totalPage={100} />,
    demo1
);
ReactDOM.render(
    <Paginate totalPage={100} />,
    demo2
);
ReactDOM.render(
    <Paginate totalPage={8} />,
    demo3
)
