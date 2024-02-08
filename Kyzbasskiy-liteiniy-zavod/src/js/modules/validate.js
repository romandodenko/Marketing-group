// Валидация формы и маска инпута

function removeFormClass() {
  document.querySelector(".wrapper-send").classList.remove("active");
  document.querySelector(".wrapper-error").classList.remove("active");
  document.querySelector(".wrapper-okay").classList.remove("active");
}

const allFormInit = document.querySelector(".all-form");

if (allFormInit) {

  let allFormPhone = allFormInit.querySelector("input[type='tel']");
  let allFormPhoneIm = new Inputmask("+7 (999) 999-99-99");
  allFormPhoneIm.mask(allFormPhone);

  const allFormValidator = new JustValidate('.all-form', { // можно использовать классы вместо ид

    errorFieldStyle: {},
    errorLabelStyle: {}

  });

  allFormValidator
    .addField('#AllFormFio', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'minLength',
        value: 1,
        errorMessage: 'Минимальное количество букв - 1',
      },
    ])
    .addField('#AllFormEmail', [{ // можно использовать классы вместо ид
        rule: 'required',
        value: true,
        errorMessage: 'Введите email',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректный email',
      },
    ])
    .addField('#AllFormTel', [{
        rule: 'required',
        value: true,
        errorMessage: 'Введите телефон',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = allFormPhone.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже
      document.querySelector(".wrapper-send").classList.add("active");
 
      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.querySelector(".wrapper-send").classList.remove("active");
            document.querySelector(".wrapper-okay").classList.add("active");
            setTimeout(removeFormClass, 2000);
          } else {
            document.querySelector(".wrapper-send").classList.remove("active");
            document.querySelector(".wrapper-error").classList.add("active");
            setTimeout(removeFormClass, 2000);
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })
}

const formMainInit = document.querySelector(".form-main");

if (formMainInit) {

  let allFormPhone = formMainInit.querySelector("input[type='tel']");
  let allFormPhoneIm = new Inputmask("+7 (999) 999-99-99");
  allFormPhoneIm.mask(allFormPhone);

  const formMainValidator = new JustValidate('.form-main', { // можно использовать классы вместо ид

    errorFieldStyle: {},
    errorLabelStyle: {}

  });

  formMainValidator
    .addField('#FormMainFio', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'minLength',
        value: 1,
        errorMessage: 'Минимальное количество букв - 1',
      },
    ])
    .addField('#FormMainEmail', [{ // можно использовать классы вместо ид
        rule: 'required',
        value: true,
        errorMessage: 'Введите email',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректный email',
      },
    ])
    .addField('#FormMainTel', [{
        rule: 'required',
        value: true,
        errorMessage: 'Введите телефон',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = allFormPhone.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже
      document.querySelector(".wrapper-send").classList.add("active");
 
      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.querySelector(".wrapper-send").classList.remove("active");
            document.querySelector(".wrapper-okay").classList.add("active");
            setTimeout(removeFormClass, 2000);
          } else {
            document.querySelector(".wrapper-send").classList.remove("active");
            document.querySelector(".wrapper-error").classList.add("active");
            setTimeout(removeFormClass, 2000);
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })
}