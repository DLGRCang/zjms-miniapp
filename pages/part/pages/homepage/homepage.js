// pages/part/pages/homepage/homepage.js
const app = getApp()
const util = require('../../../../utils/util.js')
const part = require('../../../../utils/part.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    baseImgUrl: app.globalData.baseImgUrl,
    arrayList: [
      ['阿勒腾席热镇'],
      ['园林社区', '通格朗社区', '纳林高勒社区', '札萨克社区', '满达社区', '平安社区', '文明街社区', '恩可社区', '阿吉奈社区', '乌兰淖尔社区', '吉日嘎朗社区', '南苑社区', '新北社区', '王府路社区'],
    ],
    multiIndex: [0, 0],
    bsSQ: '',
    users: {},
    userInfo: wx.getStorageSync('userInfo'),
    bd: '报道',
    baseUrl: part.baseUrl,
    FMUrl: '',
    SQ: null,
    SH: null,
    ZC: null,
  },

  // 报道
  bdList(e) {
    if (this.data.bd === '已报到') {
      return
    }
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  closeBd(e) {
    this.setData({
      modalName: null,
      bd: '已报到'
    })
  },
  // 社区选择
  sqChange: function (e) {
    console.log(this.data.arrayList[0][e.detail.value[0]] + this.data.arrayList[1][e.detail.value[1]])
    this.setData({
      multiIndex: e.detail.value,
      bsSQ: this.data.arrayList[0][e.detail.value[0]] + this.data.arrayList[1][e.detail.value[1]]
    })

  },

  // 社区活动
  getActiveList() {
    let url = part.baseUrl + 'taskMeeting/actListJs?ACTID=1220';
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.data.pdList[0])
      if (res.data.code == 200) {
        this.setData({
          SQ: res.data.data.pdList[0],
          FMUrl: res.data.data.pdList[0].FENG_MIAN_TU.PATH
        })
      } else {
        let msg = res.data.msg
        wx.showToast({
          title: msg,
          icon: 'nZList'
        })
      }
    });
  },
  // 生活服务
  getSHList() {
    let url = part.baseUrl + 'taskMeeting/actListJs?ACTID=1224';
    part.httpRequest(url, 'GET', {}).then(res => {
      if (res.data.code == 200) {
        let SH = []
        SH.push(res.data.data.pdList[0])
        SH.push(res.data.data.pdList[1])
        this.setData({
          SH: SH
        })
      } else {
        let msg = res.data.msg
        wx.showToast({
          title: msg,
          icon: 'none'
        })
      }
      
    });
  },
  // 政策
  getZCList() {
    let url = part.baseUrl + 'taskMeeting/actListJs?ACTID=1222';
    part.httpRequest(url, 'GET', {}).then(res => {
      if (res.data.code == 200) {
        this.setData({
          ZC: res.data.data.pdList
        })
      } else {
        let msg = res.data.msg
        wx.showToast({
          title: msg,
          icon: 'nZList'
        })
      }
    });
  },
  // 获取个人信息
  getUserInfo() {
    let url = part.baseUrl + 'itemuser/getDepByID?USER_ID=' + this.data.userInfo.USER_ID
    part.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.data)
      console.log(res.data.data.ADDRESS)

      if (res.data.code == 200) {
        this.setData({
          users: res.data.data
        })
      } else {
        let msg = res.data.msg
        wx.showToast({
          title: msg,
          icon: 'nZList'
        })
      }
    });
  },

  // 个人中心
  goUserCenter() {
    util.pageJump('../success/success')
  },
  // 党员随手拍
  goPhoto(e) {
    util.pageJumpTo('../photo/photo','id', e.currentTarget.dataset.id)
  },
  // 详情
  goDetail(e) {
    util.pageJumpTo('../detail/detail', 'id', e.currentTarget.dataset.id)
  },
  // 更多
  goSQMore() {
    util.pageJump('../sQMore/sQMore')
  },
  goSHMore() {
    util.pageJump('../sHMore/sHMore')
  },
  goZCMore() {
    util.pageJump('../zCMore/zCMore')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.getActiveList()
    this.getSHList()
    this.getZCList()
    this.getUserInfo()
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
    return {
      path: '//pages/part/pages/homepage/homepage',
    }
  },
  onShareTimeline(e) {
    return {
      title: "一手办",
      query: '//pages/part/pages/homepage/homepage',
    }
  },
})