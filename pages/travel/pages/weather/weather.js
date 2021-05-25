// pages/travel/pages/weather/weather.js
const app = getApp()
const data = require('../../../../utils/data.js')
let QQMapWX = require('../../../../libs/qqmap/qqmap-wx-jssdk.min');
const util = require('../../../../utils/util.js');
let qqmapsdk = new QQMapWX({
  key: 'O5QBZ-JLYL6-3MTSA-E3BN3-YAWD7-A3FXI'
});
var day = ["今天", "明天", "后天"];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    baseImgUrl: app.globalData.baseImgUrl,
    tit: '',
    url: '',
    //初始化天气数据
    hideNotice: false,
    day: day,
  },

  //获取城市
  getCity: function () {
    var that = this
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        qqmapsdk.reverseGeocoder({
          location: { latitude:  res.latitude, longitude:  res.longitude },
          success: function (res) {
            that.setData({
              city:res.result.address_component.city,
              district:res.result.address_component.district,
              street:res.result.address_component.street
            })
            that.getWeahter(res.result.address_component.city)
          }
        });
      }
    })
  },

  //获取天气信息
  getWeahter: function (city) {
    var that = this
    console.log(this.data.location)
    var url = "https://free-api.heweather.net/s6/weather"
    var params = {
      location: city,
      key: "d8418d51785e4e1aa664d5600fb03c86"
    }
    wx.request({
      url: url,
      data: params,
      success: function (res) {
        console.log(res.data.HeWeather6[0])
        var tmp = res.data.HeWeather6[0].now.tmp;
        var txt = res.data.HeWeather6[0].now.cond_txt;
        var code = res.data.HeWeather6[0].now.cond_code;
        var vis = res.data.HeWeather6[0].now.vis;
        var dir = res.data.HeWeather6[0].now.wind_dir;
        var sc = res.data.HeWeather6[0].now.wind_sc;
        var hum = res.data.HeWeather6[0].now.hum;
        var fl = res.data.HeWeather6[0].now.fl;
        var notice = res.data.HeWeather6[0].lifestyle[2].txt;
        var daily_forecast = res.data.HeWeather6[0].daily_forecast;
        that.setData({
          tmp: tmp,
          txt: txt,
          code: code,
          vis: vis,
          dir: dir,
          sc: sc,
          hum: hum,
          fl: fl,
          daily_forecast: daily_forecast,
          notice: notice
        })
        that.getWeahterAir(params.location);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },


  //获取空气质量
  getWeahterAir: function (city) {
    var that = this
    var url = "https://free-api.heweather.net/s6/air"
    var params = {
      location: city,
      key: "d8418d51785e4e1aa664d5600fb03c86"
    }
    wx.request({
      url: url,
      data: params,
      success: function (res) {
        console.log(res)
        var qlty = res.data.HeWeather6[0].air_now_city.qlty;
        that.setData({
          qlty: qlty,
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tit: options.tit,
      url: options.url
    })
    this.getCity()
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
    this.getLocation();
    //下拉刷新后回弹
    wx.stopPullDownRefresh();
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