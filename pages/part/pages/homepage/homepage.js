// pages/part/pages/homepage/homepage.js
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
    userName: wx.getStorageSync('userName'),
    bd: '报道',
    baseUrl: 'http://172.16.20.57:8080/sucstep_dj_dj_develop_dituyuan_war_exploded/',
    FMUrl: '',
    SQ: null,
    SH: null,
    ZC: null,
  },
  // 报道
  bdList(e) {
    if (this.data.bd === '已报到') {
      return
    }
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  closeBd(e) {
    this.setData({
      modalName: null,
      bd: '已报到'
    })
  },
  // 分享
  goShare(){

  },

  // 社区活动
  getActiveList() {
    let url = 'http://172.16.20.57:8080/sucstep_dj_dj_develop_dituyuan_war_exploded/taskMeeting/actListJs?ACTID=1220';
    part.httpRequest(url, 'GET', {}).then(res => {
      if (res.data.code == 200) {
        this.setData({
          SQ: res.data.data.pdList[0],
          FMUrl: res.data.data.pdList[0].FENG_MIAN_TU.PATH
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
  // 生活服务
  getSHList() {
    let url = 'http://172.16.20.57:8080/sucstep_dj_dj_develop_dituyuan_war_exploded/taskMeeting/actListJs?ACTID=1224';
    part.httpRequest(url, 'GET', {}).then(res => {
      if (res.data.code == 200) {
        let SH = []
        SH.push(res.data.data.pdList[0])
        SH.push(res.data.data.pdList[1])
        this.setData({
          SH: SH
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


  // 个人中心
  goUserCenter() {
    util.pageJump('../success/success')
  },
  // 党员随手拍
  goDetail() {
    util.pageJump('../photo/photo')
  },
  // 详情
  goDetail(e) {
    util.pageJumpTo('../detail/detail', 'id', e.currentTarget.dataset.id)
  },
  // 更多
  goSQMore() {
    util.pageJump('../sQMore/sQMore')
  },
  goSHMore() {
    util.pageJump('../sHMore/sHMore')
  },
  goZCMore() {
    util.pageJump('../zCMore/zCMore')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getActiveList()
    this.getSHList()
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
    return {
      path: '//pages/part/pages/homepage/homepage',
    }
  },
  onShareTimeline(e) {
    return {
      title: "一手办",
      query: '//pages/part/pages/homepage/homepage',
    }
  },
})