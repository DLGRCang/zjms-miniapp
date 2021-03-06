// pages/medical/pages/hospital/hospital.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    tabName: ['医院', '药店'],
    tabId: 0,
    dataList: [],
    tit:''
  },
  selectTab: function (e) {
    this.setData({
      dataList: [],
      tabId: e.detail.TabCur
    })
    this.getData()

  },
  getData() {
    util.requestApi('medical/listpagemedical', 'GET', {}).then(res => {
      console.log(res)
      let allList = []
      allList = res.data.rows;

      for (let index = 0; index < allList.length; index++) {
        if (allList[index].type != this.data.tabId + 1) {
          allList.splice(index, 1);
          index--
        }
      }
      this.setData({
        dataList: allList
      })

    });
  },
  goInfo(e) {
    wx.navigateTo({
      url: "/pages/publish/pages/newsDetail/newsDetail?info_content=" + e.currentTarget.dataset.obj.medicalName + "&info_source=" + e.currentTarget.dataset.obj.address + "&publishdate=" + e.currentTarget.dataset.obj.businessHours + "&info_videos=" + encodeURIComponent(e.currentTarget.dataset.obj.accessory_videos) + "&info_detail=" + encodeURIComponent(e.currentTarget.dataset.obj.particulars),
    })
  },

  goDetail() {
    let dataList = this.data.dataList;
    for (let i = 0; i < dataList.length; i++) {
      util.routePlan(dataList[i].introduction, dataList[i].latitude, dataList[i].longitude)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tit:options.tit
    })
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