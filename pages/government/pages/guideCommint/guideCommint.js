// pages/government/pages/guideCommint/guideCommint.js
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		fileState:'点击添加',
		applicationId: '', //事项id
		applicantionName : '', //申请人姓名
		applicantionPhone : '', //申请人联系方式
		applicantionFile : '', //申请人材料（,隔开的字符串）
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
	},
	addFile(){
		let that=this
		wx.chooseMessageFile(
			{
				count:1,
				type:'file',
				success(res){
					const tempFilePash=res.tempFiles[0].path
					util.uploadFile1(tempFilePash, 'file').then(res => {
						console.log(res)
						if (res.statusCode == 200) {
							let obj = JSON.parse(res.data)
			
							that.setData({
								fileState: '上传成功',
								applicantionFile: obj.data,

							})
						} else {
							that.setData({
								fileState: '上传失败',
							})
						}
					});
				}
			}
		)
	},
	commitData() {
		let data = {
			userId: wx.getStorageSync("userId"),
			applicationId:this.data.applicationId,
			applicantionName:this.data.applicantionName,
			applicantionPhone:this.data.applicantionPhone,
			applicantionFile:this.data.applicantionFile,
		}
		console.log(data)
		util.requestApi('applicationprequalified/saveapplicationprequalified', 'POST', data).then(res => {
			console.log(res)
			util.returnCode(res.statusCode,200,2)
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			applicationId: options.applicationId
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