// pages/education/pages/studentHelp/studentHelp.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infotypeid: 'a23c14ed-8924-4708-90e4-ea55a7493d99',
    page: 1,
    dataList: [],
    imgUrl: app.globalData.imgUrl,
    name:'',
    show:false,
    item:['幼儿园','初高中','大学']

  },
  confirm(e){
    console.log("点击确定")
    if(e.detail.chooseItem==0){
      util.pageJump('../studentHelpApply/studentHelpApply')
    }
    if(e.detail.chooseItem==1){
      util.pageJump('../studentHelpApply2/studentHelpApply2')
    }
    if(e.detail.chooseItem==2){
      util.pageJump('../studentHelpApply3/studentHelpApply3')
    }
  },
  cancel(){
    console.log("点击取消")
  },
  goForm() {
    this.setData({
      show:true
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
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
    this.setData({
      page: 1
    })
    this.getDataList();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      page: page++
    })
    this.getDataList();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})