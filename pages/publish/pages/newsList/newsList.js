// pages/publish/pages/newsList/newsList.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dtype: 0,
    dataList: [],
    id: '',
    page: 1,
    rows: 10,
    //  新闻类型
    //  1.两行标题，日期
    //  2.图片，两行标题，日期
    //  3.图片、一行标题、一行内容、一行标签
    //  4.1行标题、1行内容、日期
    type: 1
  },
  //通知公告列表
  getNoticeList() {
    util.requestApi('infocontent/getListTypeInfoContent', 'GET', {}).then(res => {
      this.setData({
        dataList: res.data.rows
      })
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //单独适配获取通知公告
    if (options.type == 9) {
      this.getNoticeList()
      return
    }
    this.setData({
      id: options.id,
      dtype: options.dtype,
      type: options.type
    })
    this.getDataList()
  },

  getDataList() {
    //加载新闻列表
    data.getArtelData(this.data.id, this.data.page, this.data.rows).then(dataList => {
      this.setData({
        dataList: dataList
      })
      console.log(this.data.dataList)
    })
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
    let page = this.data.page
    page = 1
    this.setData({
      page: page,
      dataList: []
    })
    wx.showToast({
      title: '加载中',
      icon: 'loading'
    })
    this.getDataList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let page = 1
    page++
    data.getArtelData(this.data.id, page, this.data.rows).then(dataList => {
      this.setData({
        dataList: this.data.dataList.concat(dataList)
      })
      console.log(this.data.dataList)
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})