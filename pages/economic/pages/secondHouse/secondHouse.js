// pages/economic/pages/secondHouse/secondHouse.js
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		buildingAge:'',
		buildingStructure:'',
		contactInformation:'',
		coveredArea:'',
		elevator:'',
		expectPrice:'',
		familyPictures:[],//户型图片
		vehicleImages:[],//户型图片url
		hall:'',//
		heatingMethod:'',//
		houseNumber:'',//
		level:'',//
		linkman:'',//
		orientation:'',//
		room:'',//
		tier:'',//
		toilet:'',//
		villageName:'',//
	},
	//提交数据
	commitData() {
		if (this.data.coveredArea == '' || this.data.coveredArea == null) {
			wx.showToast({
				title: '建筑面积不能为空',
				icon: 'none',
			})
			return
		}
		if (this.data.contactInformation == '' || this.data.contactInformation == null) {
			wx.showToast({
				title: '联系方式不能为空',
				icon: 'none',
			})
			return
		}
		if (this.data.contactInformation == '' || this.data.contactInformation == null) {
			wx.showToast({
				title: '联系方式不能为空',
				icon: 'none',
			})
			return
		}
		if (this.data.linkman == '' || this.data.linkman == null) {
			wx.showToast({
				title: '联系人不能为空',
				icon: 'none',
			})
			return
		}
		if (this.data.villageName == '' || this.data.villageName == null) {
			wx.showToast({
				title: '小区名称不能为空',
				icon: 'none',
			})
			return
		}
		if (this.data.expectPrice == '' || this.data.expectPrice == null) {
			wx.showToast({
				title: '期望售价不能为空',
				icon: 'none',
			})
			return
		}
		let data = {
			userId: wx.getStorageSync("userId"),
			auditStatus: 0,
			buildingAge: this.data.buildingAge,
			buildingStructure: this.data.buildingStructure,
			contactInformation: this.data.contactInformation,
			coveredArea: this.data.coveredArea,
			elevator: this.data.elevator,
			expectPrice: this.data.expectPrice,
			familyPictures: this.data.familyPictures.toString(),
			hall: this.data.hall,
			heatingMethod: this.data.heatingMethod,
			houseNumber: this.data.houseNumber,
			level: this.data.level,
			linkman: this.data.linkman,
			orientation: this.data.orientation,
			room: this.data.room,
			tier: this.data.tier,
			toilet: this.data.toilet,
			villageName: this.data.villageName,

		}
		console.log(data)
		util.requestApi('secondhandhouse/savesecondhandhouse', 'POST', data).then(res => {
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
							let familyPictures = this.data.familyPictures;
							let vehicleImages = this.data.vehicleImages;
							familyPictures.push(obj.data)
							vehicleImages.push(imgUrl)
							this.setData({
								familyPictures: familyPictures,
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
						this.data.familyPictures.splice(e.currentTarget.dataset.index, 1);
						this.data.vehicleImages.splice(e.currentTarget.dataset.index, 1);
						this.setData({
							familyPictures: this.data.familyPictures,
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