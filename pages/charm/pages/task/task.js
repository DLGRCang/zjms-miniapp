// pages/charm/pages/task/task.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    idCard: '',
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
    // if (this.data.name == '') {
    //   util.showToast('姓名不能为空')
    //   return
    // }
    // if (this.data.idCard == '') {
    //   util.showToast('身份证号为空')
    //   return
    // }
    // if (!util.checkIdCard(this.data.idCard)) {
    //   util.showToast('身份证错误')
    //   return
    // }
    if(1>2){
      util.pageJumpTo('../publishTask/publishTask','obj','1')
    }else{
      util.pageJumpTo('../getTask/getTask','obj','1')
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