// pages/charm/pages/taskInfo/taskInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{},
    radio:"0",
    textareaAValue:"",
    evaluateTrue:true
  },
  goFk(){
    wx.navigateTo({
      url: '../fkTask/fkTask',
    })
  },
  evaluate(e){
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  evaluateClick(){
    this.setData({

      modalName: null,
      evaluateTrue:false
    })
  },
  cbButton(){
    wx.showToast({
      title: '催办成功',
      icon:'none'
    })
  },
  hideModal(e) {
    this.setData({
      radio:"0",
      textareaAValue:"",
      modalName: null
    })
  },
  radio(e){
    //console.log(e)
    this.setData({
      radio:e.currentTarget.dataset.radio
    })
  },  
  textareaAInput(e) {
    this.setData({
      textareaAValue: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    setTimeout(function() {
      that.setData({
        loading: true
      })
    }, 500)
    console.log(JSON.parse(options.item))
    this.setData({
      list:JSON.parse(options.item)
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

  }
})