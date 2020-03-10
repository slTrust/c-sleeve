import { Http } from '../utils/http'
class Category {
    static async getGridCategory(callback) {
        return await Http.request({
            url: 'category/grid/all',
        })
    }
}

export {
    Category
}