// pages/life/pages/financeProducts/financeProducts.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		baseImgUrl: app.globalData.baseImgUrl,
		financeProducts:[],//金融产品列表
		
	},
	 //产品申请
	 requestProducts(e){
    util.pageJump('/pages/life/pages/financeProductsForm/financeProductsForm?productId='+e.currentTarget.dataset.id+"&productName="+e.currentTarget.dataset.name)
  },
	getDataList: function (institutions_id) {
		let data={
			institutions_id:institutions_id,
		}
    //加载产品机构列表
    util.requestApi('financialadmin/listpagefinancialadmin','GET', data).then(res => {
      this.setData({
        financeProducts: res.data.rows
      })
      console.log(this.data.financeProducts);
    })
  },
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options)
		this.getDataList(options.institutions_id)
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