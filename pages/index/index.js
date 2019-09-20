Page({
  data:{
    disabled:false,
    sourceValue:'123',
    changeValue:'',
  },
  bindTextAreaBlur:function(e){
    this.setData({
      sourceValue:e.detail.value,
      disabled:!!this.data.sourceValue
    })  
  },
  startChange(e){
    this.setData({
      changeValue:`襄遇二阳老襄阳手工锅巴麻辣特产小吃网红包装好吃休闲食品小零食 【包邮】
      【在售价】8.80元
      【券后价】5.80元
      【下单链接】https://m.tb.cn/h.eNUSkZV 
      ----------------- 
      复制这条信息，$gCFgYNnLlOM$，到【手机淘宝】即可查看`
    })
    wx.setClipboardData({
      data: this.data.changeValue,
      success (res) {
       
      }
    })
  }
})
