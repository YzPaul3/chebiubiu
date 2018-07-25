// pages/list/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {
    },
    map: {
      '1': '男',
      '0': '女'
    }
  },
  getOrderDetail: function(orderId) {
    var self = this;
    var loginCode = wx.getStorageSync('loginCode');
    wx.request({
      url: 'https://www.dafanshu.top/order/all/getorderdetail',
      data: {
        loginCode: loginCode,
        orderId: orderId
      },
      success: function (res) {
        if (+res.data.status === 1) {
          self.setData({
            detail: res.data.results
          });
          return;
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 2000
          })
          return;
        }
      }
    })
  },
  makePhoneCall: function(e) {
    var phoneNum = e.currentTarget.dataset.name
    if (phoneNum) {
      wx.makePhoneCall({
        phoneNumber: phoneNum
      })
    }
    return;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getOrderDetail(options.orderId)
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