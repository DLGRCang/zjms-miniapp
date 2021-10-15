// pages/publish/pages/pushBest/pushBest.js
const app = getApp()
const util = require('../../../../utils/util.js')
const login = require('../../../../utils/login.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    baseImgUrl:app.globalData.baseImgUrl,
    StatusBar:app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    imgUrl: app.globalData.imgUrl,
    TabCur: 0,
    tabName: ["最美家庭", "新时代好少年", "三八红旗手"],
    homeList:[],//最美家庭列表
    getWomanpacesetterList:[],//三八红旗手列表
    getGoodboyrList:[],//新时代好少年列表
   
  },
  apply(){
      //判断是否登录
      if (!login.isLogin()) return
    //申请最美家庭
    if(this.data.TabCur==0){
      util.pageJump('/pages/publish/pages/applyBestFamily/applyBestFamily')
      return
    }
     //申请新时代好少年
     if(this.data.TabCur==1){
      util.pageJump('/pages/publish/pages/applyGoodboyr/applyGoodboyr')
      return
    }
     //申请三八红旗手
     if(this.data.TabCur==2){
      util.pageJump('/pages/publish/pages/applyWomanpacesetter/applyWomanpacesetter')
      return
    }
  },
  //切换顶部tab
  selectTab: function (e) {

    this.setData({
      TabCur: e.detail.TabCur
    })
    if(e.detail.TabCur==2){
      this.getWomanpacesetter()
    }else if(e.detail.TabCur==1){
      this.getGoodboyr()
    }else if(e.detail.TabCur==0){
      this.getBestHome()
    }
  },
  //获取最美家庭
  getBestHome(){
    let data={
      status:'通过'
    }
    util.requestApi('beautifulfamily/listbeautifulfamily', 'GET', data).then(res => {

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
  //获取三八红旗手
  getWomanpacesetter(){
    let data={
      status:'通过'
    }
    util.requestApi('womanpacesetter/listwomanpacesetter', 'GET', data).then(res => {

			console.log(res)
			if (res.statusCode == 200) {
        this.setData({
          getWomanpacesetterList:res.data
        })
			} else {
        util.showToast("数据加载失败");
			}
		});
  },
  //获取新时代好少年
  getGoodboyr(){
    let data={
      status:'通过'
    }
    util.requestApi('goodboy/listgoodboy', 'GET', data).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
        this.setData({
          getGoodboyrList:res.data
        })
			} else {
        util.showToast("数据加载失败");
			}
		});
  },
  goDetail(e){
    console.log(e.currentTarget.dataset.id)
    console.log(e.currentTarget.dataset.tab)
    wx.navigateTo({
      url: '/pages/publish/pages/pushBestDetail/pushBestDetail?id='+e.currentTarget.dataset.id+'&tab='+e.currentTarget.dataset.tab,
    })
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
    console.log("下拉")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
      console.log("上拉")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})