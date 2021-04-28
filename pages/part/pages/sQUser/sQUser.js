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
    userInfo: wx.getStorageSync('userInfo'),
    userId: '',
    tab: '',
    tabList: ['矛盾化解', '环境整治', '困难帮扶'],
    TabCur: 0,
    scrollLeft: 0,
    baseUrl: part.baseUrl,
    contentInfo: null
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id
    })
    if (e.currentTarget.dataset.id === 0) {
      this.setData({
        contentInfo: null
      })
      this.mdList()
    }
    if (e.currentTarget.dataset.id === 1) {
      this.setData({
        contentInfo: null
      })
      this.hjList()
    }
    if (e.currentTarget.dataset.id === 2) {
      this.setData({
        contentInfo: null
      })
      this.knList()
    }
  },
  // 矛盾
  mdList() {
    console.log(this.data.userId)
    let url = part.baseUrl + 'TaskTrends/actFindByPsersonIdList?ACTID=1220&USER_ID=' + this.data.userId;
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res)
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
    let url = part.baseUrl + 'TaskTrends/actFindByPsersonIdList?ACTID=1221&USER_ID=' + this.data.userId;
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res)
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
    let url = part.baseUrl + 'TaskTrends/actFindByPsersonIdList?ACTID=1223&USER_ID=' + this.data.userId;
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res)
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
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset.id + '&tab=' + this.data.tab,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userId: this.data.userInfo.USER_ID
    })
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