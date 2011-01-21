(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);

function fadeitin()  {$(this).find('ul').fadeIn(300);}
function fadeitout() {$(this).find('ul').fadeOut(500);};

$(document).ready(function() {
    $("#menu li").hoverIntent({
				sensitivity: 1, 
				interval: 100, 
				over: fadeitin, 
				timeout: 100, 
				out: fadeitout
			});


    //IMAGE LOADER PREVIEWR --- DELETE IT WHEN WILL BE PHP
    var rand_no = Math.floor(4*Math.random()) + 1;
    var imag = "url(img/v"+rand_no+".jpg) no-repeat 0px 68px #000000";

    if(document.getElementById("header")) document.getElementById("header").style.background = imag;
    //IMAGE LOADER PREVIEWR --- DELETE IT WHEN WILL BE PHP


  function slideLoginarea() {
    if ($("div#loginarea").is(":hidden")) {
      $("#loginarea").slideDown("slow");
    } else {
      $("#loginarea").slideUp("slow");
    }
  };
  
   $('a.login').bind('click',  slideLoginarea);
   
});
