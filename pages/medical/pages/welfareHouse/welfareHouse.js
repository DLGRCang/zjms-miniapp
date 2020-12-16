// pages/medical/pages/welfareHouse/welfareHouse.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
		page:1,
		infotypeid: '3b4f1a0a-99a1-4f46-bba9-6a7343dcba2a',
		dataList: [], //福利院列表
		infotypeid1: '815d2353-bb1a-4b1e-bf3e-0dccc13d1641',
		dataList1: null, //养老院列表
		infotypeid2: 'de8f6d41-3e0c-4b18-a7ea-e14207022c97',
		dataList2: [], //敬老院列表
	},
	goInfo:function(e){
		wx.navigateTo({
			url: "/pages/componentPage/pages/oldHome/oldHome?infoContentId="+ e.currentTarget.dataset.id,
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	getDataList: function () {
		//加载数据列表
		data.getArtelData(this.data.infotypeid, this.data.page,2).then(dataList => {
			this.setData({
        dataList: this.data.dataList.concat(dataList),
      })
			console.log(this.data.dataList);
		})
		data.getArtelData(this.data.infotypeid1, this.data.page,1).then(dataList => {
			this.setData({
        dataList1: dataList[0],
      })
			console.log(this.data.dataList1);
		})
		data.getArtelData(this.data.infotypeid2, this.data.page,2).then(dataList => {
			this.setData({
        dataList2: this.data.dataList2.concat(dataList),
      })
			console.log(this.data.dataList2);
		})
	},
	onLoad: function (options) {
		this.getDataList()
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
