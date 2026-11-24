/* Cookie / storage consent. Choice is stored in localStorage ("ln_consent") for 12 months.
   Nothing non-essential runs until the visitor accepts: wrap any future analytics in
   window.lnConsent.onAccept(function(){ ...load analytics... }) */
(function(){
  var KEY="ln_consent",MAX=365*24*3600*1000,subs=[];
  function read(){try{var r=JSON.parse(localStorage.getItem(KEY));if(r&&Date.now()-r.t<MAX)return r.v}catch(e){}return null}
  function write(v){try{localStorage.setItem(KEY,JSON.stringify({v:v,t:Date.now()}))}catch(e){}}
  var api=window.lnConsent={get:read,onAccept:function(fn){if(read()==="accepted")fn();else subs.push(fn)}};
  var box;
  function build(){
    box=document.createElement("div");box.className="cookie";box.hidden=true;
    box.setAttribute("role","dialog");box.setAttribute("aria-labelledby","ckT");box.setAttribute("aria-live","polite");
    box.innerHTML='<h2 id="ckT">Cookies &amp; privacy</h2><p>I\u2019d like to use privacy-friendly analytics (no cookies, no ads, no profiles) to see which parts of this site are useful. Declining is fine and nothing else changes. Read the <a href="privacy.html">Privacy Policy</a>.</p><div class="cookie-actions"><button type="button" class="btn btn-primary" data-ck="accepted">Accept</button><button type="button" class="btn btn-outline" data-ck="declined">Decline</button></div>';
    box.addEventListener("click",function(e){var b=e.target.closest("[data-ck]");if(!b)return;write(b.dataset.ck);box.hidden=true;if(b.dataset.ck==="accepted"){subs.splice(0).forEach(function(f){f()})}});
    document.body.appendChild(box);
  }
  function show(){if(!box)build();box.hidden=false;var b=box.querySelector("button");if(b&&document.activeElement===document.body){}}
  document.addEventListener("click",function(e){if(e.target.closest("[data-cookie-settings]")){e.preventDefault();show()}});
  function init(){if(read()===null)show()}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
