// pages/life/pages/car/car.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
    tabId:0,
		tabName:['人找车','车找人','货找车','车找货'],
    infotypeid: 'c886bcdf-47b0-41f5-8f40-055695a54a8a',
    page: 1,
    dataList: [],
  },
  selectTab:function(e){
		this.setData({
      dataList: [],
      tabId:e.detail.TabCur
      
    })
    if (this.data.tabId == 0) {
      this.setData({
        infotypeid: 'c886bcdf-47b0-41f5-8f40-055695a54a8a'
      })

    } else if (this.data.tabId == 1) {
      this.setData({
        infotypeid: '6aa46fa0-7139-4e68-a267-f2169b4bc799'
      })

    } else if (this.data.tabId == 2) {
      this.setData({
        infotypeid: '8af7308e-0fb3-493e-843c-546b3609affb'
      })

    } else if (this.data.tabId == 3) {
      this.setData({
        infotypeid: '5a67a017-631b-43a0-a797-9b862371295c'
      })
    } 
    this.getDataList();
	},

  getDataList: function () {
    //加载新闻列表
    data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
      this.setData({
        dataList: this.data.dataList.concat(dataList)
      })
      console.log(this.data.dataList);
    })
  },
  onLoad: function (options) {
    this.getDataList();
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