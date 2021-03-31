// pages/government/pages/eachFlagTown/eachFlagTown.js
const app = getApp()
const data = require('../../../../utils/data.js')

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		baseImgUrl: app.globalData.baseImgUrl,
		imgUrl: app.globalData.imgUrl,
		infotypeid: 'adc3128a-3ce0-4c37-9d29-d7b41eaa02a3',
		page: 1,
		dataList: [], //新闻列表
		infotypeid1: 'c020b82c-4488-481f-a10a-58747c3e8fc7', //村情乡貌
		artelList1:[],
	},
	//加载村情乡貌社列表
	getVillageDataList: function () {
		data.getArtelData(this.data.infotypeid1, this.data.page).then(dataList => {
			this.setData({
				artelList1: this.data.artelList1.concat(dataList)
			})
			console.log(this.data.artelList1);
		})
	},
	openXyLink: function () {
		wx.navigateToMiniProgram({
			appId: 'wx5a161b9b42305c0a',
			path: 'pages/index/main?number=9081250466',
			success: function (res) {},
			fail: function (res) {}
		})
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
		this.getVillageDataList()
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