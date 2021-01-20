// pages/medical/pages/nucleicAcidCheck/nucleicAcidCheck.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
import QRCode from '../../../../utils/weapp-qrcode.js'
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		infotypeid: '	9f3779e2-2263-4900-b4cb-dc0b8539d7ed',
		page: 1,
		dataList: [], //新闻列表
	},
	//核酸表单
	nucleicForm() {
		util.pageJump('/pages/appointment/pages/nucleicForm/nucleicForm')
	},
	//生成二维码
	erCode() {
		new QRCode('myQrcode', {
			text: '哈哈哈哈哈',
			width: 200,
			height: 200,
			padding: 12, // 生成二维码四周自动留边宽度，不传入默认为0
			correctLevel: QRCode.CorrectLevel.L, // 二维码可辨识度
			callback: (res) => {
				console.log(res.path)
				// 接下来就可以直接调用微信小程序的api保存到本地或者将这张二维码直接画在海报上面去，看各自需求
			}
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	getDataList: function () {
		//加载数据列表
		data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
			this.setData({
				dataList: this.data.dataList.concat(dataList),
			})
			console.log(this.data.dataList);
		})
	},
	onLoad: function (options) {
		this.getDataList()
		this.erCode()
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