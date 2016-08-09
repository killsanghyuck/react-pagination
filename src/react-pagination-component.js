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
        var active = '';
        var block = [];
        var disabled = '';

        if ( totalPage <= 1 ){
            block.push('');
        } else {
            
            if ( this.state.focusNum == 1 ){
                disabled = ''
                var className = 'pagination-item--wide'
            } else {
                disabled = this._handleLeftClick
                className = 'pagination-item--wide'
            }
            
            var left = <li className={className + " first pagination-link--wide first"} onClick={ disabled }>Prev</li>;
            var right = <li className="pagination-item--wide last pagination-link--wide last" onClick={ this._handleRightClick }>Next</li>;

            for(var p = 1 ; p <= totalPage ; p++) {
                if ( p == NumGroup && this.state.focusNum - 1 > focusNumGroup - 1) {
                    block.push(<li className="pagination-item pagination-link" key={p}>...</li>);
                    p = this.state.focusNum - 3;
                }
                if ( p == (this.state.focusNum + NumGroup) && totalPage - this.state.focusNum > focusNumGroup){
                    block.push(<li className="pagination-item pagination-link" key={p}>...</li>);
                    p = totalPage - NumGroup + 2;
                }
                if ( p == 1 ) {
                    active = "pagination-item first-number pagination-link";
                }
                if ( p == totalPage ){
                    active = "pagination-item--wide last pagination-link";
                }
               if ( p == this.state.focusNum ) {
                    active = "pagination-item is-active pagination-link";  
                } else {
                    active = "pagination-item pagination-link";
                }
                block.push(<li className={active} key={p} onClick={ this._handleNumClick.bind(this, p) }>{p}</li>);
            }
        }                  
        return (
            <div className="pagination-container wow zoomIn mar-b-1x" data-wow-duration="0.5s">
                <ul className="pagination">
                    {left}
                    {block}
                    {right}
                </ul>
            </div>
        );

        
    }
});

module.exports = Paginate;