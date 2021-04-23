// pages/part/pages/zCMore/zCMore.js
const app = getApp()
const util = require('../../../../utils/util.js')
const part = require('../../../../utils/part.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    baseImgUrl: app.globalData.baseImgUrl,
    ZC:null,
  },
  // 详情
  goDetail(e){
    util.pageJumpTo('../detail/detail','id',e.currentTarget.dataset.id)
  },
    // 政策
    getZCList() {
      let url = 'http://172.16.20.57:8080/sucstep_dj_dj_develop_dituyuan_war_exploded/taskMeeting/actListJs?ACTID=1222';
      part.httpRequest(url, 'GET', {}).then(res => {
        if (res.data.code == 200) {
          this.setData({
            ZC: res.data.data.pdList
          })
        } else {
          let msg = res.data.msg
          wx.showToast({
            title: msg,
            icon: 'none'
          })
        }
      });
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
this.getZCList()
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