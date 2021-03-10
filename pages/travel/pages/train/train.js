// pages/travel/pages/train/train.js
const app = getApp()
const util = require('../../../../utils/util.js')
const plugin = requirePlugin('WechatSI')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    name: ['伊旗航班', '伊旗火车'],
    chooseIndex: 0,
    date: util.formatDate(new Date()),
    leaveAreaList: ['鄂尔多斯'],
    arriveAreaList: null,
    airInfo: null,
    arrArea: '北京',
  },
  choose(e) {
    console.log(e.currentTarget.dataset.id)
    this.setData({
      chooseIndex: e.currentTarget.dataset.id,
    })
    if (e.currentTarget.dataset.id == 1) {
      wx.navigateToMiniProgram({
        appId: 'wxa51f55ab3b2655b9',
        path: '',
        success: function (res) { },
        fail: function (res) {
          wx.navigateBack({
            delta: 1
          })
        }
      })
    }
  },
  DateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  //出发地
  leaveArea(e) {
    this.setData({
      index1: e.detail.value
    })
  },
  //到达地
  arriveArea(e) {
    this.setData({
      index2: e.detail.value
    })
  },
  //飞机到达城市
  getArriveAreaList() {
    let that = this;
    util.requestApi('flight/listtocity', 'GET', {}).then(res => {
      console.log(res)
      that.setData({
        arriveAreaList: res.data
      })
    })
  },
  //查询航班信息（根据到达城市）
  getInfo() {
    let that = this;
    util.requestApi('flight/listflightbytocity/' + this.data.arrArea, 'GET', {}).then(res => {
      if (res.data.length > 0) {
        that.setData({
          carInfo: res.data
        })
      }
    })
  },

  // 转语音  
  // <button bindtap='start'>开始</button>
  // <button bindtap='end'>结束</button>
  start: function (e) {
    var that = this;
    var content = "【导语】:3月9日0—24时,31个省(自治区、直辖市)和新疆生产建设兵团报告新增确诊病例5例,均为境外输入病例(上海2例,河南1例,广东1例,陕西1例);无新增死亡...";
    plugin.textToSpeech({
      lang: "zh_CN",
      tts: true,
      content: content,
      success: function (res) {
        console.log(res);
        console.log("音频地址", res.filename);
        that.setData({
          src: res.filename
        })
        that.yuyinPlay();
      }
    })
  },
  //播放语音
  yuyinPlay: function (e) {
    if (this.data.src == '') {
      console.log(暂无语音);
      return;
    }
    //设置音频地址
    this.innerAudioContext.src = this.data.src
    //播放音频
    this.innerAudioContext.play();
  },

  // 结束语音
  end: function (e) {
    //暂停音频
    this.innerAudioContext.pause();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArriveAreaList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //创建内部 audio 上下文 InnerAudioContext 对象。
    this.innerAudioContext = wx.createInnerAudioContext();
    this.innerAudioContext.onError(function (res) {
      console.log(res);
      wx.showToast({
        title: '语音播放失败',
        icon: 'none',
      })
    })
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