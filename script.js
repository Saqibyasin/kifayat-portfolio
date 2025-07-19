
(function(){
  emailjs.init("XUNGIVXcuPWoGUbvi"); 
})();

let form = document.querySelector('.contact-form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_lv8aozu', 'template_rfhp66n', form)
      .then(function() {
        alert('Message sent!');
        form.reset();
      }, function(error) {
        alert('Failed to send message. ' + JSON.stringify(error));
      });
});
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Frontend Developer', 'Web Designer', 'Software Engineer',],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
})

const typed1 = new Typed('.footer-heading', {
  strings: [
    'Thanks for scrolling!',
    'Hope you liked my work 😊',
    'Let’s connect soon!'
  ],
  typeSpeed: 150,    
  backSpeed: 50,      
  backDelay: 1500,   
  startDelay: 500,  
  loop: true,        
  loopCount: Infinity,
  showCursor: false,
  smartBackspace: true
});



let menubtn = document.querySelector('#menu-icon');
let sidebar = document.querySelector('.sidebar');
let closebtn = document.querySelector('#close-btn')
 
menubtn.addEventListener('click',()=>{
  sidebar.style.display = 'flex'
})
  
closebtn.addEventListener('click',()=>{
  sidebar.style.display = 'none'
})
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) { 
    sidebar.style.display = 'none'
  }
});
document.addEventListener('click', (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnMenuBtn = menubtn.contains(event.target);

  if (sidebar.classList.contains('active') && !isClickInsideSidebar && !isClickOnMenuBtn) {
    sidebar.classList.remove('active');
  }
});

sidebar.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.style.display = 'none';
  });
});



