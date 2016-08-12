'use strict';
var React = require('react');
var ReactDOM = require('react-dom');

var Paginate = React.createClass({
    getInitialState() {
        return {
            focusNum: 1,
        }
    },
    _handleNumClick: function(num) {
        this.setState({
            focusNum: num
        });
    },
    _handleLeftClick: function() {
        this.setState({
            focusNum: this.state.focusNum - 1
        });
    },
    _handleRightClick: function() {
        this.setState({
            focusNum: this.state.focusNum + 1
        });
    },
    onMouseOver: function(p) {
        this.refs[p].style.backgroundColor = '#fa4248';
        this.refs[p].style.color = 'white';
    },
    onMouseOut: function(p) {
        this.refs[p].style.backgroundColor = '';
        this.refs[p].style.color = 'black';
    },

    render: function() {
        var totalPage = this.props.totalPage;
        var NumGroup = 4;
        var focusNumGroup = 7;
        var active = '';
        var block = [];

        var numStyle = '';

        //func
        var leftClick = '';
        var rightClick = '';
        var onMouseOver = '';
        var onMouseOut = '';

        //style
        var pagination = {
          minWidth: '1200px',
          textAlign: 'center',
          marginTop: '20px',
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 300,
          src: "local('Roboto Light'), local('Roboto-Light'), url(http://fonts.gstatic.com/s/roboto/v15/0eC6fl06luXEYWpBSJvXCIX0hVgzZQUfRDuZrPvH3D8.woff2) format('woff2')",
          unicodeRange: 'U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F'
        }
        var paginationItem = {
          num: {
            display: 'inline-block',
            color: 'black',
            listStyleType: 'none',
            borderRight: '1px solid #d7dadb',
            padding: '0.7em 1.5em',
          },
          active: {
            display: 'inline-block',
            color: 'white',
            listStyleType: 'none',
            padding: '0.7em 1.5em',
            backgroundColor: '#fa4248',
            borderRight: '1px solid #fff'
          },
          prev: {
            display: 'inline-block',
            color: 'black',
            listStyleType: 'none',
            borderRight: '1px solid #d7dadb',
            padding: '0.7em 1.8em'
          },
          next: {
            display: 'inline-block',
            color: 'black',
            listStyleType: 'none',
            padding: '0.7em 1.8em'
          }
        }

        if ( totalPage <= 1 ){
            block.push('');
        } else {

            if ( this.state.focusNum == 1){
                leftClick = '';
            } else {
                leftClick = this._handleLeftClick;
            }

            if ( this.state.focusNum == totalPage ){
                rightClick = '';
            } else {
                rightClick = this._handleRightClick;
            }

            var left = <li ref='numLeft' style={ paginationItem.prev } onClick={ leftClick } onMouseOver={ this.onMouseOver.bind(this, 'numLeft') } onMouseOut={ this.onMouseOut.bind(this, 'numLeft') } >Prev</li>;
            var right = <li ref='numRight' style={ paginationItem.next } onClick={ rightClick } onMouseOver={ this.onMouseOver.bind(this, 'numRight') } onMouseOut={ this.onMouseOut.bind(this, 'numRight') } >Next</li>;

            for(var p = 1 ; p <= totalPage ; p++) {
                if ( p == NumGroup && this.state.focusNum - 1 > focusNumGroup - 1) {
                    block.push(<li style={ paginationItem.num } key={p}>...</li>);
                    p = this.state.focusNum - 3;
                }
                if ( p == (this.state.focusNum + NumGroup) && totalPage - this.state.focusNum > focusNumGroup){
                    block.push(<li style={ paginationItem.num } key={p}>...</li>);
                    p = totalPage - NumGroup + 2;
                }
                if ( p == 1 ) {

                }
                if ( p == totalPage ){
                }

                if ( p == this.state.focusNum ) {
                    numStyle = paginationItem.active;
                    onMouseOver = '';
                    onMouseOut = '';
                } else {
                    numStyle = paginationItem.num;
                    onMouseOut = this.onMouseOut.bind(this, 'num'+p);
                    onMouseOver = this.onMouseOver.bind(this, 'num'+p);
                }
                block.push(<li style={ numStyle } ref={ 'num'+p } key={p} onClick={ this._handleNumClick.bind(this, p) } onMouseOver={ onMouseOver } onMouseOut={ onMouseOut } >{p}</li>);
            }
        }
        return (
            <div style={pagination} data-wow-duration="0.5s">
                <ul>
                    {left}
                    {block}
                    {right}
                </ul>
            </div>
        );


    }
});

module.exports = Paginate;
