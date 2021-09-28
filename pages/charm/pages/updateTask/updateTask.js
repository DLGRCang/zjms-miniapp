const recordManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext();
const app = getApp()
const util = require("../../../../utils/util")
Page({

	/** 
	 * 页面的初始数据 
	 */
	data: {
		imgUrl: app.globalData.baseImgUrl,
		deptList: [], //部门
		selectDepts: [], //选中的部门
		taskpersonIds: [],
		index: 0,
		taskName: '',
		taskInfo: '',
		taskInfoId: '',
		modifier: '', //修改人
		startDate: util.formatTime(new Date()),
		endDate: util.formatTime(new Date()),

		vehicleImages: [], //图片url
		vehicleImagesId: [], //图片

		voiceSrc: '',
		soundRecording: '', //录音文件 
		voiceLong: '',
		voiceStatus: '',

	},
	handleChange(e) {
		console.log(e)
		this.setData({
			value: e.detail.dateString
		})
	},
	// 打开窗口
	showModal(e) {

		this.setData({
			modalName: e.currentTarget.dataset.target
		})
	},
	// 关闭窗口
	hideModal(e) {
		this.setData({
			modalName: null
		})
	},
	// 选择部门
	deptSelect(e) {
		let ids = []
		let names = []
		for (let i = 0; i < e.detail.value.length; i++) {
			ids.push(this.data.deptList[e.detail.value[i]].taskPersonId)
			names.push(this.data.deptList[e.detail.value[i]].tname)

		}
		this.setData({
			selectDepts:names,
			taskpersonIds:ids
		})
		console.log(this.data.selectDepts)
		console.log(this.data.taskpersonIds)
	},

	// 确定
	determine() {
		let l = this.data.selectDepts.length
		if (l === 0) {
			wx.showToast({
				title: '请选择部门',
				icon: 'none'
			})
		} else {
			this.hideModal()
		}
	},
	PickerChange(e) {
		this.setData({
			index: e.detail.value
		})
	},
	startDateChange(e) {
		this.setData({
			startDate: e.detail.dateString
		})
	},
	endDateChange(e) {
		this.setData({
			endDate: e.detail.dateString
		})
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
	},
	//提交数据 
	commitData() {
		if (this.data.taskName == "") {
			wx.showToast({
				title: '任务名称不能为空',
				icon: 'none'
			})
			return
		}
		if (this.data.taskInfo == "") {
			wx.showToast({
				title: '任务内容不能为空',
				icon: 'none'
			})
			return
		}
		if (this.data.selectDepts.length === 0) {
			wx.showToast({
				title: '请选择部门',
				icon: 'none'
			})
			return
		}
		let data = {
			"creator": wx.getStorageSync('taskUserInfo').taskPersonId,
			"taskname": this.data.taskName,
			"tasksummary": this.data.taskInfo,
			"tasktime": this.data.endDate + "",
			"gmt_create": this.data.startDate,
			"taskpersonname": this.data.selectDepts.join(","),
			"taskperson": this.data.taskpersonIds.join(","),
			"taskfile": this.data.vehicleImagesId.join(","),
			"taskaudio": this.data.soundRecording
		}
		console.log(data)
		util.requestData('taskinfo/updatetaskinforelease/' + this.data.taskInfoId, 'PUT', data).then(res => {
			console.log("********************")
			console.log(res)
			if (res.statusCode == 200) {
				wx.showToast({
					title: "修改成功",
					icon: 'success',
					mask: true,
					success(res) {
						setTimeout(() => {
							wx.navigateBack({
								delta: 1
							})
						}, 2000)
					}
				});
			} else {
				wx.showToast({
					title: "修改失败!",
					icon: 'none',
					mask: true,
					// success(res) {
					// 	setTimeout(() => {
					// 		wx.navigateBack({
					// 			delta: 1
					// 		})
					// 	}, 2000)
					// }
				});
			}
		})

	},
	// 搜索部门人员
	searchDeptUser(e) {
		console.log(e.detail.value)
		let data = {
			"istask": "0",
			"keywords": e.detail.value
		}
		util.requestData('taskperson/applistTaskPersonrelease', 'GET', data).then(res => {
			console.log(res.data)
			this.setData({
				deptList: res.data
			})
		})

	},

	// 获取任务列表
	getDeptsList() {
		let data = {
			"istask": "0"
		}
		util.requestData('taskperson/applistTaskPersonrelease', 'GET', data).then(res => {
			console.log(res.data)
			this.setData({
				deptList: res.data
			})
		})
	},

	//图片上传 
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
							console.log(obj)
							let vehicleImagesId = this.data.vehicleImagesId;
							let vehicleImages = this.data.vehicleImages;
							vehicleImagesId.push(obj.data)
							vehicleImages.push(imgUrl)
							console.log(vehicleImagesId)
							console.log(vehicleImages)
							this.setData({
								vehicleImagesId: vehicleImagesId,
								vehicleImages: vehicleImages
							})
						} else {
							util.showToast('图片上传失败')
						}
					});
			}
		});
	},
	ViewImage(e) {
		wx.previewMedia({
			sources: [{
				url: e.currentTarget.dataset.url,
				type: e.currentTarget.dataset.type
			}],
		});
	},
	DelImg(e) {
		wx.showModal({
			content: '确定要删除吗？',
			cancelText: '再想想',
			confirmText: '确定',
			success: res => {
				if (res.confirm) {
					this.data.vehicleImagesId.splice(e.currentTarget.dataset.index, 1);
					this.data.vehicleImages.splice(e.currentTarget.dataset.index, 1);
					this.setData({
						vehicleImagesId: this.data.vehicleImagesId,
						vehicleImages: this.data.vehicleImages
					})
				}
			}
		})
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
			util.uploadAudioFile(path).then(res => {
				if (res.statusCode == 200) {
					let obj = JSON.parse(res.data)
					console.log(obj)
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
		console.log("*****点击播放录音" + this.data.voiceSrc)
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
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {

		let obj = JSON.parse(options.obj)
		console.log('*******')
		console.log(obj)
		if (obj.taskaudio != "") {
			this.setData({
				voiceSrc: this.data.imgUrl + obj.taskaudio,
				voiceStatus: '点击播放'
			})

		}

		this.setData({
			deptList: [], //部门
			selectDepts: obj.taskpersonname.split(','), //选中的部门
			taskpersonIds: obj.taskperson.split(','),
			index: 0,
			taskName: obj.taskname,
			taskInfo: obj.tasksummary,
			startDate: obj.gmt_create,
			endDate: obj.tasktime,
			taskInfoId: obj.taskInfoId,
			modifier: obj.creator,

			// vehicleImages: [], //图片url
			vehicleImagesId: obj.taskfile == "" ? [] : obj.taskfile.split(','), //图片

			soundRecording: '', //录音文件 


		})



		// this.setData({
		//   taskpersonIds: [],
		//   selectDepts: []
		// })
		this.getDeptsList()
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