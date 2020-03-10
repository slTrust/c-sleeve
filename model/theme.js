/*
 业务对象
 theme / banner / spu / sku / address / user
*/
class Theme {
    static getHomeLocationA() {
        wx.request({
            url: `${config.apiBaseUrl}theme/by/names`,
            method: 'GET',
            data: {
                names: 't-1'
            },
            header: {
                appkey: config.appkey
            },
            success: res => {
                this.setData({
                    topTheme: res.data[0]
                })
            }
        })
    }
}