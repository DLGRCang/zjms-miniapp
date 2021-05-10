const app = getApp()
const util = require('../../../../utils/util.js')
Page({
  data: {
    imgUrl: "https://www.yjhlcity.com/shop/route/file/downloadfile/false/",
    baseImgUrl: "https://www.yjhlcity.com/shop/route/file/downloadfile/false/",
    foodList: null,
    searchType: [{
      title: '全部美食',
      content: ['全部美食', '火锅', '烧烤', '蛋糕']
    }, {
      title: '全程范围',
      content: ['全程范围', '新城区', '赛罕区', '回民区']
    }, {
      title: '智能排序',
      content: ['智能排序', '价格', '评价', '配送时间']
    }]
  },
  onpickChange: function (e) {
    let picker = this.data.searchType
    this.data.searchType[e.detail.current].title = e.detail.pick
    this.setData({
      searchType: picker
    })
  },

  // 西餐
  foodList() {
    let baseUrl = 'https://www.yjhlcity.com/cmmall/app/release/api/'
    let url =  baseUrl+'shoplist/listpageshoplist?type=' + '29343b63-7299-4e8c-bcdc-0153543c84ab';
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.rows)
      this.setData({
        foodList: res.data.rows
      })
    });
  },
  
  goDetail(e) {
    console.log(e.currentTarget.dataset.id)
    util.pageJumpTo('/pages/food/pages/foodDetail/foodDetail', 'id', e.currentTarget.dataset.id)
  },

  onLoad: function (options) {
    this.foodList()
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})