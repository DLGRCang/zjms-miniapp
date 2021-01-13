// pages/pay/home/home.js
const app = getApp()
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    info: [
      {
        url: app.globalData.imgUrl + '/image/liantong.png',
        title: '联通网上营业厅',
        goDetail: 'yidong'
      }, {
        url: app.globalData.imgUrl + '/image/yidong.png',
        title: '移动网上营业厅',
        goDetail: 'liantong'
      }, {
        url: app.globalData.imgUrl + '/image/shuifei.png',
        title: '伊金霍洛旗水费',
        goDetail: 'waterFee'
      }, {
        url: app.globalData.imgUrl + '/image/dianfei.png',
        title: '伊金霍洛旗电费',
        goDetail: 'electricFee'
      }, {
        url: app.globalData.imgUrl + '/image/ranqifei.png',
        title: '伊金霍洛旗燃气费',
        goDetail: 'gasFee'
      }, {
        url: app.globalData.imgUrl + '/image/gongnuanfei.png',
        title: '伊金霍洛旗供暖费',
        goDetail: 'hotFee'
      },
      {
        url: app.globalData.imgUrl + '/image/wuyefei.png',
        title: '伊金霍洛旗物业费',
        goDetail: 'wuyeFee'
      },
    ],
  },
  //联通缴费
  liantong() {
    wx.navigateToMiniProgram({
      appId: 'wxfcd156333d74ee79',
      path: 'pages/recharge/main?channel=' + 1,
      success: function (res) { },
      fail: function (res) { }
    })
  },
  //移动缴费
  yidong() {
    wx.navigateToMiniProgram({
      appId: 'wx56af9763578b9a93',
      path: '',
      success: function (res) {

      },
      fail: function (res) { }
    })
  },


  //用电缴费
  electricFee() {
    wx.navigateToMiniProgram({
      appId: 'wxd2ade0f25a874ee2',
      path: 'main/pages/nativeindex/nativeindex?from=3rd_gdneimeng&page=charge-guide&city_id=150900&service_id=2&wx_agency_id=150000000201',
      success: function (res) { },
      fail: function (res) { }
    })
  },
  //水费
  waterFee() {//高铁
    wx.navigateToMiniProgram({
      appId: 'wxf6076a6c59a2f14e',
      path: 'pages/travel/large-screen/index.html?p=40&wx_city_id=150600',
      success: function (res) { },
      fail: function (res) { }
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