// pages/life/pages/seafood/seafood.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
    infotypeid: 'd7b8259d-c340-47f6-884d-64fc587ad936',
    page: 1,
    dataList: [],
    infotypeid1:'02f55284-3738-4fd2-9d81-b8894db8f1da',//生鲜商家
    dataList1: [],
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
    data.getArtelData(this.data.infotypeid1, this.data.page).then(dataList => {
      this.setData({
        dataList1: this.data.dataList1.concat(dataList)
      })
      console.log(this.data.dataLis1t);
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