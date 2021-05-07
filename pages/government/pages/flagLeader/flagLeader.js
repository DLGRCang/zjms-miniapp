// pages/government/pages/flagLeader/flagLeader.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
		contactInfo:null,
		messageList:[],
	},
	//获取联系方式
	getContactInfo() {
		let that = this;
		return util.requestApi('app/release/hotline/listpagehotline', 'GET', {}).then(res => {
			// console.log(res.data.rows[0])
			that.setData({
				contactInfo:res.data.rows[0]
			})
		});
	},
	callPhone(){
		util.callPhone('8612345')
	},
	//获取留言列表
	getMessageList() {
		let that = this;
		return util.requestApi('api/onlinemessage/listpageonlinemessage', 'GET', {}).then(res => {
			console.log(res)
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getContactInfo();
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