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
          tab: 0
        },
        {
          tit: "电视",
          pic: "",
          tab: 1
        },
        {
          tit: "推优榜",
          pic: "",
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
          pic: "",
          tab: 0
        },
        {
          tit: "历史文化",
          pic: "",
          tab: 1
        },
        {
          tit: "投资兴业",
          pic: "",
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
          pic: "",
          tab: 0
        },
        {
          tit: "伊旗天气",
          pic: "",
          tab: 1
        },
        {
          tit: "飞机火车",
          pic: "",
          tab: 2
        },
        {
          tit: "长途汽车",
          pic: "",
          tab: 3
        },
        {
          tit: "公交出租",
          pic: "",
          tab: 4
        },
        {
          tit: "酒店宾馆",
          pic: "",
          tab: 5
        },
        {
          tit: "身边公厕",
          pic: "",
          tab: 6
        },
        {
          tit: "找充电桩",
          pic: "",
          tab: 7
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
          tab: 0
        },
        {
          tit: "经济快餐",
          pic: "",
          tab: 1
        },
        {
          tit: "高档餐饮",
          pic: "",
          tab: 2
        },
        {
          tit: "名族食品",
          pic: "",
          tab: 3
        },
        {
          tit: "饮食文化",
          pic: "",
          tab: 4
        },
        {
          tit: "农畜产品安全",
          pic: "",
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
          pic: "",
          tab: 0
        },
        {
          tit: "农贸市场",
          pic: "",
          tab: 1
        },
        {
          tit: "户外摊点",
          pic: "",
          tab: 2
        },
        {
          tit: "二手交易",
          pic: "",
          tab: 3
        },
        {
          tit: "农资门市",
          pic: "",
          tab: 4
        },
        {
          tit: "会展活动",
          pic: "",
          tab: 5
        },
        {
          tit: "消费维权",
          pic: "",
          tab: 6
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
          tab: 0
        },
        {
          tit: "中小学",
          pic: "",
          tab: 1
        },
        {
          tit: "学生资助",
          pic: "",
          tab: 2
        },
        {
          tit: "转学办理",
          pic: "",
          tab: 3
        },
        {
          tit: "图书馆",
          pic: "",
          tab: 4
        },
        {
          tit: "书店",
          pic: "",
          tab: 5
        },
        {
          tit: "民办学校",
          pic: "",
          tab: 6
        },
        {
          tit: "家庭教育",
          pic: "",
          tab: 7
        },
        {
          tit: "农业技术",
          pic: "",
          tab: 8
        },
        {
          tit: "文体健身",
          pic: "",
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
          pic: "",
          tab: 0
        },
        {
          tit: "健康证",
          pic: "",
          tab: 1
        },
        {
          tit: "疫苗接种",
          pic: "",
          tab: 2
        },
        {
          tit: "体检",
          pic: "",
          tab: 3
        },
        {
          tit: "核酸检测",
          pic: "",
          tab: 4
        },
        {
          tit: "老年证",
          pic: "",
          tab: 5
        },
        {
          tit: "高龄补助",
          pic: "",
          tab: 6
        },
        {
          tit: "福利院",
          pic: "",
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
          tit: "政务大厅指引",
          pic: "",
          tab: 0
        },
        {
          tit: "旗长热线",
          pic: "",
          tab: 1
        },
        {
          tit: "旗镇互通",
          pic: "",
          tab: 2
        },
        {
          tit: "调查问卷",
          pic: "",
          tab: 3
        },
        {
          tit: "随手拍",
          pic: "",
          tab: 4
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
          tab: 0
        },
        {
          tit: "低保户",
          pic: "",
          tab: 1
        },
        {
          tit: "红十字补贴",
          pic: "",
          tab: 2
        },
        {
          tit: "失信人员",
          pic: "",
          tab: 3
        },
        {
          tit: "法律服务",
          pic: "",
          tab: 4
        },
        {
          tit: "女性关互",
          pic: "",
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
          pic: "",
          tab: 0
        },
        {
          tit: "物业",
          pic: "",
          tab: 1
        },
        {
          tit: "保修服务",
          pic: "",
          tab: 2
        },
        {
          tit: "招聘求职",
          pic: "",
          tab: 3
        },
        {
          tit: "美发洗浴",
          pic: "",
          tab: 4
        },
        {
          tit: "代驾挪车",
          pic: "",
          tab: 5
        },
        {
          tit: "顺风车",
          pic: "",
          tab: 6
        },
        {
          tit: "生产转让",
          pic: "",
          tab: 7
        },
        {
          tit: "生鲜配送",
          pic: "",
          tab: 8
        },
        {
          tit: "生活缴费",
          pic: "",
          tab: 9
        },
        {
          tit: "通信服务",
          pic: "",
          tab: 10
        },
        {
          tit: "金融服务",
          pic: "",
          tab: 11
        },
        // {
        //   tit: "电影剧院",
        //   pic: "",
        //  tab:12
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
            wx.navigateTo({
              url: '../../pages/publish/pages/radio/radio',
            });
            break;
          case 1:
            //电视
            wx.navigateTo({
              url: '../../pages/publish/pages/tv/tv',
            });
            break;
          case 2:
            //推优榜
            wx.navigateTo({
              url: '../../pages/publish/pages/pushBest/pushBest',
            });
            break;
        }
        break;
      //魅力伊旗
      case 1:
        switch (tab) {
          case 0:
            console.log("一");
            break;
          case 1:
            console.log("历史");
            break;
          case 2:
            console.log("投资");
            break;
        }
        break;
      //旅游出行
      case 2:
        switch (tab) {
          case 0:
            console.log("一知名");
            break;
          case 1:
            console.log("天气");
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
            console.log("厕所");
            break;
          case 7:
            console.log("充电侧");
            break;
        }
        break;
      //食在伊旗
      case 3:
        switch (tab) {
          case 0:
            console.log("特色");
            break;
          case 1:
            console.log("经济");
            break;
          case 2:
            console.log("高档");
            break;
          case 3:
            console.log("民族");
            break;
          case 4:
            console.log("饮食");
            break;
          case 5:
            console.log("农");
            break;
        }
        break;
      //经济活动
      case 4:
        switch (tab) {
          case 0:
            console.log("商场");
            break;
          case 1:
            console.log("农贸");
            break;
          case 2:
            console.log("户外");
            break;
          case 3:
            console.log("二手");
            break;
          case 4:
            console.log("农资");
            break;
          case 5:
            console.log("会展");
            break;
          case 6:
            console.log("消费");
            break;
        }
        break;
      //教育文体
      case 5:
        switch (tab) {
          case 0:
            console.log("1");
            break;
          case 1:
            console.log("2");
            break;
          case 2:
            console.log("3");
            break;
          case 3:
            console.log("4");
            break;
          case 4:
            console.log("5");
            break;
          case 5:
            console.log("6");
            break;
          case 6:
            console.log("7");
            break;
          case 7:
            console.log("8");
            break;
          case 8:
            console.log("9");
            break;
          case 9:
            console.log("10");
            break;
        }
        break;
      //医疗康养
      case 6:
        switch (tab) {
          case 0:
            console.log("1");
            break;
          case 1:
            console.log("2");
            break;
          case 2:
            console.log("3");
            break;
          case 3:
            console.log("4");
            break;
          case 4:
            console.log("5");
            break;
          case 5:
            console.log("6");
            break;
          case 6:
            console.log("7");
            break;
          case 7:
            console.log("8");
            break;

        }
        break;
      //政务服务
      case 7:
        switch (tab) {
          case 0:
            console.log("1");
            break;
          case 1:
            console.log("2");
            break;
          case 2:
            console.log("3");
            break;
          case 3:
            console.log("4");
            break;
          case 4:
            console.log("5");
            break;
        }
        break;
      //维权助困
      case 8:
        switch (tab) {
          case 0:
            console.log("1");
            break;
          case 1:
            console.log("2");
            break;
          case 2:
            console.log("3");
            break;
          case 3:
            console.log("4");
            break;
          case 4:
            console.log("5");
            break;
          case 5:
            console.log("6");
            break;
        }
        break;
      //生活服务
      case 9:
        switch (tab) {
          case 0:
            console.log("1");
            break;
          case 1:
            console.log("2");
            break;
          case 2:
            console.log("3");
            break;
          case 3:
            console.log("4");
            break;
          case 4:
            console.log("5");
            break;
          case 5:
            console.log("6");
            break;
          case 6:
            console.log("7");
            break;
          case 7:
            console.log("8");
            break;
          case 8:
            console.log("9");
            break;
          case 9:
            console.log("10");
            break;
          case 10:
            console.log("11");
            break;
          case 11:
            console.log("12");
            break;
        }
        break;
    }

  },

  //新闻列表
  newsList: function () {
    wx.navigateTo({
      url: '../../pages/publish/pages/newsList/newsList',
    });
  },
  //新闻详情
  noticeDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../pages/publish/pages/newsDetail/newsDetail?id=' + id,
    });
  },
  //通知公告列表
  noticeList: function () {
    wx.navigateTo({
      url: '../../pages/publish/pages/noticeList/noticeList',
    });
  },
  //通知公告详情
  noticeDetail: function (e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../../pages/publish/pages/noticeDetail/noticeDetail?id=' + id,
    });
  },



})
