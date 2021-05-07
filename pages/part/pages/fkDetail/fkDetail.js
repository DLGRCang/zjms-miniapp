// pages/part/pages/fkDetail/fkDetail.js
const app = getApp()
const util = require('../../../../utils/util.js')
const part = require('../../../../utils/part.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    baseImgUrl: app.globalData.baseImgUrl,
    baseUrl: part.baseUrl,
    id: '',
    imgID:'',
    imgList: [],
  },
  // 获取内容
  getContent(e) {
    this.setData({
      content: e.detail.value
    })
  },

  // 数据提交
  submit() {
    let url = 'taskMeeting/MeetAttendance?ACTIVITY_ID=' + this.data.id + '&TRENDS_CONTENT=' + this.data.content + '&TRENDS_FILE=' + this.data.imgID
    console.log(url)
    part.httpRequest(part.baseUrl + url, 'POST', {}).then(res => {
      console.log(res)
      if (res.data.code == 200) {
        wx.showToast({
          title: "提交成功",
          icon: 'success',
          mask: true,
          success(res) {
            setTimeout(() => {
              wx.navigateBack({
                delta: 4
              })
            }, 1000)
          }
        });
      } else {
        wx.showToast({
          title: '请检查数据',
          icon: 'error',
        })
      }
    });
  },
  // 选择图片
  ChooseImage() {
    let that = this
    wx.chooseImage({
      count: 1, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], //从相册选择
      success: (res) => {
        this.setData({
          imgList: this.data.imgList.concat(res.tempFilePaths)
        })
        const tempFilePaths = res.tempFilePaths
        part.uploadFile(tempFilePaths[0], 'file').then(res => {
          if (res.statusCode == 200) {
            let dataObj = JSON.parse(res.data)
            that.setData({
              imgID: dataObj.data.ID
            })
            wx.showToast({
              title: '上传成功',
              icon: 'none'
            })
          } else {
            wx.showToast({
              title: '上传失败',
              icon: 'none'
            })
          }
        });
      }
    });
  },
  // 回显
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      // title: '召唤师',
      content: '确定要删除吗？',
      cancelText: '再看看',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      id : options.id
    })
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