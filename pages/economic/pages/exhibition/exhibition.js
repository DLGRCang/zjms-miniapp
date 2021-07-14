// pages/economic/pages/exhibition/exhibition.js
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
		infotypeid: '8ae324c1-8d20-4ecd-b367-79488d664c58',
		page: 1,
		dataList: [], //新闻列表
	},
	//跳转至详情页
	exhibitionInfo: function () {
		// util.pageJump('../../../../pages/economic/pages/exhibitionInfo/exhibitionInfo')
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