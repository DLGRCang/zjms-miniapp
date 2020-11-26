// components/dot-title/dot-title.js
Component({
  options: {
    addGlobalClass: true,
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    // 颜色
    color: {
      type: String,
      default: '#EE6967'
    },
    // 标题
    title: {
      type: String,
      default: ''
    },
    // 是否显示图标
    isIcon: {
      type: [Boolean, String],
      value: false
    },
    // 是否显示更多
    isMore: {
      type: [Boolean, String],
      value: false
    },
    //参数
    sign:{
      type: String,
      default: ''
    },

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
    goMoreList:function(e){
      console.log("更多列表")
      wx.navigateTo({
        url: '/pages/publish/pages/newsList/newsList?id='+e.currentTarget.dataset.id,
      })
      // var myEventDetail = {} // detail对象，提供给事件监听函数
			// var myEventOption = {} // 触发事件的选项
			// this.triggerEvent('myevent', myEventDetail, myEventOption)
    }
  }
})
