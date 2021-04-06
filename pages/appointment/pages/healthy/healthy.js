// pages/appointment/pages/healthy/healthy.js
const util = require('../../../../utils/util.js')

Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		title:'',
		type:'',
		dataList: [],
		datePicker: [],
		pickerData: '',
		name: '',
		idCard: '',
		phone: '',
		areas: ['阿勒腾席热镇','乌兰木伦镇','伊金霍洛镇','设札萨克镇','纳林陶亥镇','红庆河镇','苏布尔嘎镇'],//区域列表
		pickerArea: '',//选中区域
		address: '',
		license: ''
	},
	//加载可预约日期列表
	getDate() { 
		util.requestApi('appointmentmanage/listAppointmentDate', 'GET',{}).then(res => {
			if (res.statusCode==200) {
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
		}else{
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
	PickerChange(e) {
		this.setData({
			pickerData:this.data.datePicker[e.detail.value]
		})
	},
	AreaChange(e) {
		this.setData({
			pickerArea:this.data.areas[e.detail.value],

		})
	},
	//提交数据
	commitData(){
		let data={
			appointmentDate:this.data.pickerData,
			areaAppertain:this.data.pickerArea,
			idCard:this.data.idCard,
			licenseName:this.data.license ,
			particularAddress :this.data.address ,
			userName:this.data.name ,
			userPhone:this.data.phone ,
			appointmentType:this.data.type,
			userId:wx.getStorageSync("userId"),
		}
		console.log(data)
		util.requestData('appointmentexamination/saveappointmentexamination', 'POST',data).then(res => {
			console.log(res)
			if(res.statusCode==200){
				wx.navigateBack({
					delta: 1
				})
				util.showToast("提交成功")
				
			}else{
				util.showToast(res.data.msg)
			}
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
	
		let type=options.type;
		let title=options.title;

		this.setData({
			type:type,
			title:title
		})
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
