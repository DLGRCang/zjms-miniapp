// pages/userCenter/pages/appointment/appointment.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTabs: ["预约成功", "预约失败"],
    state: 1,
    dataList: [],
    dataList1: [],
    dataList2: [],

  },
  selectTab: function (e) {
    this.setData({
      state: e.detail.TabCur,
      dataList: []
    })
    if (e.detail.TabCur == 0) {
      this.setData({
        dataList: this.data.dataList1
      })
    } else {
      this.setData({
        dataList: this.data.dataList2
      })
    }
    console.log(this.data.dataList)
  },
  getData() {
    let data = {
      userId: wx.getStorageSync("userId"),
      applyCategory: '1'
    }
    util.requestApi('personapply/getPersonApplyList', 'GET', data).then(res => {
      console.log(res)
      let dataLi1 = []
      let dataLi2 = []
      if (res.statusCode == 200) {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].state = 1) {
            dataLi1.push(res.data[i])
          } else {
            dataLi2.push(res.data[i])
          }
        }
        this.setData({
          dataList1: dataLi1,
          dataList2: dataLi2,
          dataList: dataLi1
        })
      } else {

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