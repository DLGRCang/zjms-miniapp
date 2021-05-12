// pages/appointment/pages/nucleicForm/nucleicForm.js
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		abdominalPain:'',
		assembleInfectionPerson:'',
		breathDifficulty:'',
		caseFieldTravel:'',
		chestPain:'',
		contactDeterioratePatient:'',
		contactInfectionPerson:'',
		contactWildlife:'',
		contactpPlagueCorrelation:'',
		detectionPurpose:'',
		diarrhea:'',
		dryCough:'',
		feverNumber:'',
		highestTemperature:'',
		lymphTumefaction:'',
		mosquitoBite:'',
		nowAddress:'',
		passPlace:'',
		passPlagueField:'',
		phoneNumber:'',
		todayTemperature :'',
		userAge :'',
		userIdCard :'',
		userName :'',
		userProfession :'',
		userSex :'',
		userWeak :'',
		whetherContactPatient :'',
		whetherFever :'',
		whetherInsulateObserve :'',
		phoneNumber :'',
		
	},
	//提交数据
  commitData() {
    let data = {
			userId: wx.getStorageSync("userId"),
			abdominalPain:this.data.abdominalPain,
			assembleInfectionPerson:this.data.assembleInfectionPerson,
			breathDifficulty:this.data.breathDifficulty,
			caseFieldTravel:this.data.caseFieldTravel,
			chestPain:this.data.chestPain,
			contactDeterioratePatient:this.data.contactDeterioratePatient,
			contactInfectionPerson:this.data.contactInfectionPerson,
			contactWildlife:this.data.contactWildlife,
			contactpPlagueCorrelation:this.data.contactpPlagueCorrelation,
			detectionPurpose:this.data.detectionPurpose,
			diarrhea:this.data.diarrhea,
			dryCough:this.data.dryCough,
			feverNumber:this.data.feverNumber,
			highestTemperature:this.data.highestTemperature,
			lymphTumefaction:this.data.lymphTumefaction,
			mosquitoBite:this.data.mosquitoBite,
			nowAddress:this.data.nowAddress,
			passPlace:this.data.nowAddress,
			passPlagueField:this.data.passPlagueField,
			phoneNumber:this.data.phoneNumber,
			todayTemperature :this.data.todayTemperature,
			userAge :this.data.userAge,
			userIdCard :this.data.userIdCard,
			userName :this.data.userName,
			userProfession :this.data.userProfession,
			userSex :this.data.userSex,
			userWeak :this.data.userWeak,
			whetherContactPatient :this.data.whetherContactPatient,
			whetherFever :this.data.whetherFever,
			whetherInsulateObserve :this.data.whetherInsulateObserve,
			phoneNumber :this.data.phoneNumber,
     
    }
    console.log(data)
    util.requestData('nucleicddetection/savenucleicddetection', 'POST', data).then(res => {
      console.log(res)
      if (res.statusCode == 200) {
        // if (res.data.resultStatus == 1) {
          wx.navigateBack({
            delta: 1
          })
          util.showToast("提交成功")
        // } else {
        //   util.showToast(res.data.resultDesc)
        // }
      } else {
        util.showToast(res.data.msg)
      }
    });
  },
	putData(e) {
    let key = e.currentTarget.dataset.key
    console.log(key)
    this.setData({
      [key]: e.detail.value
    })
  },
  radioChange(e) {
    let key = e.currentTarget.dataset.key
    console.log(key)
    console.log(e.detail.value)
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