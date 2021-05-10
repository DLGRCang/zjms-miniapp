// pages/food/pages/specialFood/specialFood.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "https://www.yjhlcity.com/shop/route/file/downloadfile/false/",
    baseImgUrl: "https://www.yjhlcity.com/cmmall/route/file/downloadfile/false/",
    xcFoodList:null,
    specialFoodList: null,
  },
// 小吃
  xcFoodList() {
    let baseUrl = 'https://www.yjhlcity.com/cmmall/app/release/api/'
    let url =  baseUrl+'shoplist/listpageshoplist?type=' + '2ff71ae1-1d51-4caf-baa3-eeefbe8a40d4';
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.rows)
      this.setData({
        xcFoodList: res.data.rows
      })
    });
  },
  // 特色菜
  specialFoodList() {
    let baseUrl = 'https://www.yjhlcity.com/cmmall/app/release/api/'
    let url =  baseUrl+'shoplist/listpageshoplist?type=' + 'eb4897f1-b288-4ae0-87a3-637db3ecdf42';
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.rows)
      this.setData({
        specialFoodList: res.data.rows
      })
    });
  },
  goDetail(e){
    console.log(e.currentTarget.dataset.id)
    util.pageJumpTo('/pages/food/pages/foodDetail/foodDetail', 'id', e.currentTarget.dataset.id)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.specialFoodList()
    this.xcFoodList()
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