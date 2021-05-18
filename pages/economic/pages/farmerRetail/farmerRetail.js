// pages/economic/pages/farmerRetail/farmerRetail.js
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tit:'',
		infotypeid: '66957eec-9d77-4ecf-a4f0-916dd0f27cf4',
    page:1,
		dataList: [], //新闻列表

		searchType: [{
      title: '距离排序',
      content: ['距离1km内', '距离2km内', '距离3km内']
    }, {
      title: '选择类型',
      content: ['生鲜水果', '农副产品', '肉食蛋奶']
    }]
	},
	onpickChange: function(e) {
		let picker = this.data.searchType
		this.data.searchType[e.detail.current].title = e.detail.pick
		this.setData({
			searchType: picker
		})
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