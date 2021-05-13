// pages/part/pages/detail/detail.js
const app = getApp()
const util = require('../../../../utils/util.js')
const part = require('../../../../utils/part.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: part.baseUrl,
    tab: '',
    id: '',
    SQ: '',
    rlName: '认领',
    disabled: false,
  },

  // 获取信息
  getInfo() {
    if (this.data.tab == 1) {
      var url = part.baseUrl + 'taskMeeting/findPersonsFankui?PLAN_ID=' + this.data.id + '&USER_ID=' + wx.getStorageSync('partUserId')
      console.log(url)
      part.httpRequest(url, 'GET', {}).then(res => {
        console.log(res.data)

        if (res.data.code == 200) {
          this.setData({
            SQ: res.data.data
          })
        }
      });
    } else {
      var url = part.baseUrl + 'TaskTrends/totasktrendinfoJsAct?PLAN_ID=' + this.data.id
      part.httpRequest(url, 'GET', {}).then(res => {
        console.log(res.data)
        console.log(res.data.data[0].renling)
        if (res.data.code == 200) {
          this.setData({
            SQ: res.data.data[0]
          })
          if (res.data.data[0].renling === 1) {
            this.setData({
              rlName: '已认领',
              disabled: true,
            })
          }
        }
      });
    }
  },
  // 认领
  submit() {
    part.httpRequest(part.baseUrl + 'TaskTrends/saveBaoming?id=' + this.data.id, 'GET', {}).then(res => {
      console.log(res)
      if (res.data.msg == 'error:已满!') {
        wx.showToast({
          title: '人数已满',
          icon: 'none',
          success(res) {
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              })
            }, 2000)
          }
        })
      } else {
        this.setData({
          disabled: true,
          rlName: '已认领'
        })
        setTimeout(() => {
          wx.navigateBack({
            delta: 1
          })
        }, 1000)
      }
    });
  },
  // 反馈
  goFk() {
    wx.navigateTo({
      url: '../fkDetail/fkDetail?id=' + this.data.id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id,
      tab: options.tab
    })
    this.getInfo()
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