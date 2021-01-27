// pages/userCenter/pages/tel/tel.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneList: [
      { dept: '车管所', area: '一楼B区', phone: '8681232', remark: '咨询' },
      { dept: '车管所', area: '一楼B区', phone: '8686900', remark: '监督' },
      { dept: '户 政', area: '一楼B区', phone: '8582177', remark: '' },
      { dept: '出入境', area: '一楼C区', phone: '8581879', remark: '' },
      { dept: '税务一分局', area: '一楼F区', phone: '8582149', remark: '' },
      { dept: '税务一分局', area: '一楼F区', phone: '8581947', remark: '' },
      { dept: '税务二分局', area: '一楼F区', phone: '8582241', remark: '' },
      { dept: '税务二分局', area: '一楼F区', phone: '8582240', remark: '' },
      { dept: '供电缴费', area: '二楼B区', phone: '8582128', remark: '' },
      { dept: '自来水缴费', area: '二楼B区', phone: '8582122', remark: '' },
      { dept: '天然气缴费', area: '二楼B区', phone: '8581551', remark: '' },
      { dept: '邮政快递', area: '一楼B区', phone: '8582190', remark: '' },
      { dept: '市民卡', area: '二楼B区', phone: '8575130', remark: '' },
      { dept: '卫健委', area: '三楼A区', phone: '8582007', remark: '' },
      { dept: '烟草局', area: '三楼A区', phone: '8687155', remark: '' },
      { dept: '市场监督管理局', area: '三楼A区', phone: '8581726', remark: '' },
      { dept: '城管局', area: '三楼A区', phone: '8582179', remark: '' },
      { dept: '自然资源局(门头牌隔)', area: '三楼A区', phone: '8581545', remark: '' },
      { dept: '外事办', area: '三楼A区', phone: '8581848', remark: '' },
      { dept: '民 委', area: '三楼A区', phone: '8582089', remark: '' },
      { dept: '投资项目“一站式”服务中心', area: '三楼B区', phone: '8581622', remark: '' },
      { dept: '投资项目“一站式”服务中心', area: '三楼B区', phone: '8581623', remark: '' },
      { dept: '林草局', area: '二楼B区', phone: '8581585', remark: '' },
      { dept: '水利局', area: '三楼B区', phone: '8582058', remark: '' },
      { dept: '运管局', area: '三楼B区', phone: '8581922', remark: '' },
      { dept: '应急管理局', area: '三楼B区', phone: '8582203', remark: '' },
      { dept: '消防大队', area: '三楼B区', phone: '', remark: '' },
      { dept: '住建局', area: '三楼B区', phone: '8582200', remark: '' },
      { dept: '农牧局', area: '三楼B区', phone: '8581568', remark: '' },
      { dept: '能源局', area: '二楼B区', phone: '', remark: '' },
      { dept: '乌兰木伦镇', area: '三楼C区', phone: '8581574', remark: '' },
      { dept: '红庆河镇', area: '三楼C区', phone: '8581573', remark: '' },
      { dept: '伊金霍洛镇', area: '三 楼C区', phone: '8581564', remark: '' },
      { dept: '札萨克镇', area: '三楼C区', phone: '8581560', remark: '' },
      { dept: '苏布尔嗅镇', area: '三楼C区', phone: '8581583', remark: '' },
      { dept: '纳林陶亥镇', area: '三楼C区', phone: '8581715', remark: '' },
      { dept: '民政局', area: '楼D区', phone: '8582191', remark: '' },
      { dept: '残联', area: '三楼D区', phone: '', remark: '' },
      { dept: '就业局', area: '三楼D区', phone: '8581707', remark: '' },
      { dept: '人才交流中心', area: '三楼D区', phone: '8581752', remark: '' },
      { dept: '社保局', area: '三楼D区', phone: '8581756', remark: '公共业务' },
      { dept: '社保局', area: '三楼D区', phone: '8581758', remark: '社保卡领取' },
      { dept: '社保局', area: '三楼D区', phone: '8582115', remark: '企业' },
      { dept: '社保局', area: '三楼D区', phone: '8581757', remark: '机大事业单位' },
      { dept: '医保局', area: '三楼E区', phone: '8582256', remark: '居民业务' },
      { dept: '医保局', area: '三楼E区', phone: '8582258', remark: '职工业务' },
      { dept: '医保局', area: '三楼E区', phone: '8582038', remark: '人保财险' },
      { dept: '医保局', area: '三楼E区', phone: '8582048', remark: '中华保险' },
      { dept: '自然资源局', area: '三楼F区', phone: '8581626', remark: '' },
      { dept: '不动产登记', area: '三楼F区', phone: '8582080', remark: '受理' },
      { dept: '不动产登记', area: '三楼F区', phone: '8960012', remark: '发证' },
      { dept: '不动产登记', area: '三楼F区', phone: '8968916', remark: '税务' },
      { dept: '房管局', area: '三楼F区', phone: '8582252', remark: '' },
      { dept: '住房公积金', area: '三楼F区', phone: '12329', remark: '' },
      { dept: '咨询及投诉监督', area: '三楼C区', phone: '8582239', remark: '' },
    ],
  },
  goTel(e) {
    util.callPhone(e.currentTarget.dataset.tel)
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