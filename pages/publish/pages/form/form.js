// pages/publish/pages/form/form.js
const app = getApp();
const util = require('../../../../utils/util.js')
Page({
  data: {
    name:'',
    index: null,
    picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
    pickerData:'',
    date: '2018-12-25',
    imgList: [],
    modalName: null,
    textareaValue: ''
  },
  title(e) {
    console.log(e.detail.value);
    this.setData({
      name: e.detail.value
    })
  },
  //选择器
  PickerChange(e) {
    console.log(this.data.picker[e.detail.value]);
    this.setData({
      index: e.detail.value,
      pickerData: this.data.picker[e.detail.value]
    })
  },
  //日期
  DateChange(e) {
    console.log(e.detail.value);
    this.setData({
      date: e.detail.value
    })
  },
  //图片上传
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], 
      sourceType: ['album'],
      success: (res) => {
        console.log(res.tempFilePaths);
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      // title: '召唤师',
      content: '确定要删除吗？',
      cancelText: '再想想',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  //文本框
  textareaInput(e) {
    console.log(e.detail.value);
    this.setData({
      textareaValue: e.detail.value
    })
  },
  submit() {
    let formData = {
    
    };
    console.log(formData)
  },
})