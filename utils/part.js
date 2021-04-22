// const app = getApp();

let baseUrl = 'https://yiqi.sucstep.com/InfoIssue/app/' //公司

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
            delta: 2
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
  showToast: showToast,
  returnCode: returnCode

}