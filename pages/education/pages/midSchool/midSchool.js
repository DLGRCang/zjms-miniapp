// pages/education/pages/midSchool/midSchool.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
    infotypeid: '2ab7f5af-a837-4fa7-9e0d-7bbc0a9580d1',
    infotypeid1: 'd62ab2e0-dffd-43fd-bbb6-c45f29cbe61e',
    page:1,
    dataList: [], //小学学校
    dataList1: [], //中学学校
  },
  goDetail(e) {
    console.log(e)
    util.pageJumpTo('../schoolDetail/schoolDetail', 'id', e.currentTarget.dataset.id)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getDataList: function () {
		//加载数据列表
		data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
			this.setData({
        dataList: this.data.dataList.concat(dataList),
      })
			console.log(this.data.dataList);
    })
    data.getArtelData(this.data.infotypeid1, this.data.page).then(dataList => {
			this.setData({
        dataList1: this.data.dataList1.concat(dataList),
      })
			console.log(this.data.dataList1);
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