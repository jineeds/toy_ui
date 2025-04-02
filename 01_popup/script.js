const openBtn = document.querySelector('.modal_btn');
const closeBtn = document.querySelector('.close_btn');
const modal = document.querySelector('.modal');

// 모달 열기
openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// 모달 닫기
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});
