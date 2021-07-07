// pages/help/pages/lawSubmit/lawSubmit.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    vehicleImages: [],//图片url
    files: [],//图片id
    titleName: '',
    content: '',
  },
  putData(e) {
    let key = e.currentTarget.dataset.key
    console.log(key)
    this.setData({
      [key]: e.detail.value
    })
  },
  commitData() {
    let data = {
      titleName: this.data.titleName,
      content: this.data.content,
      typeId: '67b36a83-c7d0-4d89-a671-74863991de78',
      status:'未审核',
      gmtCreate:util.formatDate(new Date),
      userId: wx.getStorageSync('userId'),
      userName: wx.getStorageSync('name')
    }
    console.log(data)
    util.requestApi('commentsonthemanagement/savecommentsonthemanagement', 'POST', data).then(res => {
      console.log(res)
      if (res.statusCode == 200) {
        wx.showToast({
          title: "提交成功",
          icon: 'success',
          mask: true,
          success(res) {
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              })
            }, 1000)
          }
        });
      } else {
        wx.showToast({
          title: '提交失败请检查数据',
          icon: 'error',
        })
      }
    });

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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