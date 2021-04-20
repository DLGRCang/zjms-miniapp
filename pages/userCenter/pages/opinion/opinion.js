// pages/userCenter/pages/opinion/opinion.js
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		content:''
	},
	putData(e) {
		this.setData({
			content: e.detail.value
		})
	},
  commitData(){
		if(this.data.content==""){
			util.showToast('内容不能为空')
			return
		}
		wx.showToast({
			title: '提交成功',
			icon: 'success',
			duration: 500,
			mask: true,
			success: function() {
				setTimeout(function() {
					//要延时执行的代码
					wx.navigateBack({
						delta: 1
					})
				}, 500) //延迟时间
			},
		});
  },
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

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