// pages/guideDetail/pages/guideInfo/guideInfo.js
const util = require('../../../../utils/util.js')
const plugin = requirePlugin('WechatSI')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    applicationId: '', //事项id
    project_name: '', //事项名称
    project_instructions: '', //办事指南
    src: '',
  },
  //获取事项详情
  getData() {
    util.requestApi('application/getapplication/' + this.data.applicationId, 'GET', {}).then(res => {
      console.log(res)
      this.setData({
        project_name: res.data.project_name,
        project_instructions: res.data.project_instructions,
      })
    });
  },
  apply() {
    util.pageJump('/pages/government/pages/guideCommint/guideCommint?applicationId=' + this.data.applicationId)
  },


  // 转语音  
  start: function (e) {
    var that = this;
    var content = this.data.project_name;
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
    this.setData({
      applicationId: options.applicationId
    })
    this.getData()
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