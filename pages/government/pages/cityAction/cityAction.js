// pages/government/pages/cityAction/cityAction.js
const app = getApp()
const util = require('../../../../utils/util.js')
const login = require('../../../../utils/login.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		dataList: [], //数据列表
		tit:''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	getDataList: function () {
		util.requestApi('gencityaction/listgencityaction', 'GET', {}).then(res => {
			this.setData({
				dataList: res.data
			})
			console.log(this.data.dataList)
		});
	},
	//创城行动详情
	gotoDetail(e) {
		util.pageJump('/pages/government/pages/cityActionDetail/cityActionDetail?details=' + encodeURIComponent(e.currentTarget.dataset.details) + '&title=' + e.currentTarget.dataset.title + '&time=' + e.currentTarget.dataset.time + '&topic=' + e.currentTarget.dataset.topic)
	},
	//申请报名
	goApplication(e) {
		//判断是否登录
		if (!login.isLogin()) return
		util.pageJumpTo("/pages/government/pages/cityActionApply/cityActionApply", "id", e.target.dataset.id)
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