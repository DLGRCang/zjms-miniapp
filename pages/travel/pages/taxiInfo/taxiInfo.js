// pages/travel/pages/taxiInfo/taxiInfo.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    CustomBar: app.globalData.CustomBar,
    taxiInfo: [],
    key:'',
    taxiDetail:null
  },
  getInfo() {
    let that = this;
    util.requestApi('taxi/listtaxi', 'GET', {}).then(res => {
      console.log(res.data)
      that.setData({
        taxiInfo: res.data
      })
    })
  },
  goPhone(e) {
    util.callPhone(e.target.dataset.phone); 
  },
  getKey(e){
    console.log(e.detail.value)
    this.setData({
      key:e.detail.value
    })
  },
  goSearch(){
    let that = this;
    let data= {};
    util.requestApi('taxi/search/'+this.data.key, 'GET', data).then(res => {
      console.log(res.data)
      that.setData({
        taxiDetail: res.data
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInfo();
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