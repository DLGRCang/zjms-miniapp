// pages/government/pages/volunteApplication/volunteApplication.js
const util = require('../../../../utils/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    id: '',
    name: '',
    sex: '',
    age: '',
    phone:'',
    address: '',
    worktime: '',
    specialty: '',
  },
  putData(e) {
    let key = e.currentTarget.dataset.key
    console.log(key)
    this.setData({
      [key]: e.detail.value
    })
  },
  radioChange(e) {
    let key = e.currentTarget.dataset.key
    console.log(key)
    this.setData({
      [key]: e.detail.value
    })
  },
  commitData: function () {
    let data = {
      userId:wx.getStorageSync("userId"),
      name: this.data.name,//姓名
      sex: this.data.sex,//性别
      age: this.data.age,//年龄
      phone: this.data.phone,//年龄
      address: this.data.address,//家庭地址
      worktime: this.data.worktime,//工作时间
      specialty: this.data.specialty//特长
    };
    console.log(data)
    util.requestData('weixinyuanapplication/savevolunteerapplication/'+this.data.id, 'POST', data).then(res => {
      console.log(res)
      util.returnCode(res.statusCode,200,2)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
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