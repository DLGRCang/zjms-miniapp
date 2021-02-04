// pages/life/pages/financeLoans/financeLoans.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tabName: ['个人申请', '企业申请'],
		tabId:0,
		userType: '个人',
		earnestMoney: '', //意向金额
		purposeToDescribe: '', //用途描述

		//企业
		companyName: '', //企业名称
		corporateContacts: '', //企业联系人
		corporateContactsNumber: '', //企业联系人手机号
		creditCode: '', //信用代码
		//个人
		idNumber:'',//身份证号
		phoneNumber:'',//手机号
		userName:'',//姓名
	},
		//提交数据
		commitData() {
			let data = {
				userId:wx.getStorageSync("userId"),
				purposeToDescribe:this.data.purposeToDescribe,
				earnestMoney:this.data.earnestMoney,
				userType:this.data.userType,
			
				companyName:this.data.companyName,
				corporateContacts:this.data.corporateContacts,
				corporateContactsNumber:this.data.corporateContactsNumber,
				creditCode:this.data.creditCode,


				idNumber :this.data.idNumber ,
				phoneNumber :this.data.phoneNumber ,
				userName :this.data.userName ,
			
			}
			console.log(data)
			util.requestApi('loanapplication/saveloanapplication', 'POST', data).then(res => {
				console.log(res)
				if (res.statusCode == 200) {
					wx.navigateBack({
						delta: 1
					})
					util.showToast("提交成功")
	
				} else {
					util.showToast(res.data.msg)
				}
			});
		},
		putData(e) {
			let key = e.currentTarget.dataset.key
			this.setData({
				[key]: e.detail.value
			})
		},
	selectTab: function (e) {
		this.setData({
			tabId:e.detail.TabCur
		})
		if (e.detail.TabCur == 0) {
			this.setData({
				userType:'企业'
			})
		}else{
			this.setData({
				userType:'个人'
			})
		}

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