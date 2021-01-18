const util = require("../../../../utils/util");
const app=getApp()

// pages/help/pages/applySubsidy/applySubsidy.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		nationList: app.globalData.nationList, //民族
		reasonApplyings:['贫困户','大病','意外','自然灾害'],
		reasonApplying:'',//申请原因
		address:'',//家庭住址
		userName:'',//姓名
		age:'',//年龄
		contactNumber:'',//联系电话
		idNumber:'',//身份证号
		nation:'',//民族
		rankLevel:'',//职级
		reasonApplying:'',//申请原因
		remark:'',//备注
		sex:'',//性别
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
			userName:this.data.userName,
			address:this.data.address,
			age:this.data.age,
			contactNumber:this.data.contactNumber,
			idNumber:this.data.idNumber,
			nation:this.data.nation,
			rankLevel:this.data.rankLevel,
			remark:this.data.remark,
			sex:this.data.sex,
			status:'未审核',
			applicationDate:util.formatDate(new Date()),
			reasonApplying: this.data.reasonApplying.toString(),
	
		}
		console.log(data)
		util.requestApi('redcross/saveredcross', 'POST', data).then(res => {
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