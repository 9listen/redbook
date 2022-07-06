// 对每个模块的api进行统一管理

// 引入mock请求
import mockRequests from './mockAjax'
// 只要外部调用这个函数，就向服务器发起ajax请求，
// 瀑布流数据
export const reqGetWaterfall = () => {
    return mockRequests({
        url: '/getWaterfall',
        method: 'GET'
    })
}
// 新闻中心数据
export const reqGetNews = () => mockRequests.get('/getNews')