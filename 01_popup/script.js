const openBtn = document.querySelector('.modal_btn');
const modal = document.querySelector('.modal');
const closeButtons = document.querySelectorAll('.gray_btn, .red_btn'); // 두 버튼 모두 닫기 처리

openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

closeButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

// 바깥 영역 클릭 시 닫기
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
