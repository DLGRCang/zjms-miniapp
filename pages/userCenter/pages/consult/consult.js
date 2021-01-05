// pages/userCenter/pages/consult/consult.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTabs:["未回复", "已回复"],
    state:0,
    dataList0:[],//未回复列表 
    dataList1:[],//已回复列表
    dataList:[],//显示列表
  },
  getData(){

		util.requestApi('consult/getConsultByUserId/'+ wx.getStorageSync("userId"), 'GET', {}).then(res => {
      let dataLi0=[]
      let dataLi1=[]
			if (res.statusCode == 200) {
        for(let i=0;i<res.data.length;i++){
          if(res.data[i].state=="0"){
            dataLi0.push(res.data[i])
          }else{
            dataLi1.push(res.data[i])
          }
        }
        this.setData({
          dataList0:dataLi0,
          dataList1:dataLi1,
          dataList:dataLi0
        })
			} else {
          util.showToast("数据获取失败")
			}
		});
  },
  goInfo(e){
    util.pageJump('/pages/userCenter/pages/consultResult/consultResult?obj='+JSON.stringify(e.currentTarget.dataset.item))
  },
	selectTab:function(e){
    console.log(e.detail.TabCur)
    this.setData({
      state:e.detail.TabCur
    })
    if(e.detail.TabCur==0){
      this.setData({
        dataList:this.data.dataList0
      })
    }else{
      this.setData({
        dataList:this.data.dataList1
      })
    }
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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