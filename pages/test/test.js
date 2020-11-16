// pages/test/test.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		pageTabs:["Tab1", "Tab2", "Tab3"],
		tabs:['标1签','标2签','标3签','标4签'],
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
	selectTab:function(e){
		console.log("点击了第几个Tab:"+e.detail.TabCur)
	},
	onpickChange: function(e) {
		let picker = this.data.searchType;
		this.data.searchType[e.detail.current].title = e.detail.pick;
		this.setData({
			searchType: picker
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