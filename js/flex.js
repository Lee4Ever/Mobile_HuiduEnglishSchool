// designed for ip4 (designwidth:640px) fullWidth:16rem
//var clientWid = $(window).width()*0.390625+'%';
// designed for ip6 (designwidth:750px) fullWidth:18.75rem
/*var clientWid = $(window).width()*0.333334+'%';*/
var clientWid = $(window).width()*0.390625+'%';
$('html').css('font-size',clientWid);

var dpr = window.devicePixelRatio;
console.log('device info:'+$(window).width()+'x'+$(window).height()+'---'+dpr);