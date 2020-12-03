// pages/charm/pages/villageProduct/villageProduct.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		baseImgUrl: app.globalData.baseImgUrl,
		tabId: 0,
		tabName: ['访客', '合作社'],
		lableName: ['大型', '便民'],
		infotypeid: 'bb4d4622-8a26-4c48-a50d-7f1c9743813c',
		page: 1,
		artelList: [], //合作社列表
		villageGoods:[],
	},
	selectTab: function (e) {
		this.setData({
			tabId: e.detail.TabCur
		})
		if (this.data.tabId == 0) {
			this.getVillageGoods();
		} else if (this.data.tabId == 1) {
			this.getDataList();
		}
		console.log("点击了第几个Tab:" + e.detail.TabCur)
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getVillageGoods();
	},
	//加载村有好货列表
	getVillageGoods: function () {
		util.requestApi('products/listpageproducts', 'GET', data).then(res => {
		this.setData({
			villageGoods:res.data.rows,

		})
		console.log(this.data.villageGoods);
		});
	},
	//加载一村一品合作社列表
	getDataList: function () {
		data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
			this.setData({
				artelList: this.data.artelList.concat(dataList)
			})
			console.log(this.data.artelList);
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
		this.setData({
			page: 1
		})
		this.getDataList();
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		this.setData({
			page: this.data.page++
		})
		this.getDataList();
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})