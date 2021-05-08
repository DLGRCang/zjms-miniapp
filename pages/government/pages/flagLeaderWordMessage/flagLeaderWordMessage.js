// pages/government/pages/flagLeaderWordMessage/flagLeaderWordMessage.js
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		content:'',
		titleName:'',
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
	},
	commitData(){
		let data={
			typeId:'b5c4e599-400d-4db9-9e11-e72eb9931822',
			userId:wx.getStorageSync("userId"),
			// userName:wx.getStorageSync("name"),
			userName:'姓名',
			typeName:'旗长热线留言',
			content:this.data.content,
			titleName:this.data.titleName,
			status:'未审核',
		}
		console.log(data)
		util.requestApi('commentsonthemanagement/savecommentsonthemanagement', 'POST',data).then(res => {
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