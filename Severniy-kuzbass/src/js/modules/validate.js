// Инпут маска

function removeFormClass() {
  document.querySelectorAll(".states").forEach(function (e) {
    e.querySelectorAll("div").forEach(function (q) {
      q.classList.remove("active");
    })
    e.classList.remove("active");
  })
}

const contactsForm = document.querySelector('.contacts-form');

if (contactsForm) {
  const contactsFormInputTel = contactsForm.querySelector("input[type='tel']");

  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(contactsFormInputTel);

  const contactsValidator = new JustValidate('.contacts-form', { // можно использовать классы вместо ид

    errorFieldStyle: {},
    errorLabelStyle: {}

  });

  contactsValidator
    .addField('#ContactsFio', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'minLength',
        value: 1,
        errorMessage: 'Минимальное количество букв - 1',
      },
    ])
    .addField('#ContactsPhone', [{
        rule: 'required',
        value: true,
        errorMessage: 'Введите телефон',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = contactsFormInputTel.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

      document.querySelector(".states-contacts-form").classList.add("active");

      document.querySelector(".send-contacts-form").classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.querySelector(".contacts-form").querySelectorAll("input").forEach(function (q) {
              q.value = "";
            })

            document.querySelector(".contacts-form").querySelector("textarea").value = "";

            document.querySelector(".send-contacts-form").classList.remove("active");
            document.querySelector(".okay-contacts-form").classList.add("active");
            setTimeout(removeFormClass, 2000);
          } else {
            document.querySelector(".contacts-form").querySelectorAll("input").forEach(function (q) {
              q.value = "";
            })

            document.querySelector(".contacts-form").querySelector("textarea").value = "";

            document.querySelector(".send-contacts-form").classList.remove("active");
            document.querySelector(".error-contacts-form").classList.add("active");
            setTimeout(removeFormClass, 2000);
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })

}

const allForm = document.querySelector('.all-form');

if (allForm) {
  const allFormInputTel = allForm.querySelector("input[type='tel']");

  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(allFormInputTel);

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
    .addField('#AllFormPhone', [{
        rule: 'required',
        value: true,
        errorMessage: 'Введите телефон',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = allFormInputTel.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

      document.querySelector(".states-all-form").classList.add("active");

      document.querySelector(".send-all-form").classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.querySelector(".all-form").querySelectorAll("input").forEach(function (q) {
              q.value = "";
            })

            document.querySelector(".all-form").querySelector("textarea").value = "";

            document.querySelector(".send-all-form").classList.remove("active");
            document.querySelector(".okay-all-form").classList.add("active");
            setTimeout(removeFormClass, 2000);
          } else {
            document.querySelector(".all-form").querySelectorAll("input").forEach(function (q) {
              q.value = "";
            })

            document.querySelector(".all-form").querySelector("textarea").value = "";

            document.querySelector(".send-all-form").classList.remove("active");
            document.querySelector(".error-all-form").classList.add("active");
            setTimeout(removeFormClass, 2000);
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })

}