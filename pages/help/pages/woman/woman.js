// pages/help/pages/woman/woman.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
const login = require('../../../../utils/login.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		infotypeid: '6d20ba42-25ee-4fab-9135-591929484c89',//维权法规
		infotypeid1: '1ad27ea9-6ec9-4cbd-89d8-e2d5f8034a20',//心灵港湾
		page: 1,
		dataList: [], //维权法规
		dataList1: [], //心灵港湾

	},

	// 获取维权法规列表/心灵港湾
	getDataList: function () {
		//加载维权法规列表
		data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
			this.setData({
				dataList: this.data.dataList.concat(dataList),
			})
			console.log(this.data.dataList);
		})
		//加载心灵港湾列表
		data.getArtelData(this.data.infotypeid1, this.data.page).then(dataList => {
			this.setData({
				dataList1: this.data.dataList1.concat(dataList1),
			})
			console.log(this.data.dataList1);
		})
	},
	//证据库
	evidence() {
			  //判断是否登录
				if (!login.isLogin()) return
		util.pageJump('../womanEvidence/womanEvidence')
	},
	// 咨询求助
	fasthelp() {
		util.pageJump('../fasthelp/fasthelp')
	},
	goConsult(e) {
		console.log(e.currentTarget.dataset.type)
		util.pageJumpTo('../lawConsult/lawConsult','type',e.currentTarget.dataset.type)
	},
	onlineHelp() {
		util.pageJump('../onlineHelp/onlineHelp')
	},
	applyHouse() {
		util.pageJump('../applyHouse/applyHouse')
	},
	applySafe() {
		util.pageJump('../applySafe/applySafe')
	},
	goMore(){
		wx.navigateTo({
			url: '../more/more',
		})
	},
	goMores(){
		wx.navigateTo({
			url: '../mores/mores',
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