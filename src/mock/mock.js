const Mock = require('mockjs')

// 瀑布流数据
const getWaterfallMock = () => {
    return {
        status: 200,
        'data|20': [
            {
                cover: `@pick(${require('../../static/images/co5.png')},${require('../../static/images/community-2.png')},${require('../../static/images/co-3.png')},${require('../../static/images/co4.png')},${require('../../static/images/co6.png')},${require('../../static/images/co7.png')},${require('../../static/images/1.jpg')},${require('../../static/images/2.jpg')})`,
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
                index: '02',
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
const getSearchMock = () => {
    return {
        status: 200,
        'data': {
            'dutylist|5': [
                {
                    src: require(`../../static/images/social0${Math.floor((Math.random() * 5 + 2))}.png`),
                    text: {
                        title: '小红书联合中国扶贫基金会、真爱梦想基金会支持河南重建',
                        desc: '@cword(30,100)',
                        time: '2021-08-20 12:00'
                    }
                },
                //#region
                // {
                //     src: require('../../static/images/social03.png'),
                //     text: {
                //         title: '小红书新一批援助物资运达武汉 已定向捐赠同济、协和等四家医院',
                //         desc: '2月17日，继首批20万件物资运达武汉后，小红书的第二批援助物资也于日前运达武汉。这批9万件N95医用口罩已定向捐赠给同济医院中法新城院区、协和医院西院、武汉大学人民医院东院、同济医院光谷院区四家医院，用于新型冠状肺炎的疫情防疫工作。',
                //         time: '2020-02-17 12:00'
                //     }
                // },
                // {
                //     src: require('../../static/images/social04.png'),
                //     text: {
                //         title: '小红书上线抗疫心理援助平台 逾千名咨询师提供免费心理咨询',
                //         desc: '2月10日，小红书上线抗疫心理援助平台，为受疫情影响的一线医护人员、患者及有需求的普通公众提供7*24小时的免费心理咨询。小红书会将援助专题页定向推送给湖北地区用户，以帮助热线直达疫情严重地区。',
                //         time: '2020-02-10 12:00'
                //     }
                // },
                // {
                //     src: require('../../static/images/social05.jpeg'),
                //     text: {
                //         title: '小红书出资1000万元用于新冠肺炎专项援助 支援武汉疫区',
                //         desc: '1月31日，由小红书捐赠武汉疫区的首批20万件防护口罩已陆续到达武汉，相关物资已移交武汉东湖高新区防控指挥部，统一调度配给急需物资的医院及社区。同时，小红书在海外采购的包括欧标FFP2医用口罩在内的超过10万件医疗防疫物资，也已启程发往国内。',
                //         time: '2020-02-01 12:00'
                //     }
                // },
                // {
                //     src: require('../../static/images/social06.jpeg'),
                //     text: {
                //         title: '小红书积极响应“争做中国好网民 上海网民在行动”网络举报宣传月活动',
                //         desc: '9月10日上午，2019年上海市网络举报宣传月启动式暨网络举报志愿者培训开班仪式在上海报业大厦2楼报告厅举行，网络举报知识竞赛也同日上线。该活动由上海市委网信办指导，新民晚报新民网和上海互联网新闻研究中心（上海市互联网违法和不良信息举报中心）主办。这也是2019年上海市“争做中国好网民 上海网民在行动”有关“网络乱象我举报”活动的重要组成部分。',
                //         time: '2019-9-10 12:00'
                //     }
                // },
                // {
                //     src: require('../../static/images/social07.jpeg'),
                //     text: {
                //         title: '2019环保聚焦 小红书上“生活垃圾分类”一直在行动',
                //         desc: '用新眼光审视环保，用“垃圾日记”为绿色生活代言，新青年们正通过新的生活方式，参与对“环保”这个宏大命题的独特理解和表达。',
                //         time: '2019-4-18 12:35'
                //     }
                // },
                // {
                //     src: require('../../static/images/social08.png'),
                //     text: {
                //         title: '【净网2019】小红书积极参与净网行动！',
                //         desc: '为维护清朗有序的网络空间，夯实属地企业主体责任，结合公安部“净网2019”专项行动要求，今年以来，上海公安网安部门在全市范围内开展了网络安全执法检查专项行动。',
                //         time: '2019-4-18 12:35'
                //     }
                // },
                // {
                //     src: require('../../static/images/social08.png'),
                //     text: {
                //         title: '小红书积极响应上海市电信和互联网行业网络安全检查',
                //         desc: '2019年上海市电信和互联网行业网络安全行政检查已经启动。',
                //         time: '2019-6-24 10:00'
                //     }
                // },
                //#endregion
            ],       //共多少条数据
            pageSize: 5,    //每页展示的数据条数
            pageNo: 2,      //当前页
            total: 30
        }
    }
}

// 加入我们页面数据
// 1.热招职位
const getHotlistMock = () => {
    return {
        status: 200,
        'data': [
            { job: '图形图像编辑&渲染资深工程师', address: '北京市,上海市' },
            { job: '电商直播主播运营（美妆/美食）', address: '北京市,上海市' },
            { job: '数据仓库工程师-【大数据部】', address: '北京市,上海市' },
            { job: '电商-数据分析师', address: '上海市' },
            { job: '社区信息流推荐算法工程师', address: '北京市,上海市' },
        ],
    }
}
// 2.招聘动态
const getUpdatelistMock = () => {
    return {
        status: 200,
        'data': [
            { activity: 'RED OASIS | 小红书造城记', time: '2019-01-22' },
            { activity: '2018年小红书搞过的大事情', time: '2018-12-30' },
            { activity: '小红书广告商业化热招ing', time: '2018-11-26' },
        ],
    }
}
// 3.公司相关、内容相关、协议条款
const getConlistMock = () => {
    return {
        status: 200,
        'data': [
            { ico: 'icon-gongsijianjie', title: '公司相关', child: ['加入我们', '招商合作', '关于我们'] },
            { ico: 'icon-fuwuneirong', title: '内容相关', child: ['社区精选', '媒体报道'] },
            { ico: 'icon-xieyi', title: '协议条款', child: ['注册协议', '隐私协议'] }
        ],
    }
}

Mock.mock('mock/getWaterfall', getWaterfallMock())
Mock.mock('mock/getNews', getNewsMock())
Mock.mock('mock/getWelfare', getWelfareMock())
Mock.mock('mock/getMission', getMissionMock())
Mock.mock('mock/getTablist', getTablistMock())
Mock.mock('mock/getEmails', getEmailsMock())
Mock.mock('mock/getLocal', getLocalMock())
Mock.mock('mock/getChannels', getChannelsMock())
Mock.mock('mock/getSearch', getSearchMock())
Mock.mock('mock/getHotlist', getHotlistMock())
Mock.mock('mock/getUpdatelist', getUpdatelistMock())
Mock.mock('mock/getConlist', getConlistMock())