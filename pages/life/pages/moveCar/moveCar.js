// pages/life/pages/moveCar/moveCar.js
const app = getApp()
const data = require('../../../../utils/data.js')
const util = require('../../../../utils/util.js')
const login = require('../../../../utils/login.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    moveList: [],
    tit:''

  },
  //挪车详情
  goMoveInfo(e) {
    util.pageJump('../moveCarInfo/moveCarInfo?id=' + e.currentTarget.dataset.id)
  },
  //挪车新增
  addMove(e) {
    	  //判断是否登录
			if (!login.isLogin()) return
    util.pageJump('../moveCarAdd/moveCarAdd')
  },
  //挪车列表
  getMoveList: function () {
    util.requestApi('movecar/listpagemovecar', 'GET', {}).then(res => {
      console.log(res)
      this.setData({
        moveList: res.data.rows
      })
    });
  },
  secondUsedCar(){
    wx.navigateToMiniProgram({
      appId: 'wxc591d03d429cf06e',
      path: '',
      success: function (res) { },
      fail: function (res) { }
    })
  },
  onLoad: function (options) {
    this.setData({
      tit:options.tit
    })
    this.getMoveList()
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