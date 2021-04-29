// pages/publish/pages/search/search.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    key: '',
    menuList: [
      {
        name: '伊旗之声',
        icon: app.globalData.imgUrl + '/image/1.png',
        url: '/pages/publish/pages/radio/radio',
        isShow: true
      },
      {
        name: '伊旗之窗',
        icon: app.globalData.imgUrl + '/image/2.png',
        url: '/pages/publish/pages/tv/tv',
        isShow: true
      },
      {
        name: '推优榜',
        icon: app.globalData.imgUrl + '/image/3.png',
        url: '/pages/publish/pages/pushBest/pushBest',
        isShow: true
      },
      {
        name: '一村一品',
        icon: app.globalData.imgUrl + '/image/4.png',
        url: '/pages/charm/pages/villageProduct/villageProduct',
        isShow: true
      },
      {
        name: '历史文化',
        icon: app.globalData.imgUrl + '/image/5.png',
        url: '/pages/charm/pages/historyCulture/historyCulture',
        isShow: true
      },
      {
        name: '投资兴业',
        icon: app.globalData.imgUrl + '/image/6.png',
        url: '/pages/charm/pages/investment/investment',
        isShow: true
      },
      {
        name: '知名景点',
        icon: app.globalData.imgUrl + '/image/7.png',
        url: '/pages/travel/pages/scenicSpot/scenicSpot',
        isShow: true
      },
      {
        name: '伊旗天气',
        icon: app.globalData.imgUrl + '/image/8.png',
        url: '/pages/travel/pages/weather/weather',
        isShow: true
      },
      {
        name: '飞机火车',
        icon: app.globalData.imgUrl + '/image/9.png',
        url: '/pages/travel/pages/train/train',
        isShow: true
      },
      {
        name: '长途汽车',
        icon: app.globalData.imgUrl + '/image/10.png',
        url: '/pages/travel/pages/car/car',
        isShow: true
      },
      {
        name: '公交出租',
        icon: app.globalData.imgUrl + '/image/11.png',
        url: '/pages/travel/pages/bus/bus',
        isShow: true
      },
      {
        name: '酒店宾馆',
        icon: app.globalData.imgUrl + '/image/12.png',
        url: '/pages/travel/pages/hotel/hotel',
        isShow: true
      },
      {
        name: '身边公厕',
        icon: app.globalData.imgUrl + '/image/13.png',
        url: '/pages/travel/pages/toilet/toilet',
        isShow: true
      },
      {
        name: '找充电桩',
        icon: app.globalData.imgUrl + '/image/14.png',
        url: '/pages/travel/pages/electric/electric',
        isShow: true
      },
      {
        name: '乡村旅游',
        icon: app.globalData.imgUrl + '/image/15.png',
        url: '/pages/travel/pages/ruralTourism/ruralTourism',
        isShow: true
      },
      {
        name: '特色美食',
        icon: app.globalData.imgUrl + '/image/16.png',
        url: '/pages/food/pages/specialFood/specialFood',
        isShow: true
      }, {
        name: '经济快餐',
        icon: app.globalData.imgUrl + '/image/17.png',
        url: '/pages/food/pages/economicsFood/economicsFood',
        isShow: true
      }, {
        name: '高档餐饮',
        icon: app.globalData.imgUrl + '/image/18.png',
        url: '/pages/food/pages/topFood/topFood',
        isShow: true
      }, {
        name: '民族食品',
        icon: app.globalData.imgUrl + '/image/19.png',
        url: '/pages/food/pages/nationFood/nationFood',
        isShow: true
      }, {
        name: '饮食文化',
        icon: app.globalData.imgUrl + '/image/20.png',
        url: '/pages/food/pages/cultureFood/cultureFood',
        isShow: true
      }, {
        name: '农畜产品安全',
        icon: app.globalData.imgUrl + '/image/21.png',
        url: '/pages/food/pages/animalFood/animalFood',
        isShow: true
      },
      {
        name: '商场超市',
        icon: app.globalData.imgUrl + '/image/22.png',
        url: '/pages/economic/pages/market/market',
        isShow: true
      },{
        name: '农贸市场',
        icon: app.globalData.imgUrl + '/image/23.png',
        url: '/pages/economic/pages/farmerMarket/farmerMarket',
        isShow: true
      },{
        name: '户外摊点',
        icon: app.globalData.imgUrl + '/image/24.png',
        url: '/pages/economic/pages/outdoorStalls/outdoorStalls',
        isShow: true
      },{
        name: '二手交易',
        icon: app.globalData.imgUrl + '/image/25.png',
        url: '/pages/economic/pages/secondHand/secondHand',
        isShow: true
      },{
        name: '农资门市部',
        icon: app.globalData.imgUrl + '/image/26.png',
        url: '/pages/economic/pages/farmerRetail/farmerRetail',
        isShow: true
      },{
        name: '会展活动',
        icon: app.globalData.imgUrl + '/image/27.png',
        url: '/pages/economic/pages/exhibition/exhibition',
        isShow: true
      },{
        name: '消费维权',
        icon: app.globalData.imgUrl + '/image/28.png',
        url: '/pages/economic/pages/protectRight/protectRight',
        isShow: true
      },{
        name: '消费促进活动',
        icon: app.globalData.imgUrl + '/image/29.png',
        url: '/pages/economic/pages/promotion/promotion',
        isShow: true
      },{
        name: '知识产权',
        icon: app.globalData.imgUrl + '/image/30.png',
        url: '/pages/economic/pages/intellectualProperty/intellectualProperty',
        isShow: true
      },
      {
        name: '学前教育',
        icon: app.globalData.imgUrl + '/image/31.png',
        url: '/pages/education/pages/primarySchool/primarySchool',
        isShow: true
      },{
        name: '中小学',
        icon: app.globalData.imgUrl + '/image/32.png',
        url: '/pages/education/pages/midSchool/midSchool',
        isShow: true
      },{
        name: '学生资助',
        icon: app.globalData.imgUrl + '/image/33.png',
        url: '/pages/education/pages/studentHelp/studentHelp',
        isShow: true
      },{
        name: '转学办理',
        icon: app.globalData.imgUrl + '/image/34.png',
        url: '/pages/education/pages/transfer/transfer',
        isShow: true
      },{
        name: '图书馆',
        icon: app.globalData.imgUrl + '/image/35.png',
        url: '/pages/education/pages/library/library',
        isShow: true
      },{
        name: '书店',
        icon: app.globalData.imgUrl + '/image/36.png',
        url: '/pages/education/pages/bookShop/bookShop',
        isShow: true
      },{
        name: '民办学校',
        icon: app.globalData.imgUrl + '/image/37.png',
        url: '/pages/education/pages/mbSchool/mbSchool',
        isShow: true
      },{
        name: '家庭教育',
        icon: app.globalData.imgUrl + '/image/38.png',
        url: '/pages/education/pages/homeEducate/homeEducate',
        isShow: true
      },{
        name: '农业技术',
        icon: app.globalData.imgUrl + '/image/39.png',
        url: '/pages/education/pages/agricultural/agricultural',
        isShow: true
      },{
        name: '文体健身',
        icon: app.globalData.imgUrl + '/image/40.png',
        url: '/pages/education/pages/fitness/fitness',
        isShow: true
      },
      {
        name: '医院药店',
        icon: app.globalData.imgUrl + '/image/41.png',
        url: '/pages/medical/pages/hospital/hospital',
        isShow: true
      },{
        name: '健康证',
        icon: app.globalData.imgUrl + '/image/42.png',
        url: '/pages/medical/pages/healthCard/healthCard',
        isShow: true
      },{
        name: '疫苗接种',
        icon: app.globalData.imgUrl + '/image/43.png',
        url: '/pages/medical/pages/vaccine/vaccine',
        isShow: true
      },{
        name: '体检',
        icon: app.globalData.imgUrl + '/image/44.png',
        url: '/pages/medical/pages/healthCheck/healthCheck',
        isShow: true
      },{
        name: '核酸检测',
        icon: app.globalData.imgUrl + '/image/45.png',
        url: '/pages/medical/pages/nucleicAcidCheck/nucleicAcidCheck',
        isShow: true
      },
      // {
      //   name: '老年证',
      //   icon: app.globalData.imgUrl + '/image/46.png',
      //   url: '/pages/medical/pages/agednessCar/agednessCar',
      //   isShow: true
      // },
      {
        name: '高龄补助',
        icon: app.globalData.imgUrl + '/image/47.png',
        url: '/pages/medical/pages/oldAge/oldAge',
        isShow: true
      },{
        name: '福利院',
        icon: app.globalData.imgUrl + '/image/48.png',
        url: '/pages/medical/pages/welfareHouse/welfareHouse',
        isShow: true
      },
      {
        name: '残疾人',
        icon: app.globalData.imgUrl + '/image/57.png',
        url: '/pages/help/pages/disabled/disabled',
        isShow: true
      },{
        name: '低保户',
        icon: app.globalData.imgUrl + '/image/58.png',
        url: '/pages/help/pages/insured/insured',
        isShow: true
      },{
        name: '红十字补贴',
        icon: app.globalData.imgUrl + '/image/59.png',
        url: '/pages/help/pages/redcross/redcross',
        isShow: true
      },{
        name: '失信人员',
        icon: app.globalData.imgUrl + '/image/60.png',
        url: '/pages/help/pages/dishonest/dishonest',
        isShow: true
      },{
        name: '法律服务',
        icon: app.globalData.imgUrl + '/image/61.png',
        url: '/pages/help/pages/law/law',
        isShow: true
      },{
        name: '女性关护',
        icon: app.globalData.imgUrl + '/image/62.png',
        url: '/pages/help/pages/woman/woman',
        isShow: true
      },
      {
        name: '政务大厅指引',
        icon: app.globalData.imgUrl + '/image/49.png',
        url: '',
        isShow: true
      },{
        name: '旗长热线',
        icon: app.globalData.imgUrl + '/image/50.png',
        url: '/pages/government/pages/flagLeader/flagLeader',
        isShow: true
      },{
        name: '旗政互通',
        icon: app.globalData.imgUrl + '/image/51.png',
        url: '/pages/government/pages/eachFlagTown/eachFlagTown',
        isShow: true
      },{
        name: '调查问卷',
        icon: app.globalData.imgUrl + '/image/52.png',
        url: '/pages/government/pages/questionnaire/questionnaire',
        isShow: true
      },{
        name: '随手拍',
        icon: app.globalData.imgUrl + '/image/53.png',
        url: '/pages/government/pages/instaShot/instaShot',
        isShow: true
      },{
        name: '志愿者服务',
        icon: app.globalData.imgUrl + '/image/54.png',
        url: '/pages/government/pages/volunteerService/volunteerService',
        isShow: true
      },{
        name: '创城行动',
        icon: app.globalData.imgUrl + '/image/55.png',
        url: '/pages/government/pages/cityAction/cityAction',
        isShow: true
      },{
        name: '土地认养',
        icon: app.globalData.imgUrl + '/image/56.png',
        url: '/pages/government/pages/land/land',
        isShow: true
      },{
        name: '家政服务',
        icon: app.globalData.imgUrl + '/image/63.png',
        url: '/pages/life/pages/housekeeping/housekeeping',
        isShow: true
      },{
        name: '物业',
        icon: app.globalData.imgUrl + '/image/64.png',
        url: '/pages/life/pages/property/property',
        isShow: true
      },{
        name: '保修服务',
        icon: app.globalData.imgUrl + '/image/65.png',
        url: '/pages/life/pages/repair/repair',
        isShow: true
      },{
        name: '就业服务',
        icon: app.globalData.imgUrl + '/image/66.png',
        url: '/pages/life/pages/job/job',
        isShow: true
      },{
        name: '美发洗浴',
        icon: app.globalData.imgUrl + '/image/67.png',
        url: '/pages/life/pages/hairdressing/hairdressing',
        isShow: true
      },{
        name: '代驾挪车',
        icon: app.globalData.imgUrl + '/image/68.png',
        url: '/pages/life/pages/moveCar/moveCar',
        isShow: true
      },
      {
        name: '顺风车',
        icon: app.globalData.imgUrl + '/image/69.png',
        url: '/pages/life/pages/car/car',
        isShow: true
      },
      {
        name: '生产转让',
        icon: app.globalData.imgUrl + '/image/70.png',
        url: '/pages/life/pages/productionTransfer/productionTransfer',
        isShow: true
      },
      {
        name: '生鲜配送',
        icon: app.globalData.imgUrl + '/image/71.png',
        url: '/pages/life/pages/seafood/seafood',
        isShow: true
      },
      //  {
      //   name: '生活缴费',
      //   icon: app.globalData.imgUrl + '/image/72.png',
      //   url: '/pages/pay/home/home',
      //   isShow: true
      // },
      // {
      //   name: '通信服务',
      //   icon: app.globalData.imgUrl + '/image/73.png',
      //   url: '/pages/pay/home/home',
      //   isShow: true
      // },
      // {
      //   name: '金融',
      //   icon: app.globalData.imgUrl + '/image/74.png',
      //   url: '/pages/life/pages/finance/finance',
      //   isShow: true
      // },
      {
        name: '电影剧院',
        icon: app.globalData.imgUrl + '/image/75.png',
        url: '',
        isShow: true
      },
      {
        name: '爱车养护',
        icon: app.globalData.imgUrl + '/image/76.png',
        url: '',
        isShow: true
      },
      {
        name: '公祖房',
        icon: app.globalData.imgUrl + '/image/77.png',
        url: '',
        isShow: true
      },
      {
        name: '办事指南',
        icon: app.globalData.imgUrl + '/image/78.png',
        url: '/pages/government/pages/thingsGuide/thingsGuide',
        isShow: true
      },
    ],
  },
  //查询
  searchMenu(e) {
    let key = e.detail.value;
    let list = this.data.menuList;
    for (let i = 0; i < list.length; i++) {
      let a = key;
      let b = list[i].name;
      if (b.indexOf(a) != -1) {
        list[i].isShow = true
      } else {
        list[i].isShow = false
      }
    }
    this.setData({
      menuList: list
    })
  },
  //跳转
  goDetail(e) {
    util.pageJump(e.currentTarget.dataset.url)
  },

   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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