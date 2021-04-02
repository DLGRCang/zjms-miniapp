// pages/education/pages/mbSchool/mbSchool.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    imgUrl:app.globalData.imgUrl,
    infotypeid: 'e9a0f15b-cb67-4f64-a344-1302691586b4',
    infotypeid1: '7c81efe0-bbe2-4dab-9d70-86dee30b872a',
    page:1,
    dataList: [], //校外培训机构
    dataList1: [], //相关规则
   

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
    data.getArtelData(this.data.infotypeid1, this.data.page).then(dataList => {
      this.setData({
        dataList1: this.data.dataList1.concat(dataList),
      })
      console.log(this.data.dataList1);
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