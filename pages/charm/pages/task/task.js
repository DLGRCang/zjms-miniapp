// pages/charm/pages/task/task.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit: '',
    name: wx.getStorageSync("name"),
    idCard: wx.getStorageSync("idCard"),
    phone: ''
  },
  putData(e) {
    let key = e.currentTarget.dataset.key
    console.log(key)
    this.setData({
      [key]: e.detail.value
    })
  },

  goLogin() {
    // if (this.data.phone == '') { 
    //   util.showToast('请填写手机号') 
    //   return 
    // } 

    let data = {
      "tname": this.data.name,
      "phone": this.data.phone,
      "idcard": this.data.idCard
    } 
    // 登录
    util.requestData('taskperson/gettaskpersonInforelease', 'GET', data).then(res => {
      console.log(res.data)
      wx.setStorageSync('taskUserInfo', res.data)
      if (res.statusCode == 200) { 
        if (res.data.istask == 1) {
          wx.navigateTo({
            url: '../adminTask/adminTask',
          })
        } 
        if (res.data.istask == 0) {
          wx.navigateTo({
            url: '../userTask/userTask',
          })
        }
      } else {
        // 登录失败
        wx.showToast({
          title: '服务器异常，请稍后再试',
          icon: 'none'
        })
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync('taskUserInfo', '')
    this.setData({
      tit: options.tit
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