!function(t){function a(a){a.addClass("countdownHolder"),t.each(["Days","Hours","Minutes","Seconds"],function(n){t('<span class="count'+this+'">').html('<span class="position">					<span class="digit static">0</span>				</span>				<span class="position">					<span class="digit static">0</span>				</span>').appendTo(a),"Seconds"!=this&&a.append('<span class="countDiv countDiv'+n+'"></span>')})}function n(a,n){var s=a.find(".digit");if(s.is(":animated"))return!1;if(a.data("digit")==n)return!1;a.data("digit",n);var i=t("<span>",{"class":"digit",css:{top:"-2.1em",opacity:0},html:n});s.before(i).removeClass("static").animate({top:"2.5em",opacity:0},"fast",function(){s.remove()}),i.delay(100).animate({top:0,opacity:1},"fast",function(){i.addClass("static")})}var s=86400,i=3600,o=60;t.fn.countdown=function(c){function e(t,a,s){n(r.eq(t),Math.floor(s/10)%10),n(r.eq(a),s%10)}var p,d,f,l,u,r,m=t.extend({callback:function(){},timestamp:0},c);return a(this,m),r=this.find(".position"),function h(){p=Math.floor((m.timestamp-new Date)/1e3),0>p&&(p=0),d=Math.floor(p/s),e(0,1,d),p-=d*s,f=Math.floor(p/i),e(2,3,f),p-=f*i,l=Math.floor(p/o),e(4,5,l),p-=l*o,u=p,e(6,7,u),m.callback(d,f,l,u),setTimeout(h,1e3)}(),this}}(jQuery);