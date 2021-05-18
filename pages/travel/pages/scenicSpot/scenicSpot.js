// pages/travel/pages/scenicSpot/scenicSpot.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    baseImgUrl: app.globalData.baseImgUrl,
    infoList: null,
    tit:''
  },
  getInfo() {
    let that = this;
    util.requestApi('attractions/listattractions', 'GET', {}).then(res => {
      console.log(res.data)
      that.setData({
        infoList: res.data
      })
    })
  },
  goDetail(e) {
    console.log(e.currentTarget.dataset.id)
    util.pageJumpTo("/pages/travel/pages/scenicSpotDetail/scenicSpotDetail", "id", e.currentTarget.dataset.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInfo();
    this.setData({
      tit:options.tit
    })
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