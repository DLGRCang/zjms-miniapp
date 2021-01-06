// pages/publish/pages/pushBest/pushBest.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar:app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    imgUrl: app.globalData.imgUrl,
    TabCur: 0,
    tabName: ["最美家庭", "新时代好少年", "三八红旗手"],
    homeList:[],
    baseImgUrl:app.globalData.baseImgUrl,
   
  },
  apply(){
    //申请最美家庭
    if(this.data.TabCur==0){
      util.pageJump('/pages/publish/pages/applyBestFamily/applyBestFamily')
    }
  },
  //切换顶部tab
  selectTab: function (e) {

    this.setData({
      TabCur: e.detail.TabCur
    })
  },
  getBestHome(){
    util.requestApi('beautifulfamily/listbeautifulfamily', 'GET', {}).then(res => {

			console.log(res)
			if (res.statusCode == 200) {
        this.setData({
          homeList:res.data
        })
			} else {
        util.showToast("数据加载失败");
			}
		});
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBestHome()
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