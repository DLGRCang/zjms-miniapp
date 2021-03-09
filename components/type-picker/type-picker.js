Component({
  options: {
		addGlobalClass: true,
		multipleSlots: true
	},
  properties: {
    pickType: Array
  },
  data: {
		SearchCur: -1, //筛选条件选中项
    pickIndex: 0,

  },
  methods: {
    //检索条件切换
    searchSelect(e) {
      this.setData({
        SearchCur: e.currentTarget.dataset.id,
      })
    
    },
    PickerChange(e) {
      this.setData({
        pickIndex: e.detail.value
      })
      this.triggerEvent('pickChange', {
        current: this.data.SearchCur,
        pick: e.target.dataset.val[e.detail.value]
      })
      this.setData({
        SearchCur:-1
      })
    },
    cancel(){
      this.setData({
        SearchCur:-1,
      })
    }
  }
})
