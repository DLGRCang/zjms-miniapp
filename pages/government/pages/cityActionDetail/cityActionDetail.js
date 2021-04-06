// pages/government/pages/cityActionDetail/cityActionDetail.js
var WxParse = require('../../../../wxParse/wxParse.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		details: '',//详情
		title: '',//标题
		time: '',//活动周期
		topic: ''//活动主题
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
	
		let that = this;
		let detail=decodeURIComponent(options.details);
		WxParse.wxParse('dataHtml', 'html', detail, that, 5)
		this.setData({
			details:detail,
			title:options.title,
			time:options.time,
			topic:options.topic,
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