// 该配置文件用于配置网络请求需要的uri地址

let setApi = '/api' 

export default {
    // 获取城市信息
    getCities:setApi + '/getCitiesInfo',
    // 获取正在热映
    getNowPlaying:setApi + '/getNowPlayingFilmList',
    // 获取即将上映
    getComingSoon:setApi + '/getComingSoonFilmList',
    // 获取详情
    getDetail: setApi + "/getFilmInfo",
}