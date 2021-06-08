// pages/charm/pages/villageProduct/villageProduct.js
const app = getApp()
const util = require('../../../../utils/util.js')
const dataUtil = require('../../../../utils/data.js')

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tit: '',
		imgUrl: app.globalData.imgUrl,
		baseImgUrl: app.globalData.baseImgUrl,
		tabId: 0,
		tabName: ['访客', '合作社'],
		lableName: ['大型', '便民'],
		infotypeid: 'bb4d4622-8a26-4c48-a50d-7f1c9743813c', //合作社
		infotypeid1: 'c020b82c-4488-481f-a10a-58747c3e8fc7', //村情乡貌
		infotypeid2: '0d12fb62-f311-43a5-a9a0-11c17fc353d8', //村有好货
		page: 1,
		rows: 10,
		artelList: [], //合作社列表
		artelList1: [], //村情乡貌列表
		villageGoods: [],//村有好货
		more: '加载更多'
	},
	selectTab: function (e) {
		let page = this.data.page
		this.setData({
			tabId: e.detail.TabCur
		})
		if (this.data.tabId == 0) {
			page = 1
			this.setData({
				page: page
			})
			this.getVillageGoods();
		} else if (this.data.tabId == 1) {
			page = 1
			this.setData({
				page: page
			})
			this.getDataList();
		}
	},
	//村情乡貌详情
	goDetail(e) {
		console.log(e.currentTarget.dataset.id)
		wx.navigateTo({
			url: "/pages/appointment/pages/carInfo/carInfo?infoContentId=" + e.currentTarget.dataset.id,
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			tit: options.tit
		})
		this.getVillageGoods();//村有好货
		this.getVillageDataList();//一村一品
		this.getDataList()//合作社
	},
	//加载村有好货
	getVillageGoods: function () {
		this.setData({
			villageGoods: []
		})
		dataUtil.getArtelData(this.data.infotypeid2, this.data.page, 50).then(dataList => {
			this.setData({
				villageGoods: this.data.villageGoods.concat(dataList)
			})
			console.log(this.data.villageGoods);
		})
	},
	//加载一村一品合作社列表
	getDataList: function () {
		this.setData({
			artelList: []
		})
		dataUtil.getArtelData(this.data.infotypeid, this.data.page, this.data.rows).then(dataList => {
			console.log(11111111111111)
			console.log(dataList)
			console.log(11111111111111)
			this.setData({
				artelList: dataList
			})
			console.log(this.data.artelList);

		})
	},
	//加载村情乡貌社列表
	getVillageDataList: function () {
		dataUtil.getArtelData(this.data.infotypeid1, this.data.page, this.data.rows).then(dataList => {
			this.setData({
				artelList1: this.data.artelList1.concat(dataList)
			})
			console.log(this.data.artelList1);
		})
	},

	// 合作社更多
	getHZSMore() {
		let that = this
		this.data.page++
		let data = {
			infotypeid: 'bb4d4622-8a26-4c48-a50d-7f1c9743813c',
			page: this.data.page,
			rows: this.data.rows,
		}
		util.requestApi('infocontent/listUserpageinfocontent', 'GET', data).then(res => {
			console.log(res.data.rows.length)
			that.setData({
				artelList: that.data.artelList.concat(res.data.rows)
			})
			if (res.data.rows.length < 10) {
				that.setData({
					more:'数据到头了'
				})
			}
		});
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