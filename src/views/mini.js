import React, { Component } from 'react';
import {connect} from 'react-redux'

export class mini extends Component {
    render() {
        var list = this.props.list.filter((item) => {
            return item.flag
        })
        console.log(list)
     
        return (
            <div className='mini'>
                <div className='shouc' onClick={() => {
                    this.props.history.go(-1)
                }}>
                &lt;返回          
              <span>我的收藏</span>
                </div>

                <div>
                    {
                        list&&list.map((item,index) => {
                            return <dl key={index}>
                                <dd>
                                    <img src={item.img} />
                                </dd>
                                <dt>
                                    {item.name}
                                </dt>
                            </dl>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            list:state
        }
    }
)(mini);
