const getData = require('./getData')
const renderGoods = require('./renderGoods')
const { priceFilterMax, priceFilterMin } = require('./filters')

const priceBars = () => {
    const barMin = document.querySelector('#min')
    const barMax = document.querySelector('#max')
    let maxPrice = 0
    let minPrice = 0
    getData().then((data) => {
        data.forEach(item => {

            if (parseInt(maxPrice) <= parseInt(item.price)) {
                maxPrice = item.price
                pricesArray = [minPrice, maxPrice]
                console.log(maxPrice)
            }
        })
    })

    console.log(barMin, barMax, pricesArray)

    barMin.addEventListener('input', (event) => {
        pricesArray[0] = (event.target.value)

        console.log(pricesArray)

        if (pricesArray[0] === '') {
            pricesArray[0] = minPrice
            getData().then((data) => {
                renderGoods(data)
            })
        } else {
            getData().then((data) => {
                renderGoods(priceFilterMin(priceFilterMax(data, pricesArray), pricesArray))
            })
        }
    })

    barMax.addEventListener('input', (event) => {
        pricesArray[1] = (event.target.value)

        console.log(pricesArray)

        if (pricesArray[1] === '') {
            pricesArray[1] = maxPrice
            getData().then((data) => {
                renderGoods(data)
            })
        } else {
            getData().then((data) => {
                renderGoods(priceFilterMax(priceFilterMin(data, pricesArray), pricesArray))
            })
        }
    })
}

module.exports = priceBars