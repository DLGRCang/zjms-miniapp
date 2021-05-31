// pages/help/pages/law/law.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
		infotypeid: 'e0fbe4d8-727c-41db-9edc-fd3f2625bc9a',
		infotypeid1: '3909c4c7-0d2e-4148-9562-a1c204ca8e58',
    page:1,
		dataList: [], //新闻列表
		dataList1: [], //新闻列表
		tit:''
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
			console.log(dataList)
			this.setData({
        dataList1: this.data.dataList.concat(dataList),
			})
			console.log(this.data.dataList1);
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
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
