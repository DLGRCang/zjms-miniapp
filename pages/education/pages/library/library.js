// pages/education/pages/library/library.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
    imgUrl:app.globalData.imgUrl,
    infotypeid: 'a771710c-a822-4984-aef0-042d54293759',
    page:1,
		dataList: [], //新闻列表
    key:'',
    bookList:null,
    tit:''
  },


  getDataList: function () {
		//加载数据列表
		data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
			this.setData({
				dataList: this.data.dataList.concat(dataList)
			})
			console.log(this.data.dataList);
		})
  },
  getKey(e){
    console.log(e.detail.value)
    this.setData({
      key:e.detail.value
    })
  },
  goSearch(){
    let that = this;
    let data= {
      q:this.data.key
    };
    console.log(data)
    util.requestApi('library/searchLibrary', 'GET', data).then(res => {
      console.log(res)
      that.setData({
        bookList: res.data.bookList
      })
    })
  },
  goHotSearch(e){
    let that = this;
    let data= {
      q:e.currentTarget.dataset.id
    };
    util.requestApi('library/searchLibrary', 'GET', data).then(res => {
      console.log(res.data.bookList)
      that.setData({
        bookList: res.data.bookList
      })
    })
  },

    /**
   * 生命周期函数--监听页面加载
   */
	onLoad: function (options) {
    this.setData({
      tit:options.tit
    })
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