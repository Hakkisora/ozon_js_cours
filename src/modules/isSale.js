const { saleFilter } = require('./filters')
const getData = require('./getData')
const renderGoods = require('./renderGoods')

const isSale = () => {
    const chackBoxInput = document.getElementById('discount-checkbox')
    const chackMark = document.querySelector('.filter-check_checkmark')

    chackBoxInput.addEventListener('change', () => {

        if (chackBoxInput.checked) {
            chackMark.classList.add('checked')
        } else {
            chackMark.classList.remove('checked')
        }

        getData().then((data) => {
            renderGoods(saleFilter(data, chackBoxInput.checked))
        })
    })
}

module.exports = isSale