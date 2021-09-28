// components/DateTimePicker.js
const leftPad0 = function(v, n) {
  if (!v) {
    v = "";
  }
  let prefix = "";
  for (let i = 0; i < n; i++) {
    prefix += "0";
  }
  return (prefix + v).substr(-n);
};
const stringToDate = function(str) {
  str = str.replace(/-/g, "/");
  return new Date(str);
};
const isLeapYear = function(year) {
  if (((year % 4) == 0) && ((year % 100) != 0) || ((year % 400) == 0)) {
    return true;
  }
  return false;
};
const now = new Date();

const years = [];
// const beginYear = 1990;
const beginYear = now.getFullYear();
for (var i = beginYear; i <= now.getFullYear()+2; i++) {
  years.push(i + "年");
}
const months = [];
for (var i = 1; i < 12; i++) {
  months.push(leftPad0(i, 2) + "月");
}
const days = [];
// for (var i = now.getDate(); i < 31; i++) {
//   days.push(leftPad0(i + 1, 2) + "日");
// }
const hours = [];
for (var i = 0; i < 24; i++) {
  hours.push(leftPad0(i, 2) + "时");
}
const minutes = [];
for (var i = 1; i < 60; i++) {
  minutes.push(leftPad0(i, 2) + "分");
}


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value: String,
    dateValue: {
      type: Date
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    valueArray: [0, 0, 0, 0, 0],
    rangeValues: [
      years,
      months,
      days,
      hours,
      minutes
    ],
    pickerYear: beginYear,
    pickerMonth: 1
  },
  observers: {
    value: function(v) {
      this.setData({
        valueArray: this._dateToValueArray(stringToDate(v))
      })
    },
    dateValue: function(date) {
      this.setData({
        valueArray: this._dateToValueArray(date)
      })
    },
    valueArray: function(v) {
      this._settMonthDays(v[0] + beginYear,"0"+(v[1] + 1)+"月");
    }
  },
/**
   * 组件的方法列表
   */
  methods: {
    _dateToValueArray(date) {
      return [date.getFullYear() - beginYear, date.getMonth(), date.getDate() - 1, date.getHours(), date.getMinutes()];
    },
    _settMonthDays(year, month) {
      let monthDays = 31;
      switch (month) {
      
        case "02月":
          monthDays = 28;
          if (isLeapYear(year)) {
            monthDays = 29;
          }
          break;
        case "04月":
        case "06月":
        case "09月":
        case "11月":
          monthDays = 30;
          break;
      }
      let days = [];
      for (let i =1; i < monthDays+1; i++) {
        days.push(leftPad0(i, 2) + "日");
      }
      this.setData({
        pickerYear: year,
        pickerMonth: month,
        "rangeValues[2]": days
      });
    },
    handleCancel(e) {
      this.setData({
        valueArray: this.data.valueArray
      })
    },
    handleColumnChange(e) {
      if (e.detail.column > 1) return false;
      let year = this.data.pickerYear;
      let month = this.data.pickerMonth;
      if (e.detail.column == 0) {
        year = years[e.detail.value];
      } else if (e.detail.column == 1) {
        month =months[e.detail.value];
      }
      this._settMonthDays(year, month);
    },
    handleValueChange(e) {
      let dateArr = [];
      for (let i in e.detail.value) {
        let v = this.data.rangeValues[i][e.detail.value[i]];
        dateArr.push(v.toString().substr(0, v.length - 1))
      }
      let dateString = dateArr[0] + "/" + dateArr[1] + "/" + dateArr[2] + " " + dateArr[3] + ":" + dateArr[4] + ":00";
      this.triggerEvent('change', {
        date: stringToDate(dateString),
        dateString
      })
    }
  }
})