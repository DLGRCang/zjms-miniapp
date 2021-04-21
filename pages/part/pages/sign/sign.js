// pages/part/pages/sign/sign.js
const app = getApp()
const util = require('../../../../utils/util.js')
const part = require('../../../../utils/part.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    phone: '',
    password: '',
    code: '',
    codeImg: '',
  },
  // 获取电话
  getPhone(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  getPassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
  // getCode(e) {
  //   this.setData({
  //     code: e.detail.value
  //   })
  // },
  goRegister() {
    util.pageJump("../register/register")
  },
  // 登录
  submit() {
    // +','+this.data.code;
    let url = 'http://172.16.20.57:8080/sucstep_dj_dj_develop_dituyuan_war_exploded/login_login?KEYDATA=' + this.data.phone + ',' + this.data.password
    let data = {
      // KEYDATA:this.data.phone+','+this.data.password+','+this.data.code,                                                                                            
      // tm:'1'
    }
    console.log(data)
    part.httpRequest(url, 'POST', data).then(res => {
      console.log(res.data)
      console.log(res.data.code)
      if (res.data.code == 200) {
        util.pageJump('../homepage/homepage')
        wx.setStorageSync("isPartLogin", true);
      } else {
        let msg = res.data.msg
        wx.showToast({
          title: msg.substring(6),
          icon: 'none'
        })
      }
    });

  },
  // 获取验证码
  // getCodeImg() {
  //   let url = 'http://172.16.20.57:8080/sucstep_dj_dj_develop_dituyuan_war_exploded/code';
  //   part.httpRequest(url, 'GET', {}).then(res => {
  //     console.log(res.data)
  //     if (res.data.code == 200) {
  //       let code = res.data.data.PICTURE
  //       this.setData({ codeImg: code.replace(/[\r\n]/g, '') });
  //     } else {
  //       wx.showToast({
  //         title: '验证码有误',
  //       })
  //     }
  //   });
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getCodeImg()

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