// components/item-image-text/item-image-text.js

Component({
	options: {
		addGlobalClass: true,
		multipleSlots: true
	},
	/**
	 * 组件的属性列表
	 */
	properties: {
		obj:{
			type:Object,
			default:''


		},
		
		//图片url
		imgUrl: {
			type: String,
			default: ''
		},
		//是否显示图片
		isImg: {
			type: [Boolean, String],
			value: true
		},
		//是否显示标签
		isTab: {
			type: [Boolean, String],
			value: false
		},
		//是否显示星星
		isStar: {
			type: [Boolean, String],
			value: false
		},
		date: {
			type: String,
			value: ''
		},
		//是否显示日期
		isDate: {
			type: [Boolean, String],
			value: false
		},
		//是否显示横线
		isLine: {
			type: [Boolean, String],
			value: false
		},
		//星星数量
		starNum: {
			type: Number,
			value: 0
		},
		//标题
		itemTitle: {
			type: String,
			default: ''
		},
		//内容简介
		itemInfo: {
			type: String,
			default: ''
		},
		//标签数组
		itemTabs: {
			type: Array,
			default: []
		},
	},
	methods:{
		gotoDetail:function(){
			console.log("点击跳转");
			wx.navigateTo({
				
				url: "/pages/publish/pages/newsDetail/newsDetail?info_content="+this.properties.obj.info_content+"&info_source="+this.properties.obj.info_source+"&publishdate="+this.properties.obj.publishdate+"&info_detail="+encodeURIComponent(this.properties.obj.info_detail),
			})
		
		}
	
	}


})