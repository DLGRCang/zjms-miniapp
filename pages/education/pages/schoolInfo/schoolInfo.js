// pages/education/pages/schoolInfo/schoolInfo.js
const util = require('../../../../utils/util.js')
const app=getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		baseImgUrl:app.globalData.baseImgUrl,
		data: null,

		

	},
	getDataList: function (schoolInformationId) {
		//加载数据列表
		util.requestApi('schoolinformation/getschoolinformation/' + schoolInformationId, 'GET', '').then(res => {
			this.setData({
				data: res.data
			
			})
		
		});
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
	
		this.getDataList(options.schoolInformationId);
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