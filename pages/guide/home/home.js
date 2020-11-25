// pages/test/test.js
const app = getApp()
const util = require('../../../utils/util.js')
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		tabName: ["个人办事", "法人办事"],
		TabCur: 0, //标签选中项
		searchType: [{
      title: '服务主题',
      content: ['生育收养', '民族宗教', '教育科研']
    }, {
      title: '事项类型',
      content: ['事项类型A', 'B事项类型', '事项C类型']
    }, {
      title: '服务部门',
      content: ['住房和城乡建设局', '自然资源局', '公安局', '教育局']
    }]
	},
	//切换顶部tab
	selectTab: function (e) {
		this.setData({
			TabCur: e.detail.TabCur
		})
	},
	onpickChange: function(e) {
		let picker = this.data.searchType
		this.data.searchType[e.detail.current].title = e.detail.pick
		this.setData({
			searchType: picker
		})
	},
	guideDetail(e){
		util.pageJumpTo('/pages/guideDetail/pages/guideInfo/guideInfo','id',e.currentTarget.dataset.id)
	}
})