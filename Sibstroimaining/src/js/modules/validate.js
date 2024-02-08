// Валидация

const formInit = document.querySelector(".form");

// Инпут маска

if (formInit) {
  var formInput = formInit.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999)999-99-99");
  im.mask(formInput);
}

if (formInit) {
  const validator = new JustValidate('.form', { // можно использовать классы вместо ид
    errorLabelStyle: { // Стили для ошибки
      color: '#F13F58',
    }

  });

  validator
    .addField('#name', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите ваше Ф.И.О',
      },
      {
        rule: 'minLength',
        value: 1,
        errorMessage: 'Минимальное количество букв - 1',
      },
    ])
    .addField('#phone', [{
        rule: 'required',
        errorMessage: 'Введите ваш телефон',
      },
      {
        validator: (value) => { // Своя проверка, будет работать как rule
          const phone = formInput.inputmask.unmaskedvalue(); // Получает чистое значение инпута в котором инпут маск
          return Boolean(Number(phone) && phone.length == 10);
        },
        errorMessage: 'Введите ваш полный телефон',
      },
    ])
    .addField('#email', [{
        rule: 'required',
        errorMessage: 'Введите вашу почту!',
      },
      {
        rule: 'email',
        errorMessage: 'Введите правильную почту!',
      },
    ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

      document.querySelector(".wrapper-form").classList.add("interactive");

      document.querySelector(".form").querySelectorAll("input").forEach(function (e) {
        e.value = "";
      })

      document.querySelector(".form").querySelector("textarea").value = "";
    })
}