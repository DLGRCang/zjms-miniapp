// pages/medical/pages/vaccine/vaccine.js
const app=getApp()
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
		infotypeid: 'c299e400-95f5-4d18-a639-149160e06d3c',
    page:1,
		dataList: [], //新闻列表
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	getDataList: function () {
		//加载数据列表
		data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
			this.setData({
				dataList: this.data.dataList.concat(dataList)
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