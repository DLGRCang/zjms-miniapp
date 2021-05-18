// pages/life/pages/job/job.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
const login = require('../../../../utils/login.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
   tit:'',
    infotypeid: 'd01b2805-c983-49d3-a57d-d51be819c631',
    infotypeid1: '68077b19-aefe-4471-a2b6-88931342b993',
    page:1,
    dataList: [], //全职招聘
    dataList1: [], //兼职招聘
  },
	jobAppointment() {
		util.pageJump('/pages/life/pages/jobAppointment/jobAppointment')
  },
  toPersonInfo:function(){
    	  //判断是否登录
			if (!login.isLogin()) return
    util.pageJump('/pages/life/pages/jobPerson/jobPerson')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getDataList: function () {
		//加载数据列表
		data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
			this.setData({
        dataList: this.data.dataList.concat(dataList),
      })
			console.log(this.data.dataList);
    })
    data.getArtelData(this.data.infotypeid1, this.data.page).then(dataList => {
			this.setData({
        dataList1: this.data.dataList1.concat(dataList),
      })
			console.log(this.data.dataList1);
		})
	},
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