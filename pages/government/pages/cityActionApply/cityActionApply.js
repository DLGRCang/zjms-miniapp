// pages/government/pages/cityActionApply/cityActionApply.js
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		fileState: '点击添加',
		id: '', //id
		name: '', //姓名
		idcard: '', //身份证号
		material: '', //文件
	},
	addFile() {
		let that = this
		wx.chooseMessageFile({
			count: 1,
			type: 'file',
			success(res) {
				const tempFilePash = res.tempFiles[0].path
				util.uploadFile1(tempFilePash, 'file').then(res => {
					console.log(res)
					if (res.statusCode == 200) {
						let obj = JSON.parse(res.data)

						that.setData({
							fileState: '上传成功',
							material: obj.data,

						})
					} else {
						that.setData({
							fileState: '上传失败',
						})
					}
				});
			}
		})
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
	},
	commitData() {
		let data = {
			userId: wx.getStorageSync("userId"), //用户id
			token: wx.getStorageSync("token"), //token
			gen_city_active_id: this.data.id,
			name: this.data.name,
			idcard: this.data.idcard,
			material: this.data.material,
		}
		console.log(data)
		util.requestApi('applyonline/saveapplyonline?gen_city_active_id='+this.data.id, 'POST', data).then(res => {
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
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
				id: options.id
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