// pages/help/pages/applyDisabilitySubsidy/applyDisabilitySubsidy.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		amountOfMedicalReimbursement:'',//医疗报销金额
		amountOfSalvage:'',//救助金额
		contactNumber:'',//联系电话
		disabledPersonNumber:'',//残疾证号
		diseaseName:'',//疾病名称
		guardianName :'',//监护人姓名
		permanentResidenceAddress :'',//户籍所在地
		personalRelationship :'',//与残疾人关系
		reimbursementInsurance :'',//保险公司报销金额
		reimbursementlExpenses :'',//医保报销个人自付
		sex :'',//性别
		sinceThePay :'',//核减后自付
		totalReimbursableExpenses :'',//可补费用总额
		treatmentFacility :'',//治疗机构
		userName :'',//申请人姓名

	},
	//提交数据
	commitData() {
		let data = {
			userId:wx.getStorageSync("userId"),
			declarationDate: util.formatDate(new Date()), //申请日期
			auditOpinion: '0', //审批意见
			auditStatus: '0', //审批状态
			amountOfMedicalReimbursement: this.data.amountOfMedicalReimbursement,
			amountOfSalvage: this.data.amountOfSalvage,
			contactNumber: this.data.contactNumber,
			disabledPersonNumber: this.data.disabledPersonNumber,
			diseaseName: this.data.diseaseName,
			guardianName: this.data.guardianName,
			permanentResidenceAddress: this.data.permanentResidenceAddress,
			personalRelationship: this.data.personalRelationship,
			reimbursementInsurance: this.data.reimbursementInsurance,
			reimbursementlExpenses: this.data.reimbursementlExpenses,
			sex: this.data.sex,
			sinceThePay: this.data.sinceThePay,
			totalReimbursableExpenses: this.data.totalReimbursableExpenses,
			treatmentFacility: this.data.treatmentFacility,
			userName: this.data.userName,

		}
		console.log(data)
		util.requestApi('disabledmedicalassistance/savedisabledmedicalassistance', 'POST', data).then(res => {
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