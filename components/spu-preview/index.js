// components/spu-preview/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data:Object
  },
  data:{
    tags: Array
  },
  observers:{
    data:function(data){
      if(!data){
        return 
      }
      if(!data.tags) {
        return
      } 
      const tags = data.tags.split('$');
      this.setData({
        tags
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onImgLoad(event){
      const {height, width} = event.detail;
      console.log(height,width)
      this.setData({
        w:340,
        h:340*height/width
      })
    }
  }
})
