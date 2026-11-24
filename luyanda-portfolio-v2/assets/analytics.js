/* Privacy-friendly analytics (GoatCounter: no cookies, no cross-site tracking).
  Once set, it only loads AFTER the visitor accepts the cookie banner. */
(function(){
 var GC_CODE="luyandankosi";   // e.g. "luyandankosi" -> https://luyandankosi.goatcounter.com
  var loaded=false;
  function load(){
    if(!GC_CODE||loaded)return;loaded=true;
    var s=document.createElement("script");s.async=true;
    s.src="https://gc.zgo.at/count.js";
    s.setAttribute("data-goatcounter","https://"+GC_CODE+".goatcounter.com/count");
    document.head.appendChild(s);
  }
  function event(name){
    if(window.goatcounter&&typeof window.goatcounter.count==="function"){
      window.goatcounter.count({path:"event/"+name,title:name,event:true});
    }
  }
  /* Track clicks on anything marked data-track="name" (the main call to action, CV, email) */
  document.addEventListener("click",function(e){var el=e.target.closest("[data-track]");if(el)event(el.getAttribute("data-track"))});
  document.addEventListener("ln:form-sent",function(){event("contact-form-sent")});
  /* Smooth-focus the first field when the contact button is used */
  document.addEventListener("click",function(e){var a=e.target.closest("[data-focus]");if(!a)return;var f=document.getElementById(a.getAttribute("data-focus"));if(f)setTimeout(function(){f.focus({preventScroll:true})},500)});
  if(window.lnConsent)window.lnConsent.onAccept(load);
})();
