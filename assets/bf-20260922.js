(function(){var d=document;
var b=d.querySelector('.mbtn'),n=d.getElementById('nav');if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
var dds=[].slice.call(d.querySelectorAll('.dd'));dds.forEach(function(x){x.addEventListener('toggle',function(){if(x.open&&innerWidth>900)dds.forEach(function(y){if(y!==x)y.open=false})})});
d.addEventListener('click',function(e){if(innerWidth>900&&!e.target.closest('.dd'))dds.forEach(function(y){y.open=false})});
d.addEventListener('keydown',function(e){if(e.key==='Escape')dds.forEach(function(y){y.open=false})});
function fmt(v){var t=v.toUpperCase().replace(/[^A-Z0-9]/g,''),a='',m='';for(var i=0;i<t.length;i++){var c=t[i];if(a.length<2&&/[A-Z]/.test(c)&&!m)a+=c;else if(/[0-9]/.test(c)&&m.length<5)m+=c}return(a+(m?' '+m.slice(0,2)+(m.length>2?' '+m.slice(2):''):'')).trim()}
[].forEach.call(d.querySelectorAll('[data-cta]'),function(f){var i=f.querySelector('input[name=nummerplade]'),p=f.querySelector('.plate');
i.addEventListener('input',function(){i.value=fmt(i.value);p.classList.remove('err')});
f.addEventListener('submit',function(e){var v=i.value.replace(/\s/g,'');if(v&&!/^[A-Z]{2}\d{5}$/.test(v)){e.preventDefault();p.classList.add('err');i.focus();return}if(window.gtag)gtag('event','cta_submit',{placement:(f.querySelector('[name=utm_content]')||{}).value})})});
var K='bf-consent',GA='G-LJNJX55H0P';
function load(){if(window.gtag)return;var s=d.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id='+GA;d.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',GA,{anonymize_ip:true})}
var v=null;try{v=localStorage.getItem(K)}catch(e){}
if(v==='y'){load();return}if(v==='n')return;
var c=d.createElement('div');c.className='cc';c.setAttribute('role','dialog');c.setAttribute('aria-label','Cookies');
c.innerHTML='<p>Må vi bruge Google Analytics til at se, hvilke sider der bliver læst? Siden virker på samme måde, uanset hvad du vælger. <a href="/cookiepolitik-eu/">Cookiepolitik</a></p><div><button class="y" type="button">Ja, tillad statistik</button><button type="button">Nej tak</button></div>';
d.body.appendChild(c);var bs=c.querySelectorAll('button');function set(x){try{localStorage.setItem(K,x)}catch(e){}c.remove();if(x==='y')load()}
bs[0].onclick=function(){set('y')};bs[1].onclick=function(){set('n')}})();
