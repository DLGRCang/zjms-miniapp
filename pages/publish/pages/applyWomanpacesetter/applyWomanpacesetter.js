// pages/publish/pages/applyWomanpacesetter/applyWomanpacesetter.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		nationList: app.globalData.nationList, //民族
		fileState: '待上传', //文件名称
		applicantPhotoa: '', //申请人照片
		birthday: '', //出生日期
		cellphone: '', //手机号
		contactAddress: '', //通讯地址
		dutuies: '', //职务
		education: '', //学历
		fixedlineTelephone: '', //固定电话
		mainStory: '', //主要事迹
		majoAwards: '', //主要获奖情况
		nation: '', //民族
		politicsStatus: '', //政治面貌
		postalCode: '', //邮编
		rankLever: '', //职级
		recommendWays: '', //推荐方式
		recommendedUnits: '', //推荐单位
		referrerName: '', //推荐人
		sex: '', //推荐人
		userName: '', //姓名
		workUnit: '', //工作单位
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
	},
	radioChange(e) {
		console.log(e)
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
	},
	//获取民族
	getNation(e) {
		console.log(e)
		this.setData({
			nation: this.data.nationList[e.detail.value]
		})
	},
		//提交数据
		commitData() {
			let data = {
				userId:wx.getStorageSync("userId"),
				fillTime: util.formatDate(new Date()), //填报
				applicantPhotoa: this.data.applicantPhotoa,
				auditStatus: '0',
				birthday: this.data.birthday,
				cellphone: this.data.cellphone,
				contactAddress: this.data.contactAddress,
				dutuies: this.data.dutuies,
				education: this.data.education,
				fixedlineTelephone: this.data.fixedlineTelephone,
				mainStory: this.data.mainStory,
				majoAwards: this.data.majoAwards,
				nation: this.data.nation,
				politicsStatus: this.data.politicsStatus,
				postalCode: this.data.postalCode,
				rankLever: this.data.rankLever,
				recommendWays: this.data.recommendWays,
				recommendedUnits: this.data.recommendedUnits,
				referrerName: this.data.referrerName,
				sex: this.data.sex,
				userName: this.data.userName,
				workUnit: this.data.workUnit,
			
			}
			console.log(data)
			util.requestApi('womanpacesetter/savewomanpacesetter', 'POST', data).then(res => {
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
		//选择文件并上传
		uploadFile: function () {
			let that = this
			wx.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'],
				success(res) {
					const tempFilePaths = res.tempFilePaths
					util.uploadFile(tempFilePaths[0], 'image').then(res => {
						console.log(res)
						if (res.statusCode == 200) {
							let obj = JSON.parse(res.data)
			
							that.setData({
								fileState: '上传成功',
								applicantPhotoa: obj.data
							})
						} else {
							that.setData({
								fileState: '上传失败',
							})
						}
					});
				},
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