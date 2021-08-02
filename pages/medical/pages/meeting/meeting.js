// pages/medical/pages/meeting/meeting.js
const app = getApp()
const util = require('../../../../utils/util.js')
const login = require('../../../../utils/login.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.baseImgUrl,
    baseImg: 'https://www.yjhlcity.com/InfoIssue/miniapp',
    TabCur: 0,
    scrollLeft: 0,
    itemList: ['会议', '资料'],
    tit: '',
    infoList: null,
    dataList: [],
    fileList: [],
  },
  // 选项切换
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  //获取新闻
  getDataList() {
    data.getArtelData('27959b0d-ba6d-4943-9695-17db8ce014a0', 1).then(dataList => {
      this.setData({
        dataList: this.data.dataList.concat(dataList),
      })
      console.log(this.data.dataList);
    })
  },
  // 详情页
  goDetail(e) {
    util.pageJumpTo('../meetingDetail/meetingDetail', 'id', e.currentTarget.dataset.id)
  },
  // 获取会议详情数据
  getInfo() {
    util.requestData('meet/listmeet', 'GET', {}).then(res => {
      console.log(res.data)
      if (res.statusCode == 200) {
        this.setData({
          infoList: res.data
        })
      }
    });
  },
  // 获取资料
  getFiles() {
    util.requestApi('datadownload/listpagedatadownloadApp', 'GET', {}).then(res => {
      console.log(res.data)
      if (res.statusCode == 200) {
        this.setData({
          fileList: res.data.rows
        })
      }
    });
  },
  // 资料下载
  checkFile(e) {
    // 统计次数
    util.requestApi('datadownload/countdatadownload/' + e.currentTarget.dataset.id, 'PUT', {}).then(res => {});
    wx.downloadFile({
      url: 'https://www.yjhlcity.com/InfoIssue/route/file/downloadfile/false/' + e.currentTarget.dataset.file,
      success: function (res) {
        console.log(res)
        var Path = res.tempFilePath;
        wx.openDocument({
          filePath: Path,
          success: function (res) {
            console.log('打开文档成功')
          }
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   tit: options.tit
    // })
    this.getInfo()
    this.getDataList()
    this.getFiles()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getInfo()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getInfo()
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