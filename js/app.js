const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Sitebar
const overlay = $('.overlay')
const btnSiteBar = $('.sitebar .sitebar-icon')
const showSiteBar = $('.sitebar__wrapper')
const closeSiteBar = $('.sitebar__header-close')

btnSiteBar.onclick = () => {
    showSiteBar.style.transform = "translateX(0)"
    Object.assign(overlay.style, {
        display: "block",
        'background-color': 'rgba(0, 0, 0, 0.6)'
    })
}

const closecloseSiteBarFunc = () => {
    Object.assign(showSiteBar.style, {
        transform: "translateX(100%)"
    })
    Object.assign(overlay.style, {
        display: "none",
        'background-color': 'rgba(0, 0, 0, 0)'
    })
}

closeSiteBar.onclick = (closecloseSiteBarFunc)
overlay.onclick = (closecloseSiteBarFunc)



//  Header show

const btnHeaderLeft = $('.header__demo-btn-left')
const btnHeaderRight = $('.header__demo-btn-right')

const headerShow = $('.header__show-item')
const headerShowActive = $('.header__show-item__active')

