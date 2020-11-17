// pages/charm/pages/villageProduct/villageProduct.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tabId: 0,
		tabName: ['访客', '合作社'],
		lableName: ['大型', '便民'],
		num: 9

	},
	selectTab: function(e) {
		this.setData({
			tabId: e.detail.TabCur
		})
		console.log("点击了第几个Tab:" + e.detail.TabCur)
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
