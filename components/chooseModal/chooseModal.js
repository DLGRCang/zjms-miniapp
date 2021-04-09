// components/chooseModal/chooseModal.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		title: {
			type: String,
			value: '请选择'
		},
		choose: {
			type: Array,
			value: []
		},
		//是否显示modal
		show: {
			type: Boolean,
			value: false
		},
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		chooseItem:''
	},

	/**
	 * 组件的方法列表
	 */
	methods: {
		chooseItem(e){
			this.setData({
				chooseItem:e.detail.value
			})

		},
		cancel() {
			this.setData({
				show: false
			})
			this.triggerEvent('cancel')
		},

		confirm() {
			this.setData({
				show: false
			})
			var myEventDetail = {
				chooseItem: this.data.chooseItem,
			} // detail对象，提供给事件监听函数
			this.triggerEvent('confirm',myEventDetail,{})
		}
	}
})