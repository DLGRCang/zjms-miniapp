// pages/food/pages/cartDetail/cartDetail.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseImgUrl: "https://www.yjhlcity.com/cmmall/route/file/downloadfile/false/",
    id:'',
    goodsInfo:null,
  },
  // 获取商品详情
  getInfo() {
    let baseUrl = 'https://www.yjhlcity.com/cmmall/app/release/api/'
    let url = baseUrl + 'commoditydetails/getcommoditydetails/' + this.data.id;
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data)
      this.setData({
        goodsInfo: res.data
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
  goPayList(){
    wx.navigateTo({
      url: '/pages/food/pages/payList/payList?id='+this.data.id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id :options.id
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