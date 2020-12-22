// pages/appointment/pages/healthy/healthy.js
const util = require('../../../../utils/util.js')

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		dataList: [],
		datePicker: [],
		pickerData: '',
		name: '',
		idCard: '',
		phone: '',
		area: '',
		address: '',
		license: ''


	},
	//加载可预约日期列表
	getDate() {
		util.requestApi('appointmentmanage/listAppointmentDate', 'GET', '').then(res => {
			this.setData({
				dataList: res.data
			})
			let dateList = [];
			for (let i = 0; i < this.data.dataList.length; i++) {
				dateList.push((this.data.dataList)[i].appointmentDate)
			}

			this.setData({
				datePicker: dateList
			})
		});
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)

		this.setData({
			[key]: e.detail.value
		})

	},
	PickerChange(e) {

		this.setData({
			pickerData: e.detail.value
		})
	},
	//提交数据
	commitData(){
		let data={
			appointmentDate:this.data.pickerData,
			area_appertain:this.data.area,
			idCard:this.data.idCard,
			license_name:this.data.license ,
			particularAddress :this.data.address ,
			userName:this.data.name ,
			user_phone:this.data.phone ,
		}
		console.log(data)
		util.requestApi('appointmentexamination/saveappointmentexamination', 'POST',data).then(res => {
			console.log(res)
			if(res.statusCode==200){
				wx.navigateBack({
					delta: 1
				})
				util.showToast("提交成功")
				
			}else{
				util.showToast("提交失败")
			}
		

		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		this.getDate()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
