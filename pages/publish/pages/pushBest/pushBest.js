// pages/publish/pages/pushBest/pushBest.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar:app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    imgUrl: app.globalData.imgUrl,
    tabName: ["最美家庭", "新时代好少年", "三八红旗手"]
  },
  //切换顶部tab
  selectTab: function (e) {
    TabCur: e.currentTarget.dataset.id;
    console.log("点击了第几个Tab:" + e.detail.TabCur)
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