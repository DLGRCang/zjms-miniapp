// pages/appointment/pages/carInfo/carInfo.js
const app = getApp()
const util = require('../../../../utils/util.js')
var WxParse = require('../../../../wxParse/wxParse.js');
var WxParse = require('../../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    info: null,
  },
  getInfo() {

    let url = 'https://www.yjhlcity.com/InfoIssue/app/release/infocontent/getinfocontent/' + this.data.id
    console.log(url)
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data)
      WxParse.wxParse('dataHtml', 'html', res.data.info_detail, this, 5)
      this.setData({
        info:res.data,
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.infoContentId
    })
    this.getInfo()
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