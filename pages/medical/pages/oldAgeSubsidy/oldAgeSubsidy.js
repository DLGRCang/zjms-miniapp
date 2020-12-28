// pages/medical/pages/oldAgeSubsidy/oldAgeSubsidy.js
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		nationList: app.globalData.nationList, //民族
		nation: '', //选中的民族列表
		contactPhone:'',//联系电话
		idCard:'',//身份证号
		idCanowAddress:'',//户籍地址（现住址）
		idCanoprincipalContactPhone:'',//受委托人联系电话
		principalIdCard:'',//受委托人身份证号
		principalName:'',//受委托人姓名
		principalNowAddress:'',//受委托人住址
		principalSex:'',//受委托人性别
		relationship:'',//与申请人关系
		userName:'',//申请人姓名
		userSex:'',//性别
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
	//获取民族
	getNation(e) {
		this.setData({
			nation: this.data.nationList[e.detail.value]
		})
	},
	//提交数据
	commitData() {
		let data = {
			attachment:'',//身份证附件
			contactPhone:this.data.contactPhone,
			idCard:this.data.idCard,
			idCanowAddress:this.data.idCanowAddress,
			principalContactPhone:this.data.principalContactPhone,
			principalIdCard:this.data.principalIdCard,
			principalName:this.data.principalName,
			principalNowAddress:this.data.principalNowAddress,
			principalSex:this.data.principalSex,
			relationship:this.data.relationship,
			userName:this.data.userName,
			userNation:this.data.nation,
			userSex:this.data.userSex,

		}
		console.log(data)
		util.requestApi('subsidies/savesubsidies', 'POST', data).then(res => {
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