// pages/travel/pages/car/car.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    date: util.formatDate(new Date()),
    leaveAreaList:['鄂尔多斯','北  京','天  津','上  海','呼和浩特','包  头','集  宁',],
    arriveAreaList:['鄂尔多斯','北  京','天  津','上  海','呼和浩特','包  头','集  宁',],
  },
//出发时间
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  //出发地
  leaveArea(e) {
    this.setData({
      index1: e.detail.value
    })
  },
  //到达地
  arriveArea(e) {
    this.setData({
      index2: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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