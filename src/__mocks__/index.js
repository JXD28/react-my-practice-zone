import Mock from 'mockjs'

Mock.setup({timeout:'200-600'})

Mock.mock('/_api/getData', {
    'list|10': [
        {
            'id|1-20':1
        }
    ]
})