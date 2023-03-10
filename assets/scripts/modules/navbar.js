const header = document.querySelector('header');
const navbar = header.querySelector('nav')
const btn_navigation = document.getElementById('btn-navigation-toggle')

export function handleNavbarTransparency() {
  const headerTopOff = header.offsetTop;
  const headerHeight = header.clientHeight;

  if (navbar.classList.contains('active')) {
    header.classList.add('bg-active');
  } else {
    if (headerTopOff <= headerHeight) {
      header.classList.remove('bg-active');
    } else if (!header.classList.contains('bg-active')) {
      header.classList.add('bg-active');
    }
  }
}

export function handleNavbar() {
  navbar.classList.toggle('active')
  handleNavbarTransparency()
}

btn_navigation.addEventListener('click', handleNavbar)
document.addEventListener('scroll', handleNavbarTransparency)