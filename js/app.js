const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const headerImg = $('.header')
const btnHeaderLeft = $('.header__demo-btn-left')
const btnHeaderRight = $('.header__demo-btn-right')
const headerImgList = [
    'http://images4.alphacoders.com/226/226194.jpg',
    'https://hoanghapc.vn/media/news/0510_hinh_nen_phong_canh3.jpg',
    'https://cuocsongaz.com/wp-content/uploads/2020/12/30-hinh-nen-macbook-4k-dep-tai-hinh-nen-imac-full-hd-dep-nhat-1.jpeg',
    'https://i.pinimg.com/originals/cf/0c/9c/cf0c9c685a02e9a3f51dedd8aaa5b949.png',
]

const arrHeader = headerImgList.length - 1

const btnSiteBar = $('.sitebar .sitebar-icon')
const showSiteBar = $('.sitebar__wrapper')
const closeSiteBar = $('.sitebar__header-close')

const btnSliderLeft = $('.slider__demo-btn-left')
const btnSliderRight = $('.slider__demo-btn-right')


function img(num) {
    for(let key in headerImgList) {
        if(key == num) {
            Object.assign(headerImg.style, {
                'background-image': `url(${headerImgList[key]})`,
                opacity: 0,
                transition: 'all linear 0.6s',
                opacity: 1,
            })
        }
    }
}


let index = 0;
let show = setInterval(() => {
    ++index;
    if(index > arrHeader) {
        index = 0
    }
    img(index);
}, 3000);


btnHeaderRight.onclick = () => {
    ++index;
    if(index > arrHeader) {
        index = 0
    }
    
    clearInterval(show);
    img(index);
    show = setInterval(() => {
        ++index;
        if(index > arrHeader) {
            index = 0
        }
        img(index);
    }, 3000);

}

btnHeaderLeft.onclick = () => {
    --index;
    if(index < 0) {
        index = arrHeader
    }
    clearInterval(show);
    img(index);
    show = setInterval(() => {
        ++index;
        if(index > arrHeader) {
            index = 0
        }
        img(index);
    }, 3000);
}



btnSiteBar.onclick = () => {
    showSiteBar.style.transform = "translateX(0)"
    // Object.assign(showSiteBar.style, {
    //     transform: "translateX(0)"
    // })
}

closeSiteBar.onclick = () => {
    Object.assign(showSiteBar.style, {
        transform: "translateX(100%)"
    })
}