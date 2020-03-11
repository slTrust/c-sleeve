// pages/home/home.js
import { Theme } from "../../model/theme";
import { Banner } from "../../model/banner";
import { Category } from "../../model/category";
import { Activity } from "../../model/activity";

Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        themeE: null,
        bannerB: null,
        grid: [],
        activityD: null
    },
    async onLoad(options) {
        this.initAllData();
    },
    async initAllData() {
        const theme = new Theme();
        await theme.getThemes();
        const themeA = theme.getHomeLocationA();
        const themeE = theme.getHomeLocationE();
        let themeESpu = [];
        if (themeE.online) {
            const data = await Theme.getHomeLocationESpu();
            if (data) {
                themeESpu = data.spu_list.slice(0, 8)
            }
        }
        const themeF = theme.getHomeLocationF();

        const bannerB = await Banner.getHomeLocationB();
        const grid = await Category.getHomeLocationC();
        const activityD = await Activity.getHomeLocationD();

        const bannerG = await Banner.getHomeLocationG();
        const themeH = theme.getHomeLocationH();

        this.setData({
            themeA,
            bannerB,
            grid,
            activityD,
            themeE,
            themeESpu,
            themeF,
            bannerG,
            themeH
        })
    },
    onPullDownRefresh: function () {

    },
    onReachBottom: function () {

    },
    onShareAppMessage: function () {

    }
})