// pages/government/pages/questionnaire/questionnaire.js
const util = require('../../../../utils/util.js')
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		dataList: [],
		tit:'',
		userid: wx.getStorageSync('userId'),
		page:1,
		rows:5
	},
	getDataList() {
		let data={
			is_release:1,
			userid:this.data.userid,
			page:this.data.page,
			rows:this.data.rows
		}
		util.requestApi('api/questionnaire/listpagequestionnaire', 'GET', data).then(res => {
			console.log(res)
			if(res.data.rows.length==0){
				wx.showToast({
					title: '没有更多了',
					icon: 'none'
				})
				return
			}
			this.setData({
				dataList: this.data.dataList.concat(res.data.rows)
			})
		});
	},
	goInfo(e) {
		console.log(e.currentTarget.dataset.index)
		if(this.data.dataList[e.currentTarget.dataset.index].voteid!=null&&this.data.dataList[e.currentTarget.dataset.index].voteid!=""){
			wx.showToast({
				title: '您已经答过了',
				icon: 'none'
			})
			return
		}
		util.pageJump('../questionnaireInfo/questionnaireInfo?id='+e.currentTarget.dataset.id)
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
      tit:options.tit
    })
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
		this.setData({
			page:1,
			dataList:[]
		})
		this.getDataList()
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
			console.log("触底加载")
			this.setData({
				page:this.data.page+1
			})
			this.getDataList()
	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})