let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.nav');
let menuItem = document.querySelectorAll('.nav__link');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


menuItem.forEach (function(menuItem) {
  menuItem.addEventListener('click',function(){
          menuBtn.classList.toggle('active');
          menu.classList.toggle('active');
  })
})

//nav-list vergroot op hover//
let vergroot = document.querySelector('a:nth-of-type(1)')

vergroot.addEventListener('click', tabs)

function tabs(){
  console.log('het werkt')

  vergroot.classList.toggle('vergroten')
}


