// pages/travel/pages/evaluate/evaluate.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'',
  },
  getContent(e){
    console.log(e)
    this.setData({
      content:e.detail.value
    })
  },
  submit(){
    if(this.data.content==""||this.data.content==null){
      wx.showToast({
        title: "请填写意见及建议",
      icon: 'none',
      })
    }else{
      wx.showToast({
        title: "提交成功",
        icon: 'success',
        mask: true,
        success(res) {
          setTimeout(() => {
            wx.navigateBack({
              delta: 2
            })
          }, 1500)
        }
      });
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