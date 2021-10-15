// pages/life/pages/problem/problem.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    title:'',
    contents:'',
    type:'',
  },
  putData(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
	},
  // 选择图片
  ChooseImage() {
    wx.chooseImage({
      count: 3, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], //从相册选择
      success: (res) => {
        console.log(res.tempFiles.length)
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
          // for (i = 0; i < res.tempFiles.length; i++) {
          //   wx.uploadFile({
          //     url: util.uploadUrlImage,
          //     filePath: tempFilePaths[i],
          //     name: 'uploadfile_ant',
          //     formData: {
          //     },
          //     header: {
          //       "Content-Type": "multipart/form-data"
          //     },
          //     success: function (res) {
          //       var data = JSON.parse(res.data);
          //       console.log(data);
          //     },
          //     fail: function (res) {
          //       wx.hideToast();
          //       wx.showModal({
          //         title: '错误提示',
          //         content: '上传图片失败',
          //         showCancel: false,
          //         success: function (res) { }
          //       })
          //     }
          //   });
          // }
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
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
  	//提交数据
	commitData() {
		let data = {
      content:this.data.contents,
      picture_url:this.data.imgList.join(","),
      title:this.data.title,
      type:this.data.type

		}
		console.log(data)
		util.requestApi('problemreport/saveproblemreport', 'POST', data).then(res => {
      console.log(res)
      util.returnCode(res.statusCode,200,2)
		});
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