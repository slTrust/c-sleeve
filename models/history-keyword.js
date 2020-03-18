class HistoryKeyword{
    // 单例模式
    static MAX_ITEM_COUNT = 20
    static KEY = "keywords"

    keywords = []

    constructor(){
        this.keywords =  this._getLocalKeywords();
    }

    // 缓存中写入数据
    /*
    去重复
    最多显示个数
    */
    save(keyword){
        const items = this.keywords.filter(k=>{
            return k === keyword
        })
        if(items.length !== 0){
            return;
        }
        if(this.keywords.length >= HistoryKeyword.MAX_ITEM_COUNT){
            this.keywords.pop()
        }
        this.keywords.unshift(keyword)
        this._refreshLocal()
    }

    get(){
        return this.keywords
    }

    clear(){
        this.keywords = [];
    }

    _refreshLocal(){
        wx.setStorageSync(HistoryKeyword.KEY,this.keywords)
        this._refreshLocal()
    }

    _getLocalKeywords(){
        const keywords = wx.getStorageSync(HistoryKeyword.KEY);
        if(!keywords){
            wx.setStorageSync(HistoryKeyword.KEY,[])
            return [];
        }
        return keywords
    }
}

export {
    HistoryKeyword
}