// pages/help/pages/dishonestSearch/dishonestSearch.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    dishonestList: null,
    key:'',
  },
  getKey(e){
    console.log(e.detail.value)
    this.setData({
      key:e.detail.value
    })
  },
  goSearch() {
    let that = this;
    let data = {
      keywords:this.data.key
    }
    util.requestApi('dishonestpeople/listpagedishonestpeople', 'GET', data).then(res => {
      console.log(res.data.rows)
      if (res.data.rows.length > 0) {
        that.setData({
          dishonestList: res.data.rows
        })
      }
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