// pages/economic/pages/SecondUsedCar/SecondUsedCar.js
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		addressOfCar: '',
		brand: '',
		carConfiguration: '',
		changeTheNumber: '',
		compulsoryInsuranceExpires: '',
		contactNumber: '',
		describeInPerfectCondition: '',
		expiryOfCommercialInsurance: '',
		historicalPurposes: '',
		linkman: '',
		locationLicence: '',
		publisherIdentity: '',
		releaseCity: '',
		roadHaul: '',
		timeOfFirstRegistration: '',
		transferPrice: '',
		vehicleColor: '',
		vehicleConfigurationHighlights: '',
		vehicleIdentificationNumber: '',
		vehicleImages: [], //车辆图片url
		vehicleImagesId: [], //车辆图片
		vehicleSecured: '',
		videoList: [], //车辆视频url
		videoListid: [], //车辆视频
		whetherTheTransferFeeIsIncluded: '',
		yearlyCheckDue: '',
	},
	//提交数据
	commitData() {
		let data = {
			userId: wx.getStorageSync("userId"),
			auditStatus: 0,
			addressOfCar: this.data.addressOfCar,
			brand: this.data.brand,
			carConfiguration: this.data.carConfiguration,
			changeTheNumber: this.data.changeTheNumber,
			compulsoryInsuranceExpires: this.data.compulsoryInsuranceExpires,
			contactNumber: this.data.contactNumber,
			describeInPerfectCondition: this.data.describeInPerfectCondition,
			expiryOfCommercialInsurance: this.data.expiryOfCommercialInsurance,
			historicalPurposes: this.data.historicalPurposes,
			linkman: this.data.linkman,
			locationLicence: this.data.locationLicence,
			publisherIdentity: this.data.publisherIdentity,
			releaseCity: this.data.releaseCity,
			roadHaul: this.data.roadHaul,
			timeOfFirstRegistration: this.data.timeOfFirstRegistration,
			transferPrice: this.data.transferPrice,
			vehicleColor: this.data.vehicleColor,
			vehicleConfigurationHighlights: this.data.vehicleConfigurationHighlights,
			vehicleIdentificationNumber: this.data.vehicleIdentificationNumber,
			vehicleImages: this.data.vehicleImagesId.toString(),
			vehicleSecured: this.data.vehicleSecured,
			vehicleVideo: this.data.videoListid.toString(),
			whetherTheTransferFeeIsIncluded: this.data.whetherTheTransferFeeIsIncluded,
			yearlyCheckDue: this.data.yearlyCheckDue,
		}
		console.log(data)
		util.requestApi('secondhandcar/savesecondhandcar ', 'POST', data).then(res => {
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
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
	},
	radioChange(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
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
								videoList:videoList
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
							let vehicleImagesId = this.data.vehicleImagesId;
							let vehicleImages = this.data.vehicleImages;
							vehicleImagesId.push(obj.data)
							vehicleImages.push(imgUrl)
							this.setData({
								vehicleImagesId: vehicleImagesId,
								vehicleImages:vehicleImages
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
						this.data.vehicleImagesId.splice(e.currentTarget.dataset.index, 1);
						this.data.vehicleImages.splice(e.currentTarget.dataset.index, 1);
						this.setData({
							vehicleImagesId: this.data.vehicleImagesId,
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