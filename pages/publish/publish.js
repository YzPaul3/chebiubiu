// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    countArray: [1,2,3,4,5],
    startpoint: '',
    endpoint: '',
    date: '2017-09-01',
    time: '12:01',
    gender: 1,
    sexRadio: [
      { name: '男', value: 1, checked: 'true' },
      { name: '女', value: 0 }
    ]
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindCountChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  radioChange: function(e) {
    this.setData({
      gender: e.detail.value
    })
  },
  formSubmit: function(e) {
    var {startpoint, endpoint, phone, remark, username} = e.detail.value;
    if (! (startpoint && endpoint && phone && username)) {
      wx.showToast({
        title: '有必填项未填写',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    var params = {
      loginCode: wx.getStorageSync('loginCode'),
      gender: this.data.gender,
      needseats: this.data.countArray[this.data.index],
      startpoint: startpoint,
      endpoint: endpoint,
      username: username,
      phone: phone,
      remark: remark,
      departure: this.formatDateTime()
    }
    this.publishReq(params)
  },
  formatDateTime() {
    let res = this.data.date + ' ' + this.data.time;
    return res;
  },
  publishReq(params) {
    var self = this;
    wx.request({
      url: 'https://www.dafanshu.top/order/passenger/createorder',
      data: params,
      method: 'POST',
      success: function (res) {
        if (+res.data.status === 1) {
          wx.redirectTo({
            url: './publishResult/publishResult'
          })
          return;
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
          return;
        }
        self.setData({
          msg: res.data.msg
        })
      }
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