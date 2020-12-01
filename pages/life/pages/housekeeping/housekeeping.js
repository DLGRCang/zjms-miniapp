const app = getApp()
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl:app.globalData.imgUrl,
    infotypeid: 'b2ca93cd-80d8-46d8-a680-664b91215087',
    infotypeid1: '7d2945b5-77e3-41a2-b43f-6239911cf3ae',
    infotypeid2: '400f438d-68c5-420f-94e5-c59fc936cb36',
    infotypeid3: 'c9165b43-bf54-45ec-bff1-feadac073e5b',
    infotypeid4: '81aadffd-b36d-41df-a54e-e0e60bfdab5b',
    page:1,
    dataList: [], //搬家装修
    dataList1: [], //保姆月嫂
    dataList2: [], //保洁疏通
    dataList3: [], //家电维修
    dataList4: [], //修锁换锁
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
    data.getArtelData(this.data.infotypeid2, this.data.page).then(dataList => {
			this.setData({
        dataList2: this.data.dataList2.concat(dataList),
      })
			console.log(this.data.dataList2);
    })
    data.getArtelData(this.data.infotypeid3, this.data.page).then(dataList => {
			this.setData({
        dataList3: this.data.dataList3.concat(dataList),
      })
			console.log(this.data.dataList3);
    })
    data.getArtelData(this.data.infotypeid4, this.data.page).then(dataList => {
			this.setData({
        dataList4: this.data.dataList4.concat(dataList),
      })
			console.log(this.data.dataList4);
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