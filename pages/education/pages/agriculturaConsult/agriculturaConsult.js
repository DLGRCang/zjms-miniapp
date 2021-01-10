// pages/education/pages/agriculturaConsult/agriculturaConsult.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
		baseImageUrl:app.globalData.baseImgUrl,
		specialist:[],//专家列表
		speciaId:'',//选中的专家id
		title:'',//咨询标题
		content:'',//咨询内容
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
	},
	radioChange(e) {
		this.setData({
			speciaId: e.detail.value
		})
		console.log(this.data.speciaId)
	},
	//获取专家列表
	getSpecialist() {
		util.requestData('specialist/listspecialist', 'GET', {}).then(res => {
			console.log(res)
			this.setData({
				specialist: res.data
			})
		});
	},
	commitData(){
		let data={
			advisoryContent:this.data.content,
			advisoryTitle:this.data.title,
			specialistId:this.data.speciaId,
			userId:wx.getStorageSync("userId"),
		}
		console.log(data)
		util.requestData('consult/saveconsult', 'POST',data).then(res => {
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
		this.getSpecialist()
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