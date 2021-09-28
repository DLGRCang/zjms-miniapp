// pages/charm/pages/taskInfo/taskInfo.js
const recordManager = wx.getRecorderManager()
const innerAudioContext = wx.createInnerAudioContext();
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:app.globalData.baseImgUrl,
    taskImg:[],
    taskaudio:'',
    voiceStatus:'点击播放',
    task:{},
    isAdmin:false,
  },
  showVoice() {
    console.log("*****播放语音***********"+ this.data.imgUrl+ this.data.taskaudio)
    let that = this
    innerAudioContext.src = this.data.imgUrl+ this.data.taskaudio;
    innerAudioContext.play();
    innerAudioContext.onPlay(function () {
      console.log("*****开始播放********")
      that.setData({
        voiceStatus: "  播放中..."
      })
    })
    innerAudioContext.onEnded(function () {
      console.log("*****结束播放********")
      that.setData({
        voiceStatus: "  点击播放"
      })
    })
  },

  //任务反馈
  goTaskFk(e) {
    wx.navigateTo({
      url: '../taskFk/taskFk?id=' + e.currentTarget.dataset.id + '&name=' + e.currentTarget.dataset.name
    })
  },
  //任务修改
  updateTask(e) {
    wx.redirectTo({
      url: '../updateTask/updateTask?obj=' + JSON.stringify(this.data.task)
    })
    // wx.navigateTo({
    //   url: '../updateTask/updateTask?obj=' + JSON.stringify(this.data.task)
    // })
  
  },
   //任务删除
  deleteTask(e) {
    util.requestData('taskinfo/removetaskinforelease/'+this.data.task.taskInfoId, 'DELETE', {}).then(res => {
      console.log("***********删除*********")
      console.log(res)
			if (res.statusCode == 200) {
				wx.showToast({
					title: "删除成功",
					icon: 'success',
					mask: true,
					success(res) {
						setTimeout(() => {
							wx.navigateBack({
								delta: 1
							})
						}, 2000)
					}
				});
			} else {
				wx.showToast({
					title: "删除失败!",
					icon: 'none',
					mask: true,
					success(res) {
						setTimeout(() => {
							wx.navigateBack({
								delta: 1
							})
						}, 2000)
					}
				});
			}
		})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      isAdmin:options.isAdmin
    })
    if(JSON.parse(options.id).taskfile == ""|| JSON.parse(options.id).taskfile == null){
      this.setData({
        task:JSON.parse(options.id),
        taskaudio:JSON.parse(options.id).taskaudio
      })
    }else{
      this.setData({
        task:JSON.parse(options.id),
        taskImg:JSON.parse(options.id).taskfile.split(","),
        taskaudio:JSON.parse(options.id).taskaudio
      })
    }
    
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