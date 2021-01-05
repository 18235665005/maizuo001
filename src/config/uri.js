// 该配置文件用于配置网络请求需要的uri地址

let setApi = '/api' 

export default {
    getCities:setApi + '/getCitiesInfo',
    getNowPlaying:setApi + '/getNowPlayingFilmList',
    getComingSoon:setApi + '/getComingSoonFilmList',

}