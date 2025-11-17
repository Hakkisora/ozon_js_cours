const getData = require("./getData")
const renderGoods = require('./renderGoods')

const load = () => {
    getData().then((data) => {
        renderGoods(data)
    })
}

module.exports = load