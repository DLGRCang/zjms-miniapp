// pages/education/pages/studentHelp/studentHelp.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    infotypeid:'a23c14ed-8924-4708-90e4-ea55a7493d99',
    dataList:[],
		imgUrl:app.globalData.imgUrl,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< Updated upstream

=======
   	//加载学生资助列表
		data.getArtelData(this.data.infotypeid).then(dataList => {
      this.setData({
        dataList: dataList
      })
      console.log(this.data.dataList);
    }
  )
>>>>>>> Stashed changes
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