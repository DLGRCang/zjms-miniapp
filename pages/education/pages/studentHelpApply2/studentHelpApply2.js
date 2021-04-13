// pages/education/pages/studentHelpApply2/studentHelpApply2.js
const util = require('../../../../utils/util.js')
const app=getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: '', //附件地址
		nationList: app.globalData.nationList, //民族
		familyList: [], //家庭成员
		schoolName: '', //学校姓名
		entranceSeason: '', //入学季节
		studentName: '', //学生姓名
		studentSex: '', //学生性别
		studentIdCard: '', //身份证号
		studentNational: '', //民族
		entranceYearSeason: '', //入学年月
		studentGrade: '', //年级
		studentClass: '', //班级
		countriesInputting: '', //是否国家级建档立卡贫困户
		personContact: '', //本人联系方式
		guardianName: '', //监护人姓名
		guardianContact: '', //监护人联系方式
		registeredPlace: '', //户籍所在地
		registrationNature: '', //户籍性质
		incomeSource: '', //主要收入来源
		familyIncomeCapita: '', //家庭年人均收入
		whetherLow: '', //是否低保户
		nowFamilyAddress: '', //家庭现住址
		applyBook: '', //申请书
		applyReason: '', //申请理由
		studentPhoto: '', //学生照片

	},

	//提交数据
	commitData() {
		let data = {
			applyType:2,
			userId: wx.getStorageSync("userId"),
			schoolName:this.data.schoolName,
			entranceYear: (this.data.entranceYearSeason.split('-')[0]), //入学年份
			entranceSeason:this.data.entranceSeason,
			studentName:this.data.studentName,
			studentSex:this.data.studentSex,
			studentIdCard:this.data.studentIdCard,
			studentNational:this.data.studentNational,
			entranceYearSeason:this.data.entranceYearSeason,
			studentGrade:this.data.studentGrade,
			studentClass:this.data.studentClass,
			countriesInputting:this.data.countriesInputting,
			personContact:this.data.personContact,
			guardianName:this.data.guardianName,
			guardianContact:this.data.guardianContact,
			registeredPlace:this.data.registeredPlace,
			registrationNature:this.data.registrationNature,
			incomeSource:this.data.incomeSource,
			whetherLow:this.data.whetherLow,
			familyIncomeCapita:this.data.familyIncomeCapita,
			nowFamilyAddress:this.data.nowFamilyAddress,
			applyBook:this.data.applyBook,
			applyReason:this.data.applyReason,
			studentPhoto:this.data.studentPhoto,
			applyState:0,
			studentFamilyVo:this.data.familyList,
			putData(e) {
				let key = e.currentTarget.dataset.key
				this.setData({
					[key]: e.detail.value
				})
			},
			radioChange(e) {
				let key = e.currentTarget.dataset.key
				console.log(key)
				this.setData({
					[key]: e.detail.value
				})
			},
		}
		console.log(data)
		util.requestApi('studentsubsidize/savestudentsubsidize', 'POST', data).then(res => {
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
		//获取民族
		getNation(e) {
			this.setData({
				studentNational: this.data.nationList[e.detail.value]
			})
		},
		addFamily() {
			util.pageJump('../studentHelpApplyFamily/studentHelpApplyFamily?familyList=' + JSON.stringify(this.data.familyList))
		},
	putData(e) {
		let key = e.currentTarget.dataset.key
		this.setData({
			[key]: e.detail.value
		})
	},
	radioChange(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
	},
	//选择图片
	ChooseImage() {
		let that = this
		wx.chooseImage({
			count: 1, //默认9
			sizeType: ['original', 'compressed'],
			sourceType: ['album'],
			success: (res) => {
				this.setData({
					imgUrl: res.tempFilePaths[0]
				})
				util.uploadFile(this.data.imgUrl, 'image')
					.then(res => {
						console.log(res)
						if (res.statusCode == 200) {
							let obj = JSON.parse(res.data)

							that.setData({
								studentPhoto: obj.data,
							})
						} else {
							that.setData({
								imgUrl: '',
								studentPhoto: '',
							})
						}
					});


			}

		});
	},
	//删除图片/视频
	DelImg(e) {
		wx.showModal({
			content: '确定要删除吗？',
			cancelText: '再想想',
			confirmText: '确定',
			success: res => {
				if (res.confirm) {
					this.setData({
						imgUrl: '',
						studentPhoto: '',
					})
				}
			}
		})
	},
	//视频预览/图片预览
	ViewVideo(e) {
		wx.previewMedia({
			sources: [{
				url: e.currentTarget.dataset.url,
				type: e.currentTarget.dataset.type
			}],
		});
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
		console.log(this.data.familyList)
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