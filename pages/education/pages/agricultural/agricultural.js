// pages/education/pages/agricultural/agricultural.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
const login = require('../../../../utils/login.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    itemTabs: ['机械', '电子'],
    infotypeid: '7452a716-b25f-42c3-a3c9-6d54b04450f5',
    page: 1,
    dataList: [], //新闻列表
  },
  //专家咨询
  agriculturaConsult() {
      //判断是否登录
      if (!login.isLogin()) return
    util.pageJump('/pages/education/pages/agriculturaConsult/agriculturaConsult')
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