// pages/charm/pages/getTask/getTask.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft:0,
    status:['待反馈','已反馈','已完成'],
    tabState0:[,
      {
        title:"应急问题",
        cont:"森林防火人人有责",
        mainstate:0,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:1,
        data:"2021/9/8"
      },

   
    ],
    tabState1:[
      {
        title:"应急问题",
        cont:"森林防火人人有责",
        mainstate:1,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:1,
        data:"2021/9/8"
      },
    ],
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  goInfo(e){
    wx.navigateTo({
			url: '../taskInfo/taskInfo?item='+JSON.stringify(e.currentTarget.dataset.item)
		})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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