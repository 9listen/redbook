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
// 关于我们页面数据
// 1.社区、企业、福利社数据
const getWelfareMock = () => {
    return {
        status: 200,
        'data': [
            {
                index: '01',
                head: '社区',
                desc: '小红书社区目前内容覆盖时尚、个护、彩妆、美食、旅行、娱乐、读书、健身、母婴等各个生活方式领域，每天产生超过70亿次的笔记曝光，其中超过95%为UGC内容',
                src: require('../../static/images/about01.jpeg')
            },
            {
                index: '01',
                head: '企业号',
                desc: '小红书企业号部门围绕“企业号”这一核心产品，整合公司从社区营销一直到交易闭环的资源，更好地连接消费者和品牌，帮助品牌在小红书完成一站式闭环营销，提供全链条服务',
                src: require('../../static/images/about02.jpeg')
            },
            {
                index: '03',
                head: '福利社',
                desc: '小红书福利社是小红书的自营电商平台，在小红书福利社，用户可以一键购买来自全世界的优质美妆、时尚、家电、零食商品',
                src: require('../../static/images/about03.jpeg')
            }
        ]
    }
}
// 2.使命、愿景、企业价值观数据
const getMissionMock = () => {
    return {
        status: 200,
        'data': [
            {
                title: '使命',
                detail: 'Inspire Lives 分享和发现世界的精彩',
                src: require('../../static/images/about04.png'),
                line: true,
            },
            {
                title: '愿景',
                detail: '成为最受用户信任的互联网公司',
                src: require('../../static/images/about05.png'),
                line: true,
            },
            {
                title: '企业价值观',
                detail: '向上、走进用户、开放心态、务实、担当',
                src: require('../../static/images/about06.png'),
                line: false,
            },
        ]
    }
}
// 3.上海总部、北京、武汉
const getTablistMock = () => {
    return {
        status: 200,
        'data': {
            shanghai: [
                { src: require('../../static/images/shanghai01.jpeg') },
                { src: require('../../static/images/shanghai02.jpeg') },
                { src: require('../../static/images/shanghai03.jpeg') },
            ],
            beijin: [
                { src: require('../../static/images/bei01.jpeg') },
                { src: require('../../static/images/bei02.jpeg') },
                { src: require('../../static/images/bei03.jpeg') },
            ],
            wuhan: [
                { src: require('../../static/images/wu01.jpeg') },
                { src: require('../../static/images/wu02.jpeg') },
                { src: require('../../static/images/wu03.jpeg') },
            ]
        }
    }
}
// 4.合作邮箱
const getEmailsMock = () => {
    return {
        status: 200,
        'data': [
            { name: '美妆', address: 'bd_beauty@xiaohongshu.com' },
            { name: '家居', address: 'bd_home@xiaohongshu.com' },
            { name: '母婴', address: 'bd_baby@xiaohongshu.com' },
            { name: '食品/保健', address: 'bd_food@xiaohongshu.com' },
            { name: '时尚轻奢', address: 'bd_fashion@xiaohongshu.com' },
            { name: '家电数码', address: 'bd_appliance@xiaohongshu.com' },
            { name: '仓储物流', address: 'bd_storage@xiaohongshu.com' },
            { name: '薯队长', address: 'shuduizhang@xiaohongshu.com' },
            { name: '人事/招聘', address: 'career@xiaohongshu.com' },
            { name: '媒体/采访', address: 'media@xiaohongshu.com' },
            { name: '市场/品牌', address: 'marketing@xiaohongshu.com' },
            { name: '产品反馈', address: 'app_feedback@xiaohongshu.com' },
            { name: '社区反馈', address: 'community@xiaohongshu.com' },
            { name: '客服反馈', address: 'service@xiaohongshu.com' },
            { name: '明星入驻', address: 'superstar@xiaohongshu.com' },
            { name: '推广合作', address: 'RED.AD@xiaohongshu.com' },
            { name: '蒲公英平台', address: 'influencer@xiaohongshu.com' },
            { name: '品牌号', address: 'brandaccount@xiaohongshu.com' },
            { name: '广告合作', address: 'red.ad@xiaohongshu.com' },
        ],
    }
}
// 5.我们在这里
const getLocalMock = () => {
    return {
        status: 200,
        'data': [
            { home: '上海总部', address: '上海市 黄浦区 马当路388号 SOHO复兴广场C座' },
            { home: '北京', address: '北京市 朝阳区 安定路 中海国际B座18楼' },
            { home: '武汉', address: '武汉市 光谷大道 现代光谷世贸中心B座10楼' },
        ],
    }
}
// 6.更多方式关注小红书
const getChannelsMock = () => {
    return {
        status: 200,
        'data': [
            { src: require('../../static/images/about07.png'), desc: '下载小红书' },
            { src: require('../../static/images/about09.png'), desc: '关注小红书微博' },
            { src: require('../../static/images/about10.png'), desc: '关注微信公众号' },
            { src: require('../../static/images/about11.png'), desc: '关注微信小程序' },
        ]
    }
}
// 社会责任页面数据
// 1.

Mock.mock('mock/getWaterfall', getWaterfallMock())
Mock.mock('mock/getNews', getNewsMock())
Mock.mock('mock/getWelfare', getWelfareMock())
Mock.mock('mock/getMission', getMissionMock())
Mock.mock('mock/getTablist', getTablistMock())
Mock.mock('mock/getEmails', getEmailsMock())
Mock.mock('mock/getLocal', getLocalMock())
Mock.mock('mock/getChannels', getChannelsMock())