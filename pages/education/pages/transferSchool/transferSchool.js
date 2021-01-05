// pages/education/pages/transferSchool/transferSchool.js
const util = require('../../../../utils/util.js')
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		nationList: app.globalData.nationList,
		gradeList: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三'],
		accessory1: '1', //监护人居住证明（①购房合同及缴款收据原件、复印件；
		accessory2: '1', //房产证原件、复印件；
		accessory3: '1', //旗外户籍租房提供居住证及近三个月水、电、燃气其中一项收据即可；
		accessory4: '1', //旗内户籍租房提供社区居住证明及近三个月水、电、燃气其中一项收据即可
		photo: '1', //学生、家长或其他监护人居民户口簿照片附件 ,
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
		schoolInformationId: '', //学校id
		sex: '', //性别
		studentNumber: '', //学籍号
		transferReason: '', //转学理由
		userName: '', //学生姓名



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
			accessory1: this.data.accessory1,
			accessory2: this.data.accessory2,
			accessory3: this.data.accessory3,
			accessory4: this.data.accessory4,
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
			userId:wx.getStorageSync("userId"),
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