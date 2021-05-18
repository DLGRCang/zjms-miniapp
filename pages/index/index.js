const util = require('../../utils/util')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: wx.getStorageSync("isLogin"),
    name: wx.getStorageSync("name"),
    CustomBar: app.globalData.CustomBar,
    iconImgUrl: app.globalData.imgUrl,
    // 服务初始值
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    topImg: app.globalData.imgUrl + '/zjms/top.png', //顶部图片地址
    bottomImg: app.globalData.imgUrl + '/zjms/bottom.png', //底部图片
    currentTime: util.formatDate(new Date) + ' ' + util.getWeekByDate(new Date()), //当前时间
    modules: null,

  },

  // 切换左边菜单并联动右边
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  /**
   * 滑动右边对应左边菜单切换
   */
  VerticalMain(e) {
    let that = this;
    let service = that.data.modules[6];
    let tabHeight = 0;
    if (that.data.load) {
      for (let i = 0; i < service.length; i++) {
        let view = wx.createSelectorQuery().in(this).select("#main-" + service[i].id);
        view.fields({
          size: true
        }, data => {
          service[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          service[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        service: service
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < service.length; i++) {
      if (scrollTop > service[i].top && scrollTop < service[i].bottom) {
        that.setData({
          VerticalNavTop: (service[i].id - 1) * 50,
          TabCur: service[i].id
        })
        return false
      }
    }
  },

  //搜索
  searchApp() {
    util.pageJump('/pages/publish/pages/search/search')
  },

  // 个人中心
  goUserCenter() {
    util.pageJump("../../pages/plugin/home/home")
  },
  // 预约缴费详情
  goFeeDetail(e) {
    util.pageJump(e.currentTarget.dataset.href)
  },
  // 业务详情页
  goServiceDetail(e) {
    console.log(e.currentTarget.dataset)
    if (e.currentTarget.dataset.type === 0) {
      // 页面跳转
      util.pageJumpTo(e.currentTarget.dataset.url, 'tit', e.currentTarget.dataset.tit)
    } else if (e.currentTarget.dataset.type === 1) {
      // 小程序跳转 url=appid
      wx.navigateToMiniProgram({
        appId: e.currentTarget.dataset.url,
        path: '',
        success: function (res) { },
        fail: function (res) { }
      })
    } else if (e.currentTarget.dataset.type === 2) {
      // webView 跳转
      wx.navigateTo({
        url: '../../pages/appointment/pages/webView/webView?url=' + e.currentTarget.dataset.url + "&tit=" + e.currentTarget.dataset.tit,
      })
    }
  },

  // 数据请求
  getData() {
    let url = 'https://www.yjhlcity.com/modules.json';
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.modules)
      this.setData({
        modules: res.data.modules
      })
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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