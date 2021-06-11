const app = getApp()
const util = require('../../../../utils/util.js')
const mall = require('../../../../utils/mall.js')
Page({
  data: {
    tit: '',
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
    }],
    specialFoodList: null
  },
  //////////////////////////////////////////////////////////////
  foodList() {
    let datas = {
      pageNum: 1,
      pageSize: 20,
      JYLX: '52396c19fd024f8db9780a383d9a7c7e'
    }
    mall.login('appStoreController/getStoreListPage', datas).then(res => {
      console.log(res)
      this.setData({
        specialFoodList: res.rows
      })
    })
  },
  // 详情
  goDetail(e){
    console.log(e.currentTarget.dataset.id)
    wx.navigateTo({
      url: '/pages/food/pages/foodDetail/foodDetail?id='+e.currentTarget.dataset.id+'&name='+e.currentTarget.dataset.name
    })
  },
  //////////////////////////////////////////////////////////////

  onpickChange: function (e) {
    let picker = this.data.searchType
    this.data.searchType[e.detail.current].title = e.detail.pick
    this.setData({
      searchType: picker
    })
  },

  // 职工餐厅
  // foodList() {
  //   let baseUrl = 'https://www.yjhlcity.com/cmmall/app/release/api/'
  //   let url = baseUrl + 'shoplist/listpageshoplist?type=' + 'e8fa996f-83c0-4635-aa85-f839c767ac89';
  //   util.httpRequest(url, 'GET', {}).then(res => {
  //     console.log(res.data.rows)
  //     this.setData({
  //       foodList: res.data.rows
  //     })
  //   });
  // },
  // goDetail(e) {
  //   console.log(e.currentTarget.dataset.id)
  //   wx.navigateTo({
  //     url: '/pages/food/pages/foodDetail/foodDetail?id=' + e.currentTarget.dataset.id + '&lat=' + e.currentTarget.dataset.lat + '&lng=' + e.currentTarget.dataset.lng + '&name=' + e.currentTarget.dataset.name + '&location=' + e.currentTarget.dataset.location,
  //   })
  // },
  onLoad: function (options) {
    this.setData({
      tit: options.tit
    })
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
    let pageNum = 1
    pageNum++
    let datas = {
      pageNum: pageNum,
      pageSize: 20,
      JYLX: '52396c19fd024f8db9780a383d9a7c7e'
    }
    mall.login('appStoreController/getStoreListPage', datas).then(res => {
      console.log(res)
      this.setData({
        specialFoodList: this.data.specialFoodList.concat(res.rows)
      })
    })
  },
  onShareAppMessage: function () {

  }
})