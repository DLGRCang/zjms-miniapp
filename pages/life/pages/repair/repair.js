// pages/life/pages/repair/repair.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    tabId: 0,
    tabName: ['水务', '电力', '供暖', '燃气', '电梯'],
    infotypeid: '61aad66e-53cc-4504-9ea1-a6421db12408',
    page: 1,
    dataList: [],
  },
  selectTab: function (e) {
    this.setData({
      tabId: e.detail.TabCur
    })
    if (this.data.tabId == 0) {
      this.setData({
        infotypeid: '61aad66e-53cc-4504-9ea1-a6421db12408'
      })

    } else if (this.data.tabId == 1) {
      this.setData({
        infotypeid: '8443f98b-4e17-4c58-a315-0d40c9b56f1d'
      })

    } else if (this.data.tabId == 2) {
      this.setData({
        infotypeid: '8443f98b-4e17-4c58-a315-0d40c9b56f1d'
      })

    } else if (this.data.tabId == 3) {
      this.setData({
        infotypeid: '2efc1b78-02a4-483e-88d4-8b97830f0ab0'
      })
    } else if (this.data.tabId == 4) {
      this.setData({
        infotypeid: '724662bb-bcb1-4f65-bc8f-02c79d027054'
      })
    }
    this.getDataList();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getDataList: function () {
    //加载新闻列表
    data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
      this.setData({
        dataList: this.data.dataList.concat(dataList)
      })
      console.log(this.data.dataList);
    })
  },
  onLoad: function (options) {
    this.getDataList();
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