document.querySelectorAll('.accordion-toggle').forEach((toggle) => {
  toggle.addEventListener('click', function (e) {
    e.preventDefault();

    const parent = this.closest('li');
    const content = parent.querySelector('.accordion-body');
    const icon = this.querySelector('.icon');

    document.querySelectorAll('.accordion-body').forEach((el) => {
      el.classList.remove('active');
    });
    document.querySelectorAll('.accordion-toggle').forEach((btn) => {
      btn.classList.remove('active');
    });

    content.classList.add('active');
    this.classList.add('active');
  });
});
