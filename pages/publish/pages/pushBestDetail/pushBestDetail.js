// pages/publish/pages/pushBestDetail/pushBestDetail.js
const app = getApp()
const util = require('../../../../utils/util.js')
var WxParse = require('../../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseImgUrl:app.globalData.baseImgUrl,
    id:'',
    tab:'',
    familyDetail:{},
    sbDetail:{},
    newDetail:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id,
      tab:options.tab
    })
    this.getFamilyDetailInfo()
    this.getWomanpacesetterDetailInfo()
    this.getNewDetailInfo()
  },
  // 获取最美家庭详情
  getFamilyDetailInfo(){
    util.requestApi('beautifulfamily/getbeautifulfamily/'+this.data.id, 'GET', {}).then(res => {
			console.log(res.data.briefIntroductionofMainEvents)
			if (res.statusCode == 200) {
        WxParse.wxParse('dataHtml', 'html', res.data.briefIntroductionofMainEvents, this, 5)
        this.setData({
          familyDetail:res.data
        })
			} else {
        util.showToast("数据加载失败");
			}
		});
  },
  // 获取三八红旗手详情
  getWomanpacesetterDetailInfo(){
    util.requestApi('womanpacesetter/getwomanpacesetter/'+this.data.id, 'GET', {}).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
        WxParse.wxParse('dataHtmls', 'html', res.data.mainStory, this, 5)
        this.setData({
          sbDetail:res.data
        })
			} else {
        util.showToast("数据加载失败");
			}
		});
  },
   // 获取新时代好少年详情
   getNewDetailInfo(){
    util.requestApi('goodboy/getgoodboy/'+this.data.id, 'GET', {}).then(res => {
      console.log(1111111111111111)
      console.log(res.data)
      console.log(res)   
      console.log(1111111111111)
			if (res.statusCode == 200) {
        WxParse.wxParse('dataHtml', 'html', res.data.mainStory, this, 5)
        this.setData({
          newDetail:res.data
        })
			} else {
        util.showToast("数据加载失败");
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