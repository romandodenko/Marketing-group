// Табы на path

document.querySelectorAll(".tabber-btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll(".tabber-content").forEach(function (tabContent) {
      tabContent.classList.remove("active")
    })
    document.querySelector(`[data-target="${path}"]`).classList.add("active")
  })
})

document.querySelectorAll(".tabber-btn-2").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll(".tabber-content-2").forEach(function (tabContent) {
      tabContent.classList.remove("active")
    })
    document.querySelector(`[data-target="${path}"]`).classList.add("active")
  })
})


// ------------------------------------------------------------------------------------------------------------------------------------------------