// pages/help/pages/womanEvidenceLibraryInfo/womanEvidenceLibraryInfo.js
const util = require('../../../../utils/util.js')
const app = getApp()
const recordManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext();
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		baseImgUrl: app.globalData.baseImgUrl,
		preserveEvidenceId:'',
		data:{},
		voiceStatus: ' 点击播放',
		imgList: [],
		videoList: [],
		soundRecording: '',
	},
	//播放录音
	showVoice() {
		let that = this
		innerAudioContext.src = this.data.baseImgUrl+this.data.soundRecording;
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
	getData() {
		util.requestApi('preserveevidence/getpreserveevidence/' + this.data.preserveEvidenceId, 'GET', {}).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				this.setData({
					data:res.data,
					imgList:res.data.pictureFile.split(','),
					videoList:res.data.videoFile.split(','),
					soundRecording:res.data.soundRecording,
				})
			} else {
				util.showToast('加载失败')
			}
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			preserveEvidenceId:options.id
		})
		this.getData()
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