const baseurl = 'https://stock.sckjjt.com/'

const login = function (url,param) {
  // 登录数据
  let data = {
    account: 'a3366999_sckjjt',
    passWord: 'a3366999_sckjjt3366999',
    remember: 'true',
    type: 1
  }
  return new Promise(function (resolve, reject) {
    // 获取tocken
    wx.request({
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      url: 'https://stock.sckjjt.com/appjwt/SystemToken',
      data: data,
      method: 'POST',
      // 获取数据
      success: function (res) {
        wx.request({
          url: baseurl + url,
          header: {
            'token': res.data.access_token,
            'content-type': 'application/x-www-form-urlencoded',
          },
          data: param,
          method: 'POST',
          success: function (resp) {
            resolve(resp.data)
          },
        })


        // resolve(res)
      },
      fail: function (res) {
        reject(res)
      }
    })
  })
}


const requestData = function (url, method, data = {}, tocken) {
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
        'content-type': 'application/x-www-form-urlencoded',
        'tocken': tocken
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


module.exports = {
  baseurl: baseurl,
  login: login,
  requestData: requestData
}