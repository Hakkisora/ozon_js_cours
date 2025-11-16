const getData = () => {
    return fetch('https://ozon-7cd58-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        })
}

module.exports = getData