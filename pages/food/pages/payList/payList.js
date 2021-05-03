// pages/food/pages/payList/payList.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseImgUrl: "http://127.0.0.1:8005/cmmall/route/file/showfile/image/",
    baseUrl: 'http://172.16.20.156:8005/cmmall/',
    id: '',
    pay: ['在线支付', '货到付款',],
    button: '立即下单',
    buyPersionId: wx.getStorageSync("userId"),
    user: '',
    phone: '',
    area: '',
    goodsInfo: null,
    orderState: 6,
    orderFormId: '150600' + util.formatTime(new Date).replace(':', '').replace(':', '').replace('/', '').replace('/', '').replace(' ', ''),
    placeTime: util.formatDate(new Date),//下单时间
  },
  getInfo() {
    let url = this.data.baseUrl + 'app/release/api/commoditydetails/getcommoditydetails/' + this.data.id;
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data)
      this.setData({
        goodsInfo: res.data
      })
    });
  },

  selectTab(e) {
    console.log(e.detail.TabCur)
    if (e.detail.TabCur === 1) {
      this.setData({
        button: '立即下单',
        orderState: 6
      })
    } else {
      this.setData({
        button: '立即购买',
        orderState: 0
      })
    }
  },
  getUser(e) {
    console.log(e.detail.value)
    this.setData({
      user: e.detail.value
    })
  },
  getPhone(e) {
    console.log(e.detail.value)
    this.setData({
      phone: e.detail.value
    })
  },
  getArea(e) {
    console.log(e.detail.value)
    this.setData({
      area: e.detail.value
    })
  },

  goPay(e) {
    console.log(e.currentTarget.dataset)
    if (e.currentTarget.dataset === '立即购买') {
      // 购买
      // 调取微信支付

    } else {
      if (this.data.user == null || this.data.user == '') {
        wx.showToast({
          title: "收货人不能为空",
          icon: 'error',
        })
        return
      }
      if (this.data.area == null || this.data.area == '') {
        wx.showToast({
          title: "地址不能为空",
          icon: 'error',
        })
        return
      }
      if (this.data.phone == null || this.data.phone == '') {
        wx.showToast({
          title: "联系方式有误",
          icon: 'error',
        })
        return
      }
      // 下单
      let url = this.data.baseUrl + 'app/order/saveorder'
      let data = {
        address: this.data.area,
        couponId: '',
        buyPeopId: this.data.buyPersionId,
        orderFormId: this.data.orderFormId,
        payMoney: e.currentTarget.dataset.price,
        placeTime: this.data.placeTime,
        receiptPhone: this.data.phone,
        receiptPeople: this.data.user,
        shooppingId: this.data.id,
        storeId: e.currentTarget.dataset.storeid,
        orderState: this.data.orderState,
      }
      console.log(data)
      util.httpRequest(url, 'POST', data).then(res => {
        console.log(res)
        if (res.statusCode == 200) {
          wx.showToast({
            title: "提交成功",
            icon: 'success',
            mask: true,
            success(res) {
              setTimeout(() => {
                wx.navigateBack({
                  delta: 3
                })
              }, 2000)
            }
          });
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'error',
          })
        }

      });

    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getInfo()
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