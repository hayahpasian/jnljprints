!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define("scrolltoanchor",e):(t=t||self).scrolltoanchor=e()}(this,function(){"use strict";return function(t){var e=this;void 0===t&&(t={});var n=t.offset;void 0===n&&(n=0);var o=t.duration;void 0===o&&(o=800),this.offset=n,this.duration=o;var r=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},i=Array.prototype.slice.call(document.getElementsByTagName("a")).filter(function(t){return function(t){return-1!=(t.href&&t.href.indexOf("#"))}(t)}).filter(function(t){return function(t){return t.pathname==window.location.pathname||"/"+t.pathname==window.location.pathname&&t.search==location.search}(t)});document.addEventListener("click",function(t){var u=i.filter(function(e){return t.target===e})[0];u&&(t.preventDefault(),function(t){var i=t.getAttribute("href"),u=document.querySelector(i),c=u.getAttribute("data-anchor-offset");n=c||e.offset;var a=function(t){return Math.floor(t.getBoundingClientRect().top)}(u),f=window.pageYOffset||document.documentElement.scrollTop,l=f,d=f+a-n,s=!1,m=null,h=function(t){if(s)return document.documentElement.scrollTop=d,u.focus(),void window.history.pushState("","",i);(l==d||t-m>=o)&&(s=!0);var e=r((t-m)/o),n=l+(d-l)*e;document.documentElement.scrollTop=n,requestAnimationFrame(h)};requestAnimationFrame(function(t){m=t,h(t)})}(u))})}});