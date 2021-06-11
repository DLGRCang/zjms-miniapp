// pages/food/pages/specialFood/specialFood.js
const app = getApp()
const util = require('../../../../utils/util.js')
const mall = require('../../../../utils/mall.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    baseImgUrl: "https://www.yjhlcity.com/cmmall/route/file/downloadfile/false/",
    xcFoodList: null,
    specialFoodList: null,
    tit: '',
    page: 1,
    rows: 10,
    more: '加载更多',
    // ////////////////////////////////////////////

  },
  ///////////////////////////////////////////
  //小吃
  xcFoodList() {
    let datas = {
      pageNum: 1,
      pageSize: 20,
      JYLX: '22b6fbf342ce487b8cd28c4959bb38d2'
    }
    mall.login('appStoreController/getStoreListPage',datas).then(res => {
      console.log(res)
      this.setData({
        xcFoodList:res.rows
      })
    })
  },
  // 绝味
  specialFoodList() {
    let datas = {
      pageNum: 1,
      pageSize: 20,
      JYLX: 'f785f6829d6e4a998b796e26ea2e50ce'
    }
    mall.login('appStoreController/getStoreListPage',datas).then(res => {
      console.log(res)
      this.setData({
        specialFoodList:res.rows
      })
    })
  },
  // 更多
  goMore(){
    let pageNum = 1
    pageNum++
    let datas = {
      pageNum: pageNum,
      pageSize: 20,
      JYLX: '22b6fbf342ce487b8cd28c4959bb38d2'
    }
    mall.login('appStoreController/getStoreListPage',datas).then(res => {
      console.log(res)
      this.setData({
        xcFoodList:this.data.xcFoodList.concat(res.rows)
      })
    })
  },
  // 详情
  goDetail(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/food/pages/foodDetail/foodDetail?id='+e.currentTarget.dataset.id+'&name='+e.currentTarget.dataset.name
    })
  },



  ///////////////////////////////////////////
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.specialFoodList()
    this.xcFoodList()
    this.setData({
      tit: options.tit
    })
  },

  // 小吃
  // xcFoodList() {
  // let baseUrl = 'https://www.yjhlcity.com/cmmall/app/release/api/'
  // let url =  baseUrl+'shoplist/listpageshoplist?type=' + '2ff71ae1-1d51-4caf-baa3-eeefbe8a40d4';
  // util.httpRequest(url, 'GET', {}).then(res => {
  //   console.log(res.data.rows)
  //   this.setData({
  //     xcFoodList: res.data.rows
  //   })
  // });
  // },
  // 特色菜
  // specialFoodList() {
  // let baseUrl = 'https://www.yjhlcity.com/cmmall/app/release/api/'
  // let url =  baseUrl+'shoplist/listpageshoplist?type=' + 'eb4897f1-b288-4ae0-87a3-637db3ecdf42';
  // util.httpRequest(url, 'GET', {}).then(res => {
  //   console.log(res.data.rows)
  //   this.setData({
  //     specialFoodList: res.data.rows
  //   })
  // });
  // },

  // 详情
  // goDetail(e){
  //   console.log(e.currentTarget.dataset.id)
  //   wx.navigateTo({
  //     url: '/pages/food/pages/foodDetail/foodDetail?id='+e.currentTarget.dataset.id+'&lat='+e.currentTarget.dataset.lat+'&lng='+e.currentTarget.dataset.lng+'&name='+e.currentTarget.dataset.name+'&location='+e.currentTarget.dataset.location,
  //   })
  // },

  // 更多
  // getMore() {
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
  // },

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
    let pageNum = 1
    pageNum++
    let datas = {
      pageNum: pageNum,
      pageSize: 20,
      JYLX: 'f785f6829d6e4a998b796e26ea2e50ce'
    }
    mall.login('appStoreController/getStoreListPage',datas).then(res => {
      console.log(res)
      this.setData({
        specialFoodList:this.data.specialFoodList.concat(res.rows)
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})