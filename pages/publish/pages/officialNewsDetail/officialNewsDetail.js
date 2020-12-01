// pages/publish/pages/officialNewsDetail/officialNewsDetail.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    newsInfo: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    this.setData({
      id: id
    })
    this.detailNews()
  },
  //新闻详情
  detailNews() {
    let id = this.data.id;
    let url = 'https://api-cms.yjhlnews.cn/v1/c_article/'+id;
    util.requestData(url, 'GET', {}).then(res => {
      console.log(res.data.data)
      this.setData({
        newsInfo: res.data.data
      })
    });
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