// pages/appointment/pages/thingsAppointment/thingsAppointment.js
const app = getApp()
const util = require('../../../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    waitInfo: null
  },
  // 获取大厅排队信息
  getInfo() {
    let url = 'https://yiqi.sucstep.com/InfoIssue/app/release/queue/getStatus';
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data)
      if (res.data.is_mock === 1) {
        wx.showToast({
          title: '服务器开小差了',
          icon: 'none',
          success(res) {
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              })
            }, 3000)
          }
        })
      } else {
        this.setData({
          waitInfo: res.data
        })
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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