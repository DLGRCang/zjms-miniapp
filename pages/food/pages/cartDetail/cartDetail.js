// pages/food/pages/cartDetail/cartDetail.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    goodsInfo:null,
  },
  // 获取商品详情
  getInfo() {
    let baseUrl = 'https://yiqi.sucstep.com/'
    let url = baseUrl + 'shop/app/release/api/commoditymanagement/listpagecommoditymanagement?storeId=' + this.data.id;
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
  goPayList(e){
    console.log(e.currentTarget.dataset.id)
    util.pageJumpTo('/pages/food/pages/payList/payList', 'id', e.currentTarget.dataset.id)
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