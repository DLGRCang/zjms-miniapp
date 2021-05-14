// pages/test/test.js
const util = require('../../utils/util')
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    currentTime: util.formatDate(new Date) + ' ' + util.getWeekByDate(new Date()),
    topImg: '',//顶部图片地址

    bottomImg: '',//底部图片

    organizer: "主管单位：伊金霍洛旗大数据发展局",

    constructionUnit: "建设单位：内蒙古大云智通科技有限公司",

    swiperList: ['https://www.yjhlcity.com/InfoIssue/miniapp/image/55.png',
      'https://www.yjhlcity.com/InfoIssue/miniapp/image/66.png',
      'https://www.yjhlcity.com/InfoIssue/miniapp/image/77.png'],//轮播图图片地址

    news: {
      tit: '热点新闻',
      newsInfo: []//新闻列表
    },

    recommend: {
      tit: '特别推荐',//大标题
      num: 4,//一行显示几个
      lists: [
        {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/3.png',//图片地址
          url: '',//跳转地址
        },
        {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/7.png',//图片地址
          url: '',//跳转地址
        },
        {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/47.png',//图片地址
          url: '',//跳转地址
        },
        {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/77.png',//图片地址
          url: '',//跳转地址
        },
        {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/67.png',//图片地址
          url: '',//跳转地址
        },
        {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/66.png',//图片地址
          url: '',//跳转地址
        },
        {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/55.png',//图片地址
          url: '',//跳转地址
        },
        {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/57.png',//图片地址
          url: '',//跳转地址
        },
      ]
    },

    tv: {
      tit: '伊金霍洛之窗',//标题
      url: 'https://cms-play.yjhlnews.cn/live/vedio.m3u8?auth_key=1631242686-0-0-4856241673b394d2762481a643d942f9'//地址
    },

    radio: {
      tit: '伊金霍洛之声',//标题
      img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/44.png',//图片地址
      url: ''//地址
    },

    citys: {
      tit: '智慧城市',//大标题
      num: 3,//一行显示几个
      lists: [
        {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/22.png',//图片地址
          url: '',//跳转地址
        }, {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/23.png',//图片地址
          url: '',//跳转地址
        }, {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/24.png',//图片地址
          url: '',//跳转地址
        }, {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/25.png',//图片地址
          url: '',//跳转地址
        }, {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/26.png',//图片地址
          url: '',//跳转地址
        }, {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/27.png',//图片地址
          url: '',//跳转地址
        },
      ]
    },

    service: [//10大块儿
      {
        title: '',//大标题
        colorL: '',//标题颜色
        list: [
          {
            tit: '',//小标题
            img: '',//图片地址
            url: '',//跳转地址
            appid: ''//appid
          }
        ]
      },
    ],

    depts: {
      tit: '各委办局',//大标题
      num: 4,//一行显示几个
      more: '更多',
      moreUrl: '',
      lists: [
        {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/12.png',//图片地址
          url: '',//跳转地址
        }, {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/13.png',//图片地址
          url: '',//跳转地址
        }, {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/14.png',//图片地址
          url: '',//跳转地址
        }, {
          name: '核酸检测',//名字
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/15.png',//图片地址
          url: '',//跳转地址
        },
      ]
    },

    fee: {
      title: '预约缴费',
      list: [
        {
          tit: '预约',
          cont: '在线预约服务',
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/17.png',
          url: ''
        },
        {
          tit: '缴费',
          cont: '在线缴费服务',
          img: 'https://www.yjhlcity.com/InfoIssue/miniapp/image/18.png',
          url: ''
        },
      ]

    }
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