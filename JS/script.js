// Animate skill bars when they enter view
  const rows = document.querySelectorAll('.tool-row');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in-view'); });
  }, { threshold: 0.4 });
  rows.forEach(r => io.observe(r));