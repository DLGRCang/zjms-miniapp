// pages/travel/pages/ruralTourism/ruralTourism.js
const app = getApp()
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		infotypeid: '93f04e98-3616-476b-a877-a4abe5aa4cc5',
		page: 1,
		rows: 10,
		dataList: [], //
		tit: ''
	},
	getDataList: function () {
		//加载数据列表
		data.getArtelData(this.data.infotypeid, this.data.page, this.data.rows).then(dataList => {
			this.setData({    
				dataList: this.data.dataList.concat(dataList)
			})
			if (dataList.length == 0) {
				wx.showToast({
					title: '数据到头了',
					icon: 'none',
					success() {
						setTimeout(() => {
							wx.navigateBack({
								delta: 1
							})
						}, 2000)
					}
				})
			}
		})
	},
	onLoad: function (options) {
		this.setData({
			tit: options.tit
		})
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
		// let page = this.data.page
		// page = 1
		// this.setData({
		// 	page: page,
		// 	dataList: []
		// })
		// wx.showToast({
		// 	title: '加载中',
		// 	icon: 'loading'
		// })
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		let that = this
		this.setData({
			page: this.data.page + 1,
			dataList: []
		})
		wx.showToast({
			title: '加载中',
			icon: 'loading',
			success(res) {
				setTimeout(() => {
					that.getDataList();
				}, 1000)
			}
		})
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})