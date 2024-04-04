const toggleBtn = document.querySelector('.toggle_btn');
const menuNav = document.querySelector('.menu_nav');

toggleBtn.addEventListener('click', () => {
    menuNav.classList.toggle('active');

    if (menuNav.classList.contains('active')) {
        document.querySelector('nav').style.backgroundColor = '#1e2e1bcd';
        document.querySelector('.menu_nav').style.display = 'flex';
        document.querySelector('.menu_nav').style.gap = '20px';
        document.querySelector('.menu_nav').style.top = '10%';
        document.querySelector('.menu_nav').style.flexDirection = 'column';
        document.querySelector('.menu_nav').style.justifyContent = 'center';
        document.querySelector('.menu_nav').style.alignItems = 'end';
        document.querySelector('.menu_nav').style.marginRight = '10%';
        document.querySelectorAll('.menu_nav a').forEach(link => {
            link.style.textDecoration = 'none';
            link.style.color = 'aliceblue';
            link.style.fontWeight = '500';
        });
    } else {
        document.querySelector('nav').style.backgroundColor = '';
        document.querySelector('.menu_nav').style.display = '';
        document.querySelector('.menu_nav').style.gap = '';
        document.querySelector('.menu_nav').style.top = '';
        document.querySelector('.menu_nav').style.flexDirection = '';
        document.querySelector('.menu_nav').style.justifyContent = '';
        document.querySelector('.menu_nav').style.alignItems = '';
        document.querySelector('.menu_nav').style.marginRight = '';
        document.querySelectorAll('.menu_nav a').forEach(link => {
            link.style.textDecoration = '';
            link.style.color = '';
            link.style.fontWeight = '';
        });
    }
});
