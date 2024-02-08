// Табы на path

document.querySelectorAll(".tab-btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path

    document.querySelectorAll(".tab-content").forEach(function (tabContent) {
      tabContent.classList.remove("tab-content-active")
    })
    document.querySelector(`[data-target="${path}"]`).classList.add("tab-content-active")
  })
})