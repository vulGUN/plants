console.log('Самооценка работы: 100 баллов.');

// Бургер меню

const burgerBtn = document.querySelector('.burger-btn'),
  menuItem = document.querySelectorAll('.menu-item'),
  menuBgWrap = document.querySelector('.menu-bg-wrap');

burgerBtn.addEventListener('click', () => {
  document.querySelector('.menu-wrap').classList.toggle('active');
  document.querySelector('.menu-bg').classList.toggle('change-bg');
  menuBgWrap.classList.toggle('change-bg');
  burgerBtn.classList.toggle('change');
});

menuItem.forEach((i) => {
  i.addEventListener('click', () => {
    document.querySelector('.menu-wrap').classList.toggle('active');
    document.querySelector('.menu-bg').classList.toggle('change-bg');
    menuBgWrap.classList.toggle('change-bg');
    burgerBtn.classList.toggle('change');
  });
});

// Закрытие бургера по тапу вне окна меню

document.addEventListener('click', (e) => {
  if (
    !e.target.classList.contains('burger-btn') &&
    !e.target.classList.contains('burger-line') &&
    !e.target.classList.contains('menu-bg') &&
    !e.target.classList.contains('menu-list')
  ) {
    document.querySelector('.menu-wrap').classList.remove('active');
    document.querySelector('.menu-bg').classList.remove('change-bg');
    menuBgWrap.classList.remove('change-bg');
    burgerBtn.classList.remove('change');
  }
});

// Раздел Service (идиотское решение, переделаю когда додумаюсь как)

const serviceBtn = document.querySelector('.service-buttons'),
  btn = document.querySelectorAll('.service-btn'),
  itemTitles = document.querySelectorAll('.item-title'),
  itemBlur = document.querySelectorAll('.service-blur');

function removeAllBlur() {
  itemBlur.forEach((i) => {
    i.classList.remove('on_blur');
  });
}

function counter() {
  let count = 0;
  for (let i = 0; i < btn.length; ++i) {
    btn[i].classList.contains('active_service-btn') ? (count += 1) : count;
  }
  return count;
}

function changeBlur() {
  removeAllBlur();
  if (btn[0].classList.contains('active_service-btn') && btn[1].classList.contains('active_service-btn')) {
    itemBlur[1].classList.add('on_blur');
    itemBlur[3].classList.add('on_blur');
    itemBlur[5].classList.add('on_blur');
  } else if (btn[0].classList.contains('active_service-btn') && btn[2].classList.contains('active_service-btn')) {
    itemBlur[2].classList.add('on_blur');
  } else if (btn[1].classList.contains('active_service-btn') && btn[2].classList.contains('active_service-btn')) {
    itemBlur[0].classList.add('on_blur');
    itemBlur[4].classList.add('on_blur');
  } else if (btn[0].classList.contains('active_service-btn')) {
    itemBlur[1].classList.add('on_blur');
    itemBlur[2].classList.add('on_blur');
    itemBlur[3].classList.add('on_blur');
    itemBlur[5].classList.add('on_blur');
  } else if (btn[1].classList.contains('active_service-btn')) {
    itemBlur[0].classList.add('on_blur');
    itemBlur[1].classList.add('on_blur');
    itemBlur[3].classList.add('on_blur');
    itemBlur[4].classList.add('on_blur');
    itemBlur[5].classList.add('on_blur');
  } else if (btn[2].classList.contains('active_service-btn')) {
    itemBlur[0].classList.add('on_blur');
    itemBlur[2].classList.add('on_blur');
    itemBlur[4].classList.add('on_blur');
  }
}

serviceBtn.addEventListener('click', (e) => {
  if (e.target && e.target.textContent === 'Gardens') {
    btn[0].classList.toggle('active_service-btn');
    if (counter() > 2) btn[0].classList.remove('active_service-btn');
  }
  if (e.target && e.target.textContent === 'Lawn') {
    btn[1].classList.toggle('active_service-btn');
    if (counter() > 2) btn[1].classList.remove('active_service-btn');
  }
  if (e.target && e.target.textContent === 'Planting') {
    btn[2].classList.toggle('active_service-btn');
    if (counter() > 2) btn[2].classList.remove('active_service-btn');
  }

  changeBlur();
});

// Раздел prices

const tariffsOpen = document.querySelectorAll('.tariff-open'),
  tariffsWrap = document.querySelector('.prices-tariffs'),
  tariffsItem = document.querySelectorAll('.tariff-item');

tariffsItem.forEach((i) => {
  i.addEventListener('click', (e) => {
    for (let a = 0; a < tariffsItem.length; a++) {
      if (e.target.className === 'tariff-btn') {
        document.querySelector('#contacts').scrollIntoView();
        break;
      }
      if (i === tariffsItem[a]) {
        tariffsItem[a].classList.toggle('show_card');
        tariffsOpen[a].classList.toggle('active');
      } else {
        tariffsItem[a].classList.remove('show_card');
        tariffsOpen[a].classList.remove('active');
      }
    }
  });
});

// Раздел contact us

const cityWrap = document.querySelector('.contacts-city-wrap'),
  contactsWrap = document.querySelector('.contacts-wrap'),
  contactsItems = document.querySelectorAll('.city-item');
// cardCity = document.querySelectorAll('.city-items');

cityWrap.addEventListener('click', () => {
  document.querySelector('.city-items').classList.toggle('active_items');
  cityWrap.classList.toggle('show-city');
});
contactsWrap.addEventListener('mouseover', (e) => {
  if (!/city/.test(e.target.className)) {
    document.querySelector('.city-items').classList.remove('active_items');
    cityWrap.classList.remove('show-city');
  }
});

contactsItems.forEach((i) => {
  i.addEventListener('click', (e) => {
    if (e.target.className != 'city-items') {
      document.querySelector('.contacts-city-text').textContent = e.target.innerText;
    }
    document.querySelector('.contacts-city-wrap').style.cssText = 'background: #c1e698; box-shadow: none;';
    document.querySelector('.contacts-city-text').style.cssText = 'font-size: 16px;';
    document.querySelector('.city-card-item').classList.add('active');
    if (e.target.innerText === 'Canandaigua, NY') {
      document.querySelectorAll('.city-name-right').forEach((i) => {
        i.classList.remove('active');
      });
      document.querySelectorAll('.city-call-btn').forEach((i) => {
        i.classList.remove('active');
      });
      document.querySelectorAll('.can').forEach((i) => {
        i.classList.add('active');
      });
    }
    if (e.target.innerText === 'New York City') {
      document.querySelectorAll('.city-name-right').forEach((i) => {
        i.classList.remove('active');
      });
      document.querySelectorAll('.city-call-btn').forEach((i) => {
        i.classList.remove('active');
      });
      document.querySelectorAll('.nyc').forEach((i) => {
        i.classList.add('active');
      });
    }
    if (e.target.innerText === 'Sherrill, NY') {
      document.querySelectorAll('.city-name-right').forEach((i) => {
        i.classList.remove('active');
      });
      document.querySelectorAll('.city-call-btn').forEach((i) => {
        i.classList.remove('active');
      });
      document.querySelectorAll('.she').forEach((i) => {
        i.classList.add('active');
      });
    }
    if (e.target.innerText === 'Yonkers, NY') {
      document.querySelectorAll('.city-name-right').forEach((i) => {
        i.classList.remove('active');
      });
      document.querySelectorAll('.city-call-btn').forEach((i) => {
        i.classList.remove('active');
      });
      document.querySelectorAll('.yon').forEach((i) => {
        i.classList.add('active');
      });
    }
  });
});
