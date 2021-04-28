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
    userInfo :wx.getStorageInfoSync('userInfo'),
    userId:'',
    tab:'',
    tabList: ['矛盾化解', '环境整治', '困难帮扶'],
    TabCur: 0,
    baseUrl:part.baseUrl,
    contentInfo: null
  },
  tabSelect(e) {
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
    let url = part.baseUrl+'taskMeeting/actListJs?ACTID=1220&USER_ID='+this.data.userId;
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log('矛盾')
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
    let url = part.baseUrl+'taskMeeting/actListJs?ACTID=1221&USER_ID='+this.data.userId;
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log('环境')
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
    let url = part.baseUrl+'taskMeeting/actListJs?ACTID=1223&USER_ID='+this.data.userId;
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log('困难')
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
      url: '../detail/detail?id='+e.currentTarget.dataset.id+'&tab='+this.data.tab,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let that = this
    this.setData({
      userId :that.data.userInfo.USER_ID,
      tab:options.tab
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