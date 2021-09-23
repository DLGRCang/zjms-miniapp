// pages/charm/pages/taskInfo/taskInfo.js
const recordManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext();
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:'https://www.yjhlcity.com/InfoIssue/route/file/downloadfile/false/',
    taskImg:[],
    taskaudio:'',
    voiceStatus:'点击播放'
  },
  showVoice() {
    let that = this
    innerAudioContext.src = 'https://www.yjhlcity.com/InfoIssue/route/file/downloadfile/false/'+ this.data.taskaudio;
    innerAudioContext.play();
    innerAudioContext.onPlay(function () {
      that.setData({
        voiceStatus: "  播放中..."
      })
    })
    innerAudioContext.onEnded(function () {
      that.setData({
        voiceStatus: "  点击播放"
      })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
    console.log(JSON.parse(options.id))
    if(JSON.parse(options.id).taskfile == ""|| JSON.parse(options.id).taskfile == null){
      this.setData({
        task:JSON.parse(options.id),
        taskaudio:JSON.parse(options.id).taskaudio
      })
    }else{
      this.setData({
        task:JSON.parse(options.id),
        taskImg:JSON.parse(options.id).taskfile.split(","),
        taskaudio:JSON.parse(options.id).taskaudio
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