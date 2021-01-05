// 封装axios
import axios from 'axios'

// axios响应信息都在ret.data 里面,将其进行封
axios.interceptors.response.use((ret) => {
    // 短路运算  与假或真
    return ret.data || ret
})

// 请求的jwt需要放在请求头里面，所以进行封装，让其自己放
// axios.interceptors.request.use((cfg) => {

// })
export default axios
// 去入口文件进行挂载到vue实例原型，使得不用每次用axios的时候都要导入
