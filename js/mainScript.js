let openDrawerBtn = document.querySelector('#navDrawerBtn');
let closeDrawerBtn = document.querySelector('#navDrawer');
let navDrawer = document.querySelector('#navDrawer');

openDrawerBtn.addEventListener('click', () => {
  navDrawer.style.right = '0px';
  navDrawer.style.opacity = '1';
});

closeDrawerBtn.addEventListener('click', () => {
  navDrawer.style.right = '-400px';
  navDrawer.style.opacity = '0';
});