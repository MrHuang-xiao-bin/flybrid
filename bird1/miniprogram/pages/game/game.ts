// pages/game/game.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winH: wx.getWindowInfo().windowHeight,
    moveId: 0,
    birddownId: 0,
    birdstep: 0,
    grades: 0,
    birdleft: 40,
    birdtop: wx.getWindowInfo().windowHeight / 2,
    upzhuH: [(Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight, (Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight - 150, (Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight - 150, (Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight - 150, (Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight - 150, (Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight - 150],
    downzhuH: [0, 0, 0, 0, 0, 0],
    zhuleft: [140, 280, 420, 560, 700, 840]
  },
  birddown() {
    this.setData({
      birdstep: this.data.birdstep + 5,
      birdtop: this.data.birdtop + this.data.birdstep,
    })
  },
  birdfly() {
    this.setData({
      birdstep: 0,
      birdtop: this.data.birdtop - 20,

    })
  },
  move() {
    this.setData({
      zhuleft: [this.data.zhuleft[0] - 2, this.data.zhuleft[1] - 2, this.data.zhuleft[2] - 2, this.data.zhuleft[3] - 2, this.data.zhuleft[4] - 2, this.data.zhuleft[5] - 2],
      downzhuH: [wx.getWindowInfo().windowHeight - 100 - this.data.upzhuH[0], wx.getWindowInfo().windowHeight - 100 - this.data.upzhuH[1], wx.getWindowInfo().windowHeight - 100 - this.data.upzhuH[2], wx.getWindowInfo().windowHeight - 100 - this.data.upzhuH[3], wx.getWindowInfo().windowHeight - 100 - this.data.upzhuH[4], wx.getWindowInfo().windowHeight - 100 - this.data.upzhuH[5]]
    })
    for (var i = 0; i < 6; i++) {
      //柱子到0后移到最右边
      if (this.data.zhuleft[i] < 0) {
        this.data.zhuleft[i] = 840;
        //无法正确渲染到组件元素上，必须再使用this。setdata支持
        // this.data.upzhuH[i] = (Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight;

        switch (i) {
          case 0:
            this.setData({
              'upzhuH[0]': (Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight
            }); break;
          case 1:
            this.setData({
              'upzhuH[1]': (Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight
            }); break;
          case 2:
            this.setData({
              'upzhuH[2]': (Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight
            }); break;
          case 3:
            this.setData({
              'upzhuH[3]': (Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight
            }); break;
          case 4:
            this.setData({
              'upzhuH[4]': (Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight
            }); break;
          case 5:
            this.setData({
              'upzhuH[5]': (Math.random() * 0.4 + 0.3) * wx.getWindowInfo().windowHeight
            }); break;

        }
        // console.log(this.data.upzhuH[i],this.data.downzhuH[i],i)
      }
      //计算得分  
      if (this.data.zhuleft[i] + 20 <= this.data.birdleft && this.data.zhuleft[i] >= this.data.birdleft - 20) {
        this.setData({
          grades: this.data.grades + 1,
        })
        //console.log( this.data.grades)
      }
      if ((this.data.zhuleft[i] <= 60 && this.data.zhuleft[i] + 20 >= 40 && this.data.upzhuH[i] >= this.data.birdtop) || (this.data.zhuleft[i] <= 60 && this.data.zhuleft[i] + 20 >= 40 && this.data.upzhuH[i] + 100 <= this.data.birdtop + 20) || this.data.birdtop < 0 || this.data.birdtop + 20 > wx.getWindowInfo().windowHeight) {
        clearInterval(this.data.birddownId)
        clearInterval(this.data.moveId)
        wx.navigateTo({
          url: '../end/end'
        })
      }

    }

    //console.log(this.data.zhuleft)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
      moveId: setInterval(this.move, 100),
      birddownId: setInterval(this.birddown, 200),
      downzhuH: [wx.getWindowInfo().windowHeight - 100 - this.data.upzhuH[0], wx.getWindowInfo().windowHeight - 100 - this.data.upzhuH[1], wx.getWindowInfo().windowHeight - 100 - this.data.upzhuH[2], wx.getWindowInfo().windowHeight - 100 - this.data.upzhuH[3], wx.getWindowInfo().windowHeight - 100 - this.data.upzhuH[4], wx.getWindowInfo().windowHeight - 100 - this.data.upzhuH[5]]
    })

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
    clearInterval(this.data.birddownId)
    clearInterval(this.data.moveId)
    module.exports.data = this.data;
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