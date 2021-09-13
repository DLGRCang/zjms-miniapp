// pages/charm/pages/taskFk/taskFk.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    imageArr: [],
    imgList: [],
    endDate: util.formatDate(new Date()),
    persent: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
    taskName:'',
    taskID:'',
    taskjd: "100%",
    taskInfo:'',
    index: 0,

  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value,
      taskjd: this.data.persent[e.detail.value]
    })
  },
  dateChange(e) {
    this.setData({
      endDate: e.detail.value
    })
  },
  putData(e) {
    let key = e.currentTarget.dataset.key
    console.log(key)
    this.setData({
      [key]: e.detail.value
    })
  },
  //提交数据 
  commitData() {
    let data =
    {
      "taskinfoid": this.data.taskID,//（任务id）
      "taskjd": this.data.taskjd,
      "taskcontent":this.data.taskInfo,
      "taskfile":"",
      "taskpersonid":wx.getStorageSync('taskUserInfo').taskPersonId,
      "taskname":this.data.taskName
    }
    console.log(data)
    util.requestData('taskinfo/fankuirelease', 'POST', data).then(res => {
      console.log(res)
      if(res.data=={}){
        wx.showToast({
          title: '反馈成功',
          icon:'none'
        })
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      taskID:options.id,
      taskName:options.name
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