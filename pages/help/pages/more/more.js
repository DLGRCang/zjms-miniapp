// pages/help/pages/more/more.js
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
    tabName: ["维权活动", "政治权利", "儿童保护", "婚姻家庭"],
    num: 9,
    infotypeid: '1edc4504-a6ff-4b52-9f7b-fc424efd8891',
    page: 1,
    dataList: [], //新闻列表

  },

  selectTab: function (e) {
    console.log(e)
    this.setData({
      dataList: [], //新闻列表
      tabId: e.currentTarget.dataset.id
    })
    switch (this.data.tabId) {
      case 0:
        this.setData({
          infotypeid: '1edc4504-a6ff-4b52-9f7b-fc424efd8891'
        })
        break;
      case 1:
        this.setData({
          infotypeid: 'a8337d0e-ade6-48dd-b51e-74309ee83a3b'
        })
        break;
      case 2:
        this.setData({
          infotypeid: 'eaeee084-fe3b-4e2d-9a05-0a40a88362a7'
        })
        break;
      case 3:
        this.setData({
          infotypeid: '729fdccd-dad4-4f39-802e-e77328a87f28'
        })
        break;
    }

    this.getDataList()
    console.log("点击了第几个Tab:" + e.detail.TabCur)
  },

  getDataList: function () {
    //加载数据列表
    data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
      this.setData({
        dataList: this.data.dataList.concat(dataList),
      })
      console.log(this.data.dataList);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
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