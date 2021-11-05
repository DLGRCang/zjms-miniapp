// pages/appointment/pages/webView/webView.js
const login = require('../../../../utils/login.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '',
    tit: '',
    params:{},
    options:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options!=undefined){
      this.setData({
        options:options
      })
      if(JSON.parse(this.data.options.params!=""&&JSON.parse(this.data.options.params!="undefined"))){
        this.setData({
          params:JSON.parse(options.params)
        })
      }
    }
   
     if(this.data.params.hasOwnProperty('userId')){
        if (!login.isLogin()) return
     }
    let params=""
    if(this.data.params!=""&&this.data.params!={}){
      let paramsList=[]
      let paramOjb=this.data.params
      for(let key  in paramOjb){
        if(key=="userId"){
          paramsList.push(key + '=' + wx.getStorageSync("userId"))
        }else  if(key=="token"){
          paramsList.push(key + '=' + wx.getStorageSync("token"))
        }else{
          paramsList.push(key + '=' +paramOjb[key])
        }
      }
      for(let i=0;i<paramsList.length;i++){
        if(i==paramsList.length-1){
          params=params+paramsList[i]
        }else{
          params=params+paramsList[i]+"&"
        }
      }
    }
    
   
   
    let color = this.data.options.color
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: color,
    })
    if (this.data.options.tit == '先锋云超市') {
      this.setData({
        url: 'https://www.yjhlcity.com/sqdj/?network=miniapp'
      })

    } else {
      this.setData({
        url:params==""?this.data.options.url: this.data.options.url+"?"+params,
        tit: this.data.options.tit
      })
    }

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
    this.onLoad()
    // console.log("--------------show")
    // console.log(this.data.url)
    // if (app.globalData.Flag) {
    //   app.globalData.Flag = false;
    //   // this.getData();//调用接口获取数据
    // }
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