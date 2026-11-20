/* janbeger.ai subpages v4: phone menu and footer year */
(function(){
  var nav=document.querySelector('nav.site'), btn=nav&&nav.querySelector('.menu-btn'), mm=document.getElementById('mobile-menu');
  if(btn&&mm){
    function setOpen(o){ nav.classList.toggle('menu-open',o); mm.hidden=!o; btn.setAttribute('aria-expanded',o?'true':'false'); btn.setAttribute('aria-label',o?(btn.dataset.close||'Close menu'):(btn.dataset.open||'Open menu')); document.documentElement.classList.toggle('no-scroll',o); }
    btn.addEventListener('click',function(){ setOpen(mm.hidden); });
    mm.addEventListener('click',function(e){ if(e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&!mm.hidden){ setOpen(false); btn.focus(); } });
  }
  var y=document.querySelectorAll('footer.site .yr'); for(var i=0;i<y.length;i++){ y[i].textContent=new Date().getFullYear(); }
})();
/* a note for people who open the developer tools (same as the homepage) */
try { console.log('%cJan Beger%c\nBuilt for the people who have to make it work.\nWant to talk about a keynote or panel? team@janbeger.ai', 'font: 600 20px Sora, system-ui, sans-serif; color: #7c3aed;', 'font: 13px Manrope, system-ui, sans-serif; color: inherit; line-height: 1.6;'); } catch (e) {}
