// pages/help/pages/applyHouse/applyHouse.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    dataList: [],
    typeName: '庇护所',
    key: ''
  },
  //获取数据列表
  getData() {
    util.requestApi('fasthelp/listpagefasthelp?typeName=' + this.data.typeName + '&keywords=' + this.data.key, 'GET', {}).then(res => {
      console.log(res)
      if (res.statusCode == 200) {
        this.setData({
          dataList: res.data.rows,
        })
      } else {
        util.showToast('数据加载失败')
      }
    });
  },
  getKey(e) {
    console.log(e.detail.value)
    this.setData({
      key: e.detail.value
    })
    if(this.data.key==''){
      this.getData()
    }
  },
  goSearch() {
    this.getData()
  },
  goApply(e) {
    util.pageJumpTo('../goApply/goApply', 'id', e.currentTarget.dataset.id)
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