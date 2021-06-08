// pages/travel/pages/ruralTourism/ruralTourism.js
const app = getApp()
const data = require('../../../../utils/data.js')
const util = require('../../../../utils/util.js')
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
		tit: '',
		more: '加载更多',
	},
	getDataList: function () {
		//加载数据列表
		data.getArtelData(this.data.infotypeid, this.data.page, this.data.rows).then(dataList => {
			this.setData({
				dataList: this.data.dataList.concat(dataList)
			})
		})
	},
	// 更多
	getHZSMore() {
		let that = this
		this.data.page++
		let data = {
			infotypeid: '93f04e98-3616-476b-a877-a4abe5aa4cc5',
			page: this.data.page,
			rows: this.data.rows,
		}
		util.requestApi('infocontent/listUserpageinfocontent', 'GET', data).then(res => {
			console.log(res.data.rows.length)
			that.setData({
				dataList: that.data.dataList.concat(res.data.rows)
			})
			if (res.data.rows.length < 10) {
				that.setData({
					more: '数据到头了'
				})
			}
		});
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