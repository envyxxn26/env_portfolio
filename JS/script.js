// Animate skill bars when they enter view
  const rows = document.querySelectorAll('.tool-row');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.4 });
  rows.forEach(r => io.observe(r));

  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle?.addEventListener('click', () => {
    const isOpen = navMenu?.classList.toggle('is-open') ?? false;
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  navMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('is-open');
      navToggle?.setAttribute('aria-expanded', 'false');
      navToggle?.setAttribute('aria-label', 'Open navigation');
    });
  });

  const projectErrorPage = document.querySelector('.project-error-page');
  const projectErrorName = document.querySelector('#project-error-name');

  document.querySelectorAll('.project-unavailable').forEach(button => {
    button.addEventListener('click', () => {
      if(projectErrorName) projectErrorName.textContent = button.dataset.project;
      projectErrorPage?.showModal();
    });
  });

  const returnToProjects = () => {
    projectErrorPage?.close();
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  };

  projectErrorPage?.querySelectorAll('[data-projects-back]').forEach(button => {
    button.addEventListener('click', returnToProjects);
  });

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

  const resumeModal = document.querySelector('.resume-modal');
  const resumeDownloadButton = document.querySelector('.resume-download');
  const closeResumeModal = resumeModal?.querySelector('.resume-modal-close');
  const cancelResumeDownload = resumeModal?.querySelector('.resume-cancel');
  const confirmResumeDownload = resumeModal?.querySelector('.resume-confirm');

  resumeDownloadButton?.addEventListener('click', () => resumeModal?.showModal());

  const closeResumeDownloadModal = () => resumeModal?.close();
  closeResumeModal?.addEventListener('click', closeResumeDownloadModal);
  cancelResumeDownload?.addEventListener('click', closeResumeDownloadModal);
  confirmResumeDownload?.addEventListener('click', () => {
    setTimeout(closeResumeDownloadModal, 0);
  });
  resumeModal?.addEventListener('click', (event) => {
    if(event.target === resumeModal) closeResumeDownloadModal();
  });