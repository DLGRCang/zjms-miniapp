// pages/charm/pages/introduce/introduce.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
var WxParse = require('../../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit:'',
    imgUrl: app.globalData.imgUrl,
    dataList: null, //新闻列表
    infotypeid: 'c1188922-031c-4100-9156-125d0b9e6f20',
    page: 1,

  },

  getDataList: function () {
    let that= this
    //加载数据列表
    data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
      console.log(dataList[0])
      WxParse.wxParse('dataHtml', 'html', dataList[0].info_detail, that, 5)
      this.setData({
        dataList: dataList[0],
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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