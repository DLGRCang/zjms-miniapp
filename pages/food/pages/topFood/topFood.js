const app = getApp()
const util = require('../../../../utils/util.js')
Page({
  data: {
    searchType: [{
      title: '全部美食',
      content: ['全部美食', '火锅', '烧烤', '蛋糕']
    }, {
      title: '全程范围',
      content: ['全程范围', '新城区', '赛罕区', '回民区']
    }, {
      title: '智能排序',
      content: ['智能排序', '价格', '评价', '配送时间']
    }]
  },
  onpickChange: function(e) {
		let picker = this.data.searchType
		this.data.searchType[e.detail.current].title = e.detail.pick
		this.setData({
			searchType: picker
		})
	},
  onLoad: function (options) {

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

  },
  onShareAppMessage: function () {

  }
})