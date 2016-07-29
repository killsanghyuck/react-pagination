'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Paginate = React.createClass({
    getInitialState() {
        return {
            focusNum: 1
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
    render: function() {
        var totalPage = this.props.totalPage;
        var NumGroup = 4;
        var focusNumGroup = 7;
        var block = [];

        if ( totalPage <= 1 ){
            block.push('');
        } else {
            var left = <li onClick={ this._handleLeftClick }>&laquo;</li>;
            var right = <li onClick={ this._handleRightClick }>&raquo;</li>;

            for(var p = 1 ; p <= totalPage ; p++) {
                if( p == NumGroup && this.state.focusNum - 1 > focusNumGroup - 1) {
                    block.push(<li key={p}>...</li>);
                    p = this.state.focusNum - 3;
                }
                if( p == (this.state.focusNum + NumGroup) && totalPage - this.state.focusNum > focusNumGroup){
                    block.push(<li key={p}>...</li>);
                    p = totalPage - NumGroup + 2;
                }   
                block.push(<li key={p} onClick={ this._handleNumClick.bind(this, p) }>{p}</li>);
            }
        }                  
        return (
            <ul>
                {left}
                {block}
                {right}
            </ul>
        );

        
    }
});

module.exports = Paginate;