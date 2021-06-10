// pages/government/pages/eachFlagTown/eachFlagTown.js
const app = getApp()
const data = require('../../../../utils/data.js')
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tit: '',
		baseImgUrl: app.globalData.baseImgUrl,
		imgUrl: app.globalData.imgUrl,
		page: 1,
		rows: 10,
		infotypeid: 'c020b82c-4488-481f-a10a-58747c3e8fc7', //村情乡貌
		infoData: null,
	},
	//加载村情乡貌社列表
	getVillageDataList: function () {
		data.getArtelData(this.data.infotypeid, this.data.page, this.data.rows).then(dataList => {
			let num = ['904161', '', '385861', '124374', '239502', '284953', '125797']
			let areas = []
			let obj = {}
			for (let i = 0; i < dataList.length; i++) {
				obj = {
					id: i,
					area: dataList[i].info_content,
					img: dataList[i].info_photos,
					number: num[i]
				}
				areas.push(obj)
			}
			console.log(areas)
			this.setData({
				infoData: areas
			})
		})
	},

	openXyLink: function (e) {
		// wx.navigateToMiniProgram({
		// 	appId: 'wx5a161b9b42305c0a',
		// 	path: 'pages/index/main?number=672958',
		// 	success: function (res) { },
		// 	fail: function (res) { }
		// })
		wx.navigateTo({
			url: '../eachFlagTownXY/eachFlagTownXY?tab=' + e.currentTarget.dataset.tab+'&num='+ e.currentTarget.dataset.num,
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			tit: options.tit
		})
		this.getVillageDataList()

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