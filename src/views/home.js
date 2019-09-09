import React, { Component } from 'react';
import Heads from '../components/heads'
import Main from '../components/main'
import Foots from '../components/foots'
import {connect} from 'react-redux'
import { goodList } from '../store/action/action';

export class home extends Component {
    componentDidMount(){
        this.props.save(goodList)
    }
    render() {
        return (
            <div className='home'>
                <Heads/>
                <Main/>
                <Foots/>
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            list:state
        }
    },
    (dispatch) => {
        return {
            save:(fn) => {
                dispatch(fn)
            }
        }
    }
)(home);
