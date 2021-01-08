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
  return [year, month, day].map(formatNumber).join('-')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
// let base = 'http://192.168.1.111:8004/InfoIssue/app/' //王益兴
// let base = 'http://192.168.1.113:8004/InfoIssue/app/' //刘翔宇
// let base = 'http://192.168.31.101:8004/InfoIssue/app/' //谷宇
let base = 'https://yiqi.sucstep.com/InfoIssue/app/' //公司

let baseUrl = base + 'release/'
let uploadFileUrl='file/uploadfile'//文件上传地址
let uploadUrl = base + 'file/uploadimage' //图片上传地址

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
  data['userId'] = wx.getStorageSync("userId") ? wx.getStorageSync("userId") : "";
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
//文件上传接口
const uploadFile = function (filePath, name) {
  wx.showLoading({
    title: '上传中...'
  });
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: uploadUrl,
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
    icon: 'success',
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
const isNull = function (str) {
  if (typeof (str) == "undefined" || str == null || str === "")
    return true;
  else
    return false;
};

module.exports = {
  formatTime: formatTime,
  formatDate: formatDate,
  requestApi: requestApi,
  requestData: requestData,
  uploadFile: uploadFile,
  baseUrl: baseUrl,
  checkIdCard: checkIdCard,
  checkPhone: checkPhone,
  checkEmail: checkEmail,
  getBirthday: getBirthday,
  getGender: getGender,
  callPhone: callPhone,
  pageJump: pageJump,
  pageJumpTo: pageJumpTo,
  getParams: getParams,
  showToast: showToast,
  returnCode: returnCode,
  isNull: isNull
}