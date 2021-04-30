// pages/education/pages/studentHelpApply3/studentHelpApply3.js
const util = require('../../../../utils/util.js')
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: '', //附件地址
		nationList: app.globalData.nationList, //民族
		studentName: '', //学生姓名
		studentSex: '', //学生性别
		personContact: '', //本人联系方式
		studentIdCard: '', //身份证号
		studentNational: '', //民族
		examineeNumber: '', //考生号
		registeredPlace: '', //户籍所在地
		registrationNature: '', //户籍性质
		graduationSchool: '', //毕业院校
		admissionSchoolName: '', //录取院校
		admissionLevel: '', //录取层级
		educational: '', //学制
		difficultType: '', //困难类型
		guardianName: '', //监护人姓名
		guardianIdCard: '', //监护人身份证号
		establishArchiveNumber: '', //低保/ 建档立卡/孤儿序号
		establishArchiveDate: '', //低保/ 建档立卡/孤儿凭证审核时间
		applyPersonRelation: '', //与申请人关系
		guardianAddress: '', //监护人户籍所在地
		guardianContact: '', //监护人联系方式
		studentPhoto: '', //学生照片


	},

	//提交数据
	commitData() {
		let data = {
			applyType: 3,
			userId: wx.getStorageSync("userId"),
			studentName:this.data.studentName,
			studentSex:this.data.studentSex,
			studentIdCard: this.data.studentIdCard,
			personContact: this.data.personContact,
			studentNational: this.data.studentNational,
			examineeNumber: this.data.examineeNumber,
			registeredPlace: this.data.registeredPlace,
			registrationNature: this.data.registrationNature,
			graduationSchool: this.data.graduationSchool,
			admissionSchoolName: this.data.admissionSchoolName,
			admissionLevel: this.data.admissionLevel,
			educational: this.data.educational,
			difficultType: this.data.difficultType,
			guardianName: this.data.guardianName,
			guardianIdCard: this.data.guardianIdCard,
			establishArchiveNumber: this.data.establishArchiveNumber,
			establishArchiveDate: this.data.establishArchiveDate,
			applyPersonRelation: this.data.applyPersonRelation,
			guardianAddress: this.data.guardianAddress,
			guardianContact: this.data.guardianContact,
			studentPhoto: this.data.studentPhoto,
			applyState: 0,
		}
		console.log(data)
		util.requestApi('studentsubsidize/savestudentsubsidize', 'POST', data).then(res => {
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
	//获取民族
	getNation(e) {
		this.setData({
			studentNational: this.data.nationList[e.detail.value]
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
	//选择图片
	ChooseImage() {
		let that = this
		wx.chooseImage({
			count: 1, //默认9
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
								studentPhoto: obj.data,
							})
						} else {
							that.setData({
								imgUrl: '',
								studentPhoto: '',
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
						imgUrl: '',
						studentPhoto: '',
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