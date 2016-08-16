# React-pagination
Preview: https://killsanghyuck.github.io/react-pagination/
![pagination](https://github.com/killsanghyuck/react-pagination/raw/master/images/pagination.png)

## Install
```
npm install react-pagination-component
```
## Configuration
`totalPage` : (number) total page number
## Usage
```js
var React = require('react');
var ReactDOM = require('react-dom');
var Paginate = require('../lib/react-pagination-component.js');

ReactDOM.render(
    <Paginate totalPage={100} />,
    document.getElementById('example');
);
```
