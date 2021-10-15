// pages/government/pages/questionnaireInfo/questionnaireInfo.js
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		id: '',
		dataList: [],
		commintData: {},
		chooseData: {}
	},
	//提交数据
	commitData() {
		let commintList = []
		for (let key in this.data.chooseData) {
			let cmData = {
				voteId: key,
				voteOption: this.data.chooseData[key],
				votePeopleId: wx.getStorageSync('userId'),
				voteTime: util.formatTime1(new Date()),
				votePeopleName: wx.getStorageSync('name'),
				questionnaire_id: this.data.id
			}
			commintList.push(cmData)
		}

		if(commintList.length<this.data.dataList.length){
			wx.showToast({
				title: '请答完所有题目',
				icon: 'none'
			})
			return
		}

		util.requestApi('api/voterecord/saveappvoterecord', 'POST', commintList).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
			
					wx.navigateBack({
						delta: 1
					})
					util.showToast("提交成功")
			} else {
				util.showToast(res.data.msg)
			}
		});
	},
	radioChange(e) {
		let key = e.currentTarget.dataset.key
		let choose = this.data.chooseData;
		choose[key] = e.detail.value;
		console.log(choose)
		this.setData({
			chooseData: choose
		})
	},
	getDataInfo() {
		util.requestApi('api/questionnaire/questionnaireInfo?questionnaireId=' + this.data.id, 'GET', {}).then(res => {
			console.log(res)
			this.setData({
				dataList: res.data
			})
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		let commintData = {
			voteId: '',
			voteOption: '',
			votePeopleId: wx.getStorageSync('userId'),
			voteTime: util.formatTime1(new Date()),
			votePeopleName: wx.getStorageSync('name'),
			questionnaire_id: options.id,
		}
		this.setData({
			id: options.id,
			commintData: commintData
		})
		this.getDataInfo()
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