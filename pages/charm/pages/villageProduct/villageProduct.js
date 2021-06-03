// pages/charm/pages/villageProduct/villageProduct.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')

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
		console.log("点击了第几个Tab:" + e.detail.TabCur)
	},
	//村情乡貌详情
	goDetail(e) {
		wx.navigateTo({
			url: "/pages/publish/pages/newsDetail/newsDetail?info_content=" + e.currentTarget.dataset.obj.info_content + "&info_source=" + e.currentTarget.dataset.obj.info_source + "&publishdate=" + e.currentTarget.dataset.obj.publishdate + "&info_videos=" + encodeURIComponent(e.currentTarget.dataset.obj.info_videos) + "&info_detail=" + encodeURIComponent(e.currentTarget.dataset.obj.info_detail),
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
		data.getArtelData(this.data.infotypeid2, this.data.page, 50).then(dataList => {
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
		data.getArtelData(this.data.infotypeid, this.data.page, this.data.rows).then(dataList => {
			this.setData({
				artelList: this.data.artelList.concat(dataList)
			})
			console.log(this.data.artelList);
			if (dataList.length == 0) {
				wx.showToast({
					title: '数据到头了',
					icon: 'none'
				})
			}

		})
	},
	//加载村情乡貌社列表
	getVillageDataList: function () {
		data.getArtelData(this.data.infotypeid1, this.data.page, this.data.rows).then(dataList => {
			this.setData({
				artelList1: this.data.artelList1.concat(dataList)
			})
			console.log(this.data.artelList1);
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
		// let page = this.data.page
		// page = 1
		// this.setData({
		// 	page: page,
		// 	artelList: []
		// })
		// wx.showToast({
		// 	title: '加载中',
		// 	icon: 'loading'
		// })
	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {
		var that = this
		this.setData({
			page: this.data.page + 1,
			artelList: []
		})
		wx.showToast({
			title: '加载中',
			icon: 'loading',
			success(res) {
				setTimeout(() => {
					that.getDataList();
				}, 1000)
			}
		})
		
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})