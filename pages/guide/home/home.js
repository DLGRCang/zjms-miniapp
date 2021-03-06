const app = getApp()
const util = require('../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: app.globalData.imgUrl,
		commonApp: [
			// {
			// 	name: '听广播',
			// 	icon: app.globalData.imgUrl + '/image/1.png',
			// 	url: '/pages/publish/pages/radio/radio',
			// },
			// {
			// 	name: '看电视',
			// 	icon: app.globalData.imgUrl + '/image/2.png',
			// 	url: '/pages/publish/pages/tv/tv',
			// },
			{
				name: '长途汽车',
				icon: app.globalData.imgUrl + '/image/10.png',
				url: '/pages/travel/pages/car/car',
			},
			{
				name: '公交出租',
				icon: app.globalData.imgUrl + '/image/11.png',
				url: '/pages/travel/pages/bus/bus',
			},
			{
				name: '身边公厕',
				icon: app.globalData.imgUrl + '/image/13.png',
				url: '/pages/travel/pages/toilet/toilet',
			},
			{
				name: '找充电桩',
				icon: app.globalData.imgUrl + '/image/14.png',
				url: '/pages/travel/pages/electric/electric',
			},
			// {
			// 	name: '农业技术',
			// 	icon: app.globalData.imgUrl + '/image/39.png',
			// 	url: '/pages/education/pages/agricultural/agricultural',
			// },
			{
				name: '中小学',
				icon: app.globalData.imgUrl + '/image/32.png',
				url: '/pages/education/pages/midSchool/midSchool',
			},
			// {
			// 	name: '高龄补助',
			// 	icon: app.globalData.imgUrl + '/image/47.png',
			// 	url: '/pages/medical/pages/oldAge/oldAge',
			// },
			{
				name: '推优榜',
				icon: app.globalData.imgUrl + '/image/3.png',
				url: '/pages/publish/pages/pushBest/pushBest',
			}, {
        name: '一村一品',
        icon: app.globalData.imgUrl + '/image/4.png',
        url: '/pages/charm/pages/villageProduct/villageProduct',
      },
      // {
      //   name: '历史文化',
      //   icon: app.globalData.imgUrl + '/image/5.png',
      //   url: '/pages/charm/pages/historyCulture/historyCulture',
      // },
      {
        name: '投资兴业',
        icon: app.globalData.imgUrl + '/image/6.png',
        url: '/pages/charm/pages/investment/investment',
			},
			{
        name: '知名景点',
        icon: app.globalData.imgUrl + '/image/7.png',
        url: '/pages/travel/pages/scenicSpot/scenicSpot',
      },
      // {
      //   name: '伊旗天气',
      //   icon: app.globalData.imgUrl + '/image/8.png',
      //   url: '/pages/travel/pages/weather/weather',
      // },
      // {
      //   name: '飞机火车',
      //   icon: app.globalData.imgUrl + '/image/9.png',
      //   url: '/pages/travel/pages/train/train',
      // },
      // {
      //   name: '长途汽车',
      //   icon: app.globalData.imgUrl + '/image/10.png',
      //   url: '/pages/travel/pages/car/car',
      // },
      // {
      //   name: '公交出租',
      //   icon: app.globalData.imgUrl + '/image/11.png',
      //   url: '/pages/travel/pages/bus/bus',
      // },
      // {
      //   name: '酒店宾馆',
      //   icon: app.globalData.imgUrl + '/image/12.png',
      //   url: '/pages/travel/pages/hotel/hotel',
      // },
		],
		historyApp: [
			{
        name: '行程卡',
        icon: app.globalData.imgUrl + '/image/9.png',
				appid:'wx8f446acf8c4a85f5'
			},
			{
        name: '乘车码',
        icon: app.globalData.imgUrl + '/image/10.png',
				appid:'wxbb58374cdce267a6'
      },
		],
	},
  //常用服务跳转
  goDetail(e) {
    util.pageJump(e.currentTarget.dataset.url)
	},
	// 热门服务跳转
	goMiNiApp(e){
		console.log(e.currentTarget.dataset.appid)
		wx.navigateToMiniProgram({
      appId: e.currentTarget.dataset.appid,
      path: '',
      success: function (res) { },
      fail: function (res) { }
    })
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