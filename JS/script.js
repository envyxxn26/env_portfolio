// Animate skill bars when they enter view
  const rows = document.querySelectorAll('.tool-row');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.4 });
  rows.forEach(r => io.observe(r));

  const contactModal = document.querySelector('.contact-modal');
  const contactLinks = document.querySelectorAll('.nav-links a[href="#contact"]');
  const closeContactModal = contactModal?.querySelector('.contact-modal-close');

  contactLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      contactModal?.classList.remove('is-closing');
      contactModal?.showModal();
    });
  });

  const closeContactModalWithAnimation = () => {
    if(!contactModal?.open || contactModal.classList.contains('is-closing')) return;
    contactModal.classList.add('is-closing');
    setTimeout(() => {
      contactModal.classList.remove('is-closing');
      contactModal.close();
    }, 200);
  };

  closeContactModal?.addEventListener('click', closeContactModalWithAnimation);
  contactModal?.addEventListener('click', (event) => {
    if(event.target === contactModal) closeContactModalWithAnimation();
  });
  contactModal?.addEventListener('cancel', (event) => {
    event.preventDefault();
    closeContactModalWithAnimation();
  });