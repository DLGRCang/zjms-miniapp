const app = getApp();
const util = require('../../../../utils/util.js')
Page({
  data: {
    deptList: [], //科室数组
    deptName: '', //选中的科室
    deptId: '', //选中的科室id
    docList: [], //医生数组
    docName: '', //选中的医生
    docId: '', //选中的医生id
    docList: [], //医生数组
    docName: '', //选中的医生
    docId: '', //选中的医生id
    timeList: [], //号源日期数组
    timeValue: '', //选中的号源日期
    regTimeTypes: [{
        id: 1,
        value: '上午'
      }, {
        id: 2,
        value: '下午'
      }, {
        id: 3,
        value: '晚上',
      },

      {
        id: 6,
        value: '全天',
      },

    ],

    regTimeType: '',
    mobilephone: '',
    cardNo: '',
  },
  putData(e) {
    let key = e.currentTarget.dataset.key
    console.log(key)
    this.setData({
      [key]: e.detail.value
    })
  },
  radioChange(e) {
    let key = e.currentTarget.dataset.key
    console.log(key)
    console.log(e.detail.value)
    this.setData({
      [key]: e.detail.value
    })
  },
  //提交数据
  commitData() {
    let data = {
      name: this.data.name,
      userId: wx.getStorageSync("userId"),
      doctorIdFromHIS: this.data.docId,
      deptIdFromHIS: this.data.deptId,
      regDate: this.data.timeValue,
      regTimeType: this.data.regTimeType,
      mobilephone: this.data.mobilephone,
      cardNo: this.data.cardNo,
    }
    console.log(data)
    util.requestData('hospitalappointment/getAppointment?func=hospitalize', 'GET', data).then(res => {
      console.log(res)
      if (res.statusCode == 200) {
        if (res.data.resultStatus == 1) {
          wx.navigateBack({
            delta: 1
          })
          util.showToast("提交成功")
        } else {
          util.showToast(res.data.resultDesc)
        }

      } else {
        util.showToast(res.data.msg)
      }
    });
  },
  //获取科室列表
  getDepartmentList() {
    util.requestData('hospitalappointment/getDepartmentInfo?func=' + '&userId=' + wx.getStorageSync("userId"), 'GET', {}).then(res => {
      console.log(res)
      if (res.statusCode == 200) {
        this.setData({
          deptList: res.data.ListDepartmentInfo
        })

      } else {
        util.showToast("科室信息加载失败");
      }
    });
  },
  deptChange(e) {
    this.setData({
      deptName: this.data.deptList[e.detail.value].name,
      deptId: this.data.deptList[e.detail.value].deptIdFromHIS,
      docList: [],
      docName: '',
      docId: '',
      timeList: [],
      timeValue: '',
    })
    this.getDepartmentDoctorInfo()
  },
  //获取医生列表
  getDepartmentDoctorInfo() {
    util.requestData('hospitalappointment/getDepartmentDoctorInfo?func=&deptIdFromHIS=' + this.data.deptId + '&userId=' + wx.getStorageSync("userId"), 'GET', {}).then(res => {
      console.log(res)
      if (res.statusCode == 200) {
        this.setData({
          docList: res.data.deptDoctorList
        })

      } else {
        util.showToast("科室医生信息加载失败");
      }
    });
  },
  docChange(e) {
    this.setData({
      docName: this.data.docList[e.detail.value].doctorName,
      docId: this.data.docList[e.detail.value].doctorCode,
      timeList: [],
      timeValue: '',
    })
    this.getDoctorAppoinmentCount()
  },
  //获取医生号源
  getDoctorAppoinmentCount() {
    util.requestData('hospitalappointment/getDoctorAppoinmentCount?func=&doctorIdFromHIS=' + this.data.docId + '&userId=' + wx.getStorageSync("userId"), 'GET', {}).then(res => {
      console.log(res)
      if (res.statusCode == 200) {
        if (res.data.ListDoctorAppoinmentCount.length > 0) {
          this.setData({
            timeList: res.data.ListDoctorAppoinmentCount
          })
        } else {
          util.showToast("没号了");
        }


      } else {
        util.showToast("医生号源加载失败");
      }
    });
  },
  timeChange(e) {
    this.setData({
      timeValue: this.data.timeList[e.detail.value].regDate,

    })

  },
  onLoad(options) {
    this.getDepartmentList()

  }

})