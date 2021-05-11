// pages/help/pages/womanEvidenceLibrary/womanEvidenceLibrary.js
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		dataList:[],
		isEdit:false
	},
	getData() {
		util.requestApi('preserveevidence/listpagepreserveevidence?userId='+wx.getStorageSync("userId"), 'GET', {}).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				this.setData({
					dataList:res.data.rows,
				})
			}else{
				util.showToast('数据加载失败')
			}
		});
	},
	//证据库详情
	evidenceLibraryInfo(e) {
		util.pageJump('../womanEvidenceLibraryInfo/womanEvidenceLibraryInfo?id='+e.currentTarget.dataset.id)
	},
	//编辑
	edit(){
		this.setData({
			isEdit:!this.data.isEdit
		})
	},
	//编辑
	edit(){
		this.setData({
			isEdit:!this.data.isEdit
		})
	},
	//删除
	delete(e) {
		var ids=e.currentTarget.dataset.id
		var index=e.currentTarget.dataset.index
		console.log(index+'删除'+ids)
		util.requestApi('preserveevidence/removepreserveevidence/'+ids, 'DELETE', {}).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				this.setData({
					dataList:this.data.dataList.splice(index, 1),
				})
			}else{
				util.showToast('删除失败')
			}
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getData()
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