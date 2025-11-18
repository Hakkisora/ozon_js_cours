const renderCart = require("./renderCart")
const postData = require("./postData")

const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartWnd = document.querySelector('.cart')
    const cartClsBtn = cartWnd.querySelector('.cart-close')
    const goodsBox = document.querySelector('.goods')
    const totalSum = document.querySelector('.cart-total span')
    const cartWrapper = document.querySelector('.cart-wrapper')
    const sendBtn = document.querySelector('.cart-confirm')

    const openCart = () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []

        cartWnd.style.display = 'flex'

        renderCart(cart)
        totalSum.textContent = cart.reduce((sum, goodsItem) => {
            return sum + goodsItem.price
        }, 0)
    }

    const closeCart = () => {
        cartWnd.style.display = ''
    }

    cartBtn.addEventListener('click', openCart)
    cartClsBtn.addEventListener('click', closeCart)
    goodsBox.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
            const goodsItem = goods.find((item) => {
                return item.id === key
            })

            cart.push(goodsItem)

            localStorage.setItem('cart', JSON.stringify(cart))

            console.log(goodsItem)
        }
    })

    cartWrapper.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
            const card = event.target.closest('.card')
            const key = card.dataset.key
            const index = cart.findIndex((item) => {
                return item.id === key
            })

            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart))

            renderCart(cart)
            totalSum.textContent = cart.reduce((sum, goodsItem) => {
                return sum + goodsItem.price
            }, 0)
        }
    })

    sendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []

        postData(cart).then(() => {
            localStorage.removeItem('cart')

            renderCart([])
            totalSum.textContent = 0
        })
    })
}

module.exports = cart