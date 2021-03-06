// pages/education/pages/midSchool/midSchool.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    tit: '',
    dataList: [], //小学学校
    dataList1: [], //中学学校
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getDataList: function () {
    //加载数据列表
    util.requestApi('schoolinformation/listPageMiddlePrimarySchool/2', 'GET', {}).then(res => {
      console.log(res.data)
      this.setData({
        dataList: res.data.rows
      })
      console.log(this.data.dataList)
    });
    util.requestApi('schoolinformation/listPageMiddlePrimarySchool/3', 'GET', {}).then(res => {

      this.setData({
        dataList1: res.data.rows
      })
      console.log(this.data.dataList)
    });
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