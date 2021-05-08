const app = getApp()
const util = require('../../../utils/util.js')
const login = require('../../../utils/login.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    imgList: [1, 2, 3, 4, 5],
    newsInfo: [],
    noticeInfo: [],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    mainInfo: [{
        id: 0,
        name: '伊旗',
        nick: '发布',
        title: "伊金霍洛发布",
        introduce: "",
        list: [
          // {
          //   tit: "听广播",
          //   pic: "/image/1.png",
          //   tab: 0
          // },
          // {
          //   tit: "看电视",
          //   pic: "/image/2.png",
          //   tab: 1
          // },
          // {
          //   tit: "推优榜",
          //   pic: "/image/3.png",
          //   tab: 2
          // },
        ]
      }, {
        id: 1,
        name: '魅力',
        nick: '伊旗',
        title: "魅力伊旗",
        introduce: "",
        list: [{
            tit: "伊旗概况",
            pic: "/image/24.png",
            tab: 3
          },
          {
            tit: "历史文化",
            pic: "/image/5.png",
            tab: 1
          },
          {
            tit: "村情乡貌",
            pic: "/image/4.png",
            tab: 0
          },
          {
            tit: "土地认养",
            pic: "/image/56.png",
            tab: 4
          },
          {
            tit: "投资兴业",
            pic: "/image/6.png",
            tab: 2
          },
     
        ]
      },
      {
        id: 2,
        name: '旅游',
        nick: '出行',
        title: "旅游出行",
        introduce: "",
        list: [{
            tit: "知名景点",
            pic: "/image/7.png",
            tab: 0
          },
          {
            tit: "伊旗天气",
            pic: "/image/8.png",
            tab: 1
          },
          {
            tit: "飞机火车",
            pic: "/image/9.png",
            tab: 2
          },
          {
            tit: "长途汽车",
            pic: "/image/10.png",
            tab: 3
          },
          {
            tit: "公交出租",
            pic: "/image/11.png",
            tab: 4
          },
          {
            tit: "酒店宾馆",
            pic: "/image/12.png",
            tab: 5
          },
          {
            tit: "身边公厕",
            pic: "/image/13.png",
            tab: 6
          },
          {
            tit: "找充电桩",
            pic: "/image/14.png",
            tab: 7
          },
          {
            tit: "乡村旅游",
            pic: "/image/15.png",
            tab: 8
          }
        ]
      },
      {
        id: 3,
        name: '食在',
        nick: '伊旗',
        title: "食在伊旗",
        introduce: "",
        list: [{
            tit: "特色美食",
            pic: "/image/16.png",
            tab: 0
          },
          {
            tit: "经济快餐",
            pic: "/image/17.png",
            tab: 1
          },
          {
            tit: "高档餐饮",
            pic: "/image/18.png",
            tab: 2
          },
          {
            tit: "民族食品",
            pic: "/image/19.png",
            tab: 3
          },
          {
            tit: "饮食文化",
            pic: "/image/20.png",
            tab: 4
          },
          {
            tit: "食品安全",
            pic: "/image/21.png",
            tab: 5
          },
        ],
      },
      {
        id: 4,
        name: '经济',
        nick: '活动',
        title: "经济活动",
        introduce: "",
        list: [{
            tit: "商场超市",
            pic: "/image/22.png",
            tab: 0
          },
          {
            tit: "农贸市场",
            pic: "/image/23.png",
            tab: 1
          },
          // {
          //   tit: "户外摊点",
          //   pic: "/image/24.png",
          //   tab: 2
          // },
          {
            tit: "二手交易",
            pic: "/image/27.png",
            tab: 3
          },
          {
            tit: "农资门市",
            pic: "/image/26.png",
            tab: 4
          },
          {
            tit: "会展活动",
            pic: "/image/25.png",
            tab: 5
          },
          {
            tit: "消费维权",
            pic: "/image/28.png",
            tab: 6
          },
          {
            tit: "商业活动",
            pic: "/image/29.png",
            tab: 7
          },
          {
            tit: "知识产权",
            pic: "/image/30.png",
            tab: 8
          },
          {
            tit: "农业技术",
            pic: "/image/39.png",
            tab: 10
          },
          // {
          //   tit: "金融服务",
          //   pic: "/image/74.png",
          //   tab: 9
          // },
        ],
      }, {
        id: 5,
        name: '教育',
        nick: '文体',
        title: "教育文体",
        introduce: "",
        list: [{
            tit: "学前教育",
            pic: "/image/31.png",
            tab: 0
          },
          {
            tit: "中小学",
            pic: "/image/32.png",
            tab: 1
          },
          {
            tit: "学生资助",
            pic: "/image/33.png",
            tab: 2
          },
          {
            tit: "转学办理",
            pic: "/image/34.png",
            tab: 3
          },
          {
            tit: "图书商店",
            pic: "/image/36.png",
            tab: 5
          },
          {
            tit: "校外培训机构",
            pic: "/image/37.png",
            tab: 6
          },
          {
            tit: "家庭教育",
            pic: "/image/38.png",
            tab: 7
          },
          // {
          //   tit: "农业技术",
          //   pic: "/image/39.png",
          //   tab: 8
          // },
          {
            tit: "文体健身",
            pic: "/image/40.png",
            tab: 9
          },
          {
            tit: "图书馆",
            pic: "/image/35.png",
            tab: 4
          },
        ],
      }, {
        id: 6,
        name: '医疗',
        nick: '康养',
        title: "医疗康养",
        introduce: "",
        list: [{
            tit: "医院药店",
            pic: "/image/41.png",
            tab: 0
          },
          {
            tit: "健康证",
            pic: "/image/42.png",
            tab: 1
          },
          {
            tit: "疫苗接种",
            pic: "/image/43.png",
            tab: 2
          },
          // {
          //   tit: "体检",
          //   pic: "/image/44.png",
          //   tab: 3
          // },
          {
            tit: "核酸检测",
            pic: "/image/45.png",
            tab: 4
          },
          {
            tit: "高龄补助",
            pic: "/image/47.png",
            tab: 5
          },
          {
            tit: "福利院",
            pic: "/image/48.png",
            tab: 6
          }
        ],
      },
      {
        id: 7,
        name: '政务',
        nick: '服务',
        title: "政务服务",
        introduce: "",
        list: [{
            tit: "办事指南",
            pic: "/image/78.png",
            tab: 8
          },
          {
            tit: "大厅指引",
            pic: "/image/49.png",
            tab: 0
          },
          {
            tit: "旗长热线",
            pic: "/image/50.png",
            tab: 1
          },
          {
            tit: "旗镇互通",
            pic: "/image/51.png",
            tab: 2
          },
          {
            tit: "调查问卷",
            pic: "/image/52.png",
            tab: 3
          },
          {
            tit: "随手拍",
            pic: "/image/53.png",
            tab: 4
          },
          // {
          //   tit: "志愿者",
          //   pic: "/image/54.png",
          //   tab: 5
          // },
          {
            tit: "创城行动",
            pic: "/image/55.png",
            tab: 6
          },
          // {
          //   tit: "土地认养",
          //   pic: "/image/56.png",
          //   tab: 7
          // }
        ],
      },
      {
        id: 8,
        name: '维权',
        nick: '助困',
        title: "维权助困",
        introduce: "",
        list: [{
            tit: "残疾人",
            pic: "/image/57.png",
            tab: 0
          },
          // {
          //   tit: "低保户",
          //   pic: "/image/58.png",
          //   tab: 1
          // },
          {
            tit: "红十字补贴",
            pic: "/image/59.png",
            tab: 2
          },
          {
            tit: "失信人员",
            pic: "/image/60.png",
            tab: 3
          },
          {
            tit: "法律服务",
            pic: "/image/61.png",
            tab: 4
          },
          {
            tit: "女性关护",
            pic: "/image/62.png",
            tab: 5
          },
        ],
      }, {
        id: 9,
        name: '生活',
        nick: '服务',
        title: "生活服务",
        introduce: "",
        list: [{
            tit: "家政服务",
            pic: "/image/63.png",
            tab: 0
          },
          {
            tit: "物业服务",
            pic: "/image/64.png",
            tab: 1
          },
          // {
          //   tit: "保修服务",
          //   pic: "/image/65.png",
          //   tab: 2
          // },
          {
            tit: "就业服务",
            pic: "/image/66.png",
            tab: 3
          },
          {
            tit: "美发洗浴",
            pic: "/image/67.png",
            tab: 4
          },
          {
            tit: "代驾挪车",
            pic: "/image/68.png",
            tab: 5
          },
          {
            tit: "顺风车",
            pic: "/image/69.png",
            tab: 6
          },
          {
            tit: "转让信息",
            pic: "/image/70.png",
            tab: 7
          },
          {
            tit: "生鲜配送",
            pic: "/image/71.png",
            tab: 8
          },
          // {
          //   tit: "生活缴费",
          //   pic: "/image/72.png",
          //   tab: 9
          // },
          // {
          //   tit: "通信服务",
          //   pic: "/image/73.png",
          //   tab: 10
          // },
          // {
          //   tit: "金融服务",
          //   pic: "/image/74.png",
          //   tab: 11
          // },
          {
            tit: "电影剧院",
            pic: "/image/75.png",
            tab: 12
          },
          // {
          //   tit: "在职党员",
          //   pic: "/image/80.png",
          //   tab: 13
          // },
          {
            tit: "公租房",
            pic: "/image/77.png",
            tab: 14
          },
          {
            tit: "志愿者",
            pic: "/image/54.png",
            tab: 15
          },
        ],
      },
    ],
    TabCur: 0,
    MainCur: 0,
    VerticalNavTop: 0,
    load: true
  },
  onReady() {
    wx.hideLoading()
  },
  // 切换左边菜单并联动右边
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  /**
   * 滑动右边对应左边菜单切换
   */
  VerticalMain(e) {
    let that = this;
    let mainInfo = that.data.mainInfo;
    let tabHeight = 0;
    if (that.data.load) {
      for (let i = 0; i < mainInfo.length; i++) {
        let view = wx.createSelectorQuery().in(this).select("#main-" + mainInfo[i].id);
        view.fields({
          size: true
        }, data => {
          mainInfo[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          mainInfo[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        mainInfo: mainInfo
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < mainInfo.length; i++) {
      if (scrollTop > mainInfo[i].top && scrollTop < mainInfo[i].bottom) {
        that.setData({
          VerticalNavTop: (mainInfo[i].id - 1) * 50,
          TabCur: mainInfo[i].id
        })
        return false
      }
    }
  },

  //去详情页
  goDetail: function (e) {
    let that = this;
    let id = e.currentTarget.dataset.id;
    let tab = e.currentTarget.dataset.tab;
    let tit = e.currentTarget.dataset.tit;
    switch (id) {
      //伊旗发布
      case 0:
        switch (tab) {
          case 0:
            //广播
            that.sum(tit)
            util.pageJump('/pages/publish/pages/radio/radio')
            break;
          case 1:
            //电视
            that.sum(tit)
            util.pageJump('/pages/publish/pages/tv/tv')
            break;
            // case 2:
            //   //推优榜
            //   util.pageJump('/pages/publish/pages/pushBest/pushBest')
            //   break;
        }
        break;
        //魅力伊旗
      case 1:
        switch (tab) {
          case 0:
            that.sum(tit)
            util.pageJump('/pages/charm/pages/villageProduct/villageProduct')
            break;
          case 1:
            that.sum(tit)
            util.pageJump('/pages/charm/pages/historyCulture/historyCulture')
            break;
          case 2:
            that.sum(tit)
            util.pageJump('/pages/charm/pages/investment/investment')
            break;
          case 3:
            that.sum(tit)
            util.pageJump('/pages/charm/pages/introduce/introduce')
            break;
          case 4:
            that.sum(tit)
            util.pageJump('/pages/government/pages/land/land')
            break;
        }
        break;
        //旅游出行
      case 2:
        switch (tab) {
          case 0:
            that.sum(tit)
            util.pageJump('/pages/travel/pages/scenicSpot/scenicSpot')
            break;
          case 1:
            that.sum(tit)
            util.pageJump('/pages/travel/pages/weather/weather')
            break;
          case 2:
            that.sum(tit)
            util.pageJump("/pages/travel/pages/train/train");
            break;
          case 3:
            that.sum(tit)
            util.pageJump("/pages/travel/pages/car/car");
            break;
          case 4:
            that.sum(tit)
            util.pageJump("/pages/travel/pages/bus/bus");
            break;
          case 5:
            that.sum(tit)
            util.pageJump("/pages/travel/pages/hotel/hotel");
            break;
          case 6:
            that.sum(tit)
            util.pageJump('/pages/travel/pages/toilet/toilet')
            break;
          case 7:
            that.sum(tit)
            util.pageJump('/pages/travel/pages/electric/electric')
            break;
          case 8:
            that.sum(tit)
            util.pageJump('/pages/travel/pages/ruralTourism/ruralTourism')
            break;
        }
        break;
        //食在伊旗
      case 3:
        switch (tab) {
          case 0:
            that.sum(tit)
            util.pageJump('/pages/food/pages/specialFood/specialFood')
            break;
          case 1:
            that.sum(tit)
            util.pageJump('/pages/food/pages/economicsFood/economicsFood')
            break;
          case 2:
            that.sum(tit)
            util.pageJump('/pages/food/pages/topFood/topFood')
            break;
          case 3:
            that.sum(tit)
            util.pageJump('/pages/food/pages/nationFood/nationFood')
            break;
          case 4:
            that.sum(tit)
            util.pageJump('/pages/food/pages/cultureFood/cultureFood')
            break;
          case 5:
            that.sum(tit)
            util.pageJump('/pages/food/pages/animalFood/animalFood')
            break;
        }
        break;
        //经济活动
      case 4:
        switch (tab) {
          case 0:
            console.log("商场");
            that.sum(tit)
            util.pageJump('/pages/economic/pages/market/market')
            break;
          case 1:
            console.log("农贸");
            that.sum(tit)
            util.pageJump('/pages/economic/pages/farmerMarket/farmerMarket')
            break;
          case 2:
            console.log("户外");
            that.sum(tit)
            util.pageJump('/pages/economic/pages/outdoorStalls/outdoorStalls')
            break;
          case 3:
            console.log("二手");
            that.sum(tit)
            util.pageJump('/pages/economic/pages/secondHand/secondHand')
            break;
          case 4:
            console.log("农资");
            that.sum(tit)
            util.pageJump('/pages/economic/pages/farmerRetail/farmerRetail')
            break;
          case 5:
            console.log("会展");
            that.sum(tit)
            util.pageJump('/pages/economic/pages/exhibition/exhibition')
            break;
          case 6:
            console.log("消费");
            that.sum(tit)
            util.pageJump('/pages/economic/pages/protectRight/protectRight')
            break;
          case 7:
            console.log("消费促进");
            that.sum(tit)
            util.pageJump('/pages/economic/pages/promotion/promotion')
            break;
          case 8:
            console.log("知识产权");
            that.sum(tit)
            util.pageJump('/pages/economic/pages/intellectualProperty/intellectualProperty')
            break;
          case 9:
            console.log("金融服务");
            that.sum(tit)
            util.pageJump('/pages/life/pages/finance/finance')
            break;
          case 10:
            console.log("农业技术");
            that.sum(tit)
            util.pageJump('/pages/education/pages/agricultural/agricultural')
            break;
        }
        break;
        //教育文体
      case 5:
        switch (tab) {
          case 0:
            that.sum(tit)
            util.pageJump('/pages/education/pages/primarySchool/primarySchool')
            break;
          case 1:
            that.sum(tit)
            util.pageJump('/pages/education/pages/midSchool/midSchool')
            break;
          case 2:
            that.sum(tit)
            util.pageJump('/pages/education/pages/studentHelp/studentHelp')
            break;
          case 3:
            that.sum(tit)
            util.pageJump('/pages/education/pages/transfer/transfer')
            break;
          case 4:
            that.sum(tit)
            util.pageJump('/pages/education/pages/library/library')
            break;
          case 5:
            that.sum(tit)
            util.pageJump('/pages/education/pages/bookShop/bookShop')
            break;
          case 6:
            that.sum(tit)
            util.pageJump('/pages/education/pages/mbSchool/mbSchool')
            break;
          case 7:
            that.sum(tit)
            util.pageJump('/pages/education/pages/homeEducate/homeEducate')
            break;
            // case 8:
            //   that.sum(tit)
            //   util.pageJump('/pages/education/pages/agricultural/agricultural')
            //   break;
          case 9:
            that.sum(tit)
            util.pageJump('/pages/education/pages/fitness/fitness')
            break;
        }
        break;
        //医疗康养
      case 6:
        switch (tab) {
          case 0:
            //医院药店
            that.sum(tit)
            util.pageJump('/pages/medical/pages/hospital/hospital')
            break;
          case 1:
            //判断是否登录
            if (!login.isLogin()) return
            //健康证
            that.sum(tit)
            util.pageJump('/pages/appointment/pages/healthy/healthy?type=1&title=健康证申请')
            // util.pageJump('/pages/medical/pages/healthCard/healthCard')
            break;
          case 2:
            that.sum(tit)
            util.pageJump('/pages/medical/pages/vaccine/vaccine')
            break;
          case 3:
            //体检
            that.sum(tit)
            util.pageJump('/pages/medical/pages/healthCheck/healthCheck')
            break;
          case 4:
            //核酸检测
            that.sum(tit)
            util.pageJump('/pages/medical/pages/nucleicAcidCheck/nucleicAcidCheck')
            break;
            // case 5:
            //   console.log("老年证");
            //   that.sum(tit)
            //   util.pageJump('/pages/medical/pages/agednessCar/agednessCar')
            //   break;
          case 5:
            that.sum(tit)
            util.pageJump('/pages/medical/pages/oldAge/oldAge')
            break;
          case 6:
            //福利院
            that.sum(tit)
            util.pageJump('/pages/medical/pages/welfareHouse/welfareHouse')
            break;

        }
        break;
        //政务服务
      case 7:
        switch (tab) {
          case 0:
            that.sum(tit)
            util.pageJump('/pages/government/pages/guide/guide')
            break;
          case 1:
            that.sum(tit)
            util.pageJump('/pages/government/pages/flagLeader/flagLeader')
            break;
          case 2:
            that.sum(tit)
            util.pageJump('/pages/government/pages/eachFlagTown/eachFlagTown')
            break;
          case 3:
            that.sum(tit)
            util.pageJump('/pages/government/pages/questionnaire/questionnaire')
            break;
          case 4:
            //判断是否登录
            if (!login.isLogin()) return
            that.sum(tit)
            util.pageJump('/pages/government/pages/instaShot/instaShot')
            break;
          // case 5:
          //   that.sum(tit)
          //   util.pageJump('/pages/government/pages/volunteerService/volunteerService')
          //   break;
          case 6:
            that.sum(tit)
            util.pageJump('/pages/government/pages/cityAction/cityAction')
            break;
          case 7:
            that.sum(tit)
            util.pageJump('/pages/government/pages/land/land')
            break;
          case 8:
            that.sum(tit)
            util.pageJump('/pages/government/pages/thingsGuide/thingsGuide')
            break;

        }
        break;
        //维权助困
      case 8:
        switch (tab) {
          case 0:
            that.sum(tit)
            util.pageJump('/pages/help/pages/disabled/disabled')
            break;
          case 1:
            that.sum(tit)
            util.pageJump('/pages/help/pages/insured/insured')
            break;
          case 2:
            that.sum(tit)
            util.pageJump('/pages/help/pages/redcross/redcross')
            break;
          case 3:
            that.sum(tit)
            util.pageJump('/pages/help/pages/dishonest/dishonest')
            break;
          case 4:
            that.sum(tit)
            util.pageJump('/pages/help/pages/law/law')
            break;
          case 5:
            that.sum(tit)
            util.pageJump('/pages/help/pages/woman/woman')
            break;
        }
        break;
        //生活服务
      case 9:
        switch (tab) {
          case 0:
            that.sum(tit)
            util.pageJump('/pages/life/pages/housekeeping/housekeeping')
            break;
          case 1:
            that.sum(tit)
            util.pageJump('/pages/life/pages/property/property')
            break;
          case 2:
            that.sum(tit)
            util.pageJump('/pages/life/pages/repair/repair')
            break;
          case 3:
            that.sum(tit)
            util.pageJump('/pages/life/pages/job/job')
            break;
          case 4:
            that.sum(tit)
            util.pageJump('/pages/life/pages/hairdressing/hairdressing')
            break;
          case 5:
            that.sum(tit)
            util.pageJump('/pages/life/pages/moveCar/moveCar')
            break;
          case 6:
            that.sum(tit)
            util.pageJump('/pages/life/pages/car/car')
            break;
          case 7:
            that.sum(tit)
            util.pageJump('/pages/life/pages/productionTransfer/productionTransfer')
            break;
          case 8:
            that.sum(tit)
            util.pageJump('/pages/life/pages/seafood/seafood')
            break;
            // case 9:
            //   console.log("10");
            //   break;
            // case 10:
            //   console.log("11");
            //   break;
            // case 11:
            //   util.pageJump('/pages/life/pages/finance/finance')
            //   break;
          case 12:
            that.sum(tit)
            util.pageJump('/pages/life/pages/film/film')
            break;
          // case 13:
          //   that.sum(tit)
          //   util.pageJump('/pages/part/pages/sign/sign')
          //   break;
          case 14:
            //判断是否登录
            if (!login.isLogin()) return
            that.sum(tit)
            util.pageJump('/pages/life/pages/publicRentalHousing/publicRentalHousing')
            break;
          case 15:
            that.sum(tit)
            util.pageJump('/pages/government/pages/volunteerService/volunteerService')
            break;

        }
        break;
    }

  },
  // 投诉电话
  goTell() {
    util.callPhone('8612345')
  },
  //推优榜
  goGoodList() {
    util.pageJump('/pages/publish/pages/pushBest/pushBest')
  },
  goZZDY() {
    util.pageJump('/pages/part/pages/sign/sign')
  },
  //广播
  goRadio() {
    util.pageJump('/pages/publish/pages/radio/radio')
  },
  //搜素
  searchApp() {
    util.pageJump('/pages/publish/pages/search/search')
  },
  //新闻
  //新闻列表
  getNewsList() {
    let url = 'https://api-cms.yjhlnews.cn/v1/classify_content/13/?sorce_type=0&limit=3';
    util.httpRequest(url, 'GET', {}).then(res => {
      this.setData({
        newsInfo: res.data.data
      })
    });
  },
  //跳转新闻列表页
  newsList: function () {
    util.pageJump("/pages/publish/pages/officialNewsList/officialNewsList")
  },
  //跳转新闻详情
  newsDetail: function (e) {
    util.pageJumpTo('/pages/publish/pages/officialNewsDetail/officialNewsDetail', 'id', e.currentTarget.dataset.id)
  },
  ///通知公告
  //通知公告列表
  getNoticeList() {
    util.requestApi('infocontent/getListTypeInfoContent?page=1&rows=3', 'GET', {}).then(res => {
      this.setData({
        noticeInfo: res.data.rows
      })
    });
  },
  //跳转通知列表页
  noticeList: function () {
    wx.navigateTo({
      url: '/pages/publish/pages/newsList/newsList?id=1c3e25d9-0e0b-4eb6-ad4e-a7be6f5c8485' + '&type=1'
    })
  },
  //跳转通知详情
  noticeDetail: function (e) {
    let obj = e.currentTarget.dataset.obj
    wx.navigateTo({
      url: "/pages/publish/pages/newsDetail/newsDetail?info_content=" + obj.info_content + "&info_source=" + obj.info_source + "&publishdate=" + obj.publishdate + "&info_videos=" + encodeURIComponent(obj.info_videos) + "&info_detail=" + encodeURIComponent(obj.info_detail),
    })

  },
  // 统计数据
  sum(tit) {
    let obj = {
      businesName: tit
    }
    util.requestApi('businesstatistic/savebusinesstatistic', 'POST', obj).then(res => {

    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNewsList();
    this.getNoticeList();
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