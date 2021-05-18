// pages/government/pages/guide/guide.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		tabName: ["1楼", "2楼", "3楼", "4楼"],
		index:1,
		 CustomBar: app.globalData.CustomBar,
		 tit:''
	},
	selectTab: function(e) {
		this.setData({
			index: e.detail.TabCur+1
		})
	},
	previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: current // 需要预览的图片http链接列表
    })
  } ,   
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.setData({
			tit:options.tit
		})
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
