// pages/government/pages/reportQuestionInfo/reportQuestionInfo.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.baseImgUrl,
		id: '',
		status: '',
		data: {},
		hasHandlePermission: false, //是否显示填写处理情况按钮
	},
	//导航
	goRoute(e){
    console.log(e)
    util.routePlan(e.currentTarget.dataset.name,e.currentTarget.dataset.lat,e.currentTarget.dataset.lng)
  },
	/**
	 * 获取是否有处理权限
	 * 1.请求是否有处理权限
	 * 2.如果有处理权限并且状态为"处理中"则跳转到带处理按钮的详情页
	 * 3.其它跳转至详情页
	 */
	getHandlePermission(id) {
		util.requestApi('problemreportup/getDispose/' + id, 'GET', {}).then(res => {
			console.log("处理权限")
			console.log(res)
			var hasHandlePermission = res.data == "权限正常" ? true : false
			this.setData({
				hasHandlePermission: hasHandlePermission
			})
		});
	},
	//视频预览/图片预览
	ViewVideo(e) {
		wx.previewMedia({
			sources: [{
				url: e.currentTarget.dataset.url,
				type: e.currentTarget.dataset.type
			}],
		});
	},
	sublit(value){
		return value.split(',')
	},
	//跳转到处理情况页
	goHandle() {
		util.pageJumpTo("/pages/government/pages/reportHandleForm/reportHandleForm?id="+this.data.id)
	},
	//获取数据详情
	getDataInfo(id) {
		util.requestApi('problemreportup/getproblemreportup/' + id, 'GET', {}).then(res => {
			this.setData({
				data: res.data
			})
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			id: options.id,
			status: options.status
		})
		this.getHandlePermission(this.data.id)
		this.getDataInfo(this.data.id)
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