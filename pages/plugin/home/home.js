// pages/plugin/home/home.js
const app = getApp()
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: wx.getStorageSync("isLogin")
  },
  
  //微信登录
  goLogin: function (e) {

    util.pageJump('../face/face')

  },

  
  //退出登录
  loginOut: function () {
    wx.setStorageSync("isLogin", false);
    this.setData({
      isLogin: wx.getStorageSync("isLogin")
    })
  },
  onShow(){
    console.log("-------------"+ wx.getStorageSync("isLogin"))
    this.setData({
      isLogin: wx.getStorageSync("isLogin")
    })
  },
  //个人信息
  userinfo() {
    util.pageJump('/pages/userCenter/pages/userinfo/userinfo')
  },
  //我的订单
  myOrder() {
    util.pageJump('/pages/userCenter/pages/order/order')
  },
  //我的咨询
  myConsult() {
    util.pageJump('/pages/userCenter/pages/consult/consult')
  },
  //我的预约
  myAppointment() {
    util.pageJump('/pages/userCenter/pages/appointment/appointment')
  },
  //我的申请
  myApply() {
    util.pageJump('/pages/userCenter/pages/apply/apply')
  },
  //我的卡券
  myCard() {
    util.pageJump('/pages/userCenter/pages/card/card')
  },
  //我的参与
  myJoin() {
    util.pageJump('/pages/userCenter/pages/join/join')
  },
  //电话本
  myTel() {
    util.pageJump('/pages/userCenter/pages/tel/tel')
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