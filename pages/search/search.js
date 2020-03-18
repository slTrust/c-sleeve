import {HistoryKeyword} from '../../models/history-keyword'
import { Tag } from '../../models/tag';

const history = new HistoryKeyword();
Page({
  data: {

  },
  onLoad: async function (options) {
    const historyTags = history.get();
    const hotTags = await Tag.getSearchTags();
    this.setData({
      historyTags,
      hotTags
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