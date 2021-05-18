// pages/life/pages/finance/finance.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit:'',
    imgUrl: app.globalData.imgUrl,
    baseImgUrl: app.globalData.baseImgUrl,
    infotypeid: '7d89ee07-a15a-4bf3-9b16-01ecd9365d9f', //政策通知
    page: 1,
    dataList: [],
    financialSupermarket: []
  },
  //贷款申请
  loansForm(){
    util.pageJump('/pages/life/pages/financeLoans/financeLoans')
  },
  //金融产品
  productsForm(e){
    util.pageJump('/pages/life/pages/financeProducts/financeProducts?institutions_id='+e.currentTarget.dataset.institutions_id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getDataList: function () {
    //加载新闻列表
    data.getArtelData(this.data.infotypeid, this.data.page, 3).then(dataList => {
      this.setData({
        dataList: this.data.dataList.concat(dataList)
      })
      console.log(this.data.dataList);
    })
    //加载金融机构列表
    util.requestApi('institutionslist/listinstitutionslist','GET', {}).then(res => {
      this.setData({
        financialSupermarket: res.data
      })
      console.log(this.data.financialSupermarket);
    })
  },
  onLoad: function (options) {
    this.setData({
      tit:options.tit
    })
    this.getDataList();
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