// pages/travel/pages/car/car.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    date: util.formatDate(new Date()),
    leaveAreaList: ['阿镇'],
    arriveAreaList: null,
    arrArea: '北京',
    carInfo: null,
    tit: ''
  },
  //出发时间
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  //出发地
  leaveArea(e) {
    this.setData({
      index1: e.detail.value
    })
  },
  //到达地
  arriveArea(e) {
    let arriveAreaList = this.data.arriveAreaList;
    this.setData({
      index2: e.detail.value,
      arrArea: arriveAreaList[e.detail.value]
    })
  },
  getInfo() {
    let that = this;
    util.requestApi('longbus/listlongbusbyterminal/' + this.data.arrArea, 'GET', {}).then(res => {
      if (res.data.length > 0) {
        that.setData({
          carInfo: res.data
        })
      }
    })
  },
  getArriveAreaList() {
    let that = this;
    util.requestApi('longbus/listterminal', 'GET', {}).then(res => {
      that.setData({
        arriveAreaList: res.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tit: options.tit
    })
    this.getArriveAreaList();
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