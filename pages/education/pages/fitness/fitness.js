// pages/education/pages/fitness/fitness.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    tit:'',
    baseImgUrl:app.globalData.baseImgUrl,
		imgUrl:app.globalData.imgUrl,
    infotypeid: '529180a7-4c03-4caa-81b5-e6d07f95beb5',
    page:1,
    dataList: [], //新闻列表
    dataList1: [], //赛事列表
    dataList2: [], //演出列表
    infotypeid1:'6bed2759-8b6a-4240-9c51-f79369b4c138',//赛事
    infotypeid2:'9782bccc-e789-4874-84c0-b03584a9e7d7'//演出
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getDataList: function () {
		//加载体育场馆数据列表
		data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
			this.setData({
        dataList: this.data.dataList.concat(dataList),
      })
			console.log(this.data.dataList);
    })
    	//加载赛事数据列表
		data.getArtelData(this.data.infotypeid1, this.data.page).then(dataList => {
			this.setData({
        dataList1: this.data.dataList1.concat(dataList),
      })
			console.log(this.data.dataList1);
    })
    	//加载演出数据列表
		data.getArtelData(this.data.infotypeid2, this.data.page).then(dataList => {
			this.setData({
        dataList2: this.data.dataList2.concat(dataList),
      })
			console.log(this.data.dataList2);
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