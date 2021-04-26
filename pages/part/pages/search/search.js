// pages/part/pages/search/search.js
const app = getApp()
const util = require('../../../../utils/util.js')
const part = require('../../../../utils/part.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    infoList: null
  },
  // 搜素
  getSearch(e) {
    let keywords = e.detail.value;
    let url = part.baseUrl + 'department/publistJs?keywords=' + keywords;
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data)
      this.setData({
        infoList: res.data.data.varList
      })
    });
  },
  // 返回注册
  goRegister(e) {
    wx.navigateTo({
      url: '../register/register?key=' + e.currentTarget.dataset.key + '&id=' + e.currentTarget.dataset.id,
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