// pages/government/pages/thingsGuide/thingsGuide.js
const app = getApp()
const util = require('../../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabName: ["法人办事","个人办事"],
    TabCur: 0, //标签选中项
    searchType: [{
      title: '服务主题',
      id: '',
      content: []
    }, {
      title: '事项类型',
      id: '',
      content: []
    }, {
      title: '服务部门',
      id: '',
      content: []
    }],
    initPersonItems: [], //事项列表
    deptList: [], //部门列表
  },
  //切换顶部tab
  selectTab: function (e) {
    this.setData({
      TabCur: e.detail.TabCur
    })
    let data = this.data.searchType;
      data[0].content = [];
      data[0].title='服务主题'
      data[0].id=''
      this.setData({
        searchType: data
      })
    this.getDataCondition()
    this.getThemeData()
  },
  //切换条件
  onpickChange: function (e) {
    let picker = this.data.searchType
    this.data.searchType[e.detail.current].title = e.detail.pick.dictionaryName,
    this.data.searchType[e.detail.current].id = e.detail.pick.dictionaryId
    this.setData({
      searchType: picker
    })
    this.getDataCondition()
  },
  guideDetail(e) {
    util.pageJumpTo('/pages/government/pages/guideInfo/guideInfo', 'applicationId', e.currentTarget.dataset.id)
  },
  //获取部门列表
  getDeptData() {
    let data = {
      type: this.data.TabCur
    }
    util.requestApi('department/listdepartment/0', 'GET', data).then(res => {
      let bbb = JSON.parse(JSON.stringify(res).replace(/departmentName/g, "dictionaryName"));
      let aaa = JSON.parse(JSON.stringify(bbb).replace(/departmentId/g, "dictionaryId"));
      console.log(aaa)
      let data = this.data.searchType;
      data[2].content = aaa.data;
      this.setData({
        searchType: data
      })
    });
  },
  //服务主题列表
  getThemeData() {
    let data = {
      type: this.data.TabCur
    }
    util.requestApi('application/itemSubjectList', 'GET', data).then(res => {
      console.log(res)
      let data = this.data.searchType;
      data[0].content = res.data;
      this.setData({
        searchType: data
      })
    });
  },
  //事项类型列表
  getTypeData() {
    let data = {
      type: this.data.TabCur
    }
    util.requestApi('dictionary/listdictionary/d2b75819-3e7c-4210-a296-77f3cc0c25ca', 'GET', data).then(res => {
      console.log(res)
      let data = this.data.searchType;
      data[1].content = res.data;
      this.setData({
        searchType: data
      })
    });
  },
  // //获取事项列表
  // getData() {
  //   let data = {
  //     type: this.data.TabCur
  //   }
  //   util.requestApi('application/initPersonItems', 'GET', data).then(res => {
  //     console.log(res)
  //     this.setData({
  //       initPersonItems: res.data
  //     })
  //   });
  // },
  //获取事项列表根据条件
  getDataCondition() {
    let data = {
      type: this.data.TabCur,
      departmentId: this.data.searchType[2].id,//部门id
      itemSubject:this.data.searchType[0].id,//主题id
      applicationType: this.data.searchType[1].id,//事项类型id
    }
    console.log(data)
    util.requestApi('application/filterPersonItems', 'GET', data).then(res => {
      console.log(res)
      this.setData({
        initPersonItems: res.data
      })
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataCondition()
    this.getThemeData()
    this.getTypeData()
    this.getDeptData()
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