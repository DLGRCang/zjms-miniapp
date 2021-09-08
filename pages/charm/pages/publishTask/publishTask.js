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
        title:"应急问题",
        cont:"森林防火人人有责",
        state:0,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
   
      
    ],
    tabState1:[
      {
        title:"社会治安综合治理",
        cont:"解决社会治安问题，实现从根本上预防和打击违法犯罪，维护治安秩序，保障社会稳定的社会系统工程",
        state:1,
        people:"张三",
        department:"公安局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
    ],
    tabState2:[
      {
        title:"服务城市",
        cont:"城市日益表现为经济功能的专注性、城市规划的功利性以及文化形态的单一性。那么，城市是否真的是先进、文明的，显然又是聚讼纷纭的。",
        state:2,
        people:"张三",
        department:"环卫局",
        image:"https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg",
        main:0
      },
    ]
  },
  cbButton(){
    wx.showToast({
      title: '催办成功',
      icon:'none'
    })
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