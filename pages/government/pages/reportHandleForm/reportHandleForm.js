// pages/government/pages/reportHandleForm/reportHandleForm.js
const util = require('../../../../utils/util.js')
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		fileList: [],
		feedBack: '', //处理情况
		id: '',
		photograph: [],
		title: '',
		content: ''
	},
	commitData() {
		if(this.data.content==''){
			util.showToast("反馈内容不能为空")
			return
		}
		let formData = {
			feedBack: this.data.feedBack,
			processState: "已处理",
			backPicture: this.data.photograph.toString(),
			title: this.data.title,
			content: this.data.content
		}

		console.log(formData)
		util.requestApi('problemreportup/updateproblemreportup/'+this.data.id, 'PUT', formData).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				wx.navigateBack({
					delta: 2
				})
				util.showToast("提交成功")
			} else {
				util.showToast("提交失败")
			}
		});
	},
	putData(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.setData({
			id:options.id
		})
		this.getDataInfo(this.data.id)
	},
		//获取数据详情
		getDataInfo(id) {
			util.requestApi('problemreportup/getproblemreportup/' + id, 'GET', {}).then(res => {
				this.setData({
					content: res.data.content,
					title:res.data.title
				})
			})
		},
	//选择图片
	ChooseImage() {
		wx.chooseImage({
			count: 1, //默认9
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				let imgUrl = res.tempFilePaths[0]
				util.uploadFile(imgUrl, 'image')
					.then(res => {
						if (res.statusCode == 200) {
							let obj = JSON.parse(res.data)
							let photograph = this.data.photograph;
							let fileList = this.data.fileList;
							photograph.push(obj.data)
							fileList.push(imgUrl)
							this.setData({
								photograph: photograph,
								fileList: fileList
							})
						} else {
							util.showToast('图片上传失败')
						}
					});
			}
		});
	},
	//视频预览/图片预览
	ViewVideo(e) {
		wx.previewMedia({
			sources: [{
				url: e.currentTarget.dataset.url,
				type: e.currentTarget.dataset.type
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
					this.data.fileList.splice(e.currentTarget.dataset.index, 1);
					this.data.photograph.splice(e.currentTarget.dataset.index, 1);
					this.setData({
						fileList: this.data.fileList,
						photograph: this.data.photograph
					})
				}
			}
		})
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