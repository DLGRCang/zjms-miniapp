// pages/food/pages/specialFood/specialFood.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: "https://www.yjhlcity.com/shop/route/file/downloadfile/false/",
    baseImgUrl: "https://www.yjhlcity.com/cmmall/route/file/downloadfile/false/",
    xcFoodList:null,
    specialFoodList: null,
    tit:'',
    page: 1,
    rows: 10,
    more: '加载更多',
  },
// 小吃
  xcFoodList() {
    let baseUrl = 'https://www.yjhlcity.com/cmmall/app/release/api/'
    let url =  baseUrl+'shoplist/listpageshoplist?type=' + '2ff71ae1-1d51-4caf-baa3-eeefbe8a40d4';
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.rows)
      this.setData({
        xcFoodList: res.data.rows
      })
    });
  },
  // 特色菜
  specialFoodList() {
    let baseUrl = 'https://www.yjhlcity.com/cmmall/app/release/api/'
    let url =  baseUrl+'shoplist/listpageshoplist?type=' + 'eb4897f1-b288-4ae0-87a3-637db3ecdf42';
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.rows)
      this.setData({
        specialFoodList: res.data.rows
      })
    });
  },
  goDetail(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/food/pages/foodDetail/foodDetail?id='+e.currentTarget.dataset.id+'&lat='+e.currentTarget.dataset.lat+'&lng='+e.currentTarget.dataset.lng+'&name='+e.currentTarget.dataset.name+'&location='+e.currentTarget.dataset.location,
    })
  },

  	// 更多
	getMore() {
		// let that = this
		// this.data.page++
		// let data = {
		// 	infotypeid: '3909c4c7-0d2e-4148-9562-a1c204ca8e58',
		// 	page: this.data.page,
		// 	rows: this.data.rows,
		// }
		// util.requestApi('infocontent/listUserpageinfocontent', 'GET', data).then(res => {
		// 	console.log(res.data.rows.length)
		// 	that.setData({
		// 		dataList1: that.data.dataList1.concat(res.data.rows)
		// 	})
		// 	if (res.data.rows.length < 10) {
		// 		that.setData({
		// 			more: '数据到头了'
		// 		})
		// 	}
		// });
	},

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.specialFoodList()
    this.xcFoodList()
    this.setData({
      tit:options.tit
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