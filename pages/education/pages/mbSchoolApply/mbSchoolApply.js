// pages/education/pages/mbSchoolApply/mbSchoolApply.js
const util = require('../../../../utils/util.js')
const app = getApp()
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		schoolName: '', //学校名称
		organizerName: '', //举办者
		organizerPhone: '', //举办者电话
		creditCodeIdCard: '', //举办者统一社会信用代码或身份证号码
		juridical: '', //拟任法定代表人
		juridicalPhone: '', //拟任法定代表人联系电话
		detailedAddress: '', //办学详细地址
		trainingGoal: '', //培养目标
		schoolType: '', //办学类型
		schoolType: '', //办学类别
		runningForm: '', //办学形式
		runningForm: '', //办学层次
		studentsObject: '', //招生对象
		schoolScale: '', //招生人次
		schoolScope: '', //办学范围
		teacherAmount: '', //专职教师数量
		trainingContent: '', //培训内容或专业设置
		trainingPlan: '', //培训计划
		totalProposedInvestment: '', //拟投资总额
		investedAssetsAmount: '', //已投入资产数额
		moneySource: '', //拟投资金来源
		capitalVerificationReport: '', //验资报告
		fileState: '待上传', //验资报告上传状态
		classTime: '', //上课时间
		areaCovers: '', //总占地面积
		schoolPhoto: '', //学校照片id
		imgUrl: '', //学校照片url
		teachingBuildingArea: '', //教学用房建筑面积
		otherArea: '', //其他场地面积
		perCapitaArea: '', //生均面积
		officeSpace: '', //
		facilitiesMoney: '', //设备资金总额
		schoolPremises: '', //
		leaseTerm: '', //
		accessory: '', //
		accessoryUrl: '', //
		personalInformationList: [], //个人基本情况
		organizerInformation: [], //组织者情况
		teacherList: [], //教师
		teachFacilityList: [], //教学设备
	},
	//提交数据
	commitData() {
		let data = {
			userId: wx.getStorageSync("userId"),
			schoolName: this.data.schoolName, //学校名称
			organizerName: this.data.organizerName, //举办者
			organizerPhone: this.data.organizerPhone,
			creditCodeIdCard: this.data.creditCodeIdCard,
			juridical: this.data.juridical,
			juridicalPhone: this.data.juridicalPhone,
			detailedAddress: this.data.detailedAddress,
			trainingGoal: this.data.trainingGoal,
			schoolType: this.data.schoolType,
			schoolClass: this.data.schoolClass,
			runningForm: this.data.runningForm,
			educationLevel: this.data.educationLevel,
			studentsObject: this.data.studentsObject,
			schoolScale: this.data.schoolScale,
			schoolScope: this.data.schoolScope,
			teacherAmount: this.data.teacherAmount,
			trainingContent: this.data.trainingContent,
			trainingPlan: this.data.trainingPlan,
			totalProposedInvestment: this.data.totalProposedInvestment,
			investedAssetsAmount: this.data.investedAssetsAmount,
			moneySource: this.data.moneySource,
			capitalVerificationReport: this.data.capitalVerificationReport,
			classTime: this.data.classTime,
			areaCovers: this.data.areaCovers,
			schoolPhoto: this.data.schoolPhoto,
			teachingBuildingArea: this.data.teachingBuildingArea,
			otherArea: this.data.otherArea,
			perCapitaArea: this.data.perCapitaArea,
			officeSpace: this.data.officeSpace,
			facilitiesMoney: this.data.facilitiesMoney,
			schoolPremises: this.data.schoolPremises,
			leaseTerm: this.data.leaseTerm,
			accessory: this.data.accessory,
			personalInformationList: this.data.personalInformationList,
			organizerInformation: this.data.organizerInformation[0],
			teacherList: this.data.teacherList,
			teachFacilityList: this.data.teachFacilityList,
		}
		console.log(data)
		util.requestApi('privateschool/saveprivateschool', 'POST', data).then(res => {
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
	//添加人员
	addPersonal() {
		util.pageJump('../mbSchoolApplyPersonal/mbSchoolApplyPersonal?personalInformationList=' + JSON.stringify(this.data.personalInformationList))
	},
	//添加组织者
	addOrg() {
		util.pageJump('../mbSchoolApplyOrg/mbSchoolApplyOrg?organizerInformation=' + JSON.stringify(this.data.organizerInformation))
	},
	//添加教师
	addTeacher() {
		util.pageJump('../mbSchoolApplyTeacher/mbSchoolApplyTeacher?teacherList=' + JSON.stringify(this.data.teacherList))
	},
	//添加教学设备
	addFacility() {
		util.pageJump('../mbSchoolApplyFacility/mbSchoolApplyFacility?teachFacilityList=' + JSON.stringify(this.data.teachFacilityList))
	},
	addFile() {
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

						that.setData({
							fileState: '上传成功',
							capitalVerificationReport: obj.data,

						})
					} else {
						that.setData({
							fileState: '上传失败',
						})
					}
				});
			}
		})
	},
	//选择图片
	ChooseImage(e) {
		let url = e.currentTarget.dataset.url
		let key = e.currentTarget.dataset.key
		let that = this
		wx.chooseImage({
			count: 1, //默认9
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				this.setData({
					[url]: res.tempFilePaths[0]
				})
				util.uploadFile(this.data.imgUrl, 'image')
					.then(res => {
						console.log(res)
						if (res.statusCode == 200) {
							let obj = JSON.parse(res.data)

							that.setData({
								[key]: obj.data,
							})
						} else {
							that.setData({
								[url]: '',
								[key]: '',
							})
						}
					});


			}

		});
	},
	//删除图片/视频
	DelImg(e) {
		let url = e.currentTarget.dataset.url
		let key = e.currentTarget.dataset.key
		wx.showModal({
			content: '确定要删除吗？',
			cancelText: '再想想',
			confirmText: '确定',
			success: res => {
				if (res.confirm) {
					this.setData({
						[url]: '',
						[key]: '',
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
		console.log("人员")
		console.log(this.data.personalInformationList)
		console.log("组织者")
		console.log(this.data.organizerInformation)
		console.log("教师")
		console.log(this.data.teacherList)
		console.log("教学设备")
		console.log(this.data.teachFacilityList)

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