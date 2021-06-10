// pages/economic/pages/secondList/secondList.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    id: '',
    imgUrl: app.globalData.imgUrl,
    useDcarList: [],//二手车列表
    secondHouseList: [],//二手房列表
  },
  //二手房详情
  goHouseInfo(e) {
    util.pageJump('../secondHouseInfo/secondHouseInfo?id=' + e.currentTarget.dataset.id)
  },
  //二手车详情
  goInfo(e) {
    util.pageJump('../SecondUsedCarInfo/SecondUsedCarInfo?id=' + e.currentTarget.dataset.id)
  },


  //二手车列表
  getUsedCarList: function () {
    util.requestApi('secondhandcar/listpagesecondhandcar?page=1&rows=20', 'GET', {}).then(res => {
      console.log(res)
      this.setData({
        useDcarList: res.data.rows
      })
    });
  },
  //二手房列表
  getSecondHouseList: function () {
    util.requestApi('secondhandhouse/listpagesecondhandhouse?page=1&rows=20', 'GET', {}).then(res => {
      console.log(res)
      this.setData({
        secondHouseList: res.data.rows
      })
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getUsedCarList()
    this.getSecondHouseList()
    this.setData({
      name: options.name,
      id: options.id
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