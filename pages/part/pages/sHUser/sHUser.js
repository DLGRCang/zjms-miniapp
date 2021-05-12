// pages/part/pages/sHMore/sHMore.js
const app = getApp()
const util = require('../../../../utils/util.js')
const part = require('../../../../utils/part.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabList: ['文化艺术', '微心愿', '其他'],
    userId:wx.getStorageSync('partUserId'),
    tab:'',
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
      this.whList()
    }
    if (e.currentTarget.dataset.id === 1) {
      this.setData({
        contentInfo: null
      })
      this.xyList()
    }
    if (e.currentTarget.dataset.id === 2) {
      this.setData({
        contentInfo: null
      })
      this.otherList()
    }
  },
  whList() {
    let url = part.baseUrl + 'TaskTrends/actFindByPsersonIdList?ACTID=1224&USER_ID='+this.data.userId;
    part.httpRequest(url, 'GET', {}).then(res => {
      if (res.data.code == 200) {
        this.setData({
          contentInfo: res.data.data
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
  xyList() {
    let url = part.baseUrl + 'TaskTrends/actFindByPsersonIdList?ACTID=1286&USER_ID='+this.data.userId;
    part.httpRequest(url, 'GET', {}).then(res => {
      if (res.data.code == 200) {
        this.setData({
          contentInfo: res.data.data
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
  otherList() {
    let url = part.baseUrl + 'TaskTrends/actFindByPsersonIdList?ACTID=1287&USER_ID='+this.data.userId;
    part.httpRequest(url, 'GET', {}).then(res => {
      if (res.data.code == 200) {
        this.setData({
          contentInfo: res.data.data
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
      url: '../detail/detail?id='+e.currentTarget.dataset.id+'&tab='+this.data.tab,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getStorageSync('partUserId'))
    this.setData({
      tab: options.tab
    })
    this.whList()
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