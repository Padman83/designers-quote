import React from 'react';
import './designersquote.css';

export default class DesignersQuote extends React.Component {
    render(){
        return (
            <div className="quote">
                {this.props.quote}
            </div>
        )
    }
};