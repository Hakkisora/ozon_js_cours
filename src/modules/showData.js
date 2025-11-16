const getData = require("./getData")
const postData = require('./postData')

const showData = () => {
    const cartBtn = document.getElementById('cart')

    getData().then((data) => {
        console.log(data)
    })
}

module.exports = showData