// pages/travel/pages/train/train.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    name: ['伊旗航班', '伊旗火车'],
    chooseIndex: 0,
    date: util.formatDate(new Date()),
    leaveAreaList: ['鄂尔多斯'],
    arriveAreaList: null,
    airInfo: null,
    arrArea: '北京',
  },
  // 切换
  choose(e) {
    console.log(e.currentTarget.dataset.id)
    this.setData({
      chooseIndex: e.currentTarget.dataset.id,
    })
    if (e.currentTarget.dataset.id == 1) {
      wx.navigateToMiniProgram({
        appId: 'wxa51f55ab3b2655b9',
        path: '',
        success: function (res) { },
        fail: function (res) {
          wx.navigateBack({
            delta: 1
          })
        }
      })
    }
  },
  //出发地
  leaveArea(e) {
    this.setData({
      index1: e.detail.value
    })
  },
  //到达地
  arriveArea(e) {
    this.setData({
      index2: e.detail.value
    })
  },
  //飞机到达城市
  getArriveAreaList() {
    let that = this;
    util.requestApi('flight/listtocity', 'GET', {}).then(res => {
      console.log('到达城市：'+res.data)
      that.setData({
        arriveAreaList: res.data
      })
    })
  },
  //查询航班信息（根据到达城市）
  getInfo() {
    let that = this;
    util.requestApi('flight/listflightbytocity/' + this.data.arrArea, 'GET', {}).then(res => {
      console.log('结果数据：'+res.data)
      console.log(res)
      if (res.data.data != null ) {
        that.setData({
          airInfo: res.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArriveAreaList()
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