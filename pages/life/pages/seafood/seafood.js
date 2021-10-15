// pages/life/pages/seafood/seafood.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
const login = require('../../../../utils/login.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit: '',
    imgUrl: app.globalData.imgUrl,
    page: 1,
    dataList: [],
    infotypeid1: '02f55284-3738-4fd2-9d81-b8894db8f1da', //生鲜商家
    dataList1: [],
  },
  //生鲜发布
  addMove(e) {
    //判断是否登录
    if (!login.isLogin()) return
    util.pageJump('../publishSeafood/publishSeafood')
  },
  goDetail(e){
    console.log(e.currentTarget.dataset.index)
    let index=e.currentTarget.dataset.index
    let title=this.data.dataList[index].title
    let content=this.data.dataList[index].content
    let linkman=this.data.dataList[index].linkman
    let linkphone=this.data.dataList[index].linkphone
    let gmt_create=this.data.dataList[index].gmt_create

    // util.pageJump('../needDetail/needDetail')
    util.pageJump('../needDetail/needDetail?title='+title+"&content="+content+"&linkman="+linkman+"&linkphone="+linkphone+"&gmt_create="+gmt_create)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  getDataList: function () {
    //加载生鲜商家列表
    data.getArtelData(this.data.infotypeid1, this.data.page).then(dataList => {
      this.setData({
        dataList1: this.data.dataList1.concat(dataList)
      })
      console.log(this.data.dataLis1t);
    })
  },
  getNeedList() {
    let data = {
      page: 1,
      rows: 10
    }
    util.requestData('fruit/listfruitrelease', 'GET', data).then(res => {
      console.log(res)
        this.setData({
          dataList:res.data.rows
        })
    })
  },
  onLoad: function (options) {
    this.setData({
      tit: options.tit
    })
    this.getDataList();
    this.getNeedList();
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