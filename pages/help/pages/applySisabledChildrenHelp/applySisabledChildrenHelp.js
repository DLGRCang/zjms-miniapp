// pages/help/pages/applySisabledChildrenHelp/applySisabledChildrenHelp.js
const util = require('../../../../utils/util.js')
const app=getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		nationList: app.globalData.nationList, //民族
		admissionDate:'',//录取日期
		admissionInstitutionAndMajor:'',//录取专业及院校
		age:'',//年龄
		contactNumber:'',//联系电话
		disabledName:'',//残疾人姓名
		familiesDisabilitiesNum:'',//家庭残疾人数
		homeAddress:'',//家庭住址
		householdPopulation:'',//家庭总人口
		national:'',//民族
		record:'',//学历
		relationshipStudents:'',//与学生关系
		sex:'',//性别
		stdBirth:'',//学生出生日期
		studentName:'',//学生姓名
		studentNational:'',//学生民族
		studentSex:'',//学生性别
		studyFee:'',//就读费用
	},
	//提交数据
	commitData() {
		let data = {
			userId:wx.getStorageSync("userId"),
			admissionDate:this.data.admissionDate,
			admissionInstitutionAndMajor:this.data.admissionInstitutionAndMajor,
			age:this.data.age,
			applicationDate:util.formatDate(new Date()),//申请日期(当前日期)
			auditOpinion:'无',//审核意见
			auditStatus:'0',//审核状态
			contactNumber:this.data.contactNumber,
			disabledName:this.data.disabledName,
			familiesDisabilitiesNum:this.data.familiesDisabilitiesNum,
			homeAddress:this.data.homeAddress,
			householdPopulation:this.data.householdPopulation,
			national:this.data.national,
			record:this.data.record,
			relationshipStudents:this.data.relationshipStudents,
			sex:this.data.sex,
			stdBirth:this.data.stdBirth,
			studentName:this.data.studentName,
			studentNational:this.data.studentNational,
			studentSex:this.data.studentSex,
			studyFee:this.data.studyFee,
		}
		console.log(data)
		util.requestApi('collegestudentaid/savecollegestudentaid', 'POST', data).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				wx.navigateBack({
					delta: 1
				})
				util.showToast("提交成功")

			} else {
				util.showToast("提交失败")
			}
		});
	},
	//民族
	getNation(e) {
		let key = e.currentTarget.dataset.key
		this.setData({
			[key]: this.data.nationList[e.detail.value]
		})
	},
	//学生出生日期
	BirDateChange(e) {
		this.setData({
			stdBirth: e.detail.value
		})
	},
	//录取日期
	DateChange(e) {
		this.setData({
			admissionDate: e.detail.value
		})
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