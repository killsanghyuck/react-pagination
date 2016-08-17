# React-pagination
Preview: https://killsanghyuck.github.io/react-pagination/
![pagination](https://github.com/killsanghyuck/react-pagination/raw/master/images/pagination.png)

## Install
```
npm install react-pagination-component
```
## Configuration
`totalPage` : (number) total page number <br>
`focusPage` : (function) callback the current page number
## Usage
```js
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
```
