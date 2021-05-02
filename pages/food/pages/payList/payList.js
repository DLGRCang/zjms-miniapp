// pages/food/pages/payList/payList.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    pay: ['在线支付', '货到付款'],
    button:'立即购买',
    area:'',
  },
  selectTab(e) {
    console.log(e.detail.TabCur)
    if(e.detail.TabCur===1){
      this.setData({
        button:'立即下单'
      })
    }else{
      this.setData({
        button:'立即购买'
      })
    }
  },
  getArea(e){
    console.log(e.detail.value)
    this.setData({
      area:e.detail.value
    })
  },
  goPay(e){
    console.log(e.currentTarget.dataset)
    if(e.currentTarget.dataset==='立即购买'){
      // 购买

    }else{
      // 下单
      
    }

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