const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    info: [],
    info_content: '',
    info_source: '',
    info_detail: '',
    publishdate: '',
    praise: "",
    status:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
<<<<<<< HEAD
    var info_content=options.info_content;
    var info_source=options.info_source;
    var info_detail=decodeURIComponent(options.info_detail);
    var publishdate=options.publishdate;

   
=======
    var info_content = options.info_content;
    var info_source = options.info_source;
    var info_detail = decodeURIComponent(options.info_detail);
    var publishdate = options.publishdate;
>>>>>>> dev
    this.setData({
      id: id,
<<<<<<< HEAD
      info_content:info_content,
      info_source:info_source,
      info_detail:info_detail.replace(/\<img/gi,'< img style="width:100% height:auto mode:widthFix"'),
      publishdate:publishdate

    })
    
   console.log(this.data.info_detail);
  },
  getDetail: function (id) {
    //根据id查询
=======
      info_content: info_content,
      info_source: info_source,
      info_detail: info_detail,
      publishdate: publishdate

    })
    console.log(info_detail);
>>>>>>> dev
  },
 //点赞
 goPraise() {
  if(this.data.status){
    console.log(111111111)
  }
  this.setData({
    praise: "praise",
    status:false,
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
      title: '爱心发射', 
      path: '//pages/publish/pages/newsDetail/newsDetail', 
    }
  }
})