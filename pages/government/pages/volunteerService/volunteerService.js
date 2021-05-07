// pages/government/pages/volunteerService/volunteerService.js
const util = require('../../../../utils/util.js')
const login = require('../../../../utils/login.js')
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		baseImgUrl: app.globalData.baseImgUrl,
		imgUrl: app.globalData.imgUrl,
		dataList: [],
		historydataList: [],
	},
	//志愿者服务详情
	gotoDetail(e) {
		util.pageJump('/pages/government/pages/volunteerServiceDetail/volunteerServiceDetail?id=' + e.currentTarget.dataset.id)
	},
	getDataList: function () {
		let that = this;
		util.requestApi('volunteersservice/listvolunteersservice', 'GET', {}).then(res => {
			that.setData({
				dataList: res.data
			})
		})
	},
	//获取报名历史
	getHistoryDataList: function () {
		let that = this;
		util.requestApi('volunteersservice/listvolunteers/' + wx.getStorageSync('userId'), 'GET', {}).then(res => {
			console.log(res.data)
			that.setData({
				historydataList: res.data
			})
		})
	},
	goApplication(e) {
		//判断是否登录
		if (!login.isLogin()) return
		console.log()
		util.pageJumpTo("/pages/government/pages/volunteApplication/volunteApplication", "id", e.target.dataset.id)
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getDataList();
		this.getHistoryDataList();
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