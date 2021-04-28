// pages/part/pages/userFb/userFb.js
const app = getApp()
const util = require('../../../../utils/util.js')
const part = require('../../../../utils/part.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    baseImgUrl: app.globalData.baseImgUrl,
    baseUrl: part.baseUrl,
    userInfo: wx.getStorageSync('userInfo'),
    userId: '',
  },

  // 获取信息
  getList() {
    let url = part.baseUrl + 'taskMeeting/actListJs?pid=' + this.data.userId;
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.data.pdList)
      this.setData({
        contentInfo: res.data.data.pdList
      })
    });
  },
  // 详情
  goDetail(e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset.id + '&tab=' + e.currentTarget.dataset.tab
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    this.setData({
      userId: that.data.userInfo.USER_ID
    })
    this.getList()
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