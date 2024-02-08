// Валидация формы и отправка на почту

const eventsFormInit = document.querySelector(".events-form");

if (eventsFormInit) {

  let selectorEventsForm = document.getElementById("phoneEvents");
  let imEvents = new Inputmask("+7 (999) 999-99-99");
  imEvents.mask(selectorEventsForm);

  const validator = new JustValidate('.events-form', {});

  validator
    .addField('#nameEvents', [{
        rule: 'required',
        errorMessage: 'Введите ваше имя',
      },
      {
        rule: 'minLength',
        value: 1,
        errorMessage: 'Минимальное количество букв - 1',
      },
    ])
    .addField('#phoneEvents', [{
        rule: 'required',
        errorMessage: 'Введите ваш телефон',
      },
      {
        validator: (value) => {
          const phone = selectorEventsForm.inputmask.unmaskedvalue();
          return Boolean(Number(phone) && phone.length == 10);
        },
        errorMessage: 'Введите корректный номер',
      },
    ])
    .onSuccess((event) => {

      document.querySelector(".wrapper-spinner").classList.add("active");
      
      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.querySelector(".wrapper-error").classList.remove("active");
            document.querySelector(".wrapper-spinner").classList.remove("active");
            document.querySelector(".okay").classList.add("active");
          } else {
            document.querySelector(".wrapper-spinner").classList.remove("active");
            document.querySelector(".wrapper-error").classList.add("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })
}

const footerFormInit = document.querySelector('.footer-form');

if (footerFormInit) {
  const validator = new JustValidate('.footer-form', {});

  validator
    .addField('#emailFooter', [{
        rule: 'required',
        errorMessage: 'Введите вашу почту',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректную почту',
      },
    ])
    .onSuccess((event) => {

      document.querySelector(".wrapper-spinner").classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.querySelector(".wrapper-error").classList.remove("active");
            document.querySelector(".wrapper-spinner").classList.remove("active");
            document.querySelector(".okay").classList.add("active");
          } else {
            document.querySelector(".wrapper-spinner").classList.remove("active");
            document.querySelector(".wrapper-error").classList.add("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })
}

const headerFormInit = document.querySelector(".header-menu-form");

if (headerFormInit) {
  const validator = new JustValidate('.header-menu-form', {});

  validator
    .addField('#emailHeader', [{
        rule: 'required',
        errorMessage: 'Введите вашу почту',
      },
      {
        rule: 'email',
        errorMessage: 'Введите корректную почту',
      },
    ])
    .onSuccess((event) => {
      document.querySelector(".wrapper-spinner").classList.add("active");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            headerMenu.timeScale(2).reverse();
            document.querySelector(".wrapper-spinner").classList.remove("active");
            document.querySelector(".wrapper-error").classList.remove("active");
            document.querySelector(".okay").classList.add("active");
          } else {
            document.querySelector(".wrapper-spinner").classList.remove("active");
            document.querySelector(".wrapper-error").classList.add("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })
}

const filterFormInit = document.querySelector(".form-filter");

if (filterFormInit) {

  const formFilter = document.querySelector(".form-filter");

  let formFilterTel = formFilter.querySelector("input[type='tel']");

  let formFilterMask = new Inputmask("+7 (999) 999-99-99");

  formFilterMask.mask(formFilterTel);

  const validator = new JustValidate('.form-filter', {});

  validator
    .addField('#nameUser', [{
      rule: 'required',
      errorMessage: 'Введите ваше имя',
    }, ])
    .addField('#phoneUser', [{
        rule: 'required',
        errorMessage: 'Введите ваш телефон',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = formFilterTel.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => {

      let wrapperFilterForm =  document.querySelector(".wrapper-filter-form");

      wrapperFilterForm.querySelector(".filter-spinner").classList.add("active");

      wrapperFilterForm.querySelector(".wrapper-filter-form__item").classList.add("disabled");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            let wrapperFilterForm =  document.querySelector(".wrapper-filter-form");
            wrapperFilterForm.querySelector(".filter-spinner").classList.remove("active");
            wrapperFilterForm.querySelector(".filter-error").classList.remove("active");
            wrapperFilterForm.querySelector(".filter-okay").classList.add("active");
          } else {
            let wrapperFilterForm =  document.querySelector(".wrapper-filter-form");
            wrapperFilterForm.querySelector(".filter-spinner").classList.remove("active");
            wrapperFilterForm.querySelector(".filter-error").classList.add("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })
}

const allFormInit = document.querySelector(".form-all");

if (allFormInit) {

  const formAll = document.querySelector(".form-all");

  let formAllTel = formAll.querySelector("input[type='tel']");

  let formAllMask = new Inputmask("+7 (999) 999-99-99");

  formAllMask.mask(formAllTel);

  const validator = new JustValidate('.form-all', {});

  validator
    .addField('#formAllName', [{
      rule: 'required',
      errorMessage: 'Введите ваше имя',
    }, ])
    .addField('#formAlltel', [{
        rule: 'required',
        errorMessage: 'Введите ваш телефон',
      },
      {
        rule: 'function',
        validator: function () {
          const phone = formAllTel.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      },
    ])
    .onSuccess((event) => {

      let wrapperFormAll =  document.querySelector(".wrapper-form-all");

      wrapperFormAll.querySelector(".wrapper-form-all-spinner").classList.add("active");

      wrapperFormAll.querySelector(".wrapper-form-all__item").classList.add("disabled");

      let formData = new FormData(event.target);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            let wrapperFormAll =  document.querySelector(".wrapper-form-all");
            wrapperFormAll.querySelector(".wrapper-form-all-spinner").classList.remove("active");
            wrapperFormAll.querySelector(".wrapper-form-all-error").classList.remove("active");
            wrapperFormAll.querySelector(".wrapper-form-all-okay").classList.add("active");
          } else {
            let wrapperFormAll =  document.querySelector(".wrapper-form-all");
            wrapperFormAll.querySelector(".wrapper-form-all-spinner").classList.remove("active");
            wrapperFormAll.querySelector(".wrapper-form-all-error").classList.add("active");
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      event.target.reset();
    })
}