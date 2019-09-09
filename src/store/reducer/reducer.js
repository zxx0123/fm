function countReducer(state=[],action){
    switch(action.type){
        case 'SAVE_LIST':
        if(!state.length){
            state=action.data
        }
        return [...state]

        case 'UPDATA_LIST':
        var arr = state.filter((item) => {
            return item.id == action.id
        })
        if(arr[0]){
            arr[0].flag = !arr[0].flag
        }
        return [...state]

        default:
        return [...state]
    }
}

export default countReducer