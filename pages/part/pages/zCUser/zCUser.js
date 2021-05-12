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
    userId: wx.getStorageSync('partUserId'),
    tab: '',
    ZC: null,
  },
  // 详情
  goDetail(e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.dataset.id + '&tab=' + this.data.tab,
    })
  },
  // 政策
  getZCList() {
    let url = part.baseUrl + 'TaskTrends/actFindByPsersonIdList?ACTID=1222&USER_ID=' + this.data.userId;
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res)
      if (res.data.code == 200) {
        this.setData({
          ZC: res.data.data
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
    this.setData({
      tab: options.tab
    })
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