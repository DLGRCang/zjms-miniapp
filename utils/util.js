// const app = getApp();
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// let baseUrl = 'http://192.168.0.42:8004/InfoIssue/app/release/'; //测试(赵雪融)
// let baseUrl = 'http://127.0.0.1:8004/InfoIssue/';//测试(本地)（严冬）
let baseUrl = 'https://yiqi.sucstep.com/InfoIssue/app/release/'//测试地址（公司）
// let baseUrl = 'http://******/';//预发布
// let baseUrl = 'https://*****/';//线上
//内部请求方法
const requestApi = function (url, method, data = {}) {
  let meth = method.toUpperCase()
  if (meth != "GET" && meth != "DELETE" && meth != "POST" && meth != "PUT") {
    meth = 'GET' //不传情况下默认'GET'
  }
  if (getApp().globalData.userInfo != null) {//已登陆情况下必传参数（项目需要看情况而定）
    data['token'] = getApp().globalData.userInfo.token;
    data['uid'] = getApp().globalData.userInfo.uid;
  }
  return new Promise(function (resolve, reject) {
    wx.request({
      header: {
        'content-type': meth == 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
      },
      url: baseUrl + url,
      data: data,
      method: meth,
      success: function (res) {
        //返回信息统一处理操作

        //resolve用于具体调用中
        resolve(res)
      },
      fail: function (res) {
        //错误信息统一处理操作

        reject(res)
      }
    })
  })
}

//外部请求方法
const requestData = function (url, method, data = {}) {
  let meth = method.toUpperCase()
  if (meth != "GET" && meth != "DELETE" && meth != "POST" && meth != "PUT") {
    meth = 'GET' //不传情况下默认'GET'
  }
  if (getApp().globalData.userInfo != null) {//已登陆情况下必传参数（项目需要看情况而定）
    data['token'] = getApp().globalData.userInfo.token;
    data['uid'] = getApp().globalData.userInfo.uid;
  }
  return new Promise(function (resolve, reject) {
    wx.request({
      header: {
        'content-type': meth == 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
      },
      url:  url,
      data: data,
      method: meth,
      success: function (res) {
        //返回信息统一处理操作

        //resolve用于具体调用中
        resolve(res)
      },
      fail: function (res) {
        //错误信息统一处理操作

        reject(res)
      }
    })
  })
}

//身份证号校验
const checkIdCard = function (data) {
  if (!(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(data))) {
    wx.showToast({
      title: '身份证号有误',
      icon: 'none'
    });
    return false;
  } else {
    return true;
  }
}
//手机号校验
const checkPhone = function (data) {
  if (!(/^1[345678]\d{9}$/.test(data))) {
    wx.showToast({
      title: '电话号码有误',
      icon: 'none'
    });
    return false;
  } else {
    return true;
  }
}
//邮箱校验
const checkEmail = function (data) {
  if (!(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(data))) {
    wx.showToast({
      title: '邮箱有误',
      icon: 'none'
    });
    return false;
  } else {
    return true;
  }
}

//根据身份证号判断生日
const getBirthday = function (data) {
  return data.substring(6, 10) + '-' + data.substring(10, 12) + '-' + data.substring(12, 14);
}

//根据身份证号判断性别
const getGender = function (data) {
  return (data.substring(17, 18) % 2 == 0) ? '女' : '男';
}
//拨打电话
const callPhone = function (phoneNumber) {
  wx.makePhoneCall({
    phoneNumber: 'phoneNumber',
  })
}

//跳转页面(不带参)
const pageJump = function (url) {
  wx.navigateTo({
    url: url,
  })
}

//跳转页面(带id)
//name(参数)value（参数值）
//例pageJumpTo（‘url’，‘id’，‘1’）
const pageJumpTo = function (url, name, value={}) {
  wx.navigateTo({
    url: url + '?' + name + "=" + value,
  })
}

//url参数获取
const getParams = function getUrlkey(url) {
  var params = {};
  var urls = url.split("?");
  if (urls[1]) {
    var arr = urls[1].split("&");
    for (var i = 0, l = arr.length; i < l; i++) {
      var a = arr[i].split("=");
      params[a[0]] = a[1];
    }
    return params;
  } else {
    return urls[0]
  }
}

module.exports = {
  formatTime: formatTime,
  requestApi: requestApi,
  requestData: requestData,
  baseUrl: baseUrl,
  checkIdCard: checkIdCard,
  checkPhone: checkPhone,
  checkEmail: checkEmail,
  getBirthday: getBirthday,
  getGender: getGender,
  callPhone: callPhone,
  pageJump: pageJump,
  pageJumpTo: pageJumpTo,
  getParams: getParams
}
