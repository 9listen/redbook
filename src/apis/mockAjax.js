// 配置公共路径
import axios from 'axios'

const request = axios.create({
    baseURL: 'mock',
    timeout: 5000,
})

// 1.请求拦截器：在发送请求之前，请求拦截器可以检测到，处理一些业务
request.interceptors.request.use((config) => {
    return config//必须返回配置对象
})
//2. 响应拦截器--当服务器数据返回以后，还可以处理一些事情
request.interceptors.response.use((res) => {//成功的回调函数
    return res.data;//🌈🌈🌈这里主要解决的是外面那层data,我使用的时候就不用写res.data.data了
}, (error) => {//响应失败的回调函数
    return Promise.reject(new error('fail'))
})
export default request;