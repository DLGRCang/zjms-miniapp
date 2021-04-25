// pages/plugin/face/face.js
const util = require('../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		type: 1,
		name: '',
		idCard: '',
		access_token: '',

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
		console.log(e.detail.value)
		this.setData({
			[key]: Number(e.detail.value)
		})
	},
	faceid() {
		// 测试登录
		// this.goLogin()


		let that = this
		if (this.data.name == '') {
			util.showToast('姓名不能为空')
			return
		}
		if (this.data.idCard == '') {
			util.showToast('身份证号为空')
			return
		}
		if (!util.checkIdCard(this.data.idCard)) {
			util.showToast('身份证错误')
			return
		}

		wx.startFacialRecognitionVerify({

			name: this.data.name,
			idCardNumber: this.data.idCard,
			checkAliveType: this.data.type,
			success(res) {
				that.setData({
					access_token: res.verifyResult
				})
				console.log(res)
				console.log(res.verifyResult)
				console.log('识别成功')
				that.goLogin();
			},
			fail(res) {
				util.showToast('登录失败，请重试')
				console.log("res" + JSON.stringify(res))
				console.log('识别失败' + res.verifyResult)
			},
			complete(com) {
				console.log("com" + JSON.stringify(com))
			}
		})
	},
	//微信登录
	goLogin: function (e) {
		let that = this;
		wx.login({
			success(res) {
				that.userInfoHandler(res.code);
			}
		})
	},
	userInfoHandler(code) {
		let that = this;
		wx.getUserInfo({
			success: function (res) {
				that.putUserData(code, res.iv, res.encryptedData)
			}
		})
	},

	//服务器登录
	putUserData(code, iv, encryptedData) {
		let that = this;
		let data = {
			code: code,
			iv: iv,
			encryptedData: encryptedData,
			type: '1',
		}
		util.httpRequest('https://yiqi.sucstep.com/app/sign/checkCoderelease', 'post', data).then(res => {
			console.log(res)


			if (res.data.code == 200) {
				util.showToast("登录成功")
				wx.setStorageSync("isLogin", true);
				wx.setStorageSync("token", res.data.result.data.token);
				wx.setStorageSync("userId", res.data.result.data.userInfo.id);
				wx.setStorageSync("isLogin", true);
				wx.setStorageSync("name", that.data.name); //姓名	
				wx.setStorageSync("idCard", that.data.idCard); //身份证号
				that.setData({
					isLogin: wx.getStorageSync("isLogin")
				})
				wx.navigateBack({
					delta: 1
				})
			} else {
				util.showToast("登录失败")
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