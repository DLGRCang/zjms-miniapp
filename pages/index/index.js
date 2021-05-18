const util = require('../../utils/util')
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
    VerticalNavTop: 0,
    topImg: app.globalData.imgUrl + '/zjms/top.png', //顶部图片地址
    bottomImg: app.globalData.imgUrl + '/zjms/bottom.png', //底部图片
    // 底部标签值
    organizer: "主管单位：伊金霍洛旗大数据发展局",
    constructionUnit: "建设单位：内蒙古大云智通科技有限公司",
    currentTime: util.formatDate(new Date) + ' ' + util.getWeekByDate(new Date()), //当前时间

    modules: [
      // 轮播
      {
        id: "",
        type: "banner",
        num: 0,
        title: "banner", //标题  
        enable: 1, //0 未开启    1 已开启
        more: { //更多
          enable: 1, //0 未开启    1 已开启
          href: "",
          openType: ""
        },
        apiUrl: "url",
        list: [{
          name: "",
          summary: "",
          icon: "https://www.yjhlcity.com/InfoIssue/miniapp/image/44.png",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "",
          summary: "",
          icon: "https://www.yjhlcity.com/InfoIssue/miniapp/image/66.png",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "",
          summary: "",
          icon: "https://www.yjhlcity.com/InfoIssue/miniapp/image/77.png",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        ]
      },

      // 新闻
      {
        id: "",
        type: "news",
        num: 0,
        title: "热点新闻", //标题  
        enable: 1, //0 未开启    1 已开启
        more: { //更多
          enable: 0,
          href: "",
          openType: ""
        },
        apiUrl: "url",
        list: [{
          name: "新闻基金的方式那就看上电脑方尽可能三加咖啡",
          summary: "",
          icon: "",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "2新闻基金的方式那就看上电脑方尽可能三加咖啡",
          summary: "",
          icon: "",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "3新闻基金的方式那就看上电脑方尽可能三加咖啡",
          summary: "",
          icon: "",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        }
        ]
      },

      // 推荐
      {
        id: "",
        type: "recommend",
        num: 4,
        title: "特别推荐", //标题  
        enable: 1, //0 未开启    1 已开启
        more: { //更多
          enable: 0,
          href: "",
          openType: ""
        },
        apiUrl: "url",
        list: [{
          name: "核酸检测",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/1.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "疫苗接种",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/2.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "业务预审",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/3.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "转学办理",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/4.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "大厅指引",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/5.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "学生资助",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/6.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "旗长热线",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/7.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "律师公证",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/8.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "二手交易",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/9.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        }, {
          name: "特色美食",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/10.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        }, {
          name: "知名景点",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/11.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        }, {
          name: "数字文化",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/12.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        }, {
          name: "周边公厕",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/13.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        }, {
          name: "找充电桩",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/14.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        }, {
          name: "失信人员",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/15.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        }, {
          name: "随手拍",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/16.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        ]
      },
      // 电视
      {
        id: "",
        type: "tv",
        num: 0,
        title: "伊金霍洛之窗", //标题  
        enable: 1, //0 未开启    1 已开启
        more: { //更多
          enable: 0,
          href: "",
          openType: ""
        },
        apiUrl: "url",
        list: [{
          name: "",
          summary: "",
          icon: "",
          href: "https://cms-play.yjhlnews.cn/live/vedio.m3u8?auth_key=1631242686-0-0-4856241673b394d2762481a643d942f9",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        }]
      },
      // 广播
      {
        id: "",
        type: "radio",
        num: 0,
        title: "伊金霍洛之声", //标题  
        enable: 1, //0 未开启    1 已开启
        more: { //更多
          enable: 0,
          href: "",
          openType: ""
        },
        apiUrl: "url",
        list: [{
          name: "",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/fm.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        }]
      },

      // 智慧城市
      {
        id: "",
        type: "city",
        num: 3,
        title: "智慧城市", //标题  
        enable: 1, //0 未开启    1 已开启
        more: { //更多
          enable: 0,
          href: "",
          openType: ""
        },
        apiUrl: "url",
        list: [{
          name: "智慧城管",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/city1.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "智慧管网",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/city2.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "智慧园林",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/city3.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "智慧社区",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/city4.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "智慧应急",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/city5.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        }, {
          name: "在职党员",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/city6.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        ]
      },
      // 服务
      {
        id: "",
        type: "service",
        num: 0,
        title: "服务", //标题  
        enable: 1, //0 未开启    1 已开启
        more: { //更多
          enable: 0,
          href: "",
          openType: ""
        },
        apiUrl: "url",
        list: [{
          name: "魅力伊旗",
          summary: "",
          icon: "",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: 2
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          },]
        },
        {
          name: "伊旗发布",
          summary: "",
          icon: "",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          },]
        },
        {
          name: "文化旅游",
          summary: "",
          icon: "",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          },]
        },
        {
          name: "食在伊旗",
          summary: "",
          icon: "",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          },]
        },
        {
          name: "教育文体",
          summary: "",
          icon: "",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          },]
        },
        {
          name: "医疗康养",
          summary: "",
          icon: "",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          },]
        }, {
          name: "政务服务",
          summary: "",
          icon: "",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          },]
        },
        {
          name: "维权助困",
          summary: "",
          icon: "",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          },
          {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          },
          ]
        },
        {
          name: "生活服务",
          summary: "",
          icon: "",
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '知名景点',
            icon: app.globalData.imgUrl + '/image/3.png',
            url: '',
            openType: ''
          }, {
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }, {
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }, {
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }, {
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }, {
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }, {
            tit: '',
            icon: '',
            url: '',
            openType: ''
          },]
        },

        ]
      },

      // 委办局
      {
        id: "",
        type: "dept",
        num: 4,
        title: "各委办局", //标题  
        enable: 1, //0 未开启    1 已开启
        more: { //更多
          enable: 1,
          href: "",
          openType: ""
        },
        apiUrl: "url",
        list: [{
          name: "司法局",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/dept1.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "税务局",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/dept2.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "工商局",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/dept3.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "安监局",
          summary: "",
          icon: app.globalData.imgUrl + '/zjms/dept4.png',
          href: "",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        ]
      },

      // 预约缴费
      {
        id: "",
        type: "fee",
        num: 0,
        title: "预约缴费", //标题  
        enable: 1, //0 未开启    1 已开启
        more: { //更多
          enable: 0,
          href: "",
          openType: ""
        },
        apiUrl: "url",
        list: [{
          name: "预约",
          summary: "在线预约服务",
          icon: app.globalData.imgUrl + '/zjms/fee1.png',
          href: "../../pages/about/home/home",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        },
        {
          name: "缴费",
          summary: "在线缴费服务",
          icon: app.globalData.imgUrl + '/zjms/fee2.png',
          href: "../../pages/pay/home/home",
          openType: "",
          enable: 1,
          content: [{
            tit: '',
            icon: '',
            url: '',
            openType: ''
          }]
        }
        ]
      },


    ],
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
    let service = that.data.modules[6];
    let tabHeight = 0;
    if (that.data.load) {
      for (let i = 0; i < service.length; i++) {
        let view = wx.createSelectorQuery().in(this).select("#main-" + service[i].id);
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
    let scrollTop = e.detail.scrollTop + 20;
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
  // 个人中心
  goUserCenter() {
    util.pageJump("../../pages/plugin/home/home")
  },
  // 预约缴费详情
  goFeeDetail(e) {
    util.pageJump(e.currentTarget.dataset.href)
  },
  // 服务详情页
  goServiceDetail(e) {
    console.log(e.currentTarget.dataset)
    if (e.currentTarget.dataset.type === 0) {
      // 页面跳转
      util.pageJumpTo(e.currentTarget.dataset.url, 'tit', e.currentTarget.dataset.tit)
    } else if (e.currentTarget.dataset.type === 1) {
      // 小程序跳转 url=appid
      wx.navigateToMiniProgram({
        appId: e.currentTarget.dataset.url,
        path: '',
        success: function (res) { },
        fail: function (res) { }
      })
    } else if (e.currentTarget.dataset.type === 2) {
      // webView 跳转
      wx.navigateTo({
        url: '../../pages/appointment/pages/webView/webView?url=' + e.currentTarget.dataset.url + "&tit=" + e.currentTarget.dataset.tit,
      })
    }
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.imgUrl)
    console.log(wx.getStorageSync("isLogin"))
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