// pages/government/pages/flagLeader/flagLeader.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		contactInfo: null,
		messageList: [],
	},
	//写留言
	wordMessage() {
		//判断是否登录
		if (!login.isLogin()) return
		util.pageJump('../flagLeaderWordMessage/flagLeaderWordMessage')
	},
	//留言详情
	messageInfo(e) {
		console.log(e)
		util.pageJump('../flagLeaderMessageInfo/flagLeaderMessageInfo?obj=' + JSON.stringify(e.currentTarget.dataset.obj))
	},
	//获取联系方式
	// getContactInfo() {
	// 	let that = this;
	// 	return util.requestApi('app/release/hotline/listpagehotline', 'GET', {}).then(res => {
	// 		// console.log(res.data.rows[0])
	// 		that.setData({
	// 			contactInfo:res.data.rows[0]
	// 		})
	// 	});
	// },
	callPhone() {
		util.callPhone('8612345')
	},
	//获取留言列表
	getMessageList() {
		return util.requestApi('commentsonthemanagement/listcommentsonthemanagement?typeId=b5c4e599-400d-4db9-9e11-e72eb9931822', 'GET', {}).then(res => {
			console.log(res.data)
			this.setData({
				messageList: res.data
			})
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		// this.getContactInfo();
		this.getMessageList();
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