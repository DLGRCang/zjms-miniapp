// pages/part/pages/success/success.js
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
    users: {},
    userInfo: "",
  },
  // 获取个人信息
  getUserInfo() {
    let url = part.baseUrl + 'itemuser/getDepByID?USER_ID=' + this.data.userInfo.USER_ID
    part.httpRequest(url, 'GET', {}).then(res => {
      if (res.data.code == 200) {
        this.setData({
          users: res.data.data
        })
      } else {
        let msg = res.data.msg
        wx.showToast({
          title: msg,
          icon: 'none'
        })
      }
    });
  },

  goSQUser(e) {
    console.log(e.currentTarget.dataset.tab)
    // util.pageJumpTo('../sQUser/sQUser', 'tab', e.currentTarget.dataset.tab)
    wx.navigateTo({
      url: '../sQUser/sQUser?tab='+e.currentTarget.dataset.tab,
    })
  },
  goSHUser(e) {
    util.pageJumpTo('../sHUser/sHUser', 'tab', e.currentTarget.dataset.tab)
  },
  goZCUser(e) {
    util.pageJumpTo('../zCUser/zCUser', 'tab', e.currentTarget.dataset.tab)
  },
  goUserFB(e) {
    util.pageJump('../userFb/userFb')
  },
  goMyJF(e) {
    util.pageJump('../myJF/myJF')
  },
  // 退出登录
  goExit() {
    wx.setStorageSync('userInfo', '')
    wx.setStorageSync("token-header", '');
    wx.setStorageSync("userTocken", '');
    wx.setStorageSync("userName", '');
    wx.setStorageSync("partUserId", "");
    wx.switchTab({
      url: '/pages/basics/home/home'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
    this.getUserInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
    this.getUserInfo()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
    this.getUserInfo()
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