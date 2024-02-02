// 为什么要二次封装axios
// 1.利用axios请求，响应拦截器功能
// 2.请求拦截器，一般可以在请求头中携带公共的参数 token
// 3.响应拦截器，可以简化服务器返回的数据，处理http网络错误
import axios from "axios";
import {ElMessage} from "element-plus";

const request = axios.create({
  baseURL: '/api', // 请求的基础路径
  timeout: 5000, // 设置统一的请求超时时间
})

//请求拦截器
request.interceptors.request.use((config) =>{
    //config:请求拦截器 回调注入的对象（配置对象）
    return config;
})

//响应拦截器
request.interceptors.response.use((response) =>{
    return response.data;
},(error) =>{
    console.log(error);
    //处理错误
    let status = error.response.status;
    switch (status) {
        case 404:
            ElMessage({
                type:error,
                message:error.response.message
            });
            break;
        case 500|501|502|503|504:
            ElMessage({
                type:error,
                message:"服务器错误"
            });
            break;
    }
    return Promise.reject(new Error(error.message));
    }
)

export default request;