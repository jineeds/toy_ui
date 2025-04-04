const openBtn = document.querySelector('.modal_btn');
const surveyModal = document.getElementById('surveyModal');
const resultModal = document.getElementById('resultModal');
const mbtiBtns = document.querySelectorAll('.mbti_btn');
const resultText = document.getElementById('resultText');
const resultCloseBtn = document.getElementById('resultCloseBtn');

openBtn.addEventListener('click', () => {
  surveyModal.style.display = 'flex';
});

surveyModal.addEventListener('click', (e) => {
  if (e.target === surveyModal) {
    surveyModal.style.display = 'none';
  }
});

resultModal.addEventListener('click', (e) => {
  if (e.target === resultModal) {
    resultModal.style.display = 'none';
  }
});

mbtiBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const type = btn.dataset.type;
    let message = '';

    if (type === 'I') {
      message = '😌 당신은 내향형 (I) 혼자만의 시간에서 에너지를 얻어요.';
    } else {
      message = '😄 당신은 외향형 (E) 사람들과 함께일 때 더 활발해요!';
    }

    surveyModal.style.display = 'none';
    resultText.textContent = message;
    resultModal.style.display = 'flex';
  });
});

resultCloseBtn.addEventListener('click', () => {
  resultModal.style.display = 'none';
});
