(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const bodyRef = document.querySelector('body');
  const headLogRef = document.querySelector('[data-visibility]');
  const headMenuRef = document.querySelector('[data-button-position]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    bodyRef.classList.toggle('no-scroll');
    headLogRef.classList.toggle('visually-hidden');
    headMenuRef.classList.toggle('flex-transform');
  });
})();
