// pages/charm/pages/villageProduct/villageProduct.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		infotypeid: 'bb4d4622-8a26-4c48-a50d-7f1c9743813c',
		imgUrl: app.globalData.imgUrl,
		tabId: 0,
		tabName: ['访客', '合作社'],
		lableName: ['大型', '便民'],
		num: 9,
		artelList: [], //合作社列表
	},
	selectTab: function (e) {
		this.setData({
			tabId: e.detail.TabCur
		})
		console.log("点击了第几个Tab:" + e.detail.TabCur)
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		//加载一村一品合作社列表
		data.getArtelData(this.data.infotypeid).then(dataList => {
				console.log("一村一品合作社列表")
				this.setData({
					artelList: dataList
				})
				console.log(this.data.artelList)
			}
		)



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