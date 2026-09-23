(function(){var d=document;
var b=d.querySelector('.mbtn'),n=d.getElementById('nav');if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
var dds=[].slice.call(d.querySelectorAll('.dd'));dds.forEach(function(x){x.addEventListener('toggle',function(){if(x.open&&innerWidth>900)dds.forEach(function(y){if(y!==x)y.open=false})})});
d.addEventListener('click',function(e){if(innerWidth>900&&!e.target.closest('.dd'))dds.forEach(function(y){y.open=false})});
d.addEventListener('keydown',function(e){if(e.key==='Escape')dds.forEach(function(y){y.open=false})});
function fmt(v){var t=v.toUpperCase().replace(/[^A-Z0-9]/g,''),a='',m='';for(var i=0;i<t.length;i++){var c=t[i];if(a.length<2&&/[A-Z]/.test(c)&&!m)a+=c;else if(/[0-9]/.test(c)&&m.length<5)m+=c}return(a+(m?' '+m.slice(0,2)+(m.length>2?' '+m.slice(2):''):'')).trim()}
[].forEach.call(d.querySelectorAll('[data-cta]'),function(f){var i=f.querySelector('input[name=nummerplade]'),p=f.querySelector('.plate');
i.addEventListener('input',function(){i.value=fmt(i.value);p.classList.remove('err')});
f.addEventListener('submit',function(e){var v=i.value.replace(/\s/g,'');if(v&&!/^[A-Z]{2}\d{5}$/.test(v)){e.preventDefault();p.classList.add('err');i.focus();return}if(window.gtag)gtag('event','cta_submit',{placement:(f.querySelector('[name=utm_content]')||{}).value})})});

var ci=d.getElementById('cx'),co=d.getElementById('cout');
if(ci&&co){var f=function(n){return n.toLocaleString('da-DK',{maximumFractionDigits:0})+' kr.'};
var calc=function(){var tot=Math.max(0,parseFloat(ci.value||0));var pre=tot/1.429,afg=tot-pre,pct=tot?Math.round(afg/tot*100):0;
co.innerHTML='<div class="bar"><i style="width:'+pct+'%"></i></div><div class="row"><span>Afgift til staten (42,9 %)</span><b>'+f(afg)+'</b></div><div class="row"><span>Selskabets præmie</span><b>'+f(pre)+'</b></div><div class="row"><span>Du betaler i alt</span><span>'+f(tot)+'</span></div>'};
ci.addEventListener('input',calc);calc()}

var mb=d.getElementById('mbar');
if(mb&&innerWidth<=1080){var forms=[].slice.call(d.querySelectorAll('form[data-cta]')),ft=d.querySelector('footer'),vis=0,fv=false,T;
function upd(){var show=!vis&&!fv&&scrollY>500;if(show){mb.hidden=false;d.body.classList.add('hasbar')}else{mb.hidden=true;d.body.classList.remove('hasbar')}}
if('IntersectionObserver'in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){e.target.__v=e.isIntersecting});vis=forms.some(function(f){return f.__v});upd()},{threshold:0});
forms.forEach(function(f){io.observe(f)});
if(ft)new IntersectionObserver(function(e){fv=e[0].isIntersecting;upd()},{threshold:0}).observe(ft)}
addEventListener('scroll',function(){T||(T=requestAnimationFrame(function(){T=0;upd()}))},{passive:true});upd()}
var K='bf-consent',GA='G-LJNJX55H0P';
function load(){if(window.gtag)return;var s=d.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id='+GA;d.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',GA,{anonymize_ip:true})}
var v=null;try{v=localStorage.getItem(K)}catch(e){}
if(v==='y'){load();return}if(v==='n')return;
var c=d.createElement('div');c.className='cc';c.setAttribute('role','dialog');c.setAttribute('aria-label','Cookies');
c.innerHTML='<p>Må vi bruge Google Analytics til at se, hvilke sider der bliver læst? Siden virker på samme måde, uanset hvad du vælger. <a href="/cookiepolitik-eu/">Cookiepolitik</a></p><div><button class="y" type="button">Ja, tillad statistik</button><button type="button">Nej tak</button></div>';
d.body.appendChild(c);var bs=c.querySelectorAll('button');function set(x){try{localStorage.setItem(K,x)}catch(e){}c.remove();if(x==='y')load()}
bs[0].onclick=function(){set('y')};bs[1].onclick=function(){set('n')}})();
