// pages/education/pages/transferSchool/transferSchool.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		gradeList:['一年级','二年级','三年级','四年级','五年级','六年级','初一','初二','初三','高一','高二','高三'],
		grade:'',
	},
	//获取年级
	getGrade(e) {
		this.setData({
			grade: this.data.gradeList[e.detail.value]
		})
	},
	//提交数据
	commitData() {
		let data = {

		}
		console.log(data)
		util.requestApi('schoolinformation/savetransferschool', 'POST', data).then(res => {
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