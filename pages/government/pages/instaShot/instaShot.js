// pages/government/pages/instaShot/instaShot.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		page: 1,
		dataList: [],
		tit:''
	},
	//打开问题上报
	instaShotReport() {
		util.pageJump('/pages/government/pages/instaShotReport/instaShotReport')
	},
	//打开详情
	shotReportInfo(e) {
		util.pageJump('/pages/government/pages/instaShotInfo/instaShotInfo?eventcode=' + e.currentTarget.dataset.id)
	},

	getDataList: function () {
		let data = {
			openid: wx.getStorageSync("openId"),
			page: 1,
			rows: 30
		}
		console.log(data)
		util.httpRequestForm('https://www.yjhlcity.com/yjhl/eventListWeixin/WXviewListEvent.do', 'POST', data).then(res => {
			console.log(res)
			this.setData({
				dataList: res.data.rows
			})
		});
	},
	onLoad: function (options) {
		this.setData({
      tit:options.tit
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