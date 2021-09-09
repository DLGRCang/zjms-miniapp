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
    status:['进行中','已超时','已完成'],
    tabState0:[
      {
        title:"应急问题",
        cont:"森林防火人人有责",
        state:1,
        people:"张三",
        department:"环卫局",
        image:"https://www.yjhlcity.com/InfoIssue/miniapp/zjms/swiper2.png",
        main:0,
        startData:"2021/9/7",
        endData:"2021/9/16",
        data:5,
        fknum:[]
      },
      {
        title:"社会治安综合治理",
        cont:"解决社会治安问题，实现从根本上预防和打击违法犯罪，维护治安秩序，保障社会稳定的社会系统工程",
        state:1,
        people:"张三",
        department:"公安局",
        image:"https://www.yjhlcity.com/InfoIssue/miniapp/zjms/swiper2.png",
        main:0,
        startData:"2021/9/7",
        endData:"2021/9/11",
        data:3,
        fknum:[
          {
            fkdept:"公安局",
            zxNmae:"李四",
            teskEnd:"2021/9/9",
            teskPersent:90,
            img:"https://www.yjhlcity.com/InfoIssue/miniapp/zjms/swiper2.png"
          }
        ]
      },
      {
        title:"服务城市",
        cont:"城市日益表现为经济功能的专注性、城市规划的功利性以及文化形态的单一性。那么，城市是否真的是先进、文明的，显然又是聚讼纷纭的。",
        state:1,
        people:"张三",
        department:"环卫局",
        image:"https://www.yjhlcity.com/InfoIssue/miniapp/zjms/swiper2.png",
        main:0,
        startData:"2021/9/6",
        endData:"2021/9/9",
        data:1,
        fknum:[
          {
            fkdept:"环卫局",
            zxNmae:"王五",
            teskEnd:"2021/9/7",
            teskPersent:30,
            img:"https://www.yjhlcity.com/InfoIssue/miniapp/zjms/swiper2.png"
          },
          {
            fkdept:"环卫局",
            zxNmae:"王五",
            teskEnd:"2021/9/8",
            teskPersent:50,
            img:"https://www.yjhlcity.com/InfoIssue/miniapp/zjms/swiper2.png"
          }
        ]
      },
    ],
    tabState1:[
      {
        title:"社会治安综合治理",
        cont:"解决社会治安问题，实现从根本上预防和打击违法犯罪，维护治安秩序，保障社会稳定的社会系统工程",
        state:2,
        people:"张三",
        department:"公安局",
        image:"https://www.yjhlcity.com/InfoIssue/miniapp/zjms/swiper2.png",
        main:0,
        startData:"2021/9/6",
        endData:"2021/9/7",
        data:1
      },
    ],
    tabState2:[
      {
        title:"服务城市",
        cont:"城市日益表现为经济功能的专注性、城市规划的功利性以及文化形态的单一性。那么，城市是否真的是先进、文明的，显然又是聚讼纷纭的。",
        state:3,
        people:"张三",
        department:"环卫局",
        image:"https://www.yjhlcity.com/InfoIssue/miniapp/zjms/swiper2.png",
        main:0,
        startData:"2021/9/6",
        endData:"2021/9/8",
        data:"2021/9/7",
        fknum:[
          {
            fkdept:"环卫局",
            zxNmae:"李四",
            teskEnd:"2021/9/9",
            teskPersent:100,
            img:"https://www.yjhlcity.com/InfoIssue/miniapp/zjms/swiper2.png"
          }
        ]
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