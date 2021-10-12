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
const formatDate = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('/')
}
const formatDate1 = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return [year, month, day].map(formatNumber).join('-')
}
const getWeekByDate = dates => {
  let show_day = new Array('7', '1', '2', '3', '4', '5', '6');
  let date = new Date(dates);
  date.setDate(date.getDate());
  let day = date.getDay();
  let week = ''
  switch (show_day[day]) {
    case "1":
      week = '星期一'
      break;
    case "2":
      week = '星期二'
      break;
    case "3":
      week = '星期三'
      break;
    case "4":
      week = '星期四'
      break;
    case "5":
      week = '星期五'
      break;
    case "6":
      week = '星期六'
      break;
    case "7":
      week = '星期日'
      break;
  }

  return week;
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// let base = 'http://172.16.20.68:8004/InfoIssue/app/' //孟磊
// let base = 'http://192.168.0.7:8004/InfoIssue/app/' //刘翔宇
let base = 'https://www.yjhlcity.com/InfoIssue/app/' //公司正式
let baseUrl = base + 'release/'
let uploadFileUrl = base + 'file/uploadfile'//文件上传地址
let uploadUrlImage = base + 'file/uploadimage' //图片上传地址
let uploadUrlVideo = base + 'file/uploadvideo' //视频上传地址
let uploadUrlAudio = base + 'file/uploadaudio' //音频上传地址

//内部请求方法
const requestApi = function (url, method, data = {}) {
  let meth = method.toUpperCase()
  if (meth != "GET" && meth != "DELETE" && meth != "POST" && meth != "PUT") {
    meth = 'GET' //不传情况下默认'GET'
  }
  // if (getApp().globalData.userInfo != null) { //已登陆情况下必传参数（项目需要看情况而定）
  // data['userId'] = wx.getStorageSync("userId") ? wx.getStorageSync("userId") : "";
  // }
  return new Promise(function (resolve, reject) {

    wx.showLoading({
      title: '请稍等...'
    });
    wx.request({
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync("token")
      },
      url: baseUrl + url,
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

//外部请求方法
const requestData = function (url, method, data = {}) {
  wx.showLoading({
    title: '请稍等...'
  });
  let meth = method.toUpperCase()
  if (meth != "GET" && meth != "DELETE" && meth != "POST" && meth != "PUT") {
    meth = 'GET' //不传情况下默认'GET'
  }
  // if (getApp().globalData.userInfo != null) { //已登陆情况下必传参数（项目需要看情况而定）
  // data['userId'] = wx.getStorageSync("userId") ? wx.getStorageSync("userId") : "";
  // }
  return new Promise(function (resolve, reject) {
    wx.request({
      header: {
        'content-type': 'application/json',
        'token': wx.getStorageSync("token")
      },
      url: base + url,
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
        'token': wx.getStorageSync("token")
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
//网络请求
const httpRequestForm = function (url, method, data = {}) {
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
        'token': wx.getStorageSync("token")
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
//文件上传接口
const uploadFile1 = function (filePath, name) {
  wx.showLoading({
    title: '上传中...'
  });
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: uploadFileUrl,
      filePath: filePath,
      name: name,
      formData: {},
      timeout: 2 * 60 * 1000,
      header: {
        'token': wx.getStorageSync("token")
      },
      success: (res) => {
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
//图片文件上传接口
const uploadFile = function (filePath, name) {
  wx.showLoading({
    title: '上传中...'
  });
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: uploadUrlImage,
      filePath: filePath,
      name: name,
      formData: {},
      timeout: 2 * 60 * 1000,
      header: {
        'token': wx.getStorageSync("token")
      },
      success: (res) => {
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
//视频文件上传接口
const uploadVideoFile = function (filePath) {
  wx.showLoading({
    title: '上传中...'
  });
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: uploadUrlVideo,
      filePath: filePath,
      name: 'video',
      formData: {},
      timeout: 2 * 60 * 1000,
      header: {
        'token': wx.getStorageSync("token")
      },
      success: (res) => {
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
//音频文件上传接口
const uploadAudioFile = function (filePath) {
  wx.showLoading({
    title: '上传中...'
  });
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: uploadUrlAudio,
      filePath: filePath,
      name: 'audio',
      formData: {},
      timeout: 2 * 60 * 1000,
      header: {
        'token': wx.getStorageSync("token")
      },
      success: (res) => {
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
//弹出提示框
const showToast = function (msg) {
  wx.showToast({
    title: msg,
    icon: 'none',
    mask: true,
    duration: 1500
  })
}

//根据身份证号判断生日
const getBirthday = function (data) {
  return data.substring(6, 10) + '-' + data.substring(10, 12) + '-' + data.substring(12, 14);
}

//根据身份证号判断性别
const getGender = function (data) {
  return (data.substring(17, 18) % 2 == 0) ? '女' : '男';
}

// 根据身份证号计算年龄
const getAge = function (identify) {
  if (identify != null && identify != '') {
    //获取年龄
    var myDate = new Date();
    var month = myDate.getMonth() + 1;
    var day = myDate.getDate();
    var age = myDate.getFullYear() - identify.substring(6, 10) - 1;
    if (identify.substring(10, 12) < month || identify.substring(10, 12) == month && identify.substring(12, 14) <= day) {
      age++;
    }
    return age;
  }
}


//拨打电话
const callPhone = function (phoneNumber) {
  wx.makePhoneCall({
    phoneNumber: phoneNumber,
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
const pageJumpTo = function (url, name, value = {}) {
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

//请求返回提示
const returnCode = function (code, num, afterNum) {
  if (code == num) {
    wx.showToast({
      title: "提交成功",
      icon: 'success',
      mask: true,
      success(res) {
        setTimeout(() => {
          wx.navigateBack({
            delta: afterNum
          })
        }, 2000)
      }
    });
  } else {
    wx.showToast({
      title: '请检查数据',
      icon: 'error',
    })
  }
}
const isNull = function (str) {
  if (typeof (str) == "undefined" || str == null || str === "")
    return true;
  else
    return false;
};

const isEmpty = function (key, title) {
  if (key == "" || key == null || key == undefined) {
    wx.showToast({
      title: title,
      icon: 'none',
      duration: 2000
    })
    return
  }
}
/*
  腾讯地图路线规划
  name 名称  lat 维度 lng 经度
*/
const routePlan = function (name, lat, lng) {
  let plugin = requirePlugin('routePlan');
  const key = 'O5QBZ-JLYL6-3MTSA-E3BN3-YAWD7-A3FXI';
  const referer = '一手办';
  let endPoint = JSON.stringify({
    'name': name,
    'latitude': lat,
    'longitude': lng
  });
  wx.navigateTo({
    url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
  });
}

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  formatDate1: formatDate1,
  getWeekByDate: getWeekByDate,
  requestApi: requestApi,
  requestData: requestData,
  httpRequest: httpRequest,
  httpRequestForm: httpRequestForm,
  uploadFile: uploadFile,
  uploadFile1: uploadFile1,
  base: base,
  uploadUrlImage: uploadUrlImage,
  baseUrl: baseUrl,
  checkIdCard: checkIdCard,
  checkPhone: checkPhone,
  checkEmail: checkEmail,
  getBirthday: getBirthday,
  getAge: getAge,
  getGender: getGender,
  callPhone: callPhone,
  pageJump: pageJump,
  pageJumpTo: pageJumpTo,
  getParams: getParams,
  showToast: showToast,
  returnCode: returnCode,
  isNull: isNull,
  routePlan: routePlan,
  isEmpty: isEmpty,
  uploadVideoFile: uploadVideoFile,
  uploadVideoFile: uploadVideoFile,
  uploadAudioFile: uploadAudioFile
}