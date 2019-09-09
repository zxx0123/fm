import React, { Component } from 'react';

export class heads extends Component {
    render() {
        return (
            <div className='heads'>
                <span>想听FM</span>
                <div className='box'>
                    <input type='text' placeholder='搜索'/>
                </div>
            </div>
        );
    }
}

export default heads;
