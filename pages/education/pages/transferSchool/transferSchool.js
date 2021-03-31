// pages/education/pages/transferSchool/transferSchool.js
const util = require('../../../../utils/util.js')
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		schools: [],
		fileState: '待上传', //居住证明上传状态
		accessory: '', //监护人居住证明
		nationList: app.globalData.nationList,
		gradeList: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三'],
		photoState: '待上传', //学生、家长或其他监护人居民户口簿照片附件上传状态 ,
		photo: '', //学生、家长或其他监护人居民户口簿照片附件 ,
		currentAddress: '', //现家庭住址
		domicilePlace: '', //户籍所在地
		grade: '', //年级
		guardianCompany: '', //监护人工作单位
		guardianName: '', //监护人姓名
		guardianPhone: '', //监护人联系电话
		idCard: '', //身份证号
		nation: '', //民族
		originalSchool: '', //原就读学校名称
		originalSchoolPhone: '', //原就读学校联系电话
		schoolInformationName: '', //学校
		schoolInformationId: '', //学校id
		sex: '', //性别
		studentNumber: '', //学籍号
		transferReason: '', //转学理由
		userName: '', //学生姓名



	},
	//获取学校列表
	getSchools() {
		util.requestApi('schoolinformation/listschoolinformation', 'GET', {}).then(res => {
			this.setData({
				schools: res.data
			})
			console.log(res)
		})
	},
	//获取学校
	getSchool(e) {
		this.setData({
			schoolInformationName: this.data.schools[e.detail.value].schoolName,
			schoolInformationId: this.data.schools[e.detail.value].schoolInformationId
		})
	},
	//获取民族
	getNation(e) {
		this.setData({
			nation: this.data.nationList[e.detail.value]
		})
	},
	//获取年级
	getGrade(e) {
		this.setData({
			grade: this.data.gradeList[e.detail.value]
		})
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
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

	//提交数据
	commitData() {
		let data = {
			accessory: this.data.accessory,
			photo: this.data.photo,
			currentAddress: this.data.currentAddress,
			domicilePlace: this.data.domicilePlace,
			grade: this.data.grade,
			guardianCompany: this.data.guardianCompany,
			guardianName: this.data.guardianName,
			guardianPhone: this.data.guardianPhone,
			idCard: this.data.idCard,
			nation: this.data.nation,
			originalSchool: this.data.originalSchool,
			originalSchoolPhone: this.data.originalSchoolPhone,
			schoolInformationId: this.data.schoolInformationId,
			sex: this.data.sex,
			studentNumber: this.data.studentNumber,
			transferReason: this.data.transferReason,
			userName: this.data.userName,
			userId: wx.getStorageSync("userId"),
		}
		console.log(data)
		util.requestApi('schoolinformation/savetransferschool', 'POST', data).then(res => {
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
	//选择文件并上传户口本
	uploadFilePhoto: function () {
		let that = this
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album'],
			success(res) {
				const tempFilePaths = res.tempFilePaths
				util.uploadFile(tempFilePaths[0], 'image').then(res => {
					console.log(res)
					if (res.statusCode == 200) {
						let obj = JSON.parse(res.data)

						that.setData({
							photoState: '上传成功',
							photo: obj.data
						})
					} else {
						that.setData({
							photoState: '上传失败',
						})
					}
				});
			},
		})
	},
	//选择文件并上传居住证明
	uploadFile: function () {
		let that = this
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album'],
			success(res) {
				const tempFilePaths = res.tempFilePaths
				util.uploadFile(tempFilePaths[0], 'image').then(res => {
					console.log(res)
					if (res.statusCode == 200) {
						let obj = JSON.parse(res.data)

						that.setData({
							fileState: '上传成功',
							accessory: obj.data
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
		this.getSchools()
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