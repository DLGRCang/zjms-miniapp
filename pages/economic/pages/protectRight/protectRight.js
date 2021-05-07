// pages/economic/pages/protectRight/protectRight.js
const app = getApp()
const util = require('../../../../utils/util.js')
const login = require('../../../../utils/login.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		datalist:[],//消费者维权
		datalist1:[],//经营者维权

	},
	//跳转到详情
	goDetail(e){
		util.pageJump('../protectRightDetail/protectRightDetail?obj='+JSON.stringify(e.currentTarget.dataset.obj))
	},
	getData() {
		//消费者维权
		util.requestApi('safeguardpotence/listsafeguardpotence?type=1', 'GET', {}).then(res => {
			this.setData({
				datalist:res.data
			})
			console.log("---------消费者")
			console.log(res)
		})
		//经营者维权
		util.requestApi('safeguardpotence/listsafeguardpotence?type=2', 'GET', {}).then(res => {
			this.setData({
				datalist1:res.data
			})
			console.log("----------经营者")
			console.log(res)
		})
	},
	//消费者维权
	protectRightConsumer() {
		  //判断是否登录
			if (!login.isLogin()) return
		util.pageJumpTo('../protectRightConsumer/protectRightConsumer?id=1')
	},
	//经营者维权
	protectRightOperator() {
		  //判断是否登录
			if (!login.isLogin()) return
		util.pageJumpTo('../protectRightConsumer/protectRightConsumer?id=2')
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getData()
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