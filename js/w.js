/*! W 1.2.3 (https://github.com/pyrsmk/W) */
!function(a,b,c){"undefined"!=typeof module&&module.exports?module.exports=c:"function"==typeof define&&define.amd?define(c):a[b]=c}(this,"W",function(){function a(){var a,b,c,d,e=[{width:screen.availWidth,height:screen.availHeight},{width:window.outerWidth,height:window.outerHeight},{width:window.innerWidth,height:window.innerHeight}];if(/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&"landscape"==m()?(a=screen.height,b=screen.width,e[2].width=a):(a=screen.width,b=screen.height),k)return{width:a,height:b};for(c=0,d=e.length;d>c;++c)e[c].note=e[c].width>a||e[c].height>b||!e[c].width||!e[c].height?0:a-e[c].width+(b-e[c].height);return e.sort(function(a,b){return b.note-a.note}),{width:e[0].width,height:e[0].height}}var b,c,d,e,f=window,g=document,h=g.documentElement,i=[],j=!1,k=!1,l=function(){b=g.createElement("div"),b.style.width="1em",h.appendChild(b),e=b.offsetWidth,e=e?e:16,h.removeChild(b)},m=function(){return"orientation"in window?window.orientation?"landscape":"portrait":h.clientWidth>h.clientHeight?"landscape":"portrait"};return l(),f.addEventListener?"onorientationchange"in f?f.addEventListener("orientationchange",function(){j=!0},!1):f.addEventListener("resize",function(){j=!0},!1):f.attachEvent("onresize",function(){j=!0}),c=g.createElement("b"),c.style.position="absolute",c.style.top="-99em",c.innerHTML="W",h.appendChild(c),d=c.offsetHeight,setInterval(function(){if(b=c.offsetHeight,b!=d&&(j=!0),d=b,j&&h.clientWidth){l();for(var a=0,e=i.length;e>a;++a)i[a]();j=!1}},250),{px2em:function(a){return a/e},getViewportWidth:function(){return a().width},getViewportHeight:function(){return a().height},addListener:function(a){return i.push(a),a},setAbsoluteMode:function(a){k=!!a},getOrientation:function(){return m()}}}());