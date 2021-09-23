// pages/charm/pages/taskFk/taskFk.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    vehicleImages: [], //图片url
    vehicleImagesId: [], //图片
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
      "taskfile":this.data.vehicleImagesId.join(","),
      "taskpersonid":wx.getStorageSync('taskUserInfo').taskPersonId,
      "taskname":this.data.taskName
    }
    console.log(data)
    util.requestData('taskinfo/fankuirelease', 'POST', data).then(res => {
      console.log(res)
      if (res.data == {}) {
        wx.showToast({
          title: "发布成功",
          icon: 'success',
          mask: true,
          success(res) {
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              })
            }, 2000)
          }
        });
      }else{
        wx.showToast({
          title: "服务器异常，请稍后再试",
          icon: 'none',
          mask: true,
          success(res) {
            setTimeout(() => {
              wx.navigateBack({
                delta: 1
              })
            }, 2000)
          }
        });
      }
    })
  },

 //图片上传 
 ChooseImage() {
  wx.chooseImage({
    count: 1, //默认9
    sizeType: ['original', 'compressed'],
    sourceType: ['album', 'camera'],
    success: (res) => {
      let imgUrl = res.tempFilePaths[0]
      util.uploadFile(imgUrl, 'image')
        .then(res => {
          if (res.statusCode == 200) {
            let obj = JSON.parse(res.data)
            console.log(obj)
            let vehicleImagesId = this.data.vehicleImagesId;
            let vehicleImages = this.data.vehicleImages;
            vehicleImagesId.push(obj.data)
            vehicleImages.push(imgUrl)
            console.log(vehicleImagesId)
            console.log(vehicleImages)
            this.setData({
              vehicleImagesId: vehicleImagesId,
              vehicleImages: vehicleImages
            })
          } else {
            util.showToast('图片上传失败')
          }
        });
    }
  });
},
ViewImage(e) {
  wx.previewMedia({
    sources: [{
      url: e.currentTarget.dataset.url,
      type: e.currentTarget.dataset.type
    }],
  });
},
DelImg(e) {
  wx.showModal({
    content: '确定要删除吗？',
    cancelText: '再想想',
    confirmText: '确定',
    success: res => {
      if (res.confirm) {
        this.data.vehicleImagesId.splice(e.currentTarget.dataset.index, 1);
        this.data.vehicleImages.splice(e.currentTarget.dataset.index, 1);
        this.setData({
          vehicleImagesId: this.data.vehicleImagesId,
          vehicleImages: this.data.vehicleImages
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