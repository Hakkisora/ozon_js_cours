const getData = require('./getData')
const renderGoods = require('./renderGoods')
const { catalogFilter } = require('./filters')

const catalog = () => {
    const catalogBtn = document.querySelector('.catalog-button');
    const catalogWnd = document.querySelector('.catalog');
    const catalogWndItems = document.querySelectorAll('.catalog li');
    let clickFlag = false;

    catalogBtn.addEventListener('click', () => {
        clickFlag = !clickFlag

        if (clickFlag) {
            catalogWnd.style.display = 'block'
        } else {
            catalogWnd.style.display = ''
        }
    })

    catalogWndItems.forEach((item) => {

        const category = item.textContent
        item.addEventListener('click', () => {

            getData().then((data) => {
                renderGoods(catalogFilter(data, category))
            })
        })
    })
}

module.exports = catalog