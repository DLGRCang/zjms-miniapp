// pages/help/pages/fasthelp/fasthelp.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    tab: ["妇联求助", "公安求助", "法院求助", "调解求助"],
    typeName: '妇联求助',
    dataList:[],
    TabCur: 0,
    scrollLeft: 0
  },
  //获取数据列表
  getData() {
    util.requestApi('fasthelp/listpagefasthelp?typeName=' + this.data.typeName, 'GET', {}).then(res => {
      console.log(res)
      if (res.statusCode == 200) {
        this.setData({
          dataList: res.data.rows,
        })
      } else {
        util.showToast('数据加载失败')
      }
    });
  },

  tabSelect(e) {
    let index=e.currentTarget.dataset.id
    this.setData({
      TabCur: index,
      scrollLeft: (index - 1) * 60,
      typeName: this.data.tab[index]
    })
    console.log(this.data.TabCur)
    console.log(this.data.typeName)
    this.getData()
  },
  goArea(e){
    let name=e.currentTarget.dataset.tel
    let lng=e.currentTarget.dataset.lng
    let lat=e.currentTarget.dataset.lat
    util.routePlan(name,lat,lng)
  },
  goTel(e) {
    util.callPhone(e.currentTarget.dataset.tel)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData()
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