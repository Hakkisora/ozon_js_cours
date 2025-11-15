const cart = () => {
    const cartBtn = document.getElementById('cart')
    const cartWnd = document.querySelector('.cart')
    const cartClsBtn = cartWnd.querySelector('.cart-close')

    const openCart = () => {
        cartWnd.style.display = 'flex'
    }

    const closeCart = () => {
        cartWnd.style.display = ''
    }

    cartBtn.addEventListener('click', openCart)
    cartClsBtn.addEventListener('click', closeCart)

    console.dir(openCart)
}

module.exports = cart