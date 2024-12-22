export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
    // Calculate items price
    state.itemPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    );

    // Calculate shipping price
    state.shippingPrice = addDecimals(state.itemPrice > 100 ? 0 : 10);

    // Calculate tax price
    state.taxPrice = addDecimals(0.12 * state.itemPrice);

    // Calculate total price
    state.totalPrice = (
        Number(state.itemPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2);

    // Persist updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(state));
}