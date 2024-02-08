// Валидация

const heroFormInitOne = document.querySelector(".hero-tabs-form-1");

if (heroFormInitOne) {
  const validator = new JustValidate('.hero-tabs-form-1', { // можно использовать классы вместо ид

    errorLabelStyle: { // Стили для ошибки
      color: '#ff0000',
    }

  });

  validator
    .addField('#gorodSend', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите город отправки',
    }, ])
    .addField('#gorodPost', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите город доставки',
    }, ])
    .addField('#cargoWeight', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите вес груза',
    }, ])
    .addField('#dimensions', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите габариты',
    }, ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

      document.querySelector(".page-spinner").classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {

            document.querySelector(".page-spinner").classList.remove("active");

            document.querySelector(".wrapper-okay").classList.add("active");
             
          } else {

            document.querySelector(".page-spinner").classList.remove("active");

            document.querySelector(".wrapper-error").classList.add("active");

          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })

}

const heroFormInitTwo = document.querySelector(".hero-tabs-form-2");

if (heroFormInitTwo) {
  let heroFormTwoTel = heroFormInitTwo.querySelector("input[type='tel']");
  let heroFormTwoTelIm = new Inputmask("+7 (999) 999-99-99");
  heroFormTwoTelIm.mask(heroFormTwoTel);

  const validator = new JustValidate('.hero-tabs-form-2', { // можно использовать классы вместо ид

    errorLabelStyle: { // Стили для ошибки
      color: '#ff0000',
    }

  });

  validator
    .addField('#numberDocuments', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите номер документа',
    }, ])
    .addField('#phoneTrace', [{
      rule: 'required',
      errorMessage: 'Введите телефон',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = heroFormTwoTel.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

      document.querySelector(".page-spinner").classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.querySelector(".page-spinner").classList.remove("active");

            document.querySelector(".wrapper-okay").classList.add("active");
          } else {
            document.querySelector(".page-spinner").classList.remove("active");

            document.querySelector(".wrapper-error").classList.add("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })

}

const heroFormInitThird = document.querySelector(".hero-tabs-form-3");

if (heroFormInitThird) {
  let heroFormThirdTel = heroFormInitThird.querySelector("input[type='tel']");
  let heroFormThirdTelIm = new Inputmask("+7 (999) 999-99-99");
  heroFormThirdTelIm.mask(heroFormThirdTel);

  const validator = new JustValidate('.hero-tabs-form-3', { // можно использовать классы вместо ид

    errorLabelStyle: { // Стили для ошибки
      color: '#ff0000',
    }

  });

  validator
    .addField('#nameHelp', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите ваше имя',
    }, ])
    .addField('#phoneHelp', [{
      rule: 'required',
      errorMessage: 'Введите телефон',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = heroFormThirdTel.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

      document.querySelector(".page-spinner").classList.add("active");
      
      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.querySelector(".page-spinner").classList.remove("active");
            document.querySelector(".wrapper-okay").classList.add("active");
          } else {
            document.querySelector(".page-spinner").classList.remove("active");

            document.querySelector(".wrapper-error").classList.add("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })

}

const priceItemFormInit = document.querySelector(".price-item-form");

if (priceItemFormInit) {
  const validator = new JustValidate('.price-item-form', { // можно использовать классы вместо ид

    errorLabelStyle: { // Стили для ошибки
      color: '#ff0000',
    }

  });

  validator
    .addField('#priceGorodSend', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите город отправки',
    }, ])
    .addField('#priceGorodPost', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите город доставки',
    }, ])
    .addField('#priceVes', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите вес груза',
    }, ])
    .addField('#priceGabariti', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите габариты',
    }, ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже
      document.querySelector(".page-spinner").classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.querySelector(".page-spinner").classList.remove("active");
            document.querySelector(".wrapper-okay").classList.add("active");
          } else {
            document.querySelector(".page-spinner").classList.remove("active");

            document.querySelector(".wrapper-error").classList.add("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })

}

const curserFormInit = document.querySelector(".curser-form");

if (curserFormInit) {

  let curserFormTel = curserFormInit.querySelector("input[type='tel']");
  let curserFormTelIm = new Inputmask("+7 (999) 999-99-99");
  curserFormTelIm.mask(curserFormTel);

  const validator = new JustValidate('.curser-form', { // можно использовать классы вместо ид

    errorLabelStyle: { // Стили для ошибки
      color: '#ff0000',
    }

  });

  validator
    .addField('#curserName', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите ваше имя',
    }, ])
    .addField('#curserPhone', [{
      rule: 'required',
      errorMessage: 'Введите ваш телефон',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = curserFormTel.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

      let curserWrapperForm = document.querySelector(".curser-wrapper-form");

      curserWrapperForm.querySelector(".curser-wrapper-form__item").classList.add("disabled");

      curserWrapperForm.querySelector(".wrapper-spinner-curser").classList.add("active");
      
      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {

            let curserWrapperForm = document.querySelector(".curser-wrapper-form");
      
            curserWrapperForm.querySelector(".wrapper-spinner-curser").classList.remove("active");

            curserWrapperForm.querySelector(".okay").classList.add("active");

          } else {
            let curserWrapperForm = document.querySelector(".curser-wrapper-form");
      
            curserWrapperForm.querySelector(".wrapper-spinner-curser").classList.remove("active");

            curserWrapperForm.querySelector(".curse-error").classList.add("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })

}

const vacancyForm = document.querySelector(".vacancy-form");

if (vacancyForm) {
  let vacancyFormTel = vacancyForm.querySelector("input[type='tel']");
  let vacancyFormIm = new Inputmask("+7 (999) 999-99-99");
  vacancyFormIm.mask(vacancyFormTel);

  const validator = new JustValidate('.vacancy-form', { // можно использовать классы вместо ид

    errorLabelStyle: { // Стили для ошибки
      color: '#ff0000',
    }

  });

  validator
    .addField('#vacancyName', [{ // можно использовать классы вместо ид
      rule: 'required',
      errorMessage: 'Введите имя',
    }, ])
    .addField('#vacancyPhone', [{
      rule: 'required',
      errorMessage: 'Введите телефон',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = vacancyFormTel.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: 'Введите корректный телефон',
    },
  ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

      document.querySelector(".page-spinner").classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.querySelector(".page-spinner").classList.remove("active");

            document.querySelector(".wrapper-okay").classList.add("active");
          } else {
            document.querySelector(".page-spinner").classList.remove("active");

            document.querySelector(".wrapper-error").classList.add("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })

}

//  