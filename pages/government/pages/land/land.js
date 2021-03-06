// pages/government/pages/land/land.js
const app = getApp()
const util = require('../../../../utils/util.js')
const dataUtil = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		id:'f1947c89-b473-4350-abef-e1370a21889d',
		listInfo: [],
		tit:''
	},
	getInfo() {
		// let that = this;
		// util.requestApi('landadoption/listlandadoption', 'GET', {}).then(res => {
		// 	console.log(res.data)
		// 	that.setData({
		// 		listInfo: res.data
		// 	})
		// })
		dataUtil.getArtelData('f1947c89-b473-4350-abef-e1370a21889d', this.data.page, 50).then(dataList => {
			console.log(dataList)
			this.setData({
				listInfo: this.data.listInfo.concat(dataList)
			})
		})
	},
	getDetail(e) {
		// console.log(e.currentTarget.dataset.id)
		// util.pageJumpTo("/pages/government/pages/landDetail/landDetail","id",e.currentTarget.dataset.id)
		wx.navigateTo({
			url: "/pages/appointment/pages/carInfo/carInfo?infoContentId=" + e.currentTarget.dataset.id,
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getInfo();
		this.setData({
      tit:options.tit
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