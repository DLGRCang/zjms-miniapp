// pages/plugin/home/home.js
const app = getApp()
const util = require('../../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLogin: wx.getStorageSync("isLogin"),
    name:wx.getStorageSync("name"),
  },
  
  //微信登录
  goLogin: function (e) {
    util.pageJump('../face/face')
  },

  
  //退出登录
  loginOut: function () {
    wx.setStorageSync("isLogin", false);
    wx.setStorageSync("token", "");
    wx.setStorageSync("partUserId", "");
    this.setData({
      isLogin: wx.getStorageSync("isLogin")
    })
  },
  onShow(){
    //更新登录按钮状态
    this.setData({
      isLogin: wx.getStorageSync("isLogin")
    })
  },
  //个人信息
  userinfo() {
    if(this.data.isLogin){
      util.pageJump('/pages/userCenter/pages/userinfo/userinfo')
    }else{
      wx.showToast({
        title: '请登录',
        icon:'none'
      })
    }
    
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
  //意见反馈
  myOpinion() {
    util.pageJump('/pages/userCenter/pages/opinion/opinion')
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