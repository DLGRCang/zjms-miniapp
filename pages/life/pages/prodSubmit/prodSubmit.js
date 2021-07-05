// pages/life/pages/prodSubmit/prodSubmit.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
		vehicleImages:[],//图片url
		files:[],//图片id
    info_content: '',
    infoContactNumber: '',
    info_detail: '',
    contenttxt: '',
    // info_kind: 'txt',
    // infotypeid: 'cceff34a-be4e-4d3f-9fa7-db635773f303',
    publishdate: util.formatDate(new Date),
    // status: '未审核',
    // check_status: 0,
    // infotypename: '转让信息'
  },
	putData(e) {
		let key = e.currentTarget.dataset.key
		console.log(key)
		this.setData({
			[key]: e.detail.value
		})
  },
  commitData() {
    let data = {
			info_files:this.data.files.toString(),
      info_content:this.data.info_content,
      infoContactNumber:this.data.infoContactNumber,
      info_detail:this.data.info_detail,
      contenttxt:this.data.contenttxt,
      contenttxt: '',
      info_kind: 'txt',
      infotypeid: 'cceff34a-be4e-4d3f-9fa7-db635773f303',
      publishdate: util.formatDate(new Date),
      status: '未审核',
      check_status: 0,
      infotypename: '转让信息',
      ord:1,
    }
    console.log(data)
		util.requestApi('infocontent/saveinfocontent', 'POST', data).then(res => {
			console.log(res)
			if (res.statusCode == 200) {
				wx.showToast({
					title: "提交成功",
					icon: 'success',
					mask: true,
					success(res) {
						setTimeout(() => {
							wx.navigateBack({
								delta: 1
							})
						}, 1000)
					}
				});
			} else {
				wx.showToast({
					title: '提交失败请检查数据',
					icon: 'error',
				})
			}
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
							let files = this.data.files;
							let vehicleImages = this.data.vehicleImages;
							files.push(obj.data)
							vehicleImages.push(imgUrl)
							this.setData({
								files: files,
								vehicleImages: vehicleImages
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
					if (e.currentTarget.dataset.type == 'video') {
						this.data.videoList.splice(e.currentTarget.dataset.index, 1);
						this.setData({
							videoList: this.data.videoList
						})
					} else {
						this.data.files.splice(e.currentTarget.dataset.index, 1);
						this.data.vehicleImages.splice(e.currentTarget.dataset.index, 1);
						this.setData({
							files: this.data.files,
							vehicleImages: this.data.vehicleImages
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
    console.log(util.formatDate(new Date))
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