var React = require('react');
var ReactDOM = require('react-dom');
var Paginate = require('./react-pagination-component.js');

var demo = document.getElementById('demo');
var p = document.getElementById('page-num');
function changePage(page){
    p.innerText = 'focus page : ' + page;
};

ReactDOM.render(
    <Paginate totalPage={100} focusPage={changePage} />,
    demo
);
