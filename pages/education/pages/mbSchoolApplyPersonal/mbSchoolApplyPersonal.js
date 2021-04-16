// pages/education/pages/mbSchoolApplyPersonall/mbSchoolApplyPersonall.js
const util = require('../../../../utils/util.js')
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		nationList: app.globalData.nationList, //民族
		personalInformationList: []
	},
	radioChange(e) {
		let key = e.currentTarget.dataset.key
		let id = e.currentTarget.dataset.id
		let list = this.data.personalInformationList
		let item = this.data.personalInformationList[id]
		if (key == 'birthDate') {
			item.birthDate = e.detail.value
		}else if(key=="personSex"){
			item.personSex = e.detail.value
		}else if(key=="personType"){
			item.personType = e.detail.value
		}
		list[id] = item
		this.setData({
			personalInformationList: list
		})

	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		let id = e.currentTarget.dataset.id
		let list = this.data.personalInformationList

		let item = this.data.personalInformationList[id]
		if (key == 'contactPhone ') {
			item.contactPhone = e.detail.value
		} else if (key == 'dawkCode') {
			item.dawkCode = e.detail.value
		} else if (key == 'detailedAddress') {
			item.detailedAddress = e.detail.value
		} else if (key == 'education') {
			item.education = e.detail.value
		} else if (key == 'graduationInformation') {
			item.graduationInformation = e.detail.value
		} else if (key == 'idCard') {
			item.idCard = e.detail.value
		} else if (key == 'jobTitle') {
			item.jobTitle = e.detail.value
		}
		 else if (key == 'personName') {
			item.personName = e.detail.value
		}
		 else if (key == 'personnelRelationsUnit') {
			item.personnelRelationsUnit = e.detail.value
		}
		 else if (key == 'politicalScape') {
			item.politicalScape = e.detail.value
		}
		 else if (key == 'privateSchoolId') {
			item.privateSchoolId = e.detail.value
		}
		 else if (key == 'registeredResidence') {
			item.registeredResidence = e.detail.value
		}

		list[id] = item
		this.setData({
			personalInformationList: list
		})
	},
	delete(e) {
		let list = this.data.personalInformationList;
		list.splice(e.currentTarget.dataset.id, 1)
		this.setData({
			personalInformationList: list
		})
	},
	add() {
		let list = this.data.personalInformationList
		let item = {}
		list.push(item)
		this.setData({
			personalInformationList: list
		})
		console.log(this.data.personalInformationList)
	},
	finish() {
		let pages = getCurrentPages(); //获取当前页面js里面的pages里的所有信息。
		let prevPage = pages[pages.length - 2];
		//prevPage 是获取上一个页面的js里面的pages的所有信息。 -2 是上一个页面，-3是上上个页面以此类推。
		prevPage.setData({ // 将我们想要传递的参数在这里直接setData。上个页面就会执行这里的操作。
			personalInformationList: this.data.personalInformationList // 这里是修改了上一个页面数据:name
		})
		wx.navigateBack({
			delta: '1' // 返回上一级页面。
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		console.log(options.personalInformationList)
		this.setData({
			personalInformationList: JSON.parse(options.personalInformationList)
		})
	},
	//获取民族
	getNation(e) {
		let id = e.currentTarget.dataset.id
		let list = this.data.personalInformationList
		let item = this.data.personalInformationList[id]
		item.national =  this.data.nationList[e.detail.value]
		this.setData({
			personalInformationList:list
		})
	},
	addFile(e) {
		let key = e.currentTarget.dataset.key
		let id = e.currentTarget.dataset.id
		let list = this.data.personalInformationList
		let item = this.data.personalInformationList[id]


		let that = this
		wx.chooseMessageFile({
			count: 1,
			type: 'file',
			success(res) {
				const tempFilePash = res.tempFiles[0].path
				util.uploadFile1(tempFilePash, 'file').then(res => {
					console.log(res)
					if (res.statusCode == 200) {
						let obj = JSON.parse(res.data)
						if(key=='personalResume'){
							item.personalResume = obj.data
						}else if(key=='attachment'){
							item.attachment = obj.data
						}
				
					
					} else {
						if(key=='personalResume'){
							item.personalResume = "上传失败"
						}else if(key=='attachment'){
							item.attachment = "上传失败"
						}
					}
					list[id] = item
					console.log(id)
					that.setData({
						personalInformationList: list
					})
				});
			}
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