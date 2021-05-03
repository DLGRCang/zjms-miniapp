// pages/userCenter/pages/order/order.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseImgUrl: "http://127.0.0.1:8005/cmmall/route/file/showfile/image/",
    baseUrl: 'http://172.16.20.156:8005/cmmall/',
    userId: wx.getStorageSync('userId'),
    TabCur: 0,
    orderState: 1,
    pageTabs: ["未支付", "已支付", "已取消", "已收货", "已退货", "换货中","货到付款"],
    listInfo: null,

  },
  // 选择
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      orderState: e.currentTarget.dataset.id,
    })

      this.getListInfo(e.currentTarget.dataset.id)

  },
  // 查询数据
  getListInfo(state) {
    let url = this.data.baseUrl + 'app/order/listpageorder?buy_peop_id=' + this.data.userId + '&order_state=' + state;
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.rows)
      this.setData({
        listInfo: res.data.rows
      })
    });
  },
  // 查看详情
  goDetail(e) {
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: '../detail/detail?oredrid=' + e.currentTarget.dataset.oredrid + "&shooppingid=" + e.currentTarget.dataset.shooppingid + "&storeid=" + e.currentTarget.dataset.storeid + "&address=" + e.currentTarget.dataset.address + "&receiptPeople=" + e.currentTarget.dataset.receiptpeople + "&receiptPhone=" + e.currentTarget.dataset.receiptphone + "&orderformid=" + e.currentTarget.dataset.orderformid + "&placetime=" + e.currentTarget.dataset.placetime,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getListInfo(0)
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