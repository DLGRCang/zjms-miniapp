// pages/charm/pages/userTask/userTask.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: wx.getStorageSync('taskUserInfo').taskPersonId,
    TabCur: 0,
    scrollLeft: 0,
    status: ['我的任务', '我的反馈'],
    taskList: [],
    taskFkList: []
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
    if(e.currentTarget.dataset.id == 0){
      this.getTaskList()
    }
    if(e.currentTarget.dataset.id == 1){
      this.getFkList()
    }
  },
  // 获取任务列表
  getTaskList() {
    let data = {
      "taskperson": this.data.id
    }
    util.requestData('taskinfo/taskinfolqlistrelease', 'GET', data).then(res => {
      console.log(res.data.rows)
      this.setData({
        taskList: res.data.rows
      })
    })
  },
  getFkList() {
    let data = {
      "creator": this.data.id
    }
    util.requestData('taskinfo/tasklqfkinfolistrelease', 'GET', data).then(res => {
      console.log(res.data.rows)
      this.setData({
        taskFkList: res.data.rows
      })
    })
  },
  goTaskInfo(e) {
    console.log(e)
    wx.navigateTo({
      url: '../taskInfo/taskInfo?id=' +JSON.stringify(e.currentTarget.dataset.id) 
    })
  },
  goTaskFk(e) {
    wx.navigateTo({
      url: '../taskFk/taskFk?id=' + e.currentTarget.dataset.id + '&name=' + e.currentTarget.dataset.name
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log(this.data.id)
    this.getTaskList()
    this.getFkList()
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
    this.getTaskList()
    this.getFkList()
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