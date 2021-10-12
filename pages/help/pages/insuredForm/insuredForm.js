// pages/help/pages/insuredForm/insuredForm.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    alimony: 0,
    annualHouseholdDisposableIncome: 0,
    bzzyhj: 0,
    commoditHousingNum: 0,
    endowmentInsurance: 0,
    familyAnnualDeduction: 0,
    farmingIncome: 0,
    grossOperatingIncome: 0,
    grossPropertyIncome: 0,
    grossWageIncome: 0,
    healthInsurance: 0,
    houseRent: 0,
    housingProvidentFund: 0,
    interestSavings: 0,
    landIncome: 0,
    landSubleased: 0,
    mbzykbx: 0,
    oldAgePension: 0,
    otherIncome: 0,
    otherPropertyIncome: 0,
    otherTransferIncome: 0,
    otherWageIncome: 0,
    peopleNum: 0,
    perCapitaIncome: 0,
    qtjbtyjtcy: 0,
    rationAllowance: 0,
    residenceNum: 0,
    retirementAllowance: 0,
    returnPlough: 0,
    socialInsurance: 0,
    speciaHardshipFamilyNum: 0,
    totalTransferIncome: 0,
    workersIncome: 0,
    zxdxszc: 0,
    bankDeposit: '',
    cejzje: '',
    collection: '',
    commercialInsurance: '',
    commercialTenant: '',
    commodityHousing: '',
    debenture: '',
    fineArt: '',
    headHouseholdName: '',
    placeDomicile: '',
    presentAddress: '',
    residence: '',
    securities: '',
    speciaHardshipFamily: '',
  },
  commitData() {
    let data = {
      state: '未审核',
      userId: wx.getStorageSync('userId'),
      alimony: this.data.alimony,
      annualHouseholdDisposableIncome: this.data.annualHouseholdDisposableIncome,
      bzzyhj: this.data.bzzyhj,
      commoditHousingNum: this.data.commoditHousingNum,
      endowmentInsurance: this.data.endowmentInsurance,
      familyAnnualDeduction: this.data.familyAnnualDeduction,
      farmingIncome: this.data.farmingIncome,
      grossOperatingIncome: this.data.grossOperatingIncome,
      grossPropertyIncome: this.data.grossPropertyIncome,
      grossWageIncome: this.data.grossWageIncome,
      healthInsurance: this.data.healthInsurance,
      houseRent: this.data.houseRent,
      housingProvidentFund: this.data.housingProvidentFund,
      interestSavings: this.data.interestSavings,
      landIncome: this.data.landIncome,
      landSubleased: this.data.landSubleased,
      mbzykbx: this.data.mbzykbx,
      oldAgePension: this.data.oldAgePension,
      otherIncome: this.data.otherIncome,
      otherPropertyIncome: this.data.otherPropertyIncome,
      otherTransferIncome: this.data.otherTransferIncome,
      otherWageIncome: this.data.otherWageIncome,
      peopleNum: this.data.peopleNum,
      perCapitaIncome: this.data.perCapitaIncome,
      qtjbtyjtcy: this.data.qtjbtyjtcy,
      rationAllowance: this.data.rationAllowance,
      residenceNum: this.data.residenceNum,
      retirementAllowance: this.data.retirementAllowance,
      returnPlough: this.data.returnPlough,
      socialInsurance: this.data.socialInsurance,
      speciaHardshipFamilyNum: this.data.speciaHardshipFamilyNum,
      totalTransferIncome: this.data.totalTransferIncome,
      workersIncome: this.data.workersIncome,
      zxdxszc: this.data.zxdxszc,
      bankDeposit: this.data.bankDeposit,
      cejzje: this.data.cejzje,
      collection: this.data.collection,
      commercialInsurance: this.data.commercialInsurance,
      commercialTenant: this.data.commercialTenant,
      commodityHousing: this.data.commodityHousing,
      debenture: this.data.debenture,
      fineArt: this.data.fineArt,
      headHouseholdName: this.data.headHouseholdName,
      placeDomicile: this.data.placeDomicile,
      presentAddress: this.data.presentAddress,
      residence: this.data.residence,
      securities: this.data.securities,
      speciaHardshipFamily: this.data.speciaHardshipFamily,
    }
    console.log(data)
    util.requestApi('lowinsured/savelowinsured', 'POST', data).then(res => {
      console.log(res)
      if (res.statusCode == 200) {
        wx.showToast({
          title: "提交成功",
          icon: 'success',
          mask: true,
          success(res) {
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              })
            }, 1000)
          }
        });
      } else {
        wx.showToast({
          title: '提交失败请检查数据',
          icon: 'error',
        })
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