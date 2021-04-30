// pages/part/pages/photo/photo.js
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
    userInfo: wx.getStorageInfoSync("userInfo"),
    userID: '',
    title: '',
    content: '',
    typeList: [
      {
        id: 1220,
        name: '矛盾化解',
      },
      {
        id: 1221,
        name: '环境整治',
      },
      {
        id: 1222,
        name: '政策宣传',
      },
      {
        id: 1223,
        name: '困难帮助',
      },
      {
        id: 1224,
        name: '文化艺术',
      },
      {
        id: 1286,
        name: '微心愿',
      },
      {
        id: 1287,
        name: '其他',
      }
    ],
    index: 0,
    type: '',
    area: '',
    pernum: '',
    imgID: '',
    imgList: [],
    hdDate: util.formatDate(new Date()),
  },

  // 获取标题
  getTitle(e) {
    this.setData({
      title: e.detail.value
    })
  },
  // 获取内容
  getContent(e) {
    this.setData({
      content: e.detail.value
    })
  },

  // 获取类型
  getType(e) {
    this.setData({
      index: e.detail.value,
      type: this.data.typeList[e.detail.value].id
    })
  },
  getArea(e) {
    this.setData({
      area: e.detail.value
    })
  },
  getPernum(e) {
    this.setData({
      pernum: e.detail.value
    })
  },
  getDate(e){
    this.setData({
      hdDate: e.detail.value
    })
  },
  // 数据提交
  submit() {
    let url = 'taskMeeting/saveMeetPlan?TITLE=' + this.data.title + '&CONTENTDETAIL=' + this.data.content + '&DICT_ID=' + this.data.type + '&PLACE=' + this.data.area + '&INPUT_USER=' + this.data.userID + '&PERNUM=' + this.data.pernum + '&FENGMIAN=' + this.data.imgID +'&PUBLISHDATE=' +this.data.hdDate
    part.httpRequest(part.baseUrl + url, 'POST', {}).then(res => {
      console.log(res)
      part.returnCode(res.data.code, 200)
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
    this.setData({
      userID: options.id
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