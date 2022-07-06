const Mock = require('mockjs')
// 瀑布流数据
const getWaterfallMock = () => {
    return {
        status: 200,
        'data|20': [
            {
                cover: `@pick(${require('../../static/images/co5.png')},${require('../../static/images/community-2.png')},${require('../../static/images/co-3.png')},${require('../../static/images/co4.png')},${require('../../static/images/co6.png')},${require('../../static/images/co7.png')})`,
                title: '@cword(10,30)',
                userinfo: {
                    avatar: `@pick(${require('../../static/images/avatar.jpg')})`,
                    username: '@cname',
                },
            }
        ]
    }
}
// 新闻中心数据
const getNewsMock = () => {
    return {
        status: 200,
        'data|5': [
            {
                detail: '@csentence(10,28)',
                address: '@cword(3,6)',
                date: '@date'
            }
        ]
    }
}
Mock.mock('mock/getWaterfall', getWaterfallMock())
Mock.mock('mock/getNews', getNewsMock())