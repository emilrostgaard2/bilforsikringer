/* bilforsikringer.nu — al interaktivitet. Ingen afhængigheder. */
(function () {
  'use strict';

  /* Affiliate-mål ét sted. Skal det ændres, ændres det her. */
  var AFF = 'https://www.findforsikring.dk/indhent-tilbud?bil1=on&utm_source=bilforsikringer&utm_medium=web&utm_campaign=forside';

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ── Nummerplade: formatér til AB 12 345 mens der tastes ── */
  function format(raw) {
    var v = raw.toUpperCase().replace(/[^A-Z0-9]/g, '');
    var letters = '', digits = '';
    for (var i = 0; i < v.length; i++) {
      var ch = v[i];
      if (letters.length < 2 && /[A-Z]/.test(ch)) letters += ch;
      else if (/[0-9]/.test(ch) && digits.length < 5) digits += ch;
    }
    var out = letters;
    if (digits.length) out += (out ? ' ' : '') + digits.slice(0, 2);
    if (digits.length > 2) out += ' ' + digits.slice(2);
    return out;
  }

  function plateValue(input) {
    return input ? input.value.replace(/\s/g, '').toUpperCase() : '';
  }

  $$('[data-plate]').forEach(function (input) {
    var shell = input.closest('.plate');
    input.addEventListener('input', function () {
      input.value = format(input.value);
      if (shell) shell.classList.toggle('filled', plateValue(input).length >= 7);
    });
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') { e.preventDefault(); go(plateValue(input)); }
    });
  });

  /* ── Videresend til sammenligning ── */
  function go(plate) {
    var url;
    try { url = new URL(AFF); }
    catch (e) { window.open(AFF, '_blank', 'noopener,noreferrer'); return; }
    if (plate) url.searchParams.set('nrplade', plate);
    window.open(url.toString(), '_blank', 'noopener,noreferrer');
  }

  $$('[data-go]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-go');
      go(id ? plateValue(document.getElementById(id)) : '');
    });
  });

  /* ── Navigation: burger + dropdowns på touch ── */
  /* MENU-LÅS */
  var burger = $('.burger'), nav = $('.nav'), scrollY = 0;
  function setMenu(open) {
    if (!nav) return;
    nav.classList.toggle('open', open);
    if (burger) burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = -scrollY + 'px';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
    }
  }
  if (burger && nav) {
    burger.addEventListener('click', function (e) {
      e.preventDefault();
      setMenu(!nav.classList.contains('open'));
    });
  }
  $$('.nav > .item').forEach(function (item) {
    var link = $('a', item);
    if (!$('.drop', item) || !link) return;
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        var on = item.classList.toggle('on');
        link.setAttribute('aria-expanded', on ? 'true' : 'false');
      }
    });
  });
  $$('.nav a[href]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (window.innerWidth <= 900 && nav && nav.classList.contains('open')
          && !a.parentNode.querySelector('.drop')) {
        setMenu(false);
      }
    });
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900 && nav) {
      setMenu(false);
      $$('.nav > .item.on').forEach(function (i) { i.classList.remove('on'); });
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    $$('.nav > .item.on').forEach(function (i) { i.classList.remove('on'); });
    if (nav && nav.classList.contains('open')) setMenu(false);
  });

  /* ── FAQ ── */
  $$('.q-btn').forEach(function (btn) {
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function () {
      var item = btn.closest('.q');
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  /* ── Selvrisiko-beregner ── */
  var pr = $('#sPraemie'), a = $('#sNu'), b = $('#sNy');
  function kr(n) { return n.toLocaleString('da-DK') + ' kr.'; }
  function calc() {
    var p = +pr.value, nu = +a.value, ny = +b.value;
    $('#vPraemie').textContent = kr(p);
    $('#vNu').textContent = kr(nu);
    $('#vNy').textContent = kr(ny);

    /* 2.000 → 5.000 kr. ≈ 26 % — midt i det dokumenterede spænd 20–35 % */
    var pct = Math.max(-0.40, Math.min(0.35, ((ny - nu) / 1000) * 0.085));
    var nyP = Math.round(p * (1 - pct));
    var diff = p - nyP;

    $('#rPraemie').textContent = kr(nyP);
    var save = $('#rSpar'), pctEl = $('#rPct');
    if (diff > 0) {
      save.textContent = kr(diff) + '/år';
      save.style.color = 'var(--green-deep)';
      pctEl.textContent = 'Cirka ' + Math.round(pct * 100) + ' % lavere præmie end i dag';
      pctEl.style.color = 'var(--green-deep)';
    } else if (diff < 0) {
      save.textContent = kr(Math.abs(diff)) + '/år mere';
      save.style.color = 'var(--red)';
      pctEl.textContent = 'Cirka ' + Math.round(Math.abs(pct) * 100) + ' % højere præmie end i dag';
      pctEl.style.color = 'var(--red)';
    } else {
      save.textContent = '0 kr.';
      save.style.color = 'var(--muted)';
      pctEl.textContent = 'Samme præmie som i dag';
      pctEl.style.color = 'var(--muted)';
    }
  }
  if (pr && a && b) { [pr, a, b].forEach(function (el) { el.addEventListener('input', calc); }); calc(); }

  /* ── Scroll-reveal + søjler der fyldes ── */
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      $$('.bar-fill', en.target).forEach(function (bar, i) {
        var w = bar.dataset.w;
        if (w.indexOf('%') < 0) { w += '%'; }
        setTimeout(function () { bar.style.width = w; }, 90 * i);
      });
      io.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px -5% 0px', threshold: 0 }) : null;

  $$('.rv').forEach(function (el) {
    if (io) io.observe(el);
    else {
      el.classList.add('in');
      $$('.bar-fill', el).forEach(function (bar) {
        var w = bar.dataset.w;
        bar.style.width = w.indexOf('%') < 0 ? w + '%' : w;
      });
    }
  });

  /* ── Klæbende CTA: vises når hero'ens plade er ude af syne ── */
  var sticky = $('.sticky'), heroCard = $('#heroCard');
  if (sticky && heroCard && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      sticky.classList.toggle('show', !e[0].isIntersecting);
    }, { threshold: 0 }).observe(heroCard);
  }

  /* ── Video: iframe loades først ved klik ── */
  var facade = $('.video-facade');
  if (facade) {
    facade.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + facade.dataset.yt + '?autoplay=1&rel=0';
      f.title = 'Sådan sammenligner du bilforsikring i Danmark 2026';
      f.loading = 'lazy';
      f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      f.allowFullscreen = true;
      f.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;border:0';
      facade.replaceWith(f);
    });
  }
})();

/* Filtrering på artikeloversigten */
(function(){
  var grid=document.getElementById('artGrid');
  if(!grid) return;
  var cards=Array.prototype.slice.call(grid.children);
  var count=document.getElementById('artCount');
  document.querySelectorAll('.filt').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.filt').forEach(function(x){x.classList.remove('on')});
      b.classList.add('on');
      var f=b.dataset.f,n=0;
      cards.forEach(function(c){
        var show=(f==='alle'||c.dataset.cat===f);
        c.style.display=show?'':'none';
        if(show) n++;
      });
      if(count) count.textContent = f==='alle'
        ? 'Viser alle '+n+' sider'
        : 'Viser '+n+' '+(n===1?'side':'sider');
    });
  });
})();

/* Manglende billede → faldbak til ikon i stedet for brudt link */
(function(){
  var ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">'
    +'<path d="M5 17h14M6 17l1.5-5.5A2 2 0 0 1 9.4 10h5.2a2 2 0 0 1 1.9 1.5L18 17"/>'
    +'<circle cx="7.5" cy="17.5" r="1.6"/><circle cx="16.5" cy="17.5" r="1.6"/></svg>';
  document.querySelectorAll('.cd-img img, .co-l img, .lw img').forEach(function(im){
    im.addEventListener('error',function(){
      /* .webp findes ikke? prøv .png, før vi giver op */
      if(!im.dataset.retried && /\.webp$/i.test(im.getAttribute('src')||'')){
        im.dataset.retried='1';
        im.src=im.getAttribute('src').replace(/\.webp$/i,'.png');
        return;
      }
      var w=im.parentNode;
      w.classList.add('cd-noimg');
      w.innerHTML=ICON;
    });
  });
})();
