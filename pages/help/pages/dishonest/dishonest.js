// pages/help/pages/dishonest/dishonest.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
		infotypeid: '	80bcd380-3aa9-4a35-bc38-4e242193ab81',
    page: 1,
    dataList: [],
    dishonestList:[
				{
				 name:"张三阿",
				 num:"152629166525666666"
				},
				{
					name: "王欧五",
					num: "152629166525666666"
				},
				{
					name: "赵柳",
					num: "152629166525666666"
				},
				{
					name: "奇奇",
					num: "152629166525666666"
				},
				{
					name: "苏帮",
					num: "152629166525666666"
				},
				{
					name: "王小二",
					num: "152629166525666666"
				},
			 ]
		 
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	getDataList: function () {
    //加载新闻列表
    data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
      this.setData({
        dataList: this.data.dataList.concat(dataList)
      })
      console.log(this.data.dataList);
    })
  },
  onLoad: function (options) {
    this.getDataList();
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