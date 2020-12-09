// pages/travel/pages/toilet/toilet.js
const app = getApp()
const data = require('../../../../utils/data.js')
let QQMapWX = require('../../../../libs/qqmap/qqmap-wx-jssdk.min');
let qqmapsdk = new QQMapWX({
  key: 'O5QBZ-JLYL6-3MTSA-E3BN3-YAWD7-A3FXI'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: '',
    latitude: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success: (res) => {
        // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
        // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
        // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: 'none',
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (dataAu) {
                    if (dataAu.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      //再次授权，调用wx.getLocation的API
                      this.getAddress();
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else {
          //调用wx.getLocation的API
          this.getAddress();
        }
      }
    });
  },
  //获取定位信息
  getAddress() {
    var that = this;
    //获取当前位置
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        console.log(res)
        console.log(111111111111111111111111111)
        var lat = res.latitude;
        var lon = res.longitude;
        //根据坐标获取当前位置名称，腾讯地图逆地址解析
        qqmapsdk.reverseGeocoder({
          location: { latitude: lat, longitude: lon },
          success: function (res) {
            console.log(res)
            var address = res.result.address;
            that.setData({
              latitude: lat,
              longitude: lon,
            })
          }
        });
      }
    });
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