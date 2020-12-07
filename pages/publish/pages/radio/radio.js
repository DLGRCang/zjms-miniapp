// pages/publish/pages/radio/radio.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.imgUrl,
  },
  edit:function(){
    wx.navigateBack({
      delta: 1
    })
  },
  //播放
  bindPlay: function () {

    this.videoContext.play()
  },
  //暂停
  bindPause: function () {
    this.videoContext.pause()
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
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.videoContext = wx.createVideoContext('myVideo')
    this.videoContext.play()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },


})