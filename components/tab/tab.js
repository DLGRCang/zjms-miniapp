// components/tab.js
Component({
	options: {
		addGlobalClass: true,
		multipleSlots: true
	},
	/**
	 * 组件的属性列表
	 */
	properties: {
		//显示的Tab数组
		tabName: {
			type: Array,
			value: []
		}

	},

	/**
	 * 组件的初始数据
	 */
	data: {
		TabCur: 0, //标签选中项
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		//切换标签
		tabSelect(e) {
			this.setData({
				TabCur: e.currentTarget.dataset.id
			})
			var myEventDetail = {
				TabCur: this.data.TabCur,
			} // detail对象，提供给事件监听函数
			var myEventOption = {} // 触发事件的选项
			this.triggerEvent('myevent', myEventDetail, myEventOption)
		},
	}
})
