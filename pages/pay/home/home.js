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
      }, 
      {
        url: app.globalData.imgUrl + '/image/dianxin.png',
        title: '电信网上营业厅',
        goDetail: 'dianxin'
      },{
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
        url: app.globalData.imgUrl + '/image/guangdian.png',
        title: '伊金霍洛旗广电费',
        goDetail: 'guangdian'
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
 // 电信
 dianxin(){
  wx.navigateToMiniProgram({
    appId: 'wxf1804469c930c1b6',
    path: '',
    success: function (res) { },
    fail: function (res) { }
  })
},

  //用电缴费
  // 1水费  2电费 3燃气 4宽带 5固话 6 油卡充值 7违章服务 8广播电视 9公交卡 10社保  11供暖 
  electricFee() {
    wx.navigateToMiniProgram({
      appId: 'wxd2ade0f25a874ee2',
      path: 'main/pages/nativeindex/nativeindex?from=3rd_gdneimeng&page=charge-guide&city_id=150600&service_id=2&wx_agency_id=150000000201',
      success: function (res) { },
      fail: function (res) { }
    })
  },
  //水费
  waterFee() {//高铁
    wx.navigateToMiniProgram({
      appId: 'wxd2ade0f25a874ee2',
      path: 'main/pages/nativeindex/nativeindex?from=3rd_gdneimeng&page=charge-guide&city_id=150600&service_id=1&wx_agency_id=150000000201',
      success: function (res) { },
      fail: function (res) { }
    })
  },
  // 燃气
  gasFee() {
    wx.navigateToMiniProgram({
      appId: 'wxd2ade0f25a874ee2',
      path: 'main/pages/nativeindex/nativeindex?from=3rd_gdneimeng&page=charge-guide&city_id=150600&service_id=3&wx_agency_id=150000000201',
      success: function (res) { },
      fail: function (res) { }
    })
  },
  // 供暖
  hotFee() {
    wx.navigateToMiniProgram({
      appId: 'wxd2ade0f25a874ee2',
      path: 'main/pages/nativeindex/nativeindex?from=3rd_gdneimeng&page=charge-guide&city_id=150600&service_id=11&wx_agency_id=150000000201',
      success: function (res) { },
      fail: function (res) { }
    })
  },
  // 广电
  guangdian(){
    wx.navigateToMiniProgram({
      appId: 'wxd2ade0f25a874ee2',
      path: 'main/pages/nativeindex/nativeindex?from=3rd_gdneimeng&page=charge-guide&city_id=150600&service_id=8&wx_agency_id=150000000201',
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