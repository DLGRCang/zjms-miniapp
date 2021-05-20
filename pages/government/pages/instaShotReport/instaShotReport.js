// pages/government/pages/instaShotReport/instaShotReport.js
const util = require('../../../../utils/util.js')
let QQMapWX = require('../../../../libs/qqmap/qqmap-wx-jssdk.min');
let qqmapsdk = new QQMapWX({
	key: 'O5QBZ-JLYL6-3MTSA-E3BN3-YAWD7-A3FXI'
});
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		party: '',
		partyphone: '',
		// deptcode: '',
		// classcode: '',
		imageArr: [],
		imgList: [],
		intro: '',
		address: '', //地址
		latitude: '', //纬度
		longitude: '', //经度	
	},
	//提交数据
	commitData() {
		let 	data = {
			party:this.data.party,
			partyphone:this.data.partyphone,
			// deptcode:this.data.deptcode,
			// classcode:this.data.classcode,
			eventaddress:this.data.address,
			latitude:this.data.latitude,
			longitude:this.data.longitude,
			openid:wx.getStorageSync("openId"),
			geosupermap:'',
			serverId_voice:'',
			intro:this.data.intro,
			imageArr:this.data.imageArr.join(' ')
			}
		console.log(data)
		util.httpRequestForm('https://www.yjhlcity.com/yjhl/addEvent/addWxXcxEvent.do', 'POST', data).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				wx.navigateBack({
					delta: 1
				})
				util.showToast("提交成功")

			} else {
				util.showToast(res.data.msg)
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
	//图片上传
	ChooseImage() {

		wx.chooseImage({
			count: 4, //默认9
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				let filePath = res.tempFilePaths[0]
				wx.getFileSystemManager().readFile({
					filePath: res.tempFilePaths[0], //选择图片返回的相对路径
					encoding: 'base64', //编码格式
					success: res => { //成功的回调
						if (this.data.imageArr.length != 0) {
							this.setData({
								imgList: this.data.imgList.concat(filePath),
								imageArr: this.data.imageArr.concat('data:image/png;base64'+',' + res.data),
							})
						} else {
							this.setData({
								imgList: [filePath],
								imageArr: ['data:image/png;base64'+',' + res.data],
							})
						}

					}
				})



			}
		});
	},
	ViewImage(e) {
		wx.previewImage({
			urls: this.data.imgList,
			current: e.currentTarget.dataset.url
		});
	},
	DelImg(e) {
		wx.showModal({
			// title: '召唤师',
			content: '确定要删除吗？',
			cancelText: '再想想',
			confirmText: '确定',
			success: res => {
				if (res.confirm) {
					this.data.imgList.splice(e.currentTarget.dataset.index, 1);
					this.setData({
						imgList: this.data.imgList
					})
				}
			}
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
							address: address,
							latitude: lat,
							longitude: lon,
						})
					}
				});
			},
		});

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