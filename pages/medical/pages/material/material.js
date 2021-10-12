// pages/medical/pages/material/material.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadUrl: app.globalData.baseImgUrl,
    baseImg: 'https://www.yjhlcity.com/InfoIssue/miniapp',
    tit: '',
    dataList: []
  },
  getData() {
    let self = this
    util.requestApi('datadownload/listpagedatadownloadApp', 'GET', {}).then(res => {
      console.log(res.data.rows)
      if (res.statusCode == 200) {
        self.setData({
          dataList: res.data.rows
        })
      } else {
        wx.showToast({
          title: '数据加载失败',
          icon: 'error',
        })
      }
    });
  },

  loadFile(e) {
    let self=this
    wx.showLoading({
      title: '请稍等...'
    });
    wx.getSavedFileList({ // 获取文件列表
      success(res) {
        res.fileList.forEach((val, key) => { // 遍历文件列表里的数据
          // 删除存储的垃圾数据
          wx.removeSavedFile({
            filePath: val.filePath
          });
        })
      }
    })
    let url = e.currentTarget.dataset.url
    let id = e.currentTarget.dataset.id
    wx.downloadFile({
      url: this.data.loadUrl + url,
      success: function (res) {
        const tempFilePath = res.tempFilePath;
        // 保存文件
        wx.saveFile({
          tempFilePath,
          success: function (res) {
            self.changeLoadNum(id)
            const savedFilePath = res.savedFilePath;
            // 打开文件
            wx.openDocument({
              filePath: savedFilePath,
              success: function (res) {
                console.log('打开文档成功')
                wx.hideLoading()
              },
            });
          },
          fail: function (err) {
            console.log('保存失败：', err)
            wx.hideLoading()
          }
        });
      },
      fail: function (err) {
        console.log('下载失败：', err);
        wx.hideLoading()
      },
    });
  },
  changeLoadNum(dataDownloadId){
    util.requestApi('datadownload/countdatadownload/'+dataDownloadId, 'PUT', {}).then(res => {
      console.log(res)
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tit: options.tit
    })
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