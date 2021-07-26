// pages/medical/pages/meetingDetail/meetingDetail.js
const app = getApp()
const util = require('../../../../utils/util.js')
import QRCode from '../../../../utils/weapp-qrcode.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.baseImgUrl,
    signStatus: 0,
    id: '',
    infoList: null,
  },
  getInfo() {
    util.requestData('meet/getmeet/' + this.data.id, 'GET', {}).then(res => {
      console.log(res.data)
      if (res.statusCode == 200) {
        this.setData({
          infoList: res.data.data
        })
      }
    });
  },
  getCode(e){
    console.log(e.currentTarget.dataset.target)
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  closeCode(){
    this.setData({
      modalName: null
    })
  },
  goSign(e) {
    if (wx.getStorageSync('meetSign')) {
      wx.showToast({
        title: "已签到，无需再签",
        icon: 'none',
      })
      return
    }
    if (new Date(this.data.infoList.meetstarttime) > new Date() && new Date() > new Date(this.data.infoList.meetendtime)) {
      wx.showToast({
        title: "不在会议时间范围内不能签到",
        icon: 'none',
      })
      return
    }
    util.pageJumpTo('../meetingSign/meetingSign', 'id', e.currentTarget.dataset.id)
  },
  goSignout(e) {
    if (wx.getStorageSync('meetSignOut')) {
      wx.showToast({
        title: "已签退，无需再签",
        icon: 'none',
      })
      return
    }
    util.pageJumpTo('../meetSignout/meetSignout', 'id', e.currentTarget.dataset.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getInfo()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getInfo()
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