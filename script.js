const menuButton=document.querySelector('.menu');
const nav=document.querySelector('.header nav');
const dialog=document.querySelector('#contact-dialog');
const closeButton=document.querySelector('.contact-dialog .close');

menuButton?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});

document.querySelectorAll('.header nav a').forEach(link=>link.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));

document.querySelectorAll('[data-contact]').forEach(button=>button.addEventListener('click',()=>{
  if(typeof dialog?.showModal==='function') dialog.showModal();
}));

closeButton?.addEventListener('click',()=>dialog?.close());
dialog?.addEventListener('click',event=>{
  if(event.target===dialog) dialog.close();
});
