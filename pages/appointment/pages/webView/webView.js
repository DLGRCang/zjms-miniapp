// pages/appointment/pages/webView/webView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    tit: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let color = options.color
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: color,
    })
    if (options.tit == '在职党员') {
      this.setData({
        url: 'https://www.yjhlcity.com/sqdj/?network=miniapp'
      })

    } else {
      this.setData({
        url: options.url,
        tit: options.tit
      })
    }

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