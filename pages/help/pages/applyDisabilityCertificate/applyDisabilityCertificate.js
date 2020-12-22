// pages/help/pages/applyDisabilityCertificate/applyDisabilityCertificate.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		disabilityTypes:['视力残疾','听力残疾','语言残疾','肢体残疾','智力残疾','精神残疾'],//残疾类型(多选)

		disabilityType:'',//残疾类型
		sex:'',//性别
		contactName:'',//监护人或联系人姓名
		applicationType:'',//申领类型
		marital:'',//婚姻状况
		currentDate:(new Date().toLocaleDateString()).replace(/\//g,'-'),//申请日期（当前日期）
		birthday:''//出生日期
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)

		this.setData({
			[key]: e.detail.value
		})

	},
	radioChange(e){
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