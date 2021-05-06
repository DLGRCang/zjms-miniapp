// pages/travel/pages/hotel/hotel.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    baseImgUrl: "https://yiqi.sucstep.com/shop/route/file/downloadfile/false/",
    hotelList: null,
  },
  hotelList() {
    let baseUrl = 'https://www.yjhlcity.com/cmmall/app/release/api/'
    let url =  baseUrl+'shoplist/listpageshoplist?type=' + '14ba00bb-3918-40c9-902f-1b9cf9e46504';
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.rows)
      this.setData({
        foodList: res.data.rows
      })
    });
  },
  goDetail(e) {
    console.log(e.currentTarget.dataset.id)
    util.pageJumpTo('/pages/food/pages/foodDetail/foodDetail', 'id', e.currentTarget.dataset.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.hotelList()
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