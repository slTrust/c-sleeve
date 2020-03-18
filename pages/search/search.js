import {HistoryKeyword} from '../../models/history-keyword'

const history = new HistoryKeyword();
Page({
  data: {

  },
  onLoad: function (options) {
    const historyTags = history.get();
    this.setData({
      historyTags
    })
  },
  onSearch(event){
    const keyword = event.detail.value;
    history.save(keyword);
    
    this.setData({
      historyTags:history.get()
    })
  },
  onDeleteHistory(event){
    history.clear();
    this.setData({
      historyTags:[]
    })
  }
})