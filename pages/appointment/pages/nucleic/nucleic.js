// pages/appointment/pages/nucleic/nucleic.js
const app = getApp();
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		docList: [],
		docName: '',
		docId: '',
		timeList: [], //号源日期数组
		timeValue: '', //选中的号源日期
		regTimeTypes: [{
				id: 1,
				value: '上午'
			}, {
				id: 2,
				value: '下午'
			}, {
				id: 3,
				value: '晚上',
			},

			{
				id: 6,
				value: '全天',
			},

		],

	},
	//提交数据
	commitData() {
		let data = {
			name: this.data.name,
			userId: wx.getStorageSync("userId"),
			doctorIdFromHIS: this.data.docId,
			regDate: this.data.timeValue,
			regTimeType: this.data.regTimeType,
			mobilephone: this.data.mobilephone,
			cardNo: this.data.cardNo,
		}
		console.log(data)
		util.requestData('hospitalappointment/getAppointment?func=nucleicdDetection', 'GET', data).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				if (res.data.resultStatus == 1) {
					wx.navigateBack({
						delta: 1
					})
					util.showToast("提交成功")
				} else {
					util.showToast(res.data.resultDesc)
				}

			} else {
				util.showToast(res.data.msg)
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
		console.log(e.detail.value)
		this.setData({
			[key]: e.detail.value
		})
	},
	//获取医生列表
	getDepartmentDoctorInfo() {
		util.requestData('hospitalappointment/getDepartmentDoctorInfo?func=&deptIdFromHIS=834' + '&userId=' + wx.getStorageSync("userId"), 'GET', {}).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				this.setData({
					docList: res.data.deptDoctorList
				})

			} else {
				util.showToast("科室医生信息加载失败");
			}
		});
	},
	docChange(e) {
		this.setData({
			docName: this.data.docList[e.detail.value].doctorName,
			docId: this.data.docList[e.detail.value].doctorCode,
			timeList: [],
			timeValue: '',
		})
		this.getDoctorAppoinmentCount()
	},
	//获取医生号源
	getDoctorAppoinmentCount() {
		util.requestData('hospitalappointment/getDoctorAppoinmentCount?func=&doctorIdFromHIS=' + this.data.docId + '&userId=' + wx.getStorageSync("userId"), 'GET', {}).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				if (res.data.ListDoctorAppoinmentCount.length > 0) {
					this.setData({
						timeList: res.data.ListDoctorAppoinmentCount
					})
				} else {
					util.showToast("没号了");
				}


			} else {
				util.showToast("医生号源加载失败");
			}
		});
	},
	timeChange(e) {
		this.setData({
			timeValue: this.data.timeList[e.detail.value].regDate,

		})

	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getDepartmentDoctorInfo()
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