// pages/publish/pages/applyBestFamily/applyBestFamily.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		nationList: app.globalData.nationList, //民族
		fileState: '待上传', //文件名称
		//申请最美家庭
		address: '', //家庭住址
		beautifulFamilyType: '', //最美家庭类别
		briefIntroductionofMainEvents: '', //主要事件介绍
		filePath: '', //文件上传路径
		homeTelephone: '', //家庭电话
		householdName: '', //户主姓名
		idNumber: '', //户主身份证号
		nation: '', //民族
		numberPeople: '', //家庭成员数
		phoneNumber: '', //户主电话
		sex: '', //户主性别
		standardCulture: '', //户主文化程度
		workUnit: '', //户主工作单位及职务
		familyName: '', //最美家庭名称
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
	//获取民族
	getNation(e) {
		this.setData({
			nation: this.data.nationList[e.detail.value]
		})
	},	//提交数据
	commitData() {
		let data = {
			userId:wx.getStorageSync("userId"),
			auditStatus:'0',
			applicationDate: util.formatDate(new Date()), //申请日期
			address:this.data.address,
			beautifulFamilyType:this.data.beautifulFamilyType,
			briefIntroductionofMainEvents:this.data.briefIntroductionofMainEvents,
			filePath:this.data.filePath,
			homeTelephone:this.data.homeTelephone,
			householdName:this.data.householdName,
			idNumber:this.data.idNumber,
			nation:this.data.nation,
			numberPeople:this.data.numberPeople,
			phoneNumber:this.data.phoneNumber,
			sex:this.data.sex,
			standardCulture:this.data.standardCulture,
			workUnit:this.data.workUnit,
			familyName:this.data.familyName,
		}
		console.log(data)
		util.requestApi('beautifulfamily/savebeautifulfamily', 'POST', data).then(res => {
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
		wx.chooseMessageFile({
			count: 1,
			type: 'image',
			success(res) {
				const tempFilePaths = res.tempFiles
				util.uploadFile(tempFilePaths[0].path, 'image').then(res => {
					console.log(res)
					if (res.statusCode == 200) {
						let obj = JSON.parse(res.data)
		
						that.setData({
							fileState: '上传成功',
							filePath: obj.data
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