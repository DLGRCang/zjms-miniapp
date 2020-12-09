const app = getApp()
const util = require('../../../utils/util.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    newsInfo: [],
    noticeInfo: [
      {
        id: 0,
        content: '伊旗自来水公司2020年6月份…',
      }, {
        id: 1,
        content: '伊金霍洛旗2020年中考通知',
      }, {
        id: 2,
        content: '关于65岁以上老人申领补贴通知',
      }
    ],
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    Custom: app.globalData.Custom,
    mainInfo: [{
      id: 0,
      name: '伊旗',
      nick: '发布',
      title: "伊金霍洛发布",
      introduce: "了解伊金霍洛旗最新动态，关注伊金霍洛旗发布，实时知晓您关心的事儿哦！",
      list: [
        {
          tit: "听广播",
          pic: "/image/1.png",
          tab: 0
        },
        {
          tit: "看电视",
          pic: "/image/2.png",
          tab: 1
        },
        {
          tit: "推优榜",
          pic: "/image/3.png",
          tab: 2
        },
      ]
    }, {
      id: 1,
      name: '魅力',
      nick: '伊旗',
      title: "魅力伊旗",
      introduce: "了解伊金霍洛旗最新动态，关注伊金霍洛旗发布，实时知晓您关心的事儿哦！",
      list: [
        {
          tit: "一村一品",
          pic: "/image/4.png",
          tab: 0
        },
        {
          tit: "历史文化",
          pic: "/image/5.png",
          tab: 1
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
      introduce: "了解伊金霍洛旗最新动态，关注伊金霍洛旗发布，实时知晓您关心的事儿哦！",
      list: [
        {
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
      introduce: "了解伊金霍洛旗最新动态，关注伊金霍洛旗发布，实时知晓您关心的事儿哦！",
      list: [
        {
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
          tit: "农产安全",
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
      introduce: "了解伊金霍洛旗最新动态，关注伊金霍洛旗发布，实时知晓您关心的事儿哦！",
      list: [
        {
          tit: "商场超市",
          pic: "/image/22.png",
          tab: 0
        },
        {
          tit: "农贸市场",
          pic: "/image/23.png",
          tab: 1
        },
        {
          tit: "户外摊点",
          pic: "/image/24.png",
          tab: 2
        },
        {
          tit: "二手交易",
          pic: "/image/25.png",
          tab: 3
        },
        {
          tit: "农资门市",
          pic: "/image/26.png",
          tab: 4
        },
        {
          tit: "会展活动",
          pic: "/image/27.png",
          tab: 5
        },
        {
          tit: "消费维权",
          pic: "/image/28.png",
          tab: 6
        },
        {
          tit: "活动促销",
          pic: "/image/29.png",
          tab: 7
        },
        {
          tit: "知识产权",
          pic: "/image/30.png",
          tab: 8
        }
      ],
    }, {
      id: 5,
      name: '教育',
      nick: '文体',
      title: "教育文体",
      introduce: "了解伊金霍洛旗最新动态，关注伊金霍洛旗发布，实时知晓您关心的事儿哦！",
      list: [
        {
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
          tit: "图书馆",
          pic: "/image/35.png",
          tab: 4
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
        {
          tit: "农业技术",
          pic: "/image/39.png",
          tab: 8
        },
        {
          tit: "文体健身",
          pic: "/image/40.png",
          tab: 9
        }
      ],
    }, {
      id: 6,
      name: '医疗',
      nick: '康养',
      title: "医疗康养",
      introduce: "了解伊金霍洛旗最新动态，关注伊金霍洛旗发布，实时知晓您关心的事儿哦！",
      list: [
        {
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
        {
          tit: "体检",
          pic: "/image/44.png",
          tab: 3
        },
        {
          tit: "核酸检测",
          pic: "/image/45.png",
          tab: 4
        },
        {
          tit: "老年证",
          pic: "/image/46.png",
          tab: 5
        },
        {
          tit: "高龄补助",
          pic: "/image/47.png",
          tab: 6
        },
        {
          tit: "福利院",
          pic: "/image/48.png",
          tab: 7
        }
      ],
    },
    {
      id: 7,
      name: '政务',
      nick: '服务',
      title: "政务服务",
      introduce: "了解伊金霍洛旗最新动态，关注伊金霍洛旗发布，实时知晓您关心的事儿哦！",
      list: [
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
        {
          tit: "志愿者",
          pic: "/image/54.png",
          tab: 5
        },
        {
          tit: "创城行动",
          pic: "/image/55.png",
          tab: 6
        },
        {
          tit: "土地认养",
          pic: "/image/56.png",
          tab: 7
        }
      ],
    },
    {
      id: 8,
      name: '维权',
      nick: '助困',
      title: "维权助困",
      introduce: "了解伊金霍洛旗最新动态，关注伊金霍洛旗发布，实时知晓您关心的事儿哦！",
      list: [
        {
          tit: "残疾人",
          pic: "/image/57.png",
          tab: 0
        },
        {
          tit: "低保户",
          pic: "/image/58.png",
          tab: 1
        },
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
          tit: "女性关互",
          pic: "/image/62.png",
          tab: 5
        },
      ],
    }, {
      id: 9,
      name: '生活',
      nick: '服务',
      title: "生活服务",
      introduce: "了解伊金霍洛旗最新动态，关注伊金霍洛旗发布，实时知晓您关心的事儿哦！",
      list: [
        {
          tit: "家政服务",
          pic: "/image/63.png",
          tab: 0
        },
        {
          tit: "物业服务",
          pic: "/image/64.png",
          tab: 1
        },
        {
          tit: "报修服务",
          pic: "/image/65.png",
          tab: 2
        },
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
          tit: "生产转让",
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
        {
          tit: "金融服务",
          pic: "/image/74.png",
          tab: 11
        },
        {
          tit: "电影剧院",
          pic: "/image/75.png",
          tab: 12
        },
        {
          tit: "爱车养护",
          pic: "/image/76.png",
          tab: 13
        },
        {
          tit: "公租房",
          pic: "/image/77.png",
          tab: 14
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
    let id = e.currentTarget.dataset.id;
    let tab = e.currentTarget.dataset.tab;
    switch (id) {
      //伊旗发布
      case 0:
        switch (tab) {
          case 0:
            //广播
            util.pageJump('/pages/publish/pages/radio/radio')
            break;
          case 1:
            //电视
            util.pageJump('/pages/publish/pages/tv/tv')
            break;
          case 2:
            //推优榜
            util.pageJump('/pages/publish/pages/pushBest/pushBest')
            break;
        }
        break;
      //魅力伊旗
      case 1:
        switch (tab) {
          case 0:
            util.pageJump('/pages/charm/pages/villageProduct/villageProduct')
            break;
          case 1:
            util.pageJump('/pages/charm/pages/historyCulture/historyCulture')
            break;
          case 2:
            util.pageJump('/pages/charm/pages/investment/investment')
            break;
        }
        break;
      //旅游出行
      case 2:
        switch (tab) {
          case 0:
            util.pageJump('/pages/travel/pages/scenicSpot/scenicSpot')
            break;
          case 1:
            console.log("pages/weather/weather");
            util.pageJump('/pages/travel/pages/weather/weather')
            break;
          case 2:
            console.log("飞机");
            break;
          case 3:
            console.log("汽车");
            break;
          case 4:
            console.log("公交");
            break;
          case 5:
            console.log("酒店");
            break;
          case 6:
            util.pageJump('/pages/travel/pages/toilet/toilet')
            break;
          case 7:
            console.log("充电侧");
            break;
          case 8:
            console.log("乡村");
            util.pageJump('/pages/travel/pages/ruralTourism/ruralTourism')

            break;
        }
        break;
      //食在伊旗
      case 3:
        switch (tab) {
          case 0:
            util.pageJump('/pages/food/pages/specialFood/specialFood')
            break;
          case 1:
            util.pageJump('/pages/food/pages/economicsFood/economicsFood')
            break;
          case 2:
            util.pageJump('/pages/food/pages/topFood/topFood')
            break;
          case 3:
            util.pageJump('/pages/food/pages/nationFood/nationFood')
            break;
          case 4:
            util.pageJump('/pages/food/pages/cultureFood/cultureFood')
            break;
          case 5:
            util.pageJump('/pages/food/pages/animalFood/animalFood')
            break;
        }
        break;
      //经济活动
      case 4:
        switch (tab) {
          case 0:
            console.log("商场");
            util.pageJump('/pages/economic/pages/market/market')
            break;
          case 1:
            console.log("农贸");
            util.pageJump('/pages/economic/pages/farmerMarket/farmerMarket')
            break;
          case 2:
            console.log("户外");
            util.pageJump('/pages/economic/pages/outdoorStalls/outdoorStalls')
            break;
          case 3:
            console.log("二手");
            util.pageJump('/pages/economic/pages/secondHand/secondHand')
            break;
          case 4:
            console.log("农资");
            util.pageJump('/pages/economic/pages/farmerRetail/farmerRetail')
            break;
          case 5:
            console.log("会展");
            util.pageJump('/pages/economic/pages/exhibition/exhibition')
            break;
          case 6:
            console.log("消费");
            util.pageJump('/pages/economic/pages/protectRight/protectRight')
            break;
          case 7:
            console.log("消费促进");
            util.pageJump('/pages/economic/pages/promotion/promotion')
            break;
          case 8:
            console.log("知识产权");
            util.pageJump('/pages/economic/pages/intellectualProperty/intellectualProperty')
            break;
        }
        break;
      //教育文体
      case 5:
        switch (tab) {
          case 0:
            util.pageJump('/pages/education/pages/primarySchool/primarySchool')
            break;
          case 1:
            util.pageJump('/pages/education/pages/midSchool/midSchool')
            break;
          case 2:
            util.pageJump('/pages/education/pages/studentHelp/studentHelp')
            break;
          case 3:
            util.pageJump('/pages/education/pages/transfer/transfer')
            break;
          case 4:
            util.pageJump('/pages/education/pages/library/library')
            break;
          case 5:
            util.pageJump('/pages/education/pages/bookShop/bookShop')
            break;
          case 6:
            util.pageJump('/pages/education/pages/mbSchool/mbSchool')
            break;
          case 7:
            util.pageJump('/pages/education/pages/homeEducate/homeEducate')
            break;
          case 8:
            util.pageJump('/pages/education/pages/agricultural/agricultural')
            break;
          case 9:
            util.pageJump('/pages/education/pages/fitness/fitness')
            break;
        }
        break;
      //医疗康养
      case 6:
        switch (tab) {
          case 0:
            //医院药店
            util.pageJump('/pages/medical/pages/hospital/hospital')
            break;
          case 1:
            //健康证
            util.pageJump('/pages/medical/pages/healthCard/healthCard')
            break;
          case 2:
            util.pageJump('/pages/medical/pages/vaccine/vaccine')
            break;
          case 3:
            //体检
            util.pageJump('/pages/medical/pages/healthCheck/healthCheck')
            break;
          case 4:
            //核酸检测
            util.pageJump('/pages/medical/pages/nucleicAcidCheck/nucleicAcidCheck')
            break;
          case 5:
            console.log("老年证");
            util.pageJump('/pages/medical/pages/agednessCar/agednessCar')
            break;
          case 6:
            util.pageJump('/pages/medical/pages/oldAge/oldAge')
            break;
          case 7:
            //福利院
            util.pageJump('/pages/medical/pages/welfareHouse/welfareHouse')
            break;

        }
        break;
      //政务服务
      case 7:
        switch (tab) {
          case 0:
            console.log("指引");
            break;
          case 1:
            util.pageJump('/pages/government/pages/flagLeader/flagLeader')
            break;
          case 2:
            console.log("互通");
            util.pageJump('/pages/government/pages/eachFlagTown/eachFlagTown')
            break;
          case 3:
            console.log("调查问卷");
            util.pageJump('/pages/government/pages/questionnaire/questionnaire')
            break;
          case 4:
            util.pageJump('/pages/government/pages/instaShot/instaShot')
            break;
          case 5:
            console.log("志愿者");
            util.pageJump('/pages/government/pages/volunteerService/volunteerService')
            break;
          case 6:
            console.log("创城");
            util.pageJump('/pages/government/pages/cityAction/cityAction')
            break;
          case 7:
            console.log("土地");
            util.pageJump('/pages/government/pages/land/land')
            break;

        }
        break;
      //维权助困
      case 8:
        switch (tab) {
          case 0:
            util.pageJump('/pages/help/pages/disabled/disabled')
            break;
          case 1:
            util.pageJump('/pages/help/pages/insured/insured')
            break;
          case 2:
            util.pageJump('/pages/help/pages/redcross/redcross')
            break;
          case 3:
            util.pageJump('/pages/help/pages/dishonest/dishonest')
            break;
          case 4:
            util.pageJump('/pages/help/pages/law/law')
            break;
          case 5:
            util.pageJump('/pages/help/pages/woman/woman')
            break;
        }
        break;
      //生活服务
      case 9:
        switch (tab) {
          case 0:
            util.pageJump('/pages/life/pages/housekeeping/housekeeping')
            break;
          case 1:
            util.pageJump('/pages/life/pages/property/property')
            break;
          case 2:
            util.pageJump('/pages/life/pages/repair/repair')
            break;
          case 3:
            util.pageJump('/pages/life/pages/job/job')
            break;
          case 4:
            util.pageJump('/pages/life/pages/hairdressing/hairdressing')
            break;
          case 5:
            console.log("代驾挪车");
            util.pageJump('/pages/life/pages/moveCar/moveCar')
            break;
          case 6:
            util.pageJump('/pages/life/pages/car/car')
            break;
          case 7:
            util.pageJump('/pages/life/pages/productionTransfer/productionTransfer')
            break;
          case 8:
            util.pageJump('/pages/life/pages/seafood/seafood')
            break;
          // case 9:
          //   console.log("10");
          //   break;
          // case 10:
          //   console.log("11");
          //   break;
          case 11:
            util.pageJump('/pages/life/pages/finance/finance')
            break;
          case 12:
            console.log("13");
            break;
          case 13:
            console.log("14");
            break;
          case 14:
            console.log("公租房");
            break;
        }
        break;
    }

  },
  //搜素
  searchApp() {
    util.pageJump('/pages/publish/pages/search/search')
  },
  //新闻
  //新闻列表
  getNewsList() {
    let url = 'https://api-cms.yjhlnews.cn/v1/classify_content/13/?sorce_type=0&limit=3';
    util.requestData(url, 'GET', {}).then(res => {
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

  /**
     * 生命周期函数--监听页面加载
     */
  onLoad: function (options) {
    this.getNewsList();
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
