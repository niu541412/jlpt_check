checkQuota = setInterval(function() {
  getKDInfo();
  jpList = document.getElementsByTagName("strong");
  jpNj = jpList[29];
  quota = jpNj.parentElement.parentElement.nextElementSibling.textContent;
  if (quota == "有名额") {
    console.log("赶快报名啊");
    var nty = new Notification("赶快报名啊!!!", {
      body: "🇯🇵:日语N4东南大学 ",
      icon: "https://jlpt.etest.net.cn/images/1.JLPT.gif",
      //vibrate: [100]
    });
    clearInterval(checkQuota);
    bookseat('chooseaddrForm',51,'东南大学外国语学院');
  }
}, 5000);
