// pages/part/pages/myJF/myJF.js
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
    users: null,
  },
  // 获取个人信息
  getUserInfo() {
    let url = part.baseUrl + 'itemuser/getDepByID?USER_ID=' + wx.getStorageSync('partUserId')
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.data)
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
  // 获取加分列表
  gerList() {
    let url = part.baseUrl + 'taskMeeting/ScoreListLook?USER_ID=' + wx.getStorageSync('partUserId')
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.data)
      if (res.data.code == 200) {
        this.setData({
          jfList: res.data.data
        })
      } 
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getUserInfo()
    this.gerList()
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