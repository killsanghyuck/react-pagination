var React = require('react');
var ReactDOM = require('react-dom');
var Paginate = require('../lib/react-pagination-component.js');


var demo1 = document.getElementById('demo1');
var demo2 = document.getElementById('demo2');
var demo3 = document.getElementById('demo3');
var p1 = document.getElementById('page-num1');
var p2 = document.getElementById('page-num2');
var p3 = document.getElementById('page-num3');

function changePage1(page){
    p1.innerText = 'page'+page;
};
function changePage2(page){
    p2.innerText = 'page'+page;
};
function changePage3(page){
    p3.innerText = 'page'+page;
};

ReactDOM.render(
    <Paginate totalPage={100} focusPage={changePage1}/>,
    demo1
);
ReactDOM.render(
    <Paginate totalPage={100} focusPage={changePage2}/>,
    demo2
);
ReactDOM.render(
    <Paginate totalPage={8} focusPage={changePage3}/>,
    demo3
)
