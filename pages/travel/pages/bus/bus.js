// pages/travel/pages/bus/bus.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    imgUrl:app.globalData.imgUrl,
    tit:''

  },
  goBus() {
    wx.navigateToMiniProgram({
      appId: 'wxb9e506ed4f66afc4',
      path: '',
      success: function (res) { },
      fail: function (res) { }
    })
  },
  goTaxiInfo(){
    util.pageJump('/pages/travel/pages/taxiInfo/taxiInfo')
  },
  appCar() {
    wx.navigateToMiniProgram({
      appId: 'wxaf35009675aa0b2a',
      path: '',
      success: function (res) { },
      fail: function (res) { }
    })
  },
  goEvaluate(){
    util.pageJump('/pages/travel/pages/evaluate/evaluate')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tit:options.tit
    })
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