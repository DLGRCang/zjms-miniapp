const util = require('../../../../utils/util.js')
let QQMapWX = require('../../../../libs/qqmap/qqmap-wx-jssdk.min');
let qqmapsdk = new QQMapWX({
	key: 'O5QBZ-JLYL6-3MTSA-E3BN3-YAWD7-A3FXI'
});
// pages/government/pages/reportQuestionForm/reportQuestionForm.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		fileList: [],//图片url
		location: '', //地址描述
		longitude: '', //经度
		latitude: '', //纬度
		content: '', //内容
		title: '问题上报标题' + Date.now(), //标题
		processState: '未处理', //处理状态
		photograph: [] //图片id
	},
	commitData(){
		if(this.data.content==''){
			util.showToast("上报内容不能为空")
			return
		}
		let formData = {
			title: this.data.title,
			content: this.data.content,
			latitude: this.data.latitude,
			longitude: this.data.longitude,
			photograph: this.data.photograph.toString(),
			address: this.data.location,
			processState: this.data.processState
		}
		console.log(formData)
		util.requestApi('problemreportup/saveproblemreportup', 'POST', formData).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				wx.navigateBack({
					delta: 1
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
	getAddress() {
		var that = this;
		//获取当前位置
		wx.getLocation({
			type: 'wgs84',
			success: function (res) {
				var lat = res.latitude;
				var lon = res.longitude;
				//根据坐标获取当前位置名称，腾讯地图逆地址解析
				qqmapsdk.reverseGeocoder({
					location: {
						latitude: lat,
						longitude: lon
					},
					success: function (res) {
						var address = res.result.address;
						console.log(address)
						that.setData({
							location: address,
							latitude: lat,
							longitude: lon,
						})
					}
				});
			},
		});

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
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getAddress()
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