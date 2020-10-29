const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
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
          tit: "广播",
          pic: "",
          tab: "radio"
        },
        {
          tit: "电视",
          pic: "",
          tab: ""
        },
        {
          tit: "推优榜",
          pic: "",
          tab: ""
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
          pic: "",
          tab: ""
        },
        {
          tit: "历史文化",
          pic: "",
          tab: ""
        },
        {
          tit: "投资兴业",
          pic: "",
          tab: ""
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
          pic: "",
          tab: ""
        },
        {
          tit: "伊旗天气",
          pic: "",
          tab: ""
        },
        {
          tit: "飞机火车",
          pic: "",
          tab: ""
        },
        {
          tit: "长途汽车",
          pic: "",
          tab: ""
        },
        {
          tit: "公交出租",
          pic: "",
          tab: ""
        },
        {
          tit: "酒店宾馆",
          pic: "",
          tab: ""
        },
        {
          tit: "身边公厕",
          pic: "",
          tab: ""
        },
        {
          tit: "找充电桩",
          pic: "",
          tab: ""
        },
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
          pic: "",
          tab: ""
        },
        {
          tit: "经济快餐",
          pic: "",
          tab: ""
        },
        {
          tit: "高档餐饮",
          pic: "",
          tab: ""
        },
        {
          tit: "名族食品",
          pic: "",
          tab: ""
        },
        {
          tit: "饮食文化",
          pic: "",
          tab: ""
        },
        {
          tit: "农畜产品安全",
          pic: "",
          tab: ""
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
          pic: "",
          tab: ""
        },
        {
          tit: "农贸市场",
          pic: "",
          tab: ""
        },
        {
          tit: "户外摊点",
          pic: "",
          tab: ""
        },
        {
          tit: "二手交易",
          pic: "",
          tab: ""
        },
        {
          tit: "农资门市",
          pic: "",
          tab: ""
        },
        {
          tit: "会展活动",
          pic: "",
          tab: ""
        },
        {
          tit: "消费维权",
          pic: "",
          tab: ""
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
          pic: "",
          tab: ""
        },
        {
          tit: "中小学",
          pic: "",
          tab: ""
        },
        {
          tit: "学生资助",
          pic: "",
          tab: ""
        },
        {
          tit: "转学办理",
          pic: "",
          tab: ""
        },
        {
          tit: "图书馆",
          pic: "",
          tab: ""
        },
        {
          tit: "书店",
          pic: "",
          tab: ""
        },
        {
          tit: "民办学校",
          pic: "",
          tab: ""
        },
        {
          tit: "家庭教育",
          pic: "",
          tab: ""
        },
        {
          tit: "农业技术",
          pic: "",
          tab: ""
        },
        {
          tit: "文体健身",
          pic: "",
          tab: ""
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
          pic: "",
          tab: ""
        },
        {
          tit: "健康证",
          pic: "",
          tab: ""
        },
        {
          tit: "疫苗接种",
          pic: "",
          tab: ""
        },
        {
          tit: "体检",
          pic: "",
          tab: ""
        },
        {
          tit: "核酸检测",
          pic: "",
          tab: ""
        },
        {
          tit: "老年证",
          pic: "",
          tab: ""
        },
        {
          tit: "高龄补助",
          pic: "",
          tab: ""
        },
        {
          tit: "福利院",
          pic: "",
          tab: ""
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
          tit: "政务大厅指引",
          pic: "",
          tab: ""
        },
        {
          tit: "旗长热线",
          pic: "",
          tab: ""
        },
        {
          tit: "旗镇互通",
          pic: "",
          tab: ""
        },
        {
          tit: "调查问卷",
          pic: "",
          tab: ""
        },
        {
          tit: "随手拍",
          pic: "",
          tab: ""
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
          pic: "",
          tab: ""
        },
        {
          tit: "低保户",
          pic: "",
          tab: ""
        },
        {
          tit: "红十字补贴",
          pic: "",
          tab: ""
        },
        {
          tit: "失信人员",
          pic: "",
          tab: ""
        },
        {
          tit: "法律服务",
          pic: "",
          tab: ""
        },
        {
          tit: "女性关互",
          pic: "",
          tab: ""
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
          pic: "",
          tab: ""
        },
        {
          tit: "物业",
          pic: "",
          tab: ""
        },
        {
          tit: "保修服务",
          pic: "",
          tab: ""
        },
        {
          tit: "招聘求职",
          pic: "",
          tab: ""
        },
        {
          tit: "美发洗浴",
          pic: "",
          tab: ""
        },
        {
          tit: "代驾挪车",
          pic: "",
          tab: ""
        },
        {
          tit: "顺风车",
          pic: "",
          tab: ""
        },
        {
          tit: "生产转让",
          pic: "",
          tab: ""
        },
        {
          tit: "生鲜配送",
          pic: "",
          tab: ""
        },
        {
          tit: "生活缴费",
          pic: "",
          tab: ""
        },
        {
          tit: "通信服务",
          pic: "",
          tab: ""
        },
        {
          tit: "金融服务",
          pic: "",
          tab: ""
        },
        // {
        //   tit: "电影剧院",
        //   pic: "",
        //  tab:""
        // }
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

  //广播
  radio: function () {
    wx.navigateTo({
      url: '../../pages/publish/pages/radio/radio',
    });
  },

})
