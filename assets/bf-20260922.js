(function(){var K='bf-consent',GA='G-LJNJX55H0P';
function load(){if(window.gtag)return;var s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id='+GA;document.head.appendChild(s);window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config',GA,{anonymize_ip:true})}
var v=null;try{v=localStorage.getItem(K)}catch(e){}
if(v==='y'){load();return}if(v==='n')return;
var b=document.createElement('div');b.className='cc';b.setAttribute('role','dialog');b.setAttribute('aria-label','Cookies');
b.innerHTML='<p>Må vi bruge Google Analytics til at se, hvilke sider der bliver læst? Siden virker på samme måde, uanset hvad du vælger. <a href="/cookiepolitik-eu/">Cookiepolitik</a></p><div><button class="y" type="button">Ja, tillad statistik</button><button type="button">Nej tak</button></div>';
document.body.appendChild(b);var bs=b.querySelectorAll('button');
function set(x){try{localStorage.setItem(K,x)}catch(e){}b.remove();if(x==='y')load()}
bs[0].onclick=function(){set('y')};bs[1].onclick=function(){set('n')}})();
