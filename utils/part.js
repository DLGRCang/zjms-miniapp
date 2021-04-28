
// url 地址
// let baseUrl =  'https://www.yjhlcity.com/dangjian/' // 正式
let baseUrl = 'http://172.16.20.57:8080/sucstep_dj_dj_develop_dituyuan_war_exploded/' // 测试

// 上传地址
let uploadUrl = 'file/asyncUploadFile'

//网络请求
const httpRequest = function (url, method, data = {}) {
  wx.showLoading({
    title: '请稍等...'
  });
  let meth = method.toUpperCase()
  if (meth != "GET" && meth != "DELETE" && meth != "POST" && meth != "PUT") {
    meth = 'GET' //不传情况下默认'GET'
  }
  return new Promise(function (resolve, reject) {
    wx.request({
      header: {
        'content-type': 'application/json',
        'token-header': wx.getStorageSync("token-header"),
        'user-token-header': wx.getStorageSync("userToken"),
        'user-name-header': wx.getStorageSync("userName")
      },
      url: url,
      data: data,
      method: meth,
      success: function (res) {
        wx.hideLoading();
        //返回信息统一处理操作

        //resolve用于具体调用中
        resolve(res)
      },
      fail: function (res) {
        wx.hideLoading();
        //错误信息统一处理操作
        reject(res)
      }
    })
  })
}

// 文件上传
const uploadFile = function (filePath, name) {
  wx.showLoading({
    title: '上传中...'
  });
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: baseUrl + uploadUrl,
      filePath: filePath,
      name: name,
      formData: {},
      timeout: 2 * 60 * 1000,
      header: {
        "Content-Type": "multipart/form-data",
        'token-header': wx.getStorageSync("token-header"),
        'user-token-header': wx.getStorageSync("userToken"),
        'user-name-header': wx.getStorageSync("userName")
      },
      success: (res) => {
        console.log(res)
        wx.hideLoading();
        resolve(res)
      },
      fail: (res) => {
        //错误信息统一处理操作
        wx.hideLoading();
        reject(res)
        this.showToast('上传失败')
      }
    })
  });
}


//弹出提示框
const showToast = function (msg) {
  wx.showToast({
    title: msg,
    icon: 'success',
    mask: true,
    duration: 1500
  })
}

//请求返回提示
const returnCode = function (code, num) {
  if (code == num) {
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
      title: '请检查数据',
      icon: 'error',
    })
  }
}


module.exports = {
  baseUrl: baseUrl,
  httpRequest: httpRequest,
  uploadFile:uploadFile,
  showToast: showToast,
  returnCode: returnCode

}