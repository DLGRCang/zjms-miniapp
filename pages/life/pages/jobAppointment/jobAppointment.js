// pages/life/pages/jobAppointment/jobAppointment.js
const app = getApp();
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		name: '',
		sex: '',
		area: '',
		index: null,
		nationList: app.globalData.nationList,
		nation: '',
		date: util.formatDate(new Date()),
		phone: '',
		culture: '',
		cardNumber: '',
		type: '',
		major: '',
		pxTime: '',
		place: '',
		intention: '',
		subTime: util.formatDate(new Date())
	},
	//姓名
	getName(e) {
		this.setData({
			name: e.detail.value
		})
	},
	//性别
	getSex(e) {
		this.setData({
			sex: e.detail.value
		})
	},
	//家庭住址
	getArea(e) {
		this.setData({
			area: e.detail.value
		})
	},
	//民族
	getNation(e) {
		this.setData({
			index: e.detail.value,
			nation: this.data.nationList[e.detail.value]
		})
	},
	//出生年月
	DateChange(e) {
		this.setData({
			date: e.detail.value
		})
	},
	//联系电话
	getPhone(e) {
		this.setData({
			phone: e.detail.value
		})
	},
	//文化程度
	getCulture(e) {
		this.setData({
			culture: e.detail.value
		})
	},
	//身份证号
	getCardNumber(e) {
		this.setData({
			cardNumber: e.detail.value
		})
	},
	//人员类型
	getType(e) {
		this.setData({
			type: e.detail.value
		})
	},
	//培训专业
	getMajor(e) {
		this.setData({
			major: e.detail.value
		})
	},
	getPXtime(e) {
		this.setData({
			pxTime: e.detail.value
		})
	},
	//培训地点
	getPlace(e) {
		this.setData({
			place: e.detail.value
		})
	},
	//就业意向
	getIntention(e) {
		this.setData({
			intention: e.detail.value
		})
	},
	submit() {
		// util.checkPhone(this.data.phone)
		// util.checkIdCard(this.data.cardNumber)
		let formData = {
			application_id:'d3e43335-515b-4c99-871f-eb3c25b1f5a1',
			name: this.data.name,
			sex: this.data.sex,
			address: this.data.area,
			national: this.data.nation,
			birthdate: this.data.date,
			phone: this.data.phone,
			educationlevel: this.data.culture,
			IDCard: this.data.cardNumber,
			personneltype: this.data.type,
			training_professional: this.data.major,
			training_time: this.data.pxTime,
			training_address: this.data.place,
			Employment_intention: this.data.intention,
			apply_time: this.data.subTime
		};
		console.log(formData)
		util.requestApi('applicationFormTable/saveApplicationFormTable', 'POST', formData).then(res => {
			if(res.statusCode==200){
				console.log(res)
				wx.showToast({
          title: "提交成功",
          icon: 'success',
					mask: true,
					success(res){
						setTimeout(() => {
							wx.navigateBack({
								delta: 2
							})
						}, 1000)		
					}
        });			
			}else{
				wx.showToast({
          title: '请检查数据',
					icon: 'error',
        })
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