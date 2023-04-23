const faqs = document.querySelectorAll(".faq");
const loadfaq = document.querySelectorAll('.load-faq');
const ls = document.querySelector('.list-question');

function attachClickEventToFaqs() {
  const faqs = document.querySelectorAll(".faq");
  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle("active");
    });
  });
}

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle("active");
  });
});

function addfaq(source) {
  fetch(source)
    .then(response => response.json())
    .then(faqs => {
      ls.innerHTML = "";
      faqs.forEach(faq => {
        const faqElement = document.createElement('div');
        faqElement.classList.add('faq');
        faqElement.innerHTML = `
          <div class="question">
            <h3>${faq.question}</h3>
            <img src="/assets/img/iconPlus.svg" alt="">
          </div>
          <div class="answer">
            <p>${faq.answer}</p>
          </div>
        `;
        ls.appendChild(faqElement);
      });
      attachClickEventToFaqs();
    });
}

loadfaq.forEach(event => {
  const btns = document.querySelectorAll('.load-faq');
  event.addEventListener('click', () => {
    const source = event.dataset.source; 
    addfaq(source);
    btns.forEach(button => {
      if (button === event) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  });
});

addfaq("/assets/data/foodQuestion.json");
