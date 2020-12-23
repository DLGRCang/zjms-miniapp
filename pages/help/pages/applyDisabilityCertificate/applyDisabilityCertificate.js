// pages/help/pages/applyDisabilityCertificate/applyDisabilityCertificate.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		disabilityTypes: ['视力残疾', '听力残疾', '语言残疾', '肢体残疾', '智力残疾', '精神残疾'], //残疾类型(多选)

		idCard: '', //身份证号
		name: '', //姓名
		disabilityType: '', //残疾类型
		sex: '', //性别
		contactName: '', //监护人或联系人姓名
		applicationType: '', //申领类型
		marital: '', //婚姻状况
		currentDate: (new Date().toLocaleDateString()).replace(/\//g, '-'), //申请日期（当前日期）
		birthday: '', //出生日期
		contactNumber: '', //联系电话
		nativePlace: '', //籍贯
		permanentResidenceAddress: '', //户籍地址
		postCode: '', //邮政编码
		presentAddress: '', //现住址
		relationshipWithRheApplican: '', //与申请人关系
		standardCulture: '', //文化程度

	},
	//提交数据
	commitData() {
		let data = {
			applicationDate: this.data.currentDate,
			applicationType: this.data.applicationType,
			birthday: this.data.birthday,
			contactName: this.data.contactName,
			contactNumber: this.data.contactNumber,
			disName: this.data.name,
			disabilityTypes: this.data.disabilityType,
			guardianOrContactNumber: this.data.guardianOrContactNumber,
			idNumber: this.data.idCard,
			maritalStatus: this.data.marital,
			nativePlace: this.data.nativePlace,
			permanentResidenceAddress: this.data.permanentResidenceAddress,
			postCode: this.data.postCode,
			presentAddress: this.data.presentAddress,
			relationshipWithRheApplican: this.data.relationshipWithRheApplican,
			sex: this.data.sex,
			standardCulture: this.data.standardCulture,
		}
		console.log(data)
		util.requestApi('disabilitycertificate/savedisabilitycertificate', 'POST', data).then(res => {
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
		console.log(this.data.disabilityType)
		console.log(this.data.sex)
		console.log(this.data.marital)
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