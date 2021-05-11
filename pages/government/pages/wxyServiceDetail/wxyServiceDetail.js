// pages/government/pages/wxyServiceDetail/wxyServiceDetail.js
const util = require('../../../../utils/util.js')
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		baseImgUrl: app.globalData.baseImgUrl,
		id:'',
		title:'',//标题
		content:'',//内容	
		num:'',//报名人数
		picture_url:'',//图片
		time:'',//时间
	},
	getDataList: function () {
		let that = this;
		util.requestApi('weixinyuanservice/getvolunteersservice/'+this.data.id, 'GET', {}).then(res => {
			that.setData({
				title: res.data.title,
				content: res.data.content,
				picture_url: res.data.picture_url,
				time: res.data.time,
			})
			console.log(res)
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			id:options.id
		})
		this.getDataList()
		

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