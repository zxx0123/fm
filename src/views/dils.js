import React, { Component } from 'react';
import {connect} from 'react-redux'
export class dils extends Component {
    render() {
        var list = this.props.location.query
        var arr = this.props.list.filter((item) => {
            return item.id == list.id
        })
        console.log(arr)
        console.log(list)
        return (
            <div className='dils'>
                {
                    arr&&arr.map((item,index) =>{
                        return <dl key={index} onClick={() => {this.props.updata(item.id)}}>
                            <dd>
                                <img src={item.img} />
                            </dd>
                            <dt>
                                {item.name}
                                {item.flag?'删除':'添加'}
                            </dt>
                        </dl>
                    })
                }
            </div>
        );
    }
}

export default connect(
    (state) =>{
        return {
            list:state
        }
    },
    (dispatch) => {
        return {
            updata:(id) => {
                dispatch({type:'UPDATA_LIST',id})
            }
        }
    }
)(dils);
