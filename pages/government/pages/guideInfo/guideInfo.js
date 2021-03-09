// pages/guideDetail/pages/guideInfo/guideInfo.js
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    applicationId: '', //事项id
    project_name: '', //事项名称
    project_instructions: '', //办事指南
  },
  //获取事项详情
  getData() {
    util.requestApi('application/getapplication/' + this.data.applicationId, 'GET', {}).then(res => {
      console.log(res)
      this.setData({
        project_name: res.data.project_name,
        project_instructions: res.data.project_instructions,
      })
    });
  },
  apply() {
    util.pageJump('/pages/government/pages/guideCommint/guideCommint?applicationId='+this.data.applicationId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      applicationId: options.applicationId
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