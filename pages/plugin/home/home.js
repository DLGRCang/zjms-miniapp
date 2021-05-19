// pages/plugin/home/home.js
const app = getApp()
const util = require('../../../utils/util.js')
const login = require('../../../utils/login.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isLogin: wx.getStorageSync("isLogin"),
    name: wx.getStorageSync("name"),
  },

  //微信登录
  goLogin: function (e) {
    util.pageJump("../../../pages/userCenter/pages/face/face")
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
  onShow() {
    //更新登录按钮状态
    this.setData({
      isLogin: wx.getStorageSync("isLogin")
    })
  },
  //个人信息
  userinfo() {
    if (this.data.isLogin) {
      util.pageJump('/pages/userCenter/pages/userinfo/userinfo')
    } else {
      wx.showToast({
        title: '请登录',
        icon: 'none'
      })
    }

  },
  //我的订单
  myOrder() {
    //判断是否登录
    if (!wx.getStorageSync("isLogin")) {
      wx.showToast({
        title: "请先登录",
        icon: 'none',
        mask: true,
      });
      return
    } else {
      util.pageJump('/pages/userCenter/pages/order/order')
    }
  },
  //我的咨询
  myConsult() {
    //判断是否登录
    if (!wx.getStorageSync("isLogin")) {
      wx.showToast({
        title: "请先登录",
        icon: 'none',
        mask: true,
      });
      return
    } else {
      util.pageJump('/pages/userCenter/pages/consult/consult')
    }
  },
  //我的预约
  myAppointment() {
    //判断是否登录
    if (!wx.getStorageSync("isLogin")) {
      wx.showToast({
        title: "请先登录",
        icon: 'none',
        mask: true,
      });
      return
    } else {
      util.pageJump('/pages/userCenter/pages/appointment/appointment')
    }
  },
  //我的申请
  myApply() {
    //判断是否登录
    if (!wx.getStorageSync("isLogin")) {
      wx.showToast({
        title: "请先登录",
        icon: 'none',
        mask: true,
      });
      return
    } else {
      util.pageJump('/pages/userCenter/pages/apply/apply')
    }
  },
  //我的卡券
  myCard() {
    //判断是否登录
    if (!wx.getStorageSync("isLogin")) {
      wx.showToast({
        title: "请先登录",
        icon: 'none',
        mask: true,
      });
      return
    } else {
      util.pageJump('/pages/userCenter/pages/card/card')
    }
  },
  //我的参与
  myJoin() {
    //判断是否登录
    if (!wx.getStorageSync("isLogin")) {
      wx.showToast({
        title: "请先登录",
        icon: 'none',
        mask: true,
      });
      return
    } else {
      util.pageJump('/pages/userCenter/pages/join/join')
    }
  },
  //电话本
  myTel() {
    //判断是否登录
    if (!wx.getStorageSync("isLogin")) {
      wx.showToast({
        title: "请先登录",
        icon: 'none',
        mask: true,
      });
      return
    } else {
      util.pageJump('/pages/userCenter/pages/tel/tel')
    }
  },
  //意见反馈
  myOpinion() {
    //判断是否登录
    if (!wx.getStorageSync("isLogin")) {
      wx.showToast({
        title: "请先登录",
        icon: 'none',
        mask: true,
      });
      return
    } else {
      util.pageJump('/pages/userCenter/pages/opinion/opinion')
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () { },



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