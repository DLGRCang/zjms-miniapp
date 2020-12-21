// pages/education/pages/transfer/transfer.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
    infotypeid: ' 97efc93d-0bd7-43a9-9761-239e264fec65',
    page:1,
		dataList: [], //新闻列表
  },
  uploadFile:function(){
    wx.chooseImage({
      success (res) {
        const tempFilePaths = res.tempFilePaths

//http://219.159.20.229:443/GovNetMS_Interface/file/appUploadFile
        wx.uploadFile({
          url: 'http://192.168.1.114:8004/InfoIssue/app/release/file/uploadfile', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'token': ''
          },
          success (res){
            const data = res.data
            console.log(res)
            //do something
          },
        })
      }
    })
  } ,
  /**
   * 生命周期函数--监听页面加载
   */
  getDataList: function () {
		//加载数据列表
		data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
			this.setData({
				dataList: this.data.dataList.concat(dataList)
			})
			console.log(this.data.dataList);
		})
	},
	onLoad: function (options) {
		this.getDataList()
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