//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    msg: '',
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  navToPublish: function() {
    wx.navigateTo({
      url: '../publish/publish'
    })
  },
  navToList: function () {
    wx.navigateTo({
      url: '../list/list'
    })
  },
  navToMain: function() {
    wx.navigateTo({
      url: '../main/main'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      wx.setStorageSync('avatarUrl', app.globalData.userInfo.avatarUrl)
      this.appLogin()
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        wx.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
        this.appLogin()
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          wx.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
          this.appLogin()
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  bindGetUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    wx.setStorageSync('avatarUrl', app.globalData.userInfo.avatarUrl)
    this.appLogin()
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  appLogin: function () {
    var code = wx.getStorageSync('code');
    var avatarUrl = wx.getStorageSync('avatarUrl');
    this.setData({
      code: code
    })
    if (code) {
      var self = this;
      wx.request({
        url: 'https://www.dafanshu.top/user/login',
        data: {
          code: code,
          avatarurl: avatarUrl
        },
        success: function (res) {
          if(+res.data.status === 1) {
            console.log(res.data.results);
            wx.setStorageSync('loginCode', res.data.results);
          }
          self.setData({
            msg: res.data.msg
          })
        }
      })
    }
  }
})
