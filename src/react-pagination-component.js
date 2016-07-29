'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Paginate = React.createClass({
    getInitialState() {
        return {
            focusNum: this.props.focusNum
        }
    },
    
    render: function() {
       var firstNumGroup = 3;
        var lastNumGroup = 2;
        var focusNumGroup = 6;
        var ellipsisPrint = 4;
        var block = [];
        var lastPageNum = this.props.totalPages;
        var firstPageNum = 1;
        var i = 1;

        if (this.props.focusNum == null) {
            this.state.focusNum = 1;
        }

        var leftellipsisNum = Math.ceil(((this.state.focusNum - focusNumGroup / 2) - firstNumGroup) / 2 + firstNumGroup);
        var rightellipsisNum = Math.ceil(((lastPageNum - lastNumGroup) - (this.state.focusNum + focusNumGroup / 2)) / 2 + (this.state.focusNum + focusNumGroup / 2));

        var leftellipsis = leftellipsisNum;
        var rightellipsis = rightellipsisNum;

        if (this.state.focusNum == firstPageNum) {
            var clickArrowLeft = null;
            var disabledLeft = 'disabled';
        } else {
            clickArrowLeft = 'left';
        }

        if (this.state.focusNum == lastPageNum) {
            var clickArrowRight = null;
            var disabledRight = 'disabled';
        } else {
            clickArrowRight = 'right';
        }

        if (firstPageNum >= lastPageNum) {
            var left = <span key='left'></span>;
            block.push(<span key='number'></span>);
            var right = <span key='right'></span>;
        } else {
            left = <li className={disabledLeft}>&laquo; </li>;
            right = <li className={disabledRight} >&raquo; </li>;

            while (i <= lastPageNum){
                if (i == ellipsisPrint && this.state.focusNum - firstPageNum > focusNumGroup) {
                    block.push(<li key={i}>... </li>);
                    i = this.state.focusNum - focusNumGroup/2;
                }
                if (i == this.state.focusNum + ellipsisPrint && lastPageNum - this.state.focusNum > focusNumGroup) {
                    block.push(<li key={i}> ... </li>);
                    i = lastPageNum - lastNumGroup;
                }
                if (i == this.state.focusNum) {
                    var classname = 'active';
                } else {
                    classname = '';
                }
                block.push(<li key={i} className={classname}> {i} </li>);
                i++;
            }
        }    
        return(
            <ul>
                {left}
                {block}
                {right}
            
            </ul>
        );

    }
});

module.exports = Paginate;