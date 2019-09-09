import React, { Component } from 'react';
export class my extends Component {
    render() {
        return (
            <div className='my'>
                <div className='he'>
                    我的账户
                </div>
                <div className='he'>
                    我的已购
                </div>
                <div className='he'>
                   <span onClick={() => {
                        this.props.history.push('/mini')
                    }}>我的收藏</span> 
                </div>
                <div className='he'>                   
                    我的下载
                </div>
                <div className='he'>
                    最近收听
                </div>
            </div>
        );
    }
}

export default my;
