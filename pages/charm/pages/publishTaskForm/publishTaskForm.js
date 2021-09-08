// pages/charm/pages/publishTaskForm/publishTaskForm.js
const recordManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext();
const util = require("../../../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dept: ['环卫局', '大数据发展中心', '卫健委'],
    index: 0,
    taskName: '',
    partyphone: '',
    taskInfo: '',
    phone: '',
    startDate: util.formatDate(new Date()),
    endDate: util.formatDate(new Date()),
    imageArr: [],
    imgList: [],
    soundRecording: '', //录音
    voiceLong: '',
    voiceStatus: '',
  },
  PickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  startDateChange(e) {
    this.setData({
      startDate: e.detail.value
    })
  },
  endDateChange(e) {
    this.setData({
      endDate: e.detail.value
    })
  },
  putData(e) {
    let key = e.currentTarget.dataset.key
    console.log(key)
    this.setData({
      [key]: e.detail.value
    })
  },
  //提交数据
  commitData() {
    
    // console.log(this.data.taskName)
    // console.log(this.data.dept[this.data.index])
    // console.log(this.data.startDate)
    // console.log(this.data.endDate)
    // console.log(this.data.taskInfo)
    // var data = {
    //   title:this.data.taskName,
    //   department:this.data.dept[this.data.index],
    //   startDate:this.data.startDate,
    //   endDate:this.data.endDate,
    //   cont:this.data.taskInfo,
    //   image:"https://www.yjhlcity.com/InfoIssue/miniapp/zjms/swiper2.png"
    // }

    // wx.setStorageSync('tabState0', data)
    // util.httpRequestForm('https://www.yjhlcity.com/yjhl/addEvent/addWxXcxEvent.do', 'POST', data).then(res => {
    // 	console.log(res)
    // 	if (res.statusCode == 200) {
    // 		wx.navigateBack({
    // 			delta: 2
    // 		})
    // 		util.showToast("提交成功")

    // 	} else {
    // 		util.showToast(res.data.msg)
    // 	}
    // });
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
                imageArr: this.data.imageArr.concat('data:image/png;base64' + ',' + res.data),
              })
            } else {
              this.setData({
                imgList: [filePath],
                imageArr: ['data:image/png;base64' + ',' + res.data],
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
  //开始录音
	startrecord() {
		console.log("开始录音" + new Date())
		this.centerTime = new Date();
		recordManager.start({
			duration: 600000,
			format: 'mp3'
		})
		wx.showLoading({
			title: '录音中...',
		})
	},
	//结束录音
	endrecord() {
		let that = this
		recordManager.stop()
		wx.hideLoading()
		//停止录音回调
		recordManager.onStop(function (ress) {
			var path = ress.tempFilePath
			util.uploadAudioFile(path)
				.then(res => {
					console.log(res)
					if (res.statusCode == 200) {
						let obj = JSON.parse(res.data)
						that.setData({
							voiceLong: " " + Math.ceil((ress.duration) / 1000) + " ″ ",
							voiceStatus: "点击播放",
							voiceSrc: path,

							soundRecording: obj.data
						})
					} else {
						util.showToast('录音上传失败')
					}
				});
		})
	},
	//播放录音
	showVoice() {
		let that = this
		innerAudioContext.src = this.data.voiceSrc;
		innerAudioContext.play();
		innerAudioContext.onPlay(function () {
			that.setData({
				voiceStatus: "  播放中..."
			})
		})
		innerAudioContext.onEnded(function () {
			that.setData({
				voiceStatus: "  点击播放"
			})
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