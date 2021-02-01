// pages/help/pages/womanEvidenceLibraryInfo/womanEvidenceLibraryInfo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		voiceStatus: ' 点击播放',
		imgList: [],
		videoList: [],
	},
	//播放录音
	showVoice() {
		let that = this
		innerAudioContext.src = this.data.voiceSrc;
		innerAudioContext.play();
		innerAudioContext.onPlay(function () {
			that.setData({
				voiceStatus: "  播放中..."
			})
		})
		innerAudioContext.onEnded(function () {
			that.setData({
				voiceStatus: "  点击播放"
			})
		})
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