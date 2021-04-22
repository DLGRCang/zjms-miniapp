// pages/part/pages/homepage/homepage.js
const app = getApp()
const util = require('../../../../utils/util.js')
const part = require('../../../../utils/part.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    baseImgUrl: app.globalData.baseImgUrl,
    userName: wx.getStorageSync('userName'),
  },
  getActiveList() {
    let url = 'http://172.16.20.57:8080/sucstep_dj_dj_develop_dituyuan_war_exploded/taskMeeting/actListJs';
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data)
      // if (res.data.code == 200) {
        
      // } else {
      //   let msg = res.data.msg
      //   wx.showToast({
      //     title: msg,
      //     icon: 'none'
      //   })
      // }
    });

  },

  // 个人中心
  goUserCenter() {
    util.pageJump('../success/success')
  },
  // 党员随手拍
  goDetail() {
    util.pageJump('../photo/photo')
  },
  // 更多
  goSQMore() {
    util.pageJump('../sQMore/sQMore')
  },
  goSHMore() {
    util.pageJump('../sHMore/sHMore')
  },
  goZCMore() {
    util.pageJump('../zCMore/zCMore')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getActiveList()
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