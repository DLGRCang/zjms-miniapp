// pages/economic/pages/secondHand/secondHand.js
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
		useDcarList: [],//二手车列表
		secondHouseList: [],//二手房列表
		tit:''

	},
	//发布二手房
	secondHouse: function () {
		util.pageJump('../secondHouse/secondHouse')

	},
	//发布二手车
	secondUsedCar: function () {
		util.pageJump('../SecondUsedCar/SecondUsedCar')

	},
	//二手房详情
	goHouseInfo(e) {
		util.pageJump('../secondHouseInfo/secondHouseInfo?id=' + e.currentTarget.dataset.id)
	},
	//二手车详情
	goInfo(e) {
		util.pageJump('../SecondUsedCarInfo/SecondUsedCarInfo?id=' + e.currentTarget.dataset.id)
	},


	//二手车列表
	getUsedCarList: function () {
		util.requestApi('secondhandcar/listpagesecondhandcar', 'GET', {}).then(res => {
			console.log(res)
			this.setData({
				useDcarList: res.data.rows
			})
		});
	},
	//二手房列表
	getSecondHouseList: function () {
		util.requestApi('secondhandhouse/listpagesecondhandhouse', 'GET', {}).then(res => {
			console.log(res)
			this.setData({
				secondHouseList: res.data.rows
			})
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getUsedCarList()
		this.getSecondHouseList()
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