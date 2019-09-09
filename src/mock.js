import Mock from 'mockjs'
let arr = [1,2,3,4,5]
Mock.mock('/goodList','get',{
    // 'nac_list':[]
    'list|35':[
        {
            'id|+1':1,
            'name':'@cname',
            'desc':'@ctitle',
            'img':'@image(100x100)',
            'type':arr,
            'flag':false
        }
    ]
})