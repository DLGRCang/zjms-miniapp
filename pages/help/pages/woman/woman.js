// pages/help/pages/woman/woman.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		infotypeid: '1ad27ea9-6ec9-4cbd-89d8-e2d5f8034a20',
		page: 1,
		dataList: [], //新闻列表

	},

	// 获取新闻列表信息
	getDataList: function () {
		//加载数据列表
		data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
			this.setData({
				dataList: this.data.dataList.concat(dataList),
			})
			console.log(this.data.dataList);
		})
	},
	// 咨询求助
	fasthelp() {
		util.pageJump('../fasthelp/fasthelp')
	},
	psychologyConsult() {
		util.pageJump('../psychologyConsult/psychologyConsult')
	},
	goConsult(e) {
		console.log(e.currentTarget.dataset.type)
		util.pageJumpTo('../lawConsult/lawConsult','type',e.currentTarget.dataset.type)
	},

	applyHouse() {
		util.pageJump('../applyHouse/applyHouse')
	},
	applySafe() {
		util.pageJump('../applySafe/applySafe')
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