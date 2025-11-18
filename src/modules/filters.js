const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

const catalogFilter = (goods, text) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === text
    })
}

const priceFilterMax = (goods, array) => {
    return goods.filter((goodsItem) => {
        return parseInt(goodsItem.price) <= parseInt(array[1])
    })
}

const priceFilterMin = (goods, array) => {
    return goods.filter((goodsItem) => {
        return parseInt(array[0]) <= parseInt(goodsItem.price)
    })
}

const saleFilter = (goods, state) => {

    if (state) {
        return goods.filter((goodsItem) => {
            return goodsItem.sale === state
        })
    } else {
        return goods
    }
}

module.exports = {
    searchFilter,
    catalogFilter,
    priceFilterMax,
    priceFilterMin,
    saleFilter
}