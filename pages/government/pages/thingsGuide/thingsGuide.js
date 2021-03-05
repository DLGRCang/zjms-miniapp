// pages/government/pages/thingsGuide/thingsGuide.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabName: ["个人办事", "法人办事"],
    TabCur: 0, //标签选中项
    searchType: [{
      title: '服务主题',
      content: ['生育收养', '民族宗教', '教育科研']
    }, {
      title: '事项类型',
      content: ['事项类型A', 'B事项类型', '事项C类型']
    }, {
      title: '服务部门',
      content: ['住房和城乡建设局', '自然资源局', '公安局', '教育局']
    }],
    initPersonItems:[],//事项列表
  },
  //切换顶部tab
  selectTab: function (e) {
    this.setData({
      TabCur: e.detail.TabCur
    })
    this.getData()
  },
  //切换条件
  onpickChange: function (e) {
    let picker = this.data.searchType
    this.data.searchType[e.detail.current].title = e.detail.pick
    this.setData({
      searchType: picker
    })
  },
  guideDetail(e) {
    util.pageJumpTo('/pages/government/pages/guideInfo/guideInfo', 'applicationId', e.currentTarget.dataset.id)
  },
  //获取事项列表
  getData() {
    let data={
      type:this.data.TabCur
    }
    util.requestApi('application/initPersonItems', 'GET', data).then(res => {
      console.log(res)
      this.setData({
        initPersonItems:res.data
      })
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})