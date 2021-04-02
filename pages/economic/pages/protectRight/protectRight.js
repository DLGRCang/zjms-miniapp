// pages/economic/pages/protectRight/protectRight.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,

	},
	//消费者维权
	protectRightConsumer(){
		util.pageJumpTo('../protectRightConsumer/protectRightConsumer?id=2b729e70-7c3f-4109-9416-944d5f0cb3af')
	},
	//经营者维权
	protectRightOperator(){
		util.pageJumpTo('../protectRightConsumer/protectRightConsumer?id=df05d2f6-ec02-47af-969d-fdec1dfb6a32')
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

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