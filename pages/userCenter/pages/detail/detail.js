// pages/userCenter/pages/detail/detail.js
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
    index:0,
    status:["未支付", "已支付", "已取消", "已收货", "已退货", "换货中","货到付款"],
    oredrid: '',
    storeid: '',
    shooppingid: '',
    goodsInfo:null,
    address:'',
    receiptpeople:'',
    receiptphone:'',
    orderformid:'',
    placetime:'',
  },

  // 查询数据
  getDetailInfo() {
    // 商品详情
    let url = this.data.baseUrl + 'app/release/api/commoditydetails/getcommoditydetails/' + this.data.shooppingid;
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data)
      this.setData({
        goodsInfo: res.data
      })
    });
  },
  // 
  statusChange(e){
    console.log(e.detail.value);
    this.setData({
      index: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      oredrid: options.oredrid,
      storeid: options.storeid,
      shooppingid: options.shooppingid,
      receiptphone:options.receiptPhone,
      address:options.address,
      receiptpeople:options.receiptPeople,
      orderformid:options.orderformid,
      placetime:options.placetime
    })
    this.getDetailInfo()
  },
  submit(){
    let url = this.data.baseUrl + 'app/order/updateorderstate?orderId=' + this.data.oredrid+"&orderState="+this.data.index;
    util.httpRequest(url, 'PUT', {}).then(res => {
      console.log(res.statusCode)
      if(res.statusCode===200){
        wx.showToast({
          title: "提交成功",
          icon: 'success',
          mask: true,
          success(res) {
            setTimeout(() => {
              wx.navigateBack({
                delta: 2
              })
            }, 1000)
          }
        });
      }else{
        wx.showToast({
          title: res.data.msg,
          icon: 'error',
        })
      }
  
    });
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