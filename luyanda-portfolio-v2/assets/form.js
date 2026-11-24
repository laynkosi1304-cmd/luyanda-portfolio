/* Contact form: client-side validation + Netlify Forms submission (no API keys or secrets in the browser) */
(function(){
  var form=document.getElementById("contactForm");if(!form)return;
  var status=document.getElementById("formStatus"),btn=form.querySelector("button[type=submit]");
  var rules={
    name:function(v){v=v.trim();if(!v)return"Please enter your name.";if(v.length<2)return"Your name needs at least 2 characters.";if(v.length>80)return"Please keep your name under 80 characters.";return""},
    email:function(v){v=v.trim();if(!v)return"Please enter your email address.";if(!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)||v.length>254)return"That doesn\u2019t look like a valid email address.";return""},
    message:function(v){v=v.trim();if(!v)return"Please write a message.";if(v.length<10)return"Please write at least 10 characters.";if(v.length>1500)return"Please keep your message under 1500 characters.";return""},
    consent:function(v,el){return el.checked?"":"Please tick the box so I can reply to you."}
  };
  function check(el){
    var f=rules[el.name];if(!f)return true;var msg=f(el.value,el),wrap=el.closest(".field"),err=wrap.querySelector(".field-error");
    wrap.classList.toggle("invalid",!!msg);err.textContent=msg;el.setAttribute("aria-invalid",msg?"true":"false");return!msg;
  }
  var loadedAt=Date.now(),LAST="ln_form_last",COOLDOWN=60000;
  var fields=[].slice.call(form.querySelectorAll("input[name=name],input[name=email],textarea,input[name=consent]"));
  fields.forEach(function(el){el.addEventListener("blur",function(){check(el)});el.addEventListener("input",function(){if(el.closest(".field").classList.contains("invalid"))check(el)})});
  var count=document.getElementById("msgCount"),ta=form.querySelector("textarea");
  if(count&&ta)ta.addEventListener("input",function(){count.textContent=ta.value.length+" / 1500"});
  function say(kind,html){status.className="form-status "+kind;status.innerHTML=html}
  form.addEventListener("submit",function(e){
    e.preventDefault();status.className="form-status";status.textContent="";
    var bad=fields.filter(function(el){return!check(el)});
    if(bad.length){bad[0].focus();return}
    var msg=form.elements.message.value;
    var links=(msg.match(/https?:\/\/|www\./gi)||[]).length;
    if(links>2){say("err","Please remove some links from your message (maximum 2).");form.elements.message.focus();return}
    var last=0;try{last=+localStorage.getItem(LAST)||0}catch(x){}
    if(Date.now()-last<COOLDOWN){say("err","Thanks, your last message just went through. Please wait a minute before sending another.");return}
    var elapsed=Math.round((Date.now()-loadedAt)/1000);form.elements.elapsed.value=elapsed;
    if(form.elements["bot-field"].value||elapsed<4){say("ok","Thanks! Your message has been sent.");form.reset();return}
    btn.disabled=true;var old=btn.firstChild.textContent;btn.firstChild.textContent="Sending ";
    fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(new FormData(form)).toString()})
      .then(function(r){if(!r.ok)throw new Error(r.status);try{localStorage.setItem(LAST,String(Date.now()))}catch(x){}document.dispatchEvent(new Event("ln:form-sent"));say("ok","Thanks! Your message has been sent. I\u2019ll reply as soon as I can.");form.reset();if(count)count.textContent="0 / 1500"})
      .catch(function(){say("err","Something went wrong sending that. Please email me directly at <a href=\"mailto:Laynkosi1304@gmail.com\">Laynkosi1304@gmail.com</a>.")})
      .finally(function(){btn.disabled=false;btn.firstChild.textContent=old});
  });
})();
