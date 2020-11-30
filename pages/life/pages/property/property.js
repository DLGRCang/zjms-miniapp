// pages/life/pages/property/property.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
    itemTabs:['食宿','双语'],
    infotypeid: '694cb290-d474-464b-9ca2-18fe9826d1a8',
    infotypeid1: '457e0dbb-bbab-4200-952d-69baf147be4c',
    page: 1,
    dataList: [],
    dataList1: [],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  getDataList: function () {
    //加载小区通知列表
    data.getArtelData(this.data.infotypeid, this.data.page,5).then(dataList => {
      this.setData({
        dataList: this.data.dataList.concat(dataList)
      })
      console.log(this.data.dataList);
    })
     //加载上报历史列表
     data.getArtelData(this.data.infotypeid1, this.data.page,5).then(dataList => {
      this.setData({
        dataList1: this.data.dataList.concat(dataList)
      })
      console.log(this.data.dataList1);
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