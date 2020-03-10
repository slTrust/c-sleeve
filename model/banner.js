import { Http } from '../utils/http'
class Banner {
    static locationB = 'b-1'
    static async getHomeLocationB(callback) {
        return await Http.request({
            url: `banner/name/${Banner.locationB}`
        })
    }
}

export {
    Banner
}