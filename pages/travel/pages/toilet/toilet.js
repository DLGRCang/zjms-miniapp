// pages/travel/pages/toilet/toilet.js
const app = getApp()
const data = require('../../../../utils/data.js')
let QQMapWX = require('../../../../libs/qqmap/qqmap-wx-jssdk.min');
const util = require('../../../../utils/util.js');
let qqmapsdk = new QQMapWX({
  key: 'O5QBZ-JLYL6-3MTSA-E3BN3-YAWD7-A3FXI'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit:'',
    pageTabs: ["列表", "地图"],
    index: 0,
    longitude: '',
    latitude: '',
    address: '',
    toiletList: [],
    mapw: '100%',
    maph: '0',
    scale: '16',
    markers: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tit:options.tit
    })
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
          this.getAddress();
        }
      }
    });
    wx.getSystemInfo({
      success: res => {
        var mapw = res.windowWidth
        var maph = res.windowHeight
        this.setData({
          maph: maph + 'px',
        })
      }
    })
    //this.toilets();
    this.getToilet();
  },
  selectTab: function (e) {
    this.setData({
      index: e.detail.TabCur
    })
  },
  //获取定位信息
  getAddress() {
    var that = this;
    //获取当前位置
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        var lat = res.latitude;
        var lon = res.longitude;
        //根据坐标获取当前位置名称，腾讯地图逆地址解析
        qqmapsdk.reverseGeocoder({
          location: { latitude: lat, longitude: lon },
          success: function (res) {
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
  //点击回到初始位置
  clickControl(e) {
    let mpCtx = wx.createMapContext("map");
    mpCtx.moveToLocation();

  },
  //获取厕所信息
  getToilet: function () {
    var that = this;
    qqmapsdk.search({
      keyword: '厕所',
      success: res => {
        console.log(res.data)
        var mark = []
        for (let i in res.data) {
          mark.push({
            title: res.data[i].title,
            id: i,
            longitude: res.data[i].location.lng,
            latitude: res.data[i].location.lat,
          })
        }
        this.setData({
          markers: mark,
          toiletList: res.data
        })
      }
    })
  },
  goRoute(e){
    console.log(e)
    util.routePlan(e.currentTarget.dataset.name,e.currentTarget.dataset.lat,e.currentTarget.dataset.lng)
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