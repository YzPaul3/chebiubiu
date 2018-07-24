// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoList: [{
      start: '百度大厦B座（上地十街10号百度大厦）',
      end: '奎科大厦南门',
      name: '范美美',
      time: '2018-8-18  15:30'
    }, {
        start: '百度大厦B座（上地十街10号百度大厦）',
        end: '奎科大厦南门',
        name: '范美美',
        time: '2018-8-18  15:30'
      }, {
        start: '百度大厦B座（上地十街10号百度大厦）',
        end: '奎科大厦南门',
        name: '范美美',
        time: '2018-8-18  15:30'
      }, {
        start: '百度大厦B座（上地十街10号百度大厦）',
        end: '奎科大厦南门',
        name: '范美美',
        time: '2018-8-18  15:30'
      }, {
        start: '百度大厦B座（上地十街10号百度大厦）',
        end: '奎科大厦南门',
        name: '范美美',
        time: '2018-8-18  15:30'
      }, {
        start: '百度大厦B座（上地十街10号百度大厦）',
        end: '奎科大厦南门',
        name: '范美美',
        time: '2018-8-18  15:30'
      }, {
        start: '百度大厦B座（上地十街10号百度大厦）',
        end: '奎科大厦南门',
        name: '范美美',
        time: '2018-8-18  15:30'
      }, {
        start: '百度大厦B座（上地十街10号百度大厦）',
        end: '奎科大厦南门',
        name: '范美美',
        time: '2018-8-18  15:30'
      }, {
        start: '百度大厦B座（上地十街10号百度大厦）',
        end: '奎科大厦南门',
        name: '范美美',
        time: '2018-8-18  15:30'
      }, {
        start: '百度大厦B座（上地十街10号百度大厦）',
        end: '奎科大厦南门',
        name: '范美美',
        time: '2018-8-18  15:30'
      }, {
        start: '百度大厦B座（上地十街10号百度大厦）',
        end: '奎科大厦南门',
        name: '范美美',
        time: '2018-8-18  15:30'
      }]
  },
  getInfoList: function() {
    var loginCode = wx.getStorageSync('loginCode');
    var self = this;
    wx.request({
      url: 'https://www.dafanshu.top/order/all/findpassengerorders',
      data: {
        loginCode: loginCode
      },
      success: function (res) {
        if (+res.data.status === 1) {
          self.setData({
            infoList: res.data.results
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
  seeOrderDetail: function(e) {
    var orderId = e.currentTarget.dataset.name.orderId
    wx.navigateTo({
      url: './orderDetail/orderDetail?orderId=' + orderId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInfoList()
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