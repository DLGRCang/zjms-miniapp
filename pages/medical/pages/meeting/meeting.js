// pages/medical/pages/meeting/meeting.js
const app = getApp()
const util = require('../../../../utils/util.js')
const login = require('../../../../utils/login.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.baseImgUrl,
    baseImg: 'https://www.yjhlcity.com/InfoIssue/miniapp',
    tit: '',
    infoList: null,
  },
  goDetail(e) {
    util.pageJumpTo('../meetingDetail/meetingDetail', 'id', e.currentTarget.dataset.id)
  },
  getInfo() {
    util.requestData('meet/listmeet', 'GET', {}).then(res => {
      console.log(res.data)
      if (res.statusCode == 200) {
        this.setData({
          infoList: res.data
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tit: options.tit
    })
    this.getInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getInfo()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getInfo()
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