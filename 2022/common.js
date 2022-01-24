function resize(win, doc) {
    // function setFontSize() {
    //   // 获取window 宽度
    //   // zepto实现 $(window).width()就是这么干的
    //   var winWidth1 = window.innerWidth;
    //   var winWidth2 = document.documentElement.clientWidth;
    //   var winWidth = winWidth1 > winWidth2 ? winWidth1 : winWidth2;
    //   // winWidth = 750;
    //   // document.body.innerHTML += ("["+winWidth1+"=="+winWidth2+"]");
    //   if (winWidth >= 750) {
    //     winWidth = 750;
    //   }
    //   console.log(doc.documentElement.style.fontSize,"=======",(winWidth / 750) * 100 + "px")
    //   doc.documentElement.style.fontSize = (winWidth / 750) * 100 + "px";
    // }

    function setFontSize(){
        console.log(111,document.body.clientWidth)
        var html = document.getElementsByTagName("html")
        html[0].style.fontSize = `${document.body.clientWidth / 375 * 50}px`
    }

    var evt = "onorientationchange-" in win ? "orientationchange" : "resize";

    var timer = null;

    win.addEventListener(
        evt,
        function() {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 0);
        },
        false
    );

    /* win.addEventListener(
      "pageshow",
      function(e) {
        if (e.persisted) {
          clearTimeout(timer);

          timer = setTimeout(setFontSize, 0);
        }
      },
      false
    ); */

    window.setFontSize = setFontSize;

    //初始化
    setFontSize();

    document.documentElement.setAttribute("data-dpr", "1");

    var userAgentInfo = navigator.userAgent;
    var Agents = [
        "Android",
        "iPhone",
        "SymbianOS",
        "Windows Phone",
        "iPad",
        "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }

    document.documentElement.style.margin = "0 auto";
    if (flag) {
        // true为pc
        document.documentElement.style.maxWidth = "750px";
    } else {
        // 手机
        document.documentElement.style.maxWidth = "100%";
    }
};

function clear(){
    console.log("clear")
    clearInterval(timer)
}

var timer = setInterval(function(){
    if(window && document){
        console.log("resize")
        resize(window, document)
        clear()
    }else{

    }
},1000)
