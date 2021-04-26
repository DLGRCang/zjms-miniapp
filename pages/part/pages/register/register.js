// pages/part/pages/register/register.js
const app = getApp()
const util = require('../../../../utils/util.js')
const part = require('../../../../utils/part.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: app.globalData.imgUrl,
    one: '',
    two: '',
    three: '',
    multiArray: [[], [], []],
    multiIndex: [0, 0, 0],
    phone: '',
    password: '',
    index: null,
    identity: ['中共党员', '预备党员'],
    IDENTITY: 0,
    NAME: '',
    PHONE: '',
    ID_CARD: '',
    D: '',
    DY: '',
    H: '',
    ADDRESS: '',
    area: '',
    COMMUNITY_TOGETHER: '',
    DEPT_ID: '',
    id: '',
    PASSWORD: '',
    PASSWORDS: '',
  },

  // 身份选择
  identityChoose(e) {
    this.setData({
      index: e.detail.value,
      IDENTITY: parseInt(e.detail.value) + 1
    })
  },
  //  获取数据
  putData(e) {
    let key = e.currentTarget.dataset.key
    console.log(key)
    this.setData({
      [key]: e.detail.value
    })
  },
  // 查询
  goSearch() {
    util.pageJump('../search/search')
  },
  // 提交
  submit() {
    if (this.data.PASSWORD === this.data.PASSWORD) {
      let data = {
        NAME: this.data.NAME,
        PHONE: this.data.PHONE,
        ID_CARD: this.data.ID_CARD,
        ADDRESS: this.data.area + ',' + this.data.D + '栋' + this.data.DY + '单元' + this.data.H + '号',
        IDENTITY: this.data.IDENTITY,
        COMMUNITY_TOGETHER: this.data.COMMUNITY_TOGETHER,
        DEPT_ID: this.data.id,
        PASSWORD: this.data.PASSWORD
      }
      console.log(data)
      let url = part.baseUrl + 'itemuser/pubSaveApplicantUser?NAME=' + this.data.NAME + '&PHONE=' + this.data.PHONE + '&ID_CARD=' + this.data.ID_CARD + '&ADDRESS=' + this.data.area + this.data.D + '栋' + this.data.DY + '单元' + this.data.H + '号' + '&IDENTITY=' + this.data.IDENTITY + '&COMMUNITY_TOGETHER=' + this.data.COMMUNITY_TOGETHER + '&DEPT_ID=' + this.data.id + '&PASSWORD=' + this.data.PASSWORD + '&SEX=1';
      part.httpRequest(url, 'POST', {}).then(res => {
        console.log(res.data)
        if (res.data.code == 200) {
          util.pageJump('../sign/sign')
        } else {
          let msg = res.data.msg
          wx.showToast({
            title: msg,
            icon: 'none'
          })
        }
      });
    } else {
      wx.showToast({
        icon: 'none',
        title: '俩次输入的密码不一致',
      })
    }
  },

  // 获取数据
  getInfoList: function () {
    let that = this
    that.setData({
      one: ['阿勒腾席热镇'],
      two: { '阿勒腾席热镇': ['园林社区', '通格朗社区', '纳林高勒社区', '札萨克社区', '满达社区', '平安社区', '文明街社区', '恩可社区', '阿吉奈社区', '乌兰淖尔社区', '吉日嘎朗社区', '南苑社区', '新北社区', '王府路社区'] },
      three: {
        '园林社区': ["民悦a区", "百合花园", "民悦B区", "富贵苑", "民生a区", "民悦C区", "馨雅苑A区"],
        '通格朗社区': ["民生B区", "西苑小区", "亿城A区", "兴盟时代广场", "万力吉祥苑", "丽景家园", "尚岛国际", "京典佳园", "亿城B区", "郡王现代城"],
        '纳林高勒社区': ["博源柳河湾小区", "柳岸华庭小区", "誉达嘉上安泰小区", "锦尚苑A区", "锦尚苑B区", "锦尚苑C区", "万佳富园小区"],
        '札萨克社区': ["乌兰小区", "富凯康馨苑", "明珠花园B区", "碧影华城", "明珠花园A区", "文明小区", "天隆佳苑", "万佳裕园"],
        '满达社区': ["祥惠苑小区", "凤凰城小区"],
        '平安社区': ["平安小区", "广厦小区", "金鹭小区", "华麟、国税小区及外围", "万力置业小区及平安小区外围", "平房区"],
        '文明街社区': ["绿苑小区", "御景嘉苑小区", "金卓市场平房、其它平房区"],
        '恩可社区': ["宏泰尚都", "澜园", "澄园", "澳园", "灏园", "淳园", "澋园", "清园", "润园", "泓园", "浦园", "涵园", "沁园", "濡园", "汀园", "瀚园"],
        '阿吉奈社区': ["伊锦苑", "辰元西园", "望景园", "普雅花园", "丽都水岸", "西山领秀", "三星小区"],
        '乌兰淖尔社区': ["红海家园A区", "红海家园B区", "蓝天家园A区", "蓝天家园B区", "蓝天家园C区", "墨金苑", "嘉瑞苑", "锦瑞苑", "王府博业回迁小区"],
        '吉日嘎朗社区': ["顺泰苑", "嘉泰苑", "泰丰苑", "安泰苑", "城投玉园", "悦和城", "永泰苑"],
        '南苑社区': ["汽车城", "彩钢房"],
        '新北社区': ["矿区移民房A区", "矿区移民房B区", "矿区移民房C区", "矿区移民房D区", "馨雅苑B区", "馨雅苑C区", "阳光家园C区", "阳光家园B区"],
        '王府路社区': ["公园天下观邸", "万豪国际小区", "兴泰星园小区", "怡心苑小区", "金苑小区", "王府小区", "彩钢房及政府周边"],
      },
    })
    that.data.multiArray[0] = that.data.one
    that.data.multiArray[1] = this.getArr(that.data.one[0], that.data.two);
    that.data.multiArray[2] = this.getArr(that.data.multiArray[1][0], that.data.three);
    that.setData({
      multiArray: that.data.multiArray
    })
  },

  /****列发生改变 */
  bindMultiPickerColumnChange: function (e) {
    let that = this
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);

    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        //第一列改变  设置第二列数据
        let arr = that.getArr(that.data.one[e.detail.value], that.data.two)
        data.multiArray[1] = arr
        that.setData({
          multiArray: data.multiArray
        })
        //从第二列中拿出第一项，设置第三组人员
        let arrColumn2 = that.getArr(arr[0], that.data.three)
        data.multiArray[2] = arrColumn2
        that.setData({
          multiArray: data.multiArray
        })
        break;
      case 1:
        //第二列改变 设置第三列数据
        let arr2 = that.getArr(data.multiArray[1][e.detail.value], that.data.three)
        data.multiArray[2] = arr2
        that.setData({
          multiArray: data.multiArray
        })
        break;
    }
  },
  getArr: function (value, arr) {
    for (let i in arr) {
      if (value == i) {
        return arr[i]
      }
    }
  },
  /****值发生改变 */
  bindMultiPickerChange: function (e) {
    // console.log(e.currentTarget.dataset.info)
    this.setData({
      multiIndex: e.detail.value,
      area: e.currentTarget.dataset.info
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInfoList()
    this.setData({
      DEPT_ID: options.key,
      id: options.id
    })
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