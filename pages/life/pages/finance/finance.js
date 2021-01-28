// pages/life/pages/finance/finance.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    infotypeid: 'b9599c28-a954-412e-a34c-30c899dfe72f', //政策通知
    page: 1,
    dataList: [],
    financialSupermarket: [{
      'name': '伊旗建设银行',
      'img': 'jiansheyinhang.png'
    }, {
      'name': '金谷村镇银行',
      'img': 'jinguyinhang.png'
    }, {
      'name': '工商银行',
      'img': 'gongshangyinhang.png'
    }, {
      'name': '伊旗农业银行',
      'img': 'nongyeyinhang.png'
    }, {
      'name': '招商银行',
      'img': 'zhaoshangyinhang.png'
    }, {
      'name': '邮政银行',
      'img': 'youzhengyinhang.png'
    }, ]
  },
  //贷款申请
  loansForm(){
    util.pageJump('/pages/life/pages/financeLoans/financeLoans')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getDataList: function () {
    //加载新闻列表
    data.getArtelData(this.data.infotypeid, this.data.page, 3).then(dataList => {
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