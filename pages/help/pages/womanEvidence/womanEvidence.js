// pages/help/pages/womanEvidence/womanEvidence.js
const recordManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext();
const util = require('../../../../utils/util.js')
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		evidenceList: ['医疗票据', '伤残鉴定', '病例诊断'], //类型列表
		evidenceName: '', //类型
		videoList: [], //视频url
		videoListid: [], //视频id
		voiceLong: '',
		voiceSrc: '',
		voiceStatus: '',
		vehicleImages: [], //图片url
		files: [], //图片id
		soundRecording: '', //录音
		expoundFile: '', //阐述
	},
	//提交数据
	commitData() {
		if(this.data.evidenceName==''||this.data.evidenceName==null){
			wx.showToast({
				title: '请选择证据类型',
				icon:'none'
			})
			return
		}
		let data = {
			userID: wx.getStorageSync("userId"),
			userName: wx.getStorageSync("name"),
			expoundFile:this.data.expoundFile,
			pictureFile:this.data.files.toString(),
			soundRecording:this.data.soundRecording,
			videoFile:this.data.videoListid.toString(),
			evidenceType:this.data.evidenceName,
	
		}
		console.log(data)
		util.requestApi('preserveevidence/savepreserveevidence', 'POST', data).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				wx.navigateBack({
					delta: 1
				})
				util.showToast("提交成功")

			} else {
				util.showToast("提交失败")
			}
		});
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
	},
	//证据库
	evidenceLibrary() {
		util.pageJump('../womanEvidenceLibrary/womanEvidenceLibrary')
	},
	//开始录音
	startrecord() {
		console.log("开始录音" + new Date())
		this.centerTime = new Date();
		recordManager.start({
			duration: 600000,
			format: 'mp3'
		})
		wx.showLoading({
			title: '录音中...',
		})
	},
	//结束录音
	endrecord() {
		let that = this
		recordManager.stop()
		wx.hideLoading()
		//停止录音回调
		recordManager.onStop(function (ress) {
			var path = ress.tempFilePath
			util.uploadAudioFile(path)
				.then(res => {
					console.log(res)
					if (res.statusCode == 200) {
						let obj = JSON.parse(res.data)
						that.setData({
							voiceLong: " " + Math.ceil((ress.duration) / 1000) + " ″ ",
							voiceStatus: "点击播放",
							voiceSrc: path,

							soundRecording: obj.data
						})
					} else {
						util.showToast('录音上传失败')
					}
				});
		})
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
	//切换证据类型
	typeChange(e) {
		this.setData({
			evidenceName: this.data.evidenceList[e.detail.value],
		})
	},
	//选择视频
	ChooseVideo() {
		wx.chooseVideo({
			success: (res) => {
				let videoUrl = res.tempFilePath
				util.uploadVideoFile(videoUrl)
					.then(res => {
						if (res.statusCode == 200) {
							let obj = JSON.parse(res.data)
							let videoListid = this.data.videoListid;
							let videoList = this.data.videoList;
							videoListid.push(obj.data)
							videoList.push(videoUrl)
							this.setData({
								videoListid: videoListid,
								videoList: videoList
							})
						} else {
							util.showToast('视频上传失败')
						}
					});
			}
		});
	},
	//选择图片
	ChooseImage() {
		wx.chooseImage({
			count: 1, //默认9
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				let imgUrl = res.tempFilePaths[0]
				util.uploadFile(imgUrl, 'image')
					.then(res => {
						if (res.statusCode == 200) {
							let obj = JSON.parse(res.data)
							let files = this.data.files;
							let vehicleImages = this.data.vehicleImages;
							files.push(obj.data)
							vehicleImages.push(imgUrl)
							this.setData({
								files: files,
								vehicleImages: vehicleImages
							})
						} else {
							util.showToast('图片上传失败')
						}
					});
			}
		});
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
	//删除图片/视频
	DelImg(e) {
		wx.showModal({
			content: '确定要删除吗？',
			cancelText: '再想想',
			confirmText: '确定',
			success: res => {
				if (res.confirm) {
					if (e.currentTarget.dataset.type == 'video') {
						this.data.videoList.splice(e.currentTarget.dataset.index, 1);
						this.setData({
							videoList: this.data.videoList
						})
					} else {
						this.data.files.splice(e.currentTarget.dataset.index, 1);
						this.data.vehicleImages.splice(e.currentTarget.dataset.index, 1);
						this.setData({
							files: this.data.files,
							vehicleImages: this.data.vehicleImages
						})
					}

				}
			}
		})
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