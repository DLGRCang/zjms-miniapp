const util = require("../../../../utils/util")

// pages/appointment/pages/vaccine/vaccine.js

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		datePicker: [], //可预约日期列表
		pickerData: '', //选中的预约日期
		dateScopePicker: [], //可预约时段列表
		pickerScopeData: '', //选中的预约时段
	},
	PickerChange(e) {
		this.setData({
			pickerData: this.data.datePicker[e.detail.value]
		})
		this.setData({
			pickerScopeData: ''
		})
		this.getDateScope()
	},
	PickerScopeChange(e) {

		console.log(this.data.dateScopePicker)
		this.setData({
			pickerScopeData: this.data.dateScopePicker[e.detail.value]
		})
	},
	//加载可预约日期列表
	getDate: function () {
		let data = {
			fun: "getDate"
		}
		util.requestApi('vaccineinoculate/getVaccineInoculate', 'GET', data).then(res => {
			console.log()
			if (res.statusCode==200) {
				let dateList = [];
				for (let i = 0; i < res.data.data.bookDate.length; i++) {
					dateList.push(res.data.data.bookDate[i].date)
				}
				this.setData({
					datePicker: dateList
				})
			}else{
				util.showToast("预约日期加载失败");
			}
		});
	},
	//加载可预约时段
	getDateScope: function () {
		let data = {
			fun: "bookDate",
			bookDate:this.data.pickerData
		}
		util.requestApi('vaccineinoculate/getVaccineInoculate', 'GET', data).then(res => {
			console.log( res.data.data.timeSpan)
			if (res.statusCode==200) {
				let dateList = [];
				for (let i = 0; i < res.data.data.timeSpan.length; i++) {
					dateList.push(res.data.data.timeSpan[i].timeSpanDisplay)
				}
				this.setData({
					dateScopePicker: dateList
				})
			}else{
				util.showToast("预约日期加载失败");
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