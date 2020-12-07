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
    phone:'',
    culture:'',
    cardNumber:'',
    type:'',
    major:'',
    place:'',
    intention: '',
    subTime:util.formatDate(new Date())
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
	console.log(e.detail.value);
	this.setData({
		date: e.detail.value
	})
},
//联系电话
getPhone(e){
this.setData({
	phone: e.detail.value
})
},
//文化程度
getCulture(e){
this.setData({
	culture: e.detail.value
})
},
//身份证号
getCardNumber(e){
this.setData({
	cardNumber: e.detail.value
})
},
//人员类型
getType(e){
this.setData({
	type: e.detail.value
})
},
//培训专业
getMajor(e){
this.setData({
	major: e.detail.value
})
},
//培训地点
getPlace(e){
this.setData({
	place: e.detail.value
})
},
//就业意向
getIntention(e) {
	console.log(e.detail.value);
	this.setData({
		intention: e.detail.value
	})
},
submit() {
	util.checkPhone(this.data.phone)
	util.checkIdCard(this.data.cardNumber)
	let formData = {
		name:this.data.name,
		sex:this.data.sex,
		area:this.data.area,
		nation:this.data.nation,
		date:this.data.date,
		phone:this.data.phone,
		culture:this.data.culture,
		cardNumber:this.data.cardNumber,
		type:this.data.type,
		major:this.data.major,
		place:this.data.place,
		intention:this.data.intention,
		time:this.data.subTime
	};
	console.log(formData)
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