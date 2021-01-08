const util = require("../../../../utils/util")

// pages/appointment/pages/vaccine/vaccine.js

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		datePicker: [], //可预约日期列表
		pickerData: '', //选中的预约日期
		//用来显示
		dateScopePicker: [], //可预约时段列表
		pickerScopeData: '', //选中的预约时段
		//用来提交
		dateScopePickerValue: [], //可预约时段列表
		pickerScopeDataValue: '', //选中的预约时段

		mobile: '', //手机号
		name: '', //姓名
		info: '', //备注
	},
	PickerChange(e) {
		this.setData({
			pickerData: this.data.datePicker[e.detail.value]
		})
		this.setData({
			pickerScopeData: '',
			pickerScopeDataValue: ''
		})
		this.getDateScope()
	},
	PickerScopeChange(e) {

		this.setData({
			pickerScopeData: this.data.dateScopePicker[e.detail.value],
			pickerScopeDataValue: this.data.dateScopePickerValue[e.detail.value].bookBeginDateTime
		})

	},
	//加载可预约日期列表
	getDate: function () {
		let data = {
			fun: "getDate"
		}
		util.requestData('vaccineinoculate/getVaccineInoculate', 'GET', data).then(res => {
			console.log()
			if (res.statusCode == 200) {
				let dateList = [];
				for (let i = 0; i < res.data.data.bookDate.length; i++) {
					dateList.push(res.data.data.bookDate[i].date)
				}
				this.setData({
					datePicker: dateList
				})
			} else {
				util.showToast("预约日期加载失败");
			}
		});
	},
	//加载可预约时段
	getDateScope: function () {
		let data = {
			fun: "bookDate",
			bookDate: this.data.pickerData
		}
		util.requestData('vaccineinoculate/getVaccineInoculate', 'GET', data).then(res => {
			console.log(res.data)
			if (res.statusCode == 200) {
				if (res.data.length == 0) {
					util.showToast("该日期已约满")
					return
				}
				let dateList = [];
				for (let i = 0; i < res.data.length; i++) {
					dateList.push(res.data[i].timeSpanDisplay)
				}
				this.setData({
					dateScopePicker: dateList,
					dateScopePickerValue: res.data
				})
			} else {
				util.showToast("预约日期加载失败");
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
	//提交数据
	commitData() {

		if (!this.data.planDate) {
			util.showToast("可预约时段不能为空")
		}

		let data = {
			fun: 'addBook',
			userId: wx.getStorageSync("userId"),
			mobile: this.data.mobile,
			name: this.data.name,
			planDate: this.data.pickerScopeDataValue,
			info: this.data.info,
		}
		console.log(data)

		util.requestData('vaccineinoculate/getVaccineInoculate', 'GET', data).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				if (res.data.status == "success") {
					wx.navigateBack({
						delta: 1
					})
					util.showToast("提交成功")
				}else{
					util.showToast(res.data.message)
				}

			} else {
				util.showToast(res.data.msg)
			}
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getDate()
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