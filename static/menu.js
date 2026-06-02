(function(){
  const root=document.documentElement;
  const saved=localStorage.getItem('vignan-theme');
  if(saved) root.dataset.theme=saved;

  document.querySelectorAll('.theme-toggle').forEach(btn=>{
    btn.textContent=root.dataset.theme==='dark'?'☀️':'🌙';
    btn.addEventListener('click',()=>{
      root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
      localStorage.setItem('vignan-theme',root.dataset.theme);
      btn.textContent=root.dataset.theme==='dark'?'☀️':'🌙';
    });
  });

  const sidebar=document.getElementById('sidebar');
  const toggle=document.getElementById('sidebarToggle');
  const body=document.body;
  let backdrop=document.querySelector('.sidebar-backdrop');
  if(!backdrop){
    backdrop=document.createElement('div');
    backdrop.className='sidebar-backdrop';
    document.body.appendChild(backdrop);
  }

  function isMobile(){ return window.matchMedia('(max-width: 1000px)').matches; }
  function closeMobileSidebar(){
    if(sidebar) sidebar.classList.remove('open');
    backdrop.classList.remove('show');
    if(toggle) toggle.setAttribute('aria-expanded','false');
  }

  if(toggle && sidebar){
    toggle.setAttribute('aria-expanded','false');
    toggle.addEventListener('click',(e)=>{
      e.preventDefault();
      e.stopPropagation();
      if(isMobile()){
        const nowOpen=!sidebar.classList.contains('open');
        sidebar.classList.toggle('open', nowOpen);
        backdrop.classList.toggle('show', nowOpen);
        toggle.setAttribute('aria-expanded', String(nowOpen));
      }else{
        body.classList.toggle('sidebar-collapsed');
        localStorage.setItem('vignan-sidebar-collapsed', body.classList.contains('sidebar-collapsed') ? '1' : '0');
      }
    });
    backdrop.addEventListener('click', closeMobileSidebar);
    document.addEventListener('keydown',(e)=>{ if(e.key==='Escape') closeMobileSidebar(); });
    document.querySelectorAll('.side-nav a').forEach(a=>a.addEventListener('click', closeMobileSidebar));
    if(localStorage.getItem('vignan-sidebar-collapsed')==='1' && !isMobile()) body.classList.add('sidebar-collapsed');
    window.addEventListener('resize',()=>{ if(!isMobile()) closeMobileSidebar(); });
  }

  document.querySelectorAll('.loading-form').forEach(form=>{
    form.addEventListener('submit',()=>{
      const overlay=document.getElementById('loadingOverlay');
      if(overlay) overlay.classList.add('show');
    });
  });

  document.querySelectorAll('.upload-drop input[type=file]').forEach(input=>{
    input.addEventListener('change',()=>{
      const box=input.closest('.upload-drop');
      const file=input.files[0];
      if(file && box){
        const label=box.querySelector('span');
        const hint=box.querySelector('small');
        if(label) label.textContent='✅ '+file.name;
        if(hint) hint.textContent=(file.size/1024/1024).toFixed(2)+' MB selected';
      }
    });
  });

  const messages=document.getElementById('messages');
  if(messages) messages.scrollTop=messages.scrollHeight;

  document.querySelectorAll('.chat-composer textarea').forEach(area=>{
    area.addEventListener('input',()=>{
      area.style.height='auto';
      area.style.height=Math.min(area.scrollHeight,160)+'px';
    });
    area.addEventListener('keydown',e=>{
      if(e.key==='Enter'&&!e.shiftKey){
        e.preventDefault();
        area.closest('form').requestSubmit();
      }
    });
  });
})();
