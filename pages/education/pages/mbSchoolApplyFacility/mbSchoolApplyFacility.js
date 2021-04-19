// pages/education/pages/mbSchoolApplyFacility/mbSchoolApplyFacility.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		teachFacilityList:[]
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		let id = e.currentTarget.dataset.id
		let list = this.data.teachFacilityList
		let item = this.data.teachFacilityList[id]
		if (key == 'equityUnit') {
			item.equityUnit = e.detail.value
		} else if (key == 'facilityName') {
			item.facilityName = e.detail.value
		} else if (key == 'facilityQuantity') {
			item.facilityQuantity = e.detail.value
		}
		 else if (key == 'facilityValue') {
			item.facilityValue = e.detail.value
		} 
		 else if (key == 'privateSchoolId') {
			item.privateSchoolId = e.detail.value
		} 
		 else if (key == 'rentTime') {
			item.rentTime = e.detail.value
		} 
		
	

		list[id] = item
		this.setData({
			teachFacilityList: list
		})
	},
	delete(e) {
		let list = this.data.teachFacilityList;
		list.splice(e.currentTarget.dataset.id, 1)
		this.setData({
			teachFacilityList: list
		})
	},
	add() {
		let list = this.data.teachFacilityList
		let item = {}
		list.push(item)
		this.setData({
			teachFacilityList: list
		})
		console.log(this.data.teachFacilityList)
	},
	finish() {
		let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
		let prevPage = pages[pages.length - 2];
		//prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
		prevPage.setData({ // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
			teachFacilityList: this.data.teachFacilityList // 这里是修改了上一个页面数据:name
		})
		wx.navigateBack({
			delta: '1' // 返回上一级页面。
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options.teachFacilityList)
		this.setData({
			teachFacilityList: JSON.parse(options.teachFacilityList)
		})
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