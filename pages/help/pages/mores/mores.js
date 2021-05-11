// pages/help/pages/more/more.js
const app = getApp()
const util = require('../../../../utils/util.js')
const data = require('../../../../utils/data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    tabId: 0,
    // tabName: ["人身权利", "人生感悟", "心灵感悟", "哲理故事","幸福家庭","婚姻家庭","最美家庭","品味女人"],
    tabName: ["人身权利", "人生感悟", "心灵感悟", "哲理故事","幸福家庭","婚姻家庭","品味女人"],
    num: 9,
    infotypeid: '509666ee-b033-4ad0-b0db-36aa0c526a34',
    page: 1,
    dataList: [], //新闻列表

  },

  selectTab: function (e) {
    console.log(e)
    this.setData({
      dataList: [], //新闻列表
      tabId: e.currentTarget.dataset.id
    })
    switch (this.data.tabId) {
      case 0:
        this.setData({
          infotypeid: '509666ee-b033-4ad0-b0db-36aa0c526a34'
        })
        break;
      case 1:
        this.setData({
          infotypeid: '0939fe5a-e540-4ed1-b7ac-9d637fc68101'
        })
        break;
      case 2:
        this.setData({
          infotypeid: '49ca5509-127f-46d1-a768-62e4b9258577'
        })
        break;
      case 3:
        this.setData({
          infotypeid: '013c7a06-1ba7-4cfd-9a4c-5f7c795aaf1f'
        })
        break;
        case 4:
        this.setData({
          infotypeid: 'a29b7d2f-e5c1-4ab7-aa0f-a0e78fdd13f2'
        })
        break;
        case 5:
        this.setData({
          infotypeid: '695b8234-235b-466e-93fa-b68a92226f27'
        })
        break;
        // case 6:
        // this.setData({
        //   infotypeid: 'f41a1ea3-1c19-4d83-afb5-e3163938d201'
        // })
        // break;
        case 6:
        this.setData({
          infotypeid: '2ca7a42c-8884-45cf-92c9-5cd09bfcba04'
        })
        break;
    }

    this.getDataList()
    console.log("点击了第几个Tab:" + e.detail.TabCur)
  },

  getDataList: function () {
    //加载数据列表
    data.getArtelData(this.data.infotypeid, this.data.page).then(dataList => {
      this.setData({
        dataList: this.data.dataList.concat(dataList),
      })
      console.log(this.data.dataList);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataList()
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