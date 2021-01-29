// pages/help/pages/womanEvidence/womanEvidence.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		evidenceList: ['医疗证明', '残疾证明', '贫困证明'],
		evidenceName: '',
		imgList: [],
		videoList: [],
		src: ''
	},
	typeChange(e) {
		this.setData({
			evidenceName: this.data.evidenceList[e.detail.value],
		})
	},
	//选择视频
	ChooseVideo() {
		wx.chooseVideo({
			success: (res) => {
				this.setData({
					src: res.tempFilePath
				})
				console.log(res.tempFilePath)
				if (this.data.videoList.length != 0) {
					let paths = this.data.videoList;
					paths.push(res.tempFilePath)
					this.setData({
						videoList: paths
					})
				} else {
					this.setData({
						videoList: [res.tempFilePath]
					})
				}
			}
		});
	},
	//选择图片
	ChooseImage() {
		wx.chooseImage({
			count: 1, //默认9
			sizeType: ['original', 'compressed'],
			sourceType: ['album'],
			success: (res) => {
				console.log(res.tempFilePaths[0]);
				if (this.data.imgList.length != 0) {
					this.setData({
						imgList: this.data.imgList.concat(res.tempFilePaths)
					})
				} else {
					this.setData({
						imgList: res.tempFilePaths
					})
				}
			}
		});
	},
	//视频预览/图片预览
	ViewVideo(e) {
		wx.previewMedia({
			sources: [{
				url: e.currentTarget.dataset.url,
				type:  e.currentTarget.dataset.type
			}],
		});
	},
	//删除图片/视频
	DelImg(e) {
		wx.showModal({
			content: '确定要删除吗？',
			cancelText: '再想想',
			confirmText: '确定',
			success: res => {
				if (res.confirm) {
					if(e.currentTarget.dataset.type=='video'){
						this.data.videoList.splice(e.currentTarget.dataset.index, 1);
						this.setData({
							videoList: this.data.videoList
						})
					}else{
						this.data.imgList.splice(e.currentTarget.dataset.index, 1);
						this.setData({
							imgList: this.data.imgList
						})
					}
				
				}
			}
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