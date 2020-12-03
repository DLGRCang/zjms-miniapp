// pages/pay/home/home.js
const app = getApp()
const util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,

  },
  //就医预约
  goHospital() {
    console.log(this.data.imgUrl + '1')
  },
  //体检预约
  goHealthy() {
    console.log(this.data.imgUrl + '2')
  },
  //核酸检测
  goTesting() {
    console.log(this.data.imgUrl + '3')
  },
  //疫苗接种
  goVaccination() {
    console.log(this.data.imgUrl + '4')
  },
  //办事预约
  goAppointment() {
    console.log(this.data.imgUrl + '5')
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