// pages/help/pages/disabled/disabled.js
const app = getApp()
const util = require('../../../../utils/util.js')
const login = require('../../../../utils/login.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    tit:'',
		imgUrl:app.globalData.imgUrl,
    tabName: ['政策宣传', '托养中心'],
    tabId: 0,
    infotypeid:'3b80532b-80fa-4d3f-909d-895b16dc70fc',
    page: 1,
    dataList: [], //
  },
  selectTab: function (e) {
    this.setData({
      dataList: [],
      tabId: e.detail.TabCur
    })
    if (this.data.tabId == 0) {
      this.setData({
        infotypeid: '3b80532b-80fa-4d3f-909d-895b16dc70fc',
      })
    } else if (this.data.tabId == 1) {
      this.setData({
        infotypeid: '33d552ca-7838-4f1f-a97f-ab7fc519f0a4',
      })
    }
    this.getDataList()
  },
  getDataList: function () {
    //加载数据列表
    data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
      this.setData({
        dataList: this.data.dataList.concat(dataList),
      })
      console.log(this.data.dataList);
    })

  },
  //申请残疾证
  applyDisabilityCertificate(){
    	  //判断是否登录
			if (!login.isLogin()) return
    util.pageJump('/pages/help/pages/applyDisabilityCertificate/applyDisabilityCertificate')
  },
 //申请残疾补助
 applyDisabilitySubsidy(){
   	  //判断是否登录
       if (!login.isLogin()) return
  util.pageJump('/pages/help/pages/applyDisabilitySubsidy/applyDisabilitySubsidy')
},
 //申请残疾补助
 applySisabledChildrenHelp(){
   	  //判断是否登录
       if (!login.isLogin()) return
  util.pageJump('/pages/help/pages/applySisabledChildrenHelp/applySisabledChildrenHelp')
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tit:options.tit
    })
    this.getDataList()
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