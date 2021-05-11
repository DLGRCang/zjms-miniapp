// pages/help/pages/dishonest/dishonest.js
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
		infotypeid: '80bcd380-3aa9-4a35-bc38-4e242193ab81',
		infotypeid1: '5c1f3a14-3902-4858-a3b0-591970bd557e',//小伊说法

    page: 1,
    dataList: [],
    dataList1: [],
    dishonestList:null,
		 
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	getDataList: function () {
    //加载新闻列表
    data.getArtelData(this.data.infotypeid, this.data.page,3).then(dataList => {
      this.setData({
        dataList: this.data.dataList.concat(dataList)
      })
      console.log(this.data.dataList);
    })
    //小伊说法
    data.getArtelData(this.data.infotypeid1, this.data.page,3).then(dataList => {
      this.setData({
        dataList1: this.data.dataList1.concat(dataList)
      })
      console.log(this.data.dataList1);
    })
	},
	getInfo() {
    let that = this;
    util.requestApi('dishonestpeople/listpagedishonestpeople', 'GET', {}).then(res => {
      console.log(res.data.rows)
      that.setData({
				dishonestList: res.data.rows
      })
    })
	},
	goSearch(){
			  //判断是否登录
				if (!login.isLogin()) return
		util.pageJump("/pages/help/pages/dishonestSearch/dishonestSearch")
	},
  onLoad: function (options) {
		this.getDataList();
		this.getInfo();
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