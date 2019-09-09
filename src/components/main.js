import React, { Component } from 'react';
import my from '../views/my'
import hot from '../views/hot'
import lei from '../views/lei'
import jing from '../views/jing'
import {withRouter} from 'react-router-dom'
import {Route,Switch,Redirect} from 'react-router-dom'

export class main extends Component {
    constructor(){
        super()
        this.state = {
            isActive:0,
            list:[
                {id:1,name:'我的',title:'my'},
                {id:2,name:'热门',title:'hot'},
                {id:3,name:'分类',title:'lei'},
                {id:4,name:'精品',title:'jing'}
            ]
        }
    }
    render() {
        return (
            <div className='main'>
                <div className='head'>
                   {
                       this.state.list.map((item,index) => {
                           return <span key={index} className={this.state.isActive === index?'active':''} onClick={() => {
                               this.setState({
                                   isActive:index
                               })
                               this.props.history.push(item.title)
                           }}>
                               {item.name}
                           </span>
                       })
                   }
                </div>
                <div className='shen'>
                   <Switch>
                       <Route path='/home/my' component={my}></Route>
                       <Route path='/home/hot' component={hot}></Route>
                       <Route path='/home/lei' component={lei}></Route>
                       <Route path='/home/jing' component={jing}></Route>
                       <Redirect from='/home' to='/home/my'></Redirect>
                   </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(main);
