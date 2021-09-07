// pages/government/pages/eachFlagTownXY/eachFlagTownXY.js
const util = require('../../../../utils/util.js')
import xylink from 'xylink-sdk/common/room.js';
import { FailEnumMap, STR_CALL_FAIL_UNKNOW_REASON } from '../eachFlagTownXY/emun';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    muted: false,
    devicePosition: 'front',
    meetingLoading: true,
    camera: true,
    onHold: false, // 是否通话等待
    avatar: 'defaultAvatar', // 用户头像
    template: {
      layout: 'auto',
      mode: '4-1',
      detail: []
    },
    userName: '',
    tab: '',
    num: '9083648674',
    linkData: null,
  },

  xyToken() {
    let url = 'https://www.yjhlcity.com/zhsq/app/release/api/videocommunication/getToken'
    util.httpRequest(url, 'GET', {}).then(res => {
      let resa = JSON.parse(res.data.data)
      console.log(resa)
      this.setData({
        userName:resa.userName
      })
      xylink.login(resa.token, (response) => {
        if (response.code === 200) {
          const cn = response.data.callNumber;
          this.callNumber = cn;
          wx.showToast({
            title: "初始化登录成功",
            icon: "success",
            duration: 2000,
            mask: true,
          });
          xylink.makeCall(this.data.num, '', wx.getStorageSync('wxUser').name, this.onGetCallStatus);
        }
      });
    })
  },

  onGetCallStatus(response) {
    // 响应makeCall状态，如果为200， 可以进行隐藏呼叫loading页面，执行start方法通知组件内部进行一系列操作
    // 比如连接socket，开启内部room事件向外发送
    const { code, message } = response;
    if (code === 200) {
      // 隐藏loading
      this.setData({
        meetingLoading: false
      });
      // 通知内部事件开始做入会准备，连接ws，启动roomEvent
      this.xylinkRoom.start();
    } else {
      xylink.showToast(message);
    }
  },

  onSwitchPosition() {
    const position = this.xylinkRoom.switchCamera();

    this.setData({
      devicePosition: position
    });
  },

  onSwitchCamera() {
    this.setData({
      camera: !this.data.camera
    });
  },

  onStopMeeting() {
    let url = 'https://www.yjhlcity.com/zhsq/app/release/api/videocommunication/loginOut/'+this.data.userName
    util.httpRequest(url, 'GET', {}).then(res => {
      wx.navigateBack({
        delta: 1
      });
    })
   

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      tab: options.tab,
      //num: options.num
    })
    // 缓存sdk <xylink-sdk/>组件节点context，为后续调用组件内部方法用
    this.xylinkRoom = this.selectComponent('#xylink');
    // 可选执行，设置是否进行内部事件的console和写入logger文件中，用于分析问题使用
    // 默认都不开启，设置为true开启
    this.xylinkRoom.setDebug(true, true);
    this.xyToken(options.tab)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 缓存sdk <xylink-sdk/>组件节点context，为后续调用组件内部方法用
    this.xylinkRoom = this.selectComponent('#xylink');

    // 可选执行，设置是否进行内部事件的console和写入logger文件中，用于分析问题使用
    // 默认都不开启，设置为true开启
    this.xylinkRoom.setDebug(true, true);
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