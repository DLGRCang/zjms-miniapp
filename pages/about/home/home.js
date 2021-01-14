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
    util.pageJump('/pages/appointment/pages/hospital/hospital')
  },
  //体检预约
  goHealthy() {
    util.pageJump('/pages/appointment/pages/healthy/healthy?type=0&title=体检预约')
  },
  //核酸检测
  goTesting() {
    util.pageJump('/pages/appointment/pages/nucleic/nucleic')
  },
  //疫苗接种
  goVaccination() {
   
    util.pageJump('/pages/appointment/pages/vaccine/vaccine')
    console.log(this.data.imgUrl + '4')
  },
  //办事预约
  goAppointment() {
    util.pageJump('/pages/appointment/pages/thingsAppointment/thingsAppointment')
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