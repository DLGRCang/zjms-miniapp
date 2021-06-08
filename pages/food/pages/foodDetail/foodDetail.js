// pages/food/pages/foodDetail/foodDetail.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseImgUrl: 'https://www.yjhlcity.com/cmmall/route/file/downloadfile/false/',
    TabCur: 0,
    id: '',
    foodInfo: null,
    name: '',
    lat: '',
    lng: '',
    location: '',
  },
  // 选择
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })
  },
  // 获取商品
  getInfo() {
    let baseUrl = 'https://www.yjhlcity.com/cmmall/app/release/api/'
    let url = baseUrl + 'commoditydetails/listpagecommoditydetails?shopListId=' + this.data.id;
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.rows)
      this.setData({
        foodList: res.data.rows
      })
    });
  },
  // 加入购物车
  setCart(e) {
    wx.showToast({
      title: "加载中",
      icon: 'loading',
      mask: true,
      success(res) {
        setTimeout(() => {
          wx.showToast({
            title: '已加入购物车',
            icon: "none"
          })

        }, 1000)
      }
    });
  },
  // 商品详情
  goDetail(e) {
    console.log(e.currentTarget.dataset.id)
    util.pageJumpTo('/pages/food/pages/cartDetail/cartDetail', 'id', e.currentTarget.dataset.id)
  },
  goLocation(){
    util.routePlan(this.data.name,this.data.lng,this.data.lat)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.id,
      name: options.name,
      lat: options.lat,
      lng: options.lng,
      location: options.location
    })
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