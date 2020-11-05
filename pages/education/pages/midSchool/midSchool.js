// pages/education/pages/midSchool/midSchool.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: ['小学学校', '中学学校'],
    itemTabs: ['双语', '寄宿'],
    info: [
      {
        id: 0,
        tit: '111',
        cont: '1111'
      }, {
        id: 1,
        tit: '222222222',
        cont: '2222222222'
      }, {
        id: 3,
        tit: '3333333',
        cont: '33333333333333'
      }
    ]
  },
  goDetail(e) {
    console.log(e)
    util.pageJumpTo('../schoolDetail/schoolDetail', 'id', e.currentTarget.dataset.id)
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