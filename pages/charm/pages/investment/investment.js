// pages/charm/pages/historyCulture/historyCulture.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    tabName: ["招商宣传", "优惠政策", "优质项目"],
    tabBar: 0,

    infotypeid: '30547316-78f2-4411-8d56-9c88ccd280f2',
    page: 1,
    artelList: [], //数据列表
  },
  selectTab: function (e) {
    this.setData({
      artelList: [], //数据列表置空

    })
    this.setData({
      tabBar: e.detail.TabCur
    })
    if (this.data.tabBar == 0) {
      this.setData({
        infotypeid: '30547316-78f2-4411-8d56-9c88ccd280f2'
      })
    } else if (this.data.tabBar == 1) {
      this.setData({
        infotypeid: 'f57cb2f7-f0dc-4d93-a260-2e1334baf95a'
      })
    } else if (this.data.tabBar == 2) {
      this.setData({
        infotypeid: '69897ca7-1974-49a5-9521-23a92359dd86'
      })
    }
    this.getDataList();
  },
  //测试点击量
  getDataTest() {
    util.requestApi('businesstatistic/businesStatisticTop', 'GET', {}).then(res => {
      console.log(res)
    });
  },
  getDataList: function () {
    //加载一村一品合作社列表
    data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
      this.setData({
        artelList: this.data.artelList.concat(dataList)
      })
      console.log(this.data.artelList);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getDataTest();
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