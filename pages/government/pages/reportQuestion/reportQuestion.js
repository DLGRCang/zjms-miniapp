// pages/government/pages/reportQuestion/reportQuestion.js
let QQMapWX = require('../../../../libs/qqmap/qqmap-wx-jssdk.min');
const util = require('../../../../utils/util.js');
let qqmapsdk = new QQMapWX({
	key: 'O5QBZ-JLYL6-3MTSA-E3BN3-YAWD7-A3FXI'
});
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		show: false,
		markers: [], //地图标记点
		latitude: '', //中心位置纬度
		longitude: '', //中心位置经度
		hasReportPermission: false, //是否有上报权限
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		
		this.getLocation()
		this.getReportPermission()
	},
	getLocation() {
		let self = this
		wx.getLocation({
			type: 'wgs84',
			success(res) {
				self.setData({
					latitude: res.latitude,
					longitude: res.longitude
				})
				console.log(res)
			}
		})
	},
	showInfo(e) {
		console.log(e.detail.markerId)
		this.setData({
			show: true
		})
		this.getDataInfo(this.data.markers[e.detail.markerId].problemReportUpId)
		console.log(this.data.markers[e.detail.markerId].problemReportUpId)
	},
	//获取数据列表
	getData() {
		util.requestApi('problemreportup/listpageproblemreportup', 'GET', {}).then(res => {
			for (let index = 0; index < res.data.rows.length; index++) {
				res.data.rows[index].callout = {}
				res.data.rows[index].id = index
			}
			this.setData({
				markers: res.data.rows

			})

			console.log(this.data.markers)

		})
	},
	//获取数据详情
	getDataInfo(id) {
	
		util.requestApi('problemreportup/getproblemreportup/' + id, 'GET', {}).then(res => {
			this.setData({
				marker: res.data
			})
		})
	},
	//获取是否有上报权限
	getReportPermission() {
		util.requestApi('problemreportup/getPermission', 'GET', {}).then(res => {
			console.log("上报权限")
			console.log(res)
			this.setData({
				hasReportPermission: res.data == "权限正常" ? true : false
			})
		});
	},
	/**
	 * 跳转详情 
	 */
	goInfo(e) {
		console.log("------------" + e)
		var id = e.target.dataset.id;
		var status = e.target.dataset.staus;
		util.pageJump("/pages/government/pages/reportQuestionInfo/reportQuestionInfo?status=" + status + "&id=" + id,)

	},
	/**
	 * 跳转问题上报
	 */
	goReport() {
		util.pageJumpTo("/pages/government/pages/reportQuestionForm/reportQuestionForm", "", "")
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
		this.setData({
			show:false
		})
		this.getData()
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