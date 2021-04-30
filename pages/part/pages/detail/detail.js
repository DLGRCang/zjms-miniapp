// pages/part/pages/detail/detail.js
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
    baseUrl: part.baseUrl,
    tab: '',
    id: '',
    SQ: '',
    rlName: '认领',
  },

  // 获取信息
  getInfo() {
    let url = part.baseUrl + 'TaskTrends/totasktrendinfoJsAct?PLAN_ID=' + this.data.id;
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data)
      console.log(this.data.id)
      if (res.data.code == 200) {
        this.setData({
          SQ: res.data.data[0]
        })
      } 
    });
  },
  // 认领
  submit() {
    part.httpRequest(part.baseUrl + 'TaskTrends/saveBaoming?id=' + this.data.id, 'GET', {}).then(res => {
      console.log(res)
      this.setData({
        rlName: '已认领'
      })
      // part.returnCode(res.data.code, 200)
    });
  },
  // 反馈
  goFk() {
    this.setData({
      fkName: '已反馈'
    })
    wx.navigateTo({
      url: '../fkDetail/fkDetail?id=' + this.data.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id: options.id,
      tab: options.tab
    })
    this.getInfo()
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