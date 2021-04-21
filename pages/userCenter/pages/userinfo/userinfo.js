// pages/userCenter/pages/userinfo/userinfo.js
const app = getApp()
const util = require('../../../../utils/util.js')
import QRCode from '../../../../utils/weapp-qrcode.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: wx.getStorageSync('name'),
    idCard: wx.getStorageSync('idCard'),
    birthday: util.getBirthday(wx.getStorageSync('idCard')),
    age: util.getAge(wx.getStorageSync('idCard')),
    choose: false
  },

  chooseChange(e) {
    this.setData({
      choose: e.detail.value
    })
  },

  //生成二维码
  erCode() {
    new QRCode('myQrcode', {
      text: this.data.name + this.data.sex + this.data.idCard + this.data.birthday + this.data.age,
      width: 280,
      height: 280,
      padding: 10, // 生成二维码四周自动留边宽度，不传入默认为0
      correctLevel: QRCode.CorrectLevel.L, // 二维码可辨识度
      callback: (res) => {
        console.log(res.path)
        // 接下来就可以直接调用微信小程序的api保存到本地或者将这张二维码直接画在海报上面去，看各自需求
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.erCode()
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