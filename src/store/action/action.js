import axios from 'axios'
import '../../mock'

function goodList(next){

    axios.get('/goodList').then(res => {
        next({type:'SAVE_LIST',data:res.data.list})
    })
}

export {
    goodList
}