// pages/help/pages/insuredForm/insuredForm.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    imageArr: [],
    fileState: '点击添加',
    userName: '', //申请人姓名
    userPhone: '', //申请人联系方式
    userCard: '',
    userArea: '',
    userAddress: '',
    applyFile: '', //申请人材料（,隔开的字符串）
  },
  putData(e) {
    let key = e.currentTarget.dataset.key
    console.log(key)
    this.setData({
      [key]: e.detail.value
    })
  },
  addFile() {
    let that = this
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success(res) {
        const tempFilePash = res.tempFiles[0].path
        util.uploadFile1(tempFilePash, 'file').then(res => {
          console.log(res)
          if (res.statusCode == 200) {
            let obj = JSON.parse(res.data)

            that.setData({
              fileState: '上传成功',
              applyFile: obj.data,

            })
          } else {
            that.setData({
              fileState: '上传失败',
            })
          }
        });
      }
    })
  },
  //图片上传
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        let filePath = res.tempFilePaths[0]
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0], //选择图片返回的相对路径
          encoding: 'base64', //编码格式
          success: res => { //成功的回调
            if (this.data.imageArr.length != 0) {
              this.setData({
                imgList: this.data.imgList.concat(filePath),
                imageArr: this.data.imageArr.concat('data:image/png;base64' + ',' + res.data),
              })
            } else {
              this.setData({
                imgList: [filePath],
                imageArr: ['data:image/png;base64' + ',' + res.data],
              })
            }
          }
        })
      }
    });
  },
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
      cancelText: '再想想',
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
  commitData() {
    let data = {
      userId: wx.getStorageSync("userId"), //用户id
      userName: this.data.userName,
      userPhone: this.data.userPhone,
      applyFile: this.data.applyFile,
      userCard: this.data.userCard,
      userArea: this.data.userArea,
      userAddress: this.data.userArea,
    }
    util.checkIdCard(this.data.userCard)
    util.checkPhone(this.data.userPhone)
    if (this.data.userName == '' || this.data.userName == null) {
      util.showToast('姓名不能为空')
      return
    }
    if (this.data.userArea == '' || this.data.userArea == null) {
      util.showToast('现居住地址不能为空')
      return
    }
    if (this.data.userAddress == '' || this.data.userAddress == null) {
      util.showToast('户籍所在地不能为空')
      return
    }
    util.returnCode(200, 200, 2)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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