// components/item-image-text/item-image-text.js
const app = getApp()
Component({
	options: {
		addGlobalClass: true,
		multipleSlots: true
	},
	data:{
		baseImgUrl: app.globalData.baseImgUrl,
	},
	/**
	 * 组件的属性列表
	 */
	properties: {
		obj:{
			type:Object,
			default:''


		},
			//点击跳转到详情的类型
			//0.普通新闻详情（通用）
			//2.顺风车详情（通用不带图片）
			//3.跳转到学校详情
			//4.跳转到养老院详情
			//8.引用页面自定义点击事件
			type: {
				type: Number,
				default: 0
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
			value: true
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
			console.log("点击跳转"+this.properties.type);
			if (this.properties.type==0) {
				wx.navigateTo({
					url: "/pages/publish/pages/newsDetail/newsDetail?info_content="+this.properties.obj.info_content+"&info_source="+this.properties.obj.info_source+"&publishdate="+this.properties.obj.publishdate+"&info_videos="+encodeURIComponent(this.properties.obj.info_videos)+"&info_detail="+encodeURIComponent(this.properties.obj.info_detail),
				})
			}else if (this.properties.type==2) {
				wx.navigateTo({
					url: "/pages/componentPage/pages/carInfo/carInfo?infoContentId="+this.properties.obj.infoContentId,
				})
			}else if (this.properties.type==3) {
				wx.navigateTo({
					url: "/pages/education/pages/schoolInfo/schoolInfo?schoolInformationId="+this.properties.obj.schoolInformationId,
				})
			}else if (this.properties.type==4) {
				wx.navigateTo({
					url: "/pages/componentPage/pages/oldHome/oldHome?infoContentId="+this.properties.obj.infoContentId,
				})
			}
		}
	
	}


})