// pages/publish/pages/applyGoodboyr/applyGoodboyr.js
const app=getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		goodBoyTypeList:['爱国爱党','敬老爱亲','助人为乐','热心公益','勤学感恩','创新创造','自强自立','热爱劳动','保护环境','弘扬中华优秀文化'],
		nationList: app.globalData.nationList, //民族
		fileState: '待上传', //文件名称
		age: '', //年龄
		goodBoyType: '', //类型
		mainStory: '', //主要事迹
		nation: '', //民族
		schoolName: '', //学校名称
		sex: '', //性别
		studentName: '', //姓名
		studentsPhotos: '', //照片
		attachment: '', //附件
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
	//获取类型
	getType(e) {
		this.setData({
			goodBoyType: this.data.goodBoyTypeList[e.detail.value]
		})
	},
	//提交数据
	commitData() {
		let data = {
			userId:wx.getStorageSync("userId"),
			attachment:this.data.attachment,
			age:this.data.age,
			goodBoyType:this.data.goodBoyType,
			mainStory:this.data.mainStory,
			nation:this.data.nation,
			schoolName:this.data.schoolName,
			sex:this.data.sex,
			studentName:this.data.studentName,
			studentsPhotos:this.data.studentsPhotos,

		}
		console.log(data)
		util.requestApi('goodboy/savegoodboy', 'POST', data).then(res => {
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
	//选择文件并上传
	uploadFile: function () {
		let that = this
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success(res) {
				const tempFilePaths = res.tempFilePaths
				util.uploadFile(tempFilePaths[0], 'image').then(res => {
					console.log(res)
					if (res.statusCode == 200) {
						let obj = JSON.parse(res.data)
		
						that.setData({
							fileState: '上传成功',
							studentsPhotos: obj.data
						})
					} else {
						that.setData({
							fileState: '上传失败',
						})
					}
				});
			},
		})
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