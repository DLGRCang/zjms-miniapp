// pages/education/pages/bookShop/bookShop.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
    bookList:null,
  },
 bookList() {
  let baseUrl = 'https://yiqi.sucstep.com/'
  let url = baseUrl+'shop/app/release/api/shopmanagement/listpageshopmanagement?shopTypeSmall=' + '图书音响';
  util.httpRequest(url, 'GET', {}).then(res => {
    console.log(res.data.rows)
    this.setData({
      bookList: res.data.rows
    })
  });
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.bookList()
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