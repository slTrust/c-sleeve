// components/cell/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cell:Object
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
      onTap:function(event){
          this.triggerEvent('celltap',{
              cell:this.properties.cell
          },{
              bubbles:true, // 冒泡
              composed:true // 跨越组件边界
              // 必须同时为 true 才能在跨越层级的组件里间听到事件
          })
          // 子组件向父组件传参
      }
  }
})
