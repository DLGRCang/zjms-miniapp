// pages/government/pages/questionnaireInfo/questionnaireInfo.js
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		voteId: '',
		data: {},
		questions: null,

	},
	getDataInfo() {
		util.requestApi('question/getvote/' + this.data.voteId, 'GET', {}).then(res => {
			this.setData({
				data: res.data
			})
		});
	},
	getQuestion() {
		let that = this
		let result = []
		let answer = {}
		util.requestApi('question/listpagequestion?voteId=' + this.data.voteId, 'GET', {}).then(res => {
			for (let i = 0; i < res.data.rows.length; i++) {	
				let request = {"question":res.data.rows[i].questionContent}
				util.requestApi('options/listpageoptions?questionId=' + res.data.rows[i].questionId, 'GET', {}).then(r => {
				
					for (let j = 0; j < r.data.rows.length; j++) {
						console.log(r.data.rows[j].optionsName)
			
					}

					let answer = {'answer':r.data.rows.optionsName}

					let obj = {
						'answer':r.data.rows.optionsName,
						"question":request
					}
					result.push(obj)
				});
			
				console.log(11111111111)
				console.log(result)
				console.log(11111111111)

			}

			console.log(res.data.rows)
			this.setData({
				questions: res.data.rows
			})
		});
	},
	getQuestionList(questionId) {
		util.requestApi('options/listpageoptions?questionId=' + questionId, 'GET', {}).then(res => {
			console.log(res.data)
			this.setData({
			})
		});
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options.voteId)
		this.setData({
			voteId: options.voteId
		})
		this.getDataInfo()
		this.getQuestion()
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