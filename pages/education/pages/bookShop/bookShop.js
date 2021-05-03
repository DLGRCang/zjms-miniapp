// pages/education/pages/bookShop/bookShop.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    imgUrl: "https://yiqi.sucstep.com/shop/route/file/downloadfile/false/",
    baseImgUrl: "https://yiqi.sucstep.com/shop/route/file/downloadfile/false/",
    bookList:null,
  },
 bookList() {
  let baseUrl = 'http://172.16.20.156:8005/cmmall/app/release/api/'
  let url =  baseUrl+'shoplist/listpageshoplist?type=' + '59c3f659-53ee-46e8-9b90-13652a2e8514';
  util.httpRequest(url, 'GET', {}).then(res => {
    console.log(res.data.rows)
    this.setData({
      foodList: res.data.rows
    })
  });
},
goDetail(e){
  console.log(e.currentTarget.dataset.id)
  util.pageJumpTo('/pages/food/pages/foodDetail/foodDetail', 'id', e.currentTarget.dataset.id)
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