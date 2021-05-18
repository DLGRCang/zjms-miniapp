// pages/economic/pages/market/market.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tit:'',
		imgUrl: app.globalData.imgUrl,
		tabId: 0,
		tabName: ['商场', '超市'],
		num: 9,
		infotypeid: '05dc71c9-feaa-4303-ae01-b78321f2b9e5',
		page: 1,
		dataList: [], //新闻列表


	},
	selectTab: function (e) {
		this.setData({
			dataList: [], //新闻列表
			tabId: e.detail.TabCur
		})
		if (this.data.tabId == 0) {
			this.setData({
				infotypeid:'05dc71c9-feaa-4303-ae01-b78321f2b9e5'
			})
		}else	if (this.data.tabId == 1) {
			this.setData({
				infotypeid:'6724c3a5-9e2c-4082-aafe-37c5b436c759'
			})
		}
		this.getDataList()
		console.log("点击了第几个Tab:" + e.detail.TabCur)
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	getDataList: function () {
		//加载数据列表
		data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
			this.setData({
				dataList: this.data.dataList.concat(dataList),
			})


			console.log(this.data.dataList);
		})
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