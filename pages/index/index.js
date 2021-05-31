const util = require('../../utils/util')
const login = require('../../utils/login')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: wx.getStorageSync("isLogin"),
    name: wx.getStorageSync("name"),
    CustomBar: app.globalData.CustomBar,
    // 服务初始值
    TabCur: 0,
    MainCur: 0,
    load: true,
    VerticalNavTop: 0,
    iconImgUrl: "",
    topImg: "",
    bottomImg: "",
    currentTime: util.formatDate(new Date) + ' ' + util.getWeekByDate(new Date()), //当前时间
    modules: null,
    service: null,
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
    let service = this.data.service;
    let tabHeight = 0;
    if (that.data.load) {
      for (let i = 0; i < service.length; i++) {
        let view = wx.createSelectorQuery().in(this).select("#main-" + service[i].id);
        //console.log(view)
        view.fields({
          size: true
        }, data => {
          service[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          service[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        service: service
      })
    }
    let scrollTop = e.detail.scrollTop + 50;
    for (let i = 0; i < service.length; i++) {
      if (scrollTop > service[i].top && scrollTop < service[i].bottom) {
        that.setData({
          VerticalNavTop: (service[i].id - 1) * 50,
          TabCur: service[i].id
        })
        return false
      }
    }
  },

  //搜索
  searchApp() {
    util.pageJump('/pages/publish/pages/search/search')
  },

  // 个人中心
  goUserCenter() {
    util.pageJump("../../pages/plugin/home/home")
  },
  // 预约缴费详情
  goFeeDetail(e) {
    util.pageJump(e.currentTarget.dataset.href)
  },
  // 业务详情页
  goServiceDetail(e) {
    console.log(e.currentTarget.dataset)
    if (e.currentTarget.dataset.url == "") {
      wx.showToast({
        title: '功能正在完善中',
        icon: 'none'
      })
    } else {
      if (e.currentTarget.dataset.type === 0) {
        // 页面跳转
        if (e.currentTarget.dataset.login) {
          util.pageJumpTo(e.currentTarget.dataset.url, 'tit', e.currentTarget.dataset.tit)
        } else {
          if (!login.isLogin()) return
        }

      } else if (e.currentTarget.dataset.type === 1) {
        // 小程序跳转 url=appid
        wx.navigateToMiniProgram({
          appId: e.currentTarget.dataset.url,
          path: '',
          success: function (res) { },
          fail: function (res) { }
        })
      } else if (e.currentTarget.dataset.type === 2) {
        console.log(e.currentTarget.dataset.url)
        console.log(e.currentTarget.dataset.url)
        console.log(e.currentTarget.dataset.url)
        // webView 跳转
        wx.navigateTo({
          url: '../../pages/appointment/pages/webView/webView?url=' + e.currentTarget.dataset.url + "&tit=" + e.currentTarget.dataset.tit,
        })
      }
    }

  },

  // 数据请求
  getData() {
    let url = 'https://www.yjhlcity.com/modules.json';
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data)
      console.log(res.data.modules[6].list)
      this.setData({
        modules: res.data.modules,
        iconImgUrl: res.data.iconImgUrl,
        topImg: res.data.topImg,
        bottomImg: res.data.bottomImg,
        service: res.data.modules[6].list
      })
    });
  },
  // 测试
  getDataSource() {
    let data = {
      "iconImgUrl": "https://www.yjhlcity.com/InfoIssue/miniapp",
      "topImg": "https://www.yjhlcity.com/InfoIssue/miniapp/zjms/top.png",
      "bottomImg": "https://www.yjhlcity.com/InfoIssue/miniapp/zjms/bottom.png",
      "modules": [{
          "id": "",
          "type": "banner",
          "num": 0,
          "title": "banner",
          "enable": 1,
          "more": {
            "enable": 1,
            "href": "",
            "openType": ""
          },
          "apiUrl": "url",
          "list": [{
            "id": 0,
            "name": "",
            "summary": "",
            "icon": "/zjms/swiper1.png",
            "href": "",
            "openType": "",
            "enable": 1,
            "islogin":true,
            "content": [{
              "islogin":true,
              "enable": 1,
              "id": 0,
              "tit": "",
              "icon": "",
              "url": "",
              "openType": ""
            }]
          }]
        },
        {
          "id": "",
          "type": "news",
          "num": 0,
          "title": "热点新闻",
          "enable": 1,
          "more": {
            "enable": 0,
            "href": "",
            "openType": ""
          },
          "apiUrl": "url",
          "list": [{
              "id": 0,
              "name": "自治区民政厅厅长姜宏赴伊金霍洛旗调研指导工作",
              "summary": "",
              "icon": "",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 1,
              "name": "伊金霍洛旗政府投资项目代建中心成立",
              "summary": "",
              "icon": "",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 2,
              "name": "我旗开展“5·18国际博物馆日”主题宣传活动",
              "summary": "",
              "icon": "",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            }
          ]
        },
        {
          "id": "",
          "type": "recommend",
          "num": 4,
          "title": "特别推荐",
          "enable": 1,
          "more": {
            "enable": 0,
            "href": "",
            "openType": ""
          },
          "apiUrl": "url",
          "list": [{
              "id": 0,
              "name": "核酸检测",
              "summary": "",
              "icon": "/zjms/1.png",
              "href": "../medical/pages/nucleicAcidCheck/nucleicAcidCheck",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 1,
              "name": "疫苗接种",
              "summary": "",
              "icon": "/zjms/2.png",
              "href": "../medical/pages/vaccine/vaccine",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 2,
              "name": "业务预审",
              "summary": "",
              "icon": "/zjms/3.png",
              "href": "../government/pages/thingsGuide/thingsGuide",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 3,
              "name": "转学办理",
              "summary": "",
              "icon": "/zjms/4.png",
              "href": "../education/pages/transfer/transfer",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 4,
              "name": "大厅指引",
              "summary": "",
              "icon": "/zjms/5.png",
              "href": "../government/pages/guide/guide",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 5,
              "name": "学生资助",
              "summary": "",
              "icon": "/zjms/6.png",
              "href": "../education/pages/studentHelp/studentHelp",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 6,
              "name": "旗长热线",
              "summary": "",
              "icon": "/zjms/7.png",
              "href": "../government/pages/flagLeader/flagLeader",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 7,
              "name": "律师公证",
              "summary": "",
              "icon": "/zjms/8.png",
              "href": "../help/pages/law/law",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 8,
              "name": "二手交易",
              "summary": "",
              "icon": "/zjms/9.png",
              "href": "../economic/pages/secondHand/secondHand",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 9,
              "name": "特色美食",
              "summary": "",
              "icon": "/zjms/10.png",
              "href": "../food/pages/specialFood/specialFood",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 10,
              "name": "知名景点",
              "summary": "",
              "icon": "/zjms/11.png",
              "href": "../travel/pages/scenicSpot/scenicSpot",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 11,
              "name": "数字文化",
              "summary": "",
              "icon": "/zjms/12.png",
              "href": "wxd22d0af6881402ea",
              "openType": 1,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 12,
              "name": "周边公厕",
              "summary": "",
              "icon": "/zjms/13.png",
              "href": "../travel/pages/toilet/toilet",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 13,
              "name": "找充电桩",
              "summary": "",
              "icon": "/zjms/14.png",
              "href": "../travel/pages/electric/electric",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 14,
              "name": "失信人员",
              "summary": "",
              "icon": "/zjms/15.png",
              "href": "../help/pages/dishonest/dishonest",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 15,
              "name": "随手拍",
              "summary": "",
              "icon": "/zjms/16.png",
              "href": "../government/pages/instaShot/instaShot",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            }
          ]
        },
        {
          "id": "",
          "type": "tv",
          "num": 0,
          "title": "伊金霍洛之窗",
          "enable": 1,
          "more": {
            "enable": 0,
            "href": "",
            "openType": ""
          },
          "apiUrl": "url",
          "list": [{
            "id": 0,
            "name": "",
            "summary": "",
            "icon": "",
            "href": "https://cms-play.yjhlnews.cn/live/vedio.m3u8?auth_key=1631242686-0-0-4856241673b394d2762481a643d942f9",
            "openType": "",
            "enable": 1,
            "islogin":true,
            "content": [{
              "enable": 1,
              "islogin":true,
              "id": 0,
              "tit": "",
              "icon": "",
              "url": "",
              "openType": ""
            }]
          }]
        },
        {
          "id": "",
          "type": "radio",
          "num": 0,
          "title": "伊金霍洛之声",
          "enable": 1,
          "more": {
            "enable": 0,
            "href": "",
            "openType": ""
          },
          "apiUrl": "url",
          "list": [{
            "id": 0,
            "name": "",
            "summary": "",
            "icon": "/zjms/fm.png",
            "href": "../../pages/publish/pages/radio/radio",
            "openType": 0,
            "enable": 1,
            "islogin":true,
            "content": [{
              "enable": 1,
              "islogin":true,
              "id": 0,
              "tit": "",
              "icon": "",
              "url": "",
              "openType": ""
            }]
          }]
        },
        {
          "id": "",
          "type": "city",
          "num": 3,
          "title": "智慧城市",
          "enable": 1,
          "more": {
            "enable": 0,
            "href": "",
            "openType": ""
          },
          "apiUrl": "url",
          "list": [{
              "id": 0,
              "name": "智慧城管",
              "summary": "",
              "icon": "/zjms/city1.png",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 1,
              "name": "智慧管网",
              "summary": "",
              "icon": "/zjms/city2.png",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 2,
              "name": "智慧园林",
              "summary": "",
              "icon": "/zjms/city3.png",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 3,
              "name": "智慧社区",
              "summary": "",
              "icon": "/zjms/city4.png",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 4,
              "name": "智慧应急",
              "summary": "",
              "icon": "/zjms/city5.png",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 5,
              "name": "在职党员",
              "summary": "",
              "icon": "/zjms/city6.png",
              "href": "在职党员",
              "openType": 2,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            }
          ]
        },
        {
          "id": "",
          "type": "service",
          "num": 0,
          "title": "服务",
          "enable": 1,
          "more": {
            "enable": 0,
            "href": "",
            "openType": ""
          },
          "apiUrl": "url",
          "list": [{
              "id": 0,
              "name": "今日伊旗",
              "summary": "",
              "icon": "",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                  "enable": 1,
                  "islogin":true,
                  "id": 0,
                  "tit": "听广播",
                  "icon": "/image/1.png",
                  "url": "../publish/pages/radio/radio",
                  "openType": 0
                },
    
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 1,
                  "tit": "看电视",
                  "icon": "/image/2.png",
                  "url": "../publish/pages/tv/tv",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 2,
                  "tit": "推优榜",
                  "icon": "/image/3.png",
                  "url": "../publish/pages/pushBest/pushBest",
                  "openType": 0
                }
              ]
            },
    
            {
              "id": 1,
              "name": "大美伊旗",
              "summary": "",
              "icon": "",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                  "enable": 1,
                  "islogin":true,
                  "id": 0,
                  "tit": "伊旗概况",
                  "icon": "/image/24.png",
                  "url": "../charm/pages/introduce/introduce",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 1,
                  "tit": "历史文化",
                  "icon": "/image/5.png",
                  "url": "../charm/pages/historyCulture/historyCulture",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 2,
                  "tit": "村情乡貌",
                  "icon": "/image/4.png",
                  "url": "../charm/pages/villageProduct/villageProduct",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 3,
                  "tit": "土地认养",
                  "icon": "/image/56.png",
                  "url": "../government/pages/land/land",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 4,
                  "tit": "投资兴业",
                  "icon": "/image/6.png",
                  "url": "../charm/pages/investment/investment",
                  "openType": 0
                }
              ]
            },
            {
              "id": 2,
              "name": "游在伊旗",
              "summary": "",
              "icon": "",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                  "enable": 1,
                  "islogin":true,
                  "id": 0,
                  "tit": "知名景点",
                  "icon": "/image/7.png",
                  "url": "../travel/pages/scenicSpot/scenicSpot",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 1,
                  "tit": "天气预报",
                  "icon": "/image/8.png",
                  "url": "../travel/pages/weather/weather",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 2,
                  "tit": "飞机火车",
                  "icon": "/image/9.png",
                  "url": "../travel/pages/train/train",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 3,
                  "tit": "长途汽车",
                  "icon": "/image/10.png",
                  "url": "../travel/pages/car/car",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 4,
                  "tit": "公交出租",
                  "icon": "/image/11.png",
                  "url": "../travel/pages/bus/bus",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 5,
                  "tit": "酒店宾馆",
                  "icon": "/image/12.png",
                  "url": "../travel/pages/hotel/hotel",
    
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 6,
                  "tit": "周边公厕",
                  "icon": "/image/13.png",
                  "url": "../travel/pages/toilet/toilet",
    
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 7,
                  "tit": "找充电桩",
                  "icon": "/image/14.png",
                  "url": "../travel/pages/electric/electric",
    
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 8,
                  "tit": "乡村旅游",
                  "icon": "/image/15.png",
                  "url": "../travel/pages/ruralTourism/ruralTourism",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 9,
                  "tit": "图书资源",
                  "icon": "/image/82.png",
                  "url": "../education/pages/library/library",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 10,
                  "tit": "数字文化",
                  "icon": "/image/83.png",
                  "url": "wx7bb81a7623f3c865",
                  "openType": 1
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 11,
                  "tit": "天骄非遗",
                  "icon": "/image/81.png",
                  "url": "../education/pages/tianjiaofeiyi/tianjaofeiyi",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 12,
                  "tit": "乌兰牧骑",
                  "icon": "/image/84.png",
                  "url": "../education/pages/wulanmuqi/wulanmuqi",
                  "openType": 0
                }
              ]
            },
            {
              "id": 3,
              "name": "食在伊旗",
              "summary": "",
              "icon": "",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                  "enable": 1,
                  "islogin":true,
                  "id": 0,
                  "tit": "特色美食",
                  "icon": "/image/16.png",
                  "url": "../food/pages/specialFood/specialFood",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 1,
                  "tit": "经济快餐",
                  "icon": "/image/17.png",
                  "url": "../food/pages/economicsFood/economicsFood",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 2,
                  "tit": "酒店餐饮",
                  "icon": "/image/18.png",
                  "url": "../food/pages/topFood/topFood",
                  "openType": 0
                },
                {
                  "id": 3,
                  "tit": "民族食品",
                  "icon": "/image/19.png",
                  "url": "../food/pages/nationFood/nationFood",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 4,
                  "tit": "饮食文化",
                  "icon": "/image/20.png",
                  "url": "../food/pages/cultureFood/cultureFood",
                  "openType": 0
                },
                {
                  "enable": 3,
                  "islogin":true,
                  "id": 5,
                  "tit": "食品安全",
                  "icon": "/image/21.png",
                  "url": "../food/pages/animalFood/animalFood",
                  "openType": 0
                }
              ]
            },
            {
              "id": 4,
              "name": "教育文体",
              "summary": "",
              "icon": "",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                  "enable": 1,
                  "islogin":true,
                  "id": 0,
                  "tit": "学前教育",
                  "icon": "/image/31.png",
                  "url": "../education/pages/primarySchool/primarySchool",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 1,
                  "tit": "中小学",
                  "icon": "/image/32.png",
                  "url": "../education/pages/midSchool/midSchool",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 2,
                  "tit": "学生资助",
                  "icon": "/image/33.png",
                  "url": "../education/pages/studentHelp/studentHelp",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 3,
                  "tit": "转学办理",
                  "icon": "/image/34.png",
                  "url": "../education/pages/transfer/transfer",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 4,
                  "tit": "图书商店",
                  "icon": "/image/36.png",
                  "url": "wxd22d0af6881402ea",
                  "openType": 1
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 5,
                  "tit": "校外培训机构",
                  "icon": "/image/37.png",
                  "url": "../education/pages/mbSchool/mbSchool",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 6,
                  "tit": "家庭教育",
                  "icon": "/image/38.png",
                  "url": "../education/pages/homeEducate/homeEducate",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 7,
                  "tit": "文体健身",
                  "icon": "/image/40.png",
                  "url": "../education/pages/fitness/fitness",
                  "openType": 0
                }
              ]
            },
            {
              "id": 5,
              "name": "医疗康养",
              "summary": "",
              "icon": "",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                  "enable": 1,
                  "islogin":true,
                  "id": 0,
                  "tit": "医院药店",
                  "icon": "/image/41.png",
                  "url": "../medical/pages/hospital/hospital",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 1,
                  "tit": "健康证",
                  "icon": "/image/42.png",
                  "url": "wx7c812e7ef680c8d7",
                  "openType": 1
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 2,
                  "tit": "疫苗接种",
                  "icon": "/image/43.png",
                  "url": "../medical/pages/vaccine/vaccine",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 3,
                  "tit": "核酸检测",
                  "icon": "/image/45.png",
                  "url": "../medical/pages/nucleicAcidCheck/nucleicAcidCheck",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 4,
                  "tit": "养老院",
                  "icon": "/image/48.png",
                  "url": "../medical/pages/welfareHouse/welfareHouse",
                  "openType": 0
                }
              ]
            },
            {
              "id": 6,
              "name": "政务服务",
              "summary": "",
              "icon": "",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                  "enable": 1,
                  "islogin":true,
                  "id": 0,
                  "tit": "办事指南",
                  "icon": "/image/78.png",
                  "url": "../government/pages/thingsGuide/thingsGuide",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 1,
                  "tit": "大厅指引",
                  "icon": "/image/49.png",
                  "url": "../government/pages/guide/guide",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 2,
                  "tit": "旗长热线",
                  "icon": "/image/50.png",
                  "url": "../government/pages/flagLeader/flagLeader",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 3,
                  "tit": "旗镇互通",
                  "icon": "/image/51.png",
                  "url": "../government/pages/eachFlagTown/eachFlagTown",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 4,
                  "tit": "问卷调查",
                  "icon": "/image/52.png",
                  "url": "../government/pages/questionnaire/questionnaire",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 5,
                  "tit": "随手拍",
                  "icon": "/image/53.png",
                  "url": "../government/pages/instaShot/instaShot",
                  "openType": 0
                },
                {
                  "islogin":true,
                  "id": 6,
                  "tit": "创城行动",
                  "icon": "/image/55.png",
                  "url": "../government/pages/cityAction/cityAction",
                  "openType": 0
                }
              ]
            },
            {
              "id": 7,
              "name": "维权助困",
              "summary": "",
              "icon": "",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                  "enable": 1,
                  "islogin":true,
                  "id": 0,
                  "tit": "助残服务",
                  "icon": "/image/57.png",
                  "url": "../help/pages/disabled/disabled",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 1,
                  "tit": "红十字救助",
                  "icon": "/image/59.png",
                  "url": "../help/pages/redcross/redcross",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 2,
                  "tit": "失信人员",
                  "icon": "/image/60.png",
                  "url": "../help/pages/dishonest/dishonest",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 3,
                  "tit": "法律服务",
                  "icon": "/image/61.png",
                  "url": "../help/pages/law/law",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 4,
                  "tit": "老人关互",
                  "icon": "/image/47.png",
                  "url": "wx81bd4b25fc86cfa1",
                  "openType": 1
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 5,
                  "tit": "女性关护",
                  "icon": "/image/62.png",
                  "url": "../help/pages/woman/woman",
                  "openType": 0
                }
              ]
            },
            {
              "id": 8,
              "name": "生活服务",
              "summary": "",
              "icon": "",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                  "enable": 1,
                  "islogin":true,
                  "id": 0,
                  "tit": "商场超市",
                  "icon": "/image/22.png",
                  "url": "../economic/pages/market/market",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 1,
                  "tit": "农贸市场",
                  "icon": "/image/23.png",
                  "url": "../economic/pages/farmerMarket/farmerMarket",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 2,
                  "tit": "二手交易",
                  "icon": "/image/25.png",
                  "url": "../economic/pages/secondHand/secondHand",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 3,
                  "tit": "农资门市",
                  "icon": "/image/26.png",
                  "url": "../economic/pages/farmerRetail/farmerRetail",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 4,
                  "tit": "会展活动",
                  "icon": "/image/27.png",
                  "url": "../economic/pages/exhibition/exhibition",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 5,
                  "tit": "消费维权",
                  "icon": "/image/28.png",
                  "url": "../economic/pages/protectRight/protectRight",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 6,
                  "tit": "商业活动",
                  "icon": "/image/29.png",
                  "url": "../economic/pages/promotion/promotion",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 7,
                  "tit": "知识产权",
                  "icon": "/image/30.png",
                  "url": "wx6bbf6fb40f3c4bfc",
                  "openType": 1
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 8,
                  "tit": "农业技术",
                  "icon": "/image/39.png",
                  "url": "../education/pages/agricultural/agricultural",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 9,
                  "tit": "家政服务",
                  "icon": "/image/63.png",
                  "url": "../life/pages/housekeeping/housekeeping",
                  "openType": 0
                },
                {
                  "enable": 3,
                  "islogin":true,
                  "id": 10,
                  "tit": "物业服务",
                  "icon": "/image/64.png",
                  "url": "../life/pages/property/property",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 11,
                  "tit": "就业服务",
                  "icon": "/image/66.png",
                  "url": "../life/pages/job/job",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 12,
                  "tit": "美发洗浴",
                  "icon": "/image/67.png",
                  "url": "../life/pages/hairdressing/hairdressing",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 13,
                  "tit": "代驾挪车",
                  "icon": "/image/68.png",
                  "url": "../life/pages/moveCar/moveCar",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 14,
                  "tit": "顺风车",
                  "icon": "/image/69.png",
                  "url": "../life/pages/car/car",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 15,
                  "tit": "转让信息",
                  "icon": "/image/70.png",
                  "url": "../life/pages/productionTransfer/productionTransfer",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 16,
                  "tit": "生鲜配送",
                  "icon": "/image/71.png",
                  "url": "../life/pages/seafood/seafood",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 17,
                  "tit": "电影剧院",
                  "icon": "/image/75.png",
                  "url": "../life/pages/film/film",
                  "openType": 0
                },
                {
                  "enable": 3,
                  "islogin":true,
                  "id": 18,
                  "tit": "公租房",
                  "icon": "/image/77.png",
                  "url": "../life/pages/publicRentalHousing/publicRentalHousing",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 19,
                  "tit": "志愿者",
                  "icon": "/image/54.png",
                  "url": "../government/pages/volunteerService/volunteerService",
                  "openType": 0
                },
                {
                  "enable": 1,
                  "islogin":true,
                  "id": 20,
                  "tit": "微心愿",
                  "icon": "/image/85.png",
                  "url": "../government/pages/wxyService/wxyService",
                  "openType": 0
                }
              ]
            }
          ]
        },
        {
          "id": "",
          "type": "dept",
          "num": 4,
          "title": "各委办局",
          "enable": 1,
          "more": {
            "enable": 1,
            "href": "",
            "openType": ""
          },
          "apiUrl": "url",
          "list": [{
              "id": 0,
              "name": "司法局",
              "summary": "",
              "icon": "/zjms/dept1.png",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 1,
              "name": "税务局",
              "summary": "",
              "icon": "/zjms/dept2.png",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 2,
              "name": "工商局",
              "summary": "",
              "icon": "/zjms/dept3.png",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 3,
              "name": "安监局",
              "summary": "",
              "icon": "/zjms/dept4.png",
              "href": "",
              "openType": "",
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            }
          ]
        },
        {
          "id": "",
          "type": "fee",
          "num": 0,
          "title": "预约缴费",
          "enable": 1,
          "more": {
            "enable": 0,
            "href": "",
            "openType": ""
          },
          "apiUrl": "url",
          "list": [{
              "id": 0,
              "name": "预约",
              "summary": "在线预约服务",
              "icon": "/zjms/fee1.png",
              "href": "../../pages/about/home/home",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            },
            {
              "id": 1,
              "name": "缴费",
              "summary": "在线缴费服务",
              "icon": "/zjms/fee2.png",
              "href": "../../pages/pay/home/home",
              "openType": 0,
              "enable": 1,
              "islogin":true,
              "content": [{
                "enable": 1,
                "islogin":true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "openType": ""
              }]
            }
          ]
        }
      ]
    }
    console.log(data)
    this.setData({
      modules: data.modules,
      iconImgUrl: data.iconImgUrl,
      topImg: data.topImg,
      bottomImg: data.bottomImg,
      service: data.modules[6].list
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getData()
    // 测试
    this.getDataSource()
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