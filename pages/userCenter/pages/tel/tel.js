// pages/userCenter/pages/tel/tel.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    key: '',
    phoneList: [
      { isShow: true, dept: '车管所', area: '一楼B区', phone: '8681232', remark: '咨询' },
      { isShow: true, dept: '车管所', area: '一楼B区', phone: '8686900', remark: '监督' },
      { isShow: true, dept: '户政', area: '一楼B区', phone: '8582177', remark: '' },
      { isShow: true, dept: '出入境', area: '一楼C区', phone: '8581879', remark: '' },
      { isShow: true, dept: '税务一分局', area: '一楼F区', phone: '8582149', remark: '' },
      { isShow: true, dept: '税务一分局', area: '一楼F区', phone: '8581947', remark: '' },
      { isShow: true, dept: '税务二分局', area: '一楼F区', phone: '8582241', remark: '' },
      { isShow: true, dept: '税务二分局', area: '一楼F区', phone: '8582240', remark: '' },
      { isShow: true, dept: '供电缴费', area: '二楼B区', phone: '8582128', remark: '' },
      { isShow: true, dept: '自来水缴费', area: '二楼B区', phone: '8582122', remark: '' },
      { isShow: true, dept: '天然气缴费', area: '二楼B区', phone: '8581551', remark: '' },
      { isShow: true, dept: '邮政快递', area: '一楼B区', phone: '8582190', remark: '' },
      { isShow: true, dept: '市民卡', area: '二楼B区', phone: '8575130', remark: '' },
      { isShow: true, dept: '卫健委', area: '三楼A区', phone: '8582007', remark: '' },
      { isShow: true, dept: '烟草局', area: '三楼A区', phone: '8687155', remark: '' },
      { isShow: true, dept: '市场监督管理局', area: '三楼A区', phone: '8581726', remark: '' },
      { isShow: true, dept: '城管局', area: '三楼A区', phone: '8582179', remark: '' },
      { isShow: true, dept: '自然资源局(门头牌隔)', area: '三楼A区', phone: '8581545', remark: '' },
      { isShow: true, dept: '外事办', area: '三楼A区', phone: '8581848', remark: '' },
      { isShow: true, dept: '民委', area: '三楼A区', phone: '8582089', remark: '' },
      { isShow: true, dept: '投资项目“一站式”服务中心', area: '三楼B区', phone: '8581622', remark: '' },
      { isShow: true, dept: '投资项目“一站式”服务中心', area: '三楼B区', phone: '8581623', remark: '' },
      { isShow: true, dept: '林草局', area: '二楼B区', phone: '8581585', remark: '' },
      { isShow: true, dept: '水利局', area: '三楼B区', phone: '8582058', remark: '' },
      { isShow: true, dept: '运管局', area: '三楼B区', phone: '8581922', remark: '' },
      { isShow: true, dept: '应急管理局', area: '三楼B区', phone: '8582203', remark: '' },
      { isShow: true, dept: '消防大队', area: '三楼B区', phone: '', remark: '' },
      { isShow: true, dept: '住建局', area: '三楼B区', phone: '8582200', remark: '' },
      { isShow: true, dept: '农牧局', area: '三楼B区', phone: '8581568', remark: '' },
      { isShow: true, dept: '能源局', area: '二楼B区', phone: '', remark: '' },
      { isShow: true, dept: '乌兰木伦镇', area: '三楼C区', phone: '8581574', remark: '' },
      { isShow: true, dept: '红庆河镇', area: '三楼C区', phone: '8581573', remark: '' },
      { isShow: true, dept: '伊金霍洛镇', area: '三 楼C区', phone: '8581564', remark: '' },
      { isShow: true, dept: '札萨克镇', area: '三楼C区', phone: '8581560', remark: '' },
      { isShow: true, dept: '苏布尔嗅镇', area: '三楼C区', phone: '8581583', remark: '' },
      { isShow: true, dept: '纳林陶亥镇', area: '三楼C区', phone: '8581715', remark: '' },
      { isShow: true, dept: '民政局', area: '楼D区', phone: '8582191', remark: '' },
      { isShow: true, dept: '残联', area: '三楼D区', phone: '', remark: '' },
      { isShow: true, dept: '就业局', area: '三楼D区', phone: '8581707', remark: '' },
      { isShow: true, dept: '人才交流中心', area: '三楼D区', phone: '8581752', remark: '' },
      { isShow: true, dept: '社保局', area: '三楼D区', phone: '8581756', remark: '公共业务' },
      { isShow: true, dept: '社保局', area: '三楼D区', phone: '8581758', remark: '社保卡领取' },
      { isShow: true, dept: '社保局', area: '三楼D区', phone: '8582115', remark: '企业' },
      { isShow: true, dept: '社保局', area: '三楼D区', phone: '8581757', remark: '机大事业单位' },
      { isShow: true, dept: '医保局', area: '三楼E区', phone: '8582256', remark: '居民业务' },
      { isShow: true, dept: '医保局', area: '三楼E区', phone: '8582258', remark: '职工业务' },
      { isShow: true, dept: '医保局', area: '三楼E区', phone: '8582038', remark: '人保财险' },
      { isShow: true, dept: '医保局', area: '三楼E区', phone: '8582048', remark: '中华保险' },
      { isShow: true, dept: '自然资源局', area: '三楼F区', phone: '8581626', remark: '' },
      { isShow: true, dept: '不动产登记', area: '三楼F区', phone: '8582080', remark: '受理' },
      { isShow: true, dept: '不动产登记', area: '三楼F区', phone: '8960012', remark: '发证' },
      { isShow: true, dept: '不动产登记', area: '三楼F区', phone: '8968916', remark: '税务' },
      { isShow: true, dept: '房管局', area: '三楼F区', phone: '8582252', remark: '' },
      { isShow: true, dept: '住房公积金', area: '三楼F区', phone: '12329', remark: '' },
      { isShow: true, dept: '咨询及投诉监督', area: '三楼C区', phone: '8582239', remark: '' },
    ],
  },
  goTel(e) {
    util.callPhone(e.currentTarget.dataset.tel)
  },
  //查询
  searchMenu(e) {
    let key = e.detail.value;
    let list = this.data.phoneList;
    for (let i = 0; i < list.length; i++) {
      let a = key;
      let b = list[i].dept;
      if (b.indexOf(a) != -1) {
        list[i].isShow = true
      } else {
        list[i].isShow = false
      }
    }
    this.setData({
      phoneList: list
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