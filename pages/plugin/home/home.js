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
    let that = this;
    wx.login({
      success(res) {
        that.userInfoHandler(res.code);
      }
    })
  },
  userInfoHandler(code) {
    let that = this;
    wx.getUserInfo({
      success: function (res) {
        that.putUserData(code, res.iv, res.encryptedData)
      }
    })
  },
  //服务器登录
  putUserData(code, iv, encryptedData) {
    let that = this;
    let data = {
      code: code,
      iv: iv,
      encryptedData: encryptedData,
      type: '1',
    }
    util.requestApi('http://172.16.20.65:8003/app/sign/checkCoderelease', 'post', data).then(res => {
      console.log(res)
      if (res.data.code == 200) {
        util.showToast("提交成功")
        wx.setStorageSync("isLogin", true);
        wx.setStorageSync("token", res.data.result.token);
        wx.setStorageSync("userId", res.data.result.userinfo.id);
        wx.setStorageSync("isLogin", true);
        that.setData({
          isLogin: wx.getStorageSync("isLogin")
        })
      } else {
        util.showToast("登录失败")
      }
    });
  },
  //退出登录
  loginOut: function () {
    wx.setStorageSync("isLogin", false);
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