// pages/publish/pages/radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: '',
    name: '伊金霍洛旗广播',
    author: '许巍',
    src: 'https://cms-play.yjhlnews.cn/live/radio.m3u8?auth_key=1604629152-0-0-f9ecb3e67f5221e37c61cef0a0263080'
  },
  //开始
  audioPlay: function () {
    this.audioCtx.play()
  },
  //暂停
  audioPause: function () {
    this.audioCtx.pause()
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
    this.audioCtx = wx.createAudioContext('myAudio')
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