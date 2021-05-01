(function () {
  'use strict';

  function ScrollToAnchor(t){var e=this;void 0===t&&(t={});var n=t.offset;void 0===n&&(n=0);var o=t.duration;void 0===o&&(o=800),this.offset=n,this.duration=o;var r=function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},i=Array.prototype.slice.call(document.getElementsByTagName("a")).filter(function(t){return function(t){return -1!=(t.href&&t.href.indexOf("#"))}(t)}),a=i.filter(function(t){return function(t){return t.pathname==window.location.pathname||"/"+t.pathname==window.location.pathname&&t.search==location.search}(t)});document.addEventListener("click",function(t){var i=a.filter(function(e){return t.target===e})[0];i&&(t.preventDefault(),function(t){var i=t.getAttribute("href"),a=document.querySelector(i),u=a.getAttribute("data-anchor-offset");n=u||e.offset;var c=function(t){return Math.floor(t.getBoundingClientRect().top)}(a),f=window.pageYOffset||document.documentElement.scrollTop,l=f,d=f+c-n,m=!1,s=null,h=function(t){if(m){ return document.documentElement.scrollTop=d,a.focus(),void window.history.pushState("","",i); }(l==d||t-s>=o)&&(m=!0);var e=r((t-s)/o),n=l+(d-l)*e;document.documentElement.scrollTop=n,requestAnimationFrame(h);};requestAnimationFrame(function(t){s=t,h(t);});}(i));});}

  var smoothScroll = new ScrollToAnchor({
    offset: 70,
    duration: 1000,
  });


  console.log('Index.js file 😎');

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXMiOlsiZGlzdC9zY3JvbGx0b2FuY2hvci5lc20uanMiLCJkb2NzL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIFNjcm9sbFRvQW5jaG9yKHQpe3ZhciBlPXRoaXM7dm9pZCAwPT09dCYmKHQ9e30pO3ZhciBuPXQub2Zmc2V0O3ZvaWQgMD09PW4mJihuPTApO3ZhciBvPXQuZHVyYXRpb247dm9pZCAwPT09byYmKG89ODAwKSx0aGlzLm9mZnNldD1uLHRoaXMuZHVyYXRpb249bzt2YXIgcj1mdW5jdGlvbih0KXtyZXR1cm4gdDwuNT84KnQqdCp0KnQ6MS04Ki0tdCp0KnQqdH0saT1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImFcIikpLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuLTEhPSh0LmhyZWYmJnQuaHJlZi5pbmRleE9mKFwiI1wiKSl9KHQpfSksYT1pLmZpbHRlcihmdW5jdGlvbih0KXtyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIHQucGF0aG5hbWU9PXdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZXx8XCIvXCIrdC5wYXRobmFtZT09d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lJiZ0LnNlYXJjaD09bG9jYXRpb24uc2VhcmNofSh0KX0pO2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKHQpe3ZhciBpPWEuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiB0LnRhcmdldD09PWV9KVswXTtpJiYodC5wcmV2ZW50RGVmYXVsdCgpLGZ1bmN0aW9uKHQpe3ZhciBpPXQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxhPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaSksdT1hLmdldEF0dHJpYnV0ZShcImRhdGEtYW5jaG9yLW9mZnNldFwiKTtuPXV8fGUub2Zmc2V0O3ZhciBjPWZ1bmN0aW9uKHQpe3JldHVybiBNYXRoLmZsb29yKHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKX0oYSksZj13aW5kb3cucGFnZVlPZmZzZXR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AsbD1mLGQ9ZitjLW4sbT0hMSxzPW51bGwsaD1mdW5jdGlvbih0KXtpZihtKXJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wPWQsYS5mb2N1cygpLHZvaWQgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFwiXCIsXCJcIixpKTsobD09ZHx8dC1zPj1vKSYmKG09ITApO3ZhciBlPXIoKHQtcykvbyksbj1sKyhkLWwpKmU7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcD1uLHJlcXVlc3RBbmltYXRpb25GcmFtZShoKX07cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKHQpe3M9dCxoKHQpfSl9KGkpKX0pfWV4cG9ydCBkZWZhdWx0IFNjcm9sbFRvQW5jaG9yOyIsImltcG9ydCBTY3JvbGxUb0FuY2hvciBmcm9tICcuLi8uLi9kaXN0L3Njcm9sbHRvYW5jaG9yLmVzbS5qcyc7XG5cbmNvbnN0IHNtb290aFNjcm9sbCA9IG5ldyBTY3JvbGxUb0FuY2hvcih7XG4gIG9mZnNldDogNzAsXG4gIGR1cmF0aW9uOiAxMDAwLFxufSk7XG5cblxuY29uc29sZS5sb2coJ0luZGV4LmpzIGZpbGUg8J+YjicpOyJdLCJuYW1lcyI6WyJjb25zdCJdLCJtYXBwaW5ncyI6Ijs7O0VBQUEsU0FBUyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBQyxPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDOztFQ0U1cUNBLElBQU0sWUFBWSxHQUFHLElBQUksY0FBYyxDQUFDO0lBQ3RDLE1BQU0sRUFBRSxFQUFFO0lBQ1YsUUFBUSxFQUFFLElBQUk7R0FDZixDQUFDLENBQUM7OztFQUdILE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7Ozs7In0=