// 当前模块是对API进行统一管理，管理整个项目的axios请求，每一个后端接口，都在这文件中对应一个函数
// 假如接口地址发生修改，那么许多组件都要一个一个改，而接口统一管理后一次性更改就可以了
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
//关于我们数据
// 1.社区、企业、福利社数据,mock接口：'mock/getWelfare'
export const reqGetWelfare = () => mockRequests.get('/getWelfare')
// 2.使命、愿景、企业价值观数据
export const reqGetMission = () => mockRequests.get('/getMission')
// 3.上海总部、北京、武汉
export const reqGetTablist = () => mockRequests.get('/getTablist')
// 4.合作邮箱
export const reqGetEmails = () => mockRequests.get('/getEmails')
// 5.我们在这里
export const reqGetLocal = () => mockRequests.get('/getLocal')
// 6.更多方式关注小红书
export const reqGetChannels = () => mockRequests.get('/getChannels')