const getData = require('./getData')
const renderGoods = require('./renderGoods')
const { searchFilter } = require('./filters')

const search = () => {
    const searchBarInput = document.querySelector(".search-wrapper_input")

    searchBarInput.addEventListener('input', (event) => {
        const text = event.target.value

        getData().then((data) => {
            renderGoods(searchFilter(data, text))
        })
    })
}

module.exports = search