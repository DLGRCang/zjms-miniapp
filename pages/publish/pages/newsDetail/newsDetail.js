const app = getApp()
const util = require('../../../../utils/util.js')
var WxParse = require('../../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    baseImgUrl:app.globalData.baseImgUrl,
    id: 0,
    info: [],
    info_content: '',
    info_source: '',
    info_detail: '',
    publishdate: '',
    info_videos:'',
    praise: "",
    status: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var id = options.id;
    var info_content = options.info_content;
    var info_source = options.info_source;
    var info_detail = decodeURIComponent(options.info_detail);
    var publishdate = options.publishdate;
    var info_videos = options.info_videos;
    this.setData({
      id: id,
      info_content: info_content,
      info_source: info_source,
      info_detail: info_detail,
      publishdate: publishdate,
      info_videos:info_videos
    })
    console.log(this.data.publishdate)
    //**
    // * WxParse.wxParse(bindName , type, data, target,imagePadding)
    // * 1.bindName绑定的数据名(必填)
    // * 2.type可以为html或者md(必填)
    // * 3.data为传入的具体数据(必填)
    // * 4.target为Page对象,一般为this(必填)
    // * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
    // */
    let that = this;
    WxParse.wxParse('dataHtml', 'html', info_detail, that, 5)
    //console.log(info_detail);
  },
  //点赞
  goPraise() {
    if (this.data.status) {
     // console.log(111111111)
    }
    this.setData({
      praise: "praise",
      status: false,
    })
  },
  //评论
  comment(){

  },

  
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
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
    return {
      path: '//pages/publish/pages/newsDetail/newsDetail',
    }
  },
  onShareTimeline(e) {
    return {
      title: "一手办",
      query: '//pages/publish/pages/newsDetail/newsDetail',
    }
  },

})