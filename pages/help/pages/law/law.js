// pages/help/pages/law/law.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
const login = require('../../../../utils/login.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		infotypeid: 'e0fbe4d8-727c-41db-9edc-fd3f2625bc9a',
		infotypeid1: '3909c4c7-0d2e-4148-9562-a1c204ca8e58',
		page: 1,
		pages: 1,
		rows: 5,
		dataList: [], //新闻列表
		dataList1: [], //新闻列表
		commentList:[],
		tit: '',
		more: '加载更多',
		mores: '加载更多',
	},

	// 加载评论
	getinfo(){
		let url = 'commentsonthemanagement/listcommentsonthemanagement?typeId=67b36a83-c7d0-4d89-a671-74863991de78'
		util.requestApi(url,'GET', {}).then(res => {
			console.log(res.data)
			this.setData({
				commentList:res.data
			})
		})
	},
	submit() {
		if (!login.isLogin()) return
		wx.navigateTo({
			url: '../lawSubmit/lawSubmit',
		})
	},
	//加载数据列表
	getDataList: function () {
		data.getArtelData(this.data.infotypeid, this.data.page, this.data.rows).then(dataList => {
			this.setData({
				dataList: this.data.dataList.concat(dataList),
			})
			// console.log(this.data.dataList);
		})

		data.getArtelData(this.data.infotypeid1, this.data.page, this.data.rows).then(dataList => {
			this.setData({
				dataList1: this.data.dataList1.concat(dataList),
			})
		})
	},
	// 更多事务所
	getSWSMore() {
		let that = this
		this.data.page++
		let data = {
			infotypeid: '3909c4c7-0d2e-4148-9562-a1c204ca8e58',
			page: this.data.page,
			rows: this.data.rows,
		}
		util.requestApi('infocontent/listUserpageinfocontent', 'GET', data).then(res => {
			that.setData({
				dataList1: that.data.dataList1.concat(res.data.rows)
			})
			if (res.data.rows.length < 10) {
				that.setData({
					more: '数据到头了'
				})
			}
		});
	},
	// 更多律师
	getLSMore() {
		let that = this
		this.data.pages++
		let data = {
			infotypeid: 'e0fbe4d8-727c-41db-9edc-fd3f2625bc9a',
			page: this.data.pages,
			rows: this.data.rows,
		}
		util.requestApi('infocontent/listUserpageinfocontent', 'GET', data).then(res => {
			that.setData({
				dataList: that.data.dataList.concat(res.data.rows)
			})
			if (res.data.rows.length < 10) {
				that.setData({
					mores: '数据到头了'
				})
			}
		});
	},




	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			tit: options.tit
		})
		this.getDataList()
		this.getinfo()
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
