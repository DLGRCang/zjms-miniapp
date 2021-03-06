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
    newsInfo: null,
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
  // 0普通小程序页面跳转，1小程序之间跳转 2.webview跳转
  goServiceDetail(e) {
    console.log(e.currentTarget.dataset)
    if (e.currentTarget.dataset.url == "") {
      wx.showToast({
        title: '您不是' + e.currentTarget.dataset.tit + '系统人员，无权访问',
        icon: 'none'
      })
    } else {
      if (e.currentTarget.dataset.type === 0) {
        // 统计
        util.requestApi('businesstatistic/savebusinesstatistic', 'POST', {
          businesName: e.currentTarget.dataset.tit
        }).then(res => {});
        // 页面跳转
        if (e.currentTarget.dataset.login) {
          if (e.currentTarget.dataset.tit == '会议管理') {
            if (!login.isLogin()) return
          }
          if (e.currentTarget.dataset.tit == '云上办') {
            if (!login.isLogin()) return
          }
          if (e.currentTarget.dataset.tit == '问卷调查') {
            if (!login.isLogin()) return
          }
          if (e.currentTarget.dataset.tit == '核酸扫码') {
            if (!login.isLogin()) return
          }
          util.pageJumpTo(e.currentTarget.dataset.url, 'tit', e.currentTarget.dataset.tit)

        } else {
          if (!login.isLogin()) return
        }

      } else if (e.currentTarget.dataset.type === 1) {
        // 统计
        util.requestApi('businesstatistic/savebusinesstatistic', 'POST', {
          businesName: e.currentTarget.dataset.tit
        }).then(res => {});
        // 小程序跳转 url=appid
        console.log(e.currentTarget.dataset.url)
        console.log(e.currentTarget.dataset.color)
        wx.navigateToMiniProgram({
          appId: e.currentTarget.dataset.url,
          path: e.currentTarget.dataset.color,
          success: function (res) {
            console.log("成功")
            console.log(res)
          },
          fail: function (res) {
            console.log("失败")
            console.log(res)
          }
        })
      } else if (e.currentTarget.dataset.type === 2) {
        console.log("-----"+e.currentTarget.dataset.login)
        if (e.currentTarget.dataset.login == true) {
          if (!login.isLogin()) return
        }
        // 统计
        util.requestApi('businesstatistic/savebusinesstatistic', 'POST', {
          businesName: e.currentTarget.dataset.tit
        }).then(res => {});
        // webView 跳转
       
        console.log(e.currentTarget.dataset.data)
        wx.navigateTo({
          url: '../../pages/appointment/pages/webView/webView?params='+JSON.stringify(e.currentTarget.dataset.data)
           +"&url="+e.currentTarget.dataset.url+ "&tit=" + e.currentTarget.dataset.tit + "&color=" + e.currentTarget.dataset.color,
        })
      }
    }

  },

  //新闻列表
  getNewsList() {
    let url = 'https://api-cms.yjhlnews.cn/v1/classify_content/13/?sorce_type=0&limit=10';
    util.httpRequest(url, 'GET', {}).then(res => {
      console.log(res.data.data)
      this.setData({
        newsInfo: res.data.data
      })
    });
  },

  goOfficeNews() {
    util.pageJump("../publish/pages/officialNewsList/officialNewsList")
  },

  // 新闻详情
  goNewsDetail(e) {
    util.pageJumpTo('../publish/pages/officialNewsDetail/officialNewsDetail', 'id', e.currentTarget.dataset.id)
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
  getDataTest() {
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
          "color": "",
          "openType": ""
        },
        "apiUrl": "url",
        "list": [{
          "id": 0,
          "name": "会议管理",
          "summary": "",
          "icon": "/zjms/swiper2.png",
          "href": "../medical/pages/meeting/meeting",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "islogin": true,
            "enable": 1,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
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
          "color": "",
          "openType": ""
        },
        "apiUrl": "url",
        "list": [
          {
            "id": 0,
            "name": "",
            "summary": "",
            "icon": "",
            "href": "",
            "color": "",
            "openType": 0,
            "enable": 1,
            "islogin": true,
            "content": [{
              "enable": 1,
              "islogin": true,
              "id": 0,
              "tit": "",
              "icon": "",
              "url": "",
              "color": "",
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
          "color": "",
          "openType": ""
        },
        "apiUrl": "url",
        "list": [
 {
              "id": 0,
              "name": "核酸扫码",
              "summary": "",
              "icon": "/image/hesuansaoma.png",
              "href": "../medical/pages/scan/scan",
              "color": "#000",
              "openType": 0,
              "enable": 1,
              "islogin": true,
              "content": [{
                "enable": 1,
                "islogin": true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "color": "",
                "openType": ""
              }]
            },

            {
              "id": 0,
              "name": "核酸预约",
              "summary": "",
              "icon": "/image/hesuanyuyue.png",
              "href": "https://www.yjhlcity.com/form-report/route/covid19-testing-appointment/public/get-mine",
              "data":{
                "userId": ""
              },
              "color": "#019688",
              "openType": 2,
              "enable": 1,
              "islogin": true,
              "content": [{
                "enable": 1,
                "islogin": true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "color": "",
                "openType": ""
              }]
            },
            {
              "id": 0,
              "name": "煤矿到访登记",
              "summary": "",
              "icon": "/image/meikuangdaofangdengji.png",
              "href": "https://www.yjhlcity.com/form-report/route/coal-appointment/public/get-mine",
              "data":{
                "userId": ""
              },
              "color": "#019688",
              "openType": 2,
              "enable": 1,
              "islogin": true,
              "content": [{
                "enable": 1,
                "islogin": true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "color": "",
                "openType": ""
              }]
            },
          {
              "id": 0,
              "name": "远通天下",
              "summary": "",
              "icon": "/image/yuantongtianxia.png",
              "href": "wx5c882c46802b5888",
              "color": "pages/index/index",
              "openType": 1,
              "enable": 1,
              "islogin": true,
              "content": [ {
                "enable": 1,
                "islogin": true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "color": "",
                "openType": ""
            }]},
            {
              "id": 0,
              "name": "健康码",
              "summary": "",
              "icon": "/image/003.png",
              "href": "wx2eec5fb00157a603",
              "color": "fangkongfuwu/pages/healthCode/step_3/index",
              "openType": 1,
              "enable": 1,
              "islogin": true,
              "content": [ {
                "enable": 1,
                "islogin": true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "color": "",
                "openType": ""
            }]},
            {
              "id": 0,
              "name": "行程码",
              "summary": "",
              "icon": "/image/002.png",
              "href": "wx8f446acf8c4a85f5",
              "color": "",
              "openType": 1,
              "enable": 1,
              "islogin": true,
              "content": [ {
                "enable": 1,
                "islogin": true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "color": "",
                "openType": ""
            }]},
            
            {
              "id": 0,
              "name": "核酸结果",
              "summary": "",
              "icon": "/image/hesuanjieguo.png",
              "href": "wxbebb3cdd9b331046",
              "color": "doctor/pages/nucleate/form/index?provider=本服务由国家卫生健康委提供&footer=本服务由国家卫生健康委提供&tag=home&id=113&type=核酸检测证明&title=新冠病毒核酸/抗体检测结果查询",
              "openType": 1,
              "enable": 1,
              "islogin": true,
              "content": [ {
                "enable": 1,
                "islogin": true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "color": "",
                "openType": ""
            }]},
            {
              "id": 0,
              "name": "密接筛查",
              "summary": "",
              "icon": "/image/mijiesaicha.png",
              "href": "wx2eec5fb00157a603",
              "color": "fangkongfuwu/pages/ConfirmedOrSuspectedCaseShareSelfCheck/fillInfo/fillInfo?eid=YQ_WJW_TXZXFW,GSS_YQ&source=yqResultPage",
              "openType": 1,
              "enable": 1,
              "islogin": true,
              "content": [ {
                "enable": 1,
                "islogin": true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "color": "",
                "openType": ""
            }]},
            {
              "id": 0,
              "name": "疫情风险等级",
              "summary": "",
              "icon": "/image/yiqingfengxiandengji.png",
              "href": "wxbebb3cdd9b331046",
              "color": "publicService/pages/riskGrade/riskGrade?provider=本服务由国家卫生健康委提供&footer=本服务由国家卫生健康委提供&tag=home&id=105&type=疫情风险查询&title=疫情风险等级查询",
              "openType": 1,
              "enable": 1,
              "islogin": true,
              "content": [ {
                "enable": 1,
                "islogin": true,
                "id": 0,
                "tit": "",
                "icon": "",
                "url": "",
                "color": "",
                "openType": ""
            }]},{
          "id": 0,
          "name": "核酸检测",
          "summary": "",
          "icon": "/zjms/1.png",
          "href": "../medical/pages/nucleicAcidCheck/nucleicAcidCheck",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 1,
          "name": "疫苗接种",
          "summary": "",
          "icon": "/zjms/2.png",
          "href": "../medical/pages/vaccine/vaccine",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 2,
          "name": "业务预审",
          "summary": "",
          "icon": "/zjms/3.png",
          "href": "../government/pages/thingsGuide/thingsGuide",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 3,
          "name": "转学办理",
          "summary": "",
          "icon": "/zjms/4.png",
          "href": "../education/pages/transfer/transfer",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 4,
          "name": "大厅指引",
          "summary": "",
          "icon": "/zjms/5.png",
          "href": "../government/pages/guide/guide",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 5,
          "name": "学生资助",
          "summary": "",
          "icon": "/zjms/6.png",
          "href": "../education/pages/studentHelp/studentHelp",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 6,
          "name": "旗长热线",
          "summary": "",
          "icon": "/zjms/7.png",
          "href": "../government/pages/flagLeader/flagLeader",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 7,
          "name": "律师公证",
          "summary": "",
          "icon": "/zjms/8.png",
          "href": "../help/pages/law/law",
          "color": "#FFBE1A",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 8,
          "name": "二手交易",
          "summary": "",
          "icon": "/zjms/9.png",
          "href": "../economic/pages/secondHand/secondHand",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 9,
          "name": "特色美食",
          "summary": "",
          "icon": "/zjms/10.png",
          "href": "wx2612dde8b5df3d03",
          "color": "pages/meishijiudian/index?id=f785f6829d6e4a998b796e26ea2e50ce&tit=特色菜",
          "openType": 1,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 10,
          "name": "知名景点",
          "summary": "",
          "icon": "/zjms/11.png",
          "href": "../travel/pages/scenicSpot/scenicSpot",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 11,
          "name": "金融服务",
          "summary": "",
          "icon": "/zjms/12.png",
          "href": "wxd19423e90ba635e8",
          "color": "pages/home/homeTwo/homeTwo",
          "openType": 1,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 12,
          "name": "周边公厕",
          "summary": "",
          "icon": "/zjms/13.png",
          "href": "../travel/pages/toilet/toilet",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 13,
          "name": "找充电桩",
          "summary": "",
          "icon": "/zjms/14.png",
          "href": "../travel/pages/electric/electric",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 14,
          "name": "失信人员",
          "summary": "",
          "icon": "/zjms/15.png",
          "href": "../help/pages/dishonest/dishonest",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 15,
          "name": "随手拍",
          "summary": "",
          "icon": "/zjms/16.png",
          "href": "../government/pages/instaShot/instaShot",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
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
          "color": "",
          "openType": ""
        },
        "apiUrl": "url",
        "list": [{
          "id": 0,
          "name": "",
          "summary": "",
          "icon": "",
          "href": "https://cms-play.yjhlnews.cn/live/vedio.m3u8?auth_key=1631242686-0-0-4856241673b394d2762481a643d942f9",
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
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
          "color": "",
          "openType": ""
        },
        "apiUrl": "url",
        "list": [{
          "id": 0,
          "name": "",
          "summary": "",
          "icon": "/zjms/fm.png",
          "href": "../../pages/publish/pages/radio/radio",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
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
          "color": "",
          "openType": ""
        },
        "apiUrl": "url",
        "list": [{
          "id": 0,
          "name": "智慧城管",
          "summary": "",
          "icon": "/zjms/city1.png",
          "href": "https://www.yjhlcity.com/yjhl_HTML/",
          "color": "",
          "openType": 2,
          "enable": 1,
          "islogin": false,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 1,
          "name": "智慧管网",
          "summary": "",
          "icon": "/zjms/city2.png",
          "href": "https://www.yjhlcity.com/mphone-web/",
          "color": "",
          "openType": 2,
          "enable": 1,
          "islogin": false,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 2,
          "name": "智慧园林",
          "summary": "",
          "icon": "/zjms/city3.png",
          "href": "https://www.yjhlcity.com/park/",
          "color": "",
          "openType": 2,
          "enable": 1,
          "islogin": false,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 3,
          "name": "智慧社区",
          "summary": "",
          "icon": "/zjms/city4.png",
          "href": "wx41d4d4ec96a867ad",
          "color": "",
          "openType": 1,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 4,
          "name": "智慧应急",
          "summary": "",
          "icon": "/zjms/city5.png",
          "href": "",
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 5,
          "name": "先锋云超市",
          "summary": "",
          "icon": "/zjms/city6.png",
          "href": "先锋云超市",
          "color": "#E60012",
          "openType": 2,
          "enable": 1,
          "islogin": false,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
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
          "color": "",
          "openType": ""
        },
        "apiUrl": "url",
        "list": [{
          "id": 0,
          "name": "今日伊旗",
          "summary": "",
          "icon": "",
          "href": "",
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 1,
            "tit": "听广播",
            "icon": "/image/1.png",
            "url": "../publish/pages/radio/radio",
            "color": "",
            "openType": 0
          },

          {
            "enable": 1,
            "islogin": true,
            "id": 1,
            "tit": "看电视",
            "icon": "/image/2.png",
            "url": "../publish/pages/tv/tv",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 2,
            "tit": "推优榜",
            "icon": "/image/3.png",
            "url": "../publish/pages/pushBest/pushBest",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 3,
            "tit": "云上办",
            "icon": "/image/82.png",
            "url": "../charm/pages/task/task",
            "color": "",
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
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "伊旗概况",
            "icon": "/image/24.png",
            "url": "../charm/pages/introduce/introduce",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 1,
            "tit": "历史文化",
            "icon": "/image/5.png",
            "url": "../charm/pages/historyCulture/historyCulture",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 2,
            "tit": "村情乡貌",
            "icon": "/image/4.png",
            "url": "../charm/pages/villageProduct/villageProduct",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 3,
            "tit": "土地认养",
            "icon": "/image/56.png",
            "url": "../government/pages/land/land",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 4,
            "tit": "投资兴业",
            "icon": "/image/6.png",
            "url": "../charm/pages/investment/investment",
            "color": "",
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
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "知名景点",
            "icon": "/image/7.png",
            "url": "../travel/pages/scenicSpot/scenicSpot",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 1,
            "tit": "天气预报",
            "icon": "/image/8.png",
            "url": "../travel/pages/weather/weather",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 2,
            "tit": "飞机火车",
            "icon": "/image/9.png",
            "url": "../travel/pages/train/train",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 3,
            "tit": "长途汽车",
            "icon": "/image/10.png",
            "url": "../travel/pages/car/car",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 4,
            "tit": "公交出租",
            "icon": "/image/11.png",
            "url": "../travel/pages/bus/bus",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 5,
            "tit": "酒店宾馆",
            "icon": "/image/12.png",
            "url": "wx2612dde8b5df3d03",
            "color": "pages/meishijiudian/index?id=aad6c1b16cee4dc1849e1003ca14c128&tit=酒店",
            "openType": 1
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 6,
            "tit": "周边公厕",
            "icon": "/image/13.png",
            "url": "../travel/pages/toilet/toilet",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 7,
            "tit": "找充电桩",
            "icon": "/image/14.png",
            "url": "../travel/pages/electric/electric",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 8,
            "tit": "乡村旅游",
            "icon": "/image/15.png",
            "url": "../travel/pages/ruralTourism/ruralTourism",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 9,
            "tit": "图书资源",
            "icon": "/image/82.png",
            "color": "",
            "url": "../education/pages/library/library",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 10,
            "tit": "数字文化",
            "icon": "/image/83.png",
            "url": "wx7bb81a7623f3c865",
            "color": "",
            "openType": 1
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 11,
            "tit": "天骄非遗",
            "icon": "/image/81.png",
            "url": "../education/pages/tianjiaofeiyi/tianjaofeiyi",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 12,
            "tit": "乌兰牧骑",
            "icon": "/image/84.png",
            "url": "../education/pages/wulanmuqi/wulanmuqi",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 13,
            "tit": "通行码",
            "icon": "/image/002.png",
            "url": "wx8f446acf8c4a85f5",
            "color": "",
            "openType": 1
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 14,
            "tit": "乘车码",
            "icon": "/image/001.png",
            "url": "wxbb58374cdce267a6",
            "color": "",
            "openType": 1
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 15,
            "tit": "健康码",
            "icon": "/image/003.png",
            "url": "wx2eec5fb00157a603",
            "color": "",
            "openType": 1
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 16,
            "tit": "核酸检测机构",
            "icon": "/image/hsjc.png",
            "url": "wx2eec5fb00157a603",
            "color": "",
            "openType": 1
          }
		  ,
          {
            "enable": 1,
            "islogin": false,
            "id": 16,
            "tit": "供销社",
            "icon": "/image/gxs.png",
            "url": "https://www.yjhlcity.com/ysb/gongxiaoshe.html",
            "color": "",
            "openType": 2
          }
          ]
        },
        {
          "id": 3,
          "name": "食在伊旗",
          "summary": "",
          "icon": "",
          "href": "",
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "特色美食",
            "icon": "/image/16.png",
            "url": "wx2612dde8b5df3d03",
            "color": "pages/meishijiudian/index?id=f785f6829d6e4a998b796e26ea2e50ce&tit=特色菜",
            "openType": 1
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 1,
            "tit": "经济快餐",
            "icon": "/image/17.png",
            "url": "wx2612dde8b5df3d03",
            "color": "pages/xiaoyuancanting/index",
            "openType": 1
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 2,
            "tit": "高档餐饮",
            "icon": "/image/18.png",
            "url": "wx2612dde8b5df3d03",
            "color": "pages/meishijiudian/index?id=8d1a63627dfb4bb2b932c76a3749ed8f&tit=西餐",
            "openType": 1
          },
          {
            "id": 3,
            "tit": "民族食品",
            "icon": "/image/19.png",
            "url": "../food/pages/nationFood/nationFood",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 4,
            "tit": "饮食文化",
            "icon": "/image/20.png",
            "url": "../food/pages/cultureFood/cultureFood",
            "color": "",
            "openType": 0
          },
		  {
            "enable": 1,
            "islogin": true,
            "id": 5,
            "tit": "户外摊点",
            "icon": "/image/24.png",
            "url": "../economic/pages/outdoorStalls/outdoorStalls",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 6,
            "tit": "农畜食品安全",
            "icon": "/image/21.png",
            "url": "../food/pages/animalFood/animalFood",
            "color": "",
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
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "学前教育",
            "icon": "/image/31.png",
            "url": "../education/pages/primarySchool/primarySchool",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 1,
            "tit": "中小学",
            "icon": "/image/32.png",
            "url": "../education/pages/midSchool/midSchool",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 2,
            "tit": "学生资助",
            "icon": "/image/33.png",
            "url": "../education/pages/studentHelp/studentHelp",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 3,
            "tit": "转学办理",
            "icon": "/image/34.png",
            "url": "../education/pages/transfer/transfer",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 4,
            "tit": "图书商店",
            "icon": "/image/36.png",
            "url": "wxd22d0af6881402ea",
            "color": "",
            "openType": 1
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 5,
            "tit": "校外培训机构",
            "icon": "/image/37.png",
            "url": "../education/pages/mbSchool/mbSchool",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 6,
            "tit": "家庭教育",
            "icon": "/image/38.png",
            "url": "../education/pages/homeEducate/homeEducate",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 7,
            "tit": "文体健身",
            "icon": "/image/40.png",
            "url": "../education/pages/fitness/fitness",
            "color": "",
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
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "医院药店",
            "icon": "/image/41.png",
            "url": "../medical/pages/hospital/hospital",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 1,
            "tit": "健康证",
            "icon": "/image/42.png",
            "url": "wx7c812e7ef680c8d7",
            "color": "",
            "openType": 1
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 2,
            "tit": "疫苗接种",
            "icon": "/image/43.png",
            "url": "../medical/pages/vaccine/vaccine",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 3,
            "tit": "核酸检测",
            "icon": "/image/45.png",
            "url": "../medical/pages/nucleicAcidCheck/nucleicAcidCheck",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 4,
            "tit": "养老院",
            "icon": "/image/58.png",
            "url": "../medical/pages/welfareHouse/welfareHouse",
            "color": "",
            "openType": 0
          },
		  {
            "enable": 1,
            "islogin": true,
            "id": 5,
            "tit": "低保户",
            "icon": "/image/48.png",
            "url": "../help/pages/insured/insured",
            "color": "",
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
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "办事指南",
            "icon": "/image/78.png",
            "url": "../government/pages/thingsGuide/thingsGuide",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 1,
            "tit": "大厅指引",
            "icon": "/image/49.png",
            "url": "../government/pages/guide/guide",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 2,
            "tit": "旗长热线",
            "icon": "/image/50.png",
            "url": "../government/pages/flagLeader/flagLeader",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 3,
            "tit": "旗镇互通",
            "icon": "/image/51.png",
            "url": "../government/pages/eachFlagTown/eachFlagTown",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 4,
            "tit": "问卷调查",
            "icon": "/image/52.png",
            "url": "../government/pages/questionnaire/questionnaire",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 5,
            "tit": "随手拍",
            "icon": "/image/53.png",
            "url": "../government/pages/instaShot/instaShot",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 6,
            "tit": "创城行动",
            "icon": "/image/55.png",
            "url": "../government/pages/cityAction/cityAction",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 7,
            "tit": "会议管理",
            "icon": "/image/86.png",
            "url": "../medical/pages/meeting/meeting",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 8,
            "tit": "资料下载",
            "icon": "/image/87.png",
            "url": "../medical/pages/material/material",
            "color": "",
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
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "助残服务",
            "icon": "/image/57.png",
            "url": "../help/pages/disabled/disabled",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 1,
            "tit": "红十字救助",
            "icon": "/image/59.png",
            "url": "../help/pages/redcross/redcross",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 2,
            "tit": "失信人员",
            "icon": "/image/60.png",
            "url": "../help/pages/dishonest/dishonest",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 3,
            "tit": "法律服务",
            "icon": "/image/61.png",
            "url": "../help/pages/law/law",
            "color": "#FFBE1A",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 4,
            "tit": "老人关互",
            "icon": "/image/47.png",
            "url": "wx81bd4b25fc86cfa1",
            "color": "",
            "openType": 1
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 5,
            "tit": "女性关护",
            "icon": "/image/62.png",
            "url": "../help/pages/woman/woman",
            "color": "",
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
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "商场超市",
            "icon": "/image/22.png",
            "url": "../economic/pages/market/market",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 1,
            "tit": "农贸市场",
            "icon": "/image/23.png",
            "url": "../economic/pages/farmerMarket/farmerMarket",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 2,
            "tit": "二手交易",
            "icon": "/image/27.png",
            "url": "../economic/pages/secondHand/secondHand",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 3,
            "tit": "农资门市",
            "icon": "/image/26.png",
            "url": "../economic/pages/farmerRetail/farmerRetail",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 4,
            "tit": "会展活动",
            "icon": "/image/25.png",
            "url": "../economic/pages/exhibition/exhibition",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 5,
            "tit": "消费维权",
            "icon": "/image/28.png",
            "url": "../economic/pages/protectRight/protectRight",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 6,
            "tit": "商业活动",
            "icon": "/image/29.png",
            "url": "../economic/pages/promotion/promotion",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 7,
            "tit": "知识产权",
            "icon": "/image/30.png",
            "url": "wx6bbf6fb40f3c4bfc",
            "color": "",
            "openType": 1
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 8,
            "tit": "农业技术",
            "icon": "/image/39.png",
            "url": "../education/pages/agricultural/agricultural",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 9,
            "tit": "家政服务",
            "icon": "/image/63.png",
            "url": "../life/pages/housekeeping/housekeeping",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 10,
            "tit": "物业服务",
            "icon": "/image/64.png",
            "url": "../life/pages/property/property",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 11,
            "tit": "就业服务",
            "icon": "/image/66.png",
            "url": "../life/pages/job/job",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 12,
            "tit": "美发洗浴",
            "icon": "/image/67.png",
            "url": "../life/pages/hairdressing/hairdressing",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 13,
            "tit": "代驾挪车",
            "icon": "/image/68.png",
            "url": "../life/pages/moveCar/moveCar",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 14,
            "tit": "顺风车",
            "icon": "/image/69.png",
            "url": "../life/pages/car/car",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 15,
            "tit": "转让信息",
            "icon": "/image/70.png",
            "url": "../life/pages/productionTransfer/productionTransfer",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 16,
            "tit": "生鲜配送",
            "icon": "/image/71.png",
            "url": "../life/pages/seafood/seafood",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 17,
            "tit": "电影剧院",
            "icon": "/image/75.png",
            "url": "../life/pages/film/film",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 18,
            "tit": "爱车养护",
            "icon": "/image/77.png",
            "url": "../life/pages/publicRentalHousing/publicRentalHousing",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 19,
            "tit": "志愿者",
            "icon": "/image/54.png",
            "url": "../government/pages/volunteerService/volunteerService",
            "color": "",
            "openType": 0
          },
          {
            "enable": 1,
            "islogin": true,
            "id": 20,
            "tit": "微心愿",
            "icon": "/image/85.png",
            "url": "../government/pages/wxyService/wxyService",
            "color": "",
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
          "color": "",
          "openType": ""
        },
        "apiUrl": "url",
        "list": [{
          "id": 0,
          "name": "司法局",
          "summary": "",
          "icon": "/zjms/dept1.png",
          "href": "",
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 1,
          "name": "税务局",
          "summary": "",
          "icon": "/zjms/dept2.png",
          "href": "",
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 2,
          "name": "工商局",
          "summary": "",
          "icon": "/zjms/dept3.png",
          "href": "",
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 3,
          "name": "安监局",
          "summary": "",
          "icon": "/zjms/dept4.png",
          "href": "",
          "color": "",
          "openType": "",
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
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
          "color": "",
          "openType": ""
        },
        "apiUrl": "url",
        "list": [{
          "id": 0,
          "name": "预约",
          "summary": "在线预约服务",
          "icon": "/zjms/fee1.png",
          "href": "../../pages/about/home/home",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        },
        {
          "id": 1,
          "name": "缴费",
          "summary": "在线缴费服务",
          "icon": "/zjms/fee2.png",
          "href": "../../pages/pay/home/home",
          "color": "",
          "openType": 0,
          "enable": 1,
          "islogin": true,
          "content": [{
            "enable": 1,
            "islogin": true,
            "id": 0,
            "tit": "",
            "icon": "",
            "url": "",
            "color": "",
            "openType": ""
          }]
        }
        ]
      }
      ]
    }
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
    this.getNewsList()
    this.getData()

    // 测试
    // this.getDataTest()
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
    this.setData({
      name: wx.getStorageSync("name"),
      isLogin: wx.getStorageSync("isLogin")
    })
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