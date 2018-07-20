// pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    countArray: [1,2,3,4,5],
    start: '',
    end: '',
    date: '2017-09-01',
    time: '12:01',
    gender: 'male',
    sexRadio: [
      { name: '男', value: 'male', checked: 'true' },
      { name: '女', value: 'female' }
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