// pages/part/pages/sQMore/sQMore.js
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
    tabList: ['矛盾化解', '环境整治', '困难帮扶'],
    TabCur: 0,
    scrollLeft: 0,
    baseUrl:'http://172.16.20.57:8080/sucstep_dj_dj_develop_dituyuan_war_exploded/',
    contentInfo: null
  },
  tabSelect(e) {
    console.log(e.currentTarget.dataset.id)
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })
    if(e.currentTarget.dataset.id===0){
      this.setData({
        contentInfo: null
      })
      this.mdList()
    }
    if(e.currentTarget.dataset.id===1){
      this.setData({
        contentInfo: null
      })
      this.hjList()
    }
    if(e.currentTarget.dataset.id===2){
      this.setData({
        contentInfo: null
      })
      this.knList()
    }
  },
  // 矛盾
  mdList() {
    let url = 'http://172.16.20.57:8080/sucstep_dj_dj_develop_dituyuan_war_exploded/taskMeeting/actListJs?ACTID=1220';
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.data.pdList[0].FENG_MIAN_TU.PATH)
      if (res.data.code == 200) {
        this.setData({
          contentInfo: res.data.data.pdList
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
  // 环境
  hjList() {
    let url = 'http://172.16.20.57:8080/sucstep_dj_dj_develop_dituyuan_war_exploded/taskMeeting/actListJs?ACTID=1221';
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.data.pdList)
      if (res.data.code == 200) {
        this.setData({
          contentInfo: res.data.data.pdList
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
  // 困难
  knList() {
    let url = 'http://172.16.20.57:8080/sucstep_dj_dj_develop_dituyuan_war_exploded/taskMeeting/actListJs?ACTID=1223';
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.data.pdList)
      if (res.data.code == 200) {
        this.setData({
          contentInfo: res.data.data.pdList
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

  // 详情
  goDetail(e) {
    util.pageJumpTo('../detail/detail', 'id', e.currentTarget.dataset.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.mdList()
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