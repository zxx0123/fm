import React, { Component } from 'react';
import {connect} from 'react-redux'
// import quan from './quan'
// import ert from './ert'
// import qim from './qim'
// import qt from './qt'
// import guox from './guox'
// import {withRouter} from 'react-router-dom'

// import {Route,Switch,Redirect,withRouter} from 'react-router-dom'


export class lei extends Component {
    constructor(){
        super()
        this.state={
            isActive:0,
            list:[
                {id:1,name:'全部',title:'quan'},
                {id:2,name:'儿童故事',title:'ert'},
                {id:3,name:'启蒙课堂',title:'qim'},
                {id:4,name:'其他',title:'qt'},
                {id:5,name:'国学经典',title:'guox'}
            ]
            
        }
    }
    render() {
        var arr = this.props.list
        console.log(arr)
        // var data = arr.filter((item) => {
        //     return item.type == 1
        // })
        return (
            <div className='lei'>
                <div className='quan'>
                    <div className='sroll'>
                        {
                            this.state.list.map((item,index) => {
                                return <span key={index} className={this.state.isActive === index?'active':''} onClick={() => {
                                    this.setState({
                                        isActive:index
                                    })
                                }}>
                                    {item.name}
                                </span>
                            })
                        }

                    </div>
                </div>

                <div className='erj'>
                    {
                        arr&&arr.map((item,index)=> {
                            return <dl className='dls' key={index} onClick={() => {
                                this.props.history.push({pathname:'/dils',query:item})
                            }}>
                                <dd>
                                    <img src={item.img} />
                                </dd>
                                <dt>
                                    {item.desc}
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
)(lei)
