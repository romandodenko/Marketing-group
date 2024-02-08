// Аккордеон 

const accordionItemsInit = document.querySelector('.vacancy-item');

const accordionItems = document.querySelectorAll('.vacancy-item');

if (accordionItemsInit) {

  if (accordionItems.length > 0) {
    accordionItems.forEach((item) => {
      const accordionHeader = item.querySelector('.accordion-init')

      accordionHeader.addEventListener('click', () => {

        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
          toggleItem(openItem)
        }
      })
    })
  }

  const toggleItem = (item) => {
    const accordionContent = item.querySelector('.vacancy-item__bottom')

    if (item.classList.contains('accordion-open')) {
      accordionContent.removeAttribute('style')
      item.classList.remove('accordion-open')
    } else {
      accordionContent.style.height = accordionContent.scrollHeight + 'px'
      item.classList.add('accordion-open')
    }
  }
  
}