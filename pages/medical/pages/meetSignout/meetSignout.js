// pages/medical/pages/meetingSign/meetingSign.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: '',
		files: '',
		username: '',
		userphone: '',
		latitude:'',
		longitude:''
	},
	// 获取经纬度
	getLocation(){
		let that = this
		wx.getLocation({
			type: 'wgs84',
			success (res) {
				console.log(res)
				that.setData({
					latitude:res.latitude,
					longitude:res.longitude
				})
			}
		 })
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		this.setData({
			[key]: e.detail.value
		})
	},
	commitData() {
		let data = {
			meetid: this.data.id,
			signoutlong: this.data.longitude,
			signoutlati: this.data.latitude,
			signoutphoto: this.data.files,
		}
		console.log(data)
		util.requestData('meet/signout', 'POST', data).then(res => {
			console.log(res.data)
			if (res.data.code == 200) {
				wx.showToast({
					title: res.data.msg,
					icon: 'success',
					mask: true,
					success(res) {
						setTimeout(() => {
							wx.navigateBack({
								delta: 1
							})
						}, 1000)
					}
				});
			} else {
				wx.showToast({
					title: res.data.msg,
					icon: 'error',
					mask: true,
					success(res) {
						setTimeout(() => {
							wx.navigateBack({
								delta: 1
							})
						}, 1000)
					}
				})
			}
		});
	},


	//图片上传
	ChooseImage() {
		let that = this
		wx.chooseImage({
			count: 9, //默认9
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				this.setData({
					imgUrl: res.tempFilePaths[0]
				})
				util.uploadFile(this.data.imgUrl, 'image')
					.then(res => {
						console.log(res)
						if (res.statusCode == 200) {
							let obj = JSON.parse(res.data)
							that.setData({
								files: obj.data,
							})
						} else {
							that.setData({
								imgUrl: '',
								files: '',
							})
						}
					});
			}
		});
	},
	ViewImage(e) {
		wx.previewImage({
			urls: this.data.imgList,
			current: e.currentTarget.dataset.url
		});
	},
	DelImg(e) {
		wx.showModal({
			// title: '召唤师',
			content: '确定要删除吗？',
			cancelText: '再想想',
			confirmText: '确定',
			success: res => {
				if (res.confirm) {
					this.data.imgList.splice(e.currentTarget.dataset.index, 1);
					this.setData({
						imgList: this.data.imgList
					})
				}
			}
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			id: options.id
		})
		console.log(options)
		this.getLocation()
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