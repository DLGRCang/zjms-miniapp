// pages/economic/pages/protectRightConsumer/protectRightConsumer.js
const util = require('../../../../utils/util.js')
const app = getApp()
let QQMapWX = require('../../../../libs/qqmap/qqmap-wx-jssdk.min');
let qqmapsdk = new QQMapWX({
	key: 'O5QBZ-JLYL6-3MTSA-E3BN3-YAWD7-A3FXI'
});
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		currentDate: util.formatDate(new Date), //当前日期
		imgUrl: '', //附件地址
		files: '',
		userId: wx.getStorageSync("userId"),
		beComplainted: '', //投诉对象
		title: '', //投诉标题
		details: '', //投诉内容
		address: '', //投诉地点
		application_id: '', //

	},
	getAddress() {
		var that = this;
		//获取当前位置
		wx.getLocation({
			type: 'wgs84',

			success: function (res) {
				var lat = res.latitude;
				var lon = res.longitude;
				//根据坐标获取当前位置名称，腾讯地图逆地址解析
				qqmapsdk.reverseGeocoder({
					location: {
						latitude: lat,
						longitude: lon
					},
					success: function (res) {
						var address = res.result.address;
						console.log(address)
						that.setData({
							address: address,
							latitude: lat,
							longitude: lon,
						})
					}

				});
			},
		});

	},
	//提交数据
	commitData() {
		let data = {}

		if (this.data.application_id == "2b729e70-7c3f-4109-9416-944d5f0cb3af") {
			 data = {
				user_id: this.data.userId,
				be_complainted: this.data.beComplainted,
				title: this.data.title,
				details: this.data.details,
				complaint_time: this.data.currentDate,
				address: this.data.address,
				files: this.data.files,
				application_id: this.data.application_id,
			}
		} else {
			 data = {
				user_id: this.data.userId,
				// be_complainted: this.data.beComplainted,
				title: this.data.title,
				// details: this.data.details,
				complaint_time: this.data.currentDate,
				address: this.data.address,
				files: this.data.files,
				application_id: this.data.application_id,
			}
		}

		console.log(data)
		util.requestApi('applicationFormTable/saveApplicationFormTable', 'POST', data).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				wx.navigateBack({
					delta: 1
				})
				util.showToast("提交成功")

			} else {
				util.showToast(res.data.msg)
			}
		});
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		this.setData({
			[key]: e.detail.value
		})
	},
	//选择图片
	ChooseImage() {
		let that = this
		wx.chooseImage({
			count: 1, //默认9
			sizeType: ['original', 'compressed'],
			sourceType: ['album'],
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
	//删除图片/视频
	DelImg(e) {
		wx.showModal({
			content: '确定要删除吗？',
			cancelText: '再想想',
			confirmText: '确定',
			success: res => {
				if (res.confirm) {
					this.setData({
						imgUrl: ''
					})
				}
			}
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
		this.getAddress()
		this.setData({
			application_id: options.id
		})
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