// pages/test/test.js
const util = require('../../../utils/util.js')
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		tabName: ["个人办事", "法人办事"],
		searchType: ["服务主题", "事项类型", "服务部门"],
		TabCur: 0, //标签选中项
		SearchCur: -1, //筛选条件选中项
		index: 0,
		themes: ['生育收养', '民族宗教', '教育科研'], //服务主题
		types: ['事项类型A', 'B事项类型', '事项C类型'], //事项类型
		deps: ['住房和城乡建设局', '自然资源局', '公安局', '教育局'], //服务部门
		text: '我们的高兴的'
	},
	//切换顶部tab
	selectTab: function (e) {
		this.setData({
			TabCur: e.currentTarget.dataset.id
			// console.log("点击了第几个Tab:"+e.detail.TabCur)
		})
	},

	//检索条件切换
	searchSelect(e) {
		this.setData({
			SearchCur: e.currentTarget.dataset.id,
		})
	},
	PickerChange(e) {

		this.setData({
			index: e.detail.value,
		})
		var picker = this.data.searchType;
		var value = e.target.dataset.var;
		picker[this.data.SearchCur] = value[this.data.index];
		this.setData({
			searchType: picker,
			SearchCur:-1
		})

	},
	cancel(){
		this.setData({
			SearchCur:-1,
		})
	},
	guideDetail(e){
		util.pageJumpTo('/pages/guideDetail/pages/guideInfo/guideInfo','id',e.currentTarget.dataset.id)
	}
})