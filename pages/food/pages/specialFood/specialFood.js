// pages/food/pages/specialFood/specialFood.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "https://yiqi.sucstep.com/shop/route/file/downloadfile/false/",
    baseImgUrl: "https://yiqi.sucstep.com/shop/route/file/downloadfile/false/",
    xcFoodList:null,
    specialFoodList: null,
  },

  xcFoodList() {
    let baseUrl = 'https://yiqi.sucstep.com/'
    let url = baseUrl+'shop/app/release/api/shopmanagement/listpageshopmanagement?shopTypeSmall=' + '小吃快餐';
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.rows)
      this.setData({
        xcFoodList: res.data.rows
      })
    });
  },
  specialFoodList() {
    let baseUrl = 'https://yiqi.sucstep.com/'
    let url =  baseUrl+'shop/app/release/api/shopmanagement/listpageshopmanagement?shopTypeSmall=' + '特色菜';
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.rows)
      this.setData({
        specialFoodList: res.data.rows
      })
    });
  },
  // goDetail(e){
  //   console.log(e.currentTarget.dataset.id)
  //   util.pageJumpTo('/pages/food/pages/foodDetail/foodDetail', 'id', e.currentTarget.dataset.id)
  // },

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