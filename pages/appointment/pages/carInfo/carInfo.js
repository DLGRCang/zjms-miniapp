// pages/appointment/pages/carInfo/carInfo.js
const app = getApp()
const util = require('../../../../utils/util.js')
var WxParse = require('../../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    info: null,
    area: '',
    lat: '',
    lng: '',
  },
  getInfo() {
    let url = 'https://www.yjhlcity.com/InfoIssue/app/release/infocontent/getinfocontent/' + this.data.id
    console.log(url)
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data)
      this.setData({
        info: res.data
      })
      WxParse.wxParse('dataHtml', 'html', res.data.info_detail, this, 5)
      if (res.data.mapPoint != null || res.data.mapPoint != '') {
        let location =  res.data.mapPoint.split(',')
        this.setData({
          area: location[0],
          lat: location[2],
          lng: location[1]
        })
      }
    })
  },
  goLocation() {
    util.routePlan(this.data.area, this.data.lat, this.data.lng)
  },

  goMiniApp(){
    wx.navigateToMiniProgram({
      appId: 'wx5e2980442bd3f2a7',
      path: '',
      success: function (res) { },
      fail: function (res) { }
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