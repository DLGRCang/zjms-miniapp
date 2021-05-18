// pages/life/pages/hairdressing/hairdressing.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit:'',
    imgUrl: app.globalData.imgUrl,
    tabId: 0,
    tabName: ['美发', '洗浴'],
    infotypeid:'b1a960b4-82b5-4084-847b-7d748548e975',
    page: 1,
    dataList: [], //

  },
  selectTab: function (e) {
    this.setData({
      dataList: [],
      tabId: e.detail.TabCur
    })
    if (this.data.tabId == 0) {
      this.setData({
        infotypeid: 'b1a960b4-82b5-4084-847b-7d748548e975',
      })
    } else if (this.data.tabId == 1) {
      this.setData({
        infotypeid: '91fcf0e3-3909-4658-b3b8-bfdddb18a333',
      })
    }
    this.getDataList()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getDataList: function () {
    //加载数据列表
    data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
      this.setData({
        dataList: this.data.dataList.concat(dataList),
      })
      console.log(this.data.dataList);
    })

  },
  onLoad: function (options) {
    this.setData({
      tit:options.tit
    })
    this.getDataList()
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