// pages/charm/pages/publishTask/publishTask.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TabCur: 0,
    scrollLeft:0,
    status:['已发布','已反馈','已超时'],
    tabState0:[
      {
        title:"准备发布会",
        cont:"布置会场，布置会场布置会场布置会场布置会场布置会场布置会场",
        state:0,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
      {
        title:"准备发布会",
        cont:"布置会场，布置会场布置会场布置会场布置会场布置会场布置会场",
        state:0,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
      {
        title:"准备发布会",
        cont:"布置会场，布置会场布置会场布置会场布置会场布置会场布置会场",
        state:0,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
      {
        title:"准备发布会",
        cont:"布置会场，布置会场布置会场布置会场布置会场布置会场布置会场",
        state:0,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
      {
        title:"准备发布会",
        cont:"布置会场，布置会场布置会场布置会场布置会场布置会场布置会场",
        state:0,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
      {
        title:"准备发布会",
        cont:"布置会场，布置会场布置会场布置会场布置会场布置会场布置会场",
        state:0,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
      {
        title:"准备发布会",
        cont:"布置会场，布置会场布置会场布置会场布置会场布置会场布置会场",
        state:0,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
      {
        title:"准备发布会",
        cont:"布置会场，布置会场布置会场布置会场布置会场布置会场布置会场",
        state:0,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
    ],
    tabState1:[
      {
        title:"准备发布会",
        cont:"布置会场，布置会场布置会场布置会场布置会场布置会场布置会场",
        state:1,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
    ],
    tabState2:[
      {
        title:"准备发布会",
        cont:"布置会场，布置会场布置会场布置会场布置会场布置会场布置会场",
        state:2,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
    ]
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id-1)*60
    })
  },
  taskInfo(e){

    wx.navigateTo({
			url: '../taskInfo/taskInfo?item='+JSON.stringify(e.currentTarget.dataset.item)
		})
    //util.pageJump("../taskInfo/taskInfo")
  },

  publishTaskForm(){
    util.pageJump("../publishTaskForm/publishTaskForm")
  },
  goVideo(e){
		wx.navigateTo({
			url: '/pages/government/pages/eachFlagTownXY/eachFlagTownXY?num='+9083648674,
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