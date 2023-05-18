// pages/end/end.ts
var game = require('../game/game')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grades:0,
    tipcontent_left:0,
    tipcontent_width:200
  },
  again(){
wx.navigateTo({
  url:"../index/index"
})
  },
tiploop(){
 // console.log(this.data.tipcontent_left)
this.setData({
  tipcontent_left:this.data.tipcontent_left-1
})
if(Math.abs(this.data.tipcontent_left)>=this.data.tipcontent_width ){

  this.setData({
    tipcontent_left:0
  })
}
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    setInterval(this.tiploop,50)
    this.setData({
      grades: game.data.grades
    })
    //console.log(game.data.grades)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})